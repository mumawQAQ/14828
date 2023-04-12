// ==UserScript==
// @name Moomoo.io Katana musket (All items unlocked)
// @author Murka
// @description Unlocks all possible weapons and items in the upgrade bar
// @icon https://moomoo.io/img/favicon.png?v=1
// @version 0.1
// @match *://moomoo.io/*
// @match *://*.moomoo.io/*
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

    const log = console.log;
    Function.prototype.call = new Proxy(Function.prototype.call, {
        apply(target, _this, args) {
            try {
                if (args[1].i === 21) {

                    const call = args[3];
                    args[3] = (id) => {
                        const data = call(id);
                        if (id === 45) {
                            data.weapons.map(item => item.pre && (item.pre = null) || item);
                            data.list.map(item => item.pre && (item.pre = null) || item);
                            args[3] = call;
                            Function.prototype.call = target;
                        }
                        return data;
                    }

                }
            } catch(e){}
            return target.apply(_this, args);
        }
    })
})();