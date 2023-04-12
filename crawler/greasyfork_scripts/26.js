// ==UserScript==
// @name         Egg Finder
// @namespace    http://lazerpent.com/
// @version      1.0.0
// @description  Makes finding eggs a little bit easier...
// @author       Lazerpent [2112641]
// @match        https://www.torn.com/*
// ==/UserScript==
'use strict';

window.addEventListener('load', () => {
    const egg = document.getElementById('easter-egg-hunt-root');
    if (egg) {
      alert('There appears to be an egg on this page!');

      function moveEgg() {
        const buttons = egg.querySelectorAll('button');
        if (buttons.length === 0) {
          setTimeout(moveEgg, 100);
          return;
        }
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          button.style.top = '40%';
          button.style.left = '40%';
          button.style.height = '20%';
          button.style.width = '20%';
          button.style.position = 'fixed';
          button.style.border = '5px solid red';

          const children = button.children;

          children[0].style.height = '100%';

          const particles = children[children.length - 1];
          particles.style.left = '0';
          particles.style.width = '100%';
          particles.style.height = '100%';
        }
      }

      moveEgg();
    }
  }
);