// ==UserScript==
// @name         View current page in "reader mode", archived, or paywall-free with a keyboard shortcut
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Use a configurable keyboard shortcut to switch to a "reader mode" version, archived version, or **paywall-free** version of the page you are on.
// @author       https://greasyfork.org/en/users/728793-keyboard-shortcuts
// @icon         https://i.imgur.com/rmonxjc.png
// @match        http*://*/*
// @grant        none
// @license      MIT
// ==/UserScript==

/* jshint esversion: 6 */

/**
 *        READ THIS TO CONFIGURE THE SHORTCUTS
 *        ====================================
 *
 * By default, the shortcuts are:
 *     Alt-a for Archive.is
 *     Ctrl-Alt-a for WaybackMachine (archive.org)
 *     Alt-f for 12-Foot (specialized in removing paywalls)
 *
 * To change them to something else, edit the entries under the line that says 'use strict'.
 * For each shortcut you'll need to set a _letter_ corresponding to a key on your keyboard that triggers
 * the shortcut, and you'll also need to set the modifiers associated with it. Modifiers are other keys
 * you also press to activate the shortcut, like alt, ctrl, shift, etc. The "meta" modifier is the Windows key
 * on most PC keyboards, and the Command key (⌘) on macOS.
 *
 * For example, if you want the page to be converted with 12ft.io when you press ctrl-shift-k,
 * you'll need to edit the config with the 12ft.io prefix to read:
 *      {
 *          prefix: 'https://12ft.io/',
 *          letter: 'k',
 *          needsModifierShift: true,
 *          needsModifierCtrl: true,
 *      },
 *
 * Add `encodeURI: true` to a config block to URL-encode the current URL before prefixing it (most configs do not need it).
 */

(function() {
    'use strict';

    // change this to true if you are a subscriber of the "12ft.io" service and have a license key
    const USE_12FT_PRO_MODE = false;

    /* change the values below ⬇⬇⬇⬇ to configure the shortcuts */
    const SHORTCUT_CONFIGS = [
        { // view newest archived version of the page
            prefix: 'https://archive.is/newest/',
            letter: 'a',
            needsModifierAlt: true,
        },
        { // also view most recent archived version of the page
            prefix: 'https://web.archive.org/web/0/',
            letter: 'a',
            needsModifierAlt: true,
            needsModifierCtrl: true,
        },
        { // 12ft.io: "show me a 10-foot paywall, I'll show you a 12-foot ladder". Bypass many paywalls.
            prefix: (USE_12FT_PRO_MODE ? 'https://12ft.io/proxy?ref=pro&q=' : 'https://12ft.io/proxy?q='),
            letter: 'f',
            needsModifierAlt: true,
            encodeURI: true,
        },
    ];
    /* change the values above ⬆⬆⬆⬆ to configure the shortcuts */

    function isEnabled(obj, key) {
        return key in obj && obj[key] === true;
    }

    function handleEvent(e) { // this function is called when a keys are pressed on the keyboard
        if(e.target.getAttribute("contenteditable") == "true") { // ignore shortcuts when a document is being edited (like Google Docs or Wikipedia for example)
            return;
        }
        for (const shortcut of SHORTCUT_CONFIGS) { // go over each configured shortcut
            if (!shortcut.letter) { // validate that there is a letter
                console.error('No shortcut letter configured!');
            } else if (shortcut.letter.length != 1) { // and that there is only *one* letter per shortcut
                console.error(`Invalid shortcut letter configured: '${shortcut.letter}' – expected a single letter, found ${shortcut.letter.length} instead`);
            } else { // then check if the keyboard event matched a particular configured shortcut
                const expectedKeyCode = 'Key' + shortcut.letter.toUpperCase();
                const prefix = shortcut.prefix;
                if (!location.href.startsWith(prefix) &&
                    e.code === expectedKeyCode &&
                    e.altKey === isEnabled(shortcut, 'needsModifierAlt') &&
                    e.shiftKey === isEnabled(shortcut, 'needsModifierShift') &&
                    e.ctrlKey === isEnabled(shortcut, 'needsModifierCtrl') &&
                    e.metaKey === isEnabled(shortcut, 'needsModifierMeta')) { // matched!

                    const newLocation = prefix + (isEnabled(shortcut, 'encodeURI') ? encodeURI(location.href) : location.href);
                    console.log(`Shortcut matched, sending to ${newLocation}`);
                    e.preventDefault();
                    location.href = newLocation;
                    return;
                }
            }
        }
    }

    // register the handler function for keyboard events
    addEventListener("keypress", handleEvent);
    addEventListener("keydown", handleEvent);

})();
