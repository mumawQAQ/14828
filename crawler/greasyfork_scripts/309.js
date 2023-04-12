// ==UserScript==
// @name   一，网站屏蔽，进入必应首页，设定屏蔽/解除屏蔽网站;二，科学上网，SS/SSR/v2ray分享,不需要注册，直连facebook/google,适合工作和学习需要的人，尽量别看视频网站，流量不够。
// @name:en      SiteBlocker，block site,block website
// @name:zh-TW   网站屏蔽，设定你想屏蔽的网站，如知乎、微博、youtube等等，暂时屏蔽他们，让工作学习不分心。（可随时解封）
// @name:zh-HK   网站屏蔽，设定你想屏蔽的网站，如知乎、微博、youtube等等，暂时屏蔽他们，让工作学习不分心。（可随时解封）
// @namespace    http://tampermonkey.net/
// @version      1.0.80
// @description  功能一：网站屏蔽器，设定你想屏蔽的网站；功能二：免费SS/SSR/v2ray分享，无需注册，直连google/facebook,个人自用分享，速度快且稳定；真心希望用于娱乐的同学，将流量留给学习和工作的同学吧。以目前的盗卖、盗链现状，以后这个节点可能会停止分享了。正常工作学习的同学，估计根本抢不到流量，全被盗卖、盗链的人抢去了。
// @description:en  Super website blocker, you can block the websites you don't want to go according to your needs. When you enter the blocked website, you will jump to the redirected website (default: bing.com) A setting entry is inserted in bing.com, and you can change the website blocking setting at any time.
// @description:zh-TW  功能一：网站屏蔽器，设定你想屏蔽的网站；功能二：免费SS/SSR分享，无需注册，直连google/facebook,个人自用分享，速度快且稳定；
// @description:zh-HK  功能一：网站屏蔽器，设定你想屏蔽的网站；功能二：免费SS/SSR分享，无需注册，直连google/facebook,个人自用分享，速度快且稳定；
// @author       桃源隐叟
// @match        *
// @match        *://*
// @match        *://*/*
// @require https://greasyfork.org/scripts/438655-qrcode/code/qrcode.js?version=1009281
// @grant GM_setValue
// @grant GM_getValue
// @run-at document-body
// @license MIT
// @antifeature ads We show you ads


// ==/UserScript==
(function() {
    'use strict';

    // Your code here...
    var serPort="32636。尽量把流量留给工作和学习需要的人吧，做人有点底线，别盗卖、盗链。";
    var langSet;
    var localization={
        zh:{
            settingBtn:"打开设置",
            title:"网站屏蔽器",
            description:"一直屏蔽或者按定时安排屏蔽,被屏蔽的网站，打开后，会跳转到重定向网站，如果没有设置重定向网站，则默认跳转到bing.com",
            inputBlockTip:"输入屏蔽的网址 : ",
            blockPlaceHolder:"输入网址,一般www后面的（例如：baidu.com)",
            blockBtn:"添加",
            inputRelocateTip:"输入重定向的网址 : ",
            relocatePlaceHolder:"请输入完整网址（例如：https://cn.bing.com)",
            relocateBtn:"设置",
            relocateDefault:"  默认https://cn.bing.com",
            relocateCurrent:"--当前网址：",
            relocateErrorTip:"(网址不全会错误,所以自动重置为默认值）",
            planSelectTip:"输入定时屏蔽设定 ： ",
            checkPlanTip:"启动定时屏蔽 (不勾选则默认一直屏蔽）",
            monday:"星期一",
            tuesday:"星期二",
            wednesday:"星期三",
            thursday:"星期四",
            friday:"星期五",
            saturday:"星期六",
            sunday:"星期日",
            inputHourTip:"请输入时间 ： ",
            blockListTip:"已屏蔽的站点 &nbsp;&nbsp;&nbsp;&nbsp; ",
            clearBtn:"清空屏蔽站点",
            whitelistTip:"白名单(即勾选后，除下面列表中网站，其他网站都不能访问)",
            deleteUrlBtn:"删除"
        },
        en:{
            settingBtn:"setting",
            title:"Website blocker",
            description:"Block all the time or according to the schedule. After opening the blocked website, it will jump to the redirected website. If the redirected website is not set, it will jump to by default：bing.com",
            inputBlockTip:"Enter the block URL : ",
            blockPlaceHolder:"Enter the web address, (for example: Baidu. Com)",
            blockBtn:"add",
            inputRelocateTip:"Enter URL for redirection : ",
            relocatePlaceHolder:"Please enter the full website (for example: https://cn.bing.com)",
            relocateBtn:"set",
            relocateDefault:"  default:https://cn.bing.com",
            relocateCurrent:"--current：",
            relocateErrorTip:"(Web address error, so reset to default value automatically）",
            planSelectTip:"input schedule ： ",
            checkPlanTip:"Start schedule(if unchecked, always block)",
            monday:"monday",
            tuesday:"tuesday",
            wednesday:"wednesday",
            thursday:"thursday",
            friday:"friday",
            saturday:"saturday",
            sunday:"sunday",
            inputHourTip:"Please enter hours ： ",
            blockListTip:"Blocked Site List &nbsp;&nbsp;&nbsp;&nbsp; ",
            clearBtn:"clear list",
            whitelistTip:"White list(i.e. if checked, all websites except those listed below cannot be accessed)",
            deleteUrlBtn:"delete"
        }
    }

    if(navigator.language.toLowerCase().includes("zh")){
        langSet=localization.zh;
    }else{
        langSet=localization.en;
    }

    var injectHtml={
        trigger:`<p class="triggerBtn" style="position:fixed;top:100px;right:20px;z-index:1000"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg></p>`,
        settingPage:`<style>
        #setting-panel{
            width:${window.screen.width}px;
            height:${window.screen.height}px;
            top:0px;
            left:0px;
            background-color:#fafafa;
            position:fixed;
            z-index:1001;

        }
        .setting-wrapper{
            margin-left:30%;
        }
        .header_main_title{
            font-size:20px;
            margin-bottom: 8px;
        }

        .header_main_subTitle{
            font-size: 14px;
        }

        .close-btn{
                width: 30px;
                height: 30px;
             float: right;
             margin: 5px;
        }

        .intro{
            border-bottom:5px solid #eee;

        }

        .input-area{
            border-bottom:5px solid #eee;
        }

        .list-area{
            border-bottom:5px solid #eee;
        }

        textarea{
            width:380px;
            margin:10px 0px 5px 10px;
            height: 22px;
            vertical-align: middle;

        }

        .blocksite-url button{
            vertical-align: middle;
            margin:10px 0px 5px 10px;
        }

        .weekday-div{
            margin: 10px 10px 10px 20px;
            border-bottom: 2px solid #ddd;
            padding: 2px 10px;

        }

        .daytime-div{
            margin: 10px 10px 10px 20px;
            padding: 2px 10px;

        }

        .whitelist-div{
            float:right;
        }

        .list-area{
            margin:10px 0px;
        }

        .list-header{
            padding-bottom: 10px;
            border-bottom: 2px solid #bbb;
        }

        .list-body{
            margin: 10px 10px 10px 20px;

            padding-bottom: 10px;

        }

        .list-item{
            display:flex;
            justify-content:space-between;
            border-bottom: 2px solid #ddd;
            padding:3px 0px;
        }

        .ss-info{
            position:fixed;
            top:50px;
            left:20px;
            width:350px;
            border:2px solid #eee;
            border-radius:5px;
            padding:10px;
            background-color:#fcfcfc;
            box-shadow: 1px 1px 1px #eee;
            font-size:12px;
        }

        .gongzhonghao{
            position:fixed;
            bottom:20px;
            right:20px;
        }

        .gongzhonghao img{
            width:80px;
            height:80px;
        }

    </style>


    <div id="setting-panel" style="display:none;" >
        <div class="ss-info">
            <b>SS/SSR/v2ray分享</b> <br>
            大家尽量别看youtube等视频网站，流量不够的。
            <br>
            <br>
            端口：${serPort} <br>
            密码：Kv4kg7ojpS <br>
<br>
            V2RAY Port ：${serPort}<br>
V2RAY UUID：e8d5a966-8093-4d4e-8977-0baca9c8ab55<br>
V2RAY Protocol：VMess<br>
V2RAY Transport：tcp<br>
V2RAY Encryption：auto/aes-128-gcm/chacha20-poly1305<br>
V2RAY AlterId：8<br>
V2RAY Camouflage：None<br><br>
            端口和协议列表：
            c11s1.jamjams.net | aes-256-gcm<br>
            c11s2.jamjams.net | aes-256-gcm<br>
            c11s3.jamjams.net | v2ray<br>
            c11s4.jamjams.net | v2ray<br>
            c11s5.jamjams.net | v2ray<br>
            c11s801.jamjams.net | v2ray freedom*<br>
            <br>
            <p>点击步骤：随便选一个商品->跳到领券页面->不购买直接点上面的大图片（点领券就要登录，太麻烦）->跳到商品页面
只有跳到商品页面，才算一个成功的点击，麻烦大家帮我点击一下。谢谢了。</p>
            <p>支持作者--<a style="color:black;text-decoration:underline;" href="https://ai.taobao.com/search/index.htm?key=%E4%BC%9A%E5%91%98&pid=mm_373610104_574450319_109063100253&sort=price%3Aasc&pnum=0" target="_blank"><b>爱淘宝-作者专页</b></a></p><br>
            <p>自己购买节点--<a style="color:black;text-decoration:underline;" href="https://justmysocks2.net/members/aff.php?aff=6889" target="_blank">节点地址</a></p>
            <p>最低12块每月--<a style="color:black;text-decoration:underline;" href="https://my.v2b.world/index.php#/register?code=De3ZiT7Y" target="_blank">节点地址</a></p>

        </div>

        <div class="gongzhonghao">
            <p style="text-align:center;">为防走丢</p>
            <div id="qrcode" style="margin:5px;"></div>
        </div>

        <button class="close-btn">X</button>
        <div class="setting-wrapper">
            <div class="intro">
                <h2 class="header_main_title">${langSet.title}</h2>
                <h3 class="header_main_subTitle">${langSet.description}</h3>
            </div>
            <div class="input-area">
                <div class="blocksite-url">
                    <span>${langSet.inputBlockTip}</span><textarea rows="1" placeholder="${langSet.blockPlaceHolder}" class="ta-blocksite-url"></textarea>
                    <button class="btn-blocksite-url">${langSet.blockBtn}</button>
                </div>

                <div>
                    <span>${langSet.inputRelocateTip}
                    </span><textarea rows="1" placeholder="${langSet.relocatePlaceHolder}" class="ta-relocate-url"></textarea><button class="btn-relocate-url">${langSet.relocateBtn}</button><span>  默认https://cn.bing.com</span>

                </div>

                <div>
                    <span>${langSet.planSelectTip}</span><input type="checkbox" name="turnon" value="off" id="plan"><label for="plan">${langSet.checkPlanTip}</label>
                    <div>
                        <div class="weekday-div">
                            <input type="checkbox" name="weekday" value="mon" id="mon" checked><label for="mon">${langSet.monday} </label>
                            <input type="checkbox" name="weekday" value="tue" id="tue" checked><label for="tue">${langSet.tuesday} </label>
                            <input type="checkbox" name="weekday" value="wen" id="wen" checked><label for="wen">${langSet.wednesday} </label>
                            <input type="checkbox" name="weekday" value="thu" id="thu" checked><label for="thu">${langSet.thursday} </label>
                            <input type="checkbox" name="weekday" value="fri" id="fri" checked><label for="fri">${langSet.friday} </label>
                            <input type="checkbox" name="weekday" value="sat" id="sat"><label for="sat">${langSet.saturday} </label>
                            <input type="checkbox" name="weekday" value="sun" id="sun"><label for="sun">${langSet.sunday} </label>
                        </div>
                        <div class="daytime-div">
                            ${langSet.inputHourTip}<input type="number" name="hourrange" min="0" max="23" placeholder="0" value="9">-<input type="number" name="hourrange" min="0" max="23" placeholder="23" value="18">
                        </div>
                    </div>
                </div>
            </div>

            <div class="list-area" >
                <span></span>
                <div>
                    <div class="list-header">
                        <span>${langSet.blockListTip}</span><button class="btn-clear-blocksite">${langSet.clearBtn}</button>
                        <div class="whitelist-div">
                            <input type="checkbox" name="whitelist" value="off" id="whitelist"><label for="whitelist">${langSet.whitelistTip}</label>
                        </div>
                    </div>
                    <div class="list-body">
                    </div>

                </div>
            </div>
        </div>
    </div>`,
    blockListItem:`<div class="list-item">
        <span class="item-url"></span>
        <span><button class="item-delete-btn">删除</button></span>
        </div>
    `
    }

    main();

    function main(){
        if (window.location.href.includes("bing.com")
            && !window.location.href.includes("q=")
            && (window.frames.length == parent.frames.length)
            || (window.location.href.includes("www.baidu.com") && !window.location.href.includes("=")&& (window.frames.length == parent.frames.length))
        ) {
            //console.log(window.location.href);
            document.body.insertAdjacentHTML("afterbegin",injectHtml.trigger);
            document.body.insertAdjacentHTML("afterbegin",injectHtml.settingPage);
            document.getElementsByClassName("triggerBtn")[0].addEventListener("click",btn_toggle);
            document.getElementsByClassName("close-btn")[0].addEventListener("click",handlerBtnClose);
            document.getElementsByClassName("btn-blocksite-url")[0].addEventListener("click",handlerAddBlockSite);
            document.getElementsByClassName("ta-blocksite-url")[0].addEventListener("keypress",keypressWrapper);
            document.getElementsByClassName("btn-clear-blocksite")[0].addEventListener("click",handlerClearBlocksite);


            initBlockSiteStr();

            initRelocateUrl();

            //turnon process
            initTurnon();

            initWeekdayCbs();

            initHourRange();

            initWhiteList();
            new QRCode(document.getElementById("qrcode"), "http://weixin.qq.com/r/sEzYwPbERas6rbKj9xmi");
            //blockByTimePlan();
        }else{
            blockByTimePlan();
        }
    }

    function initBlockSiteStr(){
        var blockSiteStr=GM_getValue("blockSiteStr");
        if(blockSiteStr==undefined){
            GM_setValue("blockSiteStr","");
        }else{
            if(blockSiteStr!="")generateBlockSiteList(blockSiteStr);

        }
    }

    function initRelocateUrl(){
        document.getElementsByClassName("ta-relocate-url")[0].addEventListener("keypress",keypressWrapper);
        document.getElementsByClassName("btn-relocate-url")[0].addEventListener("click",setRelocateUrl);

        var relocateUrl=GM_getValue("relocateUrl");
        if(relocateUrl==undefined){
            GM_setValue("relocateUrl","");
            relocateUrl="";
        }

        if(!relocateUrl.includes("https") && !relocateUrl.includes("http"))relocateUrl="https://cn.bing.com";
        document.getElementsByClassName("ta-relocate-url")[0].nextSibling.nextSibling.innerText+=`${langSet.relocateCurrent}`+relocateUrl+`${langSet.relocateErrorTip}`;
    }

    function setRelocateUrl(){
        var relocateUrl=document.getElementsByClassName("ta-relocate-url")[0].value;
        if(!relocateUrl.includes("https") && !relocateUrl.includes("http"))relocateUrl="https://cn.bing.com";
        document.getElementsByClassName("ta-relocate-url")[0].nextSibling.nextSibling.innerText=`${langSet.relocateCurrent}`+relocateUrl+`${langSet.relocateErrorTip}`;
        GM_setValue("relocateUrl",relocateUrl);
    }

    function initWhiteList(){
        var isWhiteListOn=GM_getValue("whitelist");
        if(isWhiteListOn==undefined){
            GM_setValue("whitelist",document.getElementsByName("whitelist")[0].checked);
        }else{
            document.getElementsByName("whitelist")[0].checked=isWhiteListOn;
        }

        document.getElementsByName("whitelist")[0].onclick=handlerWhiteListCb;
    }

    function initHourRange(){
        var hourRange=GM_getValue("hourRange");
        var inputHourRange=document.getElementsByName("hourrange");
        if(hourRange==undefined){
            hourRange=inputHourRange[0].value+","+inputHourRange[1].value;
            GM_setValue("hourRange",hourRange);
        }else{
            var hourRangeArr=hourRange.split(",");
            inputHourRange[0].value=hourRangeArr[0];
            inputHourRange[1].value=hourRangeArr[1];
        }

        inputHourRange[0].onchange=handlerHourChange;
        inputHourRange[1].onchange=handlerHourChange;
    }

    function initTurnon(){
        var isTurnon=GM_getValue("turnon");
        if(isTurnon==undefined){
            GM_setValue("turnon",document.getElementsByName("turnon")[0].checked);
        }else{
            document.getElementsByName("turnon")[0].checked=isTurnon;
        }

        document.getElementsByName("turnon")[0].onclick=handlerTurnonCheckbox;
    }

    function initWeekdayCbs(){
        var weekdayCbs=document.getElementsByName("weekday");

        for(let i=0;i<weekdayCbs.length;i++){
            var isWeekdayOn=GM_getValue(weekdayCbs[i].value);
            if(isWeekdayOn==undefined){
                GM_setValue(weekdayCbs[i].value,weekdayCbs[i].checked);
            }else{
                weekdayCbs[i].checked=isWeekdayOn;
            }

            weekdayCbs[i].onclick=handlerWeekdayCb;
        }

    }

    //console.log(GM_getValue("blockSiteStr"));
    //console.log(GM_getValue("relocateUrl"));

    function handlerWhiteListCb(){
        GM_setValue("whitelist",document.getElementsByName("whitelist")[0].checked);
        //console.log(GM_getValue("whitelist"));
    }

    function handlerHourChange(){
        var inputHourRange=document.getElementsByName("hourrange");
        var hourRange=inputHourRange[0].value+","+inputHourRange[1].value;
        GM_setValue("hourRange",hourRange);
        //console.log(GM_getValue("hourRange"));
    }

    function handlerTurnonCheckbox(){
        GM_setValue("turnon",document.getElementsByName("turnon")[0].checked);
       //console.log(GM_getValue("turnon"));
    }

    function handlerWeekdayCb(e){
        GM_setValue(e.target.value,e.target.checked);
        //console.log(e.target.value);
        //console.log(GM_getValue(e.target.value));
    }



    function btn_toggle(){
        //console.log(e);
        if(document.getElementById('setting-panel').style.display=="none"){
            try{
                if(document.getElementsByClassName("b_searchbox")[0])document.getElementsByClassName("b_searchbox")[0].disabled=true;
            document.getElementById('setting-panel').style.display="block";
            }catch{}

        }else{
                try{

            document.getElementById('setting-panel').style.display="none";
            if(document.getElementsByClassName("b_searchbox")[0])document.getElementsByClassName("b_searchbox")[0].disabled=false;
        }catch{}
        }
    }

    function handlerBtnClose(){
        document.getElementById('setting-panel').style.display="none";
        document.getElementsByClassName("b_searchbox")[0].disabled=false;
    }

    function keypressWrapper(e){
        //console.log(e);
        //console.log(e.keyCode);
        if(e.keyCode==13){
            //console.log(e);
            event.preventDefault();
            if(e.target==document.getElementsByClassName("ta-blocksite-url")[0]){
                handlerAddBlockSite();
            }else if(e.target==document.getElementsByClassName("ta-relocate-url")[0]){
                setRelocateUrl();
            }else{

           }
        }
    }
    function handlerAddBlockSite(){
        //console.log(e);

        var newBlockSite=document.getElementsByClassName("ta-blocksite-url")[0].value;
        //console.log(newBlockSite);
        if(newBlockSite!=""){
            var blockSiteStr=GM_getValue("blockSiteStr");
            if(blockSiteStr.includes(newBlockSite)){
                alert("网址已经存在！");
            }else{
                if(blockSiteStr!=""){
                    blockSiteStr+=","+newBlockSite;
                }else{
                    blockSiteStr=newBlockSite;
                }
            }


            GM_setValue("blockSiteStr", blockSiteStr);
            //console.log(GM_getValue("blockSiteStr"));
            generateBlockSiteList(blockSiteStr);
        }
    }

    function handlerClearBlocksite(){
        GM_setValue("blockSiteStr",'');
        //console.log(GM_getValue("blockSiteStr"));
        document.getElementsByClassName("list-body")[0].innerHTML="";
    }

    function handlerDeteleUrlBtn(e){
        var blockSiteStr=GM_getValue("blockSiteStr");
        var currentList="";
        var currentArr=blockSiteStr.split(",");
        var currentUrl=e.target.parentElement.parentElement.firstElementChild.innerText;


        var deleteLastOne=false;
        for(let i=0;i<currentArr.length;i++){
            if(currentArr[i]==currentUrl){
                if(i==currentArr.length-1){
                    deleteLastOne=true;
                }
            }else{
                if(i==currentArr.length-1){
                    currentList+=currentArr[i];
                }else{
                    currentList+=currentArr[i]+",";
                }
            }
        }

        if(deleteLastOne)currentList=currentList.substring(0,currentList.length-1);
        //console.log(currentUrl);
        //console.log(GM_getValue("blockSiteStr"));
        GM_setValue("blockSiteStr",currentList);
        //console.log(GM_getValue("blockSiteStr"));
        generateBlockSiteList(currentList);
    }

    function generateBlockSiteList(blockSiteStr){
        var blockSiteArray=blockSiteStr.split(",");
        document.getElementsByClassName("list-body")[0].innerHTML="";

        if(blockSiteArray=="")return;
        for(let i=0;i<blockSiteArray.length;i++){
            var blockListItem=`
                <div class="list-item">
                <span class="item-url-${i}"></span>
                <span><button class="item-delete-btn-${i}">${langSet.deleteUrlBtn}</button></span>
                </div>`;

            document.getElementsByClassName("list-body")[0].insertAdjacentHTML("afterbegin",blockListItem);

            document.getElementsByClassName(`item-url-${i}`)[0].innerHTML=blockSiteArray[i];
            document.getElementsByClassName(`item-delete-btn-${i}`)[0].onclick=handlerDeteleUrlBtn;
        }

    }


    function blockByTimePlan(){
        //console.log("blockbytimeplan run");
        var dateObj=new Date();
        var weekday=dateObj.getDay();
        var currentHour=parseInt(dateObj.getHours());

        var hourRangeArr=GM_getValue("hourRange").split(",");
        var hourRangeB=parseInt(hourRangeArr[0]);
        var hourRangeT=parseInt(hourRangeArr[1]);


        if(GM_getValue("turnon")){
            if(GM_getValue(getDayEngName(weekday))){
                //console.log(getDayEngName(weekday));
                //console.log(GM_getValue(getDayEngName(weekday)));
                if(currentHour>=hourRangeB && currentHour<=hourRangeT){
                    blockSiteAction();
                }
            }
        }else{
            blockSiteAction();
        }
    }

    function blockSiteAction(){
        //console.log("block site action run");
        var blockSiteStr=GM_getValue("blockSiteStr");
        var relocateUrl=GM_getValue("relocateUrl");
        //console.log(blockSiteStr);
        //console.log(relocateUrl);
        relocateUrl=(relocateUrl==undefined)?"https://cn.bing.com":relocateUrl;
        if(!relocateUrl.includes("https") && !relocateUrl.includes("http")){
            relocateUrl="https://cn.bing.com";
        }

        if(blockSiteStr!=""){
            //console.log(blockSiteStr);
            var blockSiteArray=blockSiteStr.split(",");

            var whitePass=false;
            for(let i=0;i<blockSiteArray.length;i++){
                if(GM_getValue("whitelist")){
                    if(window.location.href.includes(blockSiteArray[i])){
                        whitePass=true;
                        //alert("你在网站屏蔽器中屏蔽了此网站，如需访问请前往bing.com解锁此网站。");
                        break;
                    }
                } else{
                    if(window.location.href.includes(blockSiteArray[i])){

                        window.location.href=relocateUrl;
                        //alert("你在网站屏蔽器中屏蔽了此网站，如需访问请前往bing.com解锁此网站。");
                        break;
                    }
                }

            }

            if(GM_getValue("whitelist") &&(whitePass==false)){
                window.location.href=relocateUrl;
            }
        }
    }

    function getDayEngName(day){
        var engName;
        switch(day){
            case 0:
                engName="sun";
                break;
            case 1:
                engName="mon";
                break;
            case 2:
                engName="tue";
                break;
            case 3:
                engName="wen";
                break;
            case 4:
                engName="thu";
                break;
            case 5:
                engName="fri";
                break;
            case 6:
                engName="sat";
                break;
        }

        return engName;
    }

        if (!(navigator.language.toLowerCase().includes("zh"))) {
                    try {
            document.querySelector(".setting-wrapper").style.display = "block";
            document.querySelector(".ss-info").style.display = "none";
        }
        catch { }
        }
})();