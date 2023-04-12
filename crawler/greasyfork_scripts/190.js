// ==UserScript==
// @author         Alvaro
// @name           SteamWorkshopDownloader
// @namespace      https://greasyfork.org/es/users/2611-alvaro
// @description    Adds an extra button to download
// @include        *steamcommunity.com/sharedfiles/filedetails/?id=*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant          GM_xmlhttpRequest
// @version        1.5
// @license        MIT
// ==/UserScript==
var patt=new RegExp("[0-9]{2,15}");
var id = patt.exec(document.URL);
var baseURL = "http://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v0001/";

if (document.URL.indexOf("steamcommunity.com") != -1)
{
    addWorkshopBtn(id);
}

function prepareDownload(url, id)
{
    GM_xmlhttpRequest({
        method: "POST",
        url: url,
        data: "itemcount=1&publishedfileids[0]="+id+"&format=json",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: function(response) {
            //console.log(response.responseText);
            debugger;
            data=jQuery.parseJSON(response.responseText);
            var fileurl=data.response.publishedfiledetails[0].file_url;
            $( "#SubscribeItemOptionAdd2" ).click(function(e){
                e.preventDefault();  //stop the browser from following
                window.location.href = fileurl; 
            });
        },
        onerror: function(reponse) {
            //alert('error');
            console.log(reponse);
        }
    });
}

function addWorkshopBtn(id)
{
    var element = document.getElementById("SubscribeItemBtn");
    
    var button = document.createElement('a');
    button.setAttribute('class', 'btn_green_white_innerfade btn_border_2px btn_medium');
    //button.setAttribute('href', baseURL + id);
    button.setAttribute('style', 'right: 190px;');
    
    button.innerHTML = '<div class="subscribeIcon"></div>' +
        '<span class="subscribeText">' +
        '<div class="subscribeOption subscribe selected" id="SubscribeItemOptionAdd2">Download</div>' +
        '</span>';
    
    // Append the element after the real subscribe button
    if (element.nextSibling)
    {
        element.parentNode.insertBefore(button, element.nextSibling);
    }
    else
    {
        element.parentNode.appendChild(button);
    }
    prepareDownload(baseURL, id);
    // Change the stupid text to the left of it
    document.querySelectorAll(".game_area_purchase_game")[0].getElementsByTagName('h1')[0].setAttribute('style', 'width: 300px;');
}
