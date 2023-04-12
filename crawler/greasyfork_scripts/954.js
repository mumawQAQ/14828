// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt MIT
/* eslint-env browser, greasemonkey */
/* jshint asi: true, esversion: 11 */
/* globals zip, saveAs */

// ==UserScript==
// @name               VGMLoaderX
// @name:de            VGMLoaderX
// @name:en            VGMLoaderX
// @namespace          sun/userscripts
// @version            1.0.15
// @description        Automatically downloads albums from KHInsider without an account.
// @description:de     Lädt Alben von KHInsider automatisch und ohne Account herunter.
// @description:en     Automatically downloads albums from KHInsider without an account.
// @compatible         chrome
// @compatible         edge
// @compatible         firefox
// @compatible         opera
// @compatible         safari
// @homepageURL        https://codeberg.org/sun/userscripts
// @supportURL         https://codeberg.org/sun/userscripts/issues/new
// @contributionURL    https://liberapay.com/sun
// @contributionAmount €1.00
// @author             Sunny <roesch.eric+userscripts@protonmail.com>
// @include            https://downloads.khinsider.com/game-soundtracks/album/*
// @match              https://downloads.khinsider.com/game-soundtracks/album/*
// @connect            vgmsite.com
// @run-at             document-end
// @inject-into        page
// @grant              GM.xmlHttpRequest
// @grant              GM_xmlhttpRequest
// @noframes
// @require            https://cdn.jsdelivr.net/gh/gildas-lormeau/zip.js@92f1d6373cfd6230fa8702b3944ec24089b2c5ab/dist/zip.min.js
// @require            https://cdn.jsdelivr.net/gh/eligrey/FileSaver.js@5bb701bd6ea05a02836daf8ef88ec350a1dd4d83/dist/FileSaver.min.js
// @require            https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @icon               https://codeberg.org/sun/userscripts/raw/branch/main/icons/VGMLoaderX.ico
// @copyright          2021-present, Sunny
// @license            MIT; https://codeberg.org/sun/userscripts/src/branch/main/LICENSE
// ==/UserScript==

// ==OpenUserJS==
// @author             TheLastZombie
// ==/OpenUserJS==

(function () {
  "use strict";

  document.querySelectorAll('a[href^="/cp/add_album/"]').forEach((x) => {
    x.addEventListener("click", (e) => {
      e.preventDefault();

      let format = Array(
        ...document.querySelectorAll("#songlist_header th[align=right]")
      ).map((x) => x.textContent);
      if (format.length === 1) {
        format = format[0];
      } else {
        const input = prompt(
          "Please enter your desired format (one of " +
            format.join(", ") +
            "):",
          format[0]
        );

        if (!input) return;
        if (!format.includes(input.toUpperCase())) {
          format = format[0];
          alert("Invalid format supplied. Using " + format + " instead.");
        } else {
          format = input;
        }
      }

      const element = document.getElementsByClassName("albumMassDownload")[0];
      element.style.height = "auto";
      element.style.marginBottom = "2em";

      /* jshint ignore:start */
      // eslint-disable-next-line no-eval
      const input = eval(
        document
          .querySelector("#pageContent script")
          .textContent.slice(5, -3)
          .replace("function", "function x")
          .replace("return p}", "return p}x")
      );
      /* jshint ignore:end */

      const mediaPath = input.match(/mediaPath='(.+?)'/)[1];
      const tracks = JSON.parse(
        input.match(/tracks=(\[.+?,\])/)[1].replace(",]", "]")
      );
      const output = tracks.map(
        (x) =>
          mediaPath +
          x.file.split(".").slice(0, -1).join(".") +
          "." +
          format.toLowerCase()
      );
      const names = tracks.map((x) => x.name);

      const blobWriter = new zip.BlobWriter("application/zip");
      const writer = new zip.ZipWriter(blobWriter);

      function forSync(i) {
        element.innerHTML =
          "Downloading track " +
          (i + 1) +
          " of " +
          output.length +
          " (" +
          (names[i] || "Track " + (i + 1)) +
          ")…";
        GM.xmlHttpRequest({
          method: "GET",
          url: output[i],
          responseType: "blob",
          onload: async (response) => {
            await writer.add(
              decodeURIComponent(output[i].split("/").pop()),
              new zip.BlobReader(response.response)
            );

            if (output[i + 1]) {
              forSync(i + 1);
            } else {
              await writer.close();
              const blob = await blobWriter.getData();
              saveAs(
                blob,
                document.getElementsByTagName("h2")[0].textContent + ".zip"
              );
              element.innerHTML =
                "Album successfully downloaded. ZIP file has been passed to the browser.";
            }
          },
        });
      }
      forSync(0);
    });
  });
})();

// @license-end
