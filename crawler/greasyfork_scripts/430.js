// ==UserScript==
// @name                知乎免登录
// @description         并且去掉链接跳转。
// @author              Damn
// @namespace           incast.info
// @run-at              document-start
// @include             http://*.zhihu.com/*
// @include             https://*.zhihu.com/*
// @match               http://*.zhihu.com/*
// @match               https://*.zhihu.com/*
// @date                18/12/2016
// @version             2.0.4
// ==/UserScript==

if(location.href=="https://www.zhihu.com/"){location.href="https://www.zhihu.com/explore";}
document.addEventListener('DOMContentLoaded',proceed());
var mo=new MutationObserver(function(){proceed();});
mo.observe(document,{'childList':true,'subtree':true});
function proceed(){
(function(){
	if(document.body){
		function treat(that){
			var targets = document.querySelectorAll(that);
			if(targets.length>0){
				[].forEach.call(targets,function(node){
					node.style.display="none";
					console.log(that);
				});
			}
		}
		treat("div.zm-editable-editor-wrap");
		treat("div.zu-editable-editor-wrap");
		treat("ul.topnav-noauth");
		treat("#SidebarSignFlow");
		treat("#zu-top-add-question");
		treat("#zh-top-nav-topic");
		treat("#zh-footer");
		treat("div.DownloadApp");
		treat("button[class^='_CommentItem']:not([class^='_CommentItem_openConversations'])");
		if(document.querySelectorAll('a.zu-button-more').length>0){document.querySelectorAll('a.zu-button-more')[0].outerHTML="<hr>";}
		[].forEach.call(document.querySelectorAll('a[href="/"]'),function(node){node.href="/explore";});
		[].forEach.call(document.querySelectorAll('div.conpulsory-login-mask'),function(node){node.parentNode.style.height="";node.style.display='none';});
		[].forEach.call(document.querySelectorAll('a.external'),function(node){if(node.href.indexOf("target")>0){node.href=decodeURIComponent(node.href.slice(node.href.indexOf("target")+7));}});
		[].forEach.call(document.querySelectorAll('a.meta-item'),function(node){if(node.innerHTML.indexOf('添加评论')>0){node.outerHTML='<label class="meta-item">暂无评论</label>';} if((node.className.indexOf('toggle-comment')<0)*(node.className.indexOf('answer-date-link')<0)){node.style.display='none';}});
		[].forEach.call(document.querySelectorAll('a.action-item'),function(node){if(node.className.indexOf('js-toggleCommentBox')<0){node.style.display='none';}});
		[].forEach.call(document.querySelectorAll('button[class^="FeedbackButton"]'),function(node){node.parentNode.style.display='none';});
		[].forEach.call(document.querySelectorAll('button[class^="follow-button"]'),function(node){node.parentNode.style.display='none';});
		[].forEach.call(document.querySelectorAll('#SidebarSignFlow'),function(node){node.parentNode.style.display='none';});
		[].forEach.call(document.querySelectorAll('div.zm-comment-ft'),function(node){[].forEach.call(node.childNodes,function(cht){if(cht.nodeName=="A"){cht.style.display='none';}});});
	}
})()
}

