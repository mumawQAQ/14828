// ==UserScript==
// @name      Download Youtube videos and subtitles
// @namespace  https://www.findhao.net
// @version    0.5.1
// @description  获取youtube视频和字幕的下载链接
// @include http://www.youtube.com/*
// @include https://www.youtube.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @exclude http://www.youtube.com/embed/*
// @exclude https://www.youtube.com/embed/*
// @match http://www.youtube.com/*
// @match https://www.youtube.com/*
// @match http://s.ytimg.com/yts/jsbin/html5player*
// @match https://s.ytimg.com/yts/jsbin/html5player*
// @match http://manifest.googlevideo.com/*
// @match https://manifest.googlevideo.com/*
// @match http://*.googlevideo.com/videoplayback*
// @match https://*.googlevideo.com/videoplayback*
// @match http://*.youtube.com/videoplayback*
// @match https://*.youtube.com/videoplayback*
// @copyright  2023+, Find
// @author FindHao
// @icon http://icons.iconarchive.com/icons/dtafalonso/android-l/256/Youtube-icon.png
// ==/UserScript==


(function() {
    'use strict';


    //获取URL参数
    var getQueryVariable = function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return "";
    }


    //YouTube脚本
    if(document.domain == "www.youtube.com") {
        var videoKey = getQueryVariable("v") || $("ytd-watch-flexy").attr("video-id");

        //开始插入button
        var downTimmer = null, dtcount=0;
        var insertButton = function(){
            if($("#wish_downloader").length > 0) return;
            if(downTimmer) clearTimeout(downTimmer);
            dtcount++;
            if(dtcount> 5000) return;
            var authorInfo = $("#top-row #upload-info.ytd-video-owner-renderer");
            if(authorInfo.length > 0){
                //文字提醒
                authorInfo.after(`<a id="wish_downloader" style="width: 100px;height: 18px;background-color: rgb(0, 183, 90);color: white;text-align: center;padding: 8px 8px;margin: 0px 10px;font-size: 14px;border: 0px;cursor: pointer;border-radius: 2px;font-family: Roboto, Arial, sans-serif;text-decoration: none;margin-top: 9px;">Download</a>`);
                //点击按钮打开弹窗
                var count=0;
                $("#wish_downloader").click(function(){
                    var form1 = document.createElement("form");
                    form1.id = "post";
                    form1.name = "post";
                    form1.method = "post";
                    form1.target = "_blank";
                    form1.action = "https://addyoutube.com/result";
                    var input = document.createElement("input");
                    input.type = "hidden";
                    input.name = "url";
                    input.value = window.location.href;
                    var input2 = document.createElement("input");
                    input2.type = "hidden";
                    input2.name = "proxy";
                    input2.value = "Random";
                    document.body.appendChild(form1);
                    form1.appendChild(input);
                    form1.appendChild(input2);
                    form1.submit();
                });


                //保证按钮100%正确插入
                setTimeout(function(){
                   if($("#wish_downloader").length ===0){
                       insertButton();
                   }
                }, 500);

                // 停止监控dom变化
                setTimeout(function(){
                    if(observer) observer.disconnect();
                }, 200);
            } else {
                //如果没有加载完毕继续等待并再次尝试
                downTimmer = setTimeout(function(){
                    insertButton();
                }, 200);
            }
        };

        //监控dom变化
        var observer = null, monitoringTimer = null, monitoringCount=0;
        var monitoringDOMChanges = function(){
            //超过100次尝试退出
            monitoringCount++;
            if(monitoringCount > 100){
                if(monitoringTimer) clearTimeout(monitoringTimer);
                return;
            }
            //监控content元素加载
            var targetNode = document.getElementById("content");
            if(!targetNode){
                if(monitoringTimer) clearTimeout(monitoringTimer);
                monitoringTimer = setTimeout(function(){
                    monitoringDOMChanges();
                }, 100);
                return;
            }
            if(monitoringTimer) clearTimeout(monitoringTimer);

            var catched = false, MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if(MutationObserver){
               //MutationObserver监听dom变化
               try{
                    var config = { attributes: false, childList: true, subtree: true };
                    var callback = function(mutationsList) {
                        if(location.href.toLowerCase().indexOf("www.youtube.com/watch") !== -1 && !catched){
                            catched = true;
                            insertButton();
                        }
                    };
                    observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
                }catch(e){
                    if(observer) observer.disconnect();
                    if(console && console.log) console.log(e);
                }
            } else {
                //用事件监听dom变化
                var domChange = function(e) {
                    if(location.href.toLowerCase().indexOf("www.youtube.com/watch") !== -1 && !catched){
                        catched = true;
                        insertButton();
                        document.removeEventListener("DOMNodeInserted", domChange, false);
                    }
                };
                document.addEventListener("DOMNodeInserted", domChange, false);
            }
        }
        //开始监控dom变化
        monitoringDOMChanges();

    }

})();