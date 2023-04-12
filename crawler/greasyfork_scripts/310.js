// ==UserScript==
// @name         Twitter Download Dog
// @namespace    http://tampermonkey.net/
// @name:zh-TW          Twitter 下載狗
// @name:zh-CN          Twitter 下载狗
// @name:ja             Twitter 犬をダウンロード
// @name:ko             Twitter 개 다운로드
// @name:ru             Twitter Загрузка собак
// @version             0.36
// @description         DownLoad all the Twitter images and videos with one click without login twitter account.
// @description:zh-TW   一鍵下載所有Twitter圖片及視頻
// @description:zh-CN   一键下载所有Twitter图片及视频
// @description:ja      ボタンを押してすべてのTwitter画像とビデオをダウンロードします。
// @description:ko      원 클릭 으로 다운로드 하 다 Twitter 이미지 및 영상
// @description:ru      Массово скачивает все картинки и видео с Твиттер в один клик без необходимости логина



// @author       macos2@github.com
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?domain=twitter.com
// @connect      twsaver.com
// @connect      twdown.net
// @connect      savetweetvid.com
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// ==/UserScript==



function add_area_to_header(){
    var my_area=document.createElement("div");
    my_area.id="my_area";
    my_area.style="position: fixed; top: 25%; left:2%;width: 15%;";
    let div_style="color: white;background-color: #1da1f2;border: 0px white;border-radius: 5px;margin: 2px;width: 205px";
    add_button(my_area,
               "DownLoad All",
               function(){download_all();},
               "button_download_all");
    add_button(my_area,
               "Scroll To End",
               function(){ is_scroll_to_end=!is_scroll_to_end ; scroll_to_end_retry=0 ; scroll_to_end(null); },
               "button_scroll_to_end");

    var check_box_area=document.createElement("div");
    check_box_area.style=div_style;
    my_area.appendChild(check_box_area);
    add_checkbox(check_box_area,"Auto Scroll To End",false,"auto_scroll");
    add_checkbox(check_box_area,"Auto Expand Contents",true,"auto_expand");
    //add_checkbox(check_box_area,"Other Twitter Contents",true,"other_twitter");
    add_checkbox(check_box_area,"Video Include",true,"video_include");
    add_checkbox(check_box_area,"Image Include",true,"image_include");
    //add_checkbox(check_box_area,"Gif Include",true,"gif_include");

    var seting_area=document.createElement("div");
    seting_area.style=div_style;
    //1:twsaver.com
    //2:twdown.net
    //3+:savetweetvid.com
    seting_area.innerHTML="Video URL Parse Site</br><select id='video_url_parse_site'><option value=1>twsaver.com</option><option value=2>twdown.net</option><option value=3>savetweetvid.com</option></select></br>"+
                          "Image Quality<select id='image_qty'><option value='&name=large'>Large</option><option value='&name=orig'>Original</option><option value='&name=small'>Small</option></select></br>"+
                          "Video Quality<select id='video_qty'><option value='3'>Large</option><option value='2'>Middle</option><option value='1'>Small</option></select></br>"+
                          "FileName Format</br><input id='filename_fmt' name='filename_fmt' type='text' value='%u/%a-%t-%c-%f'>";
    seting_area.id="video_url_parse_radio_area";
    my_area.appendChild(seting_area);
    var fn_fmt_help= add_button(seting_area,
               "?",
               function(){filename_fmt_help();},
               "filename_fmt_help");
    fn_fmt_help.style='color: #1da1f2;background-color: white;border: 0px white;border-radius: 5px;margin: 2px';

    var status_area=document.createElement("div");
    status_area.style="border: 0.5px solid gray;border-radius: 5px;margin: 2px;height: 120px;width: 205px";
    my_area.appendChild(status_area);
    var status_text=document.createElement("p");
    status_text.id="status_text";
    status_message(null);
    status_area.appendChild(status_text);

    document.body.appendChild(my_area);
}

function add_button(parent_element,text,fun,id){
    var button=document.createElement("button");
    button.innerHTML="<p  style='margin: 2px; font-size: 13px;' >"+text+"</p>";
    button.onclick=fun;
    button.id=id;
    button.style="color: white;	background-color: #1da1f2;	border: 0px white;	border-radius: 5px;margin: 2px;height: 32px;width: 100px";
    if(parent_element)parent_element.appendChild(button);
    return button;
}

function add_checkbox(parent_element,text,value,id){
    if(value){
      parent_element.innerHTML+="<p style='margin: 2px;'><input type='checkbox' id="+id+" value="+value+" checked >"+text+"</p>";
    }else{
      parent_element.innerHTML+="<p style='margin: 2px;'><input type='checkbox' id="+id+" value="+value+">"+text+"</p>";
    }
}

 function filename_fmt_help(){
     alert("=====Article Parameters=====\n"+
           "\t%a \t: Article Author Name \n\t\t帖子作者名\n"+
           "\t%c \t: Article Text Contents \n\t\t帖子文字内容\n"+
           "\t%t \t: Article Created Time \n\t\t帖子发布时间\n"+
           "=====Other Parameters=====\n"+
           "\t%u \t: Current Site Twitter User Name \n\t\t当前浏览的Twitter用户名\n"+
           "\t%q \t: Image or Video Quality Character,like \"L\",\"M\",\"S\"and \"O\" \n\t\t图像或视频的质量标注字符，例如：\"L\",\"M\",\"S\"and \"O\"\n"+
           "\t%f \t: File Original Name \n\t\t文件的原名\n"+
           "=====Special Character=====\n"+
           "\t/ \t: Directory Separate,it will create all the parent directories which was not exist. it works on Windows and Linux."+
           "\n\t\t目录分割符，会自动创建不存在父目录，Windows及Linux适用\n"+
           "=====Note=====\n"+
           "\tThe filename would be sliced if it's more than 128 utf8 characters,or it would be ingnored by the browser."+
           "\n\t文件名会截取成小于127个utf-8字符长度，否则其会因无法保存而丢弃."
          );
 }



var is_scroll_to_end=false;
var scroll_to_end_retry=0;
function scroll_to_end(){
    //console.log("is_scroll_to_end:"+is_scroll_to_end+"\tscroll_to_end_retry:"+scroll_to_end_retry);
    if(is_scroll_to_end){
        document.querySelector("#button_scroll_to_end").innerHTML="<p  style='margin: 2px;' >Stop Scroll</p>";
        if(window.scrollY < window.scrollMaxY){
               scroll_to_end_retry=0;
               setTimeout(function(){window.scrollByLines(window.scrollMaxY);scroll_to_end()},500);
               status_message("Scroll To End...");
           }else{
               if(scroll_to_end_retry>5){
                    is_scroll_to_end=false;
                    scroll_to_end();
               }else{
               scroll_to_end_retry++;
               setTimeout(function(){window.scrollByLines(window.scrollMaxY);scroll_to_end()},500);
               status_message("Scroll To End,Retry:"+scroll_to_end_retry);
               }
           }
    }else{
        document.querySelector("#button_scroll_to_end").innerHTML="<p  style='margin: 2px;' >Scroll To End</p>";
        status_message(null);
        if(download_all_scroll_to_end){
            window.scrollTo(0,0);
            status_message("Start DownLoad After 1 s");
            setTimeout(download_all_init(),1000);
        }
    }
}

var is_download_all=false;
function download_all(){
    is_download_all=!is_download_all;
    var button=get_by_selector("#button_download_all");
    if(is_download_all){
        download_all_scroll_to_end=false;
        download_all_current_article=0;
        status_message("Start DownLoad After 1 s");
        setTimeout(download_all_init(),1000);
        button.innerHTML="<p  style='margin: 2px;' >Stop</p>";
    }else{
        button.innerHTML="<p  style='margin: 2px;' >DownLoad All</p>";
    }
}

var download_count=0;
function status_message(text){
     var status_text=get_by_selector("#status_text");
     if(status_text){
         status_text.innerHTML="";
         if(download_count>0){
             status_text.innerHTML+="<p style='margin: 2px;'>"+download_count+"Files Downloading</p>";
         }
         if(text){
             status_text.innerHTML+="<p style='margin: 2px;'>"+text+"</p>";
         }else{
             status_text.innerHTML+="<p style='margin: 2px;'>Ready...</p>";
         }

      }
}

function get_by_xpath(express,node){
    var i=document.evaluate(express,node,null,XPathResult.ANY_TYPE,null);
    return i.iterateNext();
}
function get_by_selector(express){
    var i=document.querySelector(express);
    return i;
}

var download_all_scroll_to_end=false;
var download_all_current_article=0;
function download_all_init(){
     if(get_by_selector("#auto_scroll").checked){
         if(download_all_scroll_to_end==false){
             download_all_scroll_to_end=true;
             get_by_selector("#button_scroll_to_end").click();
             return;
         }
     }
    //init download param
    download_image=get_by_selector("#image_include").checked;
    download_video=get_by_selector("#video_include").checked;
    download_expend=get_by_selector("#auto_expand").checked;
    download_twitter_name="";
    let download_twitter_name_area=get_by_xpath("//main/div/div/div/div[1]/div/div[2]/div/div/div[1]/div/div[2]/div/div",document);
    let i=download_twitter_name_area.querySelectorAll("span");
    i.forEach(function (x){ download_twitter_name+=x.innerText;});
    download_retry=0;
    video_url_parse_site=Number(document.querySelector("#video_url_parse_site").value);
    image_quality=document.querySelector("#image_qty").value;
    video_quality=Number(document.querySelector("#video_qty").value);

    filename_fmt=document.querySelector("#filename_fmt").value;
    if(filename_fmt==="")filename_fmt="%u/%a-%t-%c-%f";//in case of empty filename_fmt;

    var first_article=get_by_xpath("//section/div/div/div/div/div/article",document);
    var continue_article=get_by_selector("#current_target");
    if(continue_article!=null){
        if(confirm("Continute DownLoad Progress Before?\n继续之前的爬取进度吗？")){
            first_article=continue_article;
        }else{
            window.scrollTo(0,0);
            continue_article.id=null;
        }
    }
    if(first_article){
        first_article.id="current_target";
        setTimeout(query_article(),500);
    }
}

var download_image=false;
var download_video=false;
var download_expend=false;
var download_twitter_name="";

function query_article(){
        download_all_current_article++;
        console.log("Querying "+download_all_current_article+" Article");
        status_message("Querying "+download_all_current_article+" Article");
        var article=get_by_selector("#current_target");
        if(article){
            var brect=article.getBoundingClientRect();
            window.scrollTo(brect.x,window.scrollY+brect.y);
            if(download_expend){
                //var expend=article.querySelector("article div:nth-child(2) div div div div div:nth-child(2) div div div div span span");
                //var expend=get_by_xpath("div/div/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div[2]/div/div/div/div/div/div/div[2]/div/div[2]/div/div/span",article);
                var expend=get_by_xpath("div/div/div/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/div/div/div/div/div/div[2]/div/div[2]/div/div/span",article);
                if(expend)expend.click();
            }
            setTimeout(function(){download_article_content(article);},200);
            download_retry=0;
         }else{
             download_all_current_article--;
         }
}

var filename_fmt="%f";
function download_filename_preprocess(article){
    let temp=get_by_xpath("div/div/div/div[2]/div[2]/div[1]/div/div/div[1]/a/time/@datetime",article);
    if (temp==null){
        //this article had been deleted,skip it.
        return temp;
    }
    let article_time=temp.value;
    let article_twitter_name_area=get_by_xpath("div/div/div/div[2]/div[2]/div[1]/div/div/div[1]/div[1]/a/div",article);
    let article_twitter_name="";
    var i=article_twitter_name_area.querySelectorAll("span");
    i.forEach(function (x){ article_twitter_name+=x.innerText;});
    let article_describe="";
    i=document.evaluate("div/div/div/div[2]/div[2]/div[2]/div[1]/div/span/text()",article,null,XPathResult.ANY_TYPE,null);
    var j=i.iterateNext();
    while(j!=null){
        article_describe+=j.textContent;
        j=i.iterateNext();
    }
    temp=filename_fmt;
    article_twitter_name=article_twitter_name.replaceAll("\\","").replaceAll("/","").replaceAll("*","").replaceAll("?","").replaceAll("\"","").replaceAll(":","").replaceAll("<","").replaceAll(">","").replaceAll("|","");
    article_describe=article_describe.replaceAll("\\","").replaceAll("/","").replaceAll("*","").replaceAll("?","").replaceAll("\"","").replaceAll(":","").replaceAll("<","").replaceAll(">","").replaceAll("|","");
    download_twitter_name=download_twitter_name.replaceAll("\\","").replaceAll("/","").replaceAll("*","").replaceAll("?","").replaceAll("\"","").replaceAll(":","").replaceAll("<","").replaceAll(">","").replaceAll("|","");
    temp=temp.replaceAll("%a",article_twitter_name);
    temp=temp.replaceAll("%t",article_time);
    temp=temp.replaceAll("%c",article_describe);
    temp=temp.replaceAll("%u",download_twitter_name);
    return temp;
}

function download_filename_postprocess(filename_preprocess,original_filename,qty_char=""){
    let temp=filename_preprocess;
    let suffix=original_filename.match("[\.][^\.]+$");
    let name=original_filename.match("^.*(?=\\.)");
    if(suffix==null)suffix=".txt"; //当作普通txt处理，让用户自行判断该文件是什么类型。
    temp=temp.replaceAll("%f",name);
    temp=temp.replaceAll("%q",qty_char);
    let fn=temp.match("[^/]*$")[0];
    let dir=temp.match("^.*/");
    if(dir===null){
        dir="";
    }else{
        dir=dir[0];
    }
    return dir+fn.slice(0, 120-suffix.length)+suffix;
}

function download_article_content(article){
    let filename_preprocess=download_filename_preprocess(article);
    if(filename_preprocess!=null){
        //console.log("Download"+article_twitter_name+" @ "+article_time+" Article Content");
        if(download_image) download_article_image(article,filename_preprocess);
        if(download_video) download_article_video(article,filename_preprocess);
    }
    query_next_article();
}

function download_file(url,filename){
    download_count++;
    GM_download({
        url:url,
        name:filename,
        saveAs:false,
        onload:function(){download_count--;status_message(null);},
        onerror:function(e){download_count--;status_message(null);console.log("Error:"+e.error+"\n");},
        onprogress:function(e){status_message(e.finalUrl+" : "+Math.round(e.loaded/e.totalSize*1000)/10+" %");},
    });
}

//"&name=large"
//"&name=orig"
//"&name=small"
var image_quality="&name=large";
function download_article_image(article,filename_preprocess){
    var nodelist=article.querySelectorAll("img");
    var src="";
    var filename="";
    var temp=null;
    let qty_char="";
    switch (image_quality){
        case "&name=large":
            qty_char="L";
            break;
        case "&name=orig":
            qty_char="O";
            break;
        case "&name=small":
            qty_char="S";
            break;
        default:break;
    }
    for (var i=1;i<nodelist.length;i++){
        temp=nodelist[i].src.match(".*(?=[?])");
        if(temp==null)continue;
        src=temp[0];
        filename=download_filename_postprocess(filename_preprocess,src.match("[^/]*$")[0]+".jpg",qty_char);
        download_file(src+"?format=jpg"+image_quality,filename);
        //GM_download({
        //    url:src+"?format=jpg"+image_quality,
        //    name:filename,
        //    saveAs:false,
        //});
    }
}

//1:twsaver.com
//2:twdown.net
//3+:savetweetvid.com
var video_url_parse_site=1;
//1:Low
//2:Middle
//3:Hight
var video_quality=3;
function download_article_video(article,filename_preprocess){
    if(article.querySelector("video")==null)return;
    var i=document.evaluate("div/div/div/div[2]/div[2]/div[1]/div/div/div[1]/a/@href",article,null,XPathResult.ANY_TYPE,null).iterateNext();
    if(i==null)return;
    var t="https://twitter.com/i/status/"+i.value.match("[^/]*$");
    switch (video_url_parse_site){
        case 1://twsaver.com
            GM_xmlhttpRequest({
                method:'POST',
                url:'https://twsaver.com/system/action.php',
                headers:{'Content-Type':'application/x-www-form-urlencoded,charset=UTF-8',Referer:'https://twsaver.com/'},
                responseType:'json',
                data:"url="+t,
                context:{filename_preprocess},
                onload:download_article_video_twsaver_cb,

            });
            break;
        case 2://twdown.net
            GM_xmlhttpRequest({
                method:'POST',
                url:'https://twdown.net/download.php',
                headers:{'Content-Type':'application/x-www-form-urlencoded',Referer:'https://twdown.net'},
                data:"URL="+t,
                context:{filename_preprocess},
                onload:download_article_video_twdown_cb,
            });
            break;
        default://savetweetvid.com
             GM_xmlhttpRequest({
                method:'POST',
                url:'https://www.savetweetvid.com/downloader',
                headers:{'Content-Type':'application/x-www-form-urlencoded',Referer:'https://www.savetweetvid.com'},
                data:"url="+t,
                context:{filename_preprocess},
                onload:download_article_video_savetweetvid_cb
            });
            break;
    }
}

function download_article_video_twsaver_cb(result){
    let url="";
    var obj=result.response;
    let qty_char="";
    if(obj==null)return;
    switch (video_quality){
        case 1://small
            url=obj.links[0].url;
            qty_char="S";
            break;
        case 2://middle
            if(obj.links.length>=2){
                url=obj.links[obj.links.length-2].url;
            }else{
                url=obj.links[obj.links.length-1].url;
            }
            qty_char="M";
            break;
        default://large
            qty_char="L";
            url=obj.links[obj.links.length-1].url;
            break;
    }

    let filename=download_filename_postprocess(result.context.filename_preprocess,url.match("[^/]*(?=\\?)")[0],qty_char);
    download_file(url,filename);
    //GM_download({
    //        url:url,
    //        name:filename,
    //        saveAs:false,
    //    });
}

function download_article_video_twdown_sort(a,b){
    return a.res-b.res;
}

function download_article_video_twdown_cb(result){
    var str=result.responseText;
    if(str==null)return;
    let parser=new DOMParser();
    let doc=parser.parseFromString(str,"text/html");
    let i=1;
    let temp=0;
    let order=new Array();
    let xpath_res;
    let qty_char="";
    while(1){
        xpath_res=doc.evaluate("/html/body/div[2]/div/center/div[2]/div/div[3]/table/tbody/tr["+i+"]/td[2]/text()",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
        if(xpath_res==null)break;
        temp=Number(xpath_res.textContent.replace('x',''));
        if(temp){
            order.push({i:i,res:temp});
        }else{
            break;
        }
        i++;
    }
    order.sort(download_article_video_twdown_sort);
    let a=null;
    switch (video_quality){
        case 1://small
            a=doc.evaluate("/html/body/div[2]/div/center/div[2]/div/div[3]/table/tbody/tr["+order[0].i+"]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
            qty_char="S";
            break;
        case 2://middle
            if(order.length>=2){
                a=doc.evaluate("/html/body/div[2]/div/center/div[2]/div/div[3]/table/tbody/tr["+order[order.length-2].i+"]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
            }else{
                a=doc.evaluate("/html/body/div[2]/div/center/div[2]/div/div[3]/table/tbody/tr["+order[order.length-1].i+"]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
            }
            qty_char="M";
            break;
        default://large
            a=doc.evaluate("/html/body/div[2]/div/center/div[2]/div/div[3]/table/tbody/tr["+order[order.length-1].i+"]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
            qty_char="L";
            break;
    }
    let url=a.href;
    let filename=download_filename_postprocess(result.context.filename_preprocess,url.match("[^/]*(?=\\?)")[0],qty_char);
    download_file(url,filename);
    //GM_download({
    //        url:url,
    //        name:filename,
    //        saveAs:false,
    //    });
}

function download_article_video_savetweetvid_cb(result){
    var str=result.responseText;
    if(str==null)return;
    let parser=new DOMParser();
    let doc=parser.parseFromString(str,"text/html");
    let a=null;
    let i=0;
    let qty_char="";
    switch (video_quality){
        case 1://small
            while(doc.evaluate("//table/tbody/tr["+i+"]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null)){
            i++;
            }
            a=doc.evaluate("//table/tbody/tr["+i-1+"]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
            qty_char="S";
            break;
        case 2://middle
            a=doc.evaluate("//table/tbody/tr[2]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null);
            if(a==null){
                a=doc.evaluate("//table/tbody/tr[1]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null);
            }
            a=a.iterateNext();
            qty_char="M";
            break;
        default://large
            a=doc.evaluate("//table/tbody/tr[1]/td[4]/a",doc,null,XPathResult.ANY_TYPE,null).iterateNext();
            qty_char="L";
            break;
    }
    let url=a.href;
    let filename=download_filename_postprocess(result.context.filename_preprocess,url.match("[^/]*(?=\\?)")[0],qty_char);
    download_file(url,filename);
    //GM_download({
    //        url:url,
    //        name:filename,
    //        saveAs:false,
    //    });
}


var download_retry=0;
function query_next_article(){
    var pre_article=get_by_selector("#current_target");
    var next_article=get_by_xpath("following::article",pre_article);
    if(next_article==null){
        download_retry++;
        if(download_retry<10){
           console.log("Querying "+download_all_current_article+" Article \tRetry: "+download_retry);
           setTimeout(query_next_article(),500);
        }else{
           download_all();//switch to stop the download process.
           status_message(null);
        }
        return;
    }
    download_retry=0;
    if(pre_article)pre_article.id=null;
    if(next_article)next_article.id="current_target";
    if(is_download_all){
        setTimeout(function(){query_article();},100);
    }else{
        status_message(null);
    }
}

(function() {
    'use strict';
    add_area_to_header();
    console.log("good dog");
    // Your code here...
})();