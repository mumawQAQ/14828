// ==UserScript==
// @name                ChatGPT Auto Refresh ↻
// @name:ar             تحديث تلقائي لـ ChatGPT ↻
// @name:bg             Автоматично опресняване на ChatGPT ↻
// @name:bn             ChatGPT অটো রিফ্রেশ ↻
// @name:cs             Automatické obnovení ChatGPT ↻
// @name:da             ChatGPT Auto Refresh ↻
// @name:de             Automatische ChatGPT-Aktualisierung ↻
// @name:el             Αυτόματη ανανέωση ChatGPT ↻
// @name:eo             ChatGPT Aŭtomata Refreŝigo ↻
// @name:es             Actualización Automática de ChatGPT ↻
// @name:fi             ChatGPT automaattinen päivitys ↻
// @name:fr             Actualisation Automatique de ChatGPT ↻
// @name:fr-CA          Actualisation Automatique de ChatGPT ↻
// @name:gu             ChatGPT ઓટો રિફ્રેશ ↻
// @name:hi             चैटजीपीटी ऑटो रिफ्रेश ↻
// @name:hu             ChatGPT automatikus frissítése ↻
// @name:in             Penyegaran Otomatis ChatGPT ↻
// @name:it             Aggiornamento Automatico ChatGPT ↻
// @name:iw             רענון אוטומטי של ChatGPT ↻
// @name:ja             ChatGPT 自動更新 ↻
// @name:ka             ChatGPT ავტომატური განახლება ↻
// @name:kn             ChatGPT ಸ್ವಯಂ ರಿಫ್ರೆಶ್ ↻
// @name:ko             ChatGPT 자동 새로 고침 ↻
// @name:ku             ChatGPT Xweseriya Nûvekirina ↻
// @name:ml             ChatGPT യാന്ത്രിക പുതുക്കൽ ↻
// @name:mr             ChatGPT ऑटो रिफ्रेश ↻
// @name:ms             Segar Semula AutoGPT ↻
// @name:my             ChatGPT အလိုအလျောက်ပြန်လည်စတင်ခြင်း ↻
// @name:nl             ChatGPT automatisch vernieuwen ↻
// @name:no             ChatGPT Auto Refresh ↻
// @name:or             ChatGPT ଅଟୋ ସତେଜ ↻
// @name:pa             ਚੈਟਜੀਪੀਟੀ ਆਟੋ ਰਿਫ੍ਰੈਸ਼ ↻
// @name:pl             Automatyczne odświeżanie ChatGPT ↻
// @name:pt             Atualização automática do ChatGPT ↻
// @name:pt-BR          Atualização automática do ChatGPT ↻
// @name:ro             Actualizare automată ChatGPT ↻
// @name:ru             Автоматическое Обновление ChatGPT ↻
// @name:sk             Automatické obnovenie chatGPT ↻
// @name:sr             Аутоматско освежавање ЦхатГПТ ↻
// @name:ta             ChatGPT தானியங்கு புதுப்பிப்பு ↻
// @name:th             ChatGPT รีเฟรชอัตโนมัติ ↻
// @name:tr             ChatGPT Otomatik Yenileme ↻
// @name:ug             ChatGPT ئاپتوماتىك يېڭىلاش ↻
// @name:uk             Автоматичне оновлення ChatGPT ↻
// @name:ur             چیٹ جی پی ٹی آٹو ریفریش ↻
// @name:vi             Tự động làm mới ChatGPT ↻
// @name:zh-CN          ChatGPT 自动刷新 ↻
// @name:zh-HK          ChatGPT 自動刷新 ↻
// @name:zh-SG          ChatGPT 自动刷新 ↻
// @name:zh-TW          ChatGPT 自動刷新 ↻
// @version             2023.04.06
// @description         Keeps ChatGPT sessions fresh, eliminating constant network errors + Cloudflare checks (all from the background!)
// @author              Adam Lui
// @namespace           https://github.com/adamlui
// @description:ar      يحافظ على جلسات ChatGPT جديدة ، مما يقلل من أخطاء الشبكة المستمرة + فحوصات Cloudflare (كل ذلك من الخلفية!)
// @description:bg      Поддържа сесиите на ChatGPT свежи, елиминирайки постоянни мрежови грешки + проверки на Cloudflare (всички от заден план!)
// @description:bn      ChatGPT সেশনগুলিকে সতেজ রাখে, ধ্রুবক নেটওয়ার্ক ত্রুটিগুলি দূর করে + ক্লাউডফ্লেয়ার চেক (সবই ব্যাকগ্রাউন্ড থেকে!)
// @description:cs      Udržuje relace ChatGPT čerstvé, eliminuje neustálé chyby sítě + kontroly Cloudflare (vše na pozadí!)
// @description:da      Holder ChatGPT-sessioner friske og eliminerer konstante netværksfejl + Cloudflare-tjek (alt sammen fra baggrunden!)
// @description:de      Hält ChatGPT-Sitzungen frisch, eliminiert ständige Netzwerkfehler + Cloudflare-Prüfungen (alles aus dem Hintergrund!)
// @description:el      Διατηρεί φρέσκες τις συνεδρίες ChatGPT, εξαλείφοντας τα συνεχή σφάλματα δικτύου + ελέγχους Cloudflare (όλα από το παρασκήνιο!)
// @description:eo      Tenas ChatGPT-sesiojn freŝaj, forigante konstantajn retajn erarojn + Cloudflare-kontroloj (ĉio el la fono!)
// @description:es      Mantiene las sesiones de ChatGPT actualizadas, lo que elimina los errores de red constantes + las comprobaciones de Cloudflare (¡todo en segundo plano!)
// @description:fi      Pitää ChatGPT-istunnot tuoreina, eliminoiden jatkuvat verkkovirheet + Cloudflare-tarkistukset (kaikki taustalta!)
// @description:fr      Maintient les sessions ChatGPT à jour, éliminant les erreurs réseau constantes + vérifications Cloudflare (le tout en arrière-plan!)
// @description:fr-CA   Maintient les sessions ChatGPT à jour, éliminant les erreurs réseau constantes + vérifications Cloudflare (le tout en arrière-plan!)
// @description:gu      ChatGPT સત્રોને તાજા રાખે છે, સતત નેટવર્ક ભૂલોને દૂર કરે છે + Cloudflare તપાસો (બધું પૃષ્ઠભૂમિમાંથી!)
// @description:hi      चैटजीपीटी सत्रों को ताजा रखता है, लगातार नेटवर्क त्रुटियों को समाप्त करता है + क्लाउडफ्लेयर चेक (सभी पृष्ठभूमि से!)
// @description:hu      Frissen tartja a ChatGPT munkameneteket, kiküszöbölve az állandó hálózati hibákat + Cloudflare ellenőrzéseket (mind a háttérből!)
// @description:in      Menjaga sesi ChatGPT tetap segar, menghilangkan kesalahan jaringan konstan + pemeriksaan Cloudflare (semua dari latar belakang!)
// @description:it      Mantiene fresche le sessioni di ChatGPT, eliminando i continui errori di rete + i controlli di Cloudflare (tutto in background!)
// @description:iw      שומר על מפגשי ChatGPT טריים, מבטל שגיאות רשת קבועות + בדיקות Cloudflare (הכל מהרקע!)
// @description:ja      ChatGPT セッションを最新の状態に保ち、一定のネットワーク エラーを排除 + Cloudflare チェック (すべてバックグラウンドから!)
// @description:ka      ინახავს ChatGPT სესიებს ახალი, აღმოფხვრის ქსელის მუდმივ შეცდომებს + Cloudflare-ის შემოწმებას (ყველაფერი ფონიდან!)
// @description:kn      ಚಾಟ್‌ಜಿಪಿಟಿ ಸೆಷನ್‌ಗಳನ್ನು ತಾಜಾವಾಗಿರಿಸುತ್ತದೆ, ನಿರಂತರ ನೆಟ್‌ವರ್ಕ್ ದೋಷಗಳನ್ನು ನಿವಾರಿಸುತ್ತದೆ + ಕ್ಲೌಡ್‌ಫ್ಲೇರ್ ಪರಿಶೀಲನೆಗಳು (ಎಲ್ಲವೂ ಹಿನ್ನೆಲೆಯಿಂದ!)
// @description:ko      ChatGPT 세션을 최신 상태로 유지하여 지속적인 네트워크 오류 제거 + Cloudflare 검사(모두 백그라운드에서!)
// @description:ku      Danişînên ChatGPT nû digire, xeletiyên torê yên domdar ji holê radike + kontrolên Cloudflare (hemû ji paşperdeyê!)
// @description:ml      ChatGPT സെഷനുകൾ പുതുമയുള്ളതാക്കുന്നു, നിരന്തരമായ നെറ്റ്‌വർക്ക് പിശകുകൾ ഇല്ലാതാക്കുന്നു + ക്ലൗഡ്ഫ്ലെയർ പരിശോധനകൾ (എല്ലാം പശ്ചാത്തലത്തിൽ നിന്ന്!)
// @description:mr      सतत नेटवर्क त्रुटी दूर करून ChatGPT सत्रे ताजी ठेवते + क्लाउडफ्लेअर तपासणी (सर्व पार्श्वभूमीतून!)
// @description:ms      Memastikan sesi ChatGPT sentiasa segar, menghapuskan ralat rangkaian berterusan + pemeriksaan Cloudflare (semua dari latar belakang!)
// @description:my      ChatGPT စက်ရှင်များကို လတ်ဆတ်စေကာ စဉ်ဆက်မပြတ် ကွန်ရက်အမှားအယွင်းများကို ဖယ်ရှားပေးသည် + Cloudflare စစ်ဆေးမှုများ (အားလုံးသည် နောက်ခံမှ!)
// @description:nl      Houdt ChatGPT-sessies up-to-date en elimineert constante netwerkfouten + Cloudflare-controles (allemaal vanaf de achtergrond!)
// @description:no      Holder ChatGPT-økter ferske, eliminerer konstante nettverksfeil + Cloudflare-sjekker (alt fra bakgrunnen!)
// @description:or      ଚାଟ୍ ଜିପିଟି ଅଧିବେଶନଗୁଡ଼ିକୁ ସତେଜ ରଖେ, କ୍ରମାଗତ ନେଟୱାର୍କ ତ୍ରୁଟି + କ୍ଲାଉଡ୍ ଫ୍ଲାର୍ ଚେକ୍ (ସମସ୍ତ ପୃଷ୍ଠଭୂମିରୁ!)
// @description:pa      ChatGPT ਸੈਸ਼ਨਾਂ ਨੂੰ ਤਾਜ਼ਾ ਰੱਖਦਾ ਹੈ, ਲਗਾਤਾਰ ਨੈੱਟਵਰਕ ਤਰੁਟੀਆਂ ਨੂੰ ਖਤਮ ਕਰਦਾ ਹੈ + Cloudflare ਜਾਂਚਾਂ (ਸਭ ਬੈਕਗ੍ਰਾਊਂਡ ਤੋਂ!)
// @description:pl      Utrzymuje świeżość sesji ChatGPT, eliminując ciągłe błędy sieciowe + kontrole Cloudflare (wszystko w tle!)
// @description:pt      Mantém as sessões ChatGPT atualizadas, eliminando erros constantes de rede + verificações Cloudflare (tudo em segundo plano!)
// @description:pt-BR   Mantém as sessões ChatGPT atualizadas, eliminando erros constantes de rede + verificações Cloudflare (tudo em segundo plano!)
// @description:ro      Păstrează sesiunile ChatGPT proaspete, eliminând erorile constante de rețea + verificări Cloudflare (toate din fundal!)
// @description:ru      Поддерживает актуальность сеансов ChatGPT, устраняя постоянные сетевые ошибки + проверки Cloudflare (все в фоновом режиме!)
// @description:sk      Udržuje relácie ChatGPT čerstvé, eliminuje neustále chyby siete + kontroly Cloudflare (všetko na pozadí!)
// @description:sr      Одржава сесије ЦхатГПТ свежим, елиминишући сталне мрежне грешке + Цлоудфларе провере (све из позадине!)
// @description:sv      Håller ChatGPT-sessioner fräscha, eliminerar konstant nätverksfel + Cloudflare-kontroller (alla från bakgrunden!)
// @description:ta      ChatGPT அமர்வுகளை புதியதாக வைத்திருக்கும், நிலையான நெட்வொர்க் பிழைகள் + Cloudflare சோதனைகள் (அனைத்தும் பின்புலத்திலிருந்து!)
// @description:th      รักษาเซสชัน ChatGPT ให้สดใหม่ กำจัดข้อผิดพลาดของเครือข่ายอย่างต่อเนื่อง + ตรวจสอบ Cloudflare (ทั้งหมดจากเบื้องหลัง!)
// @description:tr      ChatGPT oturumlarını taze tutar, sürekli ağ hatalarını ve Cloudflare kontrollerini (tamamı arka planda!) ortadan kaldırır.
// @description:ug      ChatGPT يىغىنلىرىنى يېڭى ھالەتتە ساقلايدۇ ، دائىملىق تور خاتالىقى + Cloudflare تەكشۈرۈشىنى يوقىتىدۇ (ھەممىسى ئارقا كۆرۈنۈشتىن!)
// @description:uk      Підтримує сеанси ChatGPT свіжими, усуваючи постійні помилки мережі + перевірки Cloudflare (усе у фоновому режимі!)
// @description:ur      نیٹ ورک کی مستقل خرابیوں کو ختم کرتے ہوئے چیٹ جی پی ٹی سیشنز کو تازہ رکھتا ہے + کلاؤڈ فلیئر چیکس (سب کچھ پس منظر سے!)
// @description:vi      Giữ cho các phiên ChatGPT luôn mới, loại bỏ các lỗi mạng liên tục + kiểm tra Cloudflare (tất cả từ nền!)
// @description:zh-CN   保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查（全部来自后台！）
// @description:zh-HK   保持 ChatGPT 会话新鲜，消除持续的网络错误 + Cloudflare 检查（全部来自后台！）
// @description:zh-SG   保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查（全部來自後台！）
// @description:zh-TW   保持 ChatGPT 會話新鮮，消除持續的網絡錯誤 + Cloudflare 檢查（全部來自後台！）
// @license             MIT
// @match               https://chat.openai.com/chat*
// @compatible          chrome
// @compatible          firefox
// @compatible          edge
// @compatible          opera
// @compatible          brave
// @compatible          vivaldi
// @compatible          librewolf
// @compatible          qq
// @icon                https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon48.png
// @icon64              https://raw.githubusercontent.com/adamlui/userscripts/master/chatgpt/media/icons/openai-favicon64.png
// @grant               GM_setValue
// @grant               GM_getValue
// @grant               GM_registerMenuCommand
// @grant               GM_unregisterMenuCommand
// @homepageURL         https://github.com/adamlui/chatgpt-auto-refresh
// @supportURL          https://github.com/adamlui/chatgpt-auto-refresh/issues
// ==/UserScript==

// NOTE: This script uses code from the powerful chatgpt.js library @ https://chatgptjs.org (c) 2023 Adam Lui, 冯不游 & chatgpt.js under the MIT license.

(function() {

    // Import chatgpt.js functions
    
    var chatGPTsessURL = 'https://chat.openai.com/api/auth/session';
    var autoRefreshTimer = 60; // secs between session auto-refreshes    
    var notifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
    localStorage.notifyProps = JSON.stringify(notifyProps);
    var chatgpt = {

        autoRefresh: {
            activate: function() {
                if (this.fetchID || this.beaconID) { // already running, do nothing
                    console.info('↻ ChatGPT >> Auto refresh already active!'); return; }

                var autoRefresh = this;

                // Fetch immediately then schedule
                fetch(chatGPTsessURL, { method: 'GET' }); scheduleRefresher('fetch');

                console.info('↻ ChatGPT >> Auto refresh activated');
                console.info('↻ ChatGPT >> [' + nowTimeStamp() + '] ChatGPT session refreshed (via GET-fetch)');

                if (typeof document.hidden !== 'undefined') { // if Page Visibility API supported
                    document.addEventListener('visibilitychange', function() { // add listener to switch methods
                        if (document.hidden) scheduleRefresher('beacon');
                        else { // the page became visible
                            fetch(chatGPTsessURL, { method: 'GET' }); // send fetch asap
                            console.info('↻ ChatGPT >> [' + nowTimeStamp() + '] ChatGPT session refreshed (via GET-fetch)')
                            scheduleRefresher('fetch');
                }})}

                function nowTimeStamp() {
                    var now = new Date();
                    var hours = now.getHours() % 12 || 12; // Convert to 12-hour format
                    var minutes = now.getMinutes();
                    var seconds = now.getSeconds();
                    var meridiem = now.getHours() < 12 ? 'AM' : 'PM';
                    return hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
                }

                function scheduleRefresher(refreshMethod) {
                    var thisID = ( /fetch|get/i.test(refreshMethod) ? 'fetch' : 'beacon' ) + 'ID';
                    var oppositeID = ( /fetch/.test(thisID) ? 'beacon' : 'fetch' ) + 'ID';
                    clearInterval(autoRefresh[oppositeID]); autoRefresh[oppositeID] = null;
                    autoRefresh[thisID] = setInterval(function() {
                        if (thisID.includes('fetch')) {
                            fetch(chatGPTsessURL, { method: 'GET' });
                        } else { navigator.sendBeacon(chatGPTsessURL, new Uint8Array()); }
                        console.info('↻ ChatGPT >> [' + nowTimeStamp() + '] ChatGPT session refreshed (via '
                            + ( thisID.includes('fetch') ? 'GET-fetch)' : 'POST-beacon)' ));
                    }, autoRefreshTimer * 1000);
                }
            },

            deactivate: function() {
                if (this.activate.fetchID) {
                    clearInterval(this.activate.fetchID); this.activate.fetchID = null;
                    console.info('↻ ChatGPT >> Auto refresh de-activated');
                } else if (this.activate.beaconID) {
                    clearInterval(this.activate.beaconID); this.activate.beaconID = null;
                    console.info('↻ ChatGPT >> Auto refresh de-activated');
                } else { console.info('↻ ChatGPT >> Auto refresh already inactive!'); }
            },

            toggle: function() { if (this.activate.fetchID || this.activate.beaconID) { this.deactivate(); } else { this.activate(); }}
        },

        isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

        notify: function(msg, position, notifDuration, shadow) {
            notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
            var fadeDuration = 0.6; // sec duration of fade-out
            var vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

            // Make/stylize/insert div
            var notificationDiv = document.createElement('div'); // make div
            notificationDiv.id = Math.floor(Math.random() * 1000000) + Date.now();
            notificationDiv.style.cssText = ( // stylize it
                '/* Box style */   background-color: black ; padding: 10px ; border-radius: 8px ; '
                + '/* Visibility */  opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ; '
                + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ));
            document.body.appendChild(notificationDiv); // insert into DOM

            // Determine div position/quadrant
            notificationDiv.isTop = !position || !/low|bottom/i.test(position) ? true : false;
            notificationDiv.isRight = !position || !/left/i.test(position) ? true : false;
            notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                + (notificationDiv.isRight ? 'Right' : 'Left');

            // Store div
            notifyProps = JSON.parse(localStorage.notifyProps);
            notifyProps.quadrants[notificationDiv.quadrant].push(notificationDiv.id);
            localStorage.notifyProps = JSON.stringify(notifyProps)

            // Position notification (defaults to top-right)
            notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
            notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
            notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

            // Reposition old notifications
            var thisQuadrantDivIDs = notifyProps.quadrants[notificationDiv.quadrant];
            if (thisQuadrantDivIDs.length > 1) {
                var divsToMove = thisQuadrantDivIDs.slice(0, -1); // exclude new div
                for (var j = 0; j < divsToMove.length; j++) {
                    var oldDiv = document.getElementById(divsToMove[j]);
                    var offsetProp = oldDiv.style.top ? 'top' : 'bottom'; // pick property to change
                    var vOffset = +oldDiv.style[offsetProp].match(/\d+/)[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${vOffset}px`; // change prop
            }}

            // Show notification
            notificationDiv.innerHTML = msg; // insert msg
            notificationDiv.style.transition = 'none'; // remove fade effect
            notificationDiv.style.opacity = 1; // show msg

            // Hide notification
            var hideDelay = ( // set delay before fading
                fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                : notifDuration - fadeDuration); // otherwise delay for difference
            notificationDiv.hideTimer = setTimeout(function hideNotif() { // maintain notification visibility, then fade out
                notificationDiv.style.transition = 'opacity ' + fadeDuration.toString() + 's'; // add fade effect
                notificationDiv.style.opacity = 0; // hide notification
                notificationDiv.hideTimer = null; // prevent memory leaks
            }, hideDelay * 1000); // ...after pre-set duration

            // Destroy notification
            notificationDiv.destroyTimer = setTimeout(function destroyNotif() {
                notificationDiv.remove(); // remove from DOM
                notifyProps = JSON.parse(localStorage.notifyProps)
                notifyProps.quadrants[notificationDiv.quadrant].shift(); // + memory
                localStorage.notifyProps = JSON.stringify(notifyProps); // + storage
                notificationDiv.destroyTimer = null; // prevent memory leaks
            }, Math.max(fadeDuration, notifDuration) * 1000); // ...after notification hid
        }
    };

    // Define script functions

    function registerMenu() {
        var menuID = [] // to store registered commands for removal while preserving order
        var stateSymbol = ['✔️', '❌'], stateWord = ['ON', 'OFF']
        var stateSeparator = getUserscriptManager() === 'Tampermonkey' ? ' — ' : ': '

        // Add command to toggle auto-refresh
        var arLabel = stateSymbol[+config.arDisabled] + ' Auto-Refresh ↻ '
                    + stateSeparator + stateWord[+config.arDisabled]
        menuID.push(GM_registerMenuCommand(arLabel, function() {
            chatgpt.autoRefresh.toggle()
            saveSetting('arDisabled', !config.arDisabled)
            if (!config.notifHidden) chatgpt.notify('Auto-Refresh: ' + stateWord[+config.arDisabled], '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))

        // Add command to show notifications when switching modes
        var mnLabel = stateSymbol[+config.notifHidden] + ' Mode Notifications'
                    + stateSeparator + stateWord[+config.notifHidden]
        menuID.push(GM_registerMenuCommand(mnLabel, function() {
            saveSetting('notifHidden', !config.notifHidden)
            chatgpt.notify('Mode Notifications: ' + stateWord[+config.notifHidden], '', '', chatgpt.isDarkMode() ? '' : 'shadow')
            for (var i = 0 ; i < menuID.length ; i++) GM_unregisterMenuCommand(menuID[i]) // remove all cmd's
            registerMenu() // serve fresh one
        }))
    }

    function getUserscriptManager() {
        try { return GM_info.scriptHandler } catch (error) { return "other" }}

    function loadSetting() {
        var keys = [].slice.call(arguments)
        keys.forEach(function(key) {
            config[key] = GM_getValue(configKeyPrefix + key, false)
    })}

    function saveSetting(key, value) {
        GM_setValue(configKeyPrefix + key, value) // save to browser
        config[key] = value // and memory
    }

    // Run main routine

    var config = {}, configKeyPrefix = 'chatGPTar_'
    loadSetting('arDisabled', 'notifHidden')
    registerMenu() // create browser toolbar menu
    if (!config.arDisabled) chatgpt.autoRefresh.activate()
    if (!config.notifHidden && document.title === 'New chat') {
        chatgpt.notify('Auto-Refresh: ' + (config.arDisabled ? 'OFF' : 'ON'), '', '', chatgpt.isDarkMode() ? '' : 'shadow') }

})()
