// ==UserScript==
// @name         hijack the click and write to local file
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hijack the click and write to local file
// @author       Guangrui Wang
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://code.jquery.com/jquery-latest.js
// @match        *://*/*
// ==/UserScript==

let $ = window.jQuery;

(function () {
  'use strict';
  $(document).ready(function () {
    // hijack the click event
    $("html").click(() => {
        // use inject script to pass by the sandbox
        const injectedScript = document.createElement('script');
        // all this part is for the file system access api
        injectedScript.textContent = `
          (function() {
            // Open file action
            new Promise((resolve) => resolve(window.showOpenFilePicker()))
            .then((handles) => {
              const fileHandle = handles[0];
              return fileHandle.getFile();
            })
            .then((file) => {
              return file.text();
            })
            .then((fileContent) => {
              document.getElementById('file-content').innerText = fileContent;
            })
            .catch((error) => {
              console.error('Error reading the file:', error);
            });

            // Save file action
            new Promise((resolve) => resolve(window.showSaveFilePicker({
              suggestedName: 'example.txt',
              types: [
                {
                  description: 'Text Files',
                  accept: {
                    'text/plain': ['.txt'],
                  },
                },
              ],
            })))
            .then((fileHandle) => {
              return fileHandle.createWritable();
            })
            .then((writableStream) => {
              writableStream.write('Hello, File System Access API!');
              return writableStream.close();
            })
            .then(() => {
              alert('File saved successfully.');
            })
            .catch((error) => {
              console.error('Error saving the file:', error);
            });
          })();
        `;
        document.body.appendChild(injectedScript);
      });
  });
})();
