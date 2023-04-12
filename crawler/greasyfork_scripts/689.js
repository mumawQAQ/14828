// ==UserScript==
// @name        Google Docs Dark Night Mode Theme - semi-dark
// @namespace   english
// @description Google Docs Dark Night Mode Theme - semi-dark - not the paper
// @include     http*://*docs.google.com*
// @version     1.6
// @run-at document-end
// @grant       GM_addStyle
// ==/UserScript==

 

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '                                       #docs-editor {/*\n*//*\n*/    background: #3b3b3b  !important  ;/*\n*/ /*\n*//*\n*/}#docs-editor-container {/*\n*//*\n*/    background: #2a2a2a  !important  ;/*\n*/ /*\n*//*\n*/}body {/*\n*//*\n*/    background-color: #292929  !important  ;/*\n*/    /*\n*//*\n*/}#contents{background-color: #292929  !important  ;}#docs-chrome {/*\n*/    background: #d8d8d8  !important  ;/*\n*/  /*\n*/}.docs-material #docs-header .docs-titlebar-buttons {/*\n*/     background-color: #d8d8d8  !important  ;/*\n*/  /*\n*/}.docs-material #docs-toolbar-wrapper {/*\n*/    border-top: 1px solid #c9c9c9  !important  ;/*\n*/    border-bottom: 1px solid #c9c9c9  !important  ;/*\n*/    background: #c9c9c9  !important  ;/*\n*/  /*\n*/}.docs-material .goog-toolbar-button, .docs-material .goog-toolbar-combo-button, .docs-material .goog-toolbar-menu-button {/*\n*/   /*\n*/    background-color: #e6e6e6  !important  ;/*\n*/   /*\n*/} .docs-title-input {   background-color: #bdbdbd;} .docs-horizontal-ruler {/*\n*/    border-bottom: 1px solid #656565 !important ;/*\n*/ }.docs-ruler-background-inner {/*\n*/    background-color: #ddd !important ;/*\n*/ }.kix-page-paginated {/*\n*/  /*\n*/    box-shadow: 0 0 0 0.75pt #000,0 0 3pt 0.75pt #0003 !important ;/*\n*/}                             ';
document.getElementsByTagName('head')[0].appendChild(style);




