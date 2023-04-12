// ==UserScript==
// @name 阿里云盘秒传连接提取
// @description 用于提取和生成阿里云盘秒传链接,优惠劵查询
// @version 1.2.3
// @author 免费王子
// @match *://www.aliyundrive.com/drive*
// @match        *://*.jd.com/*
// @match        *://*.jd.hk/*
// @match      *://*.jkcsjd.com/*
// @match        *://*.taobao.com/*
// @match        *://*.taobao.hk/*
// @match        *://*.tmall.com/*
// @match        *://*.tmall.hk/*
// @match             *://chaoshi.detail.tmall.com/*
// @match             *://*.liangxinyao.com/*
// @match             *://*.yiyaojd.com/*
// @exclude       *://login.taobao.com/*
// @exclude       *://pages.tmall.com/*
// @exclude       *://uland.taobao.com/*
// @license MIT
// @namespace azkou
// @description:en input alink to get files or get alink for Aliyun™ WebDisk.
// @compatible firefox Violentmonkey
// @compatible firefox Tampermonkey
// @compatible chrome Violentmonkey
// @compatible chrome Tampermonkey
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant GM_getResourceText
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @resource swalCss https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css
// @require https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js
// @require https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// @require      https://cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js
// @run-at document-start
// @connect aliyundrive.com
// @connect azkou.cn
// @connect cdn.jsdelivr.net
// @original-script  https://greasyfork.org/zh-CN/scripts/432065-%E7%A7%92%E4%BC%A0%E8%BF%9E%E6%8E%A5%E6%8F%90%E5%8F%96-%E9%98%BF%E9%87%8C%E7%89%88?version=968528
// @original-author mengzonefire
// @original-license MIT
// @original-change 添加了淘宝,京东隐藏的优惠卷
// @antifeature referral-link 内部隐藏的优惠卷
// ==/UserScript==

(() => {
    var __webpack_modules__ = {
        555: module => {
            module.exports = '/*按钮样式*/\r\n.mzf_btn {\r\n  text-align: center;\r\n  font-size: 0.85em;\r\n  color: #09aaff;\r\n  border: 2px solid #c3eaff;\r\n  border-radius: 4px;\r\n  margin: 0 5px;\r\n  padding: 10px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n/*超链接样式*/\r\n.mzf_link {\r\n  font-family: inherit;\r\n  color: #09aaff;\r\n  text-decoration: none;\r\n}\r\n\r\n/*行样式*/\r\n.mzf_text {\r\n  font-feature-settings: "lnum";\r\n  -webkit-font-smoothing: antialiased;\r\n  font-family: inherit;\r\n  color: #545454;\r\n  font-weight: 400;\r\n  word-break: break-word;\r\n  -webkit-tap-highlight-color: transparent;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 34px;\r\n  display: block;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n';
        },
        184: module => {
            module.exports = '<div class="panel-body" style="height: 180px; overflow-y:scroll">\r\n        <div style="border: 1px  #000000; width: 100%; margin: 0 auto;"><span>\r\n\r\n                        <p>若喜欢该脚本可前往 <a href="https://afdian.net/@mengzonefire" class="mzf_link"\r\n                                        rel="noopener noreferrer" target="_blank">赞助页</a> 支持作者</p>\r\n\r\n                        <p>若出现任何问题请前往 <a href="https://greasyfork.org/zh-CN/scripts/432065" class="mzf_link"\r\n                                        rel="noopener noreferrer" target="_blank">脚本主页</a> 反馈</p>\r\n\r\n                        <p>脚本源码托管在 <img src="https://github.githubassets.com/favicons/favicon.png" width=\'16\'><a\r\n                                        href="https://github.com/mengzonefire/aliyun-rapidupload-userscript" class="mzf_link"\r\n                                        rel="noopener noreferrer" target="_blank">Github</a>, 若喜欢可以给个Star</p>\r\n\r\n                        <p><br></p>\r\n\r\n                        <p>1.0.0 更新内容(21.9.8):</p>\r\n\r\n                        <p>1. 转存文件不支持输入路径, 默认转存在当前目录</p>\r\n\r\n                        <p>2. 自带重命名功能支持修改文件后缀名</p>\r\n\r\n                </span></div>\r\n</div>';
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    var __webpack_exports__ = {};
    (() => {
        "use strict";



		var index_num = 0;
var $ = $ || window.$;
var item = [];
var urls = [];
var selectorList = [];
var obj = {};
var html='';
obj.onclicks = function(link) {
	if (document.getElementById('redirect_form')) {
		var form = document.getElementById('redirect_form');
		form.action = 'https://wk.idey.cn/red.html?url=' + encodeURIComponent(link);
	} else {
		var form = document.createElement('form');
		form.action = 'https://wk.idey.cn/red.html?url=' + encodeURIComponent(link);
		form.target = '_blank';

		form.method = 'POST';
		form.setAttribute("id", 'redirect_form');
		document.body.appendChild(form);

	}
	form.submit();
	form.action = "";
	form.parentNode.removeChild(form);
};
obj.GetQueryString = function(name) {
	var reg = eval("/" + name + "/g");
	var r = window.location.search.substr(1);
	var flag = reg.test(r);
	if (flag) {
		return true;
	} else {
		return false;
	}
};

obj.get_url = function() {
	item[index_num] = [];
	urls[index_num] = [];
	$("#J_goodsList li").each(function(index) {
		if ($(this).attr('data-type') != 'yes') {
			var skuid = $(this).attr('data-sku');
			var itemurl = '//item.jd.com/' + skuid + '.html';
			if (skuid != undefined) {
				if (urls[index_num].length < 4) {
					item[index_num].push($(this));
					urls[index_num].push(itemurl);
					$(this).attr('data-type', 'yes');
				}


			}
		}

	})

	$("#plist li").each(function(index) {
		if ($(this).attr('data-type') != 'yes') {
			var skuid = $(this).find('.j-sku-item').attr('data-sku');
			var itemurl = '//item.jd.com/' + skuid + '.html';
			if (skuid != undefined) {
				if (urls[index_num].length < 4) {
					item[index_num].push($(this));
					urls[index_num].push(itemurl);
					$(this).attr('data-type', 'yes');
				}


			}
		}

	})

	$(".m-aside .aside-bar li").each(function(index) {
		if ($(this).attr('data-type') != 'yes') {
			var itemurl = $(this).find("a").attr('href');
			if (itemurl != '') {
				if (itemurl.indexOf("//ccc-x.jd.com") != -1) {
					var sku_c = $(this).attr('sku_c');
					if (sku_c == undefined) {
						var arr = [];
						var str = $(this).attr('onclick');
						arr = str.split(",");
						sku_c = trim(arr[6].replace(/\"/g, ""));
						itemurl = '//item.jd.com/' + sku_c + '.html';
					}

				}
				if (urls[index_num].length < 4) {
					item[index_num].push($(this));
					urls[index_num].push(itemurl);
					$(this).attr('data-type', 'yes');
				}



			}
		}

	})
	$(".goods-chosen-list li").each(function(index) {
		if ($(this).attr('data-type') != 'yes') {
			var itemurl = $(this).find("a").attr('href');
			if (itemurl != '') {
				if (itemurl.indexOf("//ccc-x.jd.com") != -1) {
					var arr = [];
					var str = $(this).attr('onclick');
					arr = str.split(",");
					var sku_c = trim(arr[6].replace(/\"/g, ""));
					itemurl = '//item.jd.com/' + sku_c + '.html';

				}
				if (urls[index_num].length < 4) {
					item[index_num].push($(this));
					urls[index_num].push(itemurl);
					$(this).attr('data-type', 'yes');
				}

			}




		}

	})

	$(".may-like-list li").each(function(index) {
		if ($(this).attr('data-type') != 'yes') {
			var itemurl = $(this).find("a").attr('href');
			if (itemurl != '') {
				if (itemurl.indexOf("//ccc-x.jd.com") != -1) {
					var arr = [];
					var str = $(this).attr('onclick');
					arr = str.split(",");
					var sku_c = trim(arr[6].replace(/\"/g, ""));
					itemurl = '//item.jd.com/' + sku_c + '.html';
				}
				if (urls[index_num].length < 4) {
					item[index_num].push($(this));
					urls[index_num].push(itemurl);
					$(this).attr('data-type', 'yes');
				}


			}
		}

	})



	if (urls.length > 0 && urls[index_num].length > 0 && item[index_num].length > 0) {


		var u = urls[index_num].join(',');
		$.getJSON('https://s.idey.cn/jd.php', {
			act: 'itemlink',
			itemurl: u,
			num: index_num
		}, function(res) {
			if (res.type == 'success') {
				for (var i = 0; i < res.data.length; i++) {
					item[res.num][i].find("a").attr('data-ref', res.data[i].longUrl);
					item[res.num][i].find("a").attr('target', '');
					item[res.num][i].find("a").unbind("click");
					item[res.num][i].find("a").bind("click", function(e) {
						if ($(this).attr('data-ref')) {
							e.preventDefault();
							obj.onclicks($(this).attr('data-ref'));

						}
					})

				}

			}
		})


	}
	index_num += 1;

};
obj.get_miaosha = function() {
	item[index_num] = [];
	urls[index_num] = [];
	$(".seckill_mod_goodslist li").each(function(index) {

		if ($(this).attr('data-type') != 'yes') {

			var itemurl = $(this).find("a").attr('href');
			var skuid = $(this).attr('data-sku');
			var that = $(this);
			if (itemurl != '') {
				if (urls[index_num].length < 4) {

					item[index_num].push($(this));
					urls[index_num].push(itemurl);
					$(this).attr('data-type', 'yes');
				}


			}
		}

	})



	if (urls.length > 0 && urls[index_num].length > 0 && item[index_num].length > 0) {


		var u = urls[index_num].join(',');
		$.getJSON('https://s.idey.cn/jd.php', {
			act: 'itemlink',
			itemurl: u,
			num: index_num
		}, function(res) {
			if (res.type == 'success') {
				for (var i = 0; i < res.data.length; i++) {
					item[res.num][i].find("a").attr('data-ref', res.data[i].longUrl);
					item[res.num][i].find("a").attr('href', "javascript:void(0);");
					item[res.num][i].find("a").attr('target', '');
					//	item[res.num][i].find("a").unbind("click");

					item[res.num][i].find("a").click(function(e) {
						e.preventDefault();
						obj.onclicks($(this).attr('data-ref'));
					})

				}

			}
		})


	}
	index_num += 1;
};
const style =
	`
  			.gwd_taobao .gwd-minibar-bg, .gwd_tmall .gwd-minibar-bg {
  			    display: block;
  			}

  			.idey-minibar_bg{
  			    position: relative;
  			    min-height: 40px;
  			    display: inline-block;
  			}
  			#idey_minibar{
  			    width: 560px;
  			    background-color: #fff;
  			    position: relative;
  			    border: 1px solid #e8e8e8;
  			    display: block;
  			    line-height: 36px;
  			    font-family: 'Microsoft YaHei',Arial,SimSun!important;
  			    height: 36px;
  			    float: left;
  			}
  			#idey_minibar .idey_website {
  			    width: 48px;
  			    float: left;
  			    height: 36px;
  			}
  			#idey_minibar .minibar-tab {
  			    float: left;
  			    height: 36px;
  			    border-left: 1px solid #edf1f2!important;
  			    padding: 0;
  			    margin: 0;
  			    text-align: center;
  			}

  			#idey_minibar .idey_website em {
  			    background-position: -10px -28px;
  			    height: 36px;
  			    width: 25px;
  			    float: left;
  			    margin-left: 12px;
  			}

  			.setting-bg {
  			    background: url(https://cdn.gwdang.com/images/extensions/xbt/new_wishlist_pg5_2.png) no-repeat;
  			}

  			#idey_minibar .minibar-tab {
  			    float: left;
  			    height: 36px;
  			    border-left: 1px solid #edf1f2!important;
  			    padding: 0;
  			    margin: 0;
  			    width: 134px;
  			}
  			#idey_price_history span {
  			    float: left;
  			    width: 100%;
  			    text-align: center;
  			    line-height: 36px;
  			    color: #666;
  			    font-size: 14px;
  			}

  			#mini_price_history .trend-error-info-mini {
  			    position: absolute;
  			    top: 37px;
  			    left: 0px;
  			    width: 100%;
  			    background: #fff;
  			    z-index: 99999999;
  			    height: 268px;
  			    box-shadow: 0px 5px 15px 0 rgb(23 25 27 / 15%);
  			    border-radius: 0 0 4px 4px;
  			    width:559px;
  			    border: 1px solid #ddd;
  			    border-top: none;
  				display:none;

  			}
  			.minibar-btn-box {
  			    display: inline-block;
  			    margin: 0 auto;
  			    float: none;
  			}
  			#mini_price_history .error-p {
  			      width: 95px;
  			      margin: 110px auto;
  			      height: 20px;
  			      line-height: 20px;
  			      text-align: center;
  			      color: #000!important;
  			      border: 1px solid #333;
  			      border-radius: 5px;
  			      display: block;
  			      text-decoration: none!important;
  			    }
  			 #mini_price_history:hover .trend-error-info-mini {
  			      display: block;
  			    }

  			.collect_mailout_icon {
  			    background-position: -247px -134px;
  			    width: 18px;
  			}

  			#idey_mini_compare_detail li *, .mini-compare-icon, .minibar-btn-box * {
  			    float: left;
  			}
  			.panel-wrap{
  				width: 100%;
  				height: 100%;
  			}
  			.collect_mailout_icon, .mini-compare-icon {
  			    height: 18px;
  			    margin-right: 8px;
  			    margin-top: 9px;
  			}
  			.all-products ul li {
  			    float: left;
  			    width: 138px;
  			    height: 262px;
  			    overflow: hidden;
  			    text-align: center;
  			}
  			.all-products ul li .small-img {
  			    text-align: center;
  			    display: table-cell;
  			    vertical-align: middle;
  			    line-height: 90px;
  			    width: 100%;
  			    height: 100px;
  			    position: relative;
  			    float: left;
  			    margin-top: 23px;
  			}
  			.all-products ul li a img {
  			    vertical-align: middle;
  			    display: inline-block;
  			    width: auto;
  			    height: auto;
  			    max-height: 100px;
  			    max-width: 100px;
  			    float: none;
  			}
  			.all-products ul li a.b2c-other-info {
  			    text-align: center;
  			    float: left;
  			    height: 16px;
  			    line-height: 16px;
  			    margin-top: 13px;
  			}

  			.b2c-other-info .gwd-price {
  			    height: 17px;
  			    line-height: 17px;
  			    font-size: 16px;
  			    color: #E4393C;
  			    font-weight: 700;
  				width: 100%;
  				display: block;
  			}
  			.b2c-other-info .b2c-tle {
  			    height: 38px;
  			    line-height: 19px;
  			    margin-top: 8px;
  			    font-size: 12px;
  			    width: 138px;
  			    margin-left: 29px;
  			}
  			 .bjgext-mini-trend span {
  			      float: left;
  			      /*width: 100%;*/
  			      text-align: center;
  			      line-height: 36px;
  			      color: #666;
  			      font-size: 14px;
  			    }
  			    .bjgext-mini-trend .trend-error-info-mini {
  			      position: absolute;
  			      top: 37px;
  			      left: 0px;
  			      width: 100%;
  			      background: #fff;
  			      z-index: 99999999;
  			      height: 268px;
  			      display: none;
  			      box-shadow: 0px 5px 15px 0 rgba(23,25,27,0.15);
  			      border-radius: 0 0 4px 4px;
  			      width: 460px;
  			      border: 1px solid #ddd;
  			      border-top: none;
  			    }
  			    .bjgext-mini-trend .error-p {
  			      width: 100%;
  			      float: left;
  			      text-align: center;
  			      margin-top: 45px;
  			      font-size: 14px;
  			      color: #666;
  			    }
  			    .bjgext-mini-trend .error-sp {
  			      width: 95px;
  			      margin: 110px auto;
  			      height: 20px;
  			      line-height: 20px;
  			      text-align: center;
  			      color: #000!important;
  			      border: 1px solid #333;
  			      border-radius: 5px;
  			      display: block;
  			      text-decoration: none!important;
  			    }
  			    .bjgext-mini-trend:hover .trend-error-info-mini {
  			      display: block;
  			    }


  			    #coupon_box.coupon-box1 {
  			      width: 560px;
  			      height: 125px;
  			      background-color: #fff;
  			      border: 1px solid #e8e8e8;
  			      border-top: none;
  			      position: relative;
  			      margin: 0px;
  			      padding: 0px;
  			      float: left;
  			      display: block;
  			    }
  			    #coupon_box:after {
  			      display: block;
  			      content: "";
  			      clear: both;
  			    }
  			    .idey_tmall #idey_minibar {
  			      float: none;
  			    }


  			    .minicoupon_detail {
  			      position: absolute;
  			      top: 35px;
  			      right: -1px;
  			      height: 150px;
  			      width: 132px;
  			      display: none;
  			      z-index: 99999999999;
  			      background: #FFF7F8;
  			      border: 1px solid #F95774;
  			    }
  			    #coupon_box:hover .minicoupon_detail {
  			      display: block;
  			    }
  			    .minicoupon_detail img {
  			      width: 114px;
  			      height: 114px;
  			      float: left;
  			      margin-left: 9px;
  			      margin-top: 9px;
  			    }
  			    .minicoupon_detail span {
  			      font-size: 14px;
  			      color: #F95572;
  			      letter-spacing: 0;
  			      font-weight: bold;
  			      float: left;
  			      height: 12px;
  			      line-height: 14px;
  			      width: 100%;
  			      margin-top: 6px;
  			      text-align: center;
  			    }
  			    .coupon-box1 * {
  			      font-family: 'Microsoft YaHei',Arial,SimSun;
  			    }
  			    .coupon-icon {
  			      float: left;
  			      width: 20px;
  			      height: 20px;
  			      background: url('https://cdn.gwdang.com/images/extensions/newbar/coupon_icon.png') 0px 0px no-repeat;
  			      margin: 50px 8px 9px 12px;
  			    }
  			    #coupon_box .coupon-tle {
  			      color: #FF3B5C;
  			      font-size: 24px;
  			      margin-right: 11px;
  			      float: left;
  			      height: 114px;
  			      overflow: hidden;
  			      text-overflow: ellipsis;
  			      white-space: nowrap;
  			      width: 375px;
  			      line-height: 114px;
  			      text-decoration: none!important;
  			    }
  			    #coupon_box .coupon-row{
  			         color: #FF3B5C;
  			      font-size: 12px;
  			      margin-right: 11px;
  			      float: left;
  			      height: 60px;
  			      overflow: hidden;
  			      text-overflow: ellipsis;
  			      white-space: nowrap;
  			      width: 100%;
  			      line-height: 60px;
  			      text-decoration: none!important;
  			        text-align: center;
  			    }
  			    #coupon_box .coupon-tle * {
  			      color: #f15672;
  			    }
  			    #coupon_box .coupon-tle span {
  			      margin-right: 5px;
  			      font-weight: bold;
  			      font-size: 14px;
  			    }
  			    .coupon_gif {
  			      background: url('https://cdn.gwdang.com/images/extensions/newbar/turn.gif') 0px 0px no-repeat;
  			      float: right;
  			      height: 20px;
  			      width: 56px;
  			      margin-top: 49px;
  			    }
  			    .click2get {
  			      background: url('https://cdn.gwdang.com/images/extensions/newbar/coupon_01.png') 0px 0px no-repeat;
  			      float: left;
  			      height: 30px;
  			      width: 96px;
  			      margin-top: 43px;
  			    }
  			    .click2get span {
  			      height: 24px;
  			      float: left;
  			      margin-left: 1px;
  			    }
  			    .c2g-sp1 {
  			      width: 50px;
  			      color: #FF3B5C;
  			      text-align: center;
  			      font-size: 14px;
  			      line-height: 24px!important;
  			    }
  			    .c2g-sp2 {
  			      width: 44px;
  			      line-height: 24px!important;
  			      color: #fff!important;
  			      text-align: center;
  			    }
  			    div#idey_wishlist_div.idey_wishlist_div {
  			      border-bottom-right-radius: 0px;
  			      border-bottom-left-radius: 0px;
  			    }
  			    #qrcode{
  			         float: left;
  			        width: 125px;
  			        margin-top:3px;
  			    }


  			    .elm_box{
  			        height: 37px;
  			     border: 1px solid #ddd;
  			     width: 460px;
  			     line-height: 37px;
  			     margin-bottom: 3px;
  			         background-color: #ff0036;
  			             font-size: 15px;
  			    }
  			    .elm_box span{
  			            width: 342px;
  			    text-align: center;
  			    display: block;
  			    float: left;
  			    color: red;
  			    color: white;
  			    }`


function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

function removeEvent(that, href) {
	that.find("a").attr('target', '');
	that.find("a").unbind("click");
	that.find("a").bind("click", function(e) {
		e.preventDefault();
		if (href != undefined) {
			obj.onclicks(href);
		} else {
			obj.onclicks($(this).attr('href'));
		}

	})
}
obj.initStyle = function() {
	var styles = document.createElement('style')
	styles.type = 'text/css'
	styles.innerHTML = style;
	document.getElementsByTagName('head').item(0).appendChild(styles)
}


obj.initSearchHtml = function(selectorList) {
	setInterval(function() {
		selectorList.forEach(function(selector) {
			obj.initSearchItemSelector(selector);
		});
	}, 3000);
};

obj.initSearchEvent = function() {
	$(document).on("click", ".tb-cool-box-area", function() {
		var $this = $(this);
		if ($this.hasClass("tb-cool-box-wait")) {
			obj.basicQueryItem(this);
		} else if ($this.hasClass("tb-cool-box-info-translucent")) {
			$this.removeClass("tb-cool-box-info-translucent");
		} else {
			$this.addClass("tb-cool-box-info-translucent");
		}
	});
};

obj.basicQuery = function() {
	setInterval(function() {
		$(".tb-cool-box-wait").each(function() {
			obj.basicQueryItem(this);
		});
	}, 3000);
};

obj.initSearchItemSelector = function(selector) {
	$(selector).each(function() {
		obj.initSearchItem(this);
	});
};

obj.initSearchItem = function(selector) {
	var $this = $(selector);
	if ($this.hasClass("tb-cool-box-already")) {
		return;
	} else {
		$this.addClass("tb-cool-box-already")
	}

	var nid = $this.attr("data-id");
	if (!obj.isVailidItemId(nid)) {
		nid = $this.attr("data-itemid");
	}

	if (!obj.isVailidItemId(nid)) {
		if ($this.attr("href")) {
			nid = location.protocol + $this.attr("href");
		} else {
			var $a = $this.find("a");
			if (!$a.length) {
				return;
			}

			nid = $a.attr("data-nid");
			if (!obj.isVailidItemId(nid)) {
				if ($a.hasClass("j_ReceiveCoupon") && $a.length > 1) {
					nid = location.protocol + $($a[1]).attr("href");
				} else {
					nid = location.protocol + $a.attr("href");
				}
			}
		}
	}

	if (obj.isValidNid(nid)) {
		obj.basicQueryItem($this, nid);
	}
};



obj.basicQueryItem = function(selector, nid) {
	var $this = $(selector);
	$.get('https://tb.idey.cn/taobao.php?act=itemlink&itemid=' + nid, function(data) {
		if (data.type == 'success') {
			obj.changeUrl($this, data.data);
		} else {

		}
	}, 'json')
};

obj.changeUrl = function(selector, data) {
	var $this = $(selector);
	var a = $this.find("a");
	$this.find("a").attr('href', data.itemUrl);
	$this.find("a").attr('data-href', data.itemUrl);
	$this.find("a").click(function(e) {
		e.preventDefault();
		obj.onclicks($(this).attr('data-href'));
	})
}


obj.isDetailPageTaoBao = function(url) {
	if (url.indexOf("//item.taobao.com/item.htm") > 0 || url.indexOf("//detail.tmall.com/item.htm") > 0 ||
		url.indexOf("//chaoshi.detail.tmall.com/item.htm") > 0 || url.indexOf(
			"//detail.tmall.hk/hk/item.htm") > 0) {
		return true;
	} else {
		return false;
	}
};

obj.isVailidItemId = function(itemId) {
	if (!itemId) {
		return false;
	}

	var itemIdInt = parseInt(itemId);
	if (itemIdInt == itemId && itemId > 10000) {
		return true;
	} else {
		return false;
	}
};

obj.isValidNid = function(nid) {
	if (!nid) {
		return false;
	} else if (nid.indexOf('http') >= 0) {
		if (obj.isDetailPageTaoBao(nid) || nid.indexOf("//detail.ju.taobao.com/home.htm") > 0) {
			return true;
		} else {
			return false;
		}
	} else {
		return true;
	}
};

obj.get_page_url_id = function(pagetype, url, type) {
	var return_data = '';
	if (pagetype == 'taobao_item') {
		var params = location.search.split("?")[1].split("&");
		for (var index in params) {
			if (params[index].split("=")[0] == "id") {
				var productId = params[index].split("=")[1];
			}
		}
		return_data = productId;
	}
	return return_data;
}

obj.get_type_url = function(url) {
		if (
			url.indexOf("//item.taobao.com/item.htm") > 0 ||
			url.indexOf("//detail.tmall.com/item.htm") > 0 ||
			url.indexOf("//chaoshi.detail.tmall.com/item.htm") > 0 ||
			url.indexOf("//detail.tmall.hk/hk/item.htm") > 0 ||
			url.indexOf("//world.tmall.com") > 0 ||
			url.indexOf("//detail.liangxinyao.com/item.htm") > 0 ||
			url.indexOf("//detail.tmall.hk/item.htm") > 0
		) {
			return 'taobao_item';
		} else if (
			url.indexOf("//maiyao.liangxinyao.com/shop/view_shop.htm") > 0 ||
			url.indexOf("//list.tmall.com/search_product.htm") > 0 ||
			url.indexOf("//s.taobao.com/search") > 0 ||
			url.indexOf("//list.tmall.hk/search_product.htm") > 0
		) {
			return 'taobao_list';
		} else if (
			url.indexOf("//search.jd.com/Search") > 0 ||
			url.indexOf("//search.jd.com/search") > 0 ||
			url.indexOf("//search.jd.hk/search") > 0 ||
			url.indexOf("//search.jd.hk/Search") > 0 ||
			url.indexOf("//www.jd.com/xinkuan") > 0 ||
			url.indexOf("//list.jd.com/list.html") > 0 ||
			url.indexOf("//search.jd.hk/Search") > 0 ||
			url.indexOf("//coll.jd.com") > 0



		) {
			return 'jd_list';
		} else if (
			url.indexOf("//item.jd.hk") > 0 ||
			url.indexOf("//pcitem.jd.hk") > 0 ||
			url.indexOf("//i-item.jd.com") > 0 ||
			url.indexOf("//item.jd.com") > 0 ||
			url.indexOf("//npcitem.jd.hk") > 0 ||
			url.indexOf("//item.yiyaojd.com") > 0 ||
			url.indexOf("//item.jkcsjd.com") > 0
		) {
			return 'jd_item';
		} else if (
			url.indexOf("//miaosha.jd.com") > 0
		) {
			return 'jd_miaosha';
		} else if (
			url.indexOf("//www.jd.com") > 0 ||
			url.indexOf("//jd.com") > 0
		) {
			return 'jd_index';
		} else if (
			url.indexOf("//aliyundrive.com") > 0 ||
            url.indexOf("//www.aliyundrive.com") > 0
		) {
			return 'aliyun_disk';
		}else if(
            url.indexOf("//jingfen.jd.com") >0
        ){
            return 'jingfen';
         }

	}



		var pageurl = location.href;
var pagetype = obj.get_type_url(pageurl);
if (pagetype == 'taobao_item') {
	var productId = obj.get_page_url_id(pagetype, pageurl, pageurl);

		obj.initStyle(style);
		//	var productId = obj.get_page_url_id(pagetype, pageurl, pageurl);
		var couponurl = "https://s.idey.cn/ltb.php?act=items&itemurl=" + encodeURIComponent(location.href) +
			'&itemid=' +
			productId;
		$.getJSON(couponurl, function(res) {
			var data = res.data;

			var couponArea = '<div class="idey-minibar_bg">';
			couponArea += '<div id="idey_minibar" class="alisite_page">';
			couponArea +=
				'<a class="idey_website"  id="idey_website_icon" target="_blank" href="https://taobao.idey.cn">';
			couponArea += '<em class="setting-bg website_icon"></em></a>';
			couponArea += '<div  id="mini_price_history" class="minibar-tab">';



			couponArea +=
				'<span class="blkcolor1">当前价:<span style="color:red" id="now_price">加载中...</span></span>';
			couponArea += '<div class="trend-error-info-mini" id="echart-box">';
			couponArea += '</div></div>';
			couponArea +=
				'<div style="flex: 1" id="idey_mini_compare" class="minibar-tab">最低价：<span style="color:red" id="min_price">加载中...</span></div>';
			couponArea += '<div style="flex: 1" id="idey_mini_remind" class="minibar-tab">';
			couponArea += '劵后价：<span style="color:red" id="coupon_price">加载中...</span>';

			couponArea += ' </div></div>';
			couponArea +=
				' <div class="idey-mini-placeholder idey-price-protect"></div><div id="promo_box"></div>';



			if (res.type == 'success') {
					couponArea +=
						'<a id="coupon_box" title="" class="coupon-box1" href="https://zbhui.cn/coupon.php?itemurl=' +
						encodeURIComponent(location.href) + '&itemid='+productId+'">';
					couponArea += '<span class="coupon-icon"></span>';
					couponArea += ' <div class="coupon-tle"> <span>当前商品领券立减' + data.couponAmount +
						'元</span> <em class="coupon_gif"></em></div>';
					couponArea += '<div class="click2get"><span class="c2g-sp1">￥' + data.couponAmount +
						'</span><span class="c2g-sp2">领取</span></div>';
					couponArea += '</a>';

			} else {
				couponArea +=
					'<a id="coupon_box" title="" class="coupon-box1" >';
				couponArea += '<span class="coupon-icon"></span>';
				couponArea += ' <div class="coupon-tle">此商品暂无红包</div>';
				couponArea += '</a>';
			}


			couponArea += '</div>';
			if (data.alist.length > 0) {
				for (let i = 0; i < data.alist.length; i++) {
					couponArea +=
						'<div style="border:1px solid red;line-height:60px;color:red;font-size:20px;text-align:center;width:525px"><a href="' +
						data.alist[i].url + '" target="_blank">' + data.alist[i].name + '</a></div>'
				}
			}
            setTimeout(function(){
                if (location.href.indexOf("//detail.tmall") != -1) {
                    $(".tm-fcs-panel").after(couponArea);
                    $(".Promotion--root--3qHQalP").after(couponArea);
                } else {
                    $("ul.tb-meta").after(couponArea);
                }
                if (data.originalPrice) {
                    $("#now_price").html('¥' + data.originalPrice);
                }
                if (data.actualPrice) {
                    $("#coupon_price").html('¥' + data.actualPrice);
                }
            }, 1800 )
			 if(data.shortUrl){
					let hbm='<div style="position:fixed;width:170px;height:170px;right:28px;bottom:10px;z-index: 99999999;"><h1 style="color:red;font-size: 11px">使用淘宝APP领劵购买此商品</h1><div id="hbcode"></div></div>';
															$("body").append(hbm);
															$("#hbcode").qrcode({
																	render: "canvas", //也可以替换为table
																	width: 160,
																	height: 150,
																	text: data.shortUrl
																});
																}

		});

} else if (pagetype == 'jd_item') {
	obj.initStyle(style);
		var productId = /(\d+)\.html/.exec(window.location.href)[1];
		var couponurl = "https://tbao.idey.cn/jd.php?act=recovelink&itemurl=" + encodeURIComponent(location.href) +
			'&itemid=' + productId;
		$.getJSON(couponurl, function(res) {
			var data = res.data;
			if (!obj.GetQueryString('utm_campaign') && data) {
				window.location.href = 'https://wk.idey.cn/red.html?url=' + encodeURIComponent(data);
			}

		});
		var couponurls = "https://s.idey.cn/xjd.php?act=item&itemurl=" + encodeURIComponent(location.href) +
			'&itemid=' + productId;

		$.getJSON(couponurls, function(res) {
			var data = res.data;

			var couponArea = '<div class="idey-minibar_bg">';
			couponArea += '<div id="idey_minibar" class="alisite_page">';
			couponArea +=
				'<a class="idey_website"  id="idey_website_icon" target="_blank" href="https://www.idey.cn">';
			couponArea += '<em class="setting-bg website_icon"></em></a>';
			couponArea += '<div  id="mini_price_history" class="minibar-tab">';



			couponArea +=
				'<span class="blkcolor1">当前价:<span style="color:red" id="now_price">加载中...</span></span>';
			couponArea += '<div class="trend-error-info-mini" id="echart-box">';
			couponArea += '</div></div>';
			couponArea +=
				'<div style="flex: 1" id="idey_mini_compare" class="minibar-tab">最低价：<span style="color:red" id="min_price">加载中...</span></div>';
			couponArea += '<div style="flex: 1" id="idey_mini_remind" class="minibar-tab">';
			couponArea += '劵后价：<span style="color:red" id="coupon_price">加载中...</span>';

			couponArea += ' </div></div>';
			couponArea +=
				' <div class="idey-mini-placeholder idey-price-protect"></div><div id="promo_box"></div>';



			if (res.type == 'success') {
				if (data.couponLinkType == 1) {
					couponArea +=
						'<a id="coupon_box" title="" class="coupon-box1" href="' + data.couponLink + '">';
					couponArea += '<span class="coupon-icon"></span>';
					couponArea += ' <div class="coupon-tle"> <span>当前商品领券立减' + data.couponAmount +
						'元</span> <em class="coupon_gif"></em></div>';
					couponArea += '<div class="click2get"><span class="c2g-sp1">￥' + data.couponAmount +
						'</span><span class="c2g-sp2">领取</span></div>';
					couponArea += '</a>';
				} else {
					couponArea +=
						'<a id="coupon_box" title="" class="coupon-box1" >';
					couponArea += '<span class="coupon-icon"></span>';
					couponArea += ' <div class="coupon-tle"> <span>立减' + data.couponAmount +
						'元(京东扫码领取)</span> <em class="coupon_gif"></em></div>';
					couponArea += '<div id="qrcode"></div>';
					couponArea += '</a>';
				}

			} else {

				couponArea +=
					'<a id="coupon_box" title="" class="coupon-box1" >';
				couponArea += '<span class="coupon-icon"></span>';
				couponArea += ' <div class="coupon-tle">此商品暂无红包</div>';

				couponArea += '</a>';


			}

			couponArea += '</div>';
			if (data.alist.length > 0) {
				for (let i = 0; i < data.alist.length; i++) {
					couponArea +=
						'<div style="border:1px solid red;line-height:60px;color:red;font-size:20px;text-align:center;width:525px"><a href="' +
						data.alist[i].url + '" target="_blank">' + data.alist[i].name + '</a></div>'
				}
			}
            setTimeout(function(){

			$(".summary-price-wrap").after(couponArea);
            },500)

			if (data.couponLink) {
				$('#qrcode').qrcode({
					render: "canvas", //也可以替换为table
					width: 125,
					height: 120,
					text: data.couponLink
				});

			} else if (data.item_link.shortUrl) {
				$('#qrcode').qrcode({
					render: "canvas", //也可以替换为table
					width: 125,
					height: 120,
					text: data.item_link.shortUrl
				});
			} else {
				$('#qrcode').qrcode({
					render: "canvas", //也可以替换为table
					width: 125,
					height: 120,
					text: data.item_link.longUrl
				});
			}
			if (data.item_link.originalPrice) {
				$("#now_price").html('¥' + data.item_link.originalPrice);
			}
			if (data.item_link.actualPrice) {
				$("#coupon_price").html('¥' + data.item_link.actualPrice);
			}
			if(data.hbcode !=''){
				let hbm='<div style="position:fixed;width:160px;height:160px;right:28px;bottom:50px;z-index:999"><h1 style="color:red;font-size: 11px">使用京东APP领劵购买此商品</h1><div id="hbcode"></div></div>';

										            $(".toolbar-qrcode").hide();
										            setInterval(function(){
										                $(".toolbar-qrcode").hide();
										            },100 )
										              $("body").append(hbm);
										                	$("#hbcode").qrcode({
																		render: "canvas", //也可以替换为table
																		width: 150,
																		height: 140,
																		text: data.hbcode
																	});
			}


		});

} else if (pagetype == 'jd_list') {
	setInterval(obj.get_url, 300);


} else if (pagetype == 'jd_miaosha') {
	$(".seckill_mod_goodslist li").find("a").click(function(e) {
		if ($(this).attr('data-ref')) {
			e.preventDefault();
			obj.onclicks($(this).attr('data-ref'));
		}
	})

	setInterval(obj.get_miaosha, 300);

} else if (pagetype == 'taobao_list') {


}else if(pagetype=="jingfen"){
        $(document).ready(function(){
            setTimeout(function(){
                $(".btn-area").after("<div class='coupon_info' style='color: wheat;font-size: 24px;'>使用微信或者京东APP扫码更便捷</div>");
                $(".btn-area").after("<div class='coupon_code'></div>");
             //   $(".btn-area").hide();
                $('.coupon_code').qrcode({
					render: "canvas", //也可以替换为table
					width: 400,
					height: 380,
					text: location.href
				});
            }, 1000 )
        });
    } else if(pagetype=='aliyun_disk') {


        var updateInfoVer = "1.0.0";
        var swalCssVer = "1.0.0";
        var donateVer = "1.0.0";
        var feedbackVer = "1.0.0";
        var locUrl = location.href;
        var bdlinkPattern = /[\?#]alink=([\da-zA-Z+/=]+)/;
        var TAG = "[秒传链接提取 by mengzonefire]";
        var homePage = "https://greasyfork.org/zh-CN/scripts/432065";
        var donatePage = "https://afdian.net/@mengzonefire";
        var ajaxError = 514;
        var extCssUrl = {
            Default: "https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css",
            Dark: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@5/dark.min.css",
            "WordPress Admin": "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-wordpress-admin@5/wordpress-admin.min.css",
            "Material UI": "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-material-ui@5/material-ui.min.css",
            Bulma: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma@5/bulma.min.css",
            "Bootstrap 4": "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.min.css"
        };
        var appError = {
            missDepend: "外部资源加载失败, 脚本无法运行, 请检查网络或更换DNS",
            SwalCssInvalid: "样式包加载错误, 请前往脚本页反馈F12控制台截图\n" + homePage,
            SwalCssErrReq: "样式包加载失败"
        };
        var doc = {
            linkTypeDoc: "https://shimo.im/docs/WGWcxYDrqChxQyJ3/"
        };
        var linkStyle = 'class="mzf_link" rel="noopener noreferrer" target="_blank"';
        var btnStyle = 'class="mzf_btn" rel="noopener noreferrer" target="_blank"';
        var htmlDonate = '<p id="mzf_donate" class="mzf_text">若喜欢该脚本, 可前往 <a href="' + donatePage + '" ' + linkStyle + '>赞助页</a> 支持作者<a id="kill_donate" class="mzf_btn">不再显示</a></p>';
        var htmlFeedback = '<p id="mzf_feedback" class="mzf_text">若有任何疑问, 可前往 <a href="' + homePage + '" ' + linkStyle + '>脚本主页</a> 反馈<a id="kill_feedback" class="mzf_btn">不再显示</a></p>';
        function initQueryLink() {
            var bdlinkB64 = locUrl.match(bdlinkPattern);
            return bdlinkB64 ? bdlinkB64[1].fromBase64() : "";
        }
        function aliyunParser() {}
        aliyunParser.parse = function generalDuCodeParse(szUrl) {
            var r;
            szUrl = szUrl.trim();
            if (szUrl.indexOf("aliyunpan://") === 0) {
                r = aliyunParser.parseAliyun_v1(szUrl);
                r.ver = "aliyun";
            } else if (szUrl.indexOf("115://") === 0) {
                r = aliyunParser.parseAliyun_v2(szUrl);
                r.ver = "115";
            }
            return r;
        };
        aliyunParser.parseAliyun_v1 = function(szUrl) {
            return szUrl.split("\n").map((function(z) {
                return z.trim().match(/aliyunpan:\/\/([\s\S]+)\|([\dA-F]{40})\|([\d]{1,20})/);
            })).filter((function(z) {
                return z;
            })).map((function(info) {
                return {
                    hash: info[2],
                    size: Number(info[3]),
                    path: info[1]
                };
            }));
        };
        aliyunParser.parseAliyun_v2 = function(szUrl) {
            return szUrl.split("\n").map((function(z) {
                return z.trim().match(/115:\/\/([\s\S]+)\|([\d]{1,20})\|([\dA-F]{40})/);
            })).filter((function(z) {
                return z;
            })).map((function(info) {
                return {
                    hash: info[3],
                    size: Number(info[2]),
                    path: info[1]
                };
            }));
        };
        var updateInfo = __webpack_require__(184);
        var updateInfo_default = __webpack_require__.n(updateInfo);
        var SwalConfig = {
            inputView: {
                title: "请输入秒传",
                input: "textarea",
                showCancelButton: true,
                inputPlaceholder: "[支持aliyun/115][支持批量(换行分隔)]\n[输入set进入设置页]",
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValidator: function(value) {
                    if (!value) {
                        return "链接不能为空";
                    }
                    if (value === "set") {
                        return;
                    }
                    if (!aliyunParser.parse(value)) {
                        return '<p>未识别到正确的链接 <a href="' + doc.linkTypeDoc + '" ' + linkStyle + ">查看支持格式</a></p>";
                    }
                }
            },
            renameView: {
                title: "请输入秒传",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            },
            processView: {
                showCloseButton: true,
                showConfirmButton: false,
                allowOutsideClick: false
            },
            finishView: {
                showCloseButton: true,
                allowOutsideClick: false
            },
            updateInfo: {
                title: "秒传链接提取[阿里版] 更新内容",
                showCloseButton: true,
                allowOutsideClick: false,
                confirmButtonText: "知道了",
                html: updateInfo_default()
            },
            settingView: {
                title: "秒传链接提取 设置页",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                allowOutsideClick: false,
                input: "select",
                inputValue: GM_getValue("swalThemes") || "Default",
                inputOptions: {
                    Default: "Default 白色主题(默认)",
                    Bulma: "Bulma 白色简约",
                    "Bootstrap 4": "Bootstrap4 白色简约",
                    "Material UI": "MaterialUI 白色主题",
                    Dark: "Dark 黑色主题",
                    "WordPress Admin": "WordPressAdmin 灰色主题"
                }
            },
            settingWarning: {
                title: "设置成功 刷新页面生效",
                showCloseButton: true,
                allowOutsideClick: false,
                confirmButtonText: "知道了"
            }
        };
        var __assign = undefined && undefined.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function ajax(config, callback, failback) {
            GM_xmlhttpRequest(__assign(__assign({}, config), {
                onload: function(r) {
                    if (Math.floor(r.status / 100) === 2) callback(r); else failback(r.status);
                },
                onerror: function() {
                    failback(ajaxError);
                }
            }));
        }
        function showAlert(text) {
            alert(TAG + ":\n" + text);
        }
        function parsefileInfo(fileInfoList) {
            var bdcode = "";
            var failedInfo = "";
            var failedCount = 0;
            var successList = [];
            fileInfoList.forEach((function(item) {
                if (item.errno) {
                    failedCount++;
                    failedInfo += "<p>文件：" + item.path + "</p><p>失败原因：" + aliyunErrno(item.errno) + "(#" + item.errno + ")</p>";
                } else {
                    bdcode += "aliyunpan://" + item.path + "|" + item.hash + "|" + item.size + "\n";
                    successList.push(item);
                }
            }));
            if (failedInfo) failedInfo = "<p>失败文件列表:</p>" + failedInfo;
            bdcode = bdcode.trim();
            return {
                htmlInfo: failedInfo,
                failedCount,
                bdcode,
                successList
            };
        }
        function getAccessToken(onFinish) {
            ajax({
                url: tokenUrl,
                method: "POST",
                responseType: "json",
                headers: {
                    "Content-type": "application/json;charset=utf-8"
                },
                data: JSON.stringify({
                    refresh_token: JSON.parse(localStorage.getItem("token")).refresh_token
                })
            }, (function(data) {
                data = data.response;
                if (data.access_token) setToken(data.access_token); else {
                    showAlert("获取token失败, 请尝试刷新页面, 或重新登录");
                    return;
                }
                var drive_id = localStorage.getItem("token");
                if (drive_id) setDriverId(JSON.parse(drive_id).default_drive_id); else {
                    showAlert("获取driveId失败, 请尝试刷新页面, 或重新登录");
                    return;
                }
                onFinish();
            }), (function(statusCode) {
                showAlert("获取token失败(" + statusCode + "), 请尝试刷新页面, 或重新登录");
            }));
        }
        function addXMLRequestCallback(callback) {
            (function(open) {
                XMLHttpRequest.prototype.open = function() {
                    this.addEventListener("readystatechange", (function() {
                        if (this.readyState === 4) {
                            callback(this);
                        }
                    }), false);
                    open.apply(this, arguments);
                };
            })(XMLHttpRequest.prototype.open);
        }
        var pathInfoList = {};
        var searchInfoList = {};
        function XHRcallback(xhr) {
            var action = "";
            if (xhr.responseURL == "https://api.aliyundrive.com/adrive/v3/file/list") action = "list"; else if (xhr.responseURL == "https://api.aliyundrive.com/adrive/v3/file/search") action = "search"; else {
                return;
            }
            JSON.parse(xhr.response).items.forEach((function(item) {
                var data;
                if (item.type == "folder") {
                    data = {
                        file_id: item.file_id
                    };
                } else {
                    data = {
                        file_id: item.file_id,
                        size: item.size,
                        hash: item.content_hash
                    };
                }
                if (action == "list") pathInfoList[item.name] = data; else if (action == "search") searchInfoList[item.name] = data;
            }));
        }
        var __spreadArray = undefined && undefined.__spreadArray || function(to, from) {
            for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
            return to;
        };
        var Swalbase = function() {
            function Swalbase(rapiduploadTask, generatebdlinkTask) {
                this.rapiduploadTask = rapiduploadTask;
                this.generatebdlinkTask = generatebdlinkTask;
            }
            Swalbase.prototype.mergeArg = function() {
                var inputArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    inputArgs[_i] = arguments[_i];
                }
                var output = {};
                $.extend.apply($, __spreadArray([ output, this.swalArgs ], inputArgs));
                return output;
            };
            Swalbase.prototype.inputView = function(swalArg) {
                var _this = this;
                Swal.fire(this.mergeArg(SwalConfig.inputView, swalArg)).then((function(result) {
                    if (result.isConfirmed) {
                        if (result.value === "set") _this.settingView(); else {
                            _this.rapiduploadTask.fileInfoList = aliyunParser.parse(result.value);
                            _this.processView();
                        }
                    }
                }));
            };
            Swalbase.prototype.processView = function() {
                var _this = this;
                var swalArg = {
                    title: "文件提取中",
                    html: "正在转存第 <file_num>0</file_num> 个",
                    willOpen: function() {
                        Swal.showLoading();
                        _this.saveFileWork();
                    }
                };
                Swal.fire(this.mergeArg(SwalConfig.processView, swalArg));
            };
            Swalbase.prototype.finishView = function(isGen) {
                var action = isGen ? "生成" : "转存";
                var fileInfoList = isGen ? this.generatebdlinkTask.fileInfoList : this.rapiduploadTask.fileInfoList;
                var parseResult = parsefileInfo(fileInfoList);
                if (isGen) this.rapiduploadTask.fileInfoList = parseResult.successList;
                var html = parseResult.htmlInfo;
                var htmlFooter = "";
                if (!GM_getValue(donateVer + "_kill_donate")) htmlFooter += htmlDonate;
                if (!GM_getValue(feedbackVer + "_kill_donate")) htmlFooter += htmlFeedback;
                if (htmlFooter) htmlFooter = "<p><br></p>" + htmlFooter;
                var swalArg = {
                    title: action + "完毕 共" + fileInfoList.length + "个, 失败" + parseResult.failedCount + "个!",
                    confirmButtonText: parseResult.failedCount !== fileInfoList.length && isGen ? "复制秒传代码" : "确认",
                    html: html + htmlFooter
                };
                Swal.fire(this.mergeArg(SwalConfig.finishView, swalArg)).then((function(result) {
                    if (result.isConfirmed) {
                        if (isGen) {
                            GM_setClipboard(parseResult.bdcode);
                        } else {
                            var alink = location.href.match(bdlinkPattern);
                            if (alink) location.href = location.href.replace(alink[0], ""); else location.reload();
                        }
                    }
                }));
            };
            Swalbase.prototype.renameView = function() {
                var _this = this;
                var infoList = {}, selectFile, selectNode = document.querySelectorAll('div[data-is-selected="true"]');
                if (selectNode.length === 1) selectFile = selectNode[0].innerText.split("\n\n")[0]; else {
                    showAlert("未选中文件/选中了多个文件");
                    return;
                }
                infoList = location.href.indexOf("/drive/search/") !== -1 ? searchInfoList : pathInfoList;
                Swal.fire(this.mergeArg(SwalConfig.renameView, {
                    inputValue: selectFile,
                    inputValidator: function(value) {
                        if (value === selectFile) return; else if (infoList[value]) return "路径下存在同名文件/文件夹";
                    }
                })).then((function(result) {
                    if (result.isConfirmed) {
                        if (result.value === selectFile) return; else _this.renameWork(infoList[selectFile].file_id, result.value);
                    }
                }));
            };
            Swalbase.prototype.settingView = function() {
                var _this = this;
                Swal.fire(this.mergeArg(SwalConfig.settingView)).then((function(result) {
                    if (result.isConfirmed) {
                        GM_setValue("swalThemes", result.value);
                        Swal.close();
                        Swal.fire(_this.mergeArg(SwalConfig.settingWarning));
                    }
                }));
            };
            Swalbase.prototype.updateInfo = function(onConfirm) {
                Swal.fire(this.mergeArg(SwalConfig.updateInfo)).then((function(result) {
                    if (result.isConfirmed) onConfirm();
                }));
            };
            Swalbase.prototype.saveFileWork = function() {
                var _this = this;
                this.rapiduploadTask.onFinish = function() {
                    _this.finishView(false);
                };
                this.rapiduploadTask.onProcess = function(i, fileInfoList) {
                    Swal.getHtmlContainer().querySelector("file_num").textContent = i + 1 + " / " + fileInfoList.length;
                };
                this.rapiduploadTask.start();
            };
            Swalbase.prototype.genFileWork = function() {
                var _this = this;
                var infoList = {}, selectList = [], selectNode = document.querySelectorAll('div[data-is-selected="true"]');
                if (selectNode.length) selectNode.forEach((function(item) {
                    selectList.push(item.innerText.split("\n\n")[0]);
                })); else {
                    showAlert("未选中文件");
                    return;
                }
                infoList = location.href.indexOf("/drive/search/") !== -1 ? searchInfoList : pathInfoList;
                selectList.forEach((function(item) {
                    var fileInfo = infoList[item].hash ? {
                        path: item,
                        hash: infoList[item].hash,
                        size: infoList[item].size
                    } : {
                        path: item,
                        errno: 900
                    };
                    _this.generatebdlinkTask.fileInfoList.push(fileInfo);
                }));
                this.finishView(true);
            };
            Swalbase.prototype.renameWork = function(file_id, name) {
                ajax({
                    url: renameUrl,
                    method: "POST",
                    responseType: "json",
                    headers: {
                        "Content-type": "application/json;charset=utf-8",
                        Authorization: access_token
                    },
                    data: JSON.stringify({
                        drive_id: driver_id,
                        file_id,
                        name,
                        check_name_mode: "refuse"
                    })
                }, (function() {
                    location.reload();
                }), (function(statusCode) {
                    showAlert("重命名失败(" + statusCode + ")");
                }));
            };
            return Swalbase;
        }();
        const SwalBase = Swalbase;
        var GeneratebdlinkTask = function() {
            function GeneratebdlinkTask() {}
            GeneratebdlinkTask.prototype.reset = function() {
                this.fileInfoList = [];
            };
            return GeneratebdlinkTask;
        }();
        const common_GeneratebdlinkTask = GeneratebdlinkTask;
        var RapiduploadTask = function() {
            function RapiduploadTask() {}
            RapiduploadTask.prototype.reset = function() {
                this.fileInfoList = [];
                this.onFinish = function() {};
                this.onProcess = function() {};
            };
            RapiduploadTask.prototype.start = function() {
                this.interval = this.fileInfoList.length > 1 ? 2e3 : 1e3;
                var nowPath = location.href.match(/drive\/folder\/([\da-z]+)/);
                this.savePath = nowPath ? nowPath[1] : "root";
                this.saveFile(0);
            };
            RapiduploadTask.prototype.saveFile = function(i) {
                var _this = this;
                if (i >= this.fileInfoList.length) {
                    this.onFinish(this.fileInfoList);
                    return;
                }
                this.onProcess(i, this.fileInfoList);
                var file = this.fileInfoList[i];
                ajax({
                    url: creatUrl,
                    method: "POST",
                    responseType: "json",
                    headers: {
                        "Content-type": "application/json;charset=utf-8",
                        Authorization: access_token
                    },
                    data: JSON.stringify({
                        drive_id: driver_id,
                        parent_file_id: this.savePath,
                        size: file.size,
                        name: file.path,
                        content_hash: file.hash,
                        type: "file",
                        check_name_mode: "refuse",
                        content_hash_name: "sha1"
                    })
                }, (function(data) {
                    data = data.response;
                    if (data.exist) file.errno = -8; else if (!data.rapid_upload) file.errno = 404;
                    setTimeout((function() {
                        _this.saveFile(i + 1);
                    }), _this.interval);
                }), (function(statusCode) {
                    file.errno = statusCode;
                    _this.saveFile(i + 1);
                }));
            };
            return RapiduploadTask;
        }();
        const common_RapiduploadTask = RapiduploadTask;
        var tokenUrl = "https://websv.aliyundrive.com/token/refresh";
        var renameUrl = "https://api.aliyundrive.com/v3/file/update";
        var creatUrl = "https://api.aliyundrive.com/v2/file/create";
        var htmlTag = "div.breadcrumb-wrap--2iqqe";
        var htmlTag2 = "div.content--1zqgM";
        var const_btnStyle = 'class="button-wrapper--1UkG6" data-type="primary" style="margin-left: 20px;"';
        var renameBtn = '<div id="mzf_rename" ' + const_btnStyle + ">重命名</div>";
        var bdlinkBtn = '<div id="mzf_bdlink" ' + const_btnStyle + ">秒传链接</div>";
        var genBtn = '<div id="mzf_gen" ' + const_btnStyle + ">生成秒传</div>";
        var access_token = "";
        var driver_id = "";
        function setToken(mytoken) {
            access_token = mytoken;
        }
        function setDriverId(myDriverId) {
            driver_id = myDriverId;
        }
        var swalInstance = new SwalBase(new common_RapiduploadTask, new common_GeneratebdlinkTask);
        function aliyunErrno(errno) {
            switch (errno) {
              case -8:
                return "路径下存在同名文件/文件夹";

              case 404:
                return "秒传未生效";

              case 900:
                return "文件夹不支持生成秒传";

              default:
                return "未知错误";
            }
        }
        function loaderAliyun() {
            var bdlink = initQueryLink();
            if (bdlink) swalInstance.inputView({
                inputValue: bdlink
            }); else if (!GM_getValue(updateInfoVer + "_no_first")) swalInstance.updateInfo((function() {
                GM_setValue(updateInfoVer + "_no_first", true);
            }));
            console.info("%s DOM方式安装，若失效请报告。", TAG);
            addBtn();
            $(document).on("click", "#mzf_gen", (function() {
                swalInstance.generatebdlinkTask.reset();
                swalInstance.genFileWork();
            }));
            $(document).on("click", "#mzf_bdlink", (function() {
                swalInstance.rapiduploadTask.reset();
                swalInstance.inputView();
            }));
            $(document).on("click", "#mzf_rename", (function() {
                swalInstance.renameView();
            }));
            $(document).on("click", "#kill_donate", (function() {
                GM_setValue(feedbackVer + "_kill_donate", true);
                $("#mzf_donate").remove();
            }));
            $(document).on("click", "#kill_feedback", (function() {
                GM_setValue(donateVer + "_kill_feedback", true);
                $("#mzf_feedback").remove();
            }));
        }
        function addBtn() {
            var targetTag = $(htmlTag);
            if (targetTag.length && targetTag.children.length === 2) {
                targetTag.append(renameBtn).append(bdlinkBtn).append(genBtn);
                addObserver();
            } else setTimeout(addBtn, 100);
        }
        function addObserver() {
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            var observer = new MutationObserver((function() {
                var targetTag = $(htmlTag);
                if (targetTag.length && targetTag.children.length === 2) targetTag.append(renameBtn).append(bdlinkBtn).append(genBtn);
            }));
            observer.observe($(htmlTag2)[0], {
                childList: true
            });
        }
        var app = __webpack_require__(555);
        var app_default = __webpack_require__.n(app);
        function injectStyle() {
            GM_addStyle(app_default());
            var swalThemes = GM_getValue("swalThemes") || "Default";
            var defaultThemes = GM_getResourceText("swalCss");
            if (swalThemes === "Default") {
                if (defaultThemes) {
                    GM_addStyle(defaultThemes);
                } else {
                    getThemesCss(swalThemes);
                }
                return;
            }
            var ThemesCss = GM_getValue("" + swalCssVer + swalThemes);
            if (ThemesCss) {
                GM_addStyle(ThemesCss);
            } else {
                getThemesCss(swalThemes);
            }
            return;

        }
        function getThemesCss(swalThemes) {
            ajax({
                url: extCssUrl[swalThemes],
                method: "GET"
            }, (function(data) {
                var ThemesCss = data.responseText;
                if (ThemesCss.length < 100) {
                    console.log(swalThemes + " InvalidCss:\n" + ThemesCss);
                    showAlert(appError.SwalCssInvalid);
                    return;
                }
                GM_setValue("" + swalCssVer + swalThemes, ThemesCss);
                GM_addStyle(ThemesCss);
            }), (function(statusCode) {
                showAlert(appError.SwalCssErrReq + ("(http#" + statusCode + ")"));
            }));
        }
        function app_app() {
            if ([ typeof Base64, typeof $, typeof Swal ].indexOf("undefined") !== -1) showAlert(appError.missDepend); else {
                addXMLRequestCallback(XHRcallback);
                Base64.extendString();
                injectStyle();
                jQuery((function() {
                    getAccessToken((function() {
                        loaderAliyun();
                    }));
                }));
            }
        }

        try {
            app_app();
        } catch (error) {

            console.log(error);



        }
    }
    })();

})();