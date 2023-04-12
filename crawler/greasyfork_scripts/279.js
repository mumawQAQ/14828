// ==UserScript==
// @name	Smart Dark Mode
// @name:ar	وضع الظلام الذكي
// @name:az	Smart qaranlıq rejimi
// @name:be	Разумны цёмны рэжым
// @name:bg	Интелигентен тъмен режим
// @name:bn	স্মার্ট ডার্ক মোড
// @name:ca	Mode fosc intel·ligent
// @name:cs	Inteligentní tmavý režim
// @name:cy	Modd tywyll craff
// @name:da	Smart Dark Mode
// @name:de	Smart Dark -Modus
// @name:el	Smart Dark Mode
// @name:en	Smart Dark Mode
// @name:eo	Inteligenta Malhela Modo
// @name:es	Modo oscuro inteligente
// @name:et	Nutikas tume režiim
// @name:eu	Modu ilun adimenduna
// @name:fa	حالت تاریک هوشمند
// @name:fi	Smart Dark -tila
// @name:fr	Mode sombre intelligent
// @name:ga	Modh dorcha cliste
// @name:gl	Modo escuro intelixente
// @name:gu	સ્માર્ટ ડાર્ક મોડ
// @name:hi	स्मार्ट डार्क मोड
// @name:hr	Smart Dark Mode
// @name:ht	Smart Mode nwa
// @name:hu	Intelligens sötét mód
// @name:id	Mode Gelap Cerdas
// @name:is	Smart Dark Mode
// @name:it	Modalità scura intelligente
// @name:iw	מצב חשוך חכם
// @name:ja	スマートダークモード
// @name:ka	Smart Dark Mode
// @name:kn	ಸ್ಮಾರ್ಟ್ ಡಾರ್ಕ್ ಮೋಡ್
// @name:ko	스마트 다크 모드
// @name:la	Smart Tenebris modus
// @name:lt	Intelektualusis tamsus režimas
// @name:lv	Gudrs tumšais režīms
// @name:mk	Паметен темни режим
// @name:ms	Mod gelap pintar
// @name:mt	Mod skur intelliġenti
// @name:nl	Slimme donkere modus
// @name:no	Smart mørk modus
// @name:pl	Smart Dark Mode
// @name:pt	Modo escuro inteligente
// @name:ro	Modul întunecat inteligent
// @name:ru	Умный темный режим
// @name:sk	Smart Dark Mode
// @name:sl	Pametni temni način
// @name:sq	Mënyra e errët e zgjuar
// @name:sr	Паметни тамни режим
// @name:sv	Smart Dark Mode
// @name:sw	Njia ya giza ya Smart
// @name:ta	ஸ்மார்ட் டார்க் பயன்முறை
// @name:te	స్మార్ట్ డార్క్ మోడ్
// @name:th	โหมดมืดอัจฉริยะ
// @name:tl	Smart Dark Mode
// @name:tr	Akıllı karanlık mod
// @name:uk	Розумний темний режим
// @name:ur	اسمارٹ ڈارک موڈ
// @name:vi	Chế độ tối thông minh
// @name:yi	סמאַרט פינצטער מאָדע
// @name:zh-CN	聪明的黑暗模式
// @name:zh-TW	聰明的黑暗模式

// @description	It is a smart dark theme that automatically switches to a dark screen when the background color of the homepage is bright. Provides a filter function that allows users to add or exclude URLs to apply directly.
// @description:ar	إنه موضوع مظلم ذكي يتحول تلقائيًا إلى شاشة مظلمة عندما يكون لون الخلفية للصفحة الرئيسية مشرقًا. يوفر وظيفة مرشح تتيح للمستخدمين إضافة أو استبعاد عناوين URL للتطبيق مباشرة.
// @description:az	Ana səhifənin fon rəngi parlaq olduqda avtomatik olaraq qaranlıq bir ekrana keçən ağıllı bir tematik bir mövzudur. İstifadəçilərə birbaşa müraciət etmək üçün URL-ləri əlavə etməyə və ya istisna etməyə imkan verən bir filtr funksiyasını təmin edir.
// @description:be	Гэта разумная цёмная тэма, якая аўтаматычна пераключаецца на цёмны экран, калі колер фону хатняй старонкі яркі. Забяспечвае функцыю фільтра, якая дазваляе карыстальнікам дадаваць або выключаць URL -адрасы непасрэдна.
// @description:bg	Това е интелигентна тъмна тема, която автоматично преминава към тъмен екран, когато цветът на фона на началната страница е ярък. Предоставя функция на филтъра, която позволява на потребителите да добавят или изключват URL адреси, за да се прилагат директно.
// @description:bn	এটি একটি স্মার্ট অন্ধকার থিম যা হোমপেজের পটভূমির রঙ উজ্জ্বল হলে স্বয়ংক্রিয়ভাবে একটি গা dark ় পর্দায় স্যুইচ করে। একটি ফিল্টার ফাংশন সরবরাহ করে যা ব্যবহারকারীদের সরাসরি প্রয়োগ করতে ইউআরএল যুক্ত করতে বা বাদ দিতে দেয়।
// @description:ca	És un tema fosc intel·ligent que passa automàticament a una pantalla fosca quan el color de fons de la pàgina principal és brillant. Proporciona una funció de filtre que permet als usuaris afegir o excloure URL per aplicar directament.
// @description:cs	Je to inteligentní tmavé téma, které se automaticky přepne na tmavou obrazovku, když je barva pozadí domovské stránky jasná. Poskytuje funkci filtru, která umožňuje uživatelům přidat nebo vyloučit přímo URL.
// @description:cy	Mae'n thema dywyll glyfar sy'n newid yn awtomatig i sgrin dywyll pan fydd lliw cefndir yr hafan yn llachar. Yn darparu swyddogaeth hidlo sy'n caniatáu i ddefnyddwyr ychwanegu neu eithrio URLau i wneud cais yn uniongyrchol.
// @description:da	Det er et smart mørkt tema, der automatisk skifter til en mørk skærm, når baggrundsfarven på hjemmesiden er lys. Tilvejebringer en filterfunktion, der giver brugerne mulighed for at tilføje eller ekskludere URL'er for at anvende direkte.
// @description:de	Es ist ein intelligentes Dark -Thema, das automatisch zu einem dunklen Bildschirm wechselt, wenn die Hintergrundfarbe der Homepage hell ist. Bietet eine Filterfunktion, mit der Benutzer URLs direkt hinzufügen oder ausschließen können, um sich direkt anzuwenden.
// @description:el	Είναι ένα έξυπνο σκοτεινό θέμα που μεταβαίνει αυτόματα σε σκοτεινή οθόνη όταν το χρώμα φόντου της αρχικής σελίδας είναι φωτεινό. Παρέχει μια λειτουργία φίλτρου που επιτρέπει στους χρήστες να προσθέτουν ή να αποκλείζουν τις διευθύνσεις URL για να εφαρμόσουν απευθείας.
// @description:en	It is a smart dark theme that automatically switches to a dark screen when the background color of the homepage is bright. Provides a filter function that allows users to add or exclude URLs to apply directly.
// @description:eo	Ĝi estas inteligenta malhela temo, kiu aŭtomate ŝanĝas al malhela ekrano kiam la fonkoloro de la hejmpaĝo estas brila. Provizas filtran funkcion, kiu permesas al uzantoj aldoni aŭ ekskludi URLojn por apliki rekte.
// @description:es	Es un tema oscuro inteligente que cambia automáticamente a una pantalla oscura cuando el color de fondo de la página de inicio es brillante. Proporciona una función de filtro que permite a los usuarios agregar o excluir a las URL para aplicar directamente.
// @description:et	See on nutikas tume teema, mis lülitub automaatselt tumedale ekraanile, kui kodulehe taustvärv on hele. Pakub filtrifunktsiooni, mis võimaldab kasutajatel lisada või välistada URL -id otse.
// @description:eu	Gai ilun adimenduna da, automatikoki, pantaila ilunera automatikoki aldatzen dena, hasierako orriaren atzeko planoaren kolorea distiratsua denean. Erabiltzaileei zuzenean aplikatzeko URLak gehitu edo baztertzeko aukera ematen dien iragazki funtzioa eskaintzen du.
// @description:fa	این یک موضوع تاریک هوشمند است که وقتی رنگ پس زمینه صفحه اصلی روشن است ، به طور خودکار به یک صفحه تاریک تغییر می یابد. یک تابع فیلتر را فراهم می کند که به کاربران امکان می دهد URL ها را اضافه یا حذف کنند تا مستقیماً اعمال شوند.
// @description:fi	Se on älykäs tumma teema, joka vaihtuu automaattisesti tummalle näytölle, kun kotisivun taustaväri on kirkas. Tarjoaa suodatintoiminnon, jonka avulla käyttäjät voivat lisätä tai sulkea pois URL -osoitteet suoraan hakeakseen.
// @description:fr	Il s'agit d'un thème sombre intelligent qui passe automatiquement à un écran sombre lorsque la couleur d'arrière-plan de la page d'accueil est lumineuse. Fournit une fonction de filtre qui permet aux utilisateurs d'ajouter ou d'exclure les URL pour appliquer directement.
// @description:ga	Is téama cliste dorcha é a aistríonn go huathoibríoch chuig scáileán dorcha nuair a bhíonn dath cúlra an leathanaigh bhaile geal. Soláthraíonn sé feidhm scagtha a ligeann d'úsáideoirí URLanna a chur leis nó a eisiamh chun iarratas a dhéanamh go díreach.
// @description:gl	É un tema escuro intelixente que cambia automaticamente a unha pantalla escura cando a cor de fondo da páxina de inicio é brillante. Ofrece unha función de filtro que permite aos usuarios engadir ou excluír os URL para aplicar directamente.
// @description:gu	તે એક સ્માર્ટ ડાર્ક થીમ છે જે હોમપેજનો પૃષ્ઠભૂમિ રંગ તેજસ્વી હોય ત્યારે આપમેળે ડાર્ક સ્ક્રીન પર સ્વિચ કરે છે. ફિલ્ટર ફંક્શન પ્રદાન કરે છે જે વપરાશકર્તાઓને સીધા લાગુ કરવા માટે URL ને ઉમેરવા અથવા બાકાત રાખવા દે છે.
// @description:hi	यह एक स्मार्ट डार्क थीम है जो स्वचालित रूप से एक अंधेरे स्क्रीन पर स्विच करता है जब मुखपृष्ठ का पृष्ठभूमि रंग उज्ज्वल होता है। एक फ़िल्टर फ़ंक्शन प्रदान करता है जो उपयोगकर्ताओं को सीधे लागू करने के लिए URL को जोड़ने या बाहर करने की अनुमति देता है।
// @description:hr	To je pametna tamna tema koja se automatski prebacuje na tamni ekran kada je boja pozadine početne stranice svijetla. Pruža funkciju filtra koja korisnicima omogućuje dodavanje ili isključivanje URL -ova da se izravno primjenjuju.
// @description:ht	Li se yon tèm entelijan nwa ki otomatikman chanje nan yon ekran nwa lè koulè a ​​background nan paj dakèy la se klere. Ofri yon fonksyon filtre ki pèmèt itilizatè yo ajoute oswa eskli URL pou aplike dirèkteman.
// @description:hu	Ez egy intelligens sötét téma, amely automatikusan egy sötét képernyőre vált, amikor a honlap háttérszíne fényes. Biztosít egy szűrő funkciót, amely lehetővé teszi a felhasználók számára, hogy az URL -ek hozzáadását vagy kizárását közvetlenül alkalmazzák.
// @description:id	Ini adalah tema gelap yang cerdas yang secara otomatis beralih ke layar gelap ketika warna latar belakang beranda cerah. Menyediakan fungsi filter yang memungkinkan pengguna untuk menambah atau mengecualikan URL untuk diterapkan secara langsung.
// @description:is	Það er snjallt dökkt þema sem skiptir sjálfkrafa yfir á dökkan skjá þegar bakgrunnslit heimasíðunnar er björt. Býður upp á síuaðgerð sem gerir notendum kleift að bæta við eða útiloka vefslóðir til að beita beint.
// @description:it	È un tema scuro intelligente che passa automaticamente a uno schermo scuro quando il colore di sfondo della homepage è luminoso. Fornisce una funzione di filtro che consente agli utenti di aggiungere o escludere gli URL da applicare direttamente.
// @description:iw	זהו נושא כהה חכם שעובר אוטומטית למסך כהה כאשר צבע הרקע של דף הבית בהיר. מספק פונקציית פילטר המאפשרת למשתמשים להוסיף או לא לכלול כתובות אתרים להחיל ישירות.
// @description:ja	ホームページの背景色が明るいときに、暗い画面に自動的に切り替えるスマートな暗いテーマです。ユーザーが直接適用するためにURLを追加または除外できるフィルター関数を提供します。
// @description:ka	ეს არის ჭკვიანი მუქი თემა, რომელიც ავტომატურად გადადის მუქი ეკრანზე, როდესაც საწყისი საწყისი ფონის ფერი ნათელია. უზრუნველყოფს ფილტრის ფუნქციას, რომელიც მომხმარებლებს საშუალებას აძლევს დაამატოთ ან გამორიცხონ URL– ები პირდაპირ მიმართონ.
// @description:kn	ಇದು ಸ್ಮಾರ್ಟ್ ಡಾರ್ಕ್ ಥೀಮ್ ಆಗಿದ್ದು ಅದು ಮುಖಪುಟದ ಹಿನ್ನೆಲೆ ಬಣ್ಣವು ಪ್ರಕಾಶಮಾನವಾದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಡಾರ್ಕ್ ಸ್ಕ್ರೀನ್‌ಗೆ ಬದಲಾಯಿಸುತ್ತದೆ. ಫಿಲ್ಟರ್ ಕಾರ್ಯವನ್ನು ಒದಗಿಸುತ್ತದೆ ಅದು ಬಳಕೆದಾರರಿಗೆ ನೇರವಾಗಿ ಅನ್ವಯಿಸಲು URL ಗಳನ್ನು ಸೇರಿಸಲು ಅಥವಾ ಹೊರಗಿಡಲು ಅನುಮತಿಸುತ್ತದೆ.
// @description:ko	홈페이지의 배경색이 밝을 때 자동으로 어두운 화면으로 전환되는 스마트 어두운 테마입니다. 사용자가 URL을 추가하거나 제외 할 수있는 필터 기능을 제공합니다.
// @description:la	Est dolor tenebris theme quod automatice virgas ad a tenebris screen cum background color de homepage est clara. Descendit filter munus quod concedit users addere vel excludere delata adhibere directe.
// @description:lt	Tai protinga tamsi tema, kuri automatiškai pereina į tamsų ekraną, kai pagrindinio puslapio fono spalva yra ryški. Suteikia filtro funkciją, leidžiančią vartotojams pridėti arba neįtraukti URL, kad būtų galima tiesiogiai pritaikyti.
// @description:lv	Tā ir gudra tumša tēma, kas automātiski pārslēdzas uz tumšu ekrānu, kad mājas lapas fona krāsa ir spilgta. Nodrošina filtra funkciju, kas lietotājiem ļauj pievienot vai izslēgt URL tieši pieteikties.
// @description:mk	Тоа е паметна темна тема која автоматски се префрла на темен екран кога бојата на позадината на почетната страница е светла. Овозможува функција за филтрирање што им овозможува на корисниците да додаваат или исклучуваат URL -адреси за директно да се применуваат.
// @description:ms	Ia adalah tema gelap pintar yang secara automatik beralih ke skrin gelap apabila warna latar belakang laman web cerah. Menyediakan fungsi penapis yang membolehkan pengguna menambah atau mengecualikan URL untuk memohon secara langsung.
// @description:mt	Hija tema skura intelliġenti li awtomatikament taqleb għal skrin skur meta l-kulur tal-isfond tal-paġna ewlenija jkun qawwi. Jipprovdi funzjoni tal-filtru li tippermetti lill-utenti jżidu jew jeskludu l-URLs biex japplikaw direttament.
// @description:nl	Het is een slim donker thema dat automatisch schakelt naar een donker scherm wanneer de achtergrondkleur van de startpagina helder is. Biedt een filterfunctie waarmee gebruikers URL's kunnen toevoegen of uitsluiten om direct toe te passen.
// @description:no	Det er et smart mørkt tema som automatisk bytter til en mørk skjerm når bakgrunnsfargen på hjemmesiden er lys. Tilbyr en filterfunksjon som lar brukere legge til eller ekskludere nettadresser til å gjelde direkte.
// @description:pl	Jest to inteligentny ciemny motyw, który automatycznie przełącza się na ciemny ekran, gdy kolor tła strony głównej jest jasny. Zapewnia funkcję filtra, która pozwala użytkownikom dodawać lub wykluczać adresy URL do bezpośredniego zastosowania.
// @description:pt	É um tema sombrio inteligente que muda automaticamente para uma tela escura quando a cor de fundo da página inicial é brilhante. Fornece uma função de filtro que permite que os usuários adicionem ou excluam URLs para aplicar diretamente.
// @description:ro	Este o temă întunecată inteligentă, care trece automat la un ecran întunecat atunci când culoarea de fundal a paginii de pornire este luminoasă. Oferă o funcție de filtru care permite utilizatorilor să adauge sau să excludă URL -urile să se aplice direct.
// @description:ru	Это умная темная тема, которая автоматически переключается на темный экран, когда цвет фона домашней страницы яркий. Предоставляет функцию фильтра, которая позволяет пользователям добавлять или исключать URL -адреса, чтобы применять напрямую.
// @description:sk	Je to inteligentná tmavá téma, ktorá sa automaticky prepne na tmavú obrazovku, keď je farba pozadia domovskej stránky jasná. Poskytuje funkciu filtra, ktorá umožňuje používateľom pridávať alebo vylúčiť adresy URL, ktoré sa majú priamo aplikovať.
// @description:sl	To je pametna temna tema, ki samodejno preklopi na temen zaslon, ko je barva ozadja domače strani svetla. Omogoča funkcijo filtra, ki uporabnikom omogoča, da neposredno dodajajo ali izključijo URL -je.
// @description:sq	Shtë një temë e zgjuar e errët që automatikisht kalon në një ekran të errët kur ngjyra e sfondit të faqes kryesore është e ndritshme. Ofron një funksion filtri që lejon përdoruesit të shtojnë ose përjashtojnë URL -të që të aplikojnë direkt.
// @description:sr	То је паметна тамна тема која се аутоматски пребацује на тамни екран када је боја позадине почетне странице светла. Пружа функцију филтра која омогућава корисницима да додају или искључе УРЛ адресе да би се директно пријавили.
// @description:sv	Det är ett smart mörkt tema som automatiskt växlar till en mörk skärm när bakgrundsfärgen på hemsidan är ljus. Tillhandahåller en filterfunktion som gör det möjligt för användare att lägga till eller utesluta webbadresser att applicera direkt.
// @description:sw	Ni mandhari nzuri ya giza ambayo hubadilika kiotomatiki kwenye skrini ya giza wakati rangi ya nyuma ya ukurasa wa nyumbani ni mkali. Hutoa kazi ya kichujio ambayo inaruhusu watumiaji kuongeza au kuwatenga URL kuomba moja kwa moja.
// @description:ta	இது ஒரு ஸ்மார்ட் இருண்ட தீம், முகப்புப்பக்கத்தின் பின்னணி நிறம் பிரகாசமாக இருக்கும்போது தானாகவே இருண்ட திரைக்கு மாறுகிறது. ஒரு வடிகட்டி செயல்பாட்டை வழங்குகிறது, இது பயனர்களை நேரடியாக விண்ணப்பிக்க URL களைச் சேர்க்க அல்லது விலக்க அனுமதிக்கிறது.
// @description:te	ఇది స్మార్ట్ డార్క్ థీమ్, ఇది హోమ్‌పేజీ యొక్క నేపథ్య రంగు ప్రకాశవంతంగా ఉన్నప్పుడు స్వయంచాలకంగా చీకటి తెరపైకి మారుతుంది. ఫిల్టర్ ఫంక్షన్‌ను అందిస్తుంది, ఇది వినియోగదారులను నేరుగా వర్తింపజేయడానికి URL లను జోడించడానికి లేదా మినహాయించడానికి అనుమతిస్తుంది.
// @description:th	มันเป็นธีมสมาร์ทมืดที่เปลี่ยนเป็นหน้าจอสีเข้มโดยอัตโนมัติเมื่อสีพื้นหลังของหน้าแรกสว่าง จัดเตรียมฟังก์ชั่นตัวกรองที่อนุญาตให้ผู้ใช้เพิ่มหรือยกเว้น URL เพื่อใช้โดยตรง
// @description:tl	Ito ay isang matalinong madilim na tema na awtomatikong lumipat sa isang madilim na screen kapag ang kulay ng background ng homepage ay maliwanag. Nagbibigay ng isang function ng filter na nagbibigay -daan sa mga gumagamit na magdagdag o ibukod ang mga URL upang mag -aplay nang direkta.
// @description:tr	Ana sayfanın arka plan rengi parlak olduğunda otomatik olarak karanlık bir ekrana geçen akıllı bir karanlık temadır. Kullanıcıların doğrudan uygulanması için URL'leri eklemelerine veya hariç tutmasına olanak tanıyan bir filtre işlevi sağlar.
// @description:uk	Це розумна темна тема, яка автоматично перемикається на темний екран, коли колір фону є яскравою. Забезпечує функцію фільтра, яка дозволяє користувачам додавати або виключати URL -адреси безпосередньо застосовуватись.
// @description:ur	یہ ایک ہوشیار تاریک تھیم ہے جو ہوم پیج کا پس منظر کا رنگ روشن ہونے پر خود بخود تاریک اسکرین پر بدل جاتا ہے۔ ایک فلٹر فنکشن مہیا کرتا ہے جو صارفین کو براہ راست درخواست دینے کے لئے یو آر ایل کو شامل کرنے یا خارج کرنے کی اجازت دیتا ہے۔
// @description:vi	Đó là một chủ đề tối thông minh tự động chuyển sang màn hình tối khi màu nền của trang chủ sáng. Cung cấp chức năng bộ lọc cho phép người dùng thêm hoặc loại trừ URL để áp dụng trực tiếp.
// @description:yi	עס איז אַ קלוג פינצטער טעמע וואָס אויטאָמאַטיש סוויטשאַז צו אַ טונקל פאַרשטעלן ווען די הינטערגרונט פֿאַרב פון די האָמעפּאַגע איז העל. גיט אַ פילטער פונקציע וואָס אַלאַוז ניצערס צו לייגן אָדער ויסשליסן URL ס צו צולייגן גלייַך.
// @description:zh-CN	这是一个智能的深色主题，当主页的背景颜色明亮时，它会自动切换到深色屏幕。提供了一个允许用户添加或排除URL直接应用的过滤功能。
// @description:zh-TW	這是一個智能的深色主題，當主頁的背景顏色明亮時，它會自動切換到深色屏幕。提供了一個允許用戶添加或排除URL直接應用的過濾功能。

// @namespace         https://ndaesik.tistory.com/
// @version           2023.04.05.11.58
// @author            ndaesik
// @icon              data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23232323' class='bi bi-moon-stars-fill' viewBox='0 0 16 16'%3e%3cpath d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z'/%3e%3cpath d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'/%3e%3c/svg%3e
// @match             *://*/*

// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM_registerMenuCommand
// @run-at            document-start
// ==/UserScript==

// prevent blink
if (self == top) {
    let preventBlinkCSS = document.createElement('style')
    preventBlinkCSS.innerText = `* {background:#202124!important; border-color:#3c4043!important; color-scheme:dark!important; color:#bdc1c6!important; transition: unset!important}`
    preventBlinkCSS.classList.add('preventBlinkCSS')
    document.head?.appendChild(preventBlinkCSS)
}

// main.js
window.addEventListener('load', _ => {
    (async _ => {
        let settings = await GM.getValue('settings', Promise.resolve(['hotKeySetOn', 'Ctrl + D', 'setTimeOff', '18:00', '07:00']));
        settings = JSON.parse(settings.replace(/'/g, '"'));
        let alwaysOnList = await GM.getValue('alwaysOnList', Promise.resolve(''));
        let alwaysOffList = await GM.getValue('alwaysOffList', Promise.resolve('youtube.com/live_chat'));
        let checkUrlExist = list => {
            return (list.replaceAll(/\s/g, '').split(/[\r\n]+|,/g) != '' && list.replaceAll(/\s/g, '').split(/[\r\n]+|,/g).filter(a => window.document.URL.indexOf(a) > -1).length > 0) ? true : false
        }
        let saveSettings = _ => {
            GM.setValue('alwaysOnList', document.querySelector('#SDM_on_textarea').value.replace(/^, ?/, ''));
            GM.setValue('alwaysOffList', document.querySelector('#SDM_off_textarea').value.replace(/^, ?/, ''));
            GM.setValue('settings', `['${document.querySelector('#SDM_hotkey').checked ? 'hotKeySetOn' : 'hotKeySetOff'}','${document.querySelector('#SDM_hotkey_input').value}','${document.querySelector('#SDM_timeSet').checked ? 'setTimeOn' : 'setTimeOff'}','${document.querySelector('#SDM_timeSet_input_from').value}','${document.querySelector('#SDM_timeSet_input_to').value}']`);
        }
        let toggleOption = _ => {
            let e = document.querySelector('#SDM_body');
            if (e.style.display == 'none') {
                e.style.display = 'block';
            } else {
                e.style.display = 'none';
            }
        }
        let applyFilter = _ => document.head.appendChild(drkMo);
        let toggleFilter = _ => {
            if (document.querySelector('style.drkMo') == null) {
                applyFilter();
                document.querySelector('#SDM_toggle').checked = true;
            } else {
                document.querySelectorAll('style.drkMo').forEach(e => e.remove());
                document.querySelector('#SDM_toggle').checked = false;
            }
        }

        // add option div in DOM
        document.body.insertAdjacentHTML('beforeend', `
<div id="SDM_body" style="display: none">
    <div id="SDM_header">
        <input id="SDM_about_tab_button" type="radio" name="SDM_tab_toggle" checked>
        <label for="SDM_about_tab_button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/> </svg>
        </label>
        <div id="SDM_right_side">
            <input id="SDM_settings_tab_button" type="radio" name="SDM_tab_toggle">
            <label for="SDM_settings_tab_button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z" style="fill:none;stroke:#bdc1c6;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
            </label>
            <a id="SDM_add_page" class="SDM_header_buttons" title="${langTxt(1)}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/> </svg>
            </a>
            <input id="SDM_toggle" type="checkbox">
            <label for="SDM_toggle" class="SDM_header_buttons" title="${settings[1]}">
                <svg xmlns="http://www.w3.org/2000/svg" class="SDM_off" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="SDM_on" fill="currentColor" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>
            </label>
            <a id="SDM_close_window" class="SDM_header_buttons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
            </a>
        </div>
    </div>
    <input id="SDM_on_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_on_tab_button">On</label>
    <input id="SDM_off_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_off_tab_button">Off</label>
    <div id="SDM_main">
        <div id="SDM_about_tab" class="SDM_tab" style="display: block"></div>
        <div id="SDM_settings_tab" class="SDM_tab" style="display: none">
            <div>
                <input id="SDM_hotkey" type="checkbox" ${settings[0] == 'hotKeySetOn' ? 'checked' : ''}>
                <label for="SDM_hotkey" class="SDM_checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_off" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_on" fill="currentColor" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>
                </label>
                <span>${langTxt(3)}</span>
                <input id="SDM_hotkey_input" type="textarea" value="${settings[1]}">
            </div>
            <div>
                <input id="SDM_timeSet" type="checkbox" ${settings[2] == 'setTimeOn' ? 'checked' : ''}>
                <label for="SDM_timeSet" class="SDM_checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_off" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_on" fill="currentColor" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>
                </label>
                <span>${langTxt(4)}</span>
                <input id="SDM_timeSet_input_from" class="SDM_timeSet_input"type="textarea" value="${settings[3]}" maxlength="5">
                <span>~</span>
                <input id="SDM_timeSet_input_to" class="SDM_timeSet_input"type="textarea" value="${settings[4]}" maxlength="5">
            </div>
        </div>
        <textarea id="SDM_on_textarea" class="SDM_tab" style="display: none" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOnList}</textarea>
        <textarea id="SDM_off_textarea" class="SDM_tab" style="display: none" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOffList}</textarea>
    </div>
</div>

<style>
#SDM_body {background-color: #171717!important; height: 430px!important; position: fixed!important; top: 25px!important; right: 25px!important; width: 316px!important; z-index: 2147483647!important; box-shadow: 0 4px 6px 0 #171717!important; user-select: none!important;}
#SDM_body :not(#SDM_all) {color:#bdc1c6!important;}
#SDM_body :is(div, textarea, input, label) {all: initial;}
#SDM_body [type="radio"],
#SDM_body [type="checkbox"] {visibility: hidden!important; width: 0!important; position: absolute!important;}
#SDM_body svg {width: 16px!important; height: 16px!important}
#SDM_body [type="checkbox"] + label svg {display: none!important;}
#SDM_body [type="checkbox"]:not(:checked) + label svg.SDM_off,
#SDM_body [type="checkbox"]:checked + label svg.SDM_on {display: inline!important;}
#SDM_body [type="checkbox"] + label svg.SDM_on path,
#SDM_body svg:hover path,
#SDM_body input:checked + label path {fill: orange!important;}

#SDM_header {display: block!important; width: 100%!important; height: 34px!important; padding-top: 10px!important;}
#SDM_header input#SDM_settings_tab_button + label svg:hover path,
#SDM_header input#SDM_settings_tab_button:checked + label path {fill:none!important; stroke:orange!important;}

#SDM_header > #SDM_about_tab_button + label {float: left!important; padding-left: 15px!important;}
#SDM_header > [name="SDM_tab_toggle"]:checked ~ #SDM_right_side #SDM_add_page,
#SDM_header [name="SDM_tab_toggle"]:checked ~ #SDM_add_page {pointer-events: none!important; opacity:.3!important;}
#SDM_header > #SDM_right_side label {height:16px!important; width: 16px!important}
#SDM_header > #SDM_right_side {display:flex!important; align-items:center!important; float: right!important; padding-right: 15px!important;}
#SDM_header > #SDM_right_side .SDM_header_buttons {padding-left: 12px!important; line-height: 15px!important; height: 15px!important; text-decoration: none!important;}
#SDM_header ~ label {float:left!important; font-weight: bold!important; opacity: .3!important; height: 34px!important; line-height:34px!important; width: 50%!important; display: inline-block!important; vertical-align:top!important; user-select: none!important; text-align: center!important; border-bottom: 2px transparent solid!important;}
#SDM_header ~ label:hover {opacity: 1!important;}
#SDM_header ~ input:checked + label:not(#_) {opacity: 1!important; border-color: orange!important; color: orange!important}

#SDM_main {display:inline-block!important; box-shadow: inset 0 7px 9px -7px rgba(0,0,0,.4)!important; background-color: #202124!important;}
#SDM_main > #SDM_about_tab {white-space:pre-line!important}
#SDM_main > :not(#SDM_all) {background-color: transparent!important; height: 328px!important; font-size: 16px!important; padding: 12px!important; max-width: calc(316px - 24px)!important; min-width: calc(316px - 24px)!important; width: calc(316px - 24px)!important; border:0!important;}
#SDM_main > textarea {outline: none!important; resize: none!important; color-scheme: dark!important}
#SDM_main > textarea::placeholder {color: #bdc1c6!important; opacity:.3!important; font-weight: normal!important;}
#SDM_main > #SDM_settings_tab label {padding-left:5px!important;}
#SDM_main > #SDM_settings_tab > div {display:block!important; margin-top: 20px!important;}
#SDM_main > #SDM_settings_tab [type="checkbox"]:not(:checked) + label ~ * {opacity:.3!important}
#SDM_main > #SDM_settings_tab label + span {display:inline-block!important; width:125px!important; margin-left:10px!important}
#SDM_main > #SDM_settings_tab label + span + #SDM_hotkey_input {width:120px!important}
#SDM_main > #SDM_settings_tab label + span ~ .SDM_timeSet_input {width:40px!important}
#SDM_main > #SDM_settings_tab label + span + input:focus {background-color:#bdc1c6!important; color:#171717!important}
</style>
`)

        // color inverter CSS
        let drkMo = document.createElement('style')
        drkMo.innerText = `
html {color-scheme: dark!important; color: #000}
html * {color-scheme: light!important; text-shadow: 0 0 .1px}
html body {background: none!important}
#SDM_body,
html, html :is(img, image, embed, video, canvas, option, object, :fullscreen:not(iframe), iframe:not(:fullscreen)),
html body>* [style*="url("]:not([style*="cursor:"]):not([type="text"]) {filter: invert(1)hue-rotate(180deg)!important}
html body>* [style*="url("]:not([style*="cursor:"]) :not(#_),
html:not(#_) :is(canvas, option, object) :is(img, image, embed, video),
html:not(#_) :is(video:fullscreen, img[src*="/svg/"], img[src*=".svg."], img[src*="fonts.gstatic.com/s/i/"]) {filter: unset!important}`
        drkMo.classList.add('drkMo')

        // apply main CSS
        document.querySelector('.preventBlinkCSS')?.remove()
        if (checkUrlExist(alwaysOnList) && checkTimeSet()) {
            applyFilter()
        } else if (checkUrlExist(alwaysOffList)) {
            // do nothing
        } else if (checkTimeSet()) {
            let bdyH0 = window.parent.document.body.offsetHeight == 0;
            let frame = self != top;
            let elems = document.querySelectorAll('body > :not(script)');
            let check = (o, t = 0) => {
                let n = n => {
                    return parseInt(getComputedStyle(document.querySelectorAll(o)[t]).getPropertyValue('background-color').match(/\d+/g)[n])
                };
                return (n(0) * 0.299 + n(1) * 0.587 + n(2) * 0.114) > 186 || n(3) == 0;
            }
            if ((!frame && !bdyH0 || frame) && check('html') && check('body')) applyFilter();
            if (!frame && bdyH0) {
                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].scrollHeight > window.innerHeight && check('body > :not(script)', i)) applyFilter()
                }
            };
        } else {
            // do nothing
        }

        // SDM_hotkey function
        document.addEventListener("keydown", function(event) {
            if (event.target.id === 'SDM_hotkey_input') {
                let combinationKeys = '';
                if (event.ctrlKey && event.key !== 'Control') combinationKeys += 'Ctrl + ';
                if (event.altKey && event.key !== 'Alt') combinationKeys += 'Alt + ';
                if (event.shiftKey && event.key !== 'Shift') combinationKeys += 'Shift + ';

                let key = event.key;
                if (/^[a-z]$/.test(key)) {
                    key = key.toUpperCase();
                }

                if (combinationKeys) {
                    document.getElementById('SDM_hotkey_input').value = combinationKeys + key;
                } else if (key !== 'Control' && key !== 'Alt' && key !== 'Shift') {
                    document.getElementById('SDM_hotkey_input').value = key;
                }
                event.preventDefault();
            }
        });

        // GDM_timeSet function
        const timeSetEls = document.querySelectorAll('#SDM_settings_tab [type="textarea"]');
        for (let i = 0; i < timeSetEls.length; i++) {
            timeSetEls[i].addEventListener('focus', function() {
                this.select();
            });
        }

        function formatTime(num) {
            let numStr = num.toString();
            if (numStr.length === 3) {
                numStr = '0' + numStr;
            }
            if (numStr.length !== 4) {
                return null;
            }
            if (numStr.indexOf(':') === -1) {
                numStr = numStr.slice(0, 2) + ':' + numStr.slice(2);
            }
            let hour = numStr.slice(0, 2);
            let minute = numStr.slice(3);
            let hourInt = parseInt(hour);
            let minuteInt = parseInt(minute);
            if (hourInt >= 24) {
                return null;
            }
            if (minuteInt >= 60) {
                return null;
            }
            return `${hour}:${minute}`;
        }

        const inputFields = document.querySelectorAll('.SDM_timeSet_input');
        let prevValues = ['', ''];

        function handleInputChange(event, index) {
            const inputValue = event.target.value;
            if (inputValue.length === 4) {
                const formattedValue = formatTime(inputValue);
                if (formattedValue === null) {
                    event.target.value = prevValues[index];
                } else {
                    event.target.value = formattedValue;
                    prevValues[index] = formattedValue;
                }
            }
        }

        for (let i = 0; i < inputFields.length; i++) {
            const inputField = inputFields[i];
            prevValues[i] = inputField.value;
            inputField.addEventListener('blur', (event) => {
                const inputValue = event.target.value;
                const formattedValue = formatTime(inputValue);
                if (formattedValue === null) {
                    event.target.value = prevValues[i];
                } else {
                    event.target.value = formattedValue;
                    prevValues[i] = formattedValue;
                }
            });
            inputField.addEventListener('input', (event) => handleInputChange(event, i));
            inputField.addEventListener('keydown', (event) => {
                if (!/^[0-9]$/.test(event.key)) {
                    event.preventDefault();
                }
            });
        }

        function checkTimeSet() {
            const startStr = document.querySelector('input#SDM_timeSet_input_from').value;
            const endStr = document.querySelector('input#SDM_timeSet_input_to').value;
            const [startHour, startMinute] = startStr.split(':').map(str => parseInt(str));
            const [endHour, endMinute] = endStr.split(':').map(str => parseInt(str));
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            if (document.querySelector('input#SDM_timeSet').checked) {
                if (startHour <= endHour) {
                    if (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) {
                        if (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    if (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) {
                        if (currentHour < 24 || (currentHour === 24 && currentMinute === 0)) {
                            return true;
                        } else {
                            return false;
                        }
                    } else if (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) {
                        return true;
                    } else {
                        return false;
                    }
                }
            } else {
                return true;
            }
        }

        // SDM_toggle function
        document.querySelector('style.drkMo') ? (document.querySelector('#SDM_toggle').checked = true) : (document.querySelector('#SDM_toggle').checked = false);
        document.querySelector('#SDM_toggle').onclick = _ => toggleFilter();

        // SDM_toggle with hotkey
        document.addEventListener("keydown", e => {
            let setKey = document.querySelector('#SDM_hotkey_input').value.split(' + ');
            let combKeys = {
                Ctrl: e.ctrlKey,
                Shift: e.shiftKey,
                Alt: e.altKey
            };
            let pressed = (send) => e.key.toUpperCase() == send.toUpperCase();

            if (document.activeElement.localName !== ("input" || "textarea")) {
                let isCombKeyPressed = setKey.every(key => combKeys[key] || pressed(key));

                let pressedCombKeysCount = Object.values(combKeys).filter(value => value).length;
                let isExactMatch = setKey.length === pressedCombKeysCount + 1;

                if (isCombKeyPressed && isExactMatch) {
                    e.preventDefault();
                    toggleFilter();
                }
            }
        });

        // SDM_tab_toggle change function
        const tabButtons = document.querySelectorAll('[name="SDM_tab_toggle"]');
        const tabs = document.querySelectorAll('.SDM_tab');

        tabButtons.forEach((button, index) => {
            button.addEventListener('change', () => {
                if (button.checked) {
                    tabs.forEach((tab) => {
                        tab.style.display = 'none';
                    });
                    document.querySelectorAll('.SDM_tab')[index].style.display = 'block';
                }
            });
        });

        // SDM_add_page function
        document.querySelector('#SDM_add_page').onclick = _ => {
            let domain = `, ${new URL(document.URL).hostname.replace('www.','')}`;
            if (document.querySelector('#SDM_on_tab_button:checked') != null) {
                document.querySelector('#SDM_on_textarea').value += domain
            };
            if (document.querySelector('#SDM_off_tab_button:checked') != null) {
                document.querySelector('#SDM_off_textarea').value += domain
            };
        }

        // SDM_close_window function
        document.querySelector('#SDM_close_window').onclick = _ => toggleOption();

        // Descriptions
        function langTxt(i) {
            switch (window.navigator.language) {
                case 'ko':
                    return [`"On" 탭 URL은 테마를 적용하지만 "Off" 탭은 적용하지 않습니다.\n도메인은 쉼표와 줄 바꿈으로 구분됩니다.`, `현재 도메인을 목록에 추가.`, `필터 스위치`, `필터 단축키`, `시간 설정`][i];
                case 'zh-TW':
                case 'zh-HK':
                case 'zh-SG':
                    return [`"On"標籤 URL 應用主題但不應用"Off"標籤 。\n域分爲逗號和換行 。`, `將當前網域添加到列表中。`, `過濾開關`, `過濾熱鍵`, `設置時間`][i];
                case 'es':
                    return [`La URL de la pestaña "On" aplica el tema, pero la pestaña "Off" no.\nLa línea principal se divide en coma y cambio de línea.`, `Agregar el dominio actual a la lista.`, `Interruptor de filtro`, `Atajo de filtro`, `Establecer hora`][i];
                case 'fr':
                    return [`L'URL de l'onglet "On" applique le thème, mais pas l'onglet "Off".\nLes domaines sont séparés par des virgules et des lignes.`, `Ajouter le domaine actuel à la liste.`, `Interrupteur de filtre`, `Raccourci filtre`, `Régler l'heure`][i];
                case 'de':
                    return [`Die URL der Registerkarte "On" setzt das Thema an, aber nicht die Registerkarte "Off".\nDomains werden durch Kommata und Zeilenumbrüche getrennt.`, `Die aktuelle Domain zur Liste hinzufügen.`, `Filter Schalter`, `Filter Shortcut`, `Uhrzeit einstellen`][i];
                case 'it':
                    return [`La scheda "On" URL applica il tema, ma non la scheda "Off".\nI domini sono separati da una virgola e da un'interruzione di riga.`, `Aggiungi il dominio corrente all'elenco.`, `Interruttore del filtro`, `Scorciatoia filtro`, `Imposta ora`][i];
                case 'vi':
                    return [`URL của tab "On" áp dụng chủ đề nhưng tab "Off" không áp dụng.\nDomain được phân loại bằng dấu phẩy và thay đổi dòng.`, `Thêm miền hiện tại vào danh sách.`, `Công tắc bộ lọc`, `Phím tắt bộ lọc`, `Đặt giờ`][i];
                case 'th':
                    return [`ที่อยู่ URL ของแท็บ "On" ใช้ธีม แต่ไม่ใช้แท็บ "Off"\nโดเมนถูกแบ่งออกเป็นลูกน้ำและการสลับบรรทัด`, `เพิ่มโดเมนปัจจุบันในรายการ.`, `สวิตช์กรอง`, `แป้นพิมพ์ลัดตัวกรอง`, `ตั้งเวลา`][i];
                case 'id':
                    return [`URL tab "On" menerapkan tema, namun tab "Off" tidak diterapkan.\nDomain terbagi menjadi koma dan perubahan baris.`, `Tambahkan domain saat ini ke daftar.`, `Saklar Filter`, `Pintasan Filter`, `Atur Waktu`][i];
                case 'zh-CN':
                    return [`"On"标签 URL 应用主题但不应用"Off"标签 。\n域分为逗号和换行 。`, `将当前域添加到列表中。`, `过滤开关`, `过滤快捷键`, `设置时间`][i];
                case 'ja':
                    return [`"On"タブURLはテーマを適用しますが、"Off"タブは適用されません。\nドメインはコンマと行違いに区分されます。`, `現在のドメインをリストに追加する。`, `フィルタースイッチ`, `フィルターショートカ`, `時間設定する`][i];
                case 'ru':
                    return [`URL вкладки "On" применяет тему, но вкладка "Off" не применяется.\ndomain делится на запятую и запятую.`, `Добавить текущий домен в список.`, `фильтр-переключатель`, `фильтр-горячка`, `Установить время`][i];
                default:
                    return [`"On" tab URLs apply themes, but not "Off" tab URLs.\nDomains are separated by commas and line breaks.`, `Add the current domain to the list.`, `Filter Switch`, `Filter Hotkey`, `Set Time`][i];
            }
        }
        document.querySelector('#SDM_about_tab').textContent = langTxt(0);

        // save
        ['click', 'blur', 'DOMSubtreeModified'].forEach(eventType => {
            document.querySelector('#SDM_body').addEventListener(eventType, saveSettings)
        });

        // tampermonkey menu
        GM_registerMenuCommand('On/Off', toggleFilter);
        GM_registerMenuCommand('Filter', toggleOption);
    })()
})