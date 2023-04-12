// ==UserScript==
// @name               Wechat Article Menu
// @name:zh-CN         微信公众号文章菜单选项
// @description        Wechat Article Menu, Show Some Useful Options.
// @description:zh-CN  微信公众号文章菜单选项，展示一些有用的选项。
// @namespace          https://www.runningcheese.com
// @version            0.7
// @author             RunningCheese
// @match              https://mp.weixin.qq.com/s/*
// @match              https://mp.weixin.qq.com/s?*
// @run-at             document-start
// @icon               https://t1.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mp.weixin.qq.com
// @license            MIT
// ==/UserScript==


javascript: {
    (function(links, position, stopPropagation, showOnClick, timestamp) {
  var document = window.document;
  var style = ".ws_cmbmc{position:absolute;z-index:10123456;width:130px;min-width:135px;display:block;visibility:hidden;border:1px solid #D9DADC;background:#fff;padding:3px 3px 3px 3px;text-align:left;}.ws_cmbmc a{display:block;float:left;margin:0;width:113px;border:none;padding:8px 0 8px 22px;background:#fff;color:black;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}.ws_cmbmc a:hover{background:#a0a0a0;color:white;border:none;text-decoration:none;font:normal normal normal 12px/100% Verdana,sans-serif;letter-spacing:normal;word-spacing:normal;}";
  var divId = "ws_cmbm-" + timestamp;
  var div = document.getElementById(divId);
  var styleId = "ws_cmbms-" + timestamp;
  var styleElement = document.getElementById(styleId);
  var positionMap = {
    tl: {
      left: "25px",
      top: "25px"
    },
    tr: {
      left: "25px",
      top: "25px"
    },
    bl: {
      left: "25px",
      bottom: "25px"
    },
    br: {
      left: "25px",
      bottom: "25px"
    }
  };

  function show() {
    div.style.visibility = "visible";
  }

  if (div) {
    if (div.style.visibility == "visible") {
      show();
    } else {
      show();
    }
    return;
  }

  if (!styleElement) {
    style = style.replace(/.ws_cmbmc/g, "#" + divId);
    styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.id = styleId;
    styleElement.appendChild(document.createTextNode(style));
    document.getElementsByTagName("head")[0].appendChild(styleElement);
  }

  div = document.createElement("div");
  div.setAttribute("id", divId);
  div.className = "ws_cmbmc";

  for (var i = 0; i < links.length; i++) {
    var link = document.createElement("a");
    link.appendChild(document.createTextNode(links[i].title));
    link.setAttribute("href", links[i].url);
    if (showOnClick) {
      link.onclick = show;
    }
    div.appendChild(link);
  }

  document.getElementsByTagName("body")[0].appendChild(div);

  if (positionMap.hasOwnProperty(position)) {
    for (var key in positionMap[position]) {
      div.style[key] = positionMap[position][key];
    }
  } else if (position == "c") {
    div.style.left = Math.round((window.innerWidth - div.offsetWidth) / 2) + "px";
    div.style.top = Math.round((window.innerHeight - div.offsetHeight) / 2) + "px";
  }

  if (stopPropagation) {
    document.onclick = function() {
      show();
      if (typeof window.onclick == "function") {
        window.onclick();
      }
    };
    div.onclick = function(event) {
      event.stopPropagation();
    };
  }

  show();
})([{
    title: "文章封面",
    url: "javascript:(function() { url = document.querySelector(%22meta[property=\x27twitter:image\x27]%22).content; window.open(url,\x27_blank\x27); })();"
}, {
    title: "文章摘要",
    url: "javascript:(function() { summary = document.querySelector(\x27meta[name=\x22description\x22]\x27).content; prompt(\x27文章摘要：\x27,summary)})();"
}, {
    title: "净化链接",
    url: "javascript:(function(){const rules={\x27mp.weixin.qq.com\x27:{testReg:/^http(?:s)?:\\/\\/mp\\.weixin\\.qq\\.com\\/s\\?.*$/i,query:[\x27__biz\x27,\x27idx\x27,\x27mid\x27,\x27sn\x27,\x27src\x27,\x27timestamp\x27,\x27ver\x27,\x27signature\x27]},other:{testReg:/^(http(?:s)?:\\/\\/[^?#]*)[?#].*$/i,query:[\x27id\x27,\x27tid\x27,\x27uid\x27,\x27q\x27,\x27wd\x27,\x27query\x27,\x27keyword\x27,\x27keywords\x27]}};const%20pureUrl=function(url=window.location.href){const%20hash=url.replace(/^[^#]*(#.*)?$/,\x27$1\x27),base=url.replace(/(\\?|#).*$/,\x27\x27);let%20pureUrl=url;const%20getQueryString=function(key){let%20ret=url.match(new%20RegExp(\x27(?:\\\\?|&)(\x27+key+\x27=[^?#&]*)\x27,\x27i\x27));return%20null===ret?\x27\x27:ret[1]},methods={decodeUrl:function(url){return%20decodeURIComponent(url)}};for(let%20i%20in%20rules){let%20rule=rules[i],reg=rule.testReg,replace=rule.replace;if(reg.test(url)){let%20newQuerys=\x27\x27;void%200!==rule.query&&rule.query.length>0&&rule.query.map(query=>{const%20ret=getQueryString(query);\x27\x27!==ret&&(newQuerys+=(newQuerys.length?\x27&\x27:\x27?\x27)+ret)}),newQuerys+=void%200!==rule.hash&&rule.hash?hash:\x27\x27,pureUrl=(void%200===replace?base:url.replace(reg,replace))+newQuerys,void%200!==rule.methods&&rule.methods.length>0&&rule.methods.map(methodName=>{pureUrl=methods[methodName](pureUrl)});break}}return%20pureUrl}();let%20newnode=document.createElement(\x27input\x27);newnode.id=\x27pure-url-for-copy\x27,newnode.value=pureUrl,document.body.appendChild(newnode);let%20copyinput=document.getElementById(\x27pure-url-for-copy\x27);copyinput.select();try{document.execCommand(\x27copy\x27);window.location.href===pureUrl?window.location.reload():window.location.href=pureUrl}catch(err){null!=prompt(\x27%E5%87%80%E5%8C%96%E5%90%8E%E7%9A%84%E7%BD%91%E5%9D%80%E6%98%AF%EF%BC%9A\x27,pureUrl)&&(window.location.href=pureUrl)}document.body.removeChild(copyinput)})();"
}, {
    title: "原始链接",
    url: "javascript:(function(){prompt( \x27原始链接：\x27, \x27https://mp.weixin.qq.com/s?__biz=\x27+biz+\x27&idx=1&mid=\x27+mid+\x27&sn=\x27+sn)})();"
}, {
    title: "历史消息链接",
    url: "javascript:(function(){prompt(\x27历史消息链接：\x27,\x27https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=\x27+biz+\x27#wechat_redirect\x27)})()"
}, {
    title: "解除复制限制",
    url: "javascript:!function e(t){function n(){}function o(e){e[i].removeChild(e)}function r(e){return[].slice.call(t.querySelectorAll(e))}function c(t){function n(){s(function(){if(!o)try{var n=t.contentDocument;n.body.childNodes.length&&(o=1,e(n))}catch(e){o=0}},100)}a[l](function(e){t[\x27on\x27+e]=null});var o;n(),t.onload=n}for(var i=\x27parentNode\x27,l=\x27forEach\x27,a=\x27contextmenu dragstart selectstart select copy beforecopy mouseup mousedown\x27.split(\x27 \x27),u=setTimeout(n,0);u>=0;u--)clearTimeout(u);for(u=setInterval(n,1e8);u>=0;u--)clearInterval(u);var s=setTimeout;setTimeout=setInterval=n,r(\x27script\x27)[l](o);var m=[];r(\x27iframe,frame\x27)[l](function(e){m.push(e),e[i].replaceChild(t.createElement(\x27script\x27),e)});var f=t.documentElement.innerHTML;t.open(),t.write(\x27<!DOCTYPE html>\x27),t.close(),t.documentElement.innerHTML=f,r(\x27script\x27)[l](function(e){m.length&&e[i].replaceChild(m.shift(),e)}),r(\x27*\x27)[l](c),c(t),a[l](function(e){t.addEventListener(e,function(e){e.stopPropagation()},!0)});var p=t.createElement(\x27style\x27);p.innerHTML=\x27*{-webkit-user-select:text!important;-moz-user-select:text!important;user-select:text!important;}\x27,t.body.appendChild(p)}(document);"
}
/* 删除这行
, {
    title: "查看历史消息",
    url: "javascript:window.open(\x27https://freewechat.com/a/\x27 + biz);void(0);"
}, {
    title: "查看被删文章",
    url: "javascript:(function(){ location.href = location.href.replace(\x27mp.weixin.qq.com/s?__biz=\x27, \x27freewechat.com/a/\x27).replace(\x27&idx=2&mid=\x27, \x27/\x27); })();"
}
删除这行 */
   ], "tl", true, true, 1678121690605);
};


/*
注意：
隐藏的两行注释，而需要魔法才能使用。

缺点：
历史消息：并不是所有的公众号才能查看历史消息。
被删文章查看：需要在 https://mp.weixin.qq.com/s?__biz=MzAwMj 这样的被删原始链接上才能使用，如果是 https://mp.weixin.qq.com/s/JRNA5I 这样的简短链接，则无法使用。
*/
