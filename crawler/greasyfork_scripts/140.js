// ==UserScript==
// @name         gartic.io mod menu
// @name:tr      gartic.io mod menüsü
// @name:az      gartic.io mod menyusu
// @name:ar      قائمة تعديل gartic.io
// @name:br      menu de mod gartic.io
// @namespace    http://tampermonkey.net/
// @version      2.2
// @homepageURL  https://github.com/anonimbiri/gartic.io-hack
// @supportURL   https://github.com/anonimbiri/gartic.io-hack/issues
// @description    drawing bot, answer assistant and many more features
// @description:tr çizim botu, cevap yardımcısı ve daha birçok özellik
// @description:az rəsm bot, cavab köməkçisi və bir çox digər xüsusiyyətlər
// @description:ar رسم بوت ، مساعد الإجابة والعديد من الميزات
// @description:br bot de desenho, assistente de resposta e muitos outros recursos
// @author       Anonim Biri
// @match        https://gartic.io/*
// @icon         https://i.imgur.com/nTF84Id.png
// @require https://greasyfork.org/scripts/462013-abnormal-menu/code/Abnormal%20Menu.js?version=1164920
// @grant        none
// @run-at       document-start
// ==/UserScript==

/*------------------------------------------------------------------------------
TR: Dil bölümü
EN: Language section
------------------------------------------------------------------------------*/

let LANG = navigator.language || navigator.languages[0] || 'en';
let LOCALE = {
    en: {
        mod_menu: "Mod Menu",
        draw: "Draw",
        search: "Search",
        drawing_bot: "Drawing Bot",
        open_menu_key: "Open Menu Key",
        drag_or_click: "Drag or Click",
        language_list: "Language List",
        game_mode:"Game Mode",
        turkish: "Turkish",
        english: "English",
        arabic: "Arabic",
        azerbaijani: "Azerbaijani",
        portuguese: "Portuguese",
        brazilian_portuguese: "Brazilian Portuguese",
        anti_afk: "Anti AFK",
        auto_report: "Auto Report",
        auto_skip: "Auto Skip",
        auto_kick: "Auto Kick",
        auto_answer: "Auto Answer",
        rainbow_drawing: "Rainbow Drawing",
        disabled: "Disabled",
        enabled: "Enabled",
        feature_is: "{option} feature is {status}",
        select_image: "Please select an image",
        drawing_started: "Drawing started",
        drawing_completed: "Drawing completed",
        save_config: "Save Config",
        reset_config: "Reset Config",
        rainbow_drawing_speed: "Rainbow Drawing Speed (in ms)",
        auto_answer_speed: "Auto Answer Speed (in ms)",
        the_word_list_has_been_prepared_by: "The word list has been prepared by {creator}",
        general: "General",
        anime: "Anime",
        flags: "Flags",
        animals: "Animals",
        foods: "Foods",
        professions: "Professions",
        logos: "Logos",
        verbs: "Verbs",
        objects: "Objects",
        settings_resetting: "Settings resetting",
        settings_saved: "Settings saved",
        update_available_please_update: "Update available, please update"
    },
    tr: {
        mod_menu: "Mod Menü",
        draw: "Çiz",
        search: "Ara",
        drawing_bot: "Çizim Botu",
        open_menu_key: "Menü Açma Tuşu",
        drag_or_click: "Sürükle Bırak veya Tıkla",
        language_list: "Dil Listesi",
        game_mode:"Oyun Modu",
        turkish: "Türkçe",
        english: "İngilizce",
        arabic: "Arapça",
        azerbaijani: "Azerice",
        portuguese: "Portekizce",
        brazilian_portuguese: "Brezilya Portekizcesi",
        anti_afk: "Anti AFK",
        auto_report: "Otomatik Rapor",
        auto_skip: "Otomatik Geç",
        auto_kick: "Otomatik At",
        auto_answer: "Otomatik Cevap",
        rainbow_drawing: "Gökkuşağı Çizimi",
        disabled: "Devre Dışı",
        enabled: "Etkin",
        feature_is: "{option} özelliği {status} durumunda",
        select_image: "Lütfen resim seçin",
        drawing_started: "Çizim başladı",
        drawing_completed: "Çizim işlemi bitti",
        save_config: "Ayarları Kaydet",
        reset_config: "Ayarları Sıfırla",
        rainbow_drawing_speed: "Gökkuşağı Çizim Hızı (ms cinsinden)",
        auto_answer_speed: "Otomatik Cevap Hızı (ms cinsinden)",
        the_word_list_has_been_prepared_by: "Kelime listesi {creator} tarafından hazırlanmıştır.",
        general: "Genel",
        anime: "Anime",
        flags: "Bayraklar",
        animals: "Hayvanlar",
        foods: "Yemekler",
        professions: "Meslekler",
        logos: "Logolar",
        verbs: "Fiiller",
        objects: "Nesneler",
        settings_resetting: "Ayarlar sıfırlanıyor",
        settings_saved: "Ayarlar kaydedildi",
        update_available_please_update: "Güncelleme mevcut, lütfen güncelleyin"
    },
    az: {
        mod_menu: "Mod Menyu",
        draw: "Cəkil",
        search: "Axtar",
        drawing_bot: "Çəkil Botu",
        open_menu_key: "Menyu Açma Düyməsi",
        drag_or_click: "Sürüklə və ya Tıkla",
        language_list: "Dil Siyahısı",
        game_mode:"Oyun Rejimi",
        turkish: "Türkcə",
        english: "İngiliscə",
        arabic: "Ərəbcə",
        azerbaijani: "Azərbaycan dili",
        portuguese: "Portuqal dili",
        brazilian_portuguese: "Braziliya portuqal dili",
        anti_afk: "AFK Anti",
        auto_report: "Avtomatik hesabat",
        auto_skip: "Avtomatik keç",
        auto_kick: "Avtomatik at",
        auto_answer: "Avtomatik cavab",
        rainbow_drawing: "Gökboya çəkmə",
        disabled: "Deaktiv",
        enabled: "Aktiv",
        feature_is: "{option} xüsusiyyəti {status} halında",
        select_image: "Zəhmət olmasa şəkil seçin",
        drawing_started: "Çəkmə başladı",
        drawing_completed: "Çəkmə tamamlandı",
        save_config: "Konfiqurasiyaları Yadda Saxla",
        reset_config: "Konfiqurasiyaları Sıfırla",
        rainbow_drawing_speed: "Göy rəngli Şəkillərin Çəkilən Sürəti (ms ilə)",
        auto_answer_speed: "Avtomatik Cavabın Sürəti (ms ilə)",
        the_word_list_has_been_prepared_by: "Sözlük {creator} tərəfindən hazırlanmışdır.",
        general: "Ümumi",
        anime: "Anime",
        flags: "Bayraqlar",
        animals: "Heyvanlar",
        foods: "Yeməklər",
        professions: "Peşələr",
        logos: "Logolar",
        verbs: "Əməllər",
        objects: "Obyektlər",
        settings_resetting: "Ayarlar sıfırlanır",
        settings_saved: "Ayarlar qeyd edildi",
        update_available_please_update: "Yeniləmə mövcuddur, xahiş edirik yeniləyin"
    },
    ar: {
        mod_menu: "Mod Menu",
        draw: "Draw",
        search: "Search",
        drawing_bot: "Drawing Bot",
        open_menu_key: "Open Menu Key",
        drag_or_click: "Drag or Click",
        language_list: "Language List",
        game_mode:"Game Mode",
        turkish: "Turkish",
        english: "English",
        arabic: "Arabic",
        azerbaijani: "Azerbaijani",
        portuguese: "Portuguese",
        brazilian_portuguese: "Brazilian Portuguese",
        anti_afk: "Anti AFK",
        auto_report: "Auto Report",
        auto_skip: "Auto Skip",
        auto_kick: "Auto Kick",
        auto_answer: "Auto Answer",
        rainbow_drawing: "Rainbow Drawing",
        disabled: "Disabled",
        enabled: "Enabled",
        feature_is: "{option} feature is {status}",
        select_image: "Please select an image",
        drawing_started: "Drawing started",
        drawing_completed: "Drawing completed",
        save_config: "Save Config",
        reset_config: "Reset Config",
        rainbow_drawing_speed: "Rainbow Drawing Speed (in ms)",
        auto_answer_speed: "Auto Answer Speed (in ms)",
        the_word_list_has_been_prepared_by: "The word list has been prepared by {creator}",
        general: "General",
        anime: "Anime",
        flags: "Flags",
        animals: "Animals",
        foods: "Foods",
        professions: "Professions",
        logos: "Logos",
        verbs: "Verbs",
        objects: "Objects",
        settings_resetting: "Settings resetting",
        settings_saved: "Settings saved",
        update_available_please_update: "Update available, please update"
    },
    pt_br: {
        mod_menu: "Mod Menu",
        draw: "Draw",
        search: "Search",
        drawing_bot: "Drawing Bot",
        open_menu_key: "Open Menu Key",
        drag_or_click: "Drag or Click",
        language_list: "Language List",
        game_mode:"Game Mode",
        turkish: "Turkish",
        english: "English",
        arabic: "Arabic",
        azerbaijani: "Azerbaijani",
        portuguese: "Portuguese",
        brazilian_portuguese: "Brazilian Portuguese",
        anti_afk: "Anti AFK",
        auto_report: "Auto Report",
        auto_skip: "Auto Skip",
        auto_kick: "Auto Kick",
        auto_answer: "Auto Answer",
        rainbow_drawing: "Rainbow Drawing",
        disabled: "Disabled",
        enabled: "Enabled",
        feature_is: "{option} feature is {status}",
        select_image: "Please select an image",
        drawing_started: "Drawing started",
        drawing_completed: "Drawing completed",
        save_config: "Save Config",
        reset_config: "Reset Config",
        rainbow_drawing_speed: "Rainbow Drawing Speed (in ms)",
        auto_answer_speed: "Auto Answer Speed (in ms)",
        the_word_list_has_been_prepared_by: "The word list has been prepared by {creator}",
        general: "General",
        anime: "Anime",
        flags: "Flags",
        animals: "Animals",
        foods: "Foods",
        professions: "Professions",
        logos: "Logos",
        verbs: "Verbs",
        objects: "Objects",
        settings_resetting: "Settings resetting",
        settings_saved: "Settings saved",
        update_available_please_update: "Update available, please update"
    }
};

function getTranslation(key, language) {
    // Eğer dil belirtilmemişse veya belirtilen dil listede yoksa İngilizce kullanılır
    if (!language || !LOCALE[language]) {
        language = "en";
    }

    // Anahtar listede yoksa veya çevirisi yoksa anahtar kullanılır
    if (!LOCALE[language][key]) {
        return key;
    }

    return LOCALE[language][key];
}

let settingData = JSON.parse(localStorage.getItem('settingData')) || {
    "world_list_lang":"en",
    "anti_afk": false,
    "auto_kick": false,
    "auto_report": false,
    "auto_skip": false,
    "rainbow_drawing": false,
    "rainbow_drawing_ms": 10,
    "auto_answer": false,
    "auto_answer_ms": 1000,
    "open_menu_key": serializeKeyboardEvent(new KeyboardEvent('keydown', { code: 'KeyM', ctrlKey: true, key: 'M' })),
};

function serializeKeyboardEvent(event) {
    return JSON.stringify({
        type: "KeyboardEvent",
        code: event.code,
        ctrlKey: event.ctrlKey,
        key: event.key
    });
}
function deserializeKeyboardEvent(str) {
    const obj = JSON.parse(str);
    if (obj.type === "KeyboardEvent") {
        return new KeyboardEvent("keydown", { code: obj.code, ctrlKey: obj.ctrlKey, key: obj.key });
    }
    return null;
}
settingData.open_menu_key = deserializeKeyboardEvent(settingData.open_menu_key);

var menu = new CreateMenu({title:getTranslation('mod_menu',LANG)});
const screenWidth = window.innerWidth;
var worldListMenu = new CreateMenu({title:getTranslation('mod_menu',LANG), startX:screenWidth - 300, startY:10 , width:300, height:700, pin: true});

var selectMenu = menu.addSelectMenu({label:getTranslation('language_list',LANG), options:[
    { name: getTranslation('english', LANG), value: 'en' },
    { name: getTranslation('turkish', LANG), value: 'tr' },
    { name: getTranslation('azerbaijani', LANG), value: 'az' },
    { name: getTranslation('arabic', LANG), value: 'ar' },
    { name: getTranslation('portuguese', LANG), value: 'pt_br' },
    { name: getTranslation('brazilian_portuguese', LANG), value: 'indo' }
]})


selectMenu.on('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].value;
    fetch(`https://raw.githubusercontent.com/anonimbiri/gartic.io-hack/main/world_list/${selectedOption}.json`)
        .then(response => response.json())
        .then(data => {
        selectMenu2.clearAllItems();
        const selectedCategoryObj = data.word_list.find(categoryObj => categoryObj.category === "general");
        if (selectedCategoryObj) {
            console.log(selectedCategoryObj.words);
            console.log(getTranslation('the_word_list_has_been_prepared_by', LANG).replace('{creator}', selectedCategoryObj.creator));
            wordList = selectedCategoryObj.words;
            new SendToast({message:getTranslation('the_word_list_has_been_prepared_by', LANG).replace('{creator}', selectedCategoryObj.creator), type:"Info"});
        }
        data.word_list.forEach(categoryObj => {
            selectMenu2.addItem(getTranslation(categoryObj.category, LANG),categoryObj.category);
        });
    });
});

var selectMenu2 = menu.addSelectMenu({label:getTranslation('game_mode',LANG)})

selectMenu2.on('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].value;
    fetch(`https://raw.githubusercontent.com/anonimbiri/gartic.io-hack/main/world_list/${selectMenu.getValue()}.json`)
        .then(response => response.json())
        .then(data => {
        const selectedCategoryObj = data.word_list.find(categoryObj => categoryObj.category === selectedOption);

        if (selectedCategoryObj) {
            console.log(selectedCategoryObj.words);
            console.log(getTranslation('the_word_list_has_been_prepared_by', LANG).replace('{creator}', selectedCategoryObj.creator));
            wordList = selectedCategoryObj.words;
            new SendToast({message:getTranslation('the_word_list_has_been_prepared_by', LANG).replace('{creator}', selectedCategoryObj.creator), type:"Info"});
        }
    });
});

let file = null;
menu.addFileDrop({label:getTranslation('drawing_bot',LANG),title:getTranslation('drag_or_click',LANG)}).on('Filedrop', (e) => {
    file = e.detail;
});

menu.addButton({title:getTranslation('draw',LANG)}).on('click', (e) => {
    console.log(file);
    if(file){
        new SendToast({title:getTranslation('drawing_bot',LANG), message:getTranslation('drawing_started', LANG), type:"Info"});
        image.src = URL.createObjectURL(file[0]);
        console.log(e.target.innerHTML);
    }else{
        new SendToast({title:getTranslation('drawing_bot',LANG), message:getTranslation('select_image', LANG), type:"Error"});
    }
});

menu.addButton({title:getTranslation('search',LANG)}).on('click', (e) => {
    window.open(`https://www.google.com/search?tbm=isch&tbs=itp:lineart&q=${selectedWords[selectedWordİndex]}`, '_blank');
});

menu.addSwitch({label:getTranslation('anti_afk',LANG), value:settingData.anti_afk}).on('change', (e) => {
    settingData.anti_afk = e.target.checked;
    new SendToast({message:getTranslation('feature_is', LANG).replace('{option}', getTranslation('anti_afk', LANG)).replace('{status}', e.target.checked ? getTranslation('enabled', LANG) : getTranslation('disabled', LANG)), type:"Success"});
});
menu.addSwitch({label:getTranslation('auto_kick',LANG), value:settingData.auto_kick}).on('change', (e) => {
    settingData.auto_kick = e.target.checked;
    new SendToast({message:getTranslation('feature_is', LANG).replace('{option}', getTranslation('auto_kick', LANG)).replace('{status}', e.target.checked ? getTranslation('enabled', LANG) : getTranslation('disabled', LANG)), type:"Success"});
});
menu.addSwitch({label:getTranslation('auto_report',LANG), value:settingData.auto_report}).on('change', (e) => {
    settingData.auto_report = e.target.checked;
    new SendToast({message:getTranslation('feature_is', LANG).replace('{option}', getTranslation('auto_report', LANG)).replace('{status}', e.target.checked ? getTranslation('enabled', LANG) : getTranslation('disabled', LANG)), type:"Success"});
});
menu.addSwitch({label:getTranslation('auto_skip',LANG), value:settingData.auto_skip}).on('change', (e) => {
    settingData.auto_skip = e.target.checked;
    new SendToast({message:getTranslation('feature_is', LANG).replace('{option}', getTranslation('auto_skip', LANG)).replace('{status}', e.target.checked ? getTranslation('enabled', LANG) : getTranslation('disabled', LANG)), type:"Success"});
});
menu.addSwitch({label:getTranslation('auto_answer',LANG), value:settingData.auto_answer}).on('change', (e) => {
    settingData.auto_answer = e.target.checked;
    new SendToast({message:getTranslation('feature_is', LANG).replace('{option}', getTranslation('auto_answer', LANG)).replace('{status}', e.target.checked ? getTranslation('enabled', LANG) : getTranslation('disabled', LANG)), type:"Success"});
});
menu.addInput({label:getTranslation('auto_answer_speed',LANG), placeholder:"1000", type:"number", min:1, max:10000, value:settingData.auto_answer_ms}).on('change', (e) => {
    settingData.auto_answer_ms = e.target.value;
});
menu.addSwitch({label:getTranslation('rainbow_drawing',LANG), value:settingData.rainbow_drawing}).on('change', (e) => {
    settingData.rainbow_drawing = e.target.checked;
    new SendToast({message:getTranslation('feature_is', LANG).replace('{option}', getTranslation('rainbow_drawing', LANG)).replace('{status}', e.target.checked ? getTranslation('enabled', LANG) : getTranslation('disabled', LANG)), type:"Success"});
});
menu.addInput({label:getTranslation('rainbow_drawing_speed',LANG), placeholder:"10", type:"number", min:1, max:10000, value:settingData.rainbow_drawing_ms}).on('change', (e) => {
    settingData.rainbow_drawing_ms = e.target.value;
});
menu.addHotkey({label:getTranslation('open_menu_key',LANG), keyevent: settingData.open_menu_key}).on('Hotkey', (e) => {
    settingData.open_menu_key = e.detail;
});
menu.addButton({title:getTranslation('save_config',LANG)}).on('click', (e) => {
    // Serialize the open_menu_key property
    settingData.open_menu_key = serializeKeyboardEvent(settingData.open_menu_key);

    // Save the settingData object to localStorage
    localStorage.setItem("settingData", JSON.stringify(settingData));

    new SendToast({message:getTranslation('settings_saved', LANG), type:"Info"});

    settingData.open_menu_key = deserializeKeyboardEvent(settingData.open_menu_key);
});
menu.addButton({title:getTranslation('reset_config',LANG)}).on('click', (e) => {
    localStorage.removeItem('settingData');
    new SendToast({message:getTranslation('settings_resetting', LANG), type:"Info"});
});
new SendToast({message:"to open the menu, press Ctrl + M", icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCRsQBQIJntbJAAAA80lEQVQ4y8WSP8rCUBDEf/uZwCuCN/ECXsQ/F7KxFaKksIreISmsRTBHSGmXYCUEMxZPBUEb84EDC7PD7jze7sKvYVKvB/3+d+3nM1JR6GsUBZ40jZQk0ukklaW0Xnt9t/Mhea0sfU2S+B7pblBVaoNAbZZJaSo55/XxWBqNPHdOSlO1WaY2CKSqkiSTpC5D/HvJNJvBagVNA5MJOhxgv4fpFK5XWCzQfP7ZwMyQ2SPBzOARd+3Jn2v8ly/UNQpDlOew3doHwGaD8hyFIdQ1QOANogiLYxgM4HKRlsv37w2HmHMQxxBFfm5dDqk9Hruf8s9xA/KFIrPBQJcRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA5LTI3VDE2OjA1OjAyKzAwOjAwmRa+2wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOS0yN1QxNjowNTowMiswMDowMOhLBmcAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMDktMjdUMTY6MDU6MDIrMDA6MDC/Xie4AAAAAElFTkSuQmCC", type:"Info"});

playerİd = null;
playerServerİd = null;
playerLang = 2;
players = [];
hit = false;
youDraw = false;
selectedWordİndex = null;
selectedWords = [];
var autoAnswer = null;

let langMatch = {
    code: {
        23:"az",
        8:"tr",
        19:"ar",
        1:"pt_br",
        45:"indo",
        2:"en"
    },
    index: {
        23:2,
        8:1,
        19:3,
        1:4,
        45:5,
        2:0
    }
};

newWs=null;
var matches = [];

window.WebSocket = new Proxy(WebSocket, {
    construct(target, args) {
        let ws = new target(...args);
        ws.send = new Proxy(ws.send, {
            apply(target, thisArg, args) {
                //console.log("➡️ %c"+args[0], "color: #008080; font-size: 16px; font-weight: bold;");
                if(Array.isArray(args) && args.length > 0 && args[0].toString().startsWith('42') && args[0].toString().includes('34')) {
                    newWs.send(`42[30,${playerServerİd}]`)
                    newWs.send(`42[30,${playerServerİd}]`)
                    newWs.send(`42[30,${playerServerİd}]`)
                    newWs.send(`42[30,${playerServerİd}]`)
                    let data = args[0];
                    selectedWordİndex = data[data.length - 2];
                    youDraw = true;
                }
                return Reflect.apply(...arguments);
            }
        });
        newWs = ws;
        ws.addEventListener('message', (event) => {
            //console.log("⬅️ %c"+event.data, "color: #FFA500; font-size: 16px; font-weight: bold;");
            if (!event.data.includes('[')) return;
            const data = JSON.parse(event.data.replace(/^\d+/g, ''));
            //console.log(data);
            switch (data[0]) {
                case 13: {
                    const index = matches.indexOf(data[2]);
                    if (index !== -1) {
                        matches.splice(index, 1);
                        //console.log(data[2]);
                    }
                    break;
                }
                case 5: {
                    playerİd = data[1];
                    playerServerİd = data[2];
                    playerLang = data[4].idioma;
                    players = data[5];
                    selectMenu.changeSelectedIndex(langMatch.index[playerLang]);
                    fetch(`https://raw.githubusercontent.com/anonimbiri/gartic.io-hack/main/world_list/${langMatch.code[playerLang]}.json`)
                        .then(response => response.json())
                        .then(data => {
                        selectMenu2.clearAllItems();
                        const selectedCategoryObj = data.word_list.find(categoryObj => categoryObj.category === "general");
                        if (selectedCategoryObj) {
                            console.log(selectedCategoryObj.words);
                            console.log(getTranslation('the_word_list_has_been_prepared_by', LANG).replace('{creator}', selectedCategoryObj.creator));
                            wordList = selectedCategoryObj.words;
                            new SendToast({message:getTranslation('the_word_list_has_been_prepared_by', LANG).replace('{creator}', selectedCategoryObj.creator), type:"Info"});
                        }
                        data.word_list.forEach(categoryObj => {
                            selectMenu2.addItem(getTranslation(categoryObj.category, LANG),categoryObj.category);
                        });
                    });
                    break;
                }
                case 45: {
                    if(data[2] == playerİd && settingData.auto_kick == true){
                        newWs.send(`42[45,${playerServerİd},["${data[1]}",true]]`)
                    }
                    break;
                }
                case 30: {
                    hit = true;
                    clearInterval(autoAnswer);
                    var searchWord = data[1].join("");
                    //remove all child element
                    while (worldListMenu.menuItemsContainer.firstChild) {
                        worldListMenu.menuItemsContainer.removeChild(worldListMenu.menuItemsContainer.firstChild);
                    }

                    matches = guessWord(searchWord)

                    for (var i = 0; i < matches.length; i++) {
                        worldListMenu.addButton({title:matches[i]}).on('click', (e) => {
                            ws.send(`42[13,${playerServerİd},"${e.target.innerHTML}"]`);
                            e.target.style.borderColor = "red";
                            e.target.parentNode.appendChild(e.target);

                        });
                    }

                    if (settingData.auto_answer == true) {
                        let currentIndex = 0;
                        autoAnswer = setInterval(function() {
                            if (currentIndex < matches.length) {
                                newWs.send(`42[13,${playerServerİd},"${matches[currentIndex]}"]`);
                                currentIndex++;
                            } else {
                                clearInterval(autoAnswer);
                            }
                        }, settingData.auto_answer_ms);
                    }

                    break;
                }
                case 19: {
                    hit = false;
                    youDraw = false;
                    clearInterval(autoAnswer);
                    //remove all child element
                    while (worldListMenu.menuItemsContainer.firstChild) {
                        worldListMenu.menuItemsContainer.removeChild(worldListMenu.menuItemsContainer.firstChild);
                    }
                    break;
                }
                case 16: {
                    if(settingData.auto_skip == true){
                        newWs.send(`42[25,${playerServerİd}]`)
                    }
                    selectedWords = [data[1], data[3]];
                    break;
                }
                case 34: {
                    if(settingData.auto_report == true){
                        newWs.send(`42[35,${playerServerİd}]`)
                    }
                    break;
                }

            }
        });
        return ws;
    }
});

setInterval(function() {
    const chatForm = document.querySelector('#chat form');
    if (chatForm) {
        let isinput = document.querySelector('input[name="chat"]').disabled;
        if(isinput==true){
            document.querySelector('#chat form').innerHTML =`<div class="textGame"><input id="chatUnlock" name="chat" type="text" class="mousetrap" placeholder="Chat Unlock" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="100" value=""><span></span><label>tab<span class="tooltip">AnonimBiri</span></label><div class="lottieAns"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291 41" width="291" height="41" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_4"><rect width="291" height="41" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_4)"><g style="display: none;"><g><path></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"></path></g></g><g transform="matrix(1,0,0,1,196.5,21.5)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,-0.7879999876022339,-0.5609999895095825)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(116,205,118)" stroke-opacity="1" stroke-width="4" d="M0 0"></path></g></g><g transform="matrix(0.800000011920929,0,0,0.800000011920929,318.20001220703125,-98.1500015258789)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="6" d="M0 0"></path></g></g></g></svg></div></div>`;
        }
    }
}, 1000);


/*------------------------------------------------------------------------------
TR: Renkli çizimin olduğu kısım
EN: The part with the colored drawing
------------------------------------------------------------------------------*/

let r = 255, g = 0, b = 0;
setInterval(function() {
    if(settingData.rainbow_drawing == true){
        if (g < 255 && r == 255 && b == 0) {
            g++;
        } else if (g == 255 && r > 0 && b == 0) {
            r--;
        } else if (r == 0 && g == 255 && b < 255) {
            b++;
        } else if (r == 0 && b == 255 && g > 0) {
            g--;
        } else if (r < 255 && b == 255 && g == 0) {
            r++;
        } else if (r == 255 && b > 0 && g == 0) {
            b--;
        }
        let HexColor = rgbToHex(r,g,b);
        newWs.send(`42[10,${playerServerİd},[5,"${HexColor}"]]`)
    }
}, settingData.rainbow_drawing_ms);


setInterval(function() {
    if(settingData.anti_afk == true){
        newWs.send(`42[42,${playerServerİd}]`)
    }
}, 50000);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && event.target.matches('#chatUnlock')) {
        const chatUnlockValue = event.target.value;
        newWs.send(`42[11,${playerServerİd},"${chatUnlockValue}"]`)
        event.target.value = "";
    }
});



var wordList = [];
function guessWord(word) {
    const matchingWords = wordList.filter((item) => { // Aradığımız kelimeyi filtreleyerek uygun olanları yeni bir diziye ekliyoruz.
        const matchingWords = item.split(' '); // Kelimeleri ayırarak bir dizi haline getiriyoruz.
        if (matchingWords.length !== word.split(' ').length) return false; // Boşluk miktarına göre kontrol ediyoruz.
        for (let i = 0; i < matchingWords.length; i++) {
            if (word.split(' ')[i].length !== matchingWords[i].length) return false; // Bilinmeyen harf sayısı kontrolü yapıyoruz.
            for (let j = 0; j < matchingWords[i].length; j++) {
                if (word.split(' ')[i][j] === '_' ) continue; // Bilinmeyen harfi atlıyoruz.
                if (word.split(' ')[i][j] !== matchingWords[i][j]) return false; // Karakterlerin eşitliğini kontrol ediyoruz.
            }
        }
        return true;
    });
    return matchingWords;
}

var width = 100;
var height = 100;
var fit = "zoom";
document.addEventListener("keydown", function(event) {
    if (event.code == settingData.open_menu_key.code && event.ctrlKey == settingData.open_menu_key.ctrlKey && event.altKey == settingData.open_menu_key.altKey && event.shiftKey == settingData.open_menu_key.shiftKey) {
        MenuShowHide();
    }
});

/*------------------------------------------------------------------------------
TR: Çizim botunun olduğu kısım
EN: The part where the drawing bot is
------------------------------------------------------------------------------*/

let brushDiameter = 4;
let dots = [];
var image = new Image();
image.crossOrigin = "Anonymous";
image.onload = function() {
    brushDiameter = document.querySelector('[name="size"]').value || 4;
    let lines = generateLines(image);
    lines.sort((line1, line2) => {
        return line2.length - line1.length;
    });
    lines.forEach((line,index) => {
        drawImage(line.start.x, line.start.y, line.end.x, line.end.y, line.color);
        let gameCanvas = document.querySelector('#drawing canvas');
        const context = gameCanvas.getContext('2d');
        context.beginPath();
        context.moveTo(line.start.x, line.start.y);
        context.lineTo(line.end.x, line.end.y);
        context.strokeStyle = line.color.replace('x','#');
        context.stroke();
    });
    new SendToast({title:getTranslation('drawing_bot',LANG), message:getTranslation('drawing_completed',LANG), type:"Success"});
}

let generateLines = function (img) {
    let gameBackgroundColor = new Color(255, 255, 255, 255) // white;
    let transparentColor = new Color(0, 0, 0, 0);
    let gameCanvas = document.querySelector('#drawing canvas');

    let imageDrawWidth = gameCanvas.width / brushDiameter;
    let imageDrawHeight = gameCanvas.height / brushDiameter;
    let imageData = imageHelper.scaleImage(img, { width: imageDrawWidth, height: imageDrawHeight, scaleMode: 'scaleToFit' });

    let xOffset = (gameCanvas.width - imageData.width * brushDiameter) / 2;
    let yOffset = (gameCanvas.height - imageData.height * brushDiameter) / 2;

    let horizontalLines = [];
    let startX;
    let currColor = {};
    let lineColor = {};
    let Colorid = null;

    // Horizontally
    for (let y = 0; y < imageData.height; y++) {
        startX = 0;
        lineColor = imageHelper.getPixelColor(imageData, 0, y);
        lineColor = getNearestAvailableColor(lineColor);

        for (let x = 1; x < imageData.width; x++) {
            currColor = imageHelper.getPixelColor(imageData, x, y);
            currColor = getNearestAvailableColor(currColor);

            if (!currColor.isEqual(lineColor)) {
                if (!lineColor.isEqual(transparentColor) && !lineColor.isEqual(gameBackgroundColor)) {
                    let lineStartX = (startX * brushDiameter) + xOffset;
                    let lineEndX = ((x - 1) * brushDiameter) + xOffset;

                    horizontalLines.push({
                        start: {
                            x: lineStartX,
                            y: (y * brushDiameter) + yOffset,
                        },
                        end: {
                            x: lineEndX,
                            y: (y * brushDiameter) + yOffset,
                        },
                        length: lineEndX - lineStartX,
                        color: rgbToHex(currColor.r,currColor.g,currColor.b),
                        brushDiameter: brushDiameter
                    });
                }

                startX = x;
                lineColor = currColor;
            }
        }
    }

    // Vertically
    let verticalLines = [];
    let startY;
    for (let x = 0; x < imageData.width; x++) {
        startY = 0;
        lineColor = imageHelper.getPixelColor(imageData, x, 0);
        lineColor = getNearestAvailableColor(lineColor);

        for (let y = 1; y < imageData.height; y++) {
            currColor = imageHelper.getPixelColor(imageData, x, y);
            currColor = getNearestAvailableColor(currColor);

            if (!currColor.isEqual(lineColor)) {
                if (!lineColor.isEqual(transparentColor) && !lineColor.isEqual(gameBackgroundColor)) {
                    let lineStartY = (startY * brushDiameter) + yOffset;
                    let lineEndY = ((y - 1) * brushDiameter) + yOffset;

                    verticalLines.push({
                        start: {
                            x: (x * brushDiameter) + xOffset,
                            y: lineStartY,
                        },
                        end: {
                            x: (x * brushDiameter) + xOffset,
                            y: lineEndY,
                        },
                        length: lineEndY - lineStartY,
                        color: rgbToHex(currColor.r,currColor.g,currColor.b),
                        brushDiameter: brushDiameter
                    });
                }

                startY = y;
                lineColor = currColor;
            }
        }
    }

    return ((horizontalLines.length < verticalLines.length) ? horizontalLines : verticalLines);
};

let imageHelper = {
    scaleImage: function (img, options) {
        // Setting options or using default values if they don't exist
        let size = {
            width: options.width || 767,
            height: options.height || 448,
        };
        let scaleMode = options.scaleMode || 'scaleToFit';

        let canvas = document.createElement('canvas');

        // 'Scaling an image to fit on canvas' - https://stackoverflow.com/a/23105310
        // See it live: https://codepen.io/charliezhao0916/pen/oKayxE
        let wRatio = size.width / img.width;
        let hRatio = size.height / img.height;

        let ratio;
        let scaledImageWidth;
        let scaledImageHeight;

        switch (scaleMode) {
                // Suppose image original size is 200 x 300, and size parameter is 800 x 600
                // wRatio: 800/200 = 4, hRatio: 600 / 300 = 2
            case 'scaleToFit':
                // Determine which ratio is smaller. For the example, the hRatio would be smaller.
                // The image width/height will be multiplied by this ratio, so the image size is now 400x600
                // Note: the image size will always be equal or smaller than the size parameter --> scaled to fit
                ratio = Math.min(wRatio, hRatio);

                scaledImageWidth = img.width * ratio;
                scaledImageHeight = img.height * ratio;

                // The image size is smaller than the size parameter, so we set canvas size to the image size to remove empty space
                canvas.width = scaledImageWidth;
                canvas.height = scaledImageHeight;
                break;
            case 'scaleToFill':
                // Determine which ratio is larger. For the example, the wRatio would be larger.
                // The image width/height will be multiplied by this ratio, so the image size is now 800 x 1200
                // Note: the image size will always be equal or larger than the size parameter --> scaled to fill
                ratio = Math.max(wRatio, hRatio);

                scaledImageWidth = img.width * ratio;
                scaledImageHeight = img.height * ratio;

                // The image size is larger than the size parameter, so we set canvas size to the size parameter.
                // Some parts of the image will be cut off, but we are limited to the size parameter.
                canvas.width = size.width;
                canvas.height = size.height;
                break;
        }

        // This determines from where on the canvas we are drawing the image
        // It is set so that we are always centering the image on the canvas
        let dx = (canvas.width - scaledImageWidth) / 2;
        let dy = (canvas.height - scaledImageHeight) / 2;

        // Draw the image on the canvas, this is where the scaling happens
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
        let canvasContext = canvas.getContext('2d');
        canvasContext.drawImage(img, dx, dy, scaledImageWidth, scaledImageHeight);

        return canvasContext.getImageData(0, 0, canvas.width, canvas.height);
    },

    getPixelColor: function(imageData, x, y){
        const data = imageData.data;

        // Suppose you have a 2x2 image:
        // RED PIXEL  (x:0, y:0) |       GREEN PIXEL (x:1, y:0)
        // BLUE PIXEL (x:0, y:1) | TRANSPARENT PIXEL (x:1, y:1)
        // The data array is 1-dimensional, and it looks like this:
        // [ 255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 0, 0, 0, 0 ]
        // |   1ST PIXEL   |   2ND PIXEL   |   3RD PIXEL   | 4TH  PIXEL |
        // Each pixel has 4 values which corresponds to rgba
        // Notice the index for the first pixel's values starts at 0, second pixel: 4, third: 8, fourth: 12
        // This can be calculated using the formula: 4*y*imageWidth + 4*x
        let i = 4 * y * imageData.width + 4 * x; // r: data[i], g: data[i+1], b: data[i+2], a: data[i+3]

        return new Color(data[i], data[i+1], data[i+2], data[i+3]);
    },

    // 'Get average color from area of image' - https://stackoverflow.com/a/44557266
    // To get the pixel data (array) from an area of the image, the solution uses: context.getImageData(x, y, width, height).data
    // This is very slow, it's much faster to get the pixel data (array) of the entire image and use indexes to get the values for the specific pixels you want
    getAverageColor: function (imageData, startX, startY, width, height) {
        let totals = { r: 0, g: 0, b: 0, weight: 0, numPixels: 0};

        for (let y = startY; y < startY + height; y++) {
            for (let x = startX; x < startX + width; x++) {
                let color = this.getPixelColor(imageData, x, y);

                // Use the alpha channel as the weight, the more transparent the pixel, the less we care about its rgb values
                let weight = color.a / 255;
                totals.r += color.r * weight;
                totals.g += color.g * weight;
                totals.b += color.b * weight;
                totals.weight += weight;
                totals.numPixels++;
            }
        }

        let averageColor = new Color(
            // The | operator stands for bitwise OR, OR 0 will truncate any decimals
            // 'Using bitwise OR 0 to floor a number' - https://stackoverflow.com/questions/7487977/using-bitwise-or-0-to-floor-a-number
            totals.r / totals.weight | 0, // r
            totals.g / totals.weight | 0, // g
            totals.b / totals.weight | 0, // b
            totals.weight / totals.numPixels, // a
        );

        return averageColor;
    },
};

class Color {
    constructor(r, g, b, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    get JSONString() {
        return JSON.stringify(this);
    }

    isEqual(color){
        return (this.r == color.r && this.g == color.g && this.b == color.b && this.a == color.a);
    }

    /*
        'Get Color Component from RGB String' - https://stackoverflow.com/questions/10970958/get-a-color-component-from-an-rgb-string-in-javascript
        Example rgbString: 'rgb(255, 0, 6)' - This can be obtained from element.style.backgroundColor
            rgbString.substring(4, rgb.length - 1): '255, 0, 6'
            .replace(/ /g, ''): '255,0,6'
            .split(','): ['255', '0', '6']
    */
    static getColorFromRGBString(rgbString) {
        let rgb = rgbString.substring(4, rgbString.length - 1).replace(/ /g, '').split(',');
        return new Color(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    }

    // The Euclidean distance formula is sqrt(rDiff^2 + gDiff^2 + bDiff^2). However, it does not account for the way humans perceive colour, this formula should do a better job at it
    // 'Colour Metric' - https://www.compuphase.com/cmetric.htm
    static distance(color1, color2) {
        let rMean = (color1.r + color2.r) / 2;
        let rDiff = color1.r - color2.r;
        let gDiff = color1.g - color2.g;
        let bDiff = color1.b - color2.b;

        // The actual distance formula is sqrt( (2 + rMean/256)*rDiff^2 + 4*gDiff^2 + (2 + (255-rMean)/256)*bDiff^2 )
        // This simplifies to sqrt( ((512+rMean)/256)*rDiff^2 + 4*gDiff^2 + ((767-rMean)/256)*bDiff^2  )
        // 'Algorithms/Distance approximations' - https://en.wikibooks.org/wiki/Algorithms/Distance_approximations
        return Math.sqrt(((512 + rMean) / 256) * Math.pow(rDiff, 2) + 4 * Math.pow(gDiff, 2) + ((767 - rMean) / 256) * Math.pow(bDiff, 2));
    }
}

function getNearestAvailableColor(color){
    let shortestDistance = Number.MAX_SAFE_INTEGER;
    let key = color.JSONString;
    let nearestColor;

    let nearestColorLookup = {};
    let colors = [];

    let colorss = [
        // Siyahın tonları
        'rgb(0, 0, 0)',
        'rgb(20, 20, 20)',
        'rgb(40, 40, 40)',
        'rgb(60, 60, 60)',
        'rgb(80, 80, 80)',
        'rgb(100, 100, 100)',
        'rgb(120, 120, 120)',
        'rgb(140, 140, 140)',
        'rgb(160, 160, 160)',
        'rgb(180, 180, 180)',

        // Gri tonları
        'rgb(192, 192, 192)',
        'rgb(176, 176, 176)',
        'rgb(160, 160, 160)',
        'rgb(144, 144, 144)',
        'rgb(128, 128, 128)',
        'rgb(112, 112, 112)',
        'rgb(96, 96, 96)',
        'rgb(80, 80, 80)',
        'rgb(64, 64, 64)',
        'rgb(48, 48, 48)',

        // Koyu Mavi tonları
        'rgb(0, 0, 128)',
        'rgb(16, 16, 112)',
        'rgb(32, 32, 96)',
        'rgb(48, 48, 80)',
        'rgb(64, 64, 64)',
        'rgb(80, 80, 48)',
        'rgb(96, 96, 32)',
        'rgb(112, 112, 16)',
        'rgb(128, 128, 0)',
        'rgb(144, 144, 0)',

        // Açık Mavi tonları
        'rgb(135, 206, 235)',
        'rgb(119, 200, 235)',
        'rgb(103, 194, 235)',
        'rgb(87, 188, 235)',
        'rgb(71, 182, 235)',
        'rgb(55, 176, 235)',
        'rgb(39, 170, 235)',
        'rgb(23, 164, 235)',
        'rgb(7, 158, 235)',
        'rgb(0, 152, 235)',

        // Açık Gri tonları
        'rgb(220, 220, 220)',
        'rgb(210, 210, 210)',
        'rgb(200, 200, 200)',
        'rgb(190, 190, 190)',
        'rgb(180, 180, 180)',
        'rgb(170, 170, 170)',
        'rgb(160, 160, 160)',
        'rgb(150, 150, 150)',
        'rgb(140, 140, 140)',
        'rgb(130, 130, 130)',

        // Koyu Yeşil tonları
        'rgb(0, 100, 0)',
        'rgb(0, 105, 0)',
        'rgb(0, 110, 0)',
        'rgb(0, 115, 0)',
        'rgb(0, 120, 0)',
        'rgb(0, 125, 0)',
        'rgb(0, 130, 0)',
        'rgb(0, 135, 0)',
        'rgb(0, 140, 0)',
        'rgb(0, 145, 0)',

        // Açık Yeşil tonları
        'rgb(144, 238, 144)',
        'rgb(152, 251, 152)',
        'rgb(154, 255, 154)',
        'rgb(160, 255, 160)',
        'rgb(173, 255, 173)',
        'rgb(193, 255, 193)',
        'rgb(202, 255, 202)',
        'rgb(218, 255, 218)',
        'rgb(240, 255, 240)',
        'rgb(244, 255, 244)',

        // Koyu Kırmızı tonları
        'rgb(139, 0, 0)',
        'rgb(128, 0, 0)',
        'rgb(120, 0, 0)',
        'rgb(112, 0, 0)',
        'rgb(104, 0, 0)',
        'rgb(96, 0, 0)',
        'rgb(88, 0, 0)',
        'rgb(80, 0, 0)',
        'rgb(72, 0, 0)',
        'rgb(64, 0, 0)',

        // Açık Kırmızı tonları
        'rgb(255, 99, 71)',
        'rgb(255, 105, 97)',
        'rgb(255, 114, 104)',
        'rgb(255, 127, 80)',
        'rgb(255, 140, 105)',
        'rgb(255, 160, 122)',
        'rgb(255, 165, 0)',
        'rgb(255, 182, 193)',
        'rgb(255, 192, 203)',
        'rgb(255, 204, 204)',

        // Koyu Turuncu tonları
        'rgb(200, 60, 0)',
        'rgb(210, 75, 0)',
        'rgb(220, 90, 0)',
        'rgb(230, 105, 0)',
        'rgb(240, 120, 0)',
        'rgb(250, 135, 0)',
        'rgb(255, 150, 0)',
        'rgb(255, 165, 10)',
        'rgb(255, 180, 25)',
        'rgb(255, 195, 40)',

        // Açık Turuncu tonları
        'rgb(255, 200, 85)',
        'rgb(255, 205, 100)',
        'rgb(255, 210, 115)',
        'rgb(255, 215, 130)',
        'rgb(255, 220, 145)',
        'rgb(255, 225, 160)',
        'rgb(255, 230, 175)',
        'rgb(255, 235, 190)',
        'rgb(255, 240, 205)',
        'rgb(255, 245, 220)',

        // Koyu Kahve rengi tonları
        'rgb(45, 25, 0)',
        'rgb(60, 40, 0)',
        'rgb(75, 55, 0)',
        'rgb(90, 70, 0)',
        'rgb(105, 85, 0)',
        'rgb(120, 100, 0)',
        'rgb(135, 115, 0)',
        'rgb(150, 130, 0)',
        'rgb(165, 145, 0)',
        'rgb(180, 160, 0)',

        // Açık Kahve rengi tonları
        'rgb(150, 120, 90)',
        'rgb(165, 135, 100)',
        'rgb(180, 150, 110)',
        'rgb(195, 165, 120)',
        'rgb(210, 180, 130)',
        'rgb(225, 195, 140)',
        'rgb(240, 210, 150)',
        'rgb(255, 225, 160)',
        'rgb(255, 240, 170)',
        'rgb(255, 255, 180)',

        // Mor tonları
        'rgb(50, 0, 50)',
        'rgb(75, 0, 75)',
        'rgb(100, 0, 100)',
        'rgb(125, 0, 125)',
        'rgb(150, 0, 150)',
        'rgb(175, 0, 175)',
        'rgb(200, 0, 200)',
        'rgb(225, 0, 225)',
        'rgb(250, 0, 250)',
        'rgb(255, 0, 255)',

        // Pembe tonları
        'rgb(255, 192, 203)',
        'rgb(255, 182, 193)',
        'rgb(255, 160, 122)',
        'rgb(255, 105, 180)',
        'rgb(255, 20, 147)',
        'rgb(219, 112, 147)',
        'rgb(199, 21, 133)',
        'rgb(255, 0, 255)',
        'rgb(218, 112, 214)',
        'rgb(186, 85, 211)',

        // Sarı tonları
        'rgb(255, 255, 153)',
        'rgb(255, 255, 102)',
        'rgb(255, 215, 0)',
        'rgb(255, 193, 7)',
        'rgb(255, 185, 15)',
        'rgb(255, 165, 0)',
        'rgb(255, 140, 0)',
        'rgb(255, 127, 80)',
        'rgb(255, 99, 71)',
        'rgb(255, 69, 0)',

        // Ten rengi tonları
        'rgb(250, 240, 230)',
        'rgb(240, 230, 140)',
        'rgb(238, 232, 170)',
        'rgb(222, 184, 135)',
        'rgb(210, 180, 140)',
        'rgb(188, 143, 143)',
        'rgb(165, 42, 42)',
        'rgb(139, 69, 19)',
        'rgb(128, 0, 0)',
        'rgb(107, 68, 35)',

    ];


    colorss.forEach((colorr) => {
        let getcolor = Color.getColorFromRGBString(colorr);
        colors.push(getcolor);
    });

    if (color.a == 0){
        nearestColor = new Color(0, 0, 0, 0);
    }
    else if (key in nearestColorLookup) {
        nearestColor = nearestColorLookup[key];
    }
    else {
        for (let i = 0; i < colors.length; i++) {
            let distance = Color.distance(color, colors[i]);

            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestColor = colors[i];
            }
        }
        nearestColorLookup[key] = nearestColor;
    }
    return nearestColor;
}

function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0').toUpperCase();
    const hexG = g.toString(16).padStart(2, '0').toUpperCase();
    const hexB = b.toString(16).padStart(2, '0').toUpperCase();
    return `x${hexR}${hexG}${hexB}`;
}

function drawImage(startX,startY,stopX,stopY, color) { // tr: çizimi soket gönder // en: send drawing socket
    //newWs.send(`42[10,${playerServerİd},[6,${penSize}]]`)
    newWs.send(`42[10,${playerServerİd},[5,"${color}"]]`) //color
    newWs.send(`42[10,${playerServerİd},[2,${startX},${startY},${stopX},${stopY}]]`) //[2,x,y]
}


/*------------------------------------------------------------------------------
TR: Sürüm kontrol bölümü
EN: Version control section
------------------------------------------------------------------------------*/

const greasyForkUrl = 'https://greasyfork.org/en/scripts/429227-gartic-io-mod-menu.json';
fetch(greasyForkUrl)
    .then(response => response.json())
    .then(data => {
    const latestVersion = data.version;
    const currentVersion = GM_info.script.version;
    if (latestVersion > currentVersion) {
        setTimeout(function() {
            window.open(data.code_url);
            new SendToast({message:getTranslation('update_available_please_update',LANG), icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N13fJ1l+cfxz/WcJM1JutukTSmjCjJaECiUrVSGIktRUJS6FRUEERkqalgioIgMt+hPcIAWlMqwgoCDJUsEAVkyLG1S2pQ2o03Oc/3+aKO1dCTNOed+xvf9ej2vl9Q2+bYnyXOd67qf+wYREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZFBs9ABRGTgXnzFxw2rY3wcMy5yxnvEOHeaDMa6MQan0aDBnBGxMTIyGt0pAo1A3WofqgYYsdp/9wDdr/rfznKMrlW//gqwGGexGYvdWOwxi8xY7BGLCyUWxwUW9w1j3iSzLkQk0VQAiCTEvFd8fFTDayPYFNjEYTODycAmwGZACytv3GmwGOPfwHMO/47gRYfnY3ixJuLfK+p4XkWCSFgqAESqaPFiH71iGNtibGUxW2FsCf+5RgeOV20vmPOEG4+785hHPFHjPD6+wf4dOphIHqgAEKkAd69r72Q7LzDNnGkY27szzVa+k5f1cV7BeMLgcYdHPeL+YT3cP3q0LQ4dTSRLVACIDJG7F+YvY5uohunmTAemA7sAwwJHy5qXgPvduT+C+3tL3DVppC0MHUokrVQAiAzSgmU+gYi9DfYGdgV2AhoCx8ojB54G7gPujEvcNmE4j5qZB84lkgoqAEQ2oL3TJ7mxFytv+HsBO6PvnaRaas49btxizi3jG3jQzOLQoUSSSD/ERNbw4is+rq6G/TAOMOcAh81DZ5KN47Aogj8Bt8cxf5gw3B4OnUkkKVQASO65e2FhFzu6sb85+7vxRqA2dC6piAUGcx3mWJGbm8yWhg4kEooKAMml+e6NhS7ehHGkG4fhjAqdSaqux5w/u3GLRfy6qd6eCB1IpJpUAEhuLOr2zfpiDjV4m97ly6sYj+D8lpirm4fbQ6HjiFSaCgDJtJe7fHIM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", type:"Info"});
        }, 5000);
    }
});

