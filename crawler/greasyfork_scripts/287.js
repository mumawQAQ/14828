// ==UserScript==
// @name Brainly++
// @namespace https://github.com/sirmonteiro
// @version 1.0.1
// @description Remove the limitation of viewing answers in Brainly
// @description:pt-BR Remove a limitação de ver respostas no Brainly
// @author SirMonteiro
// @icon https://i.imgur.com/RnMZuyj.png
// @match *://*brainly.in/*
// @match *://*brainly.com/*
// @match *://*brainly.it/*
// @match *://*brainly.co.id/*
// @match *://*brainly.ro/*
// @match *://*brainly.ph/*
// @match *://*brainly.lat/*
// @match *://*brainly.pl/*
// @match *://*brainly.com.br/*
// @grant GM.addStyle
// ==/UserScript==
GM.addStyle(`
.js-react-bottom-banner, .js-react-brainly-plus-box-aside, .sg-overlay, .brn-cookie-policy-wrapper, .section--3Yobl {
  display: none;
}

.brn-qpage-layout--aligned, .brn-qpage-layout {
  grid-template-columns: 700px;
}
`);

localStorage.setItem("flexible-funnel-last-access-data", 0);
localStorage.setItem("flexible-funnel-cycle-start", 0);
