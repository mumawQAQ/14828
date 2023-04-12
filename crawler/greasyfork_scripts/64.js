// ==UserScript==
// @name         大麦抢票-选场次票价人数
// @namespace    https://www.jwang0614.top/scripts
// @version      0.9.0
// @description  辅助购买大麦网演唱会门票
// @author       Olivia Wang
// @match        https://detail.damai.cn/*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/3.5.1/jquery.min.js
// ==/UserScript==

var sellStartTime_timestamp = null;
var order_url = null;
var timer = null;

$(document).ready(function(){
    var data = sessionStorage.getItem('order_url');
    if (data) {
        window.location.href = data;
    } else {
        var service_note_name_seat = $('.service-note .service-note-name:first').text().trim();
        // var service_note_name_express = $('.service-note div.service-note-name')[1].textContent.trim();

        if($("div.buybtn").text() === "选座购买" || service_note_name_seat === "可选座"){
            alert("目前不支持选座");
        }
        // else if(service_note_name_express !== "快递票"){
        //     alert("目前只支持快递票");
        // }
        else {
            if (window.confirm('我写了一个有辅助选座功能的完整版，把选场次票价人数和确认两个脚本合并在了一起。以后如果更新应该主要更新新脚本。\n\n详细信息请关注「伪装程序大佬」。\n\n获取完整脚本吗？\n(浏览器可能会阻止弹窗，允许弹窗就可以了。)')) 
            {
                var mp_url = 'https://mp.weixin.qq.com/s?__biz=Mzg5NjE1MjU0Ng==&mid=2247484254&idx=1&sn=c3dccce6ed9f2e03a4b11612197805fe&chksm=c00425d3f773acc59098d5aba95ad521d31bafdc2d4fdea6e13422e0cf66c2fcb7b7a78b80c0&token=1170650345&lang=zh_CN#rd';
                var win = window.open(mp_url, '_blank');
                win.focus();
            };
            insert_ui();
        }
    }



});

function insert_ui() {
    var $service = $(".content-right .service");

    var $style = $('<style>'+
        '#control_container{margin: 20px 0; background:#e9e9e9;padding:20px 0;}'+
        '#control_container button{width:80%;margin:10px 10%;padding:10px 0;font-size:30px;border-style: solid;}'+
        '#start_btn{color:green;}'+
        '#end_btn{color:red;}'+
        '#number_input_wrapper{display: flex;justify-content:center;font-size: 20px; margin-bottom:20px;}'+
        '#notice{margin:10px 10px;padding:10px 10px;color:darkslategrey;border-style: solid; border-width: 1px; border-color:darkslategrey;}'+
        '#countdown_wrapper {display:none; font-size: 16px; text-align:center; background:#ffeaf1;}'+
        '#countdown_wrapper p{width:100%;}'+
        '#countdown {font-size: 20px; color:#ff1268;}'+
        '</style>');

    var $control_container = $("<div id='control_container'></div>");


    var $number_input = $('<div id="number_input_wrapper">请输入人数：<input id="number_input" type="number" value="1" min="1" max="6"></div>');
    var $start_btn = $('<button id="start_btn">开始抢票</button>');
    var $end_btn = $('<button id="end_btn">停止抢票</button>');
    var $notice = $('<div id="notice"><h3>使用步骤</h3><p>0.登录，填写购票人信息</p><p>1.选择场次</p><p>2.选择价格</p><p>3.填写人数</p><p>4.点击‘开始抢票’</p></div>');

    var $countdown = $('<div id="countdown_wrapper"><p id="selected_event">event1</p><p id="selected_price">price2</p><p id="selected_number">1人</p><br><p>倒计时:</p><p id="countdown">00:00:00</p></div>');
    $control_container.append($style);
    $control_container.append($number_input);
    $control_container.append($start_btn);
    $control_container.append($end_btn);
    $control_container.append($notice);
    // $control_container.append($countdown);

    $control_container.insertBefore($service);
    $countdown.insertBefore($control_container);

    $("#start_btn").click(function(){

        // http://cncc.bingj.com/cache.aspx?q=jquery+ignore+inner+most&d=4555311081654245&mkt=en-US&setlang=en-US&w=FZ-aM6oeDz4XhBZleDN79HoRb7ybox0E
        var event_css_selector = ".perform__order__select.perform__order__select__performs .select_right_list .active>*";
        var price_css_selector = ".select_right_list_item.sku_item.active .skuname";

        var event = $(event_css_selector).contents().not($(event_css_selector).children()).text().trim();
        var price = $(price_css_selector).contents().not($(price_css_selector).children()).text().trim();

        
        var people_num = $("#number_input").val();
        var data_json = JSON.parse($("#dataDefault").text());
        window.sellStartTime_timestamp = data_json["sellStartTime"];

        // console.log("sellStartTime_timestamp: " + sellStartTime_timestamp);
        // console.log("now: " + Date.now());

        // console.log(data_json);

        $("#selected_event").text(event);
        $("#selected_price").text(price);
        $("#selected_number").text(people_num + "人");

        $("#countdown_wrapper").show();


        var result = generate_confirm_url(event, price, people_num,data_json);

        if(result) {
            window.order_url = result;
            sessionStorage.setItem('order_url', result);

            console.log("countdown and go to confirm page");
            timedUpdate();


        } else {
            console.error("不知道为什么获取场次票价人数出错了呢。");
            alert("不知道为什么获取场次票价人数出错了呢。");

        }





    });

    $("#end_btn").click(function(){
        clearTimeout(window.timer);
        $("#countdown_wrapper").hide();
        sessionStorage.clear();
    });

}

function generate_confirm_url(event, price, people_num, data_json) {
    var performBases = data_json["performBases"];
    var itemId = "";

    for(var i=0; i<performBases.length; i++) {
        var performBase = performBases[i];
        var performs = performBase["performs"];
        for(var j=0; j<performs.length; j++) {
            var perform = performs[j];
            if(perform["performName"] === event) {
                itemId = perform["itemId"];
                var skuList = perform["skuList"];
                for(var k=0; k<skuList.length; k++) {
                    var skuList_item = skuList[k];
                    if(skuList_item["skuName"] === price) {
                        var skuId = skuList_item["skuId"];
                        return "https://buy.damai.cn/orderConfirm?exParams=%7B%22damai%22%3A%221%22%2C%22channel%22%3A%22damai_app%22%2C%22umpChannel%22%3A%2210002%22%2C%22atomSplit%22%3A%221%22%2C%22serviceVersion%22%3A%221.8.5%22%7D&buyParam=" + itemId + "_" + people_num + "_" + skuId + "&buyNow=true&spm=a2oeg.project.projectinfo.dbuy"

                    }
                }

            }
        }

    }
    return null;

}

function timedUpdate() {
    // 提前2秒开始
    var current_time = Date.now();
    var time_difference = Math.ceil((window.sellStartTime_timestamp - current_time)/1000);
    if (time_difference < 2) {
        window.location.href = window.order_url;
    } else {
        var time_difference_str = time_difference.toHHMMSS();
        $("#countdown").text(time_difference_str);

        window.timer = setTimeout(timedUpdate, 1000);

    }

}


//https://stackoverflow.com/a/31112615
Number.prototype.toHHMMSS = function() {
    var hours = Math.floor(this / 3600) < 10 ? ("00" + Math.floor(this / 3600)).slice(-2) : Math.floor(this / 3600);
    var minutes = ("00" + Math.floor((this % 3600) / 60)).slice(-2);
    var seconds = ("00" + (this % 3600) % 60).slice(-2);
    return hours + ":" + minutes + ":" + seconds;
};