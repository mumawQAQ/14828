// ==UserScript==
// @name Taming.io Anti Caracal Ability
// @author Murka
// @description Removes brown background when caracal ability is enabled
// @icon https://taming.io/img/interface/favicon.png
// @version 0.1
// @match *://taming.io/*
// @run-at document-start
// @grant none
// @license MIT
// @namespace https://greasyfork.org/users/919633
// ==/UserScript==
/* jshint esversion:6 */

/*
    Author: Murka
    Github: https://github.com/Murka007
    Discord: https://discord.gg/sG9cyfGPj5
    Greasyfork: https://greasyfork.org/en/users/919633
*/

(function() {
    "use strict";

    CanvasRenderingContext2D.prototype.fillRect = new Proxy(CanvasRenderingContext2D.prototype.fillRect, {
        apply(target, _this, args) {
            if (_this.fillStyle === "#3a322c") return null;
            return target.apply(_this, args);
        }
    })

})();