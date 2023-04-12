// ==UserScript==
// @name         注册邀请码抢码工具
// @name:en      Tool for register with invite code
// @name:zh-TW   注冊邀請碼搶碼工具
// @namespace    hoothin
// @version      0.6
// @description  自动遍历论坛注册邀请码得出正确结果
// @description:en  Just a tool for register with invite code
// @description:zh-TW  自動遍歷論壇注冊邀請碼得出正確結果
// @author       hoothin
// @include      *
// @exclude      http*://*.baidu.*
// @exclude      http*://*.bing.*
// @exclude      http*://*.google.*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        unsafeWindow
// @license      MIT License
// @compatible        chrome
// @compatible        firefox
// ==/UserScript==

(function() {
    'use strict';
    var is1024=document.title.indexOf('\u8349\u69b4') != -1;
    var firefox=navigator.userAgent.toLowerCase().indexOf('firefox')!=-1;
    var invitecode=document.querySelector((is1024?"#invcode":"#invitecode")),
        chkInvitecode=document.querySelector((is1024?"#check_info_invcode":"#chk_invitecode")),
        codeChar=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],checkFun,checkinvite,preTxt="",codeArr;
    String.prototype.pmatch = function(reg){
        if(!(reg instanceof RegExp))return 0;
        var a=[];
        if(!reg.global){
            a = this.match(reg);
            return a? [a.slice(1,a.length)] : 0;
        }
        var b=reg.exec(this);
        while(b){
            b.shift();
            a.push(b[0]);
            b=reg.exec(this);
        }
        return a.length>0?a:0;
    };
    function checkCode(){
        if(checkFun)clearInterval(checkFun);
        var checkNext=function(){
            if(codeArr.length===0){
                clearInterval(checkFun);
                if(checkinvite)clearInterval(checkinvite);
                alert("没有找到正确的邀请码！");
                return;
            }
            invitecode.value=codeArr.shift();
            if(is1024){
                unsafeWindow.invcodecheck();
            }else{
                unsafeWindow.checkinvite();
            }
        };
        var checkBtn=invitecode.parentNode.querySelector(".btn");
        checkFun = setInterval(function() {
            if(preTxt!=chkInvitecode.innerHTML){
                preTxt=chkInvitecode.innerHTML;
                if(chkInvitecode.innerHTML){
                    if(is1024){
                        if(chkInvitecode.innerHTML.indexOf("green")!=-1){
                            if(checkinvite)clearInterval(checkinvite);
                            clearInterval(checkFun);
                            alert("已匹配到正确的邀请码！");
                        }else if(chkInvitecode.innerHTML.indexOf("red")!=-1){
                            if(checkinvite)clearInterval(checkinvite);
                            checkinvite=setInterval(function() {checkBtn.click();},2000);
                            checkNext();
                        }
                    }else{
                        if(chkInvitecode.innerHTML.indexOf("邀请码错误")==-1){
                            clearInterval(checkFun);
                            alert("已匹配到正确的邀请码！");
                        }else{
                            checkNext();
                        }
                    }
                }
            }
        },100);
        checkNext();
    }
    function geneCodeArr(){
        var tempCode=[];
        codeArr.forEach(function(item){
            if(item.indexOf("*")!=-1){
                for(var char of codeChar){
                    var tempItem=item.replace(/\*/,char);
                    if(tempCode.toString().indexOf(tempItem)==-1){
                        tempCode.push(tempItem);
                    }
                }
            }else if(tempCode.toString().indexOf(item)==-1){
                tempCode.push(item);
            }
        });
        codeArr=[];
        while(tempCode.length>0){
            var random=Math.floor(Math.random()*tempCode.length);
            var curCode=tempCode[random];
            codeArr.push(curCode);
            tempCode.splice(random,1);
        }
    }
    if(invitecode){
        var copiedCode=GM_getValue("copiedCode");
        if(copiedCode){
            GM_deleteValue("copiedCode");
            codeArr=copiedCode;
            checkCode();
        }
        GM_registerMenuCommand("开始筛选邀请码", function(){
            var codeStr=prompt("输入邀请码：","");
            if(!codeStr)return;
            codeArr=codeStr.pmatch((is1024?/\b([0-9a-z\*]{16})\b/gi:/(?:^|c=|[^=\.\/])\b([0-9a-z]{6})(?:\s|$)/gi));
            if(codeArr===0)return;
            geneCodeArr();
            checkCode();
        });
    }else{
        if(is1024){
            codeArr=(firefox?document.body.textContent:document.body.innerText).pmatch(/(?:^|[:：\s])\b([0-9a-z\*]{16})\b/gi);
            if(codeArr!==0){
                if(window.confirm("检测到邀请码，是否立即前往注册？")){
                    geneCodeArr();
                    GM_setValue("copiedCode",codeArr);
                    location.href="/register.php";
                }
            }
        }
    }
})();