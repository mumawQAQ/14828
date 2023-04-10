You can check the sandbox.js for the code of the sandbox.

There three sandboxed environments:
- raw
- JavaScript
- DOM

Base on the document of the Tampermonkey, `raw` means the script is running in the page context. `JavaScript` means the script needs access to unsafeWindow. `DOM` means the script only needs access to the DOM and no direct access to unsafeWindow. In this mode the script is running in the extension context. They also claim that in this mode the script is able to have the almost full extension permissions even modify and install new userscripts.

!!important because the sanbox feature is experimental. This feature is not fully tested by me. For more information, please check the 4.18.0 version of the Tampermonkey. https://www.tampermonkey.net/changelog.php?version=4.18.0

By the document of the Tampermonkey, the sandbox is disabled by default if you use the @grant none. However, if you use the @grant follow by anything else, the sandbox is enabled in to raw.