// ==UserScript==
// @name         "Free" Roblox Items
// @namespace    https://spin.rip
// @version      1.5
// @description  Trick your friends into thinking you can get anything for free!
// @author       Spinfal
// @match        https://www.roblox.com/bundles/*
// @match        https://www.roblox.com/catalog/*
// @match        https://www.roblox.com/users/*
// @match        https://www.roblox.com/games/*
// @match        https://web.roblox.com/bundles/*
// @match        https://web.roblox.com/catalog/*
// @match        https://web.roblox.com/users/*
// @match        https://web.roblox.com/games/*
// @grant        none
// @license      GNU GPLv2
// ==/UserScript==

(function() {
    'use strict';

    if (location.pathname.includes('bundles') || location.pathname.includes('catalog')) {
        const ItemId = location.pathname.split('/')[2];
        const PurchaseButton = document.querySelector('.PurchaseButton');
        PurchaseButton.setAttribute('data-expected-price', '0');
        PurchaseButton.setAttribute('data-button-action', 'get');
        PurchaseButton.removeAttribute('data-se');
        window.onload = () => {
            PurchaseButton.addEventListener('click', () => {
                setTimeout(() => {
                    const TextRobux = document.querySelector('.text-robux');
                    TextRobux.innerHTML = `<span class="icon-robux-16x16"></span>${document.querySelector('.text-robux-lg').innerText}`;
                }, 50);
            });
        }

        function setItemStatus() {
            document.querySelector('.action-button').innerHTML = '<div class="action-button"><a id="edit-avatar-button" href="https://www.roblox.com/my/avatar" class="btn-control-md" data-button-action="avatar"><span class="icon-nav-charactercustomizer"></span></a></div>';
            document.querySelector('.price-container').innerHTML = '<div class="clearfix price-container"><div class="price-container-text"><div class="item-first-line">This item is available in your inventory.</div></div><div class="action-button"><a id="edit-avatar-button" href="https://www.roblox.com/my/avatar" class="btn-control-md" data-button-action="avatar"><span class="icon-nav-charactercustomizer"></span></a></div></div>';
            setTimeout(() => {
                const chck = document.createElement('div');
                chck.setAttribute('class', 'label-checkmark');
                chck.innerHTML = '<span class="icon-checkmark-white-bold"></span>';
                const spn = document.createElement('span');
                spn.innerText = 'Item Owned';

                const TextLabel = document.querySelector('.text-label');
                TextLabel.append(chck);
                TextLabel.append(spn);
                const wear = document.createElement('a');
                wear.setAttribute('class', 'rbx-menu-item item-context-menu');
                wear.setAttribute('data-toggle', 'popover');
                wear.setAttribute('data-trigger', 'focus');
                wear.setAttribute('data-bind', 'popover-content');
                wear.setAttribute('data-original-title', '');
                wear.setAttribute('title', '');
                document.querySelector('.section-content').appendChild(wear);
                const wearIcon = document.createElement('span');
                wearIcon.setAttribute('class', 'icon-more');
                document.querySelector('.item-context-menu').appendChild(wearIcon);
            }, 1000);
        }
        if (sessionStorage.getItem(ItemId) === 'itemOwned') {
            setItemStatus();
        }

        document.getElementById('confirm-btn').addEventListener('click', function() {
            const click = setInterval(() => {
                document.querySelector('#simplemodal-overlay').addEventListener('click', () => { clearInterval(click); });
                document.querySelector('#simplemodal-overlay').click();
            }, 0);
            sessionStorage.setItem(ItemId, 'itemOwned');
            setItemStatus();
        });
        const spin = document.createElement('div');
        spin.setAttribute('class', 'font-header-1 text-subheader text-label text-overflow field-label');
        spin.innerHTML = '<i>Modded by <br>Spin</i>';
        document.getElementById('item-details').appendChild(spin);
    }

    // needs to be improved
    //if (window.location.href.includes('games')) {
    //    let hasRun = false;
    //    document.getElementById('tab-store').addEventListener('click', function() {
    //        if (hasRun === false) {
    //            var spincred = document.createElement('p');
    //            spincred.innerHTML = '<i>Modded by Spin</i>';
    //            document.getElementsByClassName('col-xs-12')[2].append(spincred);
    //            setTimeout(function() {
    //                for (var x = 0; x < 999; x++) {
    //                    document.getElementsByClassName('PurchaseButton')[x].setAttribute('data-expected-price', '0');
    //                    document.getElementsByClassName('PurchaseButton')[x].setAttribute('data-button-action', 'get');
    //                    document.getElementsByClassName('PurchaseButton')[x].removeAttribute('data-se');
    //                    console.log(`set prices - ${x}`);
    //                }
    //            }, 600);
    //            hasRun = true;
    //        }
    //    });
    //
    //    document.getElementById('confirm-btn').addEventListener('click', function() {
    //        var click = setInterval(function() {
    //            document.getElementById('simplemodal-overlay').addEventListener('click', function() { clearInterval(click); });
    //            document.getElementById('simplemodal-overlay').click();
    //            console.log('hi');
    //            sessionStorage.setItem(window.location.href, 'itemOwned');
    //        }, 100);
    //        setItemStatus();
    //    });
    //}
})();
