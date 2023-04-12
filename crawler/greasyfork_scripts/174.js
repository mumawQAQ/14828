// ==UserScript==
// @name              全网VIP视频免费解析去广告；解锁B站大会员番剧、B站视频解析下载；全网音乐直接下载；油管、Facebook等国外视频解析下载；网盘搜索引擎破解无限下载等
// @namespace         super_video_helper_cat
// @version           1.0.0
// @description       功能有：1、解锁B站大会员番剧、B站视频解析下载；2、爱奇艺、腾讯、优酷、芒果等全网VIP视频免费破解去广告(免跳出观影特方便【PC端+移动端】)；3、网易云音乐、QQ音乐、酷狗、蜻蜓FM、荔枝FM、喜马拉雅等音乐和有声书音频免客户端下载；4、油管、Facebook等国外视频解析下载；5、网盘搜索引擎(来搜一下 www.xgjxw6.com)破解无限下载；6、下载抖音无水印视频、提取抖音直播推流地址、免登录使用大部分功能、屏蔽不必要的弹窗【脚本长期维护更新，完全免费，无广告】
// @author            爱画画的猫,那年那tu那些事
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
// @include           *://*.youku.com/v_*
// @include           *://*.iqiyi.com/v_*
// @include           *://*.iqiyi.com/w_*
// @include           *://*.iqiyi.com/a_*
// @include           *://*.le.com/ptv/vplay/*
// @include           *://v.qq.com/x/cover/*
// @include           *://v.qq.com/x/page/*
// @include           *://v.qq.com/tv/*
// @include           *://*.tudou.com/listplay/*
// @include           *://*.tudou.com/albumplay/*
// @include           *://*.tudou.com/programs/view/*
// @include           *://*.mgtv.com/b/*
// @include           *://film.sohu.com/album/*
// @include           *://tv.sohu.com/v/*
// @include           *://*.bilibili.com/video/*
// @include           *://*.bilibili.com/bangumi/play/*
// @include           *://*.baofeng.com/play/*
// @include           *://vip.pptv.com/show/*
// @include           *://v.pptv.com/show/*
// @include           *://www.le.com/ptv/vplay/*
// @include           *://www.wasu.cn/Play/show/*
//---------------------------------------------------
// @include           *://m.v.qq.com/x/cover/*
// @include           *://m.v.qq.com/x/page/*
// @include           *://m.v.qq.com/*
// @include           *://m.iqiyi.com/*
// @include           *://m.iqiyi.com/kszt/*
// @include           *://m.youku.com/alipay_video/*
// @include           *://m.mgtv.com/b/*
// @include           *://m.tv.sohu.com/v/*
// @include           *://m.film.sohu.com/album/*
// @include           *://m.le.com/ptv/vplay/*
// @include           *://m.pptv.com/show/*
// @include           *://m.acfun.cn/v/*
// @include           *://m.bilibili.com/video/*
// @include           *://m.bilibili.com/anime/*
// @include           *://m.bilibili.com/bangumi/play/*
// @include           *://m.wasu.cn/Play/show/*
//---------------------------------------------------
// @include           *://www.youtube.com
// @include           *://www.youtube.com/
// @include           *://www.youtube.com/watch*
// @include           *://www.facebook.com/*
// @include           *://yt1s.com/facebook-downloader
//---------------------------------------------------
// @include      	  *music.163.com*
// @include           *://y.qq.com*
// @include           *://www.kugou.com*
// @include           *://www.kuwo.cn*
// @include           *://www.lizhi.fm*
// @include           *://*.ximalaya.com*
// @include           *://music.migu.cn*
//---------------------------------------------------
// @include      *://*.douyin.com/*
// @include      *://*.douyinvod.com/*
// @include      *://*.idouyinvod.com/*
// @include      *://*.iesdouyin.com/*
// @include      *://*.zjcdn.com/*
// @include      *://*-dy.ixigua.com/*
// @include           *://www.laisoyixia.com/download/detail**
// @require           https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @connect           api.bilibili.com
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @license           GPL License
// @charset		      UTF-8
// @original-author   橘子爱哭
// @original-license  AGPL License
// @original-script   https://greasyfork.org/zh-CN/scripts/390952
// ==/UserScript==


(function () {
	'use strict';
	var $ = $ || window.$;
	
	//如果本地值不能满足需求，可自定义添加接口到此处
	//注意数据格式
	//category=1:全网VIP解析内嵌页播放
	//category=2:全网VIP解析新建页面播放
	const customizeInterfaceList=[
		//{ name:"就是名字而已", category:"1", url:"http://v.taohuisc.cn/?url="},
		//{ name:"就是名字而已", category:"2", url:"http://v.taohuisc.cn/?url="},
	];
	
	//默认自动解析接口序号，可自定义修改
	const defaultVipInterfaceIndex = 1;
	
	//默认VIP解析接口
	const originalInterfaceList = [
		{"name":"纯净/B站","category":"1","url":"https://okjx.cc/?url="},
		{"name":"高速接口","category":"1","category":"1","url":"https://jsap.attakids.com/?url="},
		{"name":"综合/B站1","category":"1","url":"https://vip.parwix.com:4433/player/?url="},
		{"name":"OK解析","category":"1","url":"https://z1.m1907.cn/?jx="},
		{"name":"乐多资源","category":"1","url":"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid="},
		{"name":"BL","category":"1","url":"https://vip.bljiex.com/?v="},
		{"name":"ccyjjd","category":"1","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
		{"name":"M3U8","category":"1","url":"https://jx.m3u8.tv/jiexi/?url="},
		{"name":"七哥","category":"1","url":"https://jx.mmkv.cn/tv.php?url="},
		{"name":"老板","category":"1","url":"https://vip.laobandq.com/jiexi.php?url="},
		{"name":"盘古","category":"1","url":"https://www.pangujiexi.cc/jiexi.php?url="},
		{"name":"大白","category":"1","url":"https://api.myzch.cn/?url="},
		{"name":"CK","category":"1","url":"https://www.ckplayer.vip/jiexi/?url="},
		{"name":"CHok","category":"1","url":"https://www.gai4.com/?url="},
		{"name":"虾米","category":"1","url":"https://jx.xmflv.com/?url="},
		{"name":"618G","category":"1","url":"https://jx.618g.com/?url="},
		{"name":"ckmov","category":"1","url":"https://www.ckmov.vip/api.php?url="},
		{"name":"RDHK","category":"1","url":"https://jx.rdhk.net/?v="},
		{"name":"爱豆","category":"1","url":"https://jx.aidouer.net/?url="},
		{"name":"H8","category":"1","url":"https://www.h8jx.com/jiexi.php?url="},
		{"name":"解析la","category":"1","url":"https://api.jiexi.la/?url="},
		{"name":"老板","category":"1","url":"https://vip.laobandq.com/jiexi.php?url="},
		{"name":"OK","category":"1","url":"https://okjx.cc/?url="},
		{"name":"小蒋","category":"1","url":"https://www.kpezp.cn/jlexi.php?url="},
		{"name":"0523","category":"1","url":"https://go.yh0523.cn/y.cy?url="},
		{"name":"17云","category":"1","url":"https://www.1717yun.com/jx/ty.php?url="},
		{"name":"4K","category":"1","url":"https://jx.4kdv.com/?url=","t":"m"},
		{"name":"200","category":"1","url":"https://vip.66parse.club/?url="},
		{"name":"云析","category":"1","url":"https://jx.yparse.com/index.php?url="},
		{"name":"8090","category":"1","url":"https://www.8090g.cn/?url="},
		{"name":"综合线路解析","category":"2","url":"http://v.taohuisc.cn/?url="},
		{"name":"纯净解析","category":"2","url":"https://z1.m1907.cn/?jx="},
		{"name":"高速接口1","category":"2","url":"https://jsap.attakids.com/?url="},
		{"name":"高速接口2","category":"2","url":"https://api.sigujx.com/?url="},
		{"name":"B站解析1","category":"2","url":"https://vip.parwix.com:4433/player/?url="},
		{"name":"B站解析2","category":"2","url":"https://www.cuan.la/m3u8.php?url="},
		{"name":"Ckplayer","category":"2","url":"https://www.ckplayer.vip/jiexi/?url="},
		{"name":"乐多资源","category":"2","url":"https://api.leduotv.com/wp-api/ifr.php?isDp=1&vid="},
		{"name":"ccyjjd","category":"2","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
		{"name":"M3U8","category":"2","url":"https://jx.m3u8.tv/jiexi/?url="},
		{"name":"BL","category":"2","url":"https://vip.bljiex.com/?v="},
		{"name":"Mao解析","category":"2","url":"https://qd.hxys.tv/m3u8.php?url="}
	];
	const playerNodes = [
		{ url:"v.qq.com", node:"#mod_player"},
		{ url:"www.iqiyi.com", node:"#flashbox"},
		{ url:"v.youku.com", node:"#player"},
		{ url:"w.mgtv.com", node:"#mgtv-player-wrap"},
		{ url:"www.mgtv.com", node:"#mgtv-player-wrap"},
		{ url:"tv.sohu.com", node:"#player"},
		{ url:"film.sohu.com", node:"#playerWrap"},
		{ url:"www.le.com", node:"#le_playbox"},
		{ url:"video.tudou.com", node:".td-playbox"},
		{ url:"v.pptv.com", node:"#pptv_playpage_box"},
		{ url:"vip.pptv.com", node:".w-video"},
		{ url:"www.wasu.cn", node:"#flashContent"},
		{ url:"www.acfun.cn", node:"#player"},
		{ url:"www.bilibili.com", node:"#player_module"},
		{ url:"vip.1905.com", node:"#player"},
	];
	
	//自定义接口和默认接口绑定
	let newOriginalInterfaceList = originalInterfaceList;
	try{
		newOriginalInterfaceList = customizeInterfaceList.concat(originalInterfaceList);
	}catch(e){
		console.log("自定义解析接口错误，注意数据格式....");
	}
	
	/**
	 * 共有方法，全局共享
	 */
	function commonFunction(){
		this.GMgetValue = function (name, value) { //得到存在本地的数据
			if (typeof GM_getValue === "function") {
				return GM_getValue(name, value);
			} else {
				return GM.getValue(name, value);
			}
		};
		this.GMsetValue = function(name, value){
			if (typeof GM_setValue === "function") {
				return GM_setValue(name, value);
			} else {
				return GM.setValue(name, value);
			}
		};
		this.GMaddStyle = function(css){
			var myStyle = document.createElement('style');
			myStyle.textContent = css;
			var doc = document.head || document.documentElement;
			doc.appendChild(myStyle);
		};
		this.GMopenInTab = function(url, open_in_background){
			if (typeof GM_openInTab === "function") {
				GM_openInTab(url, open_in_background);
			} else {
				GM.openInTab(url, open_in_background);
			}
		};
		this.addScript = function(url){
			var s = document.createElement('script');
			s.setAttribute('src',url);
			document.body.appendChild(s);
		};
		this.randomNumber = function(){
			return Math.ceil(Math.random()*100000000);
		};
		this.request = function(mothed, url, param){   //网络请求
			return new Promise(function(resolve, reject){
				GM_xmlhttpRequest({
					url: url,
					method: mothed,
					data:param,
					onload: function(response) {
						var status = response.status;
						var playurl = "";
						if(status==200||status=='200'){
							var responseText = response.responseText;
							resolve({"result":"success", "data":responseText});
						}else{
							reject({"result":"error", "data":null});
						}
					}
				});
			})
		};
		this.addCommonHtmlCss = function(){
			var cssText = 
				`
				@keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-webkit-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-moz-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-o-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@-ms-keyframes fadeIn {
				    0%    {opacity: 0}
				    100%  {opacity: 1}
				}
				@keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-webkit-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-moz-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-o-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				@-ms-keyframes fadeOut {
				    0%    {opacity: 1}
				    100%  {opacity: 0}
				}
				.web-toast-kkli9{
				    position: fixed;
				    background: rgba(0, 0, 0, 0.7);
				    color: #fff;
				    font-size: 14px;
				    line-height: 1;
				    padding:10px;
				    border-radius: 3px;
				    left: 50%;
				    transform: translateX(-50%);
				    -webkit-transform: translateX(-50%);
				    -moz-transform: translateX(-50%);
				    -o-transform: translateX(-50%);
				    -ms-transform: translateX(-50%);
				    z-index: 9999;
				    white-space: nowrap;
				}
				.fadeOut{
				    animation: fadeOut .5s;
				}
				.fadeIn{
				    animation:fadeIn .5s;
				}
				`;
			this.GMaddStyle(cssText);
		};
		this.webToast = function(params) {	//小提示框
		    var time = params.time;
		    var background = params.background;
		    var color = params.color;
		    var position = params.position;  //center-top, center-bottom
		    var defaultMarginValue = 50;
		    
		    if(time == undefined || time == ''){
		        time = 1500;
		    }
		    
		    var el = document.createElement("div");
		    el.setAttribute("class", "web-toast-kkli9");
		    el.innerHTML = params.message;
		    //背景颜色
		    if(background==undefined || background==''){
		    	el.style.backgroundColor=background;
		    }
		    //字体颜色
		    if(color==undefined || color==''){
		    	el.style.color=color;
		    }
		    
		    //显示位置
		    if(position==undefined || position==''){
		    	position = "center-bottom";
		    }
		    
		    //设置显示位置，当前有种两种形式
		    if(position==="center-bottom"){
		    	el.style.bottom = defaultMarginValue+"px"; 
		    }else{
		    	el.style.top = defaultMarginValue+"px"; 
		    }
			el.style.zIndex=999999;
		    
		    document.body.appendChild(el);
		    el.classList.add("fadeIn");
		    setTimeout(function () {
		        el.classList.remove("fadeIn");
		        el.classList.add("fadeOut");
		        /*监听动画结束，移除提示信息元素*/
		        el.addEventListener("animationend", function () {
		            document.body.removeChild(el);
		        });
		        el.addEventListener("webkitAnimationEnd", function () {
		            document.body.removeChild(el);
		        });
		    }, time);
		}
	}
	const commonFunctionObject = new commonFunction();  //全局统一变量
	commonFunctionObject.addCommonHtmlCss();	//统一html、css元素添加
	
	/**
	 * 超级解析助手
	 * @param {Object} originalInterfaceList
	 * @param {Object} playerNodes
	 */
	function superVideoHelper(originalInterfaceList, playerNodes){
		this.originalInterfaceList = originalInterfaceList;
		this.checkbox_true_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA2tJREFUaEPtmkvoTV0Yxn/PUCZiRPK5DQ1IzHwToUxIriW55FoGRMiEci+XgVyj3HKPzy2RFEqJUAYShUgpvpJSUq9erfPv2J2999r7f5yzyapzdqf9Xp5nvWu96z1rLZFoZtYbGAUMD88BSZkW/34BXAfu+VPSm3r/qv9hZtuAGUCPFoOMdfcBOCxpaU2hg4CZWayVKshJ+oH9x5eZTQWOVwFYAQzTJJ2QmXUHHgB9CyhXQfQlMNQJzAP2VgFRCQzzncARYHoJ5SqoHHUCHop/qoCmBIZXTuC3yj5Jkn8JlAh7noqPiClB6FSecNUi8A2YKulsWJ8mAZkkqkTgq/e8pPOJ8iaTRFUIfAk9f6FBcekLrddADVsVCHwO4C83Qmhmq4F1VSXwKQybqyngFwK7siZyOyPwf+j5ayngowrMdhHwMe0T9kYK+NGAT+YuVUyj70PP30wBPyyA75UH3t+3OgLvAvhbKeD7A/8Bg2LAFyEwPxhcA/SMNZ6QexvA30kB3y2A/7eI/ZgITJZ0OqyM3jObgbFFnACvA/i7aXpm5mN+XEG7uUOoA3xidfS87Pk5pnm57hPWdxUaNjM7CMyKMZaUyYrAS0n9MpxOCNEYmOHYt0S8trmfYWcr0LHLUJRE3hA6IWlahnMn6EPK65VkexbAP8zQz1xlY8jkEXAbhyTNzDJmZquADXUyTwP4xxngc1fZZhFwO/sl+Z//1GZmY4D1QWCmpCcZ4CcDJ2MA5snERKBmY6ekxXkG896b2UjgYswqm2fL3xch4PJbJS2LMdxIxsyGAJeAqFU2xk9RAm5zg6TYFNqBwcz6AF4yR6+yv4qA210jaW2MA5cxs67AFaDQKhtjv0wEanZXSvIUmtvM7BwwPlewhEBnCLi7JZJ25GSnA8DsEtiiVDpLwJ0skrQ7ZdJuAZZHISkp1AwC7nqOJK9n6iftCmBTSVzRas0i4A6nSzoWJu1cYF80ik4INpOAw6gVZX5U1ZLWbAItAV3v5C+Blnd5wqFH4DnQ7rPgsv3wwgl4Dl9Q1kKb9fY4Af8v+lMObzOoIu5nOwG/WvCowqfzaYR8d29w7aDb8/aSItQrILvdrxz8GVcNar0ZrhxsrPCpve8xrfIrBjXMP91WCXWMn4hMBEaET7vPkF8Bt8PnjKSP9cP3OwcygZO3wEsCAAAAAElFTkSuQmCC";
		this.checkbox_false_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAaZJREFUaEPtmk1OAkEUhL86iH9bPYDRqJGVJzDRK+jerbB154Yr6F4X7iTizwVcuRHxIM9MwpChAQP0YxhIdzIhDPOqX1V1z6ILseRDS94/q0nAzM6AC2AN2FywSx3gF2hKug97GXLAzK6B+oKbHjd9XVKj+OMAATPbA94r2nze1r6kj/xLSKANHFScwKukw3EEfoD1gMAD8Ah8lUxsGzgFjoN5u5I2xhGw4OE3SQt1xMyeQxKS+isnXEIhgaFNU7ILmFnmQEaiP6YhUJPUKrvpcD4zGxA2ESjbkeRA2YqnPVBQIL2FPJZf2sQeKsZgJAdi1POoTQ54qBiDkRyIUc+jNjngoWIMRnIgRj2P2uSAh4oxGMmBGPU8apMDHirGYCQHYtTzqI1x4FJS06OJWTHM7AR4KtZPczbaklSbdXKPOjP7BHYmJfA9ItTLTqcbZZ9Sm9kucAtkn8XRkbSV3wjzgRegH994KDgHjLako3EEsnj1bg6TekKeF+PW1YpZc5l6cetNL/ALQz9PNSfB6gLZdVWMV0cuoUnQqvbMav5Xomoq/9fPH0I4X0Cu+FOiAAAAAElFTkSuQmCC";
		this.elementId = Math.ceil(Math.random()*100000000);
		this.autoPlayerSaveKey = "autolayed_isopen_"+window.location.host;  //自动播放开启标识
		this.isRun = function(){ //判断是否运行
			var urls = ["iqiyi.com","v.qq.com","youku.com", "le.com","tudou.com","mgtv.com","sohu.com", "acfun.cn","bilibili.com","baofeng.com","pptv.com"];
			for(var i=0; i<urls.length;i++){
				if((window.location.host!=="bilibili.com" && window.location.host.indexOf(urls[i])!=-1) 
					|| (window.location.host==="bilibili.com" && window.location.href.indexOf("bangumi/play")!=-1)){
					return true;
				}
			}
			return false;
		};
		this.innerParse = function(url) { //内嵌解析
			$("#iframe-player-99087lkj").attr("src", url);
		};
		this.showPlayerWindow = function(playObject){	//显示播放窗口
			var node = null;
			for(var i in playerNodes) { //获得窗口ID
				if (playerNodes[i].url == window.location.host) {
					node = playerNodes[i].node;
					break;
				}
			}
			if(!node){
				console.log("播放node查找失败....");
				return;
			}
			var videoPlayer = $("<div style='width:100%;height:100%;z-index:1000;'><iframe id='iframe-player-99087lkj' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");
			var category = playObject.category;
			var url = playObject.url + window.location.href;
			if (category==="1") { //内嵌播放....
				//没有添加则创建一个div放解析HTML
				if (document.getElementById("iframe-player-99087lkj") == null) {
					var player = $(node);
					player.empty();
					player.append(videoPlayer);
				}
				this.innerParse(url);  //把播放链接加入到自定义的div
			}
			if (category==="2"){  //弹窗播放....
				commonFunctionObject.GMopenInTab(url, false);
			}
		};
		this.addHtmlElements = function(){  //添加HTML
			var vipVideoImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9klEQVRoQ+2ZPWgVQRDH/7/CWqOIYOFHFbRSjJhGMGDpByoIago70cqvUtQgdipWFqawMWghGIidhcHKQAJqEURBRfED1CCCjc3IPu4em31775J7d3m8cAtX3O7szP7nPzszx6EeH/T4+VUD6DaDTQbMbE+3D7MY+8Ckkw8BPFuMki7KDtUAuuh9Z3oZMtBljxY2X9eBwq4raWPNQEmOLKxm+TBgZqsknQ1dAVzNco+ZhWsm6ZakHZLC1mQyrZ5OX2RvzMxnSa8lzQJ/YwLzGDCze5JOeoI/gbVtAMxJ6vPW7wKnkr4qbEuaxccDcGWBsfNV0mjMmSGAg5LGA6XbgFehITPbLel5MN84ZAUAUjMPgWO+zZY7YGbvJW0OvRoB8EjSEW9+BhhIvOvCp0wGfPPbgZfpRAzATUnn56GEmJyLd39cBNxeF99FADTa42BskuQef4wDh9oB2CXpRbDpMPA4nTOz05LuBDLrgW+dAACGIkxfkHTDm/8DrMwEkBxgOskkqdwEcMAD4GLf3YF0PACOe+uFGMgA4Bj4EAAbAGbcXLQOmNklSdeCTRuBT2bWL+lNsLYfeFIRgH2SJgJ7GwCXYjMBrJb0K9jUiHEzG5F02VubA9b4skXvQMiAmW2VdFSSn24/As0kk1mJzeyppL3ewaaBnWY2K2mLNz8S5ueCAMLwz3q/DZxreweSe3BC0v1Ai7tkYXrsB96WwMBCAfQBv3MBJCD+SVrhaXaZ54z3PgUMhpYrZKCF7bbNnJk5BhwT6fghyW8thoGxigE4my6tXwemQlt5AGI1oamDSIFLmCuURiW5BOGPL8C7drGV206b2XdJ6yJKxoDhmPKCIeS61ZZClncxFgLAtcyxrnEwRmknDFQFIFYTWnJ/CVmoGgYSj7Z81OR86Lg7sOgPmnY6s0IpN4TyYrDb6zWAmoEOPVCHUIcO7Hh7/YemYxcWU7AMf3BkNGDF/FP9rkwGqjddkoWWv5Ql6V1yNXUdWHKXBwZ7noH/dP+HQNqheToAAAAASUVORK5CYII=";
			var playedImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABMhJREFUaEPtWUuoHUUQPce9nyS40/hBEcHPwi+ioCCKn4hBDaLiwoVBJbuAiS6MLqJRgiL4SwQ3ipAgBmOMiBiDAZXowkQQ4weNoqIYjXHjQo6c2P3o12/mTs29c5EHNgyPd6er6pzu6uqqGmKeD85z/PifQN5BSccDWALgDACLi+cIAD8C+KH4u4PktiF2f6IdkHQOgCvSc2lPQPsBPA9gC8m9PWVnpo9FIAG/E4CfIcZWACtJ7uurrDcBSc+NAL4LwNsAvkzPFwD+rlzqTAC3ADi6AmsC66dKQNJ7AC6ujHj1Nhs4Sft6aEi6CUB+LLOA5O8h4WJSeAckfZtWMosb+AaSr/c1Ws6XdCLJb7p+a7MRIiBJlYLVJB+ZBHibrKRrAXhxQLITX+cESZ8AOKswuJTklmmAt05Jm5Jr+d+T6t2p7Y4kUCkLrcgQxFKg2Bpxz1YCDdHmXJIfDwFwSB2NBFKc/6gwtJzkhiENR3VJOgbADQA2kTwUcqFq9b2V10UNDj2vCCC7SZ7fSaBh9ZdEfHFo4OlAHwfgu0L3lSTfKm3NcSFJDwBYkyaFV7+Qs+wTJA8OQUrSaylJtLqNJGelL00EPgBwQTJ+B8kXIkCqu+LzROLZiOyoOZIM2OmLxwGSi1p3QNLJAL4qJiwmWW5hq62Gy85zdwJ4lOQbkxCR9AeAI5OOG0m+kvXN2gFJKwA8mV42Hpo2IC0E8nRfTreT/GscIlVQWU9yZRuBpwHclV6uIflg1GAHgaxmLcn7ozrzPEnGZGweL5N0Nnt41DvgxOya9O42ki9FjQUJWN0vAG4m+U4P3caUk8Z3SV7WRmAPAOfrHheS/LCHkTrh6xLdSTJUxUkyJmPz2EfytDYCzsdzobGI5IEuFMU29yVg0c0kl3XZkGRMuVY4RPKoCIGFJH/rUj4hgfdJXtRlQ9ICh9A07yBJpxeNZ6B0oV7JW48zkG0/BuAhkn8GCLh5kHOzvSRn0vtRh3gZSZeKodGDgA/jOpKun0MjlZ8OxR7bSLroadyBMoyuIrkuZOHfQqTrDPiCNPCNUZ2Fe94LIFeAz5C8u42AXzyVXm4neXXUWAeBx9ON/FNUXzlPkm/yq9Jv95DMd8Kce8DdNTec8ghHohYCbybgO8YBbhlJCwH8WsjPSm+akjkby/E5fJlJ+hnAscmQOxjOgWZWagICtwJ4McnPusT8WxOB1QDWJoG+6bSJf5p8/ftxQVfuU6bT95F8uHzfRKAMWZ77XxY0My2WBHpOaG+ricv2YXgXhljxEavvJtry2ka0qJ9aI6uNtKRVAEp3abxY+7RVptrQqlb+egCvFr81rn7jIa4UzWrmRlp9Q7hRFZJ3kbykTW+ktVg3dXvlSH0INXRE9pM8YZSOTgLpMqnThMEbXVXxfhhzZMdDBBKJusk7VHvdodKdB39fy2MPybMjuxcmkEiUneOs30R84PyBI9rBcMpyOYClFXDrDBU52XgvAonEqE9Mu53uVp+YLHYqgFPS4/r2vJbVbY02Yx/iJsEpfORz49jge3e/e+9AFWaddtiHnermbl7EdT3HDYPt7jaMA3xsFxpxc7qrZ/c4vfoqaRGn6Pn5LFVVX0eZThxGhzA0LR0TudC0QPXRO+8J/AOnYvFAtGhKvAAAAABJRU5ErkJggg==";
			var category_1_html = "";
			var category_2_html = "";
			this.originalInterfaceList.forEach((item, index) => {
				if (item.category === "1") {
					category_1_html += "<li title='"+item.name+"' data-index='"+index+"'>" + item.name + "</li>";
				}
				if (item.category === "2") {
					category_2_html += "<li title='"+item.name+"' data-index='"+index+"'>" + item.name + "</li>";
				}
			});	
			
			//获得自定义位置
			var left = 0;
			var top = 130;
			var Position = commonFunctionObject.GMgetValue("Position_" + window.location.host);
			if(!!Position){
				left = Position.left;
				top = Position.top;
			}
			var cssMould = `#vip_movie_box`+this.elementId+` {cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; z-index:999; font-size:16px; text-align:left;}
							#vip_movie_box`+this.elementId+` .img_box{width:26px; height:32px;line-height:32px;text-align:center;background-color:#E5212E;margin:5px 0px;}
							#vip_movie_box`+this.elementId+` .img_box >img {width:20px; display:inline-block; vertical-align:middle;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action {display:none; position:absolute; left:26px; top:0; text-align:center; background-color:#272930; border:1px solid gray;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action li{border-radius:2px; font-size:12px; color:#DCDCDC; text-align:center; width:60px; line-height:21px; float:left; border:1px solid gray; padding:0 4px; margin:4px 2px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_action li:hover{color:#E5212E; border:1px solid #E5212E;}
							
							#vip_movie_box`+this.elementId+` li.selected{color:#E5212E; border:1px solid #E5212E;}
							
							#vip_movie_box`+this.elementId+` .selected_text {margin-top:5px;}
							#vip_movie_box`+this.elementId+` .selected_text .img_box{width:26px; height:35px;line-height:35px;text-align:center;background-color:#E5212E;}
							#vip_movie_box`+this.elementId+` .selected_text .img_box >img {width:20px; height:20px;display:inline-block; vertical-align:middle;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_selected {display:none;position:absolute; left:26px; top:0; text-align:center; background-color:#F5F6CE; border:1px solid gray;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_selected ul{overflow-y: auto;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_selected li{border-radius:2px; font-size:12px; color:#393AE6; text-align:center; width:95px; line-height:27px; float:left; border:1px dashed gray; padding:0 4px; margin:4px 2px;display:block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
							#vip_movie_box`+this.elementId+` .vip_mod_box_selected li:hover{color:#E5212E; border:1px solid #E5212E;}
														
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar{width:5px; height:1px;}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
							#vip_movie_box`+this.elementId+` .default-scrollbar-55678::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}
							`
			commonFunctionObject.GMaddStyle(cssMould);
			
			//判断自动解析状态
			var checkboxImage = "";
			if(!!commonFunctionObject.GMgetValue(this.autoPlayerSaveKey, null)){
				checkboxImage = this.checkbox_true_image;
			}else{
				checkboxImage = this.checkbox_false_image;
			}
			
			//加入HTML
			var htmlMould = `<div id='vip_movie_box`+this.elementId+`'>
								<div class='plugin_inner_`+this.elementId+`'>
									<div class="img_box" id="img_box_jump_6667897iio"><img src='`+ vipVideoImageBase64 +`' title='选择解析线路'/></div>
									<div class='vip_mod_box_action' >
										<div style='display:flex;'>
											<div style='padding:10px 0px; width:380px; max-height:400px; overflow-y:auto;'  class="default-scrollbar-55678">
												<div>
                          <div style='font-size:16px; text-align:center; color:#E5212E; padding:5px 0px;'><b><a href="http://www.weifenshi.com/" target="_blank" style="color:#FFF">→淘宝内部隐藏优惠券←</a></b></div>
													<div style='font-size:16px; text-align:center; color:#E5212E; padding:5px 0px;'><b>无视VIP会员，走你[内嵌播放]</b></div>
													<ul>
														` + category_1_html + `
														<div style='clear:both;'></div>
													</ul>
												</div>
												<div>													
													<!--<div style='font-size:16px; text-align:center; color:#E5212E; padding:5px 0px;'><b>无视VIP会员，走你[弹窗播放]</b></div>
													<ul>
													` + category_2_html + `
													<div style='clear:both;'></div>-->
													</ul>
												</div>
												<div style="text-align:left;color:#FFF;font-size:10px;padding:0px 10px;margin-top:10px;">
													<b>自动解析说明：</b>
														<br>&nbsp;&nbsp;1、开启自动开启后，网页打开2S后脚本将自动解析视频。如果自动解析失败，请手动选择不同的解析接口尝试。（PS：解析接口有些视频没资源，这个也没办法）
														<br>&nbsp;&nbsp;2、<span style="color:red;">如果某些网站有会员可以关闭解析，关闭功能相互独立，互不影响</span>
														<br>&nbsp;&nbsp;3、自动解析默认关闭
														<br>&nbsp;&nbsp;4、当前使用的是第`+defaultVipInterfaceIndex+`个接口作为自动解析默认接口，往后版本将加入自定义自动解析接口
                            <br>&nbsp;&nbsp;5、接口无法使用【<a href="http://ys.taohuisc.cn/index.php/gbook/index.html" target="_blank" style="color:#FFF">点击此处</a>】提交，我会第一时间进行修改！
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="img_box" id="img_box_6667897iio"><img src='`+ checkboxImage +`' title='是否打开自动解析。若自动解析失败，请手动选择其它接口尝试！！'/></div>
							</div>
							`;
			$("body").append(htmlMould);
		};
		this.removePlatformVipMod = function(){ //移除平台vip弹框提醒
			let host = window.location.host;
			setInterval(function(){				
				if(host.indexOf("v.qq.com")!=-1){
					$("#mask_layer").hide();
					$(".mod_vip_popup").hide();
				}
			},200);
		};
		this.autoPlayerEvent = function(){  //自动播放事件
			setTimeout(()=>{
				if(commonFunctionObject.GMgetValue(this.autoPlayerSaveKey, null)==="true"){
					this.showPlayerWindow(this.originalInterfaceList[defaultVipInterfaceIndex-1]);
					commonFunctionObject.webToast({"message":"自动解析成功", "background":"#FFFFFF"});
				}
			},1500);
		};
		this.runEvent = function(){	 //事件运行
			var that = this;
			$(".plugin_inner_"+this.elementId).on("mouseover", () => {
				$(".vip_mod_box_action").show();
			});
			$(".plugin_inner_"+this.elementId).on("mouseout", () => {
				$(".vip_mod_box_action").hide();
			});
			$(".vip_mod_box_action li").each((liIndex, item) => {
				item.addEventListener("click", () => {
					var index = parseInt($(item).attr("data-index"));
					var playObject = this.originalInterfaceList[index];
					that.showPlayerWindow(playObject);
					//把点击过的标红
					$(".vip_mod_box_action li").removeClass("selected");
					$(item).addClass("selected");
				});
			});
			
			//补充事件
			this.removePlatformVipMod();
			this.autoPlayerEvent();
			
			//点击视频播放界面
			$("#img_box_jump_6667897iio").on("click", function(){
				commonFunctionObject.GMopenInTab("http://v.taohuisc.cn/?url="+window.location.href, false);
			});
			
			//点击切换是否自动解析
			$("#img_box_6667897iio").on("click", function(){
				var $image = $(this).find("img");
				var autoPlayerSaveKey = that.autoPlayerSaveKey;
				if(commonFunctionObject.GMgetValue(autoPlayerSaveKey, null)==="true"){
					commonFunctionObject.GMsetValue(autoPlayerSaveKey, null);
					commonFunctionObject.webToast({"message":"自动解析：关闭", "background":"#FFE009"});
					$image.attr("src", that.checkbox_false_image);
				}else{
					commonFunctionObject.GMsetValue(autoPlayerSaveKey, "true");
					commonFunctionObject.webToast({"message":"自动解析：打开", "background":"#FFE009"});
					$image.attr("src", that.checkbox_true_image);
				}
			});
			
			//右键移动位置
			var movie_box = $("#vip_movie_box"+this.elementId);
			movie_box.mousedown(function(e) {
				if (e.which == 3) {
					e.preventDefault()
					movie_box.css("cursor", "move");
					var positionDiv = $(this).offset();
					var distenceX = e.pageX - positionDiv.left;
					var distenceY = e.pageY - positionDiv.top;
					
					$(document).mousemove(function(e) {
						var x = e.pageX - distenceX;
						var y = e.pageY - distenceY;
						var windowWidth = $(window).width();
						var windowHeight = $(window).height();
						
						if (x < 0) {
							x = 0;
						} else if (x >  windowWidth- movie_box.outerWidth(true) - 100) {
							x = windowWidth - movie_box.outerWidth(true) - 100;
						}
						
						if (y < 0) {
							y = 0;
						} else if (y > windowHeight - movie_box.outerHeight(true)) {
							y = windowHeight - movie_box.outerHeight(true);
						}
						movie_box.css("left", x);
						movie_box.css("top", y);
						commonFunctionObject.GMsetValue("Position_" + window.location.host,{ "left":x, "top":y});
					});
					$(document).mouseup(function() {
						$(document).off('mousemove');
						movie_box.css("cursor", "pointer");
					});
					$(document).contextmenu(function(e) {
						e.preventDefault();
					})
				}
			});
		};
		this.videAdemove = function(){
			//视频广告过滤相关代码借鉴自其它脚本，该部分代码版权归原作者所有！在此感谢
			//借鉴脚本作者：sign
			//地址：https://greasyfork.org/zh-CN/scripts/406849
			//修改：优化了该段代码的逻辑，使可读性更高
			switch (window.location.host) {
				case 'www.iqiyi.com':
					try{
						unsafeWindow.rate = 0;
						unsafeWindow.Date.now = () => {
							return new unsafeWindow.Date().getTime() + (unsafeWindow.rate += 1000);
						}
						setInterval(() => {
							unsafeWindow.rate = 0;
						}, 600000);
					}catch(e){}
					
					//广告过滤iqiyi有点问题，10s后循环结束
					let iqiyiDelay = 0;
					let iqiyiInterval =  setInterval(() => {
						try{
							let cupidPublicTime = document.getElementsByClassName("cupid-public-time");
							if(cupidPublicTime.length!=0 && !!cupidPublicTime[0]){
								$(".skippable-after").css("display", "block");
								let skippableAfter = document.getElementsByClassName("skippable-after");
								if(skippableAfter.length!=0 && !!skippableAfter[0]){
									skippableAfter[0].click();
								}
							}
							$(".qy-player-vippay-popup").css("display", "none");
							$(".black-screen").css("display", "none");
						}catch(e){}
						if(iqiyiDelay>=10000){
							clearInterval(iqiyiInterval);
						}
						iqiyiDelay += 500;
					}, 500);
					break;
				case 'v.qq.com':
					// setInterval(() => { //视频广告加速
					// 	try{
					// 		$(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
					// 		$(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
					// 	}catch(e){}
					// }, 1000)
					// setInterval(() => {
					// 	try{
					// 		var txp_btn_volume = $(".txp_btn_volume");
					// 		if (txp_btn_volume.attr("data-status") === "mute") {
					// 			$(".txp_popup_volume").css("display", "block");
					// 			txp_btn_volume.click();
					// 			$(".txp_popup_volume").css("display", "none");
					// 		}
					// 		//$("txpdiv[data-role='hd-ad-adapter-adlayer']").attr("class", "txp_none");
					// 		$(".mod_vip_popup").css("display", "none");
					// 		$(".tvip_layer").css("display", "none");
					// 		$("#mask_layer").css("display", "none");
					// 	}catch(e){}
					// }, 500);
					
					break
				case 'v.youku.com':
					try{
						window.onload = function () {
							if (!document.querySelectorAll('video')[0]) {
								setInterval(() => {
									document.querySelectorAll('video')[1].playbackRate = 16;
								}, 100)
							}
						}
					}catch(e){}
					setInterval(() => {
						try{
							var H5 = $(".h5-ext-layer").find("div")
							if(H5.length != 0){
								$(".h5-ext-layer div").remove();
								var control_btn_play = $(".control-left-grid .control-play-icon");
								if (control_btn_play.attr("data-tip") === "播放") {
									$(".h5player-dashboard").css("display", "block");
									control_btn_play.click();
									$(".h5player-dashboard").css("display", "none");
								}
							}
							$(".information-tips").css("display", "none");
						}catch(e){}
					}, 500);
					
					break
				case 'www.mgtv.com':
					
					break
				case 'tv.sohu.com':
					setInterval(() => {
						try{
							$(".x-video-adv").css("display", "none");
							$(".x-player-mask").css("display", "none");
							$("#player_vipTips").css("display", "none");
						}catch(e){}
					}, 500);
					
					break
				case 'www.bilibili.com':
					break
			}
		};
		//借鉴脚本作者：lanhaha , 版权归原作者所有
		//地址：https://greasyfork.org/zh-CN/scripts/370634
		//修改：优化了该段代码的逻辑，使可读性更高
		this.pageEventExtend = function(){
			var window_url = window.location.href;
			if(window_url.indexOf('v.qq.com/x/cover') != -1){
				$("body").on('mouseover', '.item a', function(e) {
					let $playerItem = $(this), href = $playerItem.attr('href') || $playerItem.data("href");
					$playerItem.off('click.chrome');
					$playerItem.on('click.chrome', function() {
						window.location.href = href
					}).attr('data-href', href).css({
						cursor: 'pointer'
					}).removeAttr('href')
				})
			}else if(window_url.indexOf('iqiyi.com/v_') != -1){
				
				function remove(selector) {
					if (!document.querySelectorAll) {
						return;
					}
					var nodes = document.querySelectorAll(selector);
					if (nodes) {
						for (var i = 0; i < nodes.length; i++) {
							if (nodes[i] && nodes[i].parentNode) {
								nodes[i].parentNode.removeChild(nodes[i]);
							}
						}
					}
				};
				
				function removeObj(targetSelector, rootSelector = 'body', wait) {
					const rootElement = document.querySelector(rootSelector);
					const targetElement = rootElement.querySelector(targetSelector);
					if (targetElement) {
						return Promise.resolve(targetElement)
					}
					return new Promise((resolve, reject) => {
						const callback = function(matationList, observer) {
							const targetElement = rootElement.querySelector(targetSelector);
							if (targetElement) {
								resolve(targetElement);
								observer.disconnect()
							}
						};
						const observer = new MutationObserver(callback);
						observer.observe(rootElement, {
							subtree: true,
							childList: true
						});
						if (wait !== undefined) {
							setTimeout(() => {
								observer.disconnect()
							}, wait)
						}
					})
				};
									
				async function removeAll(targetSelector, rootSelector, now = false) {
					if (now) {
						const parent = rootSelector ? document.querySelector(rootSelector) : document;
						if (parent) {
							const target = parent.querySelector(targetSelector);
							if (target) {
								target.remove();
								return true
							}
						}
						return false
					}
					const target = await removeObj(targetSelector, rootSelector);
					target.remove()
				};
				
				setTimeout(()=>{
					remove('div#scrollTip,.qy-glide,#qy-glide,[class^="qy-glide"],[id^="qy-glide"],svg[display="none"][aria-hidden="true"],div[class*="player-side-ear"],div[class^="player-mnb"][data-asyn-pb]');
					removeAll('div[style*="visibility"][style*="visible"]:not([class]):not([id]):not([style*="fixed"])', undefined, false);
				},1000);
				
				$('div[style*="visibility"][style*="visible"]:not([class]):not([id]):not([style*="fixed"])').hide();
				
				$("body").on('mouseover', 'ul li [href*="/v_"][href*=".html"]:not([href*="=http"]):not([href*="?http"]):not([href*="#http"])', function(e) {
					let $playerItem = $(this), href = $playerItem.attr('href') || $playerItem.data("href");
					$playerItem.off('click.chrome');
					$playerItem.on('click.chrome', function() {
						window.location.href = href
					}).attr('data-href', href).css({
						cursor: 'pointer'
					}).removeAttr('href')
				});
			}
		};
		this.start = function(){	//整体调用
			if(this.isRun()){
				//执行可点击操作
				this.pageEventExtend();
				let delayTimeMs = 0;
				if(window.location.host.indexOf("www.bilibili.com")!=-1){//如果是哔哩哔哩，则需要延迟加载
					delayTimeMs = 2000;
				}else{  //其它平台延迟300ms
					delayTimeMs = 300;
				}
				setTimeout(()=>{
					try{
						this.videAdemove();
					}catch(e){}
					try{
						this.addHtmlElements();
						this.runEvent();
					}catch(e){}
				}, delayTimeMs);
			}
		};
	};
	
	//B站相关功能
	function huahuacat_bilibili(toolObject){
		this.toolObject=toolObject;
		this.downloadResutError=function($btn){
			$btn.text("下载视频（最高请）");
			$btn.removeAttr("disabled");
		};
		this.downloadResutSuccess=function($btn){
			$btn.text("下载视频（最高请）");
			$btn.removeAttr("disabled");
		};
		this.downloadVideo=function($btn){
			var pathname = window.location.pathname, bv = null;
			if (pathname.indexOf("/medialist/play/watchlater/") != -1) { // 在下载视频的时候针对稍后再看页面的链接找BV号
			    bv = pathname.replace("/medialist/play/watchlater/","").replace("/","");
			}else{
				bv = pathname.replace("/video/","").replace("/","");
			}
			if(!bv){
				this.downloadResutError();
			}else{				
				//bv转av
				toolObject.request("get", "http://api.bilibili.com/x/web-interface/archive/stat?bvid="+bv, null).then((resultData)=>{
					let dataJson = JSON.parse(resultData.data);
					if(!!dataJson && dataJson.code===0 && !!dataJson.data){
						let aid = dataJson.data.aid;
						if(!aid){
							this.downloadResutError($btn);
						}else{
							//获取cid
							toolObject.request("get", "https://api.bilibili.com/x/web-interface/view?aid="+aid, null).then((resultData2)=>{
								let dataJson2 = JSON.parse(resultData2.data);
								if(!!dataJson2 && dataJson2.code===0 && !!dataJson2.data){
									let aid = dataJson2.data.aid;
									let bvid = dataJson2.data.bvid;
									let cid = dataJson2.data.cid;
									if(!aid || !bvid || !cid){
										this.downloadResutError($btn);
									}else{
										//获取播放链接
										toolObject.request("get", "https://api.bilibili.com/x/player/playurl?avid="+aid+"&cid="+cid+"&qn=112", null).then((resultData3)=>{
											let dataJson3 = JSON.parse(resultData3.data);
											if(!!dataJson3 && dataJson3.code===0 && !!dataJson3.data){
												this.downloadResutSuccess($btn);
												window.open(dataJson3.data.durl[0].url);
											}
										}).catch((errorData)=>{
											this.downloadResutError($btn);
										});
									}
								}
							}).catch((errorData)=>{
								this.downloadResutError($btn);
							});
						}
					}
				}).catch((errorData)=>{
					this.downloadResutError();
				});
			}
		}
		this.createElementHtml = function(){
			let randomNumber = this.toolObject.randomNumber();
			let cssText = 
			`
				#bilibili_exti_`+randomNumber+`{padding:10px;}
				#bilibili_exti_`+randomNumber+` >.self_s_btn{background-color:#FB7299; color:#FFF; font-size:10px;display:inline-block; margin-right:15px;padding:2px 4px;border-radius:3px;cursor:pointer;}
			`;
			let htmlText=
			`
				<div id="bilibili_exti_`+randomNumber+`">
					<span class="self_s_btn" id="download_s_`+randomNumber+`">下载视频（最高请）</span>
					<span class="self_s_btn" id="focus_s_`+randomNumber+`">一键三联</span>
				</div>
			`;
			setTimeout(()=>{
				if($("#bilibili-player").html().length >= 10){
					$("body").prepend("<style>"+cssText+"</style>");
					//兼容新版播放页面
					let $viewboxReport = $("#viewbox_report div.video-data");
					if($viewboxReport.length==0){
						$viewboxReport = $("#viewbox_report div.video-info-desc");
					}
					$viewboxReport.append(htmlText);
					
					let $that = this;
					$("#download_s_"+randomNumber).on("click", function(){
						$(this).attr("disabled", "disabled");
						$(this).text("下载视频（准备中）")
						$that.downloadVideo($(this));
					});
					$("#focus_s_"+randomNumber).on("click", function(){
						$("#arc_toolbar_report .like").click();
						$("#arc_toolbar_report .coin").click();
					});
				}
			}, 2500);
		}
		this.start = function(){
			let locationHost = window.location.host, locationPathname = window.location.pathname;
			if(locationHost==="www.bilibili.com" && locationPathname.indexOf("/video")!=-1 || locationPathname.indexOf("/watchlater")!=-1){
				this.createElementHtml();
			}
		}
	}
	
	//国外的一些解析
	function abroadVideoHelper(){
		this.isRun = function(){
			var urls=["youtube.com", "facebook.com"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		};
		this.start = function(){
			if(!this.isRun()){
				return;
			}
			setInterval(function(){
				const host = window.location.host;
				const href = window.location.href;
				const eleId = "free-xx1-player-script-9999";
				
				//youtube解析
				if(host.indexOf("youtube.com")!=-1){
					if(href.indexOf("youtube.com/watch")!=-1){
						if($("#"+eleId).length != 0){
							return;
						}
						var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
						var html='<div id="'+eleId+'" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;z-index:9999999999999;cursor:pointer;margin:0px auto;text-align:center;">'+
							'<img src="'+iconVideo+'" style="width:20px;">'+
							'</div>';
						$("body").append(html);
						$("body").on("click", "#"+eleId, function(){
							var location_url = window.location.href;
							var videourl = "https://www.ytdownfk.com/search?url="+location_url;
							commonFunctionObject.GMopenInTab(videourl, false);
						});
					}else{
						$("#"+eleId).remove();
					}
				}
				
				//facebook解析
				if(host.indexOf("facebook.com")!=-1){
					if(href.indexOf("facebook.com/watch")!=-1 || href.indexOf("/videos/")!=-1){
						if($("#"+eleId).length != 0){
							return;
						}
						var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";
						var html='<div id="'+eleId+'" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;z-index:9999999999999;cursor:pointer;margin:0px auto;text-align:center;">'+
							'<img src="'+iconVideo+'" style="width:20px;">'+
							'</div>';
						$("body").append(html);
						$("body").on("click", "#"+eleId, function(){
							var location_url = window.location.href;
							commonFunctionObject.GMsetValue("facebook_downloader_obj", {"facebook_url":location_url});
							commonFunctionObject.GMopenInTab("https://yt1s.com/facebook-downloader", false);
						});
					}else{
						$("#"+eleId).remove();
					}
				}
			}, 500);
			
			if(window.location.href.indexOf("yt1s.com/facebook-downloader")!=-1){ //facebook下载
				var facebookObject = commonFunctionObject.GMgetValue("facebook_downloader_obj");
				if(!!facebookObject){
					$("#s_input").val(facebookObject.facebook_url);
				}
			}
		}
	}
	/**
	 * 全网音乐解析下载
	 */
	function superMusicHelper(){
		this.eleId = Math.ceil(Math.random()*100000000);
		this.isRun = function(){
			var urls=["music.163.com","y.qq.com","www.kugou.com","www.kuwo.cn","www.xiami.com","music.taihe.com","music.migu.cn","lizhi.fm","qingting.fm","ximalaya.com"];
			for(var i=0; i<urls.length;i++){
				if(window.location.host.indexOf(urls[i])!=-1){
					return true;
				}
			}
			return false;
		};
		this.getPlayUrl = function(){
			var currentHost = window.location.host;
			var currentUrl = window.location.href;
			var playUrl = null;
			if(currentUrl.match(/music\.163\./)){ //网易云音乐
				if(currentUrl.match(/^https?:\/\/music\.163\.com\/#\/(?:song|dj)\?id/)) {
					playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent(currentUrl);
				}else if(currentUrl.match(/^https?:\/\/y\.music\.163\.com\/m\/(?:song|dj)\?id/)) {
					playUrl = 'https://music.liuzhijin.cn/?url='+encodeURIComponent('https://music.163.com/song?id='+getQueryString('id'));
				}
			}
			else if(currentUrl.match(/y\.qq\.com/)){ //QQ音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/ryqq\/songDetail\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=qq'
				}
				var musicMatch2 = currentUrl.match(/^https?:\/\/y\.qq\.com\/n\/yqq\/song\/(\S*).html/);
				if(musicMatch2){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch2[1]+'&type=qq';
				}
			}
			else if(currentUrl.match(/kugou\.com/)){ //酷狗
				var musicMatch = currentUrl.match(/hash=(\S*)&album/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kugou';
				}
			}
			else if(currentUrl.match(/kuwo\.cn/)){  //酷我
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/play_detail\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=kuwo';
				}
			}
			else if(currentUrl.match(/www\.ximalaya\.com/)){ //喜马拉雅
			    var xmlyUrlArr = currentUrl.split("/");
			    for(var xuaIndex =0;xuaIndex<xmlyUrlArr.length;xuaIndex++){
			        if(xuaIndex==xmlyUrlArr.length-1){
						playUrl = 'https://music.liuzhijin.cn/?id='+xmlyUrlArr[xuaIndex]+'&type=ximalaya&playUrl='+encodeURIComponent(currentUrl);
			        }
			    }
			}
			else if(currentUrl.match(/www\.lizhi\.fm/)){ //荔枝音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/www\.lizhi\.fm\/(\d*)\/(\d*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[2]+'&type=lizhi';
				}
			}
			else if(currentUrl.match(/music\.migu\.cn/)){ //咪咕音乐
				if(currentUrl.indexOf("?")) currentUrl = currentUrl.split("?")[0];
				if(currentUrl.indexOf("#")) currentUrl = currentUrl.split("#")[0];
				var musicMatch = currentUrl.match(/^https?:\/\/music\.migu\.cn\/v3\/music\/song\/(\S*)/);
				if(musicMatch){
					playUrl = 'https://music.liuzhijin.cn/?id='+musicMatch[1]+'&type=migu';
				}
			}
			return playUrl;
		};
		this.addStyle=function(){
			var innnerCss = 
			"@keyframes turnaround{0%{-webkit-transform:rotate(0deg);}25%{-webkit-transform:rotate(90deg);}50%{-webkit-transform:rotate(180deg);}75%{-webkit-transform:rotate(270deg);}100%{-webkit-transform:rotate(360deg);}}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" {position:fixed; top:150px; left:0px; width:26px; background-color:#E5212E;z-index:9999999899999;}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item{cursor:pointer; width:100%; padding:10px 0px; text-align:center;}"+
			"#plugin_kiwi_analysis_vip_music_box_"+this.eleId+" >.plugin_item >img{width:20px; display:inline-block; vertical-align:middle;animation:turnaround 4s linear infinite;}";
			$("body").prepend("<style>"+innnerCss+"</style>");
		};
		this.generateHtml=function(){
			var $that = this;
			var html="";
			var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVRYR6WXS6hOURTHf/8wux4TMZCBxwApJRSKXG8uGbieKQYGXpEMKLkGGFCURyEDJHFL6cr1uF4DlDJATDwGBnKVtzJAS0v7u53vfPvcc75j1e57nL3X+u2193ocUVDMrB8wFZgCjAcGhOEaOsN4BNwD7kr6UkS1ikwys2ZgHzCkyHzgDbBd0sW8+d0CmFmPYHhbnqKM5/sDyJ+s9ZkAZjYNuFXScHpZo6TbMV1RgODyCyWN3wGuhPEVmAecApbEjqQGwMx6Ar/qMP45GLsO3JT0Ib3WzCz810vS7+TzGMBVYE4OwHfgjBsEbkj62d38BEC7pLmZAGa2DjiaY/wGsE3S06JeSgD4kvWSjlXWdnnAzPoAz4DBOYqbJPkZF5YUwFtgtKRvriAJMAu4lqdVUl7oDgeawjgmqTUF4CZmS/I7UwWw12O2DICZTQbmA76JMQkduyW1RAD2SdqRBrgPTCwKYGZ+UWcGoyMy1mUBPJA0KQ3wChhaBMDM1gLH8+YCWQCvJQ1LA3hoNeQp9TtgZi3Arry5QIuk3ZEj+CGpdxrgfaK6ZequEyDLA52SBqYBPKlMz9tVDoAnpJfAp6DHy3LMAx2SZqQBDgKb/wPgOdAs6UVFh5k1SPoROYJDkrakAYpkQTI8UGM8uZEIQFc2TCYid78fQ1K809kDeA73KPknkUu4UdKRmPfMrD+QLlAzJHVUeSAoPgcsD4p8V8tjOT8C4K5vzQDYABxOPGuTtKDyuyqtmtk44CHgndBkSZ6caiQC0A5sSnopbGgxkG7LqmpJrBwfALZ2l/PN7DLQtYtA+A44Gb73Df1jek7V7muOIFAPArxQrI15wMyWAufzoiXy3BuRRelKmtWSjQQueUMq6XQAGwt4pKwpYfwjsFJSTbXtril1CD+/USUMJpd4i74q6z7l1XaH8DK9sCREG7BT0pOs9UVfTBqB1cCKgiBu+ESRzqkQQCIBTfAIATy8YvI4VMDCLVtdAAkQ7wW8J0jKWUmrCnqoa1opgBAVfkErnmiV5O+Pdcv/AHhDUal8IyV5Q1O3lAYIXljmn5LKJKZ/sH8B8jdXMDutk64AAAAASUVORK5CYII=";
			html+= "<div id='plugin_kiwi_analysis_vip_music_box_"+this.eleId+"'>";
			html+= "<div class='plugin_item jump_analysis_website' title='点我VIP音乐破解，免客户端下载！'><img src='"+vipImgBase64+"'></div>";
			html+= "</div>";
			$("body").append(html);
			
			$("#plugin_kiwi_analysis_vip_music_box_"+this.eleId+"").on("click", function(){
				var playUrl = $that.getPlayUrl();
				if(!!playUrl) GM_openInTab(playUrl, false);
			})
		};
		this.operation=function(){
			var $that = this;
			setInterval(function(){
				var playUrl = $that.getPlayUrl();
				var $vipMusicBox = $("#plugin_kiwi_analysis_vip_music_box_"+$that.eleId+"");
				if(!!playUrl){
					if($vipMusicBox.length==0){
						$that.generateHtml();
					}
				}else{
					$vipMusicBox.remove();
				}
			}, 100);
		};
		this.start=function(){
			if(this.isRun()){
				this.addStyle();
				this.operation();
			}
		};
	}
	
	/**
	 * 来搜一下，网盘搜索引擎无线下载
	 * @param {Object} toolObject
	 */
	function wangpanSearchEnginesHelper(toolObject){
		this.toolObject=toolObject;
		this.start = function(){
			let $that = this;
			if(window.location.host==="www.laisoyixia.com" && window.location.href.indexOf("/download/detail")!=-1){
				var $downloadBtn = $("#downloadHandler");
				var downloadurl = $downloadBtn.data("downloadurl");
				if(!!downloadurl){
					var wangpanUrl = window.atob(downloadurl);
					$downloadBtn.after("<div style='padding:15px;background-color:#eee;margin-top:15px;'>插件提取所得：<a target='_blank' href='"+wangpanUrl+"'>"+wangpanUrl+"</a></div>")
				}
			}
		}
	}
  
(function() {
	var tools = {
		checkUA: function() {
			var UAstr = "pc";
			if (/Android|webOS|iPhone|iPod|BlackBerry|HarmonyOS/i.test(navigator.userAgent)) {
				UAstr = "mobile";
			}
			return UAstr;
		},
		identifySite: function(type) {
			var Url = window.location.href;
			var UAstr = this.checkUA();
			var res = false;
			//区分UA
			if (UAstr === "mobile" && Url.search("/share/video/") !== -1) {
				res = ["appshare", "share"];
			} else if (UAstr === "pc" && Url.search("douyin.com") !== -1) {
				if (location.pathname === "/") {
					res = ["recommend", "video"];
				} else if (Url.search("/discover") !== -1) {
					res = ["home", "video"];
				} else if (Url.search("/follow") !== -1) {
					res = ["follow", "video"];
				} else if (Url.search("/hot") !== -1) {
					res = ["hot", "video"];
				} else if (Url.search("/channel") !== -1) {
					res = ["channel", "video"];
				} else if (Url.search("/video") !== -1) {
					res = ["detail", "video"];
				} else if (Url.search("/search") !== -1) {
					res = ["search", "video"];
				}
			}
			//不区分UA
			if (Url.search("live.douyin.com") !== -1) {
				if (location.pathname === "/") {
					res = ["livehome", "live"];
				} else {
					res = ["livedetail", "live"];
				}
			} else if (/(?=.*?(douyinvod|zjcdn|ixigua).com)(?=.*?\/video\/tos\/)/i.test(Url)) {
				res = ["download", "download"];
			}
			if (type === "type") {
				return res[1];
			} else {
				return res[0];
			}
		},
		videoName: function(type, pareObj) {
			if (!pareObj) {
				pareObj = document;
			}
			var title, author, id; //0:author,1:title,2:id
			switch (type) {
				case "share":
					title = pareObj.getElementsByClassName("desc")[0];
					author = pareObj.getElementsByClassName("author-name")[0];
					id = location.pathname.split("video/")[1].replace("/", "");
					break;
				case "list":
					author = pareObj.children[2].children[0];
					title = pareObj.children[1];
					id = pareObj.children[0].href.split("video/")[1].replace("/", "");
					break;
				case "swiper":
					author = pareObj.getElementsByClassName("mzZanXbP")[0];
					title = pareObj.getElementsByClassName("title")[0];
					id = pareObj.getElementsByClassName("xgplayer-icon content-wrapper hasMarginRight")[0]
						.href.split("?")[0].split("video/")[1].replace("/", "");
					break;
				case "video":
					author = pareObj.getElementsByClassName("WLXvBZ9-")[0];
					title = pareObj.getElementsByClassName("AQHQ2slR")[0];
					id = location.pathname.split("video/")[1].replace("/", "");
					break;
				default:
					break;
			}
			if (!title || !author || !id) {
				return "";
			}
			author = author.innerText.replace(/(^\s*)|(\s*$)/g, "").replace(/^@/, "");
			title = title.innerText.replace(/(^\s*)|(\s*$)/g, "").slice(0, 30); //限制30字符
			return title + "@@@" + author + "@@@" + id;
		},
		downloadLink: function(url, name) {
			if (!name) {
				console.log("tools.downloadLink参数缺失");
				return false;
			}
			let data = "&extraData-fileName=" + set.get("fileName") + "&extraData-download=" + set.get(
				"download");
			return encodeURI(url + data + "&extraData-videoName=" + name);
		},
		getData: function(url) {
			url = /\?/i.test(url) ? url.split("?")[1] : url;
			url = url.split("&");
			let data = {};
			for (let i in url) {
				if (/extraData-/i.test(url[i])) {
					let key = url[i].split("=")[0];
					let val = url[i].split("=")[1];
					data[key] = decodeURI(val);
				}
			}
			return data;
		},
		parseUrl: function() {
			var flag = true;
			var extraData = this.getData(location.href);
			if (extraData["extraData-download"] !== "auto") {
				flag = false;
			}
			var name = extraData["extraData-videoName"]
			switch (extraData["extraData-fileName"]) {
				case "videoName":
					name = name ? name.split("@@@")[0] : "抖音视频";
					break;
				case "id":
					name = name ? name.split("@@@")[2] : "抖音视频";
					break;
				default:
					name = name ? name.split("@@@")[0] + "@" + name.split("@@@")[1] : "抖音视频";
					break;
			}
			return [name, flag];
		},
		cloneJSON: function(target) {
			return {
				...target
			};
		},
		extendJSON: function(origin, target) {
			return {
				...origin,
				...target
			};
		},
		fetchUrl: function(id, type) {
			type = isNaN(parseInt(type)) ? set.get("fetchType"):type;
			var res = false;
			console.log("正在获取视频地址，视频ID=" + id);
			if (type === "0") { //detail页面专属
				res = document.querySelector("script[id=RENDER_DATA]").innerText;
				res = JSON.parse(decodeURIComponent(res));
				let awemeId = res[21].awemeId.trim();
				if (awemeId && awemeId !== id) {
					location.reload();
				}
				res = res[21].aweme.detail.video.playAddr[0].src.replace("playwm", "play");
			} else if (type === "1" && typeof jQuery === "function") {
				//旧方法，通过ajax请求接口获取地址
				$.ajax({
					url: "https://www.douyin.com/web/api/v2/aweme/iteminfo/?item_ids=" + id,
					type: "get",
					async: false,
					success: function(jsonRes) {
						try {
							JSON.stringify(jsonRes); //防止jsonRes不是JSON格式
						} catch (e) {
							jsonRes = JSON.parse(jsonRes);
						}
						res = jsonRes.item_list[0].video.play_addr.url_list[0].replace("playwm",
							"play");
					},
					error: function() {
						console.log("获取失败:" + id);
					}
				});
			} else if (type === "2") {
				//新方法，通过XMLHttpRequest直接加载detail页获取高码率视频地址，此方法还需调试完善
				var videoRequest = new XMLHttpRequest();
				videoRequest.open("GET", "https://www.douyin.com/video/" + id, false); //必须异步
				videoRequest.send();
				let parseRes = document.createElement("div");
				parseRes.innerHTML = videoRequest.responseText;
				res = parseRes.querySelector("script[id=RENDER_DATA]").innerText;
				res = JSON.parse(decodeURIComponent(res));
				res = res[21].aweme.detail.video.playAddr[0].src.replace("playwm", "play");
			} else {
				console.log("tools.fetchUrl(id,type)参数缺失，或参数与浏览器不匹配");
			}
			return res;
		},
		toClipboard: function(data, msg) {
			var exportBox = document.createElement("input");
			exportBox.value = data;
			document.body.appendChild(exportBox);
			exportBox.select();
			document.execCommand('copy');
			exportBox.remove();
			if (msg !== false) {
				msg = msg ? msg : "已导出到剪贴板";
				alert(msg);
			}
		},
		encodeShort: function(url) {
			if (!url) {
				console.log("tools.encodeShort(url)参数缺失");
				return false;
			}
			var shortInterFace = "xnz.pub/apis.php?url="; //短链接口
			var shortUrl;
			var protocol = /http|https/i.test(location.protocol) ? location.protocol : "https:";
			shortInterFace = protocol + "//" + shortInterFace.replace(/^((http|https):)?\/\//, "");
			$.ajax({
				type: "get",
				url: shortInterFace + url,
				async: false, //必须同步执行
				error: function(xhr) {
					alert("短链接口错误!\n" + "错误代码:" + xhr.status + "\n错误提示:" + xhr.statusText +
						"\n请联系开发者更换短链接口");
					shortUrl = false;
				},
				success: function(res) {
					if (typeof res === "string") {
						res = JSON.parse(res); //防止get到的数据不是json格式
					}
					shortUrl = "https://xnz.pub/" + res.result.shorten;
				}
			})
			return shortUrl;
		}
	}

	var createBtn = {
		share: function() { //#NewDownloadBtn
			var btnBox = document.getElementsByClassName("content-wrap")[0];
			var downloadBtn = document.getElementById("NewDownloadBtn");
			if (!btnBox || downloadBtn) {
				return false;
			}
			downloadBtn = btnBox.firstChild.cloneNode(true);
			var videoURL = document.getElementsByTagName("video")[0].src.replace("playwm", "play");
			videoURL = tools.downloadLink(videoURL, tools.videoName("share"));
			downloadBtn.id = "NewDownloadBtn";
			downloadBtn.style.marginLeft = "10px";
			downloadBtn.children[0].src =
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANBSURBVFhHzZlBb9MwFMfjqkXTpDaThiaQNqHduXBju/ENEGhc+BTsg7BPwYUKzrtxo7vxCRAHJiHQhpZOmqYtqvn/necsa5w0cUKbn+TZcZvk3+dn+/lNBQ2YTqd7WuvnQaAOgkDvoN6WjwR9ij8TFq17pxsbw7Hp9qC20PPzq+1+//Y9mnsoa3jEFerHKAMUF5coZ0kz2IX4sVLqaDQa8QdUprLQjMAXuG2Gest8UJ8/KLi3nuBKQqMo+ogKFlQh6qHpbA4tzWcdheHo0PSU0JPaCa0IkT+TK+N/bYkk9lkvo2h6w3fJtZNCi8pEgSXVA1z6DnMtlAr2i1zBKTQRGXxF8xalaJL8F4rE5oQmkybmcC9dpDCL4/6Tzc11Lm0pOR+FSE4czsxViCQ9aPgh7ZR7QuHUXH4eoSzFJ0v4KytNSjr0Gb/sCDqK48FT6wKpRTHD36Hi2tYRFFzAbDAGY9Gm1nz1+q203Hz+9EFaddFnsOozWtVYVKzJCdQx1MxaVYae0c/KJ5ALamLwE/QuLi4pMrccdIg1umZPqVnpHrt61BVjXg49TfvQ9HUTxLrqwAptMypqG+yQekdhN9LSUZlFy9EifJardMHvOl5C/Rdw/3u9LerzwiY/EELNkbYS9M2sf9Z5cfa7889ZjOYWqmyQ7EUVsU0sCRgoTWhRJgV+mS5PyoQ0FEmYE5hgZ1InELue9PnjEtSCSAOzLCbMS47E8+mYPE3Xz3mq/hCc+5Wd9Tz1dTDMoybjmkngLOmab7js3J5vj8/GonIu+YLSoaMIteixPePboQ8Q8h/ig0guu8CQSTRp3wkVq1J9F4JoariX6ctlSmQFWFq+yQEn9XfM9P3kMiG1qAUugPhU36DpvVs1gO/ciuP+m+TyjpxQugB8g19kSmeZYk2ui7PcJh2y5IQS+gZvQJNil7G+cr38XTvtaJHMHnNAzEftms72wcTRA7qcy5KWUqEWSZ7ZlE+LqXGzHE7CMMz55DzOoZ+HOfbEFfSxdDVxBw4zIiJ9TCtWEUkqWTSLpMxhXZNdsWsut94iS3OSIIw0Edo1yoSbS9kwu6gtNAuzLJLA4JEbxfUPMQbm5l81J0UTZTFB8A/hCTrXIQH9kwAAAABJRU5ErkJggg==";
			downloadBtn.children[1].innerHTML =
				"<a target='_self' style='text-decoration:none;color:#262832' href='" + videoURL +
				"'>下载</a>";
			var downloadBtnEvent = {
				clickFn: function() {
					if (videoURL) {
						location.href = videoURL;
					} else {
						alert("正在获取视频地址，请稍后再试");
					}
				},
				longPress: function() {
					set.create();
				}
			}
			var waitTimer = -1;
			downloadBtn.addEventListener("touchstart", function() {
				waitTimer = setTimeout(function() {
					waitTimer = -1;
					downloadBtnEvent.longPress();
				}, 500);
			})
			downloadBtn.addEventListener("touchend", function() {
				if (waitTimer !== -1) {
					clearTimeout(waitTimer);
					waitTimer = -1;
					downloadBtnEvent.clickFn();
				}
			})
			btnBox.appendChild(downloadBtn);
		},
		list: function(a0, i) { //.downloadBtn-in-list
			var res = [];
			var a01 = a0.children[1];
			var a02 = document.createElement("span");
			a02.setAttribute("class", "downloadBtn-in-list");
			a02.innerHTML =
				"<svg xmlns='http://www.w3.org/2000/svg' version='1.1' style='width:32px;height:32px; cursor: pointer;margin-left:5px;' fill='var(--color-text-1)' fill-opacity='0.4'><path d='M12 7h8v8h-8z M8 15L24 15 16 24z M5 24h22v2h-22z M5 20h2v4h-2z M25 20h2v4h-2z' /></svg>";
			var a020 = a02.children[0];
			a020.onmouseover = function() {
				a020.setAttribute("fill-opacity", "1");
			};
			a020.onmouseleave = function() {
				a020.setAttribute("fill-opacity", "0.4");
			}
			if (a01 === undefined) {
				a02.onclick = function() {
					alert("当前项为直播间，暂时无法在列表中提取真实推流地址。请先进入直播间再提取地址");
				}
				res = [a02, null];
				a0.appendChild(a02);
			} else {
				var videoName = tools.videoName("list", a0.parentElement);
				var videoUrl = tools.fetchUrl(videoName.split("@@@")[2]);
				a02.onclick = function() {
					if (!videoUrl) {
						alert("正在获取视频地址");
						return false;
					}
					var thisVideoLink = tools.downloadLink(videoUrl, videoName);
					console.log("正在打开:" + thisVideoLink);
					open(thisVideoLink);
				}
				res = [a02, a01];
				a02.setAttribute("massive-download-data", videoUrl);
			}
			return res;
		},
		swiper: { //.newBtnDownload
			create: function(BtnList) {
				var newBtn = BtnList.children[1].cloneNode(true);
				var pathLen = newBtn.children[0].children[0].children.length;
				if (pathLen > 1) {
					for (let i = 1; i < pathLen; i++) {
						newBtn.children[0].children[0].children[i].style.display = "none";
					}
				}
				newBtn.children[0].children[0].children[0].setAttribute("d",
					"M14 9h8v8h-8z M10 17L26 17 18 26z M7 26h22v2h-22z M7 22h2v4h-2z M27 22h2v4h-2z");
				newBtn.children[0].onclick = function() {
					alert("正在获取地址中，请稍后再试");
				}
				newBtn.children[1].innerHTML =
					"<a href='javascript:alert('正在获取地址中，请稍后再试')' style='text-decoration : none'>下载</a>";
				newBtn.onclick = function() {
					document.getElementsByTagName('video')[0].pause();
				}
				var newBtnBox = document.createElement("div");
				newBtnBox.setAttribute("class", "newBtnDownload");
				newBtnBox.appendChild(newBtn);
				BtnList.appendChild(newBtnBox);
			},
			change: function(BtnList, videoID, presentObj) {
				var newBtnBox = BtnList.getElementsByClassName("newBtnDownload")[0];
				if (newBtnBox) {
					var newBtn = newBtnBox.children[0];
					newBtn.setAttribute("data-id", videoID);
					var videoURL = tools.fetchUrl(videoID);
					var videoName = tools.videoName("swiper", presentObj);
					videoURL = tools.downloadLink(videoURL, videoName);
					newBtn.children[0].onclick = function() {
						open(videoURL);
					}
					newBtn.children[1].innerHTML = "<a href=" + videoURL +
						" style='text-decoration : none' target='_blank'>下载</a>";
				}
			}
		},
		video: function(BtnList) { //#newBtnDownload
			var videoId = location.pathname;
			videoId = videoId.slice(videoId.search("video/") + 6);
			videoId = videoId ? videoId.split("/")[0] : "";
			if (!document.getElementById("newBtnDownload")) {
				var videoURL = tools.fetchUrl(videoId, "0");
				var videoName = tools.videoName("video");
				videoURL = tools.downloadLink(videoURL, videoName);
				var videoId = videoName.split("@@@")[2];
				var newBtn = BtnList.children[2].cloneNode(true);
				newBtn.setAttribute("id", "newBtnDownload");
				newBtn.setAttribute("video-data", videoId);
				newBtn.children[0].children[0].setAttribute("d",
					"M12 7h8v8h-8z M8 15L24 15 16 24z M5 24h22v2h-22z M5 20h2v4h-2z M25 20h2v4h-2z");
				newBtn.children[1].setAttribute("class", "iR6dOMAO");
				newBtn.children[1].innerHTML = "<a href=" + videoURL +
					" style='text-decoration : none' target='_blank'>下载</a>";
				newBtn.children[0].onclick = function() {
					open(videoURL);
				}
				newBtn.onclick = function() {
					document.getElementsByTagName('video')[0].pause();
				}
				BtnList.appendChild(newBtn);
			} else {
				let btn = document.getElementById("newBtnDownload");
				if (btn.getAttribute("video-data") !== videoId) {
					btn.remove();
				}
			}
		},
		live: {
			create: function(name, id, logo, event, attribute) {
				var btn = document.createElement("button");
				btn.setAttribute("class", "VPz4-306");
				btn.style.margin = "0 0 0 8px";
				btn.innerHTML = logo + "<span>" + name + "</span>";
				btn.id = id;
				for (let i in event) {
					btn.addEventListener(i, event[i]);
				}
				for (let i in attribute) {
					btn.setAttribute(i, attribute[i]);
				}
				return btn;
			},
			undisturb: function() {
				var list = {
					"searchBar": {
						"class": "BJUkFEKo",
						"extraEvent": function(state) {
							var liveCategory = document.getElementsByClassName("xWQs9nlt KpjwjEYL")[
								0];
							if (!liveCategory) {
								console.log("直播分类模块丢失");
								return false;
							}
							if (state === "on") {
								liveCategory.style.top = "0";
							} else {
								liveCategory.style.top = "";
							}
						}
					},
					"liveCategory": {
						"class": "l0I0l5H4",
						"extraEvent": null
					},
					"relativeLive": {
						"class": "_3zMWm4HT",
						"extraEvent": null
					},
					"buttomMessage": {
						"class": "HPcNXBOf",
						"extraEvent": null
					},
					"chatWindow": {
						"class": "ojIOhXDJ",
						"extraEvent": function(state) {
							var livePlayer = document.getElementsByClassName("Jf1GlewW")[0];
							if (!livePlayer) {
								console.log("找不到直播播放器");
								return false;
							}
							if (state === "on") {
								livePlayer.style.margin = "auto";
							} else {
								livePlayer.style.margin = "";
							}
						}
					},
					"edgeTool": {
						"class": "ohjo+Xk3",
						"extraEvent": null
					},
				};
				var event = {
					"click": function() {
						var state = this.getAttribute("state-data");
						if (state === "off") {
							state = "on";
							this.setAttribute("class", "vtmmwltk fagGqGzK IuAQYIaJ rgdB9Lb0");
						} else {
							state = "off";
							this.setAttribute("class", "vtmmwltk fagGqGzK mBGB33Vg rgdB9Lb0");
						}
						var setData = set.get("hideList"),
							target, extraEvent;
						for (let i in setData) {
							target = false;
							extraEvent = false;
							if (setData[i] && list[i]) {
								target = document.getElementsByClassName(list[i].class)[0];
								extraEvent = list[i].extraEvent;
								if (target) {
									if (state === "on") {
										target.style.display = "none";
									} else {
										target.style.display = "";
									}
								}
								if (typeof extraEvent === "function") {
									extraEvent(state);
								}
							}
						}
						this.setAttribute("state-data", state);
						localStorage.setItem("undisturbWatch", state);
						console.log("沉浸式观看:" + state);
					}
				}
				var attribute = {
					"state-data": "off",
					"title": "沉浸式观看模式:屏蔽不必要的窗口从而提高观看体验。按钮红色亮起表示未启动，非红色表示已启动"
				}
				var btn = this.create("沉浸观看", "undisturbWatchBtn", "", event, attribute);
				btn.setAttribute("class", "vtmmwltk fagGqGzK mBGB33Vg rgdB9Lb0");
				return btn;
			},
			download: function() {
				var logo =
					"<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' class='_5AZvPWVz'><path fill-rule='evenodd' clip-rule='evenodd' d='M5 1L10 1L10 7L12 7L8 11L8 12L13 12L13 9L14 9L14 13L1 13L1 9L2 9L2 12L7 12L7 11L3 7L5 7z' fill='#2F3035'></path></svg>";
				var event = {
					"click": function() {
						var data = document.getElementById("RENDER_DATA").innerText;
						data = JSON.parse(decodeURIComponent(data));
						data = data.initialState.roomStore.roomInfo.room.stream_url;
						switch (set.get("download")) {
							case "m3u8":
								data = data.hls_pull_url_map["FULL_HD1"];
								break;
							case "flv":
								data = data.flv_pull_url["FULL_HD1"];
								break;
							default:
								data = data.hls_pull_url;
								break;
						}
						if (data && typeof data === "string") {
							tools.toClipboard(data, "抖音真实推流地址已导出到剪贴板");
						}
					}
				}
				var attribute = {
					"title": "点击提取抖音直播真实推流地址"
				}
				var btn = this.create("提取地址", "newBtnDownload", logo, event, attribute);
				return btn;
			},
			share: function() {
				let box = document.querySelector("._2ZWxpgKz");
				if (box && !/分享/i.test(box.innerText)) {
					let btn = box.children[0].cloneNode(true);
					btn.innerText = btn.innerText.replace("举报", "分享");
					btn.onclick = function() {
						if (typeof jQuery !== "function") {
							let msg =
								"无法启动该功能，可能的原因:\n(1)当前浏览器不支持jQuery，请使用主流浏览器并加载主流的脚本管理插件\n(2)当前远程jQuery库无法访问，请稍后再试";
							console.log(msg);
							alert(msg);
							return false;
						}
						let shareUrl = location.href;
						shareUrl = set.get("shareUrl") !== "short" ? shareUrl : tools.encodeShort(
							shareUrl);
						tools.toClipboard(shareUrl);
					}
					box.appendChild(btn);
				}
			}
		},
		set: function() {
			if (document.getElementById("downloaderSettingBtn")) {
				return false;
			}
			//nxsdxGGH:video;ohjo+Xk3:live;_9f1b1dc461877bc141b6e50012a13f5d-scss:search
			var boxClassArray = ["nxsdxGGH", "ohjo+Xk3", "_9f1b1dc461877bc141b6e50012a13f5d-scss"],
				box;
			for (let i in boxClassArray) {
				box = document.getElementsByClassName(boxClassArray[i])[0];
				if (box) {
					break;
				}
			}
			if (!box) {
				return false;
			}
			var btn = document.createElement("div");
			btn.id = "downloaderSettingBtn";
			btn.style =
				"align-items:center;background-color: var(--color-bg-1);border-radius: 18px;bottom: 0;box-shadow: var(--shadow-2);cursor: pointer;display: flex;font-size: 0;height: 36px;justify-content: center;margin-top: 8px;width: 36px;";
			btn.innerHTML =
				"<svg width='32' height='32' fill='var(--color-text-3)' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' style='color: var(--color-text-3);'><path fill-rule='evenodd' clip-rule='evenodd' d='M18.051782472841584,8.307068007308498 C12.516707606894524,8.307068007308498 8.029759537538956,12.794016076664168 8.029759537538956,18.329090942611256 C8.029759537538956,23.864165808558244 12.516707606894524,28.35111387791388 18.051782472841584,28.35111387791388 C23.586857338788583,28.35111387791388 28.073805408144114,23.864165808558244 28.073805408144114,18.329090942611256 C28.073805408144114,12.794016076664168 23.586857338788583,8.307068007308498 18.051782472841584,8.307068007308498 zM23.834408338773077,17.61746801229386 C22.83386098228989,18.76833881723545 21.278909714978113,19.148974338102818 19.914276208100574,18.711105577684705 L14.95773975158758,24.41098459125365 C14.429539010673908,25.017794841911893 13.510359392347201,25.079854981183725 12.903549141689044,24.552343797372888 S12.232610080449827,23.104963438132547 12.760121264260935,22.49815318747435 L17.723553291803697,16.792068159978093 C17.10777879880622,15.50604416284459 17.27051427511903,13.92075238300005 18.266234731880896,12.776087591985577 C19.208859291710244,11.690035154728026 20.647275408611392,11.292850263388228 21.953986118835438,11.621769001528975 L20.054945857116607,13.836626416431487 L20.676236806938302,15.643955583448678 L22.55321124136052,16.00873129094669 L24.457078402800576,13.788357419219931 C24.97286711586004,15.03921400409958 24.78323891252938,16.527278232418247 23.834408338773077,17.61746801229386 z'></path></svg>";
			btn.onclick = function() {
				if (document.getElementById("downloaderSettingPage")) {
					set.close();
				} else {
					set.create()
				}
			}
			btn.onmouseover = function() {
				btn.children[0].setAttribute("fill", "var(--color-text-1)");
			}
			btn.onmouseleave = function() {
				btn.children[0].setAttribute("fill", "var(--color-text-3)");
			}
			box.appendChild(btn);
		},
		link: function() {
			var shareBox = document.getElementsByClassName("VYAVbHvT")[0];
			if (shareBox && shareBox.name !== "newShareBox") {
				var tokenBtn = shareBox.children[1];
				var linkBtn = tokenBtn.cloneNode(true);
				var shortLink = shareBox.firstChild.innerText;
				shortLink =
					/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/g
					.exec(shortLink)[0];
				linkBtn.setAttribute("data-shortLink", shortLink);
				linkBtn.onclick = function() {
					var alertMsg = document.createElement("div");
					var alertMsgBox;
					if (document.getElementsByClassName("mylaiMgB")[0]) {
						alertMsgBox = document.getElementsByClassName("mylaiMgB")[0];
						alertMsg.setAttribute("class", "mwDSfjqo cqwXIZ7n");
					} else if (document.getElementsByClassName("y9cs0OZJ")[0]) {
						alertMsgBox = document.getElementsByClassName("y9cs0OZJ")[0];
						alertMsg.setAttribute("class", "mwDSfjqo Q3BPdb-w");
					} else {
						tools.toClipboard(this.getAttribute("data-shortLink"), true);
						return null;
					}
					tools.toClipboard(this.getAttribute("data-shortLink"), false);
					alertMsg.innerText = "分享短链已复制到剪贴板";
					setTimeout(function() {
						alertMsg.remove()
					}, 3500);
					alertMsgBox.appendChild(alertMsg);
				}
				linkBtn.innerText = "短链";
				linkBtn.id = "shortLinkShareBtn";
				linkBtn.style.marginLeft = "2px";
				tokenBtn.innerText = "口令";
				var btnWidth = Math.ceil(getComputedStyle(tokenBtn).width.replace("px", ""));
				var textWidth = Math.floor(getComputedStyle(shareBox.firstChild).width.replace("px", ""));
				shareBox.firstChild.style.width = (textWidth - btnWidth - 20) + "px";
				shareBox.lastChild.style.borderRadius = "0px";
				shareBox.appendChild(linkBtn);
				shareBox.name = "newShareBox";
			}
		}
	};

	var init = {
		page: function() {
			Page = currentPage;
			console.log("当前页判断为" + Page + "页");
			if (Timer !== -1) {
				clearInterval(Timer);
				console.log("已释放上一定时器(ID:" + Timer + ")");
				Timer = -1;
			}
		},
		main: function() {
			this.page();
			set.init();
			createBtn.set();
			this.edge();
			main.judge();
		},
		clickFn: function() {
			loginPopupFlag = "wait";
			console.log("用户登录中...");
		},
		login: function() {
			var ClassArray = ["SSV0NEur", "tk3nuzSi", "wlsrobSg", "OPE8io-h", "ib4UcBI5",
				"q6zgm94p k-vFWw3W FDOWibym scan__button",
				"q6zgm94p k-vFWw3W FDOWibym video-comment-high__contain__btn"
			]; //视频顶栏（button）、推荐页评论区（span ib4UcBI5）、直播间弹幕（span OPE8io-h）
			var BtnArray = [];
			var LoginBtnArray, LoginBtn;
			for (let i = 0; i < ClassArray.length; i++) {
				LoginBtnArray = document.getElementsByClassName(ClassArray[i]);
				if (LoginBtnArray[0]) {
					BtnArray.push(ClassArray[i]);
				}
			}
			for (let i = 0; i < BtnArray.length; i++) {
				LoginBtn = document.getElementsByClassName(BtnArray[i]);
				for (let j = 0; j < LoginBtn.length; j++) {
					if (LoginBtn[j] && LoginBtn[j].name !== "newLoginBtn") {
						LoginBtn[j].addEventListener("click", init.clickFn);
						LoginBtn[j].name = "newLoginBtn";
					}
				}
			}
			//以防万一所有button都加上新事件
			var allBtn = document.getElementsByTagName("button");
			for (let i = 0; i < allBtn.length; i++) {
				if (allBtn[i].innerText.search("登录") !== -1) {
					allBtn[i].addEventListener("click", init.clickFn);
					allBtn[i].name = "newLoginBtn";
				}
			}
		},
		edge: function() {
			var ClassArray = ["fb2dec3549d317f2d5116f185d19bea8-scss",
				"_8344e6bcc8551f4c88c21183a102908e-scss"
			];
			var EdgeBar;
			for (let i = 0; i < ClassArray.length; i++) {
				EdgeBar = document.getElementsByClassName(ClassArray[i])[0];
				if (EdgeBar) {
					break;
				}
			}
			if (EdgeBar && EdgeBar.childElementCount !== 0) {
				for (let i = 0; i < EdgeBar.childElementCount; i++) {
					var EdgeOpt = EdgeBar.children[i];
					if (EdgeOpt.name !== "Displaying") {
						if (EdgeOpt.childElementCount > 0 && EdgeOpt.children[0].href
							.search("200204") === -1) {
							EdgeOpt.style.display = "flex";
						}
						EdgeOpt.name = "Displaying";
					}
				}
				console.log("显示" + currentPage + "页侧栏所有选项");
			}
		},
		live: function(flag) {
			if (!flag) {
				var state = localStorage.getItem("undisturbWatch");
				let btn = document.getElementById("undisturbWatchBtn");
				if (state === null || state === undefined) {
					state = btn.getAttribute("state-data");
					localStorage.setItem("undisturbWatch", state);
				}
				if (state !== btn.getAttribute("state-data")) {
					btn.click();
				}
				return null;
			}
			if (set.get("undisturbWatch") === "auto") {
				let btn = document.getElementById("undisturbWatchBtn");
				if (btn) {
					btn.click();
				} else {
					console.log("沉浸式观看按钮丢失，自动进入沉浸式观看模式失败");
				}
			}
		}
	};

	var main = {
		others: function() {
			init.main();
		},
		appshare: function() {
			init.main();
			Timer = setInterval(function() {
				createBtn.share();
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		},
		home: function() {
			init.main();
			if (typeof jQuery !== "function") {
				let msg =
					"部分功能无法启动，可能的原因:\n(1)当前浏览器不支持jQuery，请使用主流浏览器并加载主流的脚本管理插件\n(2)当前远程jQuery库无法访问，请稍后再试";
				console.log(msg);
				alert(msg);
				return false;
			}
			Timer = setInterval(function() {
				var a = document.getElementsByClassName("_2NJWgK5p");
				var newBtn;
				if (a.length !== 0) {
					for (let i = 0; i < a.length; i++) {
						if (a[i].name !== "newBtn") {
							newBtn = createBtn.list(a[i], i);
							if (newBtn[1]) {
								a[i].insertBefore(newBtn[0], newBtn[1]);
							} else {
								a[i].appendChild(newBtn[0]);
							}
							a[i].name = "newBtn";
						}
					}
				}
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		},
		recommend: function() {
			init.main();
			if (typeof jQuery !== "function") {
				let msg =
					"部分功能无法启动，可能的原因:\n(1)当前浏览器不支持jQuery，请使用主流浏览器并加载主流的脚本管理插件\n(2)当前远程jQuery库无法访问，请稍后再试";
				console.log(msg);
				alert(msg);
				return false;
			}
			var BtnList, newBtnBox, presentObj, videoURL, btnObj;
			Timer = setInterval(function() {
				BtnList = document.getElementsByClassName("TvKp5rIf")[0];
				if (BtnList) {
					newBtnBox = BtnList.getElementsByClassName("newBtnDownload")[0];
					if (!newBtnBox) {
						createBtn.swiper.create(BtnList);
					} else {
						btnObj = newBtnBox.children[0];
						presentObj = document.getElementsByClassName(
							"swiper-slide _79rCAeWZ swiper-slide-active")[0];
						var videoID = presentObj.getElementsByClassName(
							"xgplayer-icon content-wrapper hasMarginRight")[0].href;
						videoID = videoID.split("?")[0].split("video/")[1].replace("/", "");
						if (videoID && btnObj.getAttribute("data-id") !== videoID) {
							createBtn.swiper.change(BtnList, videoID, presentObj);
						}
					}
				}
				createBtn.link();
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		},
		follow: function() {
			this.recommend();
		},
		hot: function() {
			this.home();
		},
		channel: function() {
			this.home();
		},
		detail: function() {
			init.main();
			Timer = setInterval(function() {
				var BtnList = document.getElementsByClassName("HF-f8Lg-")[0].children[0];
				if (BtnList) {
					if (BtnList.children[2]) {
						createBtn.video(BtnList);
					}
				}
				createBtn.link();
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		},
		search: function() {
			init.main();
			if (typeof jQuery !== "function") {
				var msg = "部分功能可能无法在此浏览器上使用\n桌面端建议使用edge浏览器，移动端建议使用kiwi浏览器";
				console.log(msg);
				alert(msg);
				return false;
			}
			Timer = setInterval(function() {
				var a = document.getElementsByClassName("d8d25680ae6956e5aa7807679ce66b7e-scss");
				var newBtn;
				if (a.length !== 0) {
					for (let i = 0; i < a.length; i++) {
						if (a[i].name !== "newBtn") {
							newBtn = createBtn.list(a[i], i);
							if (newBtn[1]) {
								a[i].insertBefore(newBtn[0], newBtn[1]);
							} else {
								a[i].appendChild(newBtn[0]);
							}
							a[i].name = "newBtn";
						}
					}
				}
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		},
		livehome: function() {
			init.main();
		},
		livedetail: function() {
			init.main();
			var flag = true;
			Timer = setInterval(function() {
				var beforeBtn = document.getElementsByClassName("VPz4-306")[0];
				if (beforeBtn) {
					if (!document.getElementById("undisturbWatchBtn")) {
						var undisturbWatchBtn = createBtn.live.undisturb();
						beforeBtn.parentElement.insertBefore(undisturbWatchBtn, beforeBtn);
						init.live(flag);
						flag = false;
					}
					if (!document.getElementById("newBtnDownload")) {
						var downloadBtn = createBtn.live.download();
						beforeBtn.parentElement.insertBefore(downloadBtn, beforeBtn);
					}
				}
				createBtn.live.share();
			}, 200);
			console.log("抖音视频下载器(" + Page + "页)启动,定时器(id:" + Timer + ")开启");
		},
		download: function() {
			init.main();
			var data = tools.parseUrl();
			console.log(data);
			if (data[1]) {
				var videoOBJ = document.getElementsByTagName('video')[0];
				videoOBJ.pause();
				var a = document.createElement("a");
				a.href = videoOBJ.children[0].src;
				console.log(videoOBJ.children[0].src);
				a.download = data[0] + ".mp4";
				console.log(a);
				a.click();
			}
		},
		match: function() {
			switch (currentPage) {
				case "others":
					this.others();
					break;
				case "appshare":
					this.appshare();
					break;
				case "home":
					this.home();
					break;
				case "recommend":
					this.recommend();
					break;
				case "follow":
					this.follow();
					break;
				case "hot":
					this.hot();
					break;
				case "channel":
					this.channel();
					break;
				case "detail":
					this.detail();
					break;
				case "search":
					this.search();
					break;
				case "livehome":
					this.livehome();
					break;
				case "livedetail":
					this.livedetail();
					break;
				case "download":
					this.download();
					break;
				default:
					console.log("当前页无匹配功能,启动默认功能(others页)");
					this.others();
			}
		},
		popup: function() {
			//普通弹窗，直接无脑屏蔽
			var ClassArray = ["login-guide-container", "athena-survey-widget",
				"athena-survey-widget  ltr desktop-normal theme-flgd   "
			];
			var HideNum = 0;
			var PopObj;
			for (let i = 0; i < ClassArray.length; i++) {
				PopObj = document.getElementsByClassName(ClassArray[i])[0];
				if (PopObj && PopObj.style.display !== "none") {
					PopObj.style.display = "none";
					HideNum += 1;
				}
			}
			//登录弹窗，不能无脑屏蔽，需要考虑情况		
			try {
				PopObj = document.getElementById("login-pannel").parentElement.parentElement;
			} catch (e) {
				PopObj = false;
			}
			if (loginPopupFlag === true) {
				if (PopObj && PopObj.style.display !== "none") {
					PopObj.style.display = "none";
					HideNum += 1;
				}
			} else {
				if (PopObj && PopObj.style.display === "none") {
					PopObj.style.display = "";
				}
				if (!PopObj && loginPopupFlag === "wait") {
					loginPopupFlag = true;
					console.log("用户取消登录或登录成功");
				}
			}
			//控制台输出相关信息
			if (HideNum > 0) {
				console.log(currentPage + "页检测到" + HideNum + "个非必要弹窗,已隐藏!");
			}
		},
		jump: function() {
			var currentUA = tools.checkUA();
			if (pastUA !== currentUA) {
				pastUA = currentUA;
				if (currentUA === "pc") {
					var currentHost = location.hostname;
					var currentPath = location.pathname;
					var newUrl = "";
					if (currentHost.search("douyin.com") !== -1) {
						if (currentPath.search("/share/video/") !== -1) {
							newUrl = "https://www.douyin.com" + currentPath.replace("/share", "");
						} else if (currentPath === "/home") {
							newUrl = "https://www.douyin.com";
						}
					}
					if (newUrl !== "") {
						var Res = confirm("点击确认跳转PC版页面");
						if (Res) {
							location.href = newUrl;
						} else {
							console.log("用户取消跳转PC版页面");
						}
					}
				}
			}
		},
		judge: function() {
			if (!/video|live/i.test(tools.identifySite("type")) || currentPage === "follow") {
				loginPopupFlag = false;
				return false;
			}
			if (loginTimer !== -1) {
				clearInterval(loginTimer);
				loginTimer = -1;
			}
			switch (set.get("loginPopup")) {
				case "hide":
					loginPopupFlag = true;
					break;
				case "display":
					loginPopupFlag = false;
					break;
				default:
					loginPopupFlag = true;
					loginTimer = setInterval(function() {
						init.login();
					}, 500);
					break;
			}
		}
	}

	var set = {
		baseData: {
			"video": {
				"fileName": "whole",
				"diyFileName": "",
				"download": "auto",
				"loginPopup": "display",
				"fetchType": "1"
			},
			"live": {
				"undisturbWatch": "manual",
				"hideList": {
					"searchBar": true,
					"liveCategory": true,
					"relativeLive": true,
					"buttomMessage": true,
					"chatWindow": false,
					"edgeTool": false
				},
				"loginPopup": "display",
				"download": "default",
				"shareUrl": "short",
				"fetchType": "1"
			}
		},
		baseOpt: {
			"video": {
				data: [{
					"name": "当前版本",
					"type": "text",
					"key": "version",
					"value": "v1.34"
				}, {
					"name": "视频文件名",
					"type": "choice",
					"key": "fileName",
					"value": [{
						"name": "完整(默认)",
						"key": "whole",
						"description": "文件自动重命名为：视频名@作者名.mp4"
					}, {
						"name": "仅视频名",
						"key": "videoName",
						"description": "文件自动重命名为：视频名.mp4"
					}, {
						"name": "视频ID",
						"key": "id",
						"description": "视频id为视频详情页地址后缀那一串数字。文件自动重命名为：id.mp4"
					}]
				}, {
					"name": "视频下载",
					"type": "choice",
					"key": "download",
					"value": [{
						"name": "自动下载",
						"key": "auto",
						"description": "脚本调用下载程序，并自动重命名"
					}, {
						"name": "手动下载",
						"key": "manual",
						"description": "需手动下载视频，且手动下载模式下，将关闭自动重命名。下载时需手动更改文件名"
					}]
				}, {
					"name": "视频解析",
					"type": "choice",
					"key": "fetchType",
					"value": [{
						"name": "快速解析",
						"key": "1",
						"description": "通过抖音已有的解析接口进行快速解析获取视频。此模式解析速度快，且资源占用小，对网络要求低，但是不保证解析得到的视频的质量情况"
					}, {
						"name": "高码率解析",
						"key": "2",
						"description": "通过自定义的解析方式尽可能的获取最高分辨率/码率的视频。由于所有解析过程都在本地进行，因此此模式资源占用很高，且如果网络不佳，加载速度会很慢。"
					}]
				}, {
					"name": "登录弹窗",
					"type": "choice",
					"key": "loginPopup",
					"value": [{
						"name": "自动管理",
						"key": "auto",
						"description": "自动识别场景，根据不同场合选择是否屏蔽登录弹窗"
					}, {
						"name": "直接屏蔽",
						"key": "hide",
						"description": "遇到登录弹窗，直接屏蔽"
					}, {
						"name": "不屏蔽",
						"key": "display",
						"description": "遇到登录弹窗，不进行任何操作"
					}]
				}, {
					"name": "刷新按钮",
					"type": "text",
					"key": "refreshDownload",
					"value": "<a style=\"text-decoration:none;\" href=\"javascript:alert('当前页不可用');\">点击重载链接</a>"
				}, {
					"name": "批量导出",
					"type": "text",
					"key": "massiveExport",
					"value": "<a style=\"text-decoration:none;\" href=\"javascript:alert('当前页不可用');\">点击导出地址</a>"
				}, {
					"name": "反馈建议",
					"type": "text",
					"key": "feedback",
					"value": "<a style='text-decoration:none;' href='https://greasyfork.org/zh-CN/scripts/431344/feedback' target='_blank'>点击前往反馈</a>"
				}, {
					"name": "更新日志",
					"type": "text",
					"key": "updateLog",
					"value": "<a style='text-decoration:none;' href='https://github.com/IcedWatermelonJuice/Douyin-Video-Downloader#更新日志' target='_blank'>点击前往查看</a>"
				}]
			},
			"live": {
				data: [{
					"name": "当前版本",
					"type": "text",
					"key": "version",
					"value": "v1.34"
				}, {
					"name": "沉浸观看",
					"type": "choice",
					"key": "undisturbWatch",
					"value": [{
						"name": "自动启动",
						"key": "auto",
						"description": "进入直播间后自动进入沉浸式观看模式，屏蔽不必要的内容"
					}, {
						"name": "手动启动",
						"key": "manual",
						"description": "需手动点击沉浸式观看按钮，从而屏蔽不必要的内容"
					}]
				}, {
					"name": "屏蔽列表",
					"type": "check",
					"key": "hideList",
					"value": [{
						"name": "顶部搜索",
						"key": "searchBar",
						"description": "位于页面顶部的抖音LOGO、搜索栏、登录图标等"
					}, {
						"name": "直播分类",
						"key": "liveCategory",
						"description": "位于页面顶部的直播分类导航栏"
					}, {
						"name": "相关直播",
						"key": "relativeLive",
						"description": "位于页面底部的相关直播模块"
					}, {
						"name": "底部信息",
						"key": "buttomMessage",
						"description": "位于页面底部的网站信息、相关链接等"
					}, {
						"name": "聊天窗口",
						"key": "chatWindow",
						"description": "位于直播窗口边上的聊天窗口。隐藏聊天窗口不影响直播窗口正常播放弹幕"
					}, {
						"name": "侧边工具",
						"key": "edgeTool",
						"description": "位于页面右下角的工具栏（包括脚本设置入口）"
					}]
				}, {
					"name": "登录弹窗",
					"type": "choice",
					"key": "loginPopup",
					"value": [{
						"name": "自动管理",
						"key": "auto",
						"description": "自动识别场景，根据不同场合选择是否屏蔽登录弹窗"
					}, {
						"name": "直接屏蔽",
						"key": "hide",
						"description": "遇到登录弹窗，直接屏蔽"
					}, {
						"name": "不屏蔽",
						"key": "display",
						"description": "遇到登录弹窗，不进行任何操作"
					}]
				}, {
					"name": "提取地址",
					"type": "choice",
					"key": "download",
					"value": [{
						"name": "默认地址",
						"key": "default",
						"description": "提取当前直播间画面采用的推流地址。一般情况下，抖音直播推流都为m3u8，少部分为flv。flv延迟一般比m3u8低一点点"
					}, {
						"name": "m3u8地址",
						"key": "m3u8",
						"description": "提取m3u8格式直播原画画质的推流地址。m3u8格式视频下载麻烦（需要专门下载器，如idm），播放方便（支持m3u8的播放器非常多），播放延迟稍高"
					}, {
						"name": "flv地址",
						"key": "flv",
						"description": "提取flv格式直播原画画质的推流地址。flv格式视频下载容易（可通过浏览器直接下载），播放比较麻烦（flv播放器比较少），播放延迟几乎为0"
					}]
				}, {
					"name": "分享链接",
					"type": "choice",
					"key": "shareUrl",
					"value": [{
						"name": "原链接",
						"key": "default",
						"description": "直接将直播间地址（长链接）导出到剪贴板"
					}, {
						"name": "短链接",
						"key": "short",
						"description": "将直播间地址通过第三方接口转为短链接再导出"
					}]
				}, {
					"name": "反馈建议",
					"type": "text",
					"key": "feedback",
					"value": "<a style='text-decoration:none;' href='https://greasyfork.org/zh-CN/scripts/431344/feedback' target='_blank'>点击前往反馈</a>"
				}, {
					"name": "更新日志",
					"type": "text",
					"key": "updateLog",
					"value": "<a style='text-decoration:none;' href='https://github.com/IcedWatermelonJuice/Douyin-Video-Downloader#更新日志' target='_blank'>点击前往查看</a>"
				}]
			}
		},
		data: {},
		opt: {},
		styleData: {
			"background": "var(--color-page-bg)",
			"border": "var(--color-navigation-bg)",
			"color": "var(--color-text-0-hover)",
			io: function(key, value) {
				if (value) {
					this[key] = value;
				} else {
					return this[key];
				}
			}
		},
		get: function(key) {
			if (key) {
				return this.data[key];
			} else {
				return this.data;
			}
		},
		edit: function(key, value) {
			this.data[key] = value;
			console.log(key + ":" + value);
		},
		save: function(data) {
			data = JSON.stringify(data);
			try {
				JSON.parse(data); //确保data是JSON字符串
			} catch (e) {
				return false;
			}
			localStorage.setItem("downloaderSettingData", data);
		},
		init: function(type) {
			if (!type) {
				type = tools.identifySite("type");
			}
			switch (type) {
				case "share":
					this.styleData.io("background", "grey");
					this.styleData.io("border", "grey");
					this.styleData.io("color", "black");
				case "video":
					this.data = tools.cloneJSON(this.baseData.video);
					this.opt = tools.cloneJSON(this.baseOpt.video);
					break;
				case "live":
					this.data = tools.cloneJSON(this.baseData.live);
					this.opt = tools.cloneJSON(this.baseOpt.live);
					break;
				case "download":
				default:
					this.data = null;
					this.opt = null;
					break;
			}
			if (!this.data || !this.opt) {
				return false;
			}
			var localData = localStorage.getItem("downloaderSettingData");
			var newData;
			if (localData) {
				localData = JSON.parse(localData);
				this.data = tools.extendJSON(set.get(), localData);
			} else {
				this.save(this.data);
			}
		},
		reset: function() {
			var backupData;
			if (/livehome|livedetail/i.test(currentPage)) {
				backupData = set.baseData.live;
			} else {
				backupData = set.baseData.video;
			}
			set.data = tools.cloneJSON(backupData);
			set.close();
			set.create();
		},
		apply: function() {
			var opts = document.getElementsByClassName("downloaderSettingPage-opt");
			var obj, key, value;
			for (let i = 0; i < opts.length; i++) {
				if (opts[i].getAttribute("opt-type") === "choice") {
					obj = opts[i].getElementsByTagName("select")[0];
					key = obj.parentElement.getAttribute("opt-key");
					value = false;
					for (let i = 0; i < obj.childElementCount; i++) {
						if (obj.value === obj.children[i].value) {
							value = obj.children[i].getAttribute("choice-key");
							break;
						}
					}
					if (key && value) {
						set.edit(key, value);
					}
				} else if (opts[i].getAttribute("opt-type") === "check") {
					obj = opts[i].getElementsByTagName("form")[0];
					key = obj.parentElement.getAttribute("opt-key");
					obj = obj.getElementsByTagName("input");
					value = set.get(key);
					for (let i = 0; i < obj.length; i++) {
						value[obj[i].value] = obj[i].checked;
					}
					if (key && value) {
						set.edit(key, value);
					}
				}
				set.save(set.get());
			}
			var msg = "设置已保存\n点击确定刷新页面以应用所有设置\n点击取消暂不刷新页面（你也可以点击重载链接完成对下载相关设置的应用）";
			if (confirm(msg)) {
				location.reload();
			}
		},
		close: function() {
			document.getElementById("downloaderSettingPage").remove();
		},
		create: function() {
			if (!this.data || !this.opt) {
				return false;
			}
			var page = document.createElement("div");
			var box = document.createElement("div");
			page.id = "downloaderSettingPage";
			var bodyWidth = document.body.clientWidth;
			var bodyHeight = document.body.clientHeight;
			var pageWidth = bodyWidth - 40;
			var pageHeight = bodyHeight - 40;
			pageWidth = 360 < pageWidth ? 360 : pageWidth;
			pageHeight = 360 < pageHeight ? 360 : pageHeight;
			var pageLeft = (bodyWidth - pageWidth) / 2;
			var pageTop = (bodyHeight - pageHeight) / 2;
			page.style = "width:" + pageWidth + "px;height:" + pageHeight +
				"px;position:fixed;left:" +
				pageLeft + "px;top:" + pageTop +
				"px;background:" + this.styleData.io("background") +
				";border-radius:20px;font-size:14px;color:" + this.styleData.io("color") +
				";border:3px solid " + this.styleData.io("border") + ";z-index:999;";
			box.style =
				"width:calc(100% - 40px);height:calc(100% - 40px);margin:20px;";
			box.appendChild(set.createHead());
			box.appendChild(set.createBody());
			box.appendChild(set.createFoot());
			page.appendChild(box);
			this.addEvent(page);
			document.body.appendChild(page);
		},
		createHead: function() {
			var head = document.createElement("div");
			head.id = "downloaderSettingPage-head";
			head.style =
				"width:100%;height:30px;margin-bottom:20px;text-align:center;font-size:20px";
			head.innerText = "抖音视频下载器脚本设置";
			return head;
		},
		createBody: function() {
			var body = document.createElement("div");
			body.id = "downloaderSettingPage-body";
			body.style = "width:100%;height:calc(100% - 100px);overflow:auto auto;";
			var data = this.opt.data;
			for (let i in data) {
				body.appendChild(this.createOpt(data[i]));
			}
			var msg = document.createElement("div");
			msg.innerHTML =
				"更多功能，请关注后续版本！<br>欢迎大家在“<a href='https://greasyfork.org/zh-CN/scripts/431344' target='_blank' style='color:red;text-decoration:none'>油叉</a>”或“<a href='https://github.com/IcedWatermelonJuice/Douyin-Video-Downloader' target='_blank' style='color:red;text-decoration:none'>gayhub</a>”上反馈建议。";
			msg.style = "color:red;";
			body.appendChild(msg);
			return body;
		},
		createFoot: function() {
			var foot = document.createElement("div");
			foot.id = "downloaderSettingPage-foot";
			foot.style = "width:100%;height:30px;margin-top:20px;";
			foot.appendChild(this.createBtn("reset"));
			foot.appendChild(this.createBtn("apply"));
			foot.appendChild(this.createBtn("close"));
			return foot;
		},
		createOpt: function(data) {
			var opt = document.createElement("div");
			var title = document.createElement("div");
			var content = document.createElement("div");
			var aTemp;
			opt.setAttribute("class", "downloaderSettingPage-opt");
			opt.setAttribute("opt-type", data.type);
			title.style = "width:100px;margin:0 8px 8px 0;display:inline-block";
			title.innerText = data.name;
			content.style = "width:100px;margin:0 0 8px 0;display:inline-block;";
			if (data.type === "text") {
				content.setAttribute("opt-key", data.key);
				content.innerHTML = data.value;
				aTemp = content.getElementsByTagName("a");
				for (let i = 0; i < aTemp.length; i++) {
					aTemp[i].style.color = this.styleData.io("color");
				}
			} else if (data.type === "choice") {
				content.setAttribute("opt-key", data.key);
				var choice = data.value;
				var choiceValue = set.get(data.key);
				var choiceHtml =
					"<select style='width: 100%;color: " + this.styleData.io("color") + ";border-color: " +
					this.styleData.io("color") + ";background: " + this.styleData.io("background") + ";'>";
				for (let i in choice) {
					choiceHtml += "<option choice-key='" + choice[i].key + "'";
					if (choiceValue === choice[i].key) {
						choiceHtml += " selected='selected'";
					}
					choiceHtml += " title='" + choice[i].description + "'>" + choice[i].name +
						"</option>";
				}
				choiceHtml += "</select>";
				content.innerHTML = choiceHtml;
			} else if (data.type === "check") {
				content.style.width = "calc(100% - 120px)";
				content.style.display = "inline-flex";
				content.setAttribute("opt-key", data.key);
				var check = data.value;
				var checkValue = set.get(data.key);
				var checkHtml =
					"<form style='width: 100%;color: " + this.styleData.io("color") + ";'>";
				for (let i in check) {
					checkHtml += "<div style='display:inline-block;margin-right:5px;' title='" + check[i]
						.description + "'><input type='checkbox' value='" + check[i].key + "'";
					if (checkValue[check[i].key]) {
						checkHtml += " checked='checked'";
					}
					checkHtml += "><span>" + check[i].name + "</span></div>";
				}
				checkHtml += "</form>";
				content.innerHTML = checkHtml;
			} else {
				return null;
			}
			opt.appendChild(title);
			opt.appendChild(content);
			return opt;
		},
		createBtn: function(type) {
			var text, fn, btn;
			switch (type) {
				case "reset":
					text = "重置数据";
					fn = set.reset;
					break;
				case "apply":
					text = "保存并应用";
					fn = set.apply;
					break;
				case "close":
					text = "关闭设置";
					fn = set.close;
					break;
				default:
					break;
			}
			if (text && fn) {
				btn = document.createElement("span");
				btn.id = "downloaderSettingPage-btn-" + type;
				btn.setAttribute("class", "downloaderSettingPage-btn");
				var box = document.createElement("div");
				box.style =
					"margin-right: 12px; padding: 0px 10px; cursor: pointer; border: thin solid " + this
					.styleData.io("color") + "; border-radius: 10px;display:inline-block";
				box.innerText = text;
				box.onclick = fn;
				btn.appendChild(box);
			}
			return btn;
		},
		addEvent: function(page) {
			//导出
			var exportBtn = page.querySelectorAll("div[opt-key=massiveExport]")[0];
			if (exportBtn) {
				if (/home|hot|channel|search/i.test(currentPage)) {
					exportBtn = exportBtn.getElementsByTagName("a")[0];
					exportBtn.href = "javascript:void(0)";
					exportBtn.addEventListener("click", function() {
						let exportData = "";
						let allDownloadBtn = document.getElementsByClassName("downloadBtn-in-list");
						for (let i = 0; i < allDownloadBtn.length; i++) {
							let data = allDownloadBtn[i].getAttribute("massive-download-data");
							if (data) {
								exportData += data + ",";
							}
						}
						tools.toClipboard(exportData, "视频地址已批量导出到剪贴板");
					})
				} else {
					exportBtn.parentElement.style.display = "none";
				}
			}
			//刷新
			var refreshBtn = page.querySelectorAll("div[opt-key=refreshDownload]")[0];
			if (refreshBtn) {
				refreshBtn = refreshBtn.getElementsByTagName("a")[0];
				refreshBtn.href = "javascript:void(0)";
				refreshBtn.addEventListener("click", function() {
					var downloadBtn = document.querySelector("#NewDownloadBtn");
					if (downloadBtn) {
						downloadBtn.remove();
					}
					downloadBtn = document.querySelector("#newBtnDownload");
					if (downloadBtn) {
						downloadBtn.remove();
					}
					downloadBtn = document.querySelectorAll(".newBtnDownload");
					if (downloadBtn.length > 0) {
						for (let i = 0; i < downloadBtn.length; i++) {
							downloadBtn[i].remove();
						}
					}
					downloadBtn = document.querySelectorAll(".downloadBtn-in-list");
					if (downloadBtn.length > 0) {
						for (let i = 0; i < downloadBtn.length; i++) {
							let par = downloadBtn[i].parentElement;
							downloadBtn[i].remove();
							par.name = "";
						}
					}
					alert("正在刷新下载按钮，请等待一会");
				})
			}
			//解析
			var parseBtn = page.querySelectorAll("div[opt-key=fetchType]")[0];
			if (parseBtn && !/home|recommend|follow|hot|channel|search/i.test(currentPage)) {
				parseBtn.parentElement.style.display = "none";
			}
		}
	}

	var Timer = -1;
	var loginTimer = -1;
	var Page = "others";
	var currentPage = "others";
	var pastUA = "";
	var loginPopupFlag = false;
	var checkTimer = setInterval(function() {
		currentPage = tools.identifySite();
		main.jump();
		main.popup();
		if (Page !== currentPage) {
			if (Page !== "others") {
				console.log("页面切换(上一页为" + Page + "页)");
			}
			main.match();
		}
	}, 200);
	console.log("抖音视频下载器(URL监听与弹窗检测)启动,定时器(id:" + checkTimer + ")开启");
})();

		
	//最后统一调用
	try{
		(new superVideoHelper(newOriginalInterfaceList, playerNodes)).start();
	}catch(e){
		console.log("全网VIP解析：error："+e);
	}
	
	try{
		(new abroadVideoHelper()).start();
	}catch(e){
		console.log("国外视频解析：error："+e);
	}
	
	try{
		(new queryCoupon()).start();
	}catch(e){
		console.log("优惠券查询：error："+e);
	}
	
	try{
		(new superMusicHelper()).start();
	}catch(e){
		console.log("全网音乐下载：error："+e);
	}
	
	try{
		new huahuacat_bilibili(commonFunctionObject).start();
	}catch(e){
		console.log("B站视频下载：error："+e);
	}
	
	try{
		new wangpanSearchEnginesHelper(commonFunctionObject).start();
	}catch(e){
		console.log("搜索引擎破解：error："+e);
	}
})();