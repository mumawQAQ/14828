// ==UserScript==
// @name        iwara 1-click filter
// @name:ja     iwara 1-click filter
// @name:zh-CN  iwara 一键过滤
// @name:zh-TW  iwara 一鍵過濾
// @description       Highlight and Blacklist with one click.
// @description:ja    ワンクリックで強調表示・非表示。
// @description:zh-CN 一键高亮显示和添加黑名单。
// @description:zh-TW 一鍵高亮顯示和添加黑名單。
// @version     2.26
// @namespace   none
// @match       https://*.iwara.tv/*
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @run-at      document-start
// @noframes
// ==/UserScript==

const init_lists = [
  {name: 'excellent', title: 'Excellent', alpha: 1, color: '#fcf,#ffc,#cff,#fcf'},
  {name: 'highlight', title: 'Highlight', alpha: 1, color: '#dfd'},
  {name: 'blacklist', title: 'Blacklist', alpha: 0, color: '#ccc'},
];

const init_colors = [
  {count: '100', color: '#FFFF7F'},
  {count: '500', color: '#BFFF7F'},
  {count: '10k', color: '#BFFF7F'},
  {count: '2.0%', color: '#7FFFFF'},
];

const sort_options = [
  {id: 1, mode: 'Likes', icon: 'glyphicon glyphicon-heart'},
  {id: 2, mode: 'Views', icon: 'glyphicon glyphicon-eye-open'},
  {id: 3, mode: 'Popular', icon: 'glyphicon glyphicon-fire', title: 'Percentage of Likes/Views.'},
  {id: 4, mode: 'Rating', icon: 'glyphicon glyphicon-star', title: 'Score based on Likes and Views.'},
];

const filter = (() => {
  let filter_lists, filter_menu_enable, filter_menu_active = false;
  return {
    init: async (is_load) => {
      return new Promise(async resolve => {
        let is_init;
        filter_menu_enable = await GM_getValue('filter_menu_enable', true);
        if (is_load) {
          is_init = await GM_getValue('init', false);
          if (!is_init) {
            filter_lists = Array.from(init_lists);
            let lists_name = [];
            await init_lists.forEach(async list => {
              lists_name.push(list.name);
              if (typeof list.title !== 'undefined') await GM_setValue(list.name + '_title', list.title);
              if (typeof list.color !== 'undefined') await GM_setValue(list.name + '_color', list.color);
              if (typeof list.alpha !== 'undefined') await GM_setValue(list.name + '_alpha', list.alpha);
            });
            await GM_setValue('lists_name', lists_name);
            await GM_setValue('init', true);
            resolve();
          }
        }
        if (!is_load || is_init) {
          filter_lists = [];
          let lists_name = await GM_getValue('lists_name', []);
          await lists_name.forEach(async name => {
            let title = await GM_getValue(name + '_title', 'new filter');
            let color = await GM_getValue(name + '_color', '#ffd');
            let alpha = await GM_getValue(name + '_alpha', 1);
            filter_lists.push({name: name, title: title, color: color, alpha: alpha});
          });
          resolve();
        }
      });
    },
    load: async () => {
      await filter.init(true);
      filter.sidebar.init();
      filter.menu.init();
      filter.style();
      filter.rebuild();
      for (let list of filter_lists) filter.apply(list);
    },
    reload: () => {
      filter.menu.init();
      filter.rebuild();
      for (let list of filter_lists) filter.apply(list);
    },
    style: async () => {
      let style = document.getElementById('css_filter') || element.createTo(document.head, 'style', null, null, 'css_filter');
      let selector = [
        '.view-solr-lists .views-column',
        '.view-videos-2 .views-column',
        '.view-search .views-column',
        '.node-playlist .field-item'
      ];
      let css = '\n';
      css += '.views-row.filtered .views-column {float: unset; display: inline-block; vertical-align: top;}\n';
      filter_lists.forEach(async list => {
        css += '.filter_' + list.name + ' > .node.node-teaser,';
        css += '.filter_' + list.name + ' > .node.node-wide_teaser';
        css += ' {' + ((list.color.split(',').length > 1) ? 'background: linear-gradient(75deg, ' + list.color + ')' : 'background-color: ' + list.color) + ';}\n';
        if (list.alpha == 0) css += selector.map(n => n + '.filter_' + list.name).join(', ') + ' {display: none;}\n';
        else if (list.alpha < 1) css += selector.map(n => n + '.filter_' + list.name + ' > .node').join(', ') + ' {opacity: ' + list.alpha + ';}\n';
      });
      style.innerHTML = css;
    },
    rebuild: () => {
      let selector = [
        '.view-solr-lists .views-responsive-grid',
        '.view-videos-2 .views-responsive-grid',
        '.view-subscriptions .views-responsive-grid',
        '.view-liked .views-responsive-grid'
      ];
      document.querySelectorAll(selector.join(',')).forEach(grid => {
        let rows = grid.querySelectorAll('.views-row:not(.filtered)');
        if (rows.length > 0) {
          let row = element.createTo(grid, 'div', null, null, null, null, 'views-row row filtered');
          grid.querySelectorAll('.views-column').forEach(column => {
            column.classList.remove('views-column-first', 'views-column-last', 'views-column-1', 'views-column-2', 'views-column-3', 'views-column-4');
            row.appendChild(column);
          });
          rows.forEach(row => row.remove());
        }
      });
    },
    apply: async (list, target) => {
      let list_checked = await GM_getValue(list.name + '_checked', true);
      let list_username = await GM_getValue(list.name + '_list', []);
      let selector = [
        '.views-row > .views-column',
        '.views-row > .col-sm-3.col-xs-6',
        '.field-type-node-reference > .field-items > .field-item',
      ];
      document.querySelectorAll(selector.join(', ')).forEach(async column => {
        let username = column.querySelector('.username');
        if (username && (!target || username.innerHTML == target)) {
          await column.classList.remove('filter_' + list.name);
          if (list_checked && (username.innerHTML.match(/\.\.\.$/) ? list_username.find(v => v.match(new RegExp('^' + username.innerHTML.replace(/\.\.\.$/, '.+$')))) : list_username.includes(username.innerHTML))) {
            column.classList.add('filter_' + list.name);
          }
        }
      });
    },
    menu: {
      init: async () => {
        let selector = [
          '.views-row:not(.filtered) > .views-column',
          '.views-row:not(.filtered) > .col-sm-3.col-xs-6',
          '.field-type-node-reference > .field-items > .field-item',
          '.page-node .node-info .submitted',
        ];
        document.querySelectorAll(selector.join(', ')).forEach(column => {
          let username = column.querySelector('.username');
          if (username) {
            let wait_popup;
            username.onmouseover = (e) => {
              if (!e.buttons) {
                username.focus();
                if (filter_lists.length > 0 && filter_menu_enable) {
                  wait_popup = setTimeout(() => filter.menu.show(username), 500);
                }
              }
            };
            username.onmouseleave = () => {
              username.blur();
              clearTimeout(wait_popup);
            };
            username.oncontextmenu = (e) => {
              if (filter_lists.length > 0 && !filter_menu_enable && !filter_menu_active) {
                e.preventDefault();
                filter.menu.show(username);
              }
            };
          }
        });
      },
      update: async (checked) => {
        filter_menu_enable = checked;
        await GM_setValue('filter_menu_enable', checked);
      },
      show: (username) => {
        if (filter_menu_active) return;
        let popup_pos_x = username.getBoundingClientRect().left + (window.pageXOffset || document.documentElement.scrollLeft) - 20;
        let popup_pos_y = username.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) + username.getBoundingClientRect().height;
        let filter_menu = element.createTo(document.body, 'div', 'position: absolute; z-index: 100; padding: 0px 20px 20px 20px; left: ' + popup_pos_x + 'px; top: ' + popup_pos_y + 'px; outline: none;', null, 'filter_popup_menu');
        let filter_menu_items = element.createTo(filter_menu, 'div', 'background-color: #f3f4f5; border: 1px solid #ccc; padding: 8px 0px; border-radius: 4px; box-shadow: 0px 2px 8px #0003;');
        filter_lists.forEach(async list => {
          let list_username = await GM_getValue(list.name + '_list', []);
          let list_check = (list_username.includes(username.innerHTML) ? '<i class="glyphicon glyphicon-ok"></i>' : '<i class="glyphicon glyphicon-ok invisible"></i>');
          let list_title = '<span style="padding: 0px 16px 0px 8px;">' + (list.title) + '</span>';
          let menu_item = element.createTo(filter_menu_items, 'div', 'padding: 4px 8px;', list_check + list_title);
          menu_item.onmouseover = () => {
            menu_item.style.backgroundColor = '#dee1e3';
          };
          menu_item.onmouseleave = () => {
            menu_item.style.backgroundColor = null;
          };
          menu_item.onclick = () => {
            filter.edit.add(username.innerHTML, list.name);
            filter.menu.close(filter_menu);
          };
        });
        let wait_popup_close;
        filter_menu.onmouseover = () => {
          filter_menu_active = true;
          clearTimeout(wait_popup_close);
        };
        filter_menu.onmouseleave = e => {
          if (e.relatedTarget !== username) {
            filter_menu_active = false;
            wait_popup_close = setTimeout(() => filter.menu.close(filter_menu), 250);
          }
        };
        username.onmouseout = e => {
          if (e.relatedTarget && e.relatedTarget.parentNode !== filter_menu) {
            filter_menu_active = false;
            wait_popup_close = setTimeout(() => filter.menu.close(filter_menu), 250);
          }
        };
        filter_menu.tabIndex = -1;
        filter_menu.focus();
        filter_menu.onkeypress = e => {
          if (e.key >= 1 && e.key <= filter_lists.length && e.key <= 9) {
            filter.edit.add(username.innerHTML, filter_lists[e.key - 1].name);
            filter.menu.close(filter_menu);
          }
        };
        filter_menu_active = true;
      },
      close: (filter_menu) => {
        filter_menu.remove();
        filter_menu_active = false;
      }
    },
    edit: {
      add: (username, listname) => {
        filter_lists.forEach(async list => {
          let username_list = await GM_getValue(list.name + '_list', []);
          let is_del = username_list.includes(username);
          let is_add = !is_del && list.name == listname;
          if (is_add || is_del) {
            if (is_add) username_list.push(username);
            if (is_del) username_list.splice(username_list.indexOf(username), 1);
            await GM_setValue(list.name + '_list', username_list);
            filter.apply(list, username);
          }
        });
      },
      new: async () => {
        let name = 'custom';
        let num = 0;
        let lists_name = await GM_getValue('lists_name', []);
        let name_exist = true;
        while (name_exist) {
          num++;
          if (lists_name.indexOf(name + num) == -1) {
            name_exist = false;
            lists_name.push(name + num);
            await GM_setValue('lists_name', lists_name);
            await filter.init();
            filter.sidebar.update();
            filter.style();
          }
        }
      },
      del: async (list) => {
        await GM_deleteValue(list.name + '_checked');
        await GM_deleteValue(list.name + '_title');
        await GM_deleteValue(list.name + '_color');
        await GM_deleteValue(list.name + '_alpha');
        await GM_deleteValue(list.name + '_list');
        let lists_name = await GM_getValue('lists_name', []);
        lists_name.filter((name, i) => {
          if (name == list.name) lists_name.splice(i, 1);
        });
        await GM_setValue('lists_name', lists_name);
        await filter.init();
        filter.sidebar.update();
        filter.style();
        filter.apply(list);
      },
      move: async (list, offset) => {
        let lists_name = await GM_getValue('lists_name', []);
        let pos = lists_name.indexOf(list.name);
        if (offset < 0 && pos > 0 || offset > 0 && pos < lists_name.length - 1) {
          lists_name.splice(pos, 1);
          lists_name.splice(pos + offset, 0, list.name);
          await GM_setValue('lists_name', lists_name);
          await filter.init();
          filter.sidebar.update();
        }
      }
    },
    sidebar: {
      init: () => {
        let sidebar = document.querySelector('body.page-videos .sidebar .region-sidebar, body.page-videos-3 .sidebar .region-sidebar, body.page-images .sidebar .region-sidebar, body.page-search .sidebar .region-sidebar');
        if (sidebar) {
          let sidebar_first = sidebar.querySelector('.block-facetapi') || sidebar.querySelector('#block-views-exp-search-page') && sidebar.querySelector('#block-views-exp-search-page').nextSibling || sidebar.firstChild;
          let filter_block = element.create('div', null, '<h2>Filter by user:</h2><div class="item-list"><ul></ul></div>', 'filter_sidebar', null, 'block block-facetapi');
          sidebar.insertBefore(filter_block, sidebar_first);
          let btn_div = element.createTo(filter_block, 'div', null, null, null, null, 'item-list');
          element.createTo(btn_div, 'a', null, '<span class="glyphicon glyphicon-plus" style="margin: 5px;"></span>', null, 'Add a new filter').onclick = () => filter.edit.new();
          element.createTo(btn_div, 'a', null, '<span class="glyphicon glyphicon-cog" style="margin: 5px;"></span>Settings').onclick = () => dialog.settings();
          filter.sidebar.update();
        }
      },
      update: async () => {
        let items_ul = document.querySelector('#filter_sidebar ul');
        items_ul.innerHTML = null;
        await filter_lists.forEach(async list => {
          let item_li = element.createTo(items_ul, 'li');
          let item_label = element.createTo(item_li, 'label', 'margin: unset; min-width: 120px;');
          let item_check = element.createTo(item_label, 'input', 'width: 16px; height: 16px; margin: 5px; vertical-align: middle;', 'checkbox');
          let list_checked = await GM_getValue(list.name + '_checked', true);
          if (list_checked) item_check.setAttribute('checked', '');
          item_label.onchange = async () => {
            await GM_setValue(list.name + '_checked', item_check.checked);
            filter.apply(list);
          };
          element.createTo(item_label, 'a', null, list.title);
          element.createTo(item_li, 'label', 'margin: unset;', '<a>Edit</a>').onclick = () => dialog.filter(list);
        });
      }
    }
  };
})();

const colors = (() => {
  let color_enable, color_settings, has_ratio, has_score;
  return {
    load: async () => {
      color_enable = await GM_getValue('color_enable', false);
      if (color_enable) {
        color_settings = await GM_getValue('color_settings', []);
        if (color_settings.length == 0) color_settings = Array.from(init_colors);
        colors.style();
        colors.apply();
        if (!has_ratio) element.remove(document.querySelectorAll('.right-icon.ratio-icon'));
        if (!has_score) element.remove(document.querySelectorAll('.right-icon.score-icon'));
      }
    },
    reload: () => {
      if (color_enable) colors.apply(true);
    },
    update: async (checked) => {
      await GM_setValue('color_enable', checked);
      if (checked) {
        colors.load();
      } else {
        element.remove(document.querySelectorAll('#css_colors, .right-icon.ratio-icon, .right-icon.score-icon'));
      }
    },
    style: () => {
      let style = document.getElementById('css_colors') || element.createTo(document.head, 'style', null, null, 'css_colors');
      let css = '\n';
      has_ratio = false;
      has_score = false;
      color_settings.forEach(async v => {
        if (validate.value.count(v.count)) {
          if (v.count.match(/^\d+$/)) {
            css += '.likes-' + v.count + ' .right-icon.likes-icon {color: ' + v.color + ';}\n';
          } else if (v.count.match(/^\d+k$/i)) {
            css += '.views-' + v.count + ' .left-icon.likes-icon {color: ' + v.color + ';}\n';
          } else if (v.count.match(/^(\d{1,2}(\.\d+)?|100)%$/)) {
            css += '.ratio-' + parseFloat(v.count) * 100 + ' .right-icon.ratio-icon {color: ' + v.color + ';}\n';
            has_ratio = true;
          } else if (v.count.match(/^\d\.\d+$/)) {
            css += '.score-' + parseFloat(v.count) * 100 + ' .right-icon.score-icon {color: ' + v.color + ';}\n';
            has_score = true;
          }
        }
      });
      style.innerHTML = css;
    },
    apply: (reload) => {
      let selector = !reload ? [
        '.node.node-teaser',
        '.node.node-wide_teaser',
        '.node.node-sidebar_teaser',
        '.node.node-video',
        '.node.node-image',
      ] : [
        '.node.node-teaser:not(.colored)'
      ];
      let columns = document.querySelectorAll(selector.join(','));
      columns.forEach(column => {
        column.classList.add('colored');
        let views_icon = column.querySelector('.left-icon.likes-icon');
        let likes_icon = column.querySelector('.right-icon.likes-icon');
        if (!views_icon && !likes_icon) {
          let video_info = column.querySelector('.video-info, .node-info > .node-views');
          if (video_info) {
            let views_icon_i = video_info.querySelector('.glyphicon.glyphicon-eye-open');
            let views_icon_v = views_icon_i ? views_icon_i.nextSibling : null;
            if (views_icon_i && views_icon_v) {
              views_icon = element.createTo(video_info, 'div', null, null, null, null, 'left-icon likes-icon');
              views_icon.appendChild(views_icon_i);
              views_icon.appendChild(views_icon_v);
            }
            let likes_icon_i = video_info.querySelector('.glyphicon.glyphicon-heart');
            let likes_icon_v = likes_icon_i ? likes_icon_i.nextSibling : null;
            if (likes_icon_i && likes_icon_v) {
              likes_icon = element.createTo(video_info, 'div', null, null, null, null, 'right-icon likes-icon');
              likes_icon.appendChild(likes_icon_i);
              likes_icon.appendChild(likes_icon_v);
            }
          }
        }
        let views_count = views_icon ? views_icon.innerText.trim() : '0';
        views_count = views_count.match(/k/i) ? views_count.replace(/k/i, '') * 1000 : views_count.replace(/,/g, '') * 1;
        color_settings.filter(v => v.count.match(/^\d+k$/i)).sort((a, b) => parseInt(b.count) - parseInt(a.count)).find(v => {
          if (views_count >= v.count.replace(/k/i, '') * 1000) {
            column.classList.add('views-' + v.count);
            return true;
          }
        });
        let likes_count = likes_icon ? likes_icon.innerText.trim() : '0';
        color_settings.filter(v => v.count.match(/^\d+$/)).sort((a, b) => parseInt(b.count) - parseInt(a.count)).find(v => {
          if (likes_count >= v.count * 1) {
            column.classList.add('likes-' + v.count);
            return true;
          }
        });
        if (!column.classList.contains('node-sidebar_teaser')) {
          if (has_ratio) {
            let ratio = views_count > 0 ? likes_count / views_count * 100 : 0;
            if (ratio > 0) {
              if (!column.querySelector('.right-icon.ratio-icon')) element.createTo(column.querySelector('.icon-bg, .video-info, .node-info > .node-views'), 'div', null, '<i class="glyphicon" style="width: 0px; visibility: hidden;">&nbsp;</i>' + ratio.toFixed(2) + '%', null, null, 'right-icon ratio-icon');
              color_settings.filter(v => v.count.match(/^\d+(\.\d+)?%$/)).sort((a, b) => parseFloat(b.count) - parseFloat(a.count)).find(v => {
                if (ratio >= parseFloat(v.count)) {
                  column.classList.add('ratio-' + parseFloat(v.count) * 100);
                  return true;
                }
              });
            }
          }
          if (has_score) {
            let score = views_count > 0 ? likes_count / Math.sqrt(views_count) / 5 : 0;
            if (score > 0) {
              if (!column.querySelector('.right-icon.score-icon')) element.createTo(column.querySelector('.icon-bg, .video-info, .node-info > .node-views'), 'div', null, '<i class="glyphicon" style="width: 0px; visibility: hidden;">&nbsp;</i>' + score.toFixed(2), null, null, 'right-icon score-icon');
              color_settings.filter(v => v.count.match(/^\d+\.\d+$/)).sort((a, b) => parseFloat(b.count) - parseFloat(a.count)).find(v => {
                if (score >= parseFloat(v.count)) {
                  column.classList.add('score-' + parseFloat(v.count) * 100);
                  return true;
                }
              });
            }
          }
        }
      });
    }
  };
})();

const sorting = (() => {
  let sort_enable, sort_default, sort_applied, has_default, is_likes_page, is_views_page;
  return {
    load: async () => {
      sort_enable = await GM_getValue('sort_enable', true);
      if (sort_enable) {
        sort_default = await GM_getValue('sort_default', 0);
        is_likes_page = document.location.href.indexOf('sort=likes') >= 0;
        is_views_page = document.location.href.indexOf('sort=views') >= 0;
        has_default = document.body.classList.contains('page-videos') || document.body.classList.contains('page-videos-3') || document.body.classList.contains('page-images');
        let selector = [
          '.page-user .view-videos > .view-content',
          '.page-user .view-images > .view-content',
          '.page-users .view-videos > .view-content',
          '.page-users .view-images > .view-content',
          '.page-videos .view-solr-lists > .view-content',
          '.page-videos-3 .view-videos-2 > .view-content',
          '.page-images .view-solr-lists > .view-content',
          '.page-search .view-search > .view-content',
          '.page-user-liked .view-liked > .view-content',
          '.page-subscriptions .view-subscriptions > .view-content',
          '.page-node .node.node-playlist > .content'
        ];
        let contents = document.querySelectorAll(selector.join(','));
        if (contents.length > 0) {
          let menu_ul = document.querySelector('header .sub-menu ul.list-inline');
          if (menu_ul && !document.body.classList.value.match(/page-(user-\d+|search)(\s|$)|node-type-playlist/)) {
            let content = contents[0].closest('.col-sm-9') || contents[0].closest('.container');
            let extra_sort = element.createTo(menu_ul, 'li', null, null, null, null, 'extra-sort');
            extra_sort.appendChild(sorting.button.draw(content));
          } else {
            contents.forEach(content => {
              let extra_sort = element.create('div', 'position: relative;', null, null, null, 'extra-sort');
              let extra_sort_child = element.createTo(extra_sort, 'div', 'position: absolute; right: 0; bottom: 0; margin: 5px;');
              extra_sort_child.appendChild(sorting.button.draw(content));
              content.parentNode.insertBefore(extra_sort, content);
            });
          }
        }
      }
    },
    reload: () => {
      if (sort_enable) {
        let selector = [
          '.region:not(.region-sidebar) .view-solr-lists > .view-content',
          '.region:not(.region-sidebar) .view-videos > .view-content',
          '.region:not(.region-sidebar) .view-images > .view-content'
        ];
        let contents = document.querySelectorAll(selector.join(','));
        contents.forEach(content => sorting.apply(content));
      }
    },
    update: async (checked) => {
      await GM_setValue('sort_enable', checked);
      if (checked) {
        sorting.load();
      } else {
        await GM_setValue('sort_default', 0);
        element.remove(document.querySelectorAll('.extra-sort'));
      }
    },
    button: {
      draw: (content) => {
        let btn_group = element.create('div', 'display: flex; width: 100px;', null, null, null, 'btn-group');
        let option = has_default ? sort_options.find(option => option.id == sort_default) : null;
        sorting.button.redraw(btn_group, option, content);
        if (option) sorting.apply(content, option.mode);
        return btn_group;
      },
      redraw: (btn_group, option, content) => {
        btn_group.innerHTML = null;
        let option_button, reset_button;
        if (!option) {
          option_button = element.createTo(btn_group, 'button', 'padding: 4px 8px; flex-grow: 1; text-align: left;', 'Sort Options <span class="fui-triangle-down-small"></span>', null, null, 'btn btn-sm btn-primary dropdown-toggle');
        } else {
          if (has_default) {
            let set_default_label = element.createTo(btn_group, 'label', 'margin: 0 -4px 0 0; padding: 4px;', null, null, 'Set as default', 'btn btn-sm btn-primary');
            let set_default_check = element.createTo(set_default_label, 'input', 'width: 14px; height: 14px; margin: unset; vertical-align: middle;', 'checkbox');
            if (option.id == sort_default) set_default_check.setAttribute('checked', '');
            set_default_label.onchange = () => {
              sort_default = set_default_check.checked ? option.id : 0;
              GM_setValue('sort_default', sort_default);
            };
          }
          option_button = element.createTo(btn_group, 'button', 'padding: 4px 8px; flex-grow: 1; text-align: left;', option.mode, null, null, 'btn btn-sm btn-primary');
          reset_button = element.createTo(btn_group, 'button', 'padding: 4px;', '<span class="fui-cross"></span>', null, 'Reset', 'btn btn-sm btn-danger dropdown-toggle');
          reset_button.onclick = () => {
            sorting.button.redraw(btn_group, null, content);
            sorting.apply(content, 'Reset');
          };
        }
        option_button.onclick = () => {
          btn_group.classList.toggle('open');
          btn_list.focus();
        };
        let btn_list = element.createTo(btn_group, 'ul', 'min-width: 100%; outline: none; font-size: 10pt;', null, null, null, 'dropdown-menu');
        btn_list.tabIndex = -1;
        btn_list.onblur = () => btn_group.classList.toggle('open');
        btn_list.onkeypress = e => {
          if (e.key >= 1 && e.key <= sort_options.length && e.key <= 9) {
            btn_list.blur();
            sorting.apply(content, sort_options[e.key - 1].mode);
          }
        };
        sort_options.forEach(option => {
          let list_li = element.createTo(btn_list, 'li', null, '<a style="padding: 4px 16px;"><span class="' + option.icon + '"></span> ' + option.mode + '</a>', null, option.title);
          list_li.onclick = () => {
            btn_list.blur();
            sorting.button.redraw(btn_group, option, content);
            sorting.apply(content, option.mode);
          };
        });
      }
    },
    apply: (content, mode) => {
      if (mode) sort_applied = (mode == 'Reset') ? null : mode;
      if (sort_applied || mode == 'Reset') {
        let selector = mode ? [
          '.views-row > .views-column',
          '.views-row > .col-sm-3.col-xs-6',
          '.field-type-node-reference > .field-items > .field-item'
        ] : [
          '.views-row:not(.sorted) > .views-column',
          '.views-row:not(.sorted) > .col-sm-3.col-xs-6',
        ];
        let columns = Array.from(content.querySelectorAll(selector.join(','))).sort((a, b) => {
          if (mode != 'Reset' || is_likes_page || is_views_page) {
            let a_like = a.querySelector('.right-icon.likes-icon');
            let b_like = b.querySelector('.right-icon.likes-icon');
            let a_view = a.querySelector('.left-icon.likes-icon');
            let b_view = b.querySelector('.left-icon.likes-icon');
            let a_info = (!a_like && !a_view) ? a.querySelector('.video-info') : null;
            let b_info = (!b_like && !b_view) ? b.querySelector('.video-info') : null;
            let a_like_count = a_like ? a_like.innerText.trim() : a_info ? a_info.innerHTML.replace(/,/g, '').match(/\d+/g) [1] : '0';
            let b_like_count = b_like ? b_like.innerText.trim() : b_info ? b_info.innerHTML.replace(/,/g, '').match(/\d+/g) [1] : '0';
            let a_view_count = a_view ? a_view.innerText.trim() : a_info ? a_info.innerHTML.replace(/,/g, '').match(/\d+/g) [0] : '0';
            let b_view_count = b_view ? b_view.innerText.trim() : b_info ? b_info.innerHTML.replace(/,/g, '').match(/\d+/g) [0] : '0';
            a_view_count = a_view_count.match(/k/i) ? a_view_count.replace(/k/i, '') * 1000 : a_view_count.replace(/,/g, '') * 1;
            b_view_count = b_view_count.match(/k/i) ? b_view_count.replace(/k/i, '') * 1000 : b_view_count.replace(/,/g, '') * 1;
            if (sort_applied == 'Likes' || mode == 'Reset' && is_likes_page) return b_like_count - a_like_count;
            if (sort_applied == 'Views' || mode == 'Reset' && is_views_page) return b_view_count - a_view_count;
            if (sort_applied == 'Popular') return (b_view_count > 0 ? b_like_count / b_view_count : 0) - (a_view_count > 0 ? a_like_count / a_view_count : 0);
            if (sort_applied == 'Rating') return (b_view_count > 0 ? b_like_count / Math.sqrt(b_view_count) : 0) - (a_view_count > 0 ? a_like_count / Math.sqrt(a_view_count) : 0);
          } else {
            let a_id = a.firstElementChild.id.replace(/node-/, '');
            let b_id = b.firstElementChild.id.replace(/node-/, '');
            return b_id - a_id;
          }
        });
        let rows = content.querySelectorAll(mode ? '.views-row, .field-type-node-reference > .field-items' : '.views-row:not(.sorted)');
        let rows_child = [];
        let rows_index = 0;
        let child_count = 0;
        rows.forEach(row => rows_child.push(row.childElementCount));
        columns.forEach(column => {
          rows[rows_index].appendChild(column);
          child_count++;
          if (child_count >= 4 && child_count >= rows_child[rows_index]) {
            rows[rows_index].classList.add('sorted');
            child_count = 0;
            rows_index++;
          }
        });
      }
    }
  };
})();

const pager = (() => {
  let pager_enable;
  return {
    load: async () => {
      pager_enable = await GM_getValue('pager_enable', false);
      if (pager_enable) {
        let pager_proto = document.querySelector('.region-content .view > .item-list > ul.pager');
        if (pager_proto) {
          let pager_extra = pager_proto.parentNode.cloneNode();
          let pager_clone = pager_proto.cloneNode(true);
          pager_clone.style.cssText = 'padding: unset !important; margin: 5px;';
          pager_extra.classList.add('extra-pager');
          pager_extra.appendChild(pager_clone);
          pager_proto.parentNode.parentNode.insertBefore(pager_extra, pager_proto.parentNode.parentNode.firstChild);
        }
      }
    },
    update: async (checked) => {
      await GM_setValue('pager_enable', checked);
      if (checked) {
        pager.load();
      } else {
        element.remove(document.querySelector('.extra-pager'));
      }
    }
  };
})();

const style = (() => {
  let style_enable;
  return {
    load: async () => {
      style_enable = await GM_getValue('style_enable', true);
      style.reload();
    },
    reload: () => {
      if (style_enable) {
        let style_css = document.querySelector('#css_custom');
        if (style_css) {
          document.head.appendChild(style_css);
        } else {
          element.createTo(document.head, 'style', null, custom_css(), 'css_custom');
        }
      }
    },
    update: async (checked) => {
      await GM_setValue('style_enable', checked);
      if (checked) {
        style.load();
      } else {
        element.remove(document.querySelector('#css_custom'));
      }
    }
  };
})();

const dialog = (() => {
  let edit_wapper, edit_dialog, dialog_title, dialog_contents, dialog_settings, dialog_buttons, button_save, button_cancel;
  return {
    load: () => {
      let user_links = document.querySelector('#user-links');
      if (user_links) {
        let search_link = user_links.querySelector('.search-link');
        if (search_link) {
          search_link.classList.add('btn', 'btn-sm', 'btn-primary', 'search-link-fix');
          search_link.classList.remove('search-link');
        }
        let filter_link = element.create('a', null, '<span class="glyphicon glyphicon-filter"></span>', null, 'Filter Settings', 'btn btn-sm btn-primary filter-link');
        filter_link.onclick = () => dialog.settings();
        user_links.insertBefore(filter_link, user_links.firstElementChild.nextSibling);
        user_links.insertBefore(document.createTextNode(' '), user_links.firstElementChild.nextSibling);
      }
    },
    main: () => {
      edit_wapper = element.createTo(document.body, 'div', 'z-index: 10; position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #0006', null, 'filter_edit_wapper');
      let edit_wapper_click;
      edit_wapper.onmousedown = e => {
        edit_wapper_click = e.target.id == 'filter_edit_wapper';
      };
      edit_wapper.onmouseup = e => {
        if (edit_wapper_click && e.target.id == 'filter_edit_wapper') edit_wapper.remove();
      };
      edit_dialog = element.createTo(edit_wapper, 'div', 'display: block; width: -moz-fit-content; width: fit-content; margin: 10% auto 0px; background-color: #eee; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0px 0px 10px;');
      dialog_title = element.createTo(edit_dialog, 'h4', 'margin: 10px; border: none;');
      dialog_contents = element.createTo(edit_dialog, 'div', 'margin: 10px;');
      dialog_settings = element.createTo(edit_dialog, 'div', 'margin: 10px;');
      dialog_buttons = element.createTo(edit_dialog, 'div', 'margin: 10px; text-align: right;');
      button_cancel = element.createTo(dialog_buttons, 'button', 'margin-right: 10px;', 'Cancel');
      button_cancel.onclick = () => edit_wapper.remove();
      button_save = element.createTo(dialog_buttons, 'button', 'margin-right: 10px;', 'Save');
    },
    filter: async (list) => {
      dialog.main();
      element.createTo(dialog_title, 'span', 'margin-right: 5px; vertical-align: middle;', 'Edit:');
      let title_value = await GM_getValue(list.name + '_title', '');
      let set_title_label = element.createTo(dialog_title, 'label', 'width: 50%; margin: 0px 5px; line-height: unset; vertical-align: middle;');
      let set_title_input = element.createTo(set_title_label, 'input', 'width: 100%; height: 24px;', title_value);
      element.createTo(dialog_title, 'button', 'font-size: 10pt; margin-left: 5px; vertical-align: middle;', '<i class="glyphicon glyphicon-chevron-up"></i>').onclick = () => filter.edit.move(list, -1);
      element.createTo(dialog_title, 'button', 'font-size: 10pt; margin-left: 5px; vertical-align: middle;', '<i class="glyphicon glyphicon-chevron-down"></i>').onclick = () => filter.edit.move(list, 1);
      let set_username_list = element.createTo(dialog_contents, 'textarea', 'width: 300px; height: 240px; resize: none; display: block;');
      let username_list = await GM_getValue(list.name + '_list', []);
      if (username_list.length > 0) set_username_list.value = username_list.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1).join('\n');
      let color_value = await GM_getValue(list.name + '_color', '#ffd');
      let set_color_label = element.createTo(dialog_settings, 'label', 'width: 50%; margin: 0px; text-align: right;', 'Color:');
      let set_color_input = element.createTo(set_color_label, 'input', 'width: 80px; height: 24px; margin: 0px 10px;', color_value, null, 'Format: <#f00> or <#ff0000> or <Red>\nColorful: <#fcf,#ffc,#cff,#fcf>');
      set_color_input.oninput = () => validate.color(set_color_input);
      let alpha_value = await GM_getValue(list.name + '_alpha', 1);
      let set_alpha_label = element.createTo(dialog_settings, 'label', 'width: 50%; margin: 0px; text-align: right;', 'Opacity:');
      let set_alpha_input = element.createTo(set_alpha_label, 'input', 'width: 60px; height: 24px; margin: 0px 10px;', alpha_value, null, 'Range: 0.00 ~ 1.00\nSet to 0 will be hidden, same as blacklist.');
      set_alpha_input.oninput = () => validate.alpha(set_alpha_input);
      let delete_label = element.create('label', 'margin: 0px; text-align: left; float: left;');
      let delete_button = element.createTo(delete_label, 'button', 'margin-left: 10px; line-height: 1; padding: 2px 4px;', 'Delete');
      dialog_buttons.insertBefore(delete_label, dialog_buttons.firstChild);
      delete_button.onclick = () => {
        let confirm_return = confirm('Delete filter?');
        if (confirm_return) {
          filter.edit.del(list);
          edit_wapper.remove();
        }
      };
      button_save.onclick = async () => {
        let title = set_title_input.value.trim();
        let color = set_color_input.value.trim() !== '' ? set_color_input.value.replace(/\s/g, '') : '#ffd';
        let alpha = set_alpha_input.value.trim() !== '' ? set_alpha_input.value.trim() * 1 : 1;
        if (validate.color(set_color_input) && validate.alpha(set_alpha_input)) {
          if (title !== title_value) await GM_setValue(list.name + '_title', title);
          if (color !== color_value) await GM_setValue(list.name + '_color', color);
          if (alpha !== alpha_value) await GM_setValue(list.name + '_alpha', alpha);
          username_list = set_username_list.value.split('\n').map(n => n.replace(/^[ \t]+|[ \t]+$/g, '')).filter((v, i, a) => v && a.indexOf(v) == i);
          await GM_setValue(list.name + '_list', username_list);
          await filter.init();
          edit_wapper.remove();
          if (set_title_input.value !== list.title) filter.sidebar.update();
          filter.style();
          filter.apply(list);
        }
      };
    },
    settings: async () => {
      dialog.main();
      element.createTo(dialog_title, 'span', null, 'Settings');
      dialog_contents.style.width = '280px';
      let switch_filter_menu_label = element.createTo(dialog_contents, 'label', 'margin: 0px; width: 55%;', null, null, 'Show filter menu when hover on username.\nIf disabled, you can open the filter menu by right-click.\nAnd open the browser menu by right-click twice.');
      let switch_filter_menu_check = element.createTo(switch_filter_menu_label, 'input', 'width: 16px; height: 16px; margin: 5px; vertical-align: middle;', 'checkbox');
      element.createTo(switch_filter_menu_label, 'a', null, 'Enable Filter Menu');
      let filter_menu_enable = await GM_getValue('filter_menu_enable', true);
      if (filter_menu_enable) switch_filter_menu_check.setAttribute('checked', '');
      switch_filter_menu_label.onchange = () => filter.menu.update(switch_filter_menu_check.checked);
      let sort_option_label = element.createTo(dialog_contents, 'label', 'margin: 0px; width: 45%;', null, null, 'Add a extra sort options for current page.');
      let sort_option_check = element.createTo(sort_option_label, 'input', 'width: 16px; height: 16px; margin: 5px; vertical-align: middle;', 'checkbox');
      element.createTo(sort_option_label, 'a', null, 'Extra Sorting');
      let sort_enable = await GM_getValue('sort_enable', true);
      if (sort_enable) sort_option_check.setAttribute('checked', '');
      sort_option_label.onchange = () => sorting.update(sort_option_check.checked);
      let switch_style_label = element.createTo(dialog_contents, 'label', 'margin: 0px; width: 55%;');
      let switch_style_check = element.createTo(switch_style_label, 'input', 'width: 16px; height: 16px; margin: 5px; vertical-align: middle;', 'checkbox');
      element.createTo(switch_style_label, 'a', null, 'Enable User Style');
      let style_enable = await GM_getValue('style_enable', true);
      if (style_enable) switch_style_check.setAttribute('checked', '');
      switch_style_label.onchange = () => style.update(switch_style_check.checked);
      let extra_pager_label = element.createTo(dialog_contents, 'label', 'margin: 0px; width: 45%;', null, null, 'Add a extra pager to top of list.');
      let extra_pager_check = element.createTo(extra_pager_label, 'input', 'width: 16px; height: 16px; margin: 5px; vertical-align: middle;', 'checkbox');
      element.createTo(extra_pager_label, 'a', null, 'Extra Pager');
      let pager_enable = await GM_getValue('pager_enable', false);
      if (pager_enable) extra_pager_check.setAttribute('checked', '');
      extra_pager_label.onchange = () => pager.update(extra_pager_check.checked);
      let switch_color_label = element.createTo(dialog_contents, 'label', 'margin: 0px; width: 100%;');
      let switch_color_check = element.createTo(switch_color_label, 'input', 'width: 16px; height: 16px; margin: 5px; vertical-align: middle;', 'checkbox');
      element.createTo(switch_color_label, 'a', null, 'Enable Likes/Views Color');
      let color_enable = await GM_getValue('color_enable', false);
      if (color_enable) switch_color_check.setAttribute('checked', '');
      if (!color_enable) dialog_buttons.style.display = 'none';
      switch_color_label.onchange = () => {
        set_color_input.style.display = switch_color_check.checked ? 'block' : 'none';
        dialog_buttons.style.display = switch_color_check.checked ? 'block' : 'none';
        colors.update(switch_color_check.checked);
      };
      let set_color_input = element.createTo(dialog_contents, 'textarea', 'width: 100%; height: 160px; resize: none; display: ' + (switch_color_check.checked ? 'block' : 'none') + ';', null, null, 'example:\n  100, #FFF\tLikes, integer only\n  10k, #FFF\tViews, integer with unit (k)\n* 2.00%\tPercentage, need mark (%)\n* 0.0~2.00\tScore, need decimal (.)\nDisable if not defined.\nClear color settings to reset.');
      let color_settings = await GM_getValue('color_settings', []);
      if (color_settings.length == 0) color_settings = Array.from(init_colors);
      color_settings.sort((a, b) => {
        let an = a.count * 10 == a.count + '0';
        let bn = b.count * 10 == b.count + '0';
        let av = a.count.toString().toLowerCase().indexOf('k') >= 0;
        let bv = b.count.toString().toLowerCase().indexOf('k') >= 0;
        let ap = a.count.toString().indexOf('%') >= 0;
        let bp = b.count.toString().indexOf('%') >= 0;
        let ar = a.count.toString().indexOf('.') >= 0;
        let br = b.count.toString().indexOf('.') >= 0;
        if (an && (bv || bp || br) || av && (bp || br) || ap && br) return -1;
        if (bn && (av || ap || ar) || bv && (ap || ar) || bp && ar) return 1;
        if (an && bn || av && bv || ap && bp || ar && br) return parseInt(a.count) - parseInt(b.count);
      });
      color_settings.forEach((v, i) => {
        if (validate.value.count(v.count)) set_color_input.value += (i == 0 ? '' : '\n') + v.count + ', ' + v.color;
      });
      set_color_input.oninput = () => validate.array(set_color_input);
      button_save.onclick = async () => {
        if (!switch_color_check.checked) {
          edit_wapper.remove();
        } else if (validate.array(set_color_input)) {
          let color_settings = [];
          set_color_input.value.split('\n').filter(n => n.replace(/\s/g, '') !== '').map(n => {
            let m = n.split(',');
            let c1 = m[0].trim();
            let c2 = m[1] ? m[1].trim() : 'White';
            color_settings.push({count: c1, color: c2});
          });
          await GM_setValue('color_settings', color_settings);
          colors.update(switch_color_check.checked);
          edit_wapper.remove();
        }
      };
    }
  };
})();

const validate = {
  color: (input) => {
    let value = input.value.replace(/\s/g, '').match(/^([a-z]+|#([0-9a-f]{3}){1,2})?(,([a-z]+|#([0-9a-f]{3}){1,2}))*$/i);
    let pass = value && value.length > 0;
    input.style.backgroundColor = pass ? null : '#fdd';
    return pass;
  },
  alpha: (input) => {
    let value = input.value.trim().match(/^(0?(.\d{1,2})?|1(\.0{1,2})?)$/);
    let pass = value && value.length > 0;
    input.style.backgroundColor = pass ? null : '#fdd';
    return pass;
  },
  array: (input) => {
    let error = 0;
    input.value.split('\n').filter(n => n.replace(/\s/g, '') !== '').map(n => {
      let m = n.split(',');
      let c1 = m[0].trim();
      let c2 = m[1] ? m[1].trim() : 'White';
      error += validate.value.count(c1) && validate.value.color(c2) ? 0 : 1;
    });
    let pass = error == 0;
    input.style.backgroundColor = pass ? null : '#fdd';
    return pass;
  },
  value: {
    count: (value) => {
      value = value.trim().match(/^((0|[1-9](\d+)?)k?|[01]\.\d{1,2}|2\.(00?)?|(0|[1-9]\d?)(\.\d{1,2})?%|100(\.00?)?%)$/i);
      return value && value.length > 0;
    },
    color: (value) => {
      value = value.trim().match(/^([a-z]+|#([0-9a-f]{3}){1,2})?$/i);
      return value && value.length > 0;
    }
  }
};

const element = {
  create: function(tag, style, value, id, title, css_class) {
    let el = document.createElement(tag);
    if (tag == 'style') el.type = 'text/css';
    if (style) el.style.cssText = style;
    if (id) el.id = id;
    if (title) el.title = title;
    if (css_class) css_class.split(' ').forEach(cls => el.classList.add(cls));
    if (typeof value !== 'undefined') {
      if (tag == 'input') {
        if (value == 'checkbox') el.type = 'checkbox';
        else el.value = value;
      } else el.innerHTML = value;
    }
    return el;
  },
  createTo: function(parent, tag, style, value, id, title, css_class) {
    let el = this.create(tag, style, value, id, title, css_class);
    parent.appendChild(el);
    return el;
  },
  remove: function(el) {
    if (el && el !== null) {
      if (!el.length && el.length !== 0) el.remove();
      if (el.length && el.length > 0) el.forEach(e => e.remove());
    }
  },
  header: function() {
    let el_header = document.querySelector('header');
    let sub_menu = el_header.querySelector('.sub-menu') || this.createTo(el_header, 'div', null, null, null, null, 'sub-menu');
    let list_inline = sub_menu.querySelector('.list-inline') || this.createTo(this.createTo(sub_menu, 'div', null, null, null, null, 'container'), 'ul', 'text-align: right;', null, null, null, 'list-inline');
    return list_inline ;
  }
};

function custom_css() {
  return `
/*#### page layout ####*/
  body {background-color: #eaecee;}
  section#content {background-attachment: fixed;}
  section#content > .container {background-color: unset; padding: 10px;}
  .container {width: unset;} /* fit to page width */
  @media (min-width: 1332px) {
  .container {width: 1332px;} /* max width, Lock thumbnail size to 220x150 (original size) */
  }
  /* cancel -15px margin and 15px padding */
  #block-system-main {margin-left: unset; margin-right: unset;}
  .row {margin-left: unset; margin-right: unset;}
  .col-sm-2, .col-sm-3, .col-sm-6, .col-sm-9, .col-sm-10, .col-sm-12 {padding-left: unset; padding-right: unset; min-height: unset;}
  .col-sm-12 {float: left; width: 100%;} /* comment in compact page */
  .item-list ul {margin-bottom: unset;} /* 0.75em margin in sidebar and footer */
  .view.view-subscriptions .row.views-row {margin-bottom: unset;} /* 15px margin in subscriptions page */
  .view.view-videos .row.views-row {padding-bottom: unset;} /* 15px padding in all videos page */
  .view.view-images .row.views-row {padding-bottom: unset;} /* 15px padding in all images page */
  .views-column.col-sm-3 {width: 50%; float: left;} /* fixed to 2 columns in compact page */
  @media (min-width: 768px) {
  .views-column.col-sm-3 {width: 25%;}  /* restore original width */
  }

/*#### card style ####*/
  .node.node-teaser {
    background-color: #ffffff; border: 1px solid #ccc; border-radius: 5px; padding: 6px; margin: 5px; box-shadow: 0px 0px 3px #0003;
  }
  /* shadow on hover */
  .node.node-teaser {transition: 0.1s;}
  .node.node-teaser:hover {border: 1px solid #999; box-shadow: 0px 0px 6px #0009;}
  /* fix layout, thumbnail, title and username */
  .node.node-teaser > div,
  .node.node-teaser .field {position: relative;}
  .node.node-teaser .field .field-items {background: #0001; border: 1px solid #0001; line-height: 1; min-height: 4em;} /* fixed height for non-thumbnail videos */
  .node.node-teaser h3.title {font-size: 1em; line-height: 1.25em; height: 2.5em; overflow: hidden; margin-top: 6px; margin-bottom: unset;}
  .node.node-teaser .username {display: block; white-space: nowrap; overflow: hidden; margin-top: 6px;}
  .page-users h1.page-title {margin-bottom: unset;}
  /* fix views/likes icon */
  .node.node-teaser .icon-bg {padding: 4px;}
  .node.node-teaser:hover .icon-bg {background: unset;}
  .node.node-teaser .left-icon,
  .node.node-teaser .right-icon {margin: 0px 4px; font-size: 11pt; line-height: 1; filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 2px #000);}
  /* add private icon */
  .node.node-teaser .private-video {top: unset; left: 0px; font-size: 0px;} /* fix position and hide text band */
  .node.node-teaser .private-video:after {
    content: "Private"; color: #eee; font-size: 14pt; line-height: 24px; text-align: center;
    background: #0003; border: 2px solid #eee; border-radius: 4px; padding: 0px 6px; margin-right: 6px;
    position: absolute; right: 6px; bottom: 6px; filter: drop-shadow(0px 0px 2px #000);
  }
  /* add images icon in liked and subscriptions page */
  .view-liked .node.node-teaser .field.field-type-image:after,
  .view-subscriptions .node.node-teaser .field.field-type-image:after {
    content: "\\e060"; font-family: "Glyphicons Halflings"; color: #eee; font-size: 16pt; line-height: 24px; text-align: center;
    background: #0003; border: 2px solid #eee; border-radius: 4px; width: 36px;
    position: absolute; right: 6px; bottom: 6px; filter: drop-shadow(0px 0px 2px #000);
  }
  /* add external icon (YouTube) */
  .node.node-teaser .field.field-type-video-embed-field:after,
  .node.node-wide_teaser .field.field-type-video-embed-field:after {
    content: "\\e072"; font-family: "Glyphicons Halflings"; color: #eee; font-size: 12pt; line-height: 24px; text-align: center;
    background: #e33; border: 2px solid #e33; border-radius: 6px; width: 36px;
    position: absolute; right: 6px; bottom: 6px; filter: drop-shadow(0px 0px 2px #000);
  }

/*#### card style (search and playist) ####*/
  .node.node-wide_teaser {
    background-color: #f4f5f6; border: 1px solid #ccc; border-radius: 5px; padding: 5px; margin: 5px; box-shadow: 0px 0px 3px #0003;
  }
  /* fix layout */
  .node.node-wide_teaser {width: calc(100% - 10px); word-break: break-all; overflow: hidden;}
  .node.node-wide_teaser .col-sm-2 {width: 232px; padding: 5px;}
  .node.node-wide_teaser .col-sm-10 {width: 100%; padding: 5px;}
  @media (min-width: 768px) {
  .node.node-wide_teaser {min-height: 174px;}
  .node.node-wide_teaser .col-sm-10 {width: calc(100% - 232px);}
  }
  .page-search h1.page-title  {margin-bottom: unset;}
  .node-playlist h1.title {margin-bottom: unset; top: unset;}
  .node-playlist .field-name-field-videos {margin-top: unset;}
  .node-playlist .node.node-wide_teaser {margin-bottom: 10px;}
  /* fix video thumb */
  .node.node-wide_teaser .field.field-type-video > .field-items,
  .node.node-wide_teaser .field.field-type-video-embed-field > .field-items {background: #0001; border: 1px solid #0001; line-height: 1; width: 222px; height: 152px;}
  .node.node-wide_teaser .field.field-type-video-embed-field {position: absolute; top: 0px; left: -232px;}
  @media (max-width: 768px) {
  .node.node-wide_teaser .field.field-type-video-embed-field {display: none;} /* hidden in compact page */
  }
  /* fix image post */
  .node.node-wide_teaser .field.field-name-field-images .field-item {display: unset;}
  .node.node-wide_teaser .field.field-name-field-images .field-item img {width: calc(100%/3 - 10px); border: 1px solid #aaa; padding: 5px; margin: 5px; background-color: #fff;}
  .node.node-wide_teaser .field.field-name-field-images .field-item video {width: calc(100% - 10px); border: 1px solid #aaa; padding: 5px; margin: 5px; height: auto;}
  .node.node-wide_teaser .node-info,
  .node.node-wide_teaser .node-buttons {margin: 10px;}
  .node.node-wide_teaser .node-info .submitted {display: inline-block; width: 100%;}
  .node.node-wide_teaser .node-info .submitted h1.title {font-size: 28px; position: unset; margin: unset; border: unset;}
  .node.node-wide_teaser .node-info .node-views {float: right;}
  /* fix image post (supplement for main.css) */
  .node.node-wide_teaser .field-name-field-image-categories {margin-bottom: 15px;}
  .node.node-wide_teaser .field-name-field-image-categories .field-items .field-item {display: inline-block; margin-right: 5px;}
  .node.node-wide_teaser .field-name-field-image-categories .field-items .field-item a {display: block; padding: 2px 5px; text-decoration: none;}
  .node.node-wide_teaser .node-info .share-icons {font-size: 200%; line-height: 0.8;}
  .node.node-wide_teaser .node-info .share-icons a.symbol:before {display: none;}
  /* fix views/likes icon */
  .node.node-wide_teaser .node-info .node-views,
  .node.node-wide_teaser .video-info {float: right; color: white; font-size: 11pt; font-weight: bold; filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 2px #000);}
  .node.node-wide_teaser .video-info .left-icon,
  .node.node-wide_teaser .video-info .right-icon {float: left;}
  .node.node-wide_teaser .video-info .right-icon {margin-left: 10px;}

/*#### sidebar ####*/
  .sidebar .block.block-views,
  .sidebar .block.block-facetapi,
  .sidebar .block.block-mainblocks {
    background-color: #f4f5f6; border: 1px solid #ccc; border-radius: 5px; padding: 5px; margin: 5px 5px 10px 5px; box-shadow: 0px 0px 3px #0003;
  }
  .sidebar .views-exposed-form {margin: 0px 0.5em;}
  .sidebar .views-exposed-form label {font-size: 120%;}
  .sidebar .views-exposed-form input {border: 2px solid #e3e4e5;}
  .sidebar .views-exposed-form input:focus {border-color: #inherit;}
  .sidebar .block h2 {margin: 5px;}
  .sidebar .item-list {margin: 5px;}
  .sidebar .view-content .views-row {margin: unset; padding: unset;}
  .sidebar .view-content .views-column {width: 50%; float: left;} /* fixed to 2 columns in compact page */
  /* tags and links in sidebar */
  .sidebar .item-list ul li {white-space: normal;}
  .sidebar .item-list .element-invisible {display: none;}
  /* content in sidebar */
  .sidebar .node.node-sidebar_teaser {
    background-color: #ffffff; border: 1px solid #ccc; border-radius: 3px; padding: 3px; margin: 3px;
  }
  .sidebar .node.node-sidebar_teaser > div {position: relative;}
  .sidebar .node.node-sidebar_teaser .icon-bg {padding: 4px;}
  .sidebar .node.node-sidebar_teaser .left-icon,
  .sidebar .node.node-sidebar_teaser .right-icon {font-size: 11pt; line-height: 1; margin: 0px; filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 2px #000);}

/*#### users page ####*/
  .view-profile.view-display-id-block {background: unset; box-shadow: unset;}
  .view-profile.view-display-id-block .views-field-picture img {max-width: 150px;} /* limite avatar size for compact page */
  .page-user .block h2 {margin: 5px;}
  .page-user .profile {margin: unset;} /* comments */
  .page-user .region-before-content .block-views {
    background-color: #f4f5f6bf; border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px; box-shadow: 0px 0px 3px #0003;
  }
  .page-user .sidebar .block.block-views,
  .page-user .sidebar .block.block-mainblocks,
  .page-user #comments {background-color: #f4f5f6bf;}
  .page-user .region-before-content #block-views-videos-block-2,
  .page-user .region-before-content #block-views-images-block-3,
  .page-user .region-before-content #block-views-journals-block-1 {margin-bottom: 10px;}
  .page-user #block-system-main:before {display: none;}

/*#### video/image page ####*/
  .page-node .block h2 {margin: 5px;}
  /* card block for video and image page, without journal page */
  .page-node .node.node-video > .content,
  .page-node .node.node-image > .content {
    background-color: #f4f5f6; border: 1px solid #ccc; border-radius: 0px 0px 5px 5px; padding: 0px; margin: 5px; box-shadow: 0px 0px 3px #0003;
  }
  .page-node .node .node-info {background: unset;}
  .page-node .node .share-icons {float: unset; display: inline-block;} /* fix in journal page, and compatible to videos/iamges page */
  .page-node .node .node-buttons {background: unset; margin-bottom: unset;}
  .page-node .node .node-buttons .panel {margin-bottom: unset;}
  /* fix views/likes icon */
  .page-node .node .node-info .node-views {color: white; font-size: 11pt; font-weight: bold; filter: drop-shadow(0 0 1px #000) drop-shadow(0 0 2px #000);}
  .page-node .node .node-info .node-views .left-icon,
  .page-node .node .node-info .node-views .right-icon {float: left;}
  .page-node .node .node-info .node-views .right-icon {margin-left: 10px;}

/*#### comments ####*/
  #comments {
    background-color: #f4f5f6; border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin: 5px; box-shadow: 0px 0px 3px #0003;
  }
  #comments h2.title {margin: 5px;}
  #comments .comment {margin: 10px 5px;}
  #comments .comment .col-sm-2 {width: 70px; height: 70px; margin-right: 10px; text-align: center; background: #fff; border-radius: 50%;}
  #comments .comment .col-sm-10 {width: calc(100% - 80px); border: 1px solid #ddd; border-radius: 5px; box-shadow: 0px 0px 3px -1px #0003; overflow: hidden;}
  @media (max-width: 767px) {
  #comments .comment .col-sm-10 {width: 100%;}
  }
  #comments .comment .user-picture {margin: unset;}
  #comments .comment .submitted {padding: 0px 5px; background-color: #f4f5f6;}
  #comments .comment .content {padding: 7px 10px; background-color: #ffffff;}
  #comments .comment .content p {margin: 0px;}
  #comments .comment ul.links.inline {position: absolute; top: 0px; right: 0px;} /* move reply button to top-right, for less height */
  #comments .comment ul.links.inline .comment_forbidden {display: none;} /* remove login notify */

/*#### paginator ####*/
  .item-list ul.pager {border: unset; padding-bottom: 15px;}
  .item-list ul.pager li {margin: unset; padding: unset;}
  .item-list ul.pager li.pager-current,
  .item-list ul.pager li.pager-ellipsis,
  .item-list ul.pager li > a {
    background-color: #ffffff; border: 1px solid #ccc; border-radius: 8px; padding: 4px 16px; margin: 0px; display: inline-block;
  }

/*#### footer ####*/
  #wrapper {margin-bottom: unset; padding-bottom: unset;}
  footer {height: unset;}
  footer .block {width: 25%; float: left;}
  footer .block.block-forum {width: 50%;}
  footer .copyright {float: unset;}

/*#### video player ####*/
  /* expand volume and seekbar height */
  .video-js .vjs-volume-bar {margin: 1em 0em;}
  .video-js .vjs-volume-bar.vjs-slider-horizontal, .video-js .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {height: 1em;}
  .video-js .vjs-progress-holder, .video-js .vjs-progress-holder .vjs-load-progress, .video-js .vjs-progress-holder .vjs-play-progress {height: 1em;}
  /* remove volume and seekbar slider (optional) */
  .video-js .vjs-volume-level:before, .video-js .vjs-play-progress:before {display: none;}
`;
}

(function() {
  style.load();
  document.addEventListener('DOMContentLoaded', async () => {
    style.reload();
    dialog.load();
    await filter.load();
    colors.load();
    sorting.load();
    pager.load();
    function reload_content() {
      filter.reload();
      colors.reload();
      sorting.reload();
    }
    (function refind_content() {
      let selector = [
        '.page-videos .view-solr-lists',
        '.page-images .view-solr-lists',
        '.page-users .view-videos',
        '.page-users .view-images',
      ];
      let view = document.querySelector(selector.join(','));
      let content = view ? view.closest('.col-sm-9') || view.closest('.container') : undefined;
      let observer = new MutationObserver(() => {
        if (content) reload_content();
        else {
          observer.disconnect();
          refind_content();
        }
      });
      if (content || view) observer.observe(content ? content : view, {childList: true, subtree: false});
    })();
  });
})();
