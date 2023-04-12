// ==UserScript==
// @name    Publication Auto PDF
// @name:zh-CN  SCI文献PDF直达
// @version 0.4.0
// @author  sincostandx
// @description Automatically jumps to PDF when you visit a journal article abstract page. Also includes a utility to copy or download citation info.
// @description:zh-CN  访问SCI文献摘要页时自动跳转至PDF，附带文献摘录工具
// @include https://www.sciencedirect.com/science/article/*
// @include https://onlinelibrary.wiley.com/doi/*
// @include https://*.onlinelibrary.wiley.com/doi/*
// @include https://pubs.acs.org/doi/*
// @include https://www.tandfonline.com/doi/*
// @include https://www.beilstein-journals.org/*
// @include https://www.eurekaselect.com/*/article*
// @include https://pubs.rsc.org/en/Content/*
// @include https://link.springer.com/article*
// @include https://aip.scitation.org/doi/*
// @include https://www.nature.com/articles*
// @include https://*.sciencemag.org/content*
// @include https://journals.aps.org/*/abstract/10*
// @include https://www.nrcresearchpress.com/doi/10*
// @include https://iopscience.iop.org/article/10*
// @include https://www.cell.com/*/fulltext/*
// @include https://journals.lww.com/*
// @include https://*.biomedcentral.com/articles/*
// @include https://journals.sagepub.com/doi/*
// @include https://academic.oup.com/*/article/*
// @include https://www.karger.com/Article/*
// @include https://www.cambridge.org/core/journals/*/article/*
// @include https://www.annualreviews.org/doi/*
// @include https://www.jstage.jst.go.jp/article/*
// @include https://www.hindawi.com/journals/*
// @include https://www.cardiology.theclinics.com/article/*
// @include https://www.liebertpub.com/doi/*
// @include https://thorax.bmj.com/content/*
// @include https://journals.physiology.org/doi/*
// @include https://www.ahajournals.org/doi/*
// @include https://dl.acm.org/doi/*
// @include https://*.asm.org/content/*
// @include https://content.apa.org/*
// @include https://www.thelancet.com/journals/*/article/*
// @include https://jamanetwork.com/journals/*
// @include https://*.aacrjournals.org/content/*
// @include https://royalsocietypublishing.org/doi/*
// @include https://journals.plos.org/*/article*
// @include https://*.psychiatryonline.org/doi/*
// @include https://www.osapublishing.org/*/abstract.cfm*
// @include https://www.thieme-connect.de/products/ejournals/*
// @include https://journals.ametsoc.org/*/article/*
// @include https://www.frontiersin.org/articles/*
// @include https://www.worldscientific.com/doi/*
// @include https://www.nejm.org/doi/*
// @include https://ascopubs.org/doi/*
// @include https://www.jto.org/article/*
// @include https://www.jci.org/articles/*
// @grant   GM.xmlHttpRequest
// @grant   GM.getValue
// @grant   GM.setValue
// @run-at  document-start
// @namespace https://greasyfork.org/users/171198
// ==/UserScript==

"use strict";

var tit=null; //title
var doi=null;
var pdf=null; //pdf url

var sty=""; // citation text style

// attempt to extract DOI from URL
function getCrudeDOI() {
  const l = location.pathname.match(/(^.+doi\/)([^/]+\/)?(10\.[^/]+\/[^/]+)/);
  if (l === null) return [null, null];
  const d = l[l.length-1];
  return [d, l[1] + "pdf/" + d];
}

const [doiCrude, pdfPathname] = getCrudeDOI();

// determine if we need to redirect to PDF
let jump = sessionStorage.getItem("%" + doiCrude) === null &&
                                        sessionStorage.getItem(location.pathname) === null;
// ID for clearInterval()
let intervalID;

// For sites in "shortcutSites" modify the URL directly.
// Otherwise, load PDF link from meta data or DOM.
if (doiCrude !== null) {
  sessionStorage.setItem("%" + doiCrude, "1");
  if (jump && location.pathname !== pdfPathname) {
    const shortcutSites = ["acs", "aps", "wiley", "scitation", "tandfonline", "sagepub", "annualreviews", "liebertpub",
                           "physiology", "ahajournals", "acm", "royalsocietypublishing", "psychiatryonline", "thieme",
                           "worldscientific", "nejm", "ascopubs"];
    const hostname = location.hostname;
    if (shortcutSites.some(a=>hostname.includes(a))) {
      location.pathname = pdfPathname;
    }
  } else {
    intervalID = setInterval(checkLoaded, 100);
  }
} else {
  sessionStorage.setItem(location.pathname, "1");
  intervalID = setInterval(checkLoaded, 100);
}

function checkLoaded() {
  if (document.body !== null && document.body.innerHTML.length !== 0) {
    clearInterval(intervalID);
    loadMeta();
  }
}

function loadMeta() {
  const titmeta=["dc.title","citation_title","wkhealth_title"];
  const doimeta=["citation_doi","dc.identifier","dc.source"];
  const pdfmeta=["citation_pdf_url","wkhealth_pdf_url"];
  const l=document.getElementsByTagName("meta");
  for(let i=0; i<l.length; ++i) {
    let n=l[i].getAttribute("name");
    if (n===null) continue;
    n=n.toLowerCase();
    if (tit===null && titmeta.includes(n)) {
      tit = l[i].getAttribute("content");
      continue;
    }
    if (doi===null && doimeta.includes(n)) {
      const d = l[i].getAttribute("content");
      if (d.includes("10.")) {
        if (d.includes("doi")) {
          doi=d.slice(d.indexOf("10."));
        } else {
          doi=d;
        }
        continue;
      }
    }
    if (pdf===null && pdfmeta.includes(n)) {
      pdf = l[i].getAttribute("content");
    }
  }
  if (jump && location.hostname.includes("sciencedirect")) {
    if (loadElsevierPDF()) return;
  }
  console.log(doi);
  console.log(pdf);
  if (jump && pdf !== null && location.href !== pdf) {
    location.href = pdf;
  } else {
    if (doi===null) {
      doi = doiCrude;
      if (doi===null) return;
    }
    if (tit===null) tit="Unknown Title";
    if (pdf===null) pdf=pdfPathname;
    toolbox(tit,doi,pdf);
  }
}

// newbr, newinput, newtag are util functions to create toolbox elements.
function newbr(parent) {
  parent.appendChild(document.createElement("br"));
}

function newinput(parent,type,value,onclick) {
  const i = document.createElement("input");
  i.type = type;
  i.value = value;
  if (onclick!==null) {
    i.addEventListener("click", onclick, false);
  }
  i.className = "toolbox";
  parent.appendChild(i);
  return i;
}

function newtag(parent,tag,text) {
  const i = document.createElement(tag);
  if (text !== null) {
    i.innerHTML = text;
  }
  i.className = "toolbox";
  parent.appendChild(i);
  return i;
}

function loadElsevierPDF() {
  let json = null;
  let pdflink = null;
  while (json === null) {
    json = document.querySelector('script[type="application/json"]');
  }
  try {
    pdflink = JSON.parse(json.innerHTML).article.pdfDownload.linkToPdf;
  } catch(e) {
    return false;
  }
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    try {
      if (this.readyState == 4 && this.status == 200) {
        const doc = new DOMParser().parseFromString(this.response,"text/html");
        const href = doc.querySelector("#redirect-message > p > a").href;
        sessionStorage.setItem(doi,href);
        location.href = href;
      }
    }
    catch(e) {
      console.log(e);
      location.href = pdflink;
    }
  }
  xhr.open("GET", pdflink, true);
  xhr.send();
  return true;
}

function toolbox(tit,doi,pdf) {
  const div = document.createElement("div");
  div.style = `
z-index: 2147483647;
position: fixed;
right: 10px;
top: 50%;
transform: translate(0, -50%);
border: 2px groove black;
background: white;
box-shadow: 6px 6px 3px grey;`;

  const sheet = document.createElement("style")
  sheet.innerHTML = `
.toolbox {
	font-size: small !important;
  font-family: sans-serif !important;
  margin-bottom: 4px !important;
  margin-top: 0 !important;
	display: initial !important;
  line-height: initial !important;
}

input.toolbox, select.toolbox {
	background-image: none !important;
	width: auto;
	max-height: none;
  height: initial;
}

textarea.toolbox, input.toolbox[type=text] {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	width: 11em;
  padding: 0.5rem;
  border-style: solid;
}

a.toolbox:hover {
	color: #006db4;
}

a.toolbox {
	color: #10147e;
}

input.toolbox[type=button]:hover {
	background: #006db4;
}

input.toolbox[type=button] {
	padding: 4px 8px;
  background: #10147e;
  color: white;
	border-radius: 4px;
	border: none;
	cursor: pointer;
}

[tooltip]:before {
	position: absolute;
	opacity: 0;
}

[tooltip]:hover:before {
	content: attr(tooltip);
	opacity: 1;
	color: black;
	background: white;
	padding: 2px;
	border: 1px groove black;
	white-space: nowrap;
	overflow: hidden;
	right: 0;
	margin-top: -25pt;
}

h2.toolbox {
  font-size: large !important;
}
`;
  div.appendChild(sheet);

  // Hide button
  const hide_btn_parent = newtag(div,"div",null);
  hide_btn_parent.style = "display: flex !important; justify-content: flex-end; padding-right: 10px;";
  const hide_btn = newtag(hide_btn_parent,"a","✖");
  hide_btn.style = "cursor: pointer; font-size: large !important; text-decoration: none;";
  hide_btn.addEventListener("click", function(){div.remove();}, false);

  // DOI textbox and copy button
  const txt_doi = newinput(div,"text",doi,null);
  newbr(div);
  newinput(div,"button","Copy",function(){txt_doi.select();document.execCommand("Copy");});
  newbr(div);newbr(div);

  // info textbox and copy button
  const info = tit+"\t"+doi;
  const txt_inf = newinput(div,"text",info,null);
  newbr(div);
  newinput(div,"button","Copy",function(){txt_inf.select();document.execCommand("Copy");});
  newbr(div);newbr(div);

  // bibtex button
  const txt_bib = newtag(div,"textarea",null);
  txt_bib.style = "resize: none; display: none !important;";
  newbr(div);
  const btn_bib = newinput(div,"button","Copy BibTeX",loadBib);
  newbr(div);
  function loadBib() {
    btn_bib.disabled = true;
    btn_bib.value = "Loading";
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://dx.doi.org/" + doi,
      headers: {
        "Accept": "application/x-bibtex"
      },
      onload: function(response) {
        if (response.readyState == 4 && response.status == 200) {
          const bib = response.responseText;
          txt_bib.value = bib;
          txt_bib.style.display = "";
          txt_bib.select();
          document.execCommand("Copy");
          btn_bib.value = "Copy BibTeX";
        } else {
          btn_bib.value = "Reload BibTeX";
        }
        btn_bib.disabled = false;
      },
      onerror: function(response) {
        btn_bib.value = "Reload BibTeX";
        btn_bib.disabled = false;
      }
    });
  }
  // Text button
  const btn_txt = newinput(div,"button","Copy Text",loadTxt);
  function loadTxt() {
    if (sty==="") {
      setstyle();
      return;
    }
    btn_txt.disabled = true;
    btn_txt.value = "Loading";
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://dx.doi.org/" + doi,
      headers: {
        "Accept": "text/x-bibliography; style="+sty
      },
      onload: function(response) {
        if (response.readyState == 4 && response.status == 200) {
          const bib = response.responseText;
          txt_bib.value = bib;
          txt_bib.style.display = "";
          txt_bib.select();
          document.execCommand("Copy");
          btn_txt.value = "Copy Text";
        } else {
          btn_txt.value = "Reload Text";
        }
        btn_txt.disabled = false;
      },
      onerror: function(response) {
        btn_txt.value = "Reload Text";
        btn_txt.disabled = false;
      }
    });
  }
  // text style link
  const stylink = newtag(div,"a","Style");
  stylink.addEventListener("click",setstyle,false);
  stylink.style.cursor = "pointer";
  newbr(div);

  function setstyle() {
    const div = document.createElement("div");
    div.style = `
z-index: 2147483647;
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border: 2px groove black;
background: white;
padding: 20px;
box-shadow: 10px 10px 5px grey;`;

    newtag(div,"h2","Choose a citation style for text references:");
    const sel = newtag(div,"select",null);
    sel.size = 15;
    sel.style.minWidth = "600px";
    newbr(div);
    newtag(div,"p","This citation style will be saved as default.").style = "margin-top: 5px !important";
    newbr(div);

    const btns = newtag(div,"div",null);
    btns.style = "display: block !important; text-align: center;";
    // OK button
    newinput(btns,"button","OK",function() {
      sty = sel.value;
      GM.setValue("sty",sty);
      document.body.removeChild(div);
      loadTxt();
    });
    // cancel button
    newinput(btns,"button","Cancel",function(){document.body.removeChild(div);}).style.marginLeft = "1em";

    // load styles
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://citation.crosscite.org/styles",
      onload: function(response) {
        if (response.readyState == 4 && response.status == 200) {
          const l = JSON.parse(response.responseText);
          for (let i=0; i<l.length; i++) {
            const x = document.createElement("option");
            x.text = l[i];
            sel.add(x);
          }
          if (sty!=="") {
            sel.value = sty;
          } else {
            sel.selectedIndex = 0;
          }
        } else {
          alert("Cannot load style list.");
          document.body.removeChild(div);
        }
      },
      onerror: function(response) {
        alert("Cannot load style list.");
        document.body.removeChild(div);
      }
    });

    document.body.appendChild(div);
  }

  // RIS link
  const rislink = newtag(div,"a","Download RIS");
  rislink.addEventListener("click",loadris);
  rislink.style.cursor = "pointer";
  function loadris() {
    rislink.removeEventListener("click",loadris);
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://dx.doi.org/" + doi,
      headers: {
        "Accept": "application/x-research-info-systems"
      },
      onload: function(response) {
        if (response.readyState == 4 && response.status == 200) {
          const ris = response.responseText;
          const blob = new Blob([ris], {type: "octet/stream"});
          const url = URL.createObjectURL(blob);
          rislink.href = url;
          rislink.download = doi.replace("/","@")+".ris";
          rislink.click();
        } else {
          alert("Unable to download RIS.");
          rislink.addEventListener("click",loadris);
        }
        btn_txt.disabled = false;
      },
      onerror: function(response) {
        alert("Unable to download RIS.");
        rislink.addEventListener("click",loadris);
      }
    });
  }

  newbr(div);newbr(div);

  // PDF link
  if (pdf === null && location.hostname.includes("sciencedirect")) {
    pdf = sessionStorage.getItem(doi);
    if (pdf === null) {
      const pdflink = newtag(div,"a","PDF");
      pdflink.addEventListener("click",()=>{if (!loadElsevierPDF()) alert("Failed to load PDF link");});
      pdflink.style.cursor = "pointer";
      newbr(div);newbr(div);
    }
  }
  if (pdf !== null) {
    const pdflink = newtag(div,"a","PDF");
    pdflink.href = pdf;
    newbr(div);newbr(div);
  }

  // Sci-Hub link
  const scihubURL = "https://sci-hub.st/";
  const scihublink = newtag(div,"a","Sci-Hub");
  if (doi !== null) {
    scihublink.href = scihubURL + doi;
  } else {
    scihublink.href = scihubURL + location.href;
  }
  newbr(div);newbr(div);

  document.body.appendChild(div);

  GM.getValue("sty","").then(function(v){sty=v;stylink.setAttribute("tooltip",v==="" ? "You have not set a reference style" : "Current style: "+v);});
}
