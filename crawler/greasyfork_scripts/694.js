// ==UserScript==
// @name         NotionEnhancer
// @namespace    https://github.com/Kur0x/notion-enhancer-tampermonkey
// @version      1.0
// @description  NotionEnhancer tampermonkey version.
// @author       KuroX
// @match        https://www.notion.so/*
// @grant        GM_addStyle
// ==/UserScript==

/* License + Copyright Notice
********************************************************************************************
MIT License
Copyright (c) 2020 KuroX
*/

(function() {
    'use strict';
    GM_addStyle(`
/* custom css here */


/* table_view_hide_new_line */
.notion-table-view-add-row{display:none!important}
/* table_view_hide_new_line */
.notion-peek-renderer>div:nth-child(2){max-width:1205px!important}

/*
 * notion-enhancer
 * (c) 2020 dragonwocky <thedragonring.bod@gmail.com>
 * (c) 2020 TarasokUA
 * (https://dragonwocky.me/) under the MIT license
 */

/* titlebar */
.notion-topbar {
  height: 55px !important;
}
.window-dragarea {
  height: 10px;
  width: 100%;
}
.notion-light-theme .window-dragarea {
  background: #e6e6e6;
}
.notion-dark-theme .window-dragarea {
  background: #272d2f;
}
.window-buttons-area {
  display: flex;
  align-items: center;
  font-size: 14px;
}
@media (max-width: 760px) {
  .notion-topbar {
    height: 95px !important;
  }
  .notion-topbar > :nth-child(2) {
    display: grid !important;
    height: 85px !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .window-buttons-area {
    grid-row: 1;
    grid-column: 9 / span end;
    justify-content: flex-end;
  }
  .notion-topbar-breadcrumb {
    grid-row: 2;
    grid-column: 1 / span 8;
  }
  .notion-topbar-actions {
    grid-row: 2;
    grid-column: 9 / span end;
    justify-content: flex-end;
  }
}
/* window control buttons */
.window-button {
  background: transparent;
  border: 0;
  margin: 0px 0px 0px 9px;
  width: 32px;
  line-height: 26px;
  border-radius: 4px;
  font-size: 16px;
  transition-duration: 0.2s;
  cursor: default; /* -- not sure? on windows native window buttons have the default cursor,
                         but other buttons in the titlebar have cursor: pointer */
}
.window-button svg {
  margin-top: 8px;
  width: 14px;
  height: 14px;
}
.window-button svg path {
  fill: currentColor;
}
.window-button svg line {
  stroke: currentColor;
}
.window-button.btn-close:hover {
  background: #e81123 !important;
}
.window-button.btn-close:hover svg line {
  stroke: white;
}

/* window control buttons: light theme */
.notion-light-theme .window-button {
  font-weight: bold;
}
.notion-light-theme .window-button:hover {
  background: rgb(239, 239, 239);
}

/* window control buttons: dark theme */
.notion-dark-theme .window-button:hover {
  background: rgb(71, 76, 80);
}

/* scrollbar: pointer */
.notion-scroller {
  cursor: auto;
}
/* scrollbar: size */
::-webkit-scrollbar {
  width: 8px; /* for vertical */
  height: 8px; /* for horizontal */
}
/* scrollbar: light theme */
.notion-light-theme ::-webkit-scrollbar-corner {
  background-color: transparent; /* for overlap */
}
.notion-light-theme ::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #d9d8d6;
  border: 1px solid #cacac8;
}
.notion-light-theme ::-webkit-scrollbar-thumb:hover {
  background: #cacac8;
}
/* scrollbar: dark theme */
.notion-dark-theme ::-webkit-scrollbar-corner {
  background-color: transparent; /* for overlap */
}
.notion-dark-theme ::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #505457;
}
.notion-dark-theme ::-webkit-scrollbar-thumb:hover {
  background: #696d6f;
}
/* end notion enhancer */

`)
})();