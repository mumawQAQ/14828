// ==UserScript==
// @name         YouTube Downloader (support video, audio, subtitle download)
// @namespace    http://bbs.91wc.net/youtube-downloader.htm
// @version      0.1.22
// @description  YouTube video downloader, supporting 1080p, 720p, 480p, MP4, WebM, m4a, etc, support subtitle download (.srt .ass .vtt .lrc, etc), can be customized to download video, audio or composite video. (Based on y2b.123345.xyz, there is no need to jump, as shown in the figure below)
// @description:zh  YouTube视频下载，支持1080p，720p，480p，mp4，webm，m4a等，支持字幕下载（.srt .ass .vtt .lrc等），可以自定义下载视频，音频或合成的视频（基于y2b.123345.xyz开发，无需跳转，见下图展示）
// @description:zh-CN  YouTube视频下载，支持1080p，720p，480p，mp4，webm，m4a等，支持字幕下载（.srt .ass .vtt .lrc等），可以自定义下载视频，音频或合成的视频（基于y2b.123345.xyz开发，无需跳转，见下图展示）
// @author       Wilson
// @match        *://www.youtube.com/*
// @match        *://y2b.githmb.com/*
// @match        *://y2b.123345.xyz/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/layer.min.js
// @resource     layercss https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css
// @resource     layericon https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/icon.png
// @resource     layerloading https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/loading-0.gif
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    //视频解析服务器
    var videoServer="y2b.123345.xyz";
    var videoServer2="y2b.githmb.com";

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

    //跳转服务器2的监控ID前缀
    var isLoadingServer2 = "__is_loading_server2_";

    //YouTube脚本
    if(document.domain == "www.youtube.com") {
        //获取视频key和分析地址
        var getVideoUrl=function(videoServerDomain){
            videoServerDomain = videoServerDomain || videoServer;
            var videoKey = getQueryVariable("v") || $("ytd-watch-flexy").attr("video-id");
            return "https://"+videoServerDomain+"/?url="+encodeURIComponent("https://www.youtube.com/watch?v="+videoKey);
        };
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
                authorInfo.after(`<a id="wish_downloader" href="`+getVideoUrl()+`" target="_blank" style="width: 100px;height: 18px;background-color: rgb(0, 183, 90);color: white;text-align: center;padding: 8px 8px;margin: 0px 10px;font-size: 14px;border: 0px;cursor: pointer;border-radius: 2px;font-family: Roboto, Arial, sans-serif;text-decoration: none;margin-top: 9px;">Downloader</a>`);
                //点击按钮打开弹窗
                var count=0;
                $("#wish_downloader").click(function(){
                    count++;
                    $(this).attr("href", getVideoUrl());
                    if(layer){
                        var title = $("h1.title.style-scope.ytd-video-primary-info-renderer").text();
                        layer.open({
                            type: 2,
                            title: 'YouTbue Downloader - ' + title,
                            maxmin: true,
                            shade : 0,
                            area : ['800px' , '520px'],
                            content: $(this).attr("href")+'&count='+count
                        });
                        //显示加载中
                        var loading = `<div class="layui-layer layui-layer-loading wish_loading0" type="loading" showtime="0" contype="string" style="z-index: 88888888;top: 50%;left: 50%;position: absolute;margin-left: -30px;margin-top: -12px;"><div id="" class="layui-layer-content layui-layer-loading0"></div><span class="layui-layer-setwin"></span></div>`;
                        $('.layui-layer.layui-layer-iframe:last').append(loading);
                        $('.layui-layer.layui-layer-iframe iframe').on('load', function() {
                            $(this).parent().parent().find(".wish_loading0").hide();
                        });
                        //窗口变化时动态改变大小
                        $(".layui-layer-max").click(function() {
                            var me=$(this);
                            setTimeout(function(){me.parents(".layui-layer.layui-layer-iframe").find("iframe").height(me.parents(".layui-layer.layui-layer-iframe").height()-50);}, 100);
                        });
                        //多窗口显示
                        var zIndex=$('.layui-layer.layui-layer-iframe:last').css("z-index");
                        $(".layui-layer-title").on('mousedown', function(){
                            var me=$(this);
                            me.parents(".layui-layer.layui-layer-iframe").css("z-index", zIndex++);
                        });

                        //监控是否正在跳转到服务器2
                        GM_setValue(isLoadingServer2+count, 0);
                        var listener_id = GM_addValueChangeListener(isLoadingServer2+count, function(name, old_value, new_value, remote) {
                            if(new_value == 1){
                                //server2 loading
                                $(".layui-layer.layui-layer-iframe:last").find(".wish_loading0").show();
                            } else {
                                //server2 loaded
                                $(".layui-layer.layui-layer-iframe:last").find(".wish_loading0").hide();
                                GM_removeValueChangeListener(listener_id);
                            }
                        })
                        //如果layer存在则打开弹窗
                        return false;
                    } else {
                        //如果layer不存在则打开新窗口
                        return true;
                    }
                });

                //调整弹窗样式
                var layermorecss = ".layui-layer.layui-layer-loading{position: absolute;top: 50%;left: 50%;margin-left: -30px;margin-top: -12px;}.layui-layer-shade{display:none;}.layui-layer-ico{background:url("+GM_getResourceURL("layericon")+") no-repeat;}.layui-layer-setwin .layui-layer-max {background-position: -32px -40px;}.layui-layer-setwin .layui-layer-close1 { background-position: 1px -40px; cursor: pointer; }.layui-layer-loading .layui-layer-content {     width: 60px;     height: 24px;     background: url("+GM_getResourceURL("layerloading")+") no-repeat; }";
                GM_addStyle(GM_getResourceText("layercss") + layermorecss);

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

    //视频解析服务器脚本
    if(document.domain === videoServer || document.domain === videoServer2){
        var parseTimer = null, ptcount=0;
        var parseVideo = function(){
            if(parseTimer) clearTimeout(parseTimer);
            ptcount++;
            if(ptcount> 10000) return;
            //页面加载完成
            var ourl = $('#url');
            if(ourl.length > 0){
                var url = getQueryVariable("url");
                if(url){
                    //如果服务器2加载完成，通知父窗口
                    var notifyStyle = "";
                    if(document.domain === videoServer2){
                        notifyStyle = "#notify1{display:none!important;}";
                        GM_setValue(isLoadingServer2 + getQueryVariable("count"), 0);
                    }
                    //隐藏页面无关元素
                    GM_addStyle(notifyStyle+".title,#divURL,#log,#divFooter{display:none;}#divResult{padding-top:10px;}table td {background-color: #F7F7F7;}#recode{color: #fff;background: #28a745;padding: 9px 20px;}table th {background-color: #E3E3E3;}#divResult tr:hover td {background: none;}#divResult tr:hover {background: #E3E3E3;}");
                    //开始解析地址
                    url=decodeURIComponent(url);
                    ourl.val(url);
                    $("form[name=parse]").submit();

                    //显示提示文字
                    $("#divResult").prepend("<div style='color:red'>选择音/视频后，点击“合并&下载”开始下载，如果无法下载可能是浏览器拦截了弹窗，请允许后重试！</div>");

                    //监控是否分析完毕
                    var acount=0,atimer=setInterval(function(){
                        acount++;
                        if(acount > 1000){
                            clearInterval(atimer);
                            return;
                        }
                        //分析完毕
                        var m4atr=$("#audios tr:contains('m4a'):last");
                        if(m4atr.length>0){
                            clearInterval(atimer);

                            //选中m4a栏
                            m4atr.find(":radio").prop("checked", true);

                            //选中mp4
                            setTimeout(function(){
                                var mp4tr = $("#videos tr:contains('mp4')");
                                if(mp4tr.length>0){
                                    var mp4trlast=mp4tr.find(":contains('1920x1080')").parent();
                                    if(mp4trlast.length == 0){
                                        mp4trlast=mp4tr.last();
                                    }
                                    mp4trlast.find(":radio").prop("checked", true);
                                }
                            }, 100);

                            //调整视频列表样式
                            setTimeout(function(){$("#recode").html("合并 &amp; 下载");}, 200);
                            setTimeout(function(){
                                //var atitle=$("#divResult").find("div:contains('可用音频')");
                                //if(atitle.length>0) atitle.html("<b>"+atitle.html()+"</b>");
                                //var vtitle=$("#divResult").find("div:contains('可用视频')");
                                //if(vtitle.length>0) vtitle.html("<b>"+vtitle.html()+"</b>");
                                $(".available").css("margin-bottom", 0);
                                $(".btn-google-sub").css({color:"#fff",padding:"6px 20px",backgroundColor:"#007bff",border:"1px solid transparent",borderRadius:"0.25rem"});
                                $("#divResult").append('<style>#divResult a:hover {color: #ef2d2d;}</style><div style="margin-bottom: 12px;font-size: 12px;color: #333;margin-top: 10px;">The video download service is powered by <a href="https://y2b.123345.xyz/" target="_blank" style="color: #333;">y2b.123345.xyz</a></div>');
                            }, 200);
                        }

                        //如果解析失败
                        var failMsg = document.domain === videoServer ? $("#notifyMsg2") : $("#notifyMsg3");
                        if(failMsg.length > 0){
                            clearInterval(atimer);

                            //修改提示样式
                            var notifyBtn = document.domain === videoServer ? $("#notifyBtn2") : $("#notifyBtn3");
                            notifyBtn.hide();
                            failMsg.parent().css("border-bottom", "none");

                            //线路1失败时，自动切换到线路2
                            if(videoServer2 && document.domain === videoServer && failMsg.text().indexOf("解析失败") !== -1){
                                failMsg.parent().parent().html('<div style="padding: 8px 0;">正在尝试线路2...</div>');
                                //通知父窗口正在跳转服务器2
                                GM_setValue(isLoadingServer2 + getQueryVariable("count"), 1);
                                //跳转到服务器2
                                location.href = location.href.replace(document.domain, videoServer2);
                            }
                        }
                    }, 100);

                    //点击合并按钮
                    $("span#recode").on("click", function(){
                        var ccount=0,waitYes = function(){
                            ccount++;
                            //监控第二次显示确定按钮，并兼容第一次显示
                            var bcount=0,btimer=setInterval(function(){
                                bcount++;
                                if(bcount > 1000){
                                    clearInterval(btimer);
                                    return;
                                }
                                var yes=$("#yes");
                                if(yes.length>0){
                                    //第一次点确定
                                    yes.click();
                                    clearInterval(btimer);
                                    if(ccount<2){
                                        //如果第一次点击确定，则继续等待第二次
                                        waitYes();
                                    } else {
                                        setTimeout(function(){
                                            //第二次点确定
                                            $("#no").click();
                                            GM_setValue(isLoadingServer2 + getQueryVariable("count"), 0);
                                        });
                                    }
                                }
                            }, 100);
                        };

                        //监控第一次显示确定按钮
                        setTimeout(function(){
                            if($("#yes").length>0){
                                //第一次点确定
                                $("#yes").click();
                                ccount=1;
                                waitYes();
                            } else {
                                //未点击确定按钮，等待按钮出现
                                waitYes();
                            }
                        });
                    });
                }
            } else {
                //没有加载完毕等待后继续尝试
                parseTimer = setTimeout(function(){
                    parseVideo();
                }, 100);
            }
        };
        //开始解析视频
        parseVideo();
    }
})();