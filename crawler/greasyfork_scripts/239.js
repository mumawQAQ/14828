// ==UserScript==
// @name         geoGuessr Resolver Hack 7.5 (duels and google maps update)
// @namespace    http://tampermonkey.net/
// @version      7.5
// @description  Features: Automatically score 5000 Points | Score randomly between 4500 and 5000 points | Open in Google Maps
// @author       0x978
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// ==/UserScript==


alert(`           Thanks for using geoGuessr Resolver by 0x978.
           ============================================
           Please use the safer guess Option to avoid bans in competitive
           ============================================
            Controls (UPDATED!):
            '1': Place marker on a "safe" guess (4500 - 5000)
            '2': Place marker on a "perfect" guess (5000)
            '3': Get a description of the correct location.
            '4': Open location in Google Maps (In a new tab)
            ----------------------------------------------------------`)
async function v(e, r){
    let q = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${e}&lon=${r}&format=json`)
    return await q.json();
}
function qq() {
    let [p,m] = oi()
    v(p,m).then(x => {
        console.log(x)
        alert(`
    Country: ${x.address.country}
    County: ${x.address.county}
    City: ${x.address.city}
    Road: ${x.address.road}
    State: ${x.address.state}
    Postcode: ${x.address.postcode}
    Village/Suburb: ${(x.address.village||x.address.suburb)}

   Postal Address: ${x.display_name}
    `) } );

}
function km(h){
    let [qqw,th] = oi()
    if(document.getElementsByClassName("guess-map__canvas-container")[0] === undefined){mn([qqw,th]);return;}
    if(h){qqw += (Math.random() / 2);th += (Math.random() / 2);}
    let wc = document.getElementsByClassName("guess-map__canvas-container")[0]
    let vvr = Object.keys(wc)
    let er = vvr.find(b => b.startsWith("__reactFiber$"))
    let fp = wc[er].return.memoizedProps.onMarkerLocationChanged
    fp({lat:qqw,lng:th})}
function mn([e,g]){
    let f = document.getElementsByClassName("region-map_map__7jxcD")[0]
    let lllk = Object.keys(f)
    let u = lllk.find(key => key.startsWith("__reactFiber$"))
    let fg = f[u].return.memoizedProps.onRegionSelected
    v(e,g).then(cx => {let countryCode = cx.address.country_code
        fg(countryCode)})
}
function oi(){
    let ww = document.getElementsByClassName("styles_root__3xbKq")[0]
    let e = Object.keys(ww)
    let u = e.find(key => key.startsWith("__reactFiber$"))
    let w = ww[u]
    let qwqa = w.return.memoizedProps.panorama.position
    return([qwqa.lat(),qwqa.lng()])
}
function vn(){
    let [xz,bt] = oi()
    if(!xz||!bt){return;}
    window.open(`https://www.google.com/maps/place/${xz},${bt}`);
}
let h = (e) => {
    if(e.keyCode === 49){km(true)}
    if(e.keyCode === 50){km(false)}
    if(e.keyCode === 51){qq()}
    if(e.keyCode === 52){vn()}
}
document.addEventListener("keydown", h);
