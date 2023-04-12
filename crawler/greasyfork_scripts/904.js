// ==UserScript==
// @name         pixiv - show resolution
// @name:ja      pixiv - 解像度を表示します
// @name:zh-cn   pixiv - 显示作品分辨率
// @name:zh-tw   pixiv - 顯示作品解像度
// @description       show works resolution.
// @description:ja    イラストの解像度を表示します。
// @description:zh-cn 在图片的左下角显示显示作品分辨率。
// @description:zh-tw 在圖片的左下角顯示作品解像度。
// @version      2.20
// @namespace    none
// @match        https://www.pixiv.net/*
// @grant        none
// ==/UserScript==

const selector = [
  {url: /pixiv.net\/(cate_r18|manga|en\/$|$)/, sel: 'ul div>div>div:nth-of-type(1)>a'},
  {url: /pixiv.net\/(en\/)?artworks/, sel: 'ul div>div>div>a, main nav div>div>div>a'},
  {url: 'pixiv.net/bookmark_new_illust', sel: 'ul div>div>div>a'},
  {url: 'pixiv.net/contest', sel: '.thumbnail-container>a'},
  {url: 'pixiv.net/discovery', sel: 'ul div>div>div:nth-of-type(1)>a'},
  {url: 'pixiv.net/new_illust', sel: 'ul div>div:nth-of-type(1)>div>a'},
  {url: 'pixiv.net/ranking', sel: '.ranking-image-item>a'},
  {url: /pixiv.net\/request($|\/(complete|creators)\/(illust|manga|ugoira))/, sel: 'ul div>div:nth-of-type(1)>a'},
  {url: /pixiv.net\/(en\/)?tags/, sel: 'ul div>div>div>a'},
  {url: /pixiv.net\/(en\/)?users/, sel: 'ul div>div:nth-of-type(1)>div:nth-of-type(1)>a, ul div>div div>div:nth-of-type(1)>a:nth-child(1)'},
  {url: /pixiv.net\/user\/\d+\/series\/\d+/, sel: 'ul div>div>div>a'}
];

(function() {
  add_style();
  selector.map(rule => (rule.sel = rule.sel.split(',').map(n => n + '[href*="/artworks/"]:not(.addsize)').join(',')));
  new MutationObserver(function() {
    let rule = selector.find(s => location.href.match(s.url));
    let illusts = rule ? document.querySelectorAll(rule.sel) : [];
    if (illusts.length) add_size(illusts);
    if (location.pathname.indexOf('/artworks/') == 0) for_artworks();
  }).observe(document.body, {childList: true, subtree: true});
})();

async function add_size(illusts) {
  let ids = [];
  illusts.forEach(a => {
    a.classList.add('addsize');
    ids.push(a.href.split('/artworks/').pop());
  });
  let json = await (await fetch('https://www.pixiv.net/rpc/illust_list.php?page=discover&illust_ids=' + ids.join(','), {credentials: 'same-origin'})).json();
  illusts.forEach(a => {
    let illust = json.find(i => i.illust_id == a.href.split('/artworks/').pop());
    if (illust) {
      let wh = illust.illust_width * illust.illust_height;
      let color = (wh >= 4800000) ? '#0099cc' : (wh >= 960000) ? '#00cc00' : (wh >= 480000) ? '#cc9999' : '#cccccc';
      a.insertAdjacentHTML('beforeend', `<b class="size" style="color: ${color};">${illust.illust_width}x${illust.illust_height}</b>`);
    }
  });
}

function add_style() {
  document.head.insertAdjacentHTML('beforeend', `
<style id="css_addsize">
.addsize .size {
  position: absolute; left: .25em; bottom: .25em; font-family: initial; font-size: initial; line-height: 1;
  background: #fafafa; border: 1px #ccc solid; border-radius: .25em; color: #333; padding: .125em .25em;
}
.addsize.large, .addsize.small {position: relative;}
.addsize.large .size {font-size: 20px; left: .5em; top: .5em; bottom: unset;}
.addsize.small .size {font-size: 14px; left: 0; bottom: 0;}
</style>
`);
}

// temporary code, just make function works
async function for_artworks() {
  // multi artwork expanded
  let finish = document.querySelector('.gtm-illust-work-scroll-finish-reading a:not(.addsize)');
  if (finish) {
    let multi = Array.from(document.querySelectorAll('.gtm-medium-work-expanded-view a:not(.addsize), .gtm-medium-work-expanded-view~div a:not(.addsize)'));
    multi.forEach(a => a.classList.add('addsize', 'large'));
    let illust_id = location.pathname.split('/artworks/').pop();
    let pages = (await (await fetch(`https://www.pixiv.net/ajax/illust/${illust_id}/pages`)).json()).body;
    multi.forEach((a, i) => {
      let wh = pages[i].width * pages[i].height;
      let color = (wh >= 4800000) ? '#0099cc' : (wh >= 960000) ? '#00cc00' : (wh >= 480000) ? '#cc9999' : '#cccccc';
      a.insertAdjacentHTML('beforeend', `<b class="size" style="color: ${color};">${pages[i].width}x${pages[i].height}</b>`);
    });
  }
  // single artworks or first page of multi artwork
  let large = document.querySelector('figure a[href*="/img-original/"]:not(.addsize)');
  if (large) {
    large.classList.add('addsize', 'large');
    let img = large.querySelector(':scope>img');
    let wh = img.getAttribute('width') * img.getAttribute('height');
    let color = (wh >= 4800000) ? '#0099cc' : (wh >= 960000) ? '#00cc00' : (wh >= 480000) ? '#cc9999' : '#cccccc';
    large.insertAdjacentHTML('beforeend', `<b class="size" style="color: ${color};">${img.getAttribute('width')}x${img.getAttribute('height')}</b>`);
  }
  // multi artwork preview dialog
  let preview = document.querySelectorAll('body>div:last-child ul>li:not(.addsize)');
  if (preview.length) {
    preview.forEach(a => a.classList.add('addsize', 'small'));
    let illust_id = location.pathname.split('/artworks/').pop();
    let pages = (await (await fetch(`https://www.pixiv.net/ajax/illust/${illust_id}/pages`)).json()).body;
    preview.forEach((a, i) => {
      let wh = pages[i].width * pages[i].height;
      let color = (wh >= 4800000) ? '#0099cc' : (wh >= 960000) ? '#00cc00' : (wh >= 480000) ? '#cc9999' : '#cccccc';
      a.insertAdjacentHTML('beforeend', `<b class="size" style="color: ${color};">${pages[i].width}x${pages[i].height}</b>`);
    });
  }
}
