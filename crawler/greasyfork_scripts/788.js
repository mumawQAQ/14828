// ==UserScript==
// @name         精简常见文章网站
// @namespace    http://tampermonkey.net/
// @license      GPL-3.0
// @version      1.6.3
// @description  精简 CSDN、简书、蒲公英、脚本之家、知乎专栏、百家号、爱码网、ITEYE、bbsmax论坛、术之多、搜狐、微信公众号、阿里云 文章页面　　　　　　　　　　　优化阅读体验【文章宽度一致】【统一标题】【使用阴影】【适配半屏窗口】【无感知加载】【可选 去除顶栏】
// @author       AiniyoMua
// @home-url     https://greasyfork.org/zh-CN/scripts/459519
// @homepageURL  https://greasyfork.org/zh-CN/scripts/459519
// @supportURL   https://greasyfork.org/zh-CN/scripts/459519/feedback
// @match        *://blog.csdn.net/*
// @match        *://www.csdn.net/*
// @match        *://www.jianshu.com/p/*
// @match        *://events.jianshu.io/p/*
// @match        *://www.jb51.net/article/*
// @match        *://www.jb51.net/softjc/*
// @match        *://www.jb51.net/news/*
// @match        *://www.jb51.net/shouji/*
// @match        *://dandelioncloud.cn/article/*
// @match        *://www.dandelioncloud.cn/article/*
// @match        *://demo.dandelioncloud.cn/article/*
// @match        *://zhuanlan.zhihu.com/p/*
// @match        *://baijiahao.baidu.com/s*
// @match        *://www.likecs.com/*
// @match        *://www.iteye.com/*
// @match        *://www.bbsmax.com/*
// @match        *://mp.weixin.qq.com/*
// @match        *://www.sohu.com/a/*
// @match        *://www.shuzhiduo.com/A/*
// @match        *://developer.aliyun.com/article/*
// @icon         data:image/png;base64,AAABAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AA////Af/+P4Pf/H/Dn/x/w4f8/8OD+P/Dg/j/w8P4/8Ph+P/D4fD/w/Dh/8Pw4//D8MP/w/gD/8P4B//D+Af/w/gP/8P4H//D+B//w/gP/8P8D+/D/AHfw/wAH8P8AD/D/AYPw/4AAcP/AF3D/wf/w/8H/8P/j//B////gP///w4AAAB8AAAAOAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABgAAAAYAAAAGAAAABwAAAA+AAAAc=
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-body
// ==/UserScript==
// ██ 注意 注意 ██：在本脚本 设置>通用>运行时期 里选择 document-start 以获得无感知脚本加载体验
// ██ 注意 注意 ██：在本脚本 设置>通用>运行时期 里选择 document-start 以获得无感知脚本加载体验
(function() {
	// 获取设置参数，是否移除所有标题栏  true or false
	var removeTopBar = GM_getValue("pref_topbar",false);
	// 添加设置菜单
	GM_registerMenuCommand("移除标题栏", function() {
		var name = prompt("是否移除所有标题栏？（true  false）", removeTopBar);
		var temp = true;
		if(name==="不" || name==="否" || name==="0" || name==="false" || name==="no" || name==="not"){
			temp = false;
		}
		GM_setValue("pref_topbar", temp);
	});

	// 匹配域名
	if(window.location.hostname.includes("csdn")){							csdn();
	}else if(window.location.hostname.includes("jianshu")){					jianshu();
	}else if(window.location.hostname.includes("jb51")){					jiaoben();
	}else if(window.location.hostname.includes("dandelioncloud")){			pugongying();
	}else if(window.location.hostname.includes("zhihu")){					zhihu();
	}else if(window.location.hostname.includes("baijiahao")){				baijiahao();
	}else if(window.location.hostname.includes("likecs")){					likecs();
	}else if(window.location.hostname.includes("iteye")){					iteye();
	}else if(window.location.hostname.includes("bbsmax")){					bbsmax();
	}else if(window.location.hostname.includes("weixin")){					weixin();
	}else if(window.location.hostname.includes("sohu")){					sohu();
	}else if(window.location.hostname.includes("shuzhiduo")){				bbsmax();
	}else if(window.location.hostname.includes("aliyun")){					aliyun();
	}


	function csdn() {
		const css1 = `
			/* 主体文章，添加阴影，增加padd */
			.blog-content-box{box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;padding: 0 40px 16px !important;}
			/* 鼠标悬浮弹出分享框，二维码 */
			#tool-QRcode{display:none !important;}
			/* 主体文章，更改宽度 */
			#mainBox > main{width:100% !important;}
			/* 主体文章，更改宽度 */
			#mainBox{width:980px !important;}
			/* 更改父布局限制宽度 */
			body{min-width:980px !important;}
			/* 更改右侧栏宽度 */
			div#rightAside{width: 1px !important;}
			/* 去掉左边栏 */
			.blog_container_aside{display:none !important;}
			/* 顶栏去掉悬浮 */
			div#csdn-toolbar{position: relative !important;}
			.programmer1Box{display:none !important;}
			.recommendAdBox{display:none !important;}
			#recommendAdBox{display:none !important;}
			#recommendNps{display:none !important;}
			#asideArchive{display:none !important;}
			.hot-brand{display:none !important;}
			.top-banner{display:none !important;}
			.pudn-recommend{display:none !important;}
			#wrapper{display:none !important;}
			#mys-wrapper{display:none !important;}
			.csdn-side-toolbar{display:none !important;}
			.aside-box.kind_person.d-flex.flex-column{display:none !important;}
			.content-list{box-shadow: 0 16px 16px rgb(0 0 0 / 3%) !important;}
			.left-toolbox{
				padding-top: 0px !important;
				padding-bottom: 0px !important;
				height: 32px !important;
			}
			body{background-image: none !important;}
			.hide-article-box.hide-article-pos.text-center{display:none !important;}
		`;
		// 去掉背景
		const css2 = `
			body{background-image: none !important;}
		`;
		const topBar = `#csdn-toolbar{display:none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
		window.onload = function(){GM_addStyle(css2);};
	}

	function jianshu() {
		// 简书需要延迟一点时间，再加载脚本
		document.addEventListener("DOMContentLoaded", function(event) {jianshu2();});
	}
	function jianshu2() {
		const css1 = `
			/* 嵌入式广告 */
			iframe{display:none !important;}
			/* 去掉顶栏悬浮 */
			header > div:nth-child(1){position:static !important;}
			/* 去掉顶栏的子元素，这个不知道是啥 */
			header > div:nth-child(1) > div:nth-child(2){display:none !important;}
			/* 去掉副顶栏，即页面滑动的时候顶栏会变出来的元素 */
			header > div:nth-child(2){display:none !important;}
			/* 广告 */
			.-umr26{display:none !important;}
			/* 底下文章推荐间广告 */
			ins{display:none !important;}
			/* 底下文章推荐间广告 */
			#mv_ad_render{display:none !important;}
			/* 右侧栏文章推荐 */
			aside > div{display:none !important;}
			/* 左边三个悬浮按钮 */
			._1pUUKr{display:none}
			/* 主体文章，增加宽度，增加阴影 */
			._gp-ck{width:900px !important;box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;}
			/* 主体文章，更改padd */
			._gp-ck > section:nth-child(1){padding: 30px 40px !important;}
			/* 底边栏，点赞评论栏，更改padd */
			._1Jdfvb{padding:0 0 0 0 !important;}
			/* 文章底部赞赏 div */
			._13lIbp{display:none !important;}
			/* 文章适配半屏窗口 */
			div._3VRLsv{margin-left: calc((100vw - 800px) /2) !important;}
		`;
		const topBar = `header{display:none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

	function jiaoben() {
		const css1 = `
			/* 头部 */
			#header{display: none !important;}
			/* 头部菜单 */
			#submenu{display: none !important;}
			/* 头部 标签广告 */
			.pt10.clearfix{display: none !important;}
			/* 三个mys 没用，因为广告是重新document嵌入的 */
			.mys-wrapper{display: none !important;}
			/* 三个mys 没用，因为广告是重新document嵌入的 */
			#mys-wrapper{display: none !important;}
			/* 三个mys 没用，因为广告是重新document嵌入的 */
			#mys-content{display: none !important;}
			/* 右侧栏 */
			.main-right{display: none !important;}
			/* 左边正文更改宽度 */
			.main-left{width: 970px !important;}
			/* 正文父布局更改宽度 */
			#container{width: 970px !important;}
			/* 左边的分享、一键回顶 悬浮栏 */
			#right-share{display: none !important;}
			/* 文章主体 顶部的嵌入广告 */
			.lbd.clearfix{display: none !important;}
			/* 文章主体 底部的嵌入广告 */
			.lbd_bot.clearfix{display: none !important;}
			/* 搜索栏 */
			.search{display: none !important;}
			/* 底部 更多文章推荐 */
			.xgcomm.clearfix{display: none !important;}
			/* 关注脚本之家 */
			#ewm{display: none !important;}
			/* 您的位置 */
			.breadcrumb{display: none !important;}
			/* 文章嵌入gg广告 */
			.adsbygoogle{display: none !important;}
			/* 文章嵌入gg广告 */
			#aswift_1_host{display: none !important;}
			/* 文章嵌入gg广告 */
			#aswift_1{display: none !important;}
			/* 文章嵌入gg广告 */
			#aswift_2_host{display: none !important;}
			/* 文章嵌入gg广告 */
			#aswift_2{display: none !important;}
			/* 文章主体框添加阴影，更改padd */
			#article{box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;padding: 15px 40px 0 !important;}
			/* 文章标题，更改字号 */
			h1.title{font-size: 28px !important;}
		`
		const topBar = `#topbar{display: none !important;} #nav{display: none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

	function pugongying() {
		const css1 = `
			/* 主体文章，更改宽度 */
			.main.fl{width: 100% !important;padding-left: 0px !important;}
			/* 主体文章，更改宽度，添加阴影 */
			.main-content.container.clearfix{
				max-width: 970px !important;
				box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;
			}
			/* 去掉广告 */
			.adsbygoogle{display: none !important;}
			/* 顶栏去掉悬浮 */
			.top-bar.fixed-nav.fixed-appear{position: static !important;}
			/* 标题栏更改字号，更改粗体 */
			.single-title > h1{font-size: 28px !important;font-weight: 700 !important;}
			/* 主体文章，更改padd，更改背景为白色 */
			.single.box-show{padding: 0px 36px !important;background: #FFFFFF !important;}
			/* 去掉原来box 的样式：阴影，圆角 */
			.box-show{
				border-radius: 0px !important;
				-webkit-box-shadow: none !important;
				box-shadow: none !important;
			}
			/* 去掉右侧栏 */
			#menu-aside{display: none !important;}
			/* 更改页面背景 */
			.home.home-index{
				background-image: none !important;
				background: #F9F9F9 !important;
				background-color: #F9F9F9 !important;
			}
			/* 文章主体，更改字体颜色 */
			.single-entry p{color: #2b2b2b !important;}
		`
		const topBar = `div.menu-top{display: none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

	function zhihu() {
		const css1 = `
			/* 更改文章主体 宽度 */
			.Post-NormalMain > div, .Post-NormalMain > header{width:880px !important;}
			/* 给文章主体添加阴影，与padding */
			.Post-RichTextContainer{padding: 20px 40px !important;box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;}
			/* 更改评论区的宽度 */
			.Post-NormalSub > div{width:880px !important;}
			/* 更改标题关注按钮的距离 */
			div.AuthorInfo{max-width: 880px !important;}
			/* 去掉右边悬浮按钮 点赞分享 */
			.Post-SideActions{display: none !important;}
			/* 更改顶栏高度 */
			div.ColumnPageHeader-content{height:30px !important;}
			/* 更改顶栏高度 */
			.Sticky.is-fixed {height:30px !important;}
			/* 更改顶栏高度 */
			div.ColumnPageHeader{height:30px !important;}
			/* 更改顶栏元素高度 */
			div.ColumnPageHeader-content > a > svg {height:30 !important;}
			/* 更改顶栏元素高度 */
			button.ColumnPageHeader-WriteButton {line-height: 28px !important;}
		`
		const topBar = `.Sticky.ColumnPageHeader{display: none !important;}`
		// 如果加上去掉顶栏悬浮的话，页面滑动会抖动一下，实力有限解决不了，就不加了
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
		window.onload = function(){document.querySelector("div.ColumnPageHeader-content > a > svg").setAttribute('height', 24);};
		// 更改顶栏logo元素高度
	}
	function baijiahao() {
		const css1 = `
			/* 去掉右边栏 */
			#ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(2){display: none !important;}
			/* 标题更改字号 */
			#ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)> div:nth-child(1)> div:nth-child(1)> div:nth-child(1){font-size: 29px !important;}
			/* 文章 匹配父布局宽度 */
			#ssr-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1){width:100% !important;}
			/* 文章主题更改宽度，添加阴影 */
			#ssr-content > div:nth-child(2) > div:nth-child(1){
				width:890px !important;
				padding: 12px 40px !important;
				box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;
			}
			/* 更改padd */
			#ssr-content > div:nth-child(2){padding-top: 8px !important;}
			/* 顶栏去掉悬浮 */
			#ssr-content > div:nth-child(1){position: static !important;}
		`
		const topBar = `#ssr-content > div:nth-child(1){display: none !important;}`
		//#ssr-content > div:nth-child(1){height:36px !important;position: static !important;}
		//#ssr-content > div:nth-child(1) > div:nth-child(1) > div{height:36px !important;}
		//#ssr-content > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form{display: none !important;}
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

	function likecs() {
		const css1 = `
			/* 右边栏 */
			div.rigthbox{display: none !important;}
			/* 主体文章，更改padd */
			article.tag-webview{padding: 0px 5px !important;}
			/* 标题去掉居中，更改padd */
			h1.page-title{text-align:left !important;padding-top: 10px !important;}
			/* 标题字体，更改为粗体，更改字体颜色 */
			h1.page-title > a{font-weight: bold !important;color: #000 !important;}
			/* 顶栏，更改背景颜色 */
			.main-nav.clearfix{padding: 8px 0 !important;background: #FFF !important;}
			/* 更改顶部标题的背景颜色 */
			div.site-wrapper > header {background: #FFF !important;}
			/* 文章主体右边虚拟位置 */
			main.content > div.clearfix {display: none !important;}
			/* footer */
			div.site-wrapper > footer{display: none !important;}
			/* 更改背景颜色为白色 */
			div.site-wrapper{background: #fff !important;}
			/* 文章主体添加阴影，并适配父布局的宽度 */
			div.leftbox {box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;width: 100%;}
			/* 设置文章主体的宽度 */
			main.content{max-width: 1000px !important;}
			/* 文章顶部的广告 */
			.post-content > div.contentbef{display: none !important;}
			/* 顶部弹出广告 */
			.adsbygoogle{display: none !important;}
			/* 顶部弹出广告 */
			.adsbygoogle-noablate{display: none !important;}
		`
		const topBar = `.main-nav.clearfix{display: none !important;`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

	function iteye() {
		const css1 = `
			/* 主体，去掉margin */
			div#page{margin: 0 !important;}
			/* 标题，更改字号，更改为粗体 */
			div.blog_title > h3{font-size: 27px !important;font-weight: bold !important;}
			/* 文章正文宽度 */
			div#content{width: 820px !important;}
			/* 文章正文去掉边框，更改padd，添加阴影，宽度匹配父布局 */
			div#main{
				border: none !important;
				padding: 5px 24px !important;
				box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;
				width: 100% !important;
			}
			/* 去掉右下角悬浮框礼盒 */
			div#main > div.csdn-side-toolbar{display: none !important;}
			/* 右边栏放在文章底部 */
			div.blog-sidebar{width: 100% !important;}
			/* 右边栏更改宽度 */
			div.recommend-right{width: 100% !important;padding: 5px 24px !important;}
			/* 去掉左边栏 */
			div#local{display: none !important;}
			/* 去掉原本底部假的文章推荐（其实它可以直接抢钱的） */
			div.comments{display: none !important;}
		`
		const topBar = `div#header{display: none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}
	function bbsmax() {
		const css1 = `
			/* 文章正文上面未知空白 */
			div.post-title > div:nth-child(1){display: none !important;}
			/* 文章正文上面未知空白 */
			div.post-title > div.post-content > div:nth-child(1){display: none !important;}
			/* 出售独享账号，广告 */
			div.post-title > div.post-content > span{display: none !important;}
			/* 主体文章更改宽度 */
			div.container{max-width: 980px !important;}
			/* 主体文章更改padd，添加阴影 */
			div.post{padding: 35px 40px !important;box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;}
			/* 顶栏更改高度 */
			div#header{padding: 0px 0px !important;}
			/* 主体文章向上面移一点 */
			div#page-content{padding: 80px 0 50px 0 !important;}
			/* 更改标题字体为粗体，调大字号 */
			h1.title{font-weight: 700 !important;font-size: 28px !important;}
			/* 把顶栏logo 调暗一些，不要这么跳脱 */
			h1.logo{opacity: 0.4 !important;}
		`
		const topBar = `div#header{display: none !important;} div#page-content{padding: 12px 0 !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}
	function weixin() {
		const css1 = `
			/* 文章正文宽度，阴影，修改padd */
			div.rich_media_area_primary_inner{
				width: 870px !important;
				box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;
				padding: 0 40px !important;
			}
			/* 右边二维码移到文章底部 */
			div#js_pc_qr_code{position: static !important;}
			/* 更改标题字体大小 */
			h1#activity-name{
				font-size: 28px !important;
				font-weight: bold !important;
				padding-top:12px !important;
			}
		`
		GM_addStyle(css1);
	}
	function sohu() {
		const css1 = `
			/* 左侧分享按钮 */
			div#article-do{display: none !important;}
			/* 右侧栏 */
			div#right-side-bar{display: none !important;}
			/* 悬浮按钮，回顶，反馈 */
			div#float-btn{display: none !important;}
			/* 去掉顶栏悬浮 */
			header#main-header{position: static !important;}
			/* 主体文章父布局，更改宽度 */
			div#article-container{width:1120px !important;}
			/* 主体文章，更改宽度，添加阴影，更改padd */
			.left.main{
				width: calc(100% - 260px) !important;
				box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;
				padding: 24px 40px !important;
			}
			/* 左侧栏移到右边，适配半屏窗口 */
			.column.left{position: absolute !important;right: 0px !important;}
			/* 更改去悬浮后，多出来的东西 */
			div.location-without-nav{margin-top:0px !important;}
			/* 左下角广告 */
			div#left-bottom-god{display: none !important;}
			/* 文章下面广告 */
			div.pc-ad-common{display: none !important;}
			/* 文章下面广告 */
			div.god-bigpic{display: none !important;}
			/* 文章中间时不时弹出的广告 */
			div.left-bottom-float-fullScreenSleepContainer{display: none !important;}
		`
		const topBar = `header#main-header{display: none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

	function aliyun() {
		const css1 = `
			/* 去掉顶栏悬浮 */
			div.ace-developer-common-nav > div:nth-child(1){position: static !important;}
			/* 右侧两个悬浮按钮 */
			div.developer-common-fixed-box{display: none !important;}
			/* 右侧悬浮评论按钮 */
			div.ace-common-floor{display: none !important;}
			/* 右侧假推荐文章，真的在下面 */
			.right-item-box.recommend-box{display: none !important;}
			/* 右侧推广电子书 */
			.right-item-box.ebook-box{display: none !important;}
			/* 左侧悬浮按钮栏 不悬浮 */
			div#action-btns{position: absolute !important;}
			/* 多余的地址导航栏（开发者社区 > 作者 > 正文） */
			div.developer-nav{display: none !important;}
			/* 正文父布局宽度，离顶部12px */
			div.article-wrapper{width: 924px !important;margin-top:12px !important;}
			/* 正文父布局宽度 */
			div.left-content{width: 900px !important;}
			/* 正文更改padd，添加阴影 */
			div.content-wrapper{
				box-shadow: 0 16px 45px rgb(0 0 0 / 15%) !important;
				padding: 12px 40px !important;
			}
			/* 使正文居中 */
			div#right-box{width: 0px !important;}
		`
		const topBar = `body > div:nth-child(4){display: none !important;} div.aliyun-module{display: none !important;}`
		GM_addStyle(removeTopBar ? css1 + topBar : css1);
	}

})();
