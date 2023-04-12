// ==UserScript==
// @name         Pagetual
// @name:zh-CN   东方永页机
// @name:zh-TW   東方永頁機
// @name:ja      東方永頁機
// @name:ru      Pagetual
// @name:de      Pagetual
// @name:es      Pagetual
// @name:fr      Pagetual
// @name:it      Pagetual
// @name:ko      東方永頁機
// @namespace    hoothin
// @version      1.9.35.15
// @description  Perpetual pages - Most powerful auto-pager script. Auto loading next paginated web pages and inserting into current page. Support thousands of web sites without any rule.
// @description:zh-CN  终极自动翻页 - 加载并拼接下一分页内容至当前页尾，智能适配任意网页
// @description:zh-TW  終極自動翻頁 - 加載並拼接下一分頁內容至當前頁尾，智能適配任意網頁
// @description:ja     Webページを自動で読み込み継ぎ足し表示を行うブラウザ拡張です、次のページ付けされた Web ページの自動読み込みと現在のページへの挿入 ルールなしで何千もの Web サイトをサポートします。
// @description:ru     Автоматическая подгрузка следующих страниц и вставка их содержимого в текущую страницу. Поддерживает тысячи сайтов даже с настройками по умолчанию.
// @description:de     Automatisches Laden der nächsten paginierten Webseiten und Einfügen in die aktuelle Seite. Unterstützen Sie Tausende von Websites ohne Regeln.
// @description:es     Carga automática de las siguientes páginas web paginadas e inserción en la página actual. Admite miles de sitios web sin ninguna regla.
// @description:fr     Chargement automatique des pages Web paginées suivantes et insertion dans la page en cours. Prend en charge des milliers de sites Web sans aucune règle.
// @description:it     Caricamento automatico delle pagine Web impaginate successive e inserimento nella pagina corrente. Supporta migliaia di siti web senza alcuna regola.
// @description:ko     페이지가 매겨진 다음 웹 페이지를 자동으로 로드하고 현재 페이지에 삽입합니다. 규칙 없이 수천 개의 웹 사이트를 지원합니다.
// @author       hoothin
// @license      MPL License
// @match        *://*/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAdVBMVEUAAAD3VU33VU32VEz8U073VU32VU33VU32VUz0Uk/3VE32VU32VUz2VU32VU32VU32VU33VU33U0z2VU34Wkv3VE32VUz/mpj/nJj2VUz2VU32VE33VEz2VU32VU32VUz3VE32VEz3VE3/mZf2Vkz2VU3/mpilFFolAAAAJXRSTlMA3Lp/GvTBT5YQLuawZ/DOyZwlPQeKc21N04+FX1bqpm9DNoB4T68ePwAAAitJREFUWMPt1tuasiAUBuCFCG5Rs3QybTPV1/1f4v/3PDkyIojn8x5qBrI+ltAfh32/yysmBKvyXb+njb6bDL9kzTd5SzjDAsYT8nFoGSxYe6BVqoNDp2jFDit25BRgVUAODB4YWcETWVTwVNGiGN5iWtBgg4YMCpsoI38dNunmmWyxUTvbPwwbsYR0fIzZLQ0pTG8eieRmBLMmpdH9uimQEf6TNRnXXKLZHixpJtywLzOgMHtFCqdM64DahHRnOE1dsrekm9wr2WtLcAlpdHwcp1pAJySXYnERclzp4+v19jXdmcTvQUJtz+ZaI4i05/V/UGYrCxbaAsOYoNfIKEQxpqQuzCgJJJ/3f42O8ywEZuMVWi/8hODxGj3GW2b0udkbGULLDOjimAG0S3fLGlBnXQM9irG1CiQdVQi0dqQsOSDlyEEz7Vy9OxxfR71VCXsSB23jMrKJYZXSjw57sqgLn5Z0wolsOCz0RyJkyeYjgz7pwwVq20eboZwtVUl2EnN5gJ50dQZFdryATvABRTr/tJXkUMdaAK5pwtCapwtFLskguwuyMh/Sd9WChQ4sIvIUYSk3PYqQvCQlOC04IfN7PkdjOyRKWhdKXMmiAFt9i3sJ5jxoRuR0vqAghxxwHuqfQE5OHGDKOrwEnqs1DgAZ2e4Eev1d45TN7JfhrQLKgfwMFYAsvp33dXII073aVQLI2gN5S58lfmGnKKFtah7nkgnBZB7zlP7Y/QNiTM6sYNzawwAAAABJRU5ErkJggg==
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_deleteValue
// @grant        GM_info
// @grant        GM_setClipboard
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.addStyle
// @grant        GM.openInTab
// @grant        GM.deleteValue
// @grant        GM.info
// @grant        GM.setClipboard
// @supportURL   https://github.com/hoothin/UserScripts/issues
// @connect      wedata.net
// @connect      githubusercontent.com
// @connect      ghproxy.com
// @connect      hoothin.github.io
// @run-at       document-idle
// @connect      *
// ==/UserScript==

(function() {
    'use strict';

    if (window.name === 'pagetual-iframe' || (window.frameElement && window.frameElement.name === 'pagetual-iframe')) {
        var domloaded = function (){
            window.scroll(window.scrollX, 999999);
            window.parent.postMessage('pagetual-iframe:DOMLoaded', '*');
        };
        if (window.opera) {
            document.addEventListener('DOMContentLoaded', domloaded, false);
        } else {
            domloaded();
        }
        if (getComputedStyle(document.documentElement).display == 'none') document.documentElement.style.display = 'block';
        if (document.body && getComputedStyle(document.body).display == 'none') document.body.style.display = 'block';
        return;
    }

    if (window.top != window.self) {
        try {
            if (window.self.innerWidth < 100 || window.self.innerHeight < 100) {
                return;
            }
        } catch(e) {
            return;
        }
    }

    const noRuleTest = false;
    const lang = navigator.appName == "Netscape" ? navigator.language : navigator.userLanguage;
    let config = {};
    switch (lang) {
        case "zh-CN":
        case "zh-SG":
            config = {
                enableDebug: "调试模式，输出信息至控制台",
                disable: "暂时禁用",
                disableSite: "站点禁用开关",
                disableSiteTips: "已在此站禁用",
                enableSiteTips: "已在此站启用",
                enable: "启用自动翻页",
                toTop: "回到顶部",
                toBottom: "前往页尾",
                current: "当前页",
                forceIframe: "强制拼接",
                cancelForceIframe: "取消强制拼接",
                configure: "打开配置页面",
                firstUpdate: "点击此处初始化规则",
                update: "更新在线规则",
                click2update: "点击立即更新规则",
                loadNow: "立即翻页",
                loadConfirm: "要翻几页？（0为不间断）",
                noNext: "没有找到下一页，请新建规则",
                passSec: "更新于 #t# 秒前",
                passMin: "更新于 #t# 分钟前",
                passHour: "更新于 #t# 小时前",
                passDay: "更新于 #t# 天前",
                cantDel: "无法删除内置规则",
                confirmDel: "是否确认要删除此规则？",
                updateSucc: "更新成功",
                beginUpdate: "正在更新，请耐心等待，不要关闭页面",
                customUrls: "导入 Pagetual 或 AutoPagerize 规则 url，一行一条",
                customRules: "输入【东方永页机】格式的自定义规则 <a href='#t#'>贡献规则</a>",
                save: "保存设置",
                loadingText: "少女祈祷中...",
                opacity: "不透明值",
                opacityPlaceholder: "0: 隐藏分隔条",
                hideBar: "隐藏分页隔条",
                hideBarButNoStop: "隐藏但不停止",
                dbClick2Stop: "空白处双击暂停翻页",
                sortTitle: "排序在下次更新规则后生效",
                autoRun: "自动启用，否则为白名单模式",
                autoLoadNum: "自动加载指定页数",
                turnRate: "距离页尾X倍页面高度时就开始翻页",
                inputPageNum: "输入页码跳转",
                enableHistory: "翻页后写入历史记录",
                enableHistoryAfterInsert: "拼接后立即写入历史记录，否则浏览完毕后再行写入",
                initRun: "打开页面后立即尝试翻页，否则滚动至页尾再翻页",
                preload: "翻页前预读下一页，加速浏览",
                click2ImportRule: "点击下方添加特殊规则库，并静待更新成功：",
                forceAllBody: "是否拼接整个页面？",
                openInNewTab: "使拼接页面的内容在新页面打开",
                importSucc: "导入成功",
                import: "导入",
                editCurrent: "编辑此站规则",
                editBlacklist: "编辑黑名单网址，一行一条，支持? *通配符",
                upBtnImg: "回到页首图标",
                downBtnImg: "前往页尾图标",
                sideControllerIcon: "侧边栏图标",
                loadingTextTitle: "加载中文字",
                dbClick2StopCtrl: "Ctrl 键",
                dbClick2StopAlt: "Alt 键",
                dbClick2StopShift: "Shift 键",
                dbClick2StopMeta: "Meta 键",
                dbClick2StopKey: "快捷键",
                pageElementCss: "页面主体框架的样式",
                customCss: "自定义 css",
                firstAlert: "你还未导入规则库，请选择合适的规则库导入哦",
                picker: "东方永页机主体元素抓取器",
                closePicker: "关闭东方永页机抓取器",
                pickerPlaceholder: "没想法建议留空",
                pickerCheck: "检查你编辑的选择器并复制",
                switchSelector: "点击切换元素",
                gotoEdit: "使用当前的选择器前往编辑规则",
                manualMode: "禁用拼接，手动用右方向键翻页，可使用左方向键返回",
                clickMode: "禁用拼接，滚动至页尾时自动点击下一页",
                pageBarMenu: "点击分隔条中间弹出菜单",
                nextSwitch: "切换其他页码",
                arrowToScroll: "左方向键滚动至上一页，右方向键滚动至下一页",
                sideController: "在侧边显示翻页控制栏",
                hideLoadingIcon: "隐藏加载动画",
                hideBarArrow: "隐藏分隔条定位箭头",
                duplicate: "检测到永页机重复安装，请删除其他脚本管理器中的永页机!",
                forceStateIframe: "以 iframe 嵌入整页",
                forceStateDynamic: "通过 iframe 加载动态内容后取出",
                forceStateDisable: "在此站禁用",
                page: "Page ",
                prevPage: "上一页",
                nextPage: "下一页",
                errorRulesMustBeArray: "规则必须为数组形式!",
                errorJson: "JSON 格式有错，请重新检查!",
                editSuccess: "编辑成功",
                errorWrongUrl: "URL 错误, 请重新检查!",
                errorAlreadyExists: "已经存在!",
                settingsSaved: "设置已保存，刷新后生效",
                iframe: "强制拼接",
                dynamic: "动态加载",
                reloadPage: "编辑完成，是否立即刷新页面？",
                copied: "已复制",
                noValidContent: "没有检测到有效内容，点击查看",
                outOfDate: "脚本已过时，请及时更新到最新版本！"
            };
            break;
        case "zh-TW":
        case "zh-HK":
            config = {
                enableDebug: "調試模式，輸出信息至控制台",
                disable: "暫時禁用",
                disableSite: "站點禁用開關",
                disableSiteTips: "已在此站禁用",
                enableSiteTips: "已在此站啟用",
                enable: "啟用自動翻頁",
                toTop: "回到頂部",
                toBottom: "前往頁尾",
                current: "當前頁",
                forceIframe: "強制拼接",
                cancelForceIframe: "取消强制拼接",
                configure: "打開配置頁面",
                firstUpdate: "點擊此處初始化規則",
                update: "更新在綫規則",
                click2update: "點擊立即更新規則",
                loadNow: "立即翻頁",
                loadConfirm: "要翻几頁？（0為不間斷）",
                noNext: "沒有找到下一頁，請新建規則",
                passSec: "更新于 #t# 秒前",
                passMin: "更新于 #t# 分鐘前",
                passHour: "更新于 #t# 小時前",
                passDay: "更新于 #t# 天前",
                cantDel: "無法刪除内置規則",
                confirmDel: "是否確認要刪除此規則？",
                updateSucc: "更新成功",
                beginUpdate: "正在更新，請稍候",
                customUrls: "導入 Pagetual 或 AutoPagerize 規則 url，一行一條",
                customRules: "輸入【東方永頁機】格式的自定義規則 <a href='#t#'>貢獻規則</a>",
                save: "存儲設置",
                loadingText: "少女祈禱中...",
                opacity: "不透明值",
                opacityPlaceholder: "0: 隱藏分隔條",
                hideBar: "隱藏分頁隔條",
                hideBarButNoStop: "隱藏但不停止",
                dbClick2Stop: "空白處雙擊暫停翻頁",
                sortTitle: "排序在下次更新規則後生效",
                autoRun: "自動啓用，否則為白名單模式",
                autoLoadNum: "自動加載指定頁數",
                turnRate: "距離頁尾X倍頁面高度時就開始翻頁",
                inputPageNum: "輸入頁碼跳轉",
                enableHistory: "翻頁后寫入歷史記錄",
                enableHistoryAfterInsert: "拼接後立即寫入歷史記錄，否則瀏覽完畢後再行寫入",
                initRun: "打開頁面后立即嘗試翻頁，否則滾動至頁尾再翻頁",
                preload: "翻頁前預讀下一頁，加速瀏覽",
                click2ImportRule: "點擊下方添加特殊規則庫，并靜待更新成功：",
                forceAllBody: "是否拼接整個頁面？",
                openInNewTab: "使拼接頁面的内容在新頁面打開",
                importSucc: "導入成功",
                import: "導入",
                editCurrent: "編輯此站規則",
                editBlacklist: "編輯黑名單網址，一行一條，支持? *通配符",
                upBtnImg: "回到頁首圖標",
                downBtnImg: "前往頁尾圖標",
                sideControllerIcon: "側邊欄圖標",
                loadingTextTitle: "加載中文字",
                dbClick2StopCtrl: "Ctrl 鍵",
                dbClick2StopAlt: "Alt 鍵",
                dbClick2StopShift: "Shift 鍵",
                dbClick2StopMeta: "Meta 鍵",
                dbClick2StopKey: "快捷鍵",
                pageElementCss: "頁面主體框架的樣式",
                customCss: "自定義 css",
                firstAlert: "你還未導入規則庫，請選擇合適的規則庫導入哦",
                picker: "東方永頁機主體元素抓取器",
                closePicker: "關閉東方永頁機抓取器",
                pickerPlaceholder: "沒想法建議留空",
                pickerCheck: "檢查你編輯的選擇器並複製",
                switchSelector: "點擊切換元素",
                gotoEdit: "使用當前的選擇器前往編輯規則",
                manualMode: "禁用拼接，手動用右方向鍵翻頁，左方向鍵返回",
                clickMode: "禁用拼接，滾動至頁尾時自動點擊下一頁",
                pageBarMenu: "點擊分隔條中間彈出菜單",
                nextSwitch: "切換其他頁碼",
                arrowToScroll: "左方向鍵滾動至上一頁，右方向鍵滾動至下一頁",
                sideController: "在側邊顯示翻頁控制欄",
                hideLoadingIcon: "隱藏加載動畫",
                hideBarArrow: "隱藏分隔條定位箭頭",
                duplicate: "檢測到永頁機重複安裝，請刪除其他腳本管理器中的永頁機!",
                forceStateIframe: "以 iframe 嵌入整頁",
                forceStateDynamic: "通過 iframe 加載動態內容後取出",
                forceStateDisable: "在此站禁用",
                page: "Page ",
                prevPage: "上一頁",
                nextPage: "下一頁",
                errorRulesMustBeArray: "規則必須為陣列形式!",
                errorJson: "JSON 格式有錯，請重新檢查!",
                editSuccess: "編輯成功",
                errorWrongUrl: "URL 錯誤, 請重新檢查!",
                errorAlreadyExists: "已經存在!",
                settingsSaved: "設置已保存，刷新後生效",
                iframe: "強制拼接",
                dynamic: "動態加載",
                reloadPage: "編輯完成，是否立即刷新頁面？",
                copied: "已復制",
                noValidContent: "沒有檢測到有效内容，點擊查看",
                outOfDate: "脚本已過時，請及時更新到最新版本！"
            };
            break;
        case "ja":
            config = {
                enableDebug: "デバッグモード",
                disable: "一時的に無効",
                disableSite: "無効状態の切り替え",
                disableSiteTips: "このサイトで既に無効になっています",
                enableSiteTips: "このサイトで既に有効になっています",
                enable: "ページめくりを有効にする",
                toTop: "トップに戻る",
                toBottom: "ページの下部に移動",
                current: "現在のページ",
                forceIframe: "強制ステッチ",
                cancelForceIframe: "強制ステッチをキャンセル",
                configure: "設定ページを開く",
                firstUpdate: "ここをクリックしてルールを初期化します",
                update: "更新ルール",
                click2update: "今すぐルールを更新してください",
                loadNow: "今すぐページをめくる",
                loadConfirm: "数ページめくりたいですか？（0は途切れない）",
                noNext: "次のページが見つかりません、新しいルールを作成してください",
                passSec: "#t#秒前に更新",
                passMin: "#t#分前に更新",
                passHour: "#t#時間前に更新",
                passDay: "#t#日前に更新",
                cantDel: "組み込みルールを削除できません",
                confirmDel: "このルールを削除してもよろしいですか？",
                updateSucc: "更新に成功しました",
                beginUpdate: "更新中、お待ちください",
                customUrls: "インポートルールのURL、1行に1つ",
                customRules: "【東方永頁機】の形式でカスタムルールを入力してください <a href='#t#'>寄稿ルール</a>",
                save: "設定を保存",
                loadingText: "少女祈祷中...",
                opacity: "不透明値",
                opacityPlaceholder: "0: 隠す",
                hideBar: "ページ区切り文字を非表示にします",
                hideBarButNoStop: "非表示にするが停止しない",
                dbClick2Stop: "空白部分をダブルクリックしてページめくりを一時停止します",
                sortTitle: "並べ替えは、次のルールの更新後に有効になります",
                autoRun: "自動的に有効",
                autoLoadNum: "指定したページ数を自動的に読み込みます",
                turnRate: "ページの端からページの高さの X 倍になったらページをめくる",
                inputPageNum: "ジャンプするページ番号を入力",
                enableHistory: "ページめくり後の履歴を書く",
                enableHistoryAfterInsert: "スプライシングの直後に履歴レコードを書き込みます。それ以外の場合は、閲覧後に書き込みます",
                initRun: "Webページを開いた直後にページをめくる",
                preload: "事前に次のページを読む",
                click2ImportRule: "以下をクリックして、ルールベースを追加します：",
                forceAllBody: "フルページ埋め込み？",
                openInNewTab: "スプライスされたページのコンテンツを新しいページで開きます",
                importSucc: "インポート完了",
                import: "インポート",
                editCurrent: "現在のルールの編集",
                editBlacklist: "ブラックリストのURLを編集し、1行ずつ、サポート? *ワイルドカード",
                upBtnImg: "トップアイコンに戻る",
                downBtnImg: "フッターアイコンに移動",
                sideControllerIcon: "サイドバー アイコン",
                loadingTextTitle: "テキストをロード",
                dbClick2StopCtrl: "Ctrlキー",
                dbClick2StopAlt: "Altキー",
                dbClick2StopShift: "Shiftキー",
                dbClick2StopMeta: "Metaキー",
                dbClick2StopKey: "Shortcutキー",
                pageElementCss: "ページ本文フレームの STYLE",
                customCss: "カスタム css",
                firstAlert: "ルールベースをインポートしていないため、インポートする適切なルールベースを選択してください",
                picker: "Pagetualページ要素ピッカー",
                closePicker: "Pagetualピッカーを閉じる",
                pickerPlaceholder: "わからない場合は空のままにしてください",
                pickerCheck: "セレクターをチェックしてコピー",
                switchSelector: "クリックして要素を切り替えます",
                gotoEdit: "現在のセレクターでルールを編集する",
                manualMode: "スプライシングを無効にします。手動で右の矢印キーを使用してページをめくります",
                clickMode: "スティッチングを無効にします。ページの最後までスクロールすると、次のページが自動的にクリックされます",
                pageBarMenu: "ページバーの中央をクリックしてメニューをポップアップ表示",
                nextSwitch: "次のページに切り替え",
                arrowToScroll: "左矢印キーで前へ、右矢印キーで次へ",
                sideController: "サイドバーにページング コントロール バーを表示する",
                hideLoadingIcon: "読み込み中のアニメーションを隠す",
                hideBarArrow: "分割線の位置矢印を隠す",
                duplicate: "Pagetual の重複インストールが検出されました。他のスクリプト マネージャで永続的なページ マシンを削除してください!",
                forceStateIframe: "iframe にページ全体を埋め込む",
                forceStateDynamic: "iframe 経由で動的コンテンツを読み込む",
                forceStateDisable: "このステーションでのページめくりを無効にする",
                page: "Page ",
                prevPage: "Prev page",
                nextPage: "Next page",
                errorRulesMustBeArray: "Rules must be a Array!",
                errorJson: "JSON error, check again!",
                editSuccess: "Edit successfully",
                errorWrongUrl: "Wrong url, check again!",
                errorAlreadyExists: "Already exists!",
                settingsSaved: "The settings are saved, refresh to view",
                iframe: "Iframe",
                dynamic: "Dynamic",
                reloadPage: "Edit completed, reload page now?",
                copied: "Copied",
                noValidContent: "有効なコンテンツが検出されませんでした。クリックして表示",
                outOfDate: "スクリプトが古くなっています。最新バージョンに更新してください。"
            };
            break;
        case "ru":
        case "ru-RU":
            config = {
                enableDebug: "Включить отладку",
                disable: "Выключено",
                disableSite: "Включить/выключить на сайте",
                disableSiteTips: "Выключено для этого сайта",
                enableSiteTips: "Включено для этого сайта",
                enable: "Включено",
                toTop: "Наверх",
                toBottom: "Вниз",
                current: "Текущая страница",
                forceIframe: "Подгрузить ещё страницу",
                cancelForceIframe: "Отменить подгрузку",
                configure: "Настройки",
                firstUpdate: "Нажмите здесь, чтобы инициализировать правила",
                update: "Обновить правила",
                click2update: "Нажмите, чтобы обновить правила",
                loadNow: "Загрузить следующую страницу",
                loadConfirm: "Сколько страниц вы хотите загрузить? (0 означает бесконечность)",
                noNext: "Ссылка на следующую страницу не найдена. Пожалуйста, создайте новое правило",
                passSec: "Обновлено #t# секунд назад",
                passMin: "Обновлено #t# минут назад",
                passHour: "Обновлено #t# часов назад",
                passDay: "Обновлено #t# дней назад",
                cantDel: "Нельзя удалить правила по умолчанию",
                confirmDel: "Вы уверены, что хотите удалить эту ссылку?",
                updateSucc: "Правила обновлены",
                beginUpdate: "Обновление. Пожалуйста, немного подождите",
                customUrls: "Ссылки с правилами для импорта. Одна ссылка на строку",
                customRules: "Введите пользовательские правила в формате Pagetual. <a href='#t#'>Улучшить встроенные правила</a>",
                save: "Сохранить настройки",
                loadingText: "Следующая страница подгружается…",
                opacity: "Прозрачность",
                opacityPlaceholder: "0 - скрыть",
                hideBar: "Скрыть разделитель страниц",
                hideBarButNoStop: "Скрыть, но не останавливать",
                dbClick2Stop: "Двойной клик на странице для выключения",
                sortTitle: "Правило сортировки применится после следующего обновления правил",
                autoRun: "Автозапуск (режим черного списка)",
                autoLoadNum: "Количество страниц для предзагрузки",
                turnRate: "Подгрузить страницу, когда она будет в X раз больше высоты страницы от конца страницы",
                inputPageNum: "Введите номер страницы для перехода",
                enableHistory: "Записать историю после переключения страниц",
                enableHistoryAfterInsert: "Записать запись истории сразу после вставки, иначе записать после просмотра",
                initRun: "Подгружать страницы сразу после открытия",
                preload: "Предзагрузка следующей страницы",
                click2ImportRule: "Нажмите, чтобы импортировать базовые правила: ",
                forceAllBody: "Присоединить страницу целиком?",
                openInNewTab: "Открыть дополнительные ссылки в новой вкладке",
                importSucc: "Импорт завершен",
                import: "Импорт",
                editCurrent: "Изменить правило для текущего сайта",
                editBlacklist: "Изменить черный список. Одна ссылка на строку. Поддерживаются метасимволы: ? и *",
                upBtnImg: "Иконка перехода к началу",
                downBtnImg: "Иконка перехода к концу",
                sideControllerIcon: "Значок боковой панели",
                loadingTextTitle: "Текст во время загрузки",
                dbClick2StopCtrl: "Ctrl",
                dbClick2StopAlt: "Alt",
                dbClick2StopShift: "Shift",
                dbClick2StopMeta: "Meta",
                dbClick2StopKey: "Клавиша",
                pageElementCss: "Пользовательский стиль для основных элементов страницы",
                customCss: "Полный пользовательский CSS",
                firstAlert: "Вы не импортировали базовое правило. Пожалуйста, выберите соответствующее правило для импорта",
                picker: "Pagetual: выбор элемента страницы",
                closePicker: "Закрыть окно Pagetual",
                pickerPlaceholder: "Если не знаете, что тут писать — оставьте поле пустым",
                pickerCheck: "Проверить и скопировать селектор",
                switchSelector: "Нажмите для выбора элемента",
                gotoEdit: "Перейти к редактированию правила с текущим селектором",
                manualMode: "Отключить автоматическую загрузку страниц. Загружать вручную с помощью стрелки вправо (или вызова события 'pagetual.next')",
                clickMode: "Отключить \"сшивание\" страниц. При прокрутке до конца автоматически переходить на следующую страницу",
                pageBarMenu: "Открывать меню кликом на середину панели страниц",
                nextSwitch: "Переключить ссылку на следующую страницу",
                arrowToScroll: "Листать страницы клавишами со стрелками влево и вправо",
                sideController: "Показать справа панель перемещения по вкладке",
                hideLoadingIcon: "Скрыть анимацию загрузки",
                hideBarArrow: "Скрыть кнопки перемещения на разделителе",
                duplicate: "Похоже, Pagetual установлен несколько раз. Пожалуйста, удалите Pagetual из других менеджеров скриптов!",
                forceStateIframe: "Вставить полную страницу как iframe",
                forceStateDynamic: "Загружать динамический контент через iframe",
                forceStateDisable: "Отключить перелистывание страниц на этой станции",
                page: "Страница ",
                prevPage: "Предыдущая страница",
                nextPage: "Следующая страница",
                errorRulesMustBeArray: "Правила должны быть массивом!",
                errorJson: "Ошибка разбора JSON. Пожалуйста, исправьте его",
                editSuccess: "Редактирование успешно",
                errorWrongUrl: "Ссылка некорректна. Пожалуйста, исправьте её",
                errorAlreadyExists: "Уже существует!",
                settingsSaved: "Настройки сохранены. Обновите страницы",
                iframe: "iframe",
                dynamic: "Динамически",
                reloadPage: "Редактирование завершено. Обновить страницу?",
                copied: "Скопировано",
                noValidContent: "Действительный контент не обнаружен, нажмите для просмотра",
                outOfDate: "Скрипт устарел, своевременно обновляйте до последней версии!"
            };
            break;
        default:
            config = {
                enableDebug: "Enable debug output",
                disable: "Disable",
                disableSite: "Toggle disabled state",
                disableSiteTips: "Disabled on this site",
                enableSiteTips: "Enabled on this site",
                enable: "Enable",
                toTop: "To Top",
                toBottom: "To Bottom",
                current: "Current Page",
                forceIframe: "Force to join next page",
                cancelForceIframe: "Cancel Force join",
                configure: "Configure",
                firstUpdate: "Click here to initialize the rules",
                update: "Update online rules",
                click2update: "Click to update rules from url now",
                loadNow: "Load next page manually",
                loadConfirm: "How much pages do you want to load? (0 means infinite)",
                noNext: "No next link found, please create a new rule",
                passSec: "Updated #t# seconds ago",
                passMin: "Updated #t# minutes ago",
                passHour: "Updated #t# hours ago",
                passDay: "Updated #t# days ago",
                cantDel: "Can't delete buildin rules",
                confirmDel: "Are you sure you want to delete this rule?",
                updateSucc: "Update succeeded",
                beginUpdate: "Begin update, wait a minute please",
                customUrls: "Import Pagetual or AutoPagerize rule url, One url per line",
                customRules: "Input custom rules with [Pagetual] format. <a href='#t#'>Contribute rules</a>",
                save: "Save",
                loadingText: "Shojo Now Loading...",
                opacity: "Opacity",
                opacityPlaceholder: "0: hide spacer",
                hideBar: "Hide the paging spacer",
                hideBarButNoStop: "Hide but not stop",
                dbClick2Stop: "Double-click on the blank space to pause",
                sortTitle: "Sorting takes effect after the next rule update",
                autoRun: "Auto run (black list mode)",
                autoLoadNum: "Amount for preload pages",
                turnRate: "Turn the next page when it's less than X times page height from the footer",
                inputPageNum: "Enter page number to jump",
                enableHistory: "Write history after page turning",
                enableHistoryAfterInsert: "Write history immediately after splicing, otherwise write after browsing",
                initRun: "Turn pages immediately after opening",
                preload: "Preload next page for speeding up",
                click2ImportRule: "Click to import base rules link, then wait until the update is complete: ",
                forceAllBody: "Join full body of page?",
                openInNewTab: "Open urls of additions in new tab",
                importSucc: "Import completed",
                import: "Import",
                editCurrent: "Edit rule for current",
                editBlacklist: "Edit the blacklist urls, line by line, Support ? * for wildcard",
                upBtnImg: "Icon of back to top",
                downBtnImg: "Icon of go to footer",
                sideControllerIcon: "Icon of sidebar",
                loadingTextTitle: "Loading text",
                dbClick2StopCtrl: "Ctrl key",
                dbClick2StopAlt: "Alt key",
                dbClick2StopShift: "Shift key",
                dbClick2StopMeta: "Meta key",
                dbClick2StopKey: "Shortcut key",
                pageElementCss: "Custom style for main page elements",
                customCss: "Custom complete css",
                firstAlert: "You have not imported the base rule, please select the appropriate rule to import",
                picker: "Pagetual page element picker",
                closePicker: "Close Pagetual picker",
                pickerPlaceholder: "Leave empty if you have no idea",
                pickerCheck: "Check selector and copy",
                switchSelector: "Click to switch element",
                gotoEdit: "Go to edit rule with current selector",
                manualMode: "Disable splicing, manually turn pages with the right arrow keys (or dispatch event 'pagetual.next')",
                clickMode: "Disable splicing, automatically click the next page when scrolling to the end of the page",
                pageBarMenu: "Click the middle of the page bar to open the menu",
                nextSwitch: "Switch next link",
                arrowToScroll: "Press left arrow key to scroll prev and right arrow key to scroll next",
                sideController: "Display the paging control bar in the sidebar",
                hideLoadingIcon: "Hide loading animation",
                hideBarArrow: "Hide arrow for page bar",
                duplicate: "Duplicate Pagetual have been installed, check your script manager!",
                forceStateIframe: "Embed full page as iframe",
                forceStateDynamic: "Load dynamic content via iframe",
                forceStateDisable: "Disable page turning on this site",
                page: "Page ",
                prevPage: "Prev page",
                nextPage: "Next page",
                errorRulesMustBeArray: "Rules must be a Array!",
                errorJson: "JSON error, check again!",
                editSuccess: "Edit successfully",
                errorWrongUrl: "Wrong url, check again!",
                errorAlreadyExists: "Already exists!",
                settingsSaved: "The settings are saved, refresh to view",
                iframe: "Iframe",
                dynamic: "Dynamic",
                reloadPage: "Edit completed, reload page now?",
                copied: "Copied",
                noValidContent: "No valid content detected, click to view",
                outOfDate: "The script is outdated, update to the latest version in time!"
            };
            break;
    }
    var enableDebug = true;
    function i18n(name, param) {
        return config[name] ? config[name].replace("#t#", param) : name;
    };

    function debug(str, title) {
        if (enableDebug) {
            console.log(
                `%c【Pagetual v.${_GM_info.script.version}】 ${title ? title : 'debug'}:`,
                'color: yellow;font-size: large;font-weight: bold;background-color: darkblue;',
                str
            );
        }
    };

    var _GM_xmlhttpRequest, _GM_registerMenuCommand, _GM_notification, _GM_addStyle, _GM_openInTab, _GM_info, _GM_setClipboard;
    if (typeof GM_xmlhttpRequest != 'undefined') {
        _GM_xmlhttpRequest = GM_xmlhttpRequest;
    } else if (typeof GM != 'undefined' && typeof GM.xmlHttpRequest != 'undefined') {
        _GM_xmlhttpRequest = GM.xmlHttpRequest;
    } else {
        _GM_xmlhttpRequest = (f) => {fetch(f.url).then(response => response.text()).then(data => {let res = {response:data}; f.onload(res)}).catch(e => f.onerror(e))};
    }
    if (typeof GM_registerMenuCommand != 'undefined') {
        _GM_registerMenuCommand = GM_registerMenuCommand;
    } else if (typeof GM != 'undefined' && typeof GM.registerMenuCommand != 'undefined') {
        _GM_registerMenuCommand = GM.registerMenuCommand;
    } else {
        _GM_registerMenuCommand = (s, f) => {};
    }
    if (typeof GM_info != 'undefined') {
        _GM_info = GM_info;
    } else if (typeof GM != 'undefined' && typeof GM.info != 'undefined') {
        _GM_info = GM.info;
    } else {
        _GM_info = {script: {}};
    }
    if (typeof GM_notification != 'undefined') {
        _GM_notification = GM_notification;
    } else if (typeof GM != 'undefined' && typeof GM.notification != 'undefined') {
        _GM_notification = GM.notification;
    } else {
        _GM_notification = (s) => {showTips(s)};
    }
    if (typeof GM_openInTab != 'undefined') {
        _GM_openInTab = GM_openInTab;
    } else if (typeof GM != 'undefined' && typeof GM.openInTab != 'undefined') {
        _GM_openInTab = GM.openInTab;
    } else {
        _GM_openInTab = (s,t) => {window.open(s)};
    }
    if (typeof GM_addStyle != 'undefined') {
        _GM_addStyle = GM_addStyle;
    } else if (typeof GM != 'undefined' && typeof GM.addStyle != 'undefined') {
        _GM_addStyle = GM.addStyle;
    } else {
        _GM_addStyle = cssStr => {
            let styleEle = document.createElement("style");
            styleEle.innerHTML = cssStr;
            document.head.appendChild(styleEle);
            return styleEle;
        };
    }
    if (typeof GM_setClipboard != 'undefined') {
        _GM_setClipboard = GM_setClipboard;
    } else if (typeof GM != 'undefined' && typeof GM.setClipboard != 'undefined') {
        _GM_setClipboard = GM.setClipboard;
    } else {
        _GM_setClipboard = (s, i) => {};
    }
    var _unsafeWindow = (typeof unsafeWindow == 'undefined') ? window : unsafeWindow;//兼容 ios userscripts 的寫法
    var storage = {
        supportGM: typeof GM_getValue == 'function' && typeof GM_getValue('a', 'b') != 'undefined',
        supportGMPromise: typeof GM != 'undefined' && typeof GM.getValue == 'function' && typeof GM.getValue('a', 'b') != 'undefined' && typeof GM.getValue('a', 'b').then == 'function',
        supportCrossSave: function() {
            return this.supportGM || this.supportGMPromise;
        },
        mxAppStorage: (function() {
            try {
                return window.external.mxGetRuntime().storage;
            } catch(e) {
            }
        })(),
        operaUJSStorage: (function() {
            try {
                return window.opera.scriptStorage;
            } catch(e) {
            }
        })(),
        setItem: function(key, value) {
            if (this.supportGMPromise) {
                GM.setValue(key, value);
                if (value === "" && typeof GM != 'undefined' && typeof GM.deleteValue != 'undefined') {
                    GM.deleteValue(key);
                }
            } else if (this.supportGM) {
                GM_setValue(key, value);
                if (value === "" && typeof GM_deleteValue != 'undefined') {
                    GM_deleteValue(key);
                }
            } else if (this.operaUJSStorage) {
                this.operaUJSStorage.setItem(key, value);
            } else if (this.mxAppStorage) {
                this.mxAppStorage.setConfig(key, value);
            } else if (window.localStorage) {
                window.localStorage.setItem(key, value);
            }
        },
        getItem: function(key, cb) {
            var value;
            if (this.supportGMPromise) {
                value = GM.getValue(key).then(v => {cb(v)});
                return;
            } else if (this.supportGM) {
                value = GM_getValue(key);
            } else if (this.operaUJSStorage) {
                value = this.operaUJSStorage.getItem(key);
            } else if (this.mxAppStorage) {
                value = this.mxAppStorage.getConfig(key);
            } else if (window.localStorage) {
                value = window.localStorage.getItem(key);
            };
            cb(value);
        }
    };
    var rulesData = {}, ruleUrls, updateDate;
    const configPage = ["https://github.com/hoothin/UserScripts/tree/master/Pagetual",
                      "https://hoothin.github.io/UserScripts/Pagetual/"];
    const guidePage = /^https?:\/\/.*pagetual.*rule\.html/i;
    const ruleImportUrlReg = /greasyfork\.org\/.*scripts\/438684[^\/]*(\/discussions|\/?$|\/feedback)|github\.com\/hoothin\/UserScripts\/(tree\/master\/Pagetual|issues)/i;
    const allOfBody = "body>*";
    const mainSel = "article,.article,[role=main],main,.main,#main";
    const nextTextReg1 = new RegExp("\u005e\u7ffb\u003f\u005b\u4e0b\u540e\u5f8c\u6b21\u005d\u005b\u4e00\u30fc\u0031\u005d\u003f\u005b\u9875\u9801\u5f20\u5f35\u005d\u007c\u005e\u0028\u006e\u0065\u0078\u0074\u005b\u0020\u005f\u002d\u005d\u003f\u0070\u0061\u0067\u0065\u007c\u006f\u006c\u0064\u0065\u0072\u0029\u005c\u0073\u002a\u005b\u203a\u003e\u2192\u00bb\u005d\u003f\u0024\u007c\u6b21\u306e\u30da\u30fc\u30b8\u007c\u005e\u6b21\u3078\u003f\u0024\u007cВперед", "i");
    const nextTextReg2 = new RegExp("\u005e\u005b\u4e0b\u540e\u5f8c\u6b21\u005d\u005b\u4e00\u30fc\u0031\u005d\u003f\u005b\u7ae0\u8bdd\u8a71\u8282\u7bc0\u4e2a\u500b\u5e45\u005d", "i");
    const lazyImgAttr = ["data-lazy-src", "data-lazy", "data-url", "data-orig-file", "zoomfile", "file", "original", "load-src", "imgsrc", "real_src", "src2", "origin-src", "data-lazyload", "data-lazyload-src", "data-lazy-load-src", "data-ks-lazyload", "data-ks-lazyload-custom", "data-src", "data-defer-src", "data-actualsrc", "data-cover", "data-original", "data-thumb", "data-imageurl", "data-placeholder",];
    _GM_registerMenuCommand(i18n("configure"), () => {
        _GM_openInTab(configPage[0], {active: true});
    });
    _GM_registerMenuCommand(i18n("editCurrent"), () => {
        Picker.getInstance().start();
    });

    function getBody(doc) {
        return doc.body || doc.querySelector('body') || doc;
    }

    function getElementByXpath(xpath, contextNode, doc) {
        doc = doc || document;
        contextNode = contextNode || doc;
        try {
            var result = doc.evaluate(xpath, contextNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return result.singleNodeValue && result.singleNodeValue.nodeType === 1 && result.singleNodeValue;
        } catch (err) {
            debug(`Invalid xpath: ${xpath}`);
        }
        return null;
    }

    function getAllElementsByXpath(xpath, contextNode, doc) {
        doc = doc || document;
        contextNode = contextNode || doc;
        var result = [];
        try {
            var query = doc.evaluate(xpath, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < query.snapshotLength; i++) {
                var node = query.snapshotItem(i);
                if (node.nodeType === 1) result.push(node);
            }
        } catch (err) {
            debug(`Invalid xpath: ${xpath}`);
        }
        return result;
    }

    function isXPath(xpath) {
        if (!xpath) return false;
        return /^\(*(descendant::|\.\/|\/|id\()/.test(xpath);
    }

    function getAllElements(sel, doc) {
        try {
            if (!isXPath(sel)) {
                return doc.querySelectorAll(sel);
            }
        } catch(e) {
            debug(e, 'Error selector');
        }
        return getAllElementsByXpath(sel, doc, doc);
    }

    function getElement(sel, doc) {
        try {
            if (!isXPath(sel)) {
                return doc.querySelector(sel);
            }
        } catch(e) {
            debug(e, 'Error selector');
        }
        return getElementByXpath(sel, doc, doc);
    }

    function geneSelector(ele, addID) {
        let selector = ele.tagName.toLowerCase();
        //Google id class都是隨機。百度更過分，style script順序都是隨機的
        if (selector != "html" && selector != "body") {
            let hasId = false;
            if (addID && ele.id && /^[a-z_][\w\-_]*$/i.test(ele.id)) {
                hasId = true;
                selector = '#' + ele.id;
            } else {
                let className = "";
                if (ele.className) {
                    let classList = ele.classList, i = 0;
                    for (let i = 0; i < classList.length; i++) {
                        let c = classList[i];
                        if (/^[\w\-_]+$/.test(c) && !/\d{3,}|completed|loaded/.test(c)) {
                            className += '.' + c;
                        }
                    }
                    selector += className;
                }
                let parent = ele.parentElement;
                if (parent && parent.tagName) {
                    selector = geneSelector(parent, addID) + ' > ' + selector;
                    if (!className && !hasId && parent.children.length > 1) {
                        let i, j = 0;
                        for (i = 0; i < parent.children.length; i++) {
                            if (parent.children[i].tagName == ele.tagName) {
                                j++;
                                if (parent.children[i] == ele) {
                                    break;
                                }
                            }
                        }
                        selector += (parent.tagName.toUpperCase() == "HTML" ? "" : `:nth-of-type(${j})`);
                    }
                }
            }
        }
        return selector;
    }

    function createXPathFromElement(elm) {
        let allNodes = document.getElementsByTagName('*'), segs;
        for (segs = []; elm && elm.nodeType == 1 && elm.tagName; elm = elm.parentNode) {
            if (elm.tagName.toUpperCase() == 'BODY' || elm.tagName.toUpperCase() == 'HTML') {
                segs.unshift(elm.localName.toLowerCase());
                continue;
            }
            if (elm.hasAttribute && elm.hasAttribute('id')) {
                var uniqueIdCount = 0;
                for (var n = 0; n < allNodes.length; n++) {
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
                    if (uniqueIdCount > 1) break;
                }
                if ( uniqueIdCount == 1) {
                    segs.unshift('id("' + elm.getAttribute('id') + '")');
                    return segs.join('/');
                } else {
                    segs.unshift(elm.localName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
                }
            } else if (elm.hasAttribute && elm.hasAttribute('class')) {
                segs.unshift(elm.localName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
            } else {
                let i, sib;
                for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
                    if (sib.localName == elm.localName) i++;
                }
                segs.unshift(elm.localName.toLowerCase() + '[' + i + ']');
            }
        }
        return segs.length ? '/' + segs.join('/') : null;
    }

    var escapeHTMLPolicy;
    if (_unsafeWindow.trustedTypes && _unsafeWindow.trustedTypes.createPolicy) {
        escapeHTMLPolicy = _unsafeWindow.trustedTypes.createPolicy('pagetual_default', {
            createHTML: (string, sink) => string
        });
    }

    function createHTML(html){
        return escapeHTMLPolicy?escapeHTMLPolicy.createHTML(html):html;
    }

    const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

    async function sleep(time) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        })
    }

    class RuleParser {
        constructor() {
            this.hpRules = [];
            this.smartRules = [];
            this.customRules = [];
            this.rules = [];
            this.pageDoc = document;
            this.nextLinkHref = null;
            this.nextTitle = "";
            this.oldUrl = "";
            this.curUrl = location.href;
            this.curSiteRule = {};
        }

        initSavedRules(callback) {
            var self = this;
            storage.getItem("smartRules", smartRules => {
                if (smartRules) self.smartRules = smartRules;
                storage.getItem("hpRules", hpRules => {
                    if (hpRules) self.hpRules = hpRules;
                    storage.getItem("customRules", customRules => {
                        if (customRules) self.customRules = customRules;
                        storage.getItem("rules", rules => {
                            if (rules) self.rules = rules;
                            callback();
                        });
                    });
                });
            });
        }

        saveCurSiteRule() {
            /*if(!this.curSiteRule || !this.curSiteRule.url || this.curSiteRule.singleUrl || this.curSiteRule.url.length<13)return;
            this.hpRules=this.hpRules.filter(item=>{return item&&item.url!=this.curSiteRule.url});
            this.hpRules.unshift(this.curSiteRule);
            if(this.hpRules.length>30){
                this.hpRules.pop();
            }
            storage.setItem("hpRules", this.hpRules);*/
        }

        requestJSON(url, callback) {
            _GM_xmlhttpRequest({
                url: url,
                method: 'GET',
                timeout: 20000,
                onload: function(res) {
                    let json = null;
                    try {
                        json = JSON.parse(res.response || res.responseText);
                    } catch(e) {
                        debug(e, 'Error json');
                    }
                    callback(json);
                },
                onerror: function(e) {
                    callback(null, e);
                },
                ontimeout: function(e) {
                    callback(null, e);
                }
            });
        }

        formatRule(item, from) {
            if (item.data && item.data.url) {
                let result = {
                    name: item.name,
                    from: from,
                    action: item.data.forceIframe=="true"?1:undefined,
                    url: item.data.url,
                    pageElement: item.data.pageElement,
                    nextLink: item.data.nextLink,
                    insert: item.data.insertBefore||undefined,
                    updatedAt: item.updated_at
                };
                let _css = (item.data.Stylus || '') + (item.data.CSS || '');
                if (_css) result.css = _css;
                if (item.data.bookmarklet) result.pageAction = item.data.bookmarklet;
                return result;
            } else {
                item.from = from;
                return item;
            }
            return null;
        }

        addRuleByUrl(url, from, callback) {
            if (url.indexOf("?") == -1) {
                url = url + "?" + Date.now();
            } else {
                url = url + "&" + Date.now();
            }
            this.requestJSON(url, (json,err) => {
                if (!json) {
                    debug(err, "Update " + url + " rules fail!");
                }
                this.addRules(json, from);
                callback(json, err);
            });
        }

        addRules(rules, from) {
            if (rules && rules.length > 0) {
                let first = -1;
                this.rules = this.rules.filter((item, i) => {
                    if (item.from == from) {
                        if (first == -1) first = i;
                        return false;
                    } else return true;
                });
                if (first == -1) first = 0;
                rules.forEach(item => {
                    let rule = this.formatRule(item, from);
                    if (rule) {
                        this.rules.splice(first, 0, rule)
                    }
                });
            }
        }

        ruleMatchPre(r) {
            if (r.include) {
                let include;
                if (Array && Array.isArray && Array.isArray(r.include)) {
                    include = r.include.every((sel, i) => {
                        let ele = getElement(sel, document);
                        return !!ele;
                    });
                } else include = getElement(r.include, document);
                if (!include) return false;
            }
            if (r.exclude) {
                let exclude;
                if (Array && Array.isArray && Array.isArray(r.exclude)) {
                    exclude = !r.exclude.every((sel, i) => {
                        let ele = getElement(sel, document);
                        return !ele;
                    });
                } else exclude = getElement(r.exclude, document);
                if (exclude) return false;
            }
            return true;
        }

        ruleMatchReady(r) {
            let findIndex = 0;
            if (r.nextLink && r.nextLink != 0) {
                let nextLinkSel = r.nextLink, nextLink;
                if (Array && Array.isArray && Array.isArray(nextLinkSel)) {
                    nextLink = !nextLinkSel.every((sel, i) => {
                        let ele = getElement(sel, document);
                        if (ele) findIndex = i;
                        return !ele;
                    });
                } else nextLink = getElement(nextLinkSel, document);
                if (!nextLink) return false;
            }
            if (r.pageElement) {
                let pageElementSel = r.pageElement, pageElement;
                if (Array && Array.isArray && Array.isArray(pageElementSel)) {
                    pageElementSel = pageElementSel[findIndex];
                }
                pageElement = getElement(pageElementSel, document);
                if (!pageElement) return false;
            }
            if (r.insert) {
                let insertSel = r.insert, insert;
                if (Array && Array.isArray && Array.isArray(insertSel)) {
                    insertSel = insertSel[findIndex];
                }
                insert = getElement(insertSel, document);
                if (!insert) return false;
            }
            //if (findIndex !== 0) nextIndex = findIndex;
            return true;
        }

        ruleMatch(r) {
            return this.ruleMatchPre(r) && this.ruleMatchReady(r);
        }

        scrollToShow(sel, doc) {
            let exclude = getElement(sel, doc);
            if (exclude) {
                var actualTop = exclude.offsetTop;
                var current = exclude.offsetParent;
                while (current !== null) {
                    actualTop += current.offsetTop;
                    current = current.offsetParent;
                }
                getBody(doc).scrollTop = 0;
                doc.documentElement.scrollTop = 0;
                let maxHeight = Math.max(getBody(doc).scrollHeight, doc.documentElement.scrollHeight);
                getBody(doc).scrollTop = actualTop - 10;
                doc.documentElement.scrollTop = actualTop - 10;
                setTimeout(() => {
                    while (actualTop < maxHeight) {
                        actualTop += 200;
                        getBody(doc).scrollTop = actualTop;
                        doc.documentElement.scrollTop = actualTop;
                    }
                }, 0);
                return false;
            }
            return true;
        }

        waitElement(doc, selArr) {
            if (!selArr) selArr = this.curSiteRule.waitElement;
            let includeSel = selArr[0].trim(), excludeSel;
            if (selArr.length == 2) {
                excludeSel = selArr[1].trim().replace(/^!/, '');
            } else if (includeSel.indexOf('!') == 0) {
                excludeSel = includeSel.replace(/^!/, '');
                includeSel = '';
            }
            if (includeSel) {
                let include = getElement(includeSel, doc);
                if (!include) {
                    return false;
                }
            }
            if (doc === document) return true;
            if (excludeSel) {
                if (!this.scrollToShow(excludeSel, doc)) {
                    if (!loadingDiv.offsetParent && this.insert.parentNode) {
                        this.insertElement(loadingDiv);
                    }
                    return false;
                }
            }
            return true;
        }

        getRule(callback) {
            if(noRuleTest) {
                this.curSiteRule = {};
                this.curSiteRule.url = location.origin + location.pathname;
                this.curSiteRule.singleUrl = true;
                callback();
                return;
            }
            if (this.curSiteRule && this.curSiteRule.url && !this.curSiteRule.singleUrl) {
                if (this.ruleMatch(this.curSiteRule)) {
                    return callback();
                }
            }
            this.curSiteRule = {};
            var self = this;
            var href = location.href.slice(0, 500);

            function setRule(r) {
                if (self.preSiteRule && self.ruleMatch(self.preSiteRule)) {
                    self.curSiteRule = self.preSiteRule;
                    return callback();
                }
                if (!r.singleUrl) {
                    self.curSiteRule = r;
                    self.preSiteRule = r;
                    if (r.enable !== 0) debug(r, 'Match rule');
                } else if (!self.curSiteRule.singleUrl) self.curSiteRule = r;
                callback();
            }

            function checkRule(r) {
                if (r.from == 1 && r.url.length <= 13) return false;
                let urlReg = new RegExp(r.url, "i");
                if (urlReg.test(href)) {
                    if (!self.ruleMatchPre(r)) return false;
                    if (r.waitElement) {
                        let waitTime = 500;
                        let checkReady = () => {
                            setTimeout(() => {
                                if (!self.waitElement(document, r.waitElement)) {
                                    checkReady();
                                } else {
                                    setRule(r);
                                }
                            }, parseInt(waitTime));
                        };
                        checkReady();
                        return true;
                    } else if (r.wait) {
                        let waitTime = 500, checkEval, maxCheckTimes = 50;
                        if (isNaN(r.wait)) {
                            try {
                                checkEval = (typeof _unsafeWindow.pagetualWait == 'undefined') ? Function("doc",'"use strict";' + r.wait) : _unsafeWindow.pagetualWait;
                            } catch(e) {
                                debug(e, 'Error when checkeval');
                            }
                        } else {
                            waitTime = r.wait;
                        }
                        let checkReady = () => {
                            if (maxCheckTimes-- <= 0) {
                                debug("Wait for rule ready but failed");
                                setRule(r);
                                return;
                            }
                            setTimeout(() => {
                                if (!self.ruleMatchReady(r) || (checkEval && !checkEval(document))) {
                                    checkReady();
                                } else {
                                    setRule(r);
                                }
                            }, parseInt(waitTime));
                        };
                        checkReady();
                        return true;
                    }
                    if (r.pinUrl) {
                        setRule(r);
                        return true;
                    }
                    if (!self.ruleMatchReady(r)) {
                        return false;
                    }
                    setRule(r);
                    return true;
                }
                return false;
            }

            for (let i in this.hpRules) {
                let rule = this.hpRules[i];
                if (!rule || !rule.url) continue;
                if (rule.singleUrl) {
                    continue;
                }
                if (checkRule(rule)) return;
            }
            for (let i in this.customRules) {
                let rule = this.customRules[i];
                if (!rule || !rule.url) continue;
                if (checkRule(rule)) return;
            }
            for (let i in this.smartRules) {
                let rule = this.smartRules[i];
                if (!rule || !rule.url) continue;
                if (rule.singleUrl) {
                    let singleUrl = location.origin + location.pathname;
                    if (singleUrl == rule.url) {
                        setRule(rule);
                        callback = () => {
                            if (self.curSiteRule && !self.curSiteRule.singleUrl) {
                                self.smartRules = self.smartRules.filter(item => {return item && item.url != singleUrl});
                                storage.setItem("smartRules", self.smartRules);
                                if (self.curSiteRule.url.length > 13) {
                                    self.hpRules = self.hpRules.filter(item => {return item && item.url != self.curSiteRule.url});
                                    self.hpRules.unshift(self.curSiteRule);
                                    if (self.hpRules.length > 30) {
                                        self.hpRules.pop();
                                    }
                                    storage.setItem("hpRules", self.hpRules);
                                }
                            }
                        };
                        break;
                    }
                    continue;
                }
            }
            let r = 0;
            function searchByTime() {
                setTimeout(() => {
                    let end = r + 50;
                    end = end > self.rules.length ? self.rules.length : end;
                    for (; r < end; r++) {
                        let rule = self.rules[r];
                        if (rule.from == 2) {
                            delete rule.autoLoadNum;
                            delete rule.history;
                            delete rule.sideController;
                            if (rule.pageBar == 0) delete rule.pageBar;
                        }
                        if (checkRule(rule)) return;
                    }
                    if (end >= self.rules.length) {
                        setRule({url: location.origin + location.pathname, singleUrl: true});
                        return;
                    } else {
                        searchByTime();
                    }
                }, 1);
            }
            searchByTime();
        }

        replaceElement(doc) {
            if (!doc || doc === document) return;
            let replaceElementSel = this.curSiteRule.replaceElement;
            if (replaceElementSel) {
                if (!Array.isArray(replaceElementSel)) {
                    replaceElementSel = [replaceElementSel];
                }
                replaceElementSel.forEach(sel => {
                    let pageEles = getAllElements(sel, document);
                    let replaceEles = getAllElements(sel, doc);
                    for (let i = 0; i < pageEles.length; i++) {
                        let replaceEle = replaceEles[i];
                        let pageEle = pageEles[i];
                        if (replaceEle) {
                            pageEle.parentNode.replaceChild(replaceEle.cloneNode(true), pageEle);
                        } else break;
                    }
                });
            }
        }

        refreshByClick() {
            let refreshByClickSel = this.curSiteRule.refreshByClick;
            if (refreshByClickSel) {
                let self = this;
                document.addEventListener("click", e => {
                    if (!self.refreshing) {
                        self.refreshing = true;
                        setTimeout(() => {
                            self.refreshing = false;
                            let checkEles = getAllElements(refreshByClickSel, document);
                            for (let i = 0; i < checkEles.length; i++) {
                                if (checkEles[i] === e.target) {
                                    urlChanged = true;
                                    isPause = true;
                                    if (!ruleParser.nextLinkHref) isLoading = false;
                                    break;
                                }
                            }
                        }, 300);
                    }
                });
            }
        }

        getValidHeight(ele) {
            if (!ele.offsetParent) return 0;
            let h = ele.scrollHeight;
            let moreChild = ele.children[0], minOffsetTop = h;
            while (moreChild) {
                if (moreChild.offsetParent && moreChild.offsetTop < minOffsetTop) {
                    minOffsetTop = moreChild.offsetTop;
                }
                moreChild = moreChild.nextElementSibling;
            }
            if (minOffsetTop != h && minOffsetTop > 0) {
                h -= minOffsetTop;
            }
            return h;
        }

        getPageElement(doc, curWin, dontFind) {
            if (doc == document && this.docPageElement) {
                let parent = this.docPageElement;
                while (parent && parent.nodeName && parent.nodeName.toUpperCase() != "BODY") {
                    parent = parent.parentNode;
                }
                if (parent && parent.nodeName && parent.nodeName.toUpperCase() == "BODY") {
                    return this.docPageElement;
                }
            }
            let pageElement = null;
            let self = this;
            let body = getBody(doc);
            if (this.curSiteRule.pageElement) {
                let pageElementSel = this.curSiteRule.pageElement;
                if (Array && Array.isArray && Array.isArray(pageElementSel)) {
                    pageElementSel = pageElementSel[nextIndex < pageElementSel.length ? nextIndex : 0];
                }
                pageElement = getAllElements(pageElementSel, doc);
            }
            if (pageElement && pageElement.length === 1 && pageElement[0].style.display === 'none') {
                pageElement = [body];
            }
            if (this.curSiteRule.singleUrl && pageElement && pageElement.length > 0 && pageElement[0].tagName.toUpperCase() == "TR") {
                let mainTr = this.insert.parentNode.querySelector('tr'), mainTdNum = 0, newTdNum = 0;
                [].forEach.call(mainTr.children, el => {
                    if (el.tagName.toUpperCase() == "TD" || el.tagName.toUpperCase() == "TH") {
                        mainTdNum += el.colSpan || 1;
                    }
                });
                [].forEach.call(pageElement[0].children, el => {
                    if (el.tagName.toUpperCase() == "TD" || el.tagName.toUpperCase() == "TH") {
                        newTdNum += el.colSpan || 1;
                    }
                });
                if (mainTdNum != newTdNum) {
                    this.curSiteRule.pageElement = allOfBody;
                    pageElement = [body];
                    this.getInsert(true);
                }
            }
            if ((this.curSiteRule.singleUrl || !this.curSiteRule.pageElement) && (!pageElement || pageElement.length == 0) && curWin && !dontFind) {
                if (!body) return null;
                let bodyHeight = parseInt(body.offsetHeight || body.scrollHeight);
                let curHeight = bodyHeight, curWidth = 0;
                let windowHeight = window.innerHeight || document.documentElement.clientHeight;
                let needCheckNext = (doc == document && this.initNext);
                function checkElement(ele) {
                    if (ele.tagName.toUpperCase() == "PRE" || ele.tagName.toUpperCase() == "CODE") {
                        self.curSiteRule.pageElement = geneSelector(ele.parentNode);
                        debug(self.curSiteRule.pageElement, 'Page element');
                        return [ele.parentNode];
                    }
                    if (ele.children && ele.children.length == 1) {
                        let hasText = false;
                        for (let i in ele.childNodes) {
                            let child = ele.childNodes[i];
                            if (child.nodeType == 3 && child.nodeValue.trim() !== '') {
                                hasText = true;
                                break;
                            }
                        }
                        if (!hasText) {
                            ele = ele.children[0];
                            curHeight = self.getValidHeight(ele);
                            curWidth = parseInt(ele.offsetWidth || ele.scrollWidth);
                        }
                    }
                    if (ele.tagName.toUpperCase() == "PICTURE") {
                        self.curSiteRule.pageElement = geneSelector(ele.parentNode) + ">" + ele.tagName.toLowerCase();
                        debug(self.curSiteRule.pageElement, 'Page element');
                        return [ele];
                    }
                    if (curHeight / bodyHeight <= 0.25) {
                        let article = doc.querySelectorAll(mainSel);
                        if (article && article.length > 0) {
                            if (article.length == 1) {
                                article = article[0];
                                self.curSiteRule.pageElement = article.tagName.toLowerCase() + (article.id ? "#" + article.id : "") + (article.className ? "." + article.className : "") + ">*";
                                debug(self.curSiteRule.pageElement, 'Page element');
                                return article.children;
                            } else {
                                self.curSiteRule.pageElement = mainSel;
                                debug(self.curSiteRule.pageElement, 'Page element');
                                return article;
                            }
                        }
                        self.curSiteRule.pageElement = allOfBody;
                        debug(self.curSiteRule.pageElement, 'Page element');
                        return [body];
                    }
                    if (ele.tagName.toUpperCase() == "FORM" && ele.parentNode != getBody(document)) {
                        self.curSiteRule.pageElement = geneSelector(ele) + ">*";
                        debug(self.curSiteRule.pageElement, 'Page element');
                        return ele.children;
                    }
                    if (ele.children.length == 0 && !self.curSiteRule.pageElement) {
                        if (ele.parentNode.tagName.toUpperCase() == "P") ele = ele.parentNode;
                        self.curSiteRule.pageElement = geneSelector(ele.parentNode) + ">" + ele.tagName.toLowerCase();
                        debug(self.curSiteRule.pageElement, 'Page element');
                        return getAllElements(self.curSiteRule.pageElement, doc);
                    }
                    let i, minHeight = curHeight * 0.52, curMaxEle = null, curMaxArea = 0, minWidth = curWidth * 0.38;
                    let isHori, preOffsetTop = -1;
                    let articleNum = 0;
                    for (i = 0; i < ele.children.length; i++) {
                        let curNode = ele.children[i];
                        if (curNode.tagName.toUpperCase() == "CANVAS") continue;
                        if (curNode.tagName.toUpperCase() == "NAV") continue;
                        if (!curNode.offsetParent) continue;
                        if (curNode.tagName.toUpperCase() != "IMG" && curNode.querySelector('img') == null && /^\s*$/.test(curNode.innerText)) continue;
                        if (needCheckNext && !curNode.contains(self.initNext) && getElementTop(curNode) > windowHeight) {
                            continue;
                        }
                        if (curNode.tagName.toUpperCase() == "ARTICLE") articleNum++;
                        let h = self.getValidHeight(curNode);
                        let w = curNode.scrollWidth;
                        if (isNaN(h) || isNaN(w)) continue;
                        isHori = preOffsetTop == curNode.offsetTop ? true : (preOffsetTop == -1 ? (curNode.nextElementSibling && curNode.nextElementSibling.offsetTop == curNode.offsetTop) : false);
                        if (isHori && h <= 50) continue;
                        let a = h * w, moreChild = curNode.children[0];
                        while (moreChild) {
                            let ch = self.getValidHeight(moreChild);
                            let cw = moreChild.scrollWidth;
                            if (h < ch) {
                                h = ch;
                            }
                            if (moreChild.innerText != "" && ch && cw) {
                                a += ch * cw;
                            }
                            moreChild = moreChild.nextElementSibling;
                        }
                        let isMax = false;
                        if (isHori) {
                            if (curMaxEle) {
                                if (curWidth < w) {
                                    isMax = true;
                                } else if (curWidth < w + 300 && curMaxArea < a) {
                                    isMax = true;
                                }
                            }
                        } else {
                            if (curMaxEle && curMaxEle.offsetParent == curNode.offsetParent && curMaxEle.offsetTop == curNode.offsetTop) {
                                if (curMaxArea * 2 > a) continue;
                            }
                            isMax = curMaxArea < a;
                        }
                        if (curMaxEle == null || isMax) {
                            if (isHori) {
                                if (curMaxEle && w < minWidth) {
                                    continue;
                                }
                            } else {
                                if (h < minHeight) {
                                    if (!needCheckNext || h < windowHeight || !ele.contains(self.initNext)) {
                                        continue;
                                    }
                                }
                            }
                            curHeight = h;
                            curMaxArea = a;
                            curWidth = w;
                            curMaxEle = curNode;
                            preOffsetTop == curNode.offsetTop;
                        }
                    }
                    if (curMaxEle) {
                        let sameClassNum = 0;
                        if (curMaxEle.className) {
                            for(i = 0; i < ele.children.length; i++) {
                                let curNode = ele.children[i];
                                if (curMaxEle != curNode && curNode.style.display !== 'none' && curMaxEle.className == curNode.className && curMaxEle.tagName == curNode.tagName){
                                    sameClassNum++;
                                }
                            }
                        }
                        if (sameClassNum < 5) {
                            return checkElement(curMaxEle);
                        }
                    }
                    if (ele.parentNode.children.length == 1 && curWin.getComputedStyle(ele.parentNode).float == 'none') ele = ele.parentNode;
                    else if (ele.tagName.toUpperCase() == "P" || ele.tagName.toUpperCase() == "BR") ele = ele.parentNode;
                    else if (ele.tagName.toUpperCase() == "TD") ele = ele.parentNode;
                    else if (ele.tagName.toUpperCase() == "TBODY") {
                        self.curSiteRule.pageElement = geneSelector(ele) + ">*";
                        if (ele.children.length > 0 && ele.children[0].querySelector("th")) {
                            self.curSiteRule.pageElement += ":not(:first-child)";
                        }
                        debug(self.curSiteRule.pageElement, 'Page element');
                        return ele.children;
                    }
                    let imgs = ele.querySelectorAll('img');
                    if (imgs.length == 1) {
                        let img = imgs[0];
                        if (img.offsetWidth > ele.offsetWidth / 3 * 2 && img.offsetHeight > ele.offsetHeight / 2) {
                            ele = img;
                        }
                    }
                    self.curSiteRule.pageElement = geneSelector(ele);
                    let pf = false;
                    if (ele.parentNode) {
                        let paDisplay = curWin.getComputedStyle(ele.parentNode).display;
                        pf = paDisplay.indexOf('flex') !== -1 || paDisplay.indexOf('grid') !== -1;
                    }
                    if (ele.children.length > 1) {
                        if (articleNum > 1) {
                            self.curSiteRule.pageElement += ">article";
                            ele = ele.children;
                        } else {
                            let hasText = false;
                            for (let i in ele.childNodes) {
                                let child = ele.childNodes[i];
                                if (child.nodeType == 3 && child.nodeValue.trim() !== '') {
                                    hasText = true;
                                    ele = [ele];
                                    break;
                                }
                            }
                            if (!hasText) {
                                if (curWin.getComputedStyle(ele).gridArea && curWin.getComputedStyle(ele).gridArea != "auto / auto / auto / auto") {
                                    self.curSiteRule.pageElement += ">*";
                                    ele = ele.children;
                                } else {
                                    let middleChild = ele.children[parseInt(ele.children.length / 2)];
                                    if (curWin.getComputedStyle(ele).display === 'flex' || (rulesData.opacity != 0 && !pf)) {
                                        ele = [ele];
                                    } else if ((middleChild.style && middleChild.style.position === "absolute" && middleChild.style.left && middleChild.style.top) || ele.tagName.toUpperCase() === "UL" || curHeight == 0) {
                                        ele = [ele];
                                    } else {
                                        self.curSiteRule.pageElement += ">*";
                                        ele = ele.children;
                                    }
                                }
                            }
                        }
                    } else if (pf) {
                        self.curSiteRule.pageElement += ">*";
                        ele = ele.children;
                    } else {
                        ele = [ele];
                    }
                    debug(self.curSiteRule.pageElement, 'Page element');
                    return ele;
                }
                pageElement = checkElement(body);
                if (pageElement && pageElement.length > 0 && self.initNext) {
                    let lastBottom = getElementBottom(pageElement[pageElement.length - 1]);
                    if (lastBottom && getElementTop(self.initNext) - lastBottom > 1000) {
                        debug("Stop as too long between next & page element");
                        isPause = true;
                        pageElement = [];
                    } else {
                        if (pageElement.length == 1 && pageElement[0].tagName.toUpperCase() == "IMG") {
                            self.curSiteRule.pageBar = 0;
                        }
                    }
                }
                //if(pageElement)this.saveCurSiteRule();
            }

            if (doc !== document) {
                this.setPageElementCss(pageElement);
                this.lazyImgAction(pageElement);
            } else if (!this.docPageElement) {
                this.setPageElementCss(pageElement, true);
                this.docPageElement = pageElement;
                if (this.nextLinkHref) {
                    this.openInNewTab(pageElement);
                }
            }
            return pageElement;
        }

        changeVisibility() {
            let pageElementCss = this.curSiteRule.pageElementCss || this.curSiteRule.pageElementStyle || rulesData.pageElementCss;
            if (pageElementCss) return;
            if (!this.changingVisibility) {
                clearTimeout(this.changeVisibilityTimer);
                this.changeVisibilityTimer = setTimeout(() => {
                    this.changingVisibility = true;
                    this.changeVisibility();
                }, 300);
                return;
            }
            this.changingVisibility = false;
            if (!this.visibilityItems || !this.visibilityItems.length || this.visibleIndex < 0) return;
            let tempIndex = this.visibleIndex, findVisible = false, lastVisible = 0;
            let viewPortHeight = window.innerHeight || document.documentElement.clientHeight || getBody(document).clientHeight;
            let checkItem = this.visibilityItems[tempIndex];
            while(checkItem) {
                if (!checkItem.style.containIntrinsicSize) return;
                if (checkItem.offsetParent) {
                    let clientRect = checkItem.getBoundingClientRect();
                    let top = clientRect && clientRect.top;
                    let bottom = clientRect && clientRect.bottom;
                    if (bottom > 0 && top < viewPortHeight) {
                        if (!findVisible) {
                            findVisible = true;
                            lastVisible = tempIndex;
                        }
                        checkItem.style.contentVisibility = "visible";
                    } else {
                        if (top < viewPortHeight && checkItem.style.contentVisibility == "auto") {
                            break;
                        } else checkItem.style.contentVisibility = "auto";
                    }
                }
                if (tempIndex == 0) break;
                tempIndex--;
                checkItem = this.visibilityItems[tempIndex];
            }
            tempIndex = this.visibleIndex + 1;
            if (findVisible) {
                this.visibleIndex = lastVisible;
            }
            checkItem = this.visibilityItems[tempIndex];
            while(checkItem) {
                if (!checkItem.style.containIntrinsicSize) return;
                if (checkItem.offsetParent) {
                    let clientRect = checkItem.getBoundingClientRect();
                    let top = clientRect && clientRect.top;
                    let bottom = clientRect && clientRect.bottom;
                    if (bottom > 0 && top < viewPortHeight) {
                        findVisible = true;
                        lastVisible = tempIndex;
                        checkItem.style.contentVisibility = "visible";
                    } else {
                        if (findVisible && checkItem.style.contentVisibility == "auto") {
                            break;
                        } else checkItem.style.contentVisibility = "auto";
                    }
                }
                if (tempIndex == this.visibilityItems.length - 1) break;
                tempIndex++;
                checkItem = this.visibilityItems[tempIndex];
            }
            if (findVisible) {
                this.visibleIndex = lastVisible;
            }
        }

        setPageElementCss(pageElement, init) {
            let self = this;
            if (pageElement && pageElement.length > 0) {
                let pageElementCss = this.curSiteRule.pageElementCss || this.curSiteRule.pageElementStyle || rulesData.pageElementCss;
                if (!pageElementCss && init && !this.nextLinkHref) return;
                [].forEach.call(pageElement, (ele, i) => {
                    if (!/LINK|META|STYLE|SCRIPT/.test(ele.tagName.toUpperCase())) {
                        if (pageElementCss) {
                            if (pageElementCss !== '0' && !ele.dataset.pagetualPageElement) {
                                ele.style.cssText = (ele.style.cssText || '') + pageElementCss;
                                ele.dataset.pagetualPageElement = 1;
                            }
                        } else {
                            ele.style.containIntrinsicSize = `auto ${ele.offsetHeight || 100}px`;
                            if (ele.style.containIntrinsicSize) {
                                if (init) {
                                    ele.style.contentVisibility = "visible";
                                    self.visibilityItems.push(ele);
                                    self.visibleIndex++;
                                } else {
                                    ele.style.contentVisibility = emuIframe ? "visible" : "auto";
                                }
                            }
                        }
                    }
                });
            }
        }

        async getPage(doc) {
            if (document.documentElement.className.indexOf('discourse') != -1) return {};
            let body = getBody(doc);
            let video = body.querySelector("video") || body.querySelector("iframe[id*=play],[id*=play]>iframe,iframe[src*=player],iframe[src*=m3u8]") || body.querySelector("canvas");
            if (video && video.offsetParent && video.name != 'pagetual-iframe') {
                let scrollWidth = video.scrollWidth || video.offsetWidth;
                let scrollHeight = video.scrollHeight || video.offsetHeight;
                if (scrollWidth > 500 && scrollHeight > 500) {
                    isPause = true;
                    debug("Disable when large media found");
                    return {};
                } else if (scrollWidth > 100 && scrollHeight > 100) {
                    let winWidth = window.innerWidth || document.documentElement.clientWidth;
                    let winHeight = window.innerHeight || document.documentElement.clientHeight;
                    if (scrollWidth > winWidth>>1 && scrollHeight > winHeight>>1) {
                        isPause = true;
                        debug("Disable when large media found under mobile");
                        return {};
                    }
                }
            }
            let canSave = false;//發現頁碼選擇器在其他頁對不上，還是別保存了
            let url = this.curUrl.slice(0, 250).replace("index.php?", "?");
            let _url = url.replace(/\.s?html?$/i, "");
            let pageNum = 1, preStr = "", afterStr = "";
            let pageTwoReg = /^[\/\?&]?[_-]?(p|page)?=?\/?2(\/|\?|&|$)/i;
            let pageMatch1 = url.match(/(.*[\?&]p(?:age)?=)(\d+)($|[#&].*)/i);
            let doubtTextReg = /^\s*(»|>>)\s*$/;
            if (pageMatch1) {
                preStr = pageMatch1[1];
                pageNum = parseInt(pageMatch1[2]);
                afterStr = pageMatch1[3];
            } else {
                let pageMatch2 = url.match(/(.*[a-z\/\-_](?:p|page)?\/?)(\d+)(\.s?html?$|\/?$)/i);
                if (pageMatch2) {
                    preStr = pageMatch2[1];
                    pageNum = parseInt(pageMatch2[2]);
                    afterStr = pageMatch2[3];
                    if (/^\/?$/.test(afterStr) && !/(p(age)?|_|\-|\/)$/.test(preStr)) {
                        preStr = "";
                        afterStr = "";
                    }
                }
            }
            if (pageNum > 999) {
                pageNum = 1;
                preStr = "";
                afterStr = "";
            }
            let curPage = doc, i, cur, jsNext;
            let next1, next2, next3, next4, nextJs1, nextJs2, nextJs3;
            let next = body.querySelector(".page-next>a") ||
                body.querySelector("a.next_page") ||
                body.querySelector("#next_page") ||
                body.querySelector(".nextPage") ||
                body.querySelector(".pagination-next>a") ||
                body.querySelector("a[data-pagination=next]") ||
                body.querySelector("ul.pagination>li.active+li>a") ||
                body.querySelector(".pagination a.current+a") ||
                body.querySelector(".pagination a[rel=next]") ||
                body.querySelector(".pagination-nav__item--next>a") ||
                body.querySelector("a.pageright") ||
                body.querySelector(".page-numbers.current+a");
            if (!next) {
                await sleep(1);
                next = body.querySelector("input[value='next']") ||
                body.querySelector("input[value='Next page']") ||
                body.querySelector("input[value='下一页']") ||
                body.querySelector("input[value='下一頁']") ||
                body.querySelector("a#pb_next") ||
                body.querySelector("a#rightFix") ||
                body.querySelector("a#btnPreGn") ||
                body.querySelector("a.page-next") ||
                body.querySelector("a.pages-next") ||
                body.querySelector("a.page.right");
            }
            if (!next) {
                await sleep(1);
                next = body.querySelector("a#next") ||
                body.querySelector(".next>a") ||
                body.querySelector(".next>button") ||
                body.querySelector("a[alt=next]") ||
                body.querySelector(".pg_area>em+a") ||
                body.querySelector("button.next:not([disabled])") ||
                body.querySelector(".btn_next:not([disabled])") ||
                body.querySelector(".btn-next:not([disabled])") ||
                body.querySelector("[title=next]") ||
                body.querySelector("a#linkNext") ||
                body.querySelector("a[class*=page__next]");
            }
            if (!next) {
                await sleep(1);
                let nexts = body.querySelectorAll("a.next");
                for (i = 0; i < nexts.length; i++) {
                    if (nexts[i].style.display !== "none" &&
                       nexts[i].parentNode.style.display !== "none" &&
                       !/^\s*([上前首尾]|previous)/i.test(nexts[i].innerText.trim())) {
                        next = nexts[i];
                        break;
                    }
                }
            }
            if (next && (!next.href || /^(javascript|#)/.test(next.href.replace(location.href, "")))) {
                jsNext = next;
                next = null;
            }
            if (!next) {
                next = body.querySelectorAll("[aria-label='Next page']");
                if (next && next.length == 1) {
                    next = next[0];
                    if (!next.href || /^(javascript|#)/.test(next.href.replace(location.href, ""))) {
                        if (!jsNext) jsNext = next;
                        next = null;
                    }
                } else {
                    next = null;
                }
            }
            if (jsNext) {
                if (jsNext.className) {
                    if (/slick|slide|gallery/i.test(jsNext.className)) jsNext = null;
                    else if (jsNext.classList && jsNext.classList.contains('disabled')) jsNext = null;
                }
                if (jsNext) {
                    let ariaLabel = jsNext.getAttribute("aria-label");
                    if (ariaLabel && /slick|slide|gallery/i.test(ariaLabel)) jsNext = null;
                }
            }
            if (next && nextTextReg2.test(next.innerText.trim())) {
                next2 = next;
                next = null;
            }
            if (!next) {
                next = body.querySelector("a.curr+a") ||
                    body.querySelector("div.wp-pagenavi>span.current+a,div.page-nav>span.current+a,div.article-paging>span+a") ||
                    body.querySelector(".number>ul>li.active+li>a");;
            }
            if (!next) {
                let pageDiv = body.querySelector("div.pages>ul");
                if (pageDiv) {
                    cur = pageDiv.querySelector("li>b");
                    if (cur) next = cur.parentNode.nextElementSibling;
                    if (next) next = next.querySelector("a");
                }
            }
            if (!next) {
                next = body.querySelector(".pages>a[href='javascript:;']+a");
                if (next && (next.href == "javascript:;" || next.getAttribute("href") == "#")) next = null;
            }
            if (!next) {
                await sleep(1);
                let pageDiv = body.querySelector(".pagination");
                if (pageDiv) {
                    cur = pageDiv.querySelector("[class*=current]");
                    if (cur) next = cur.parentNode.nextElementSibling;
                    if (next) next = next.querySelector("a");
                }
            }
            if (!next) {
                let aTags = body.querySelectorAll("a,button,[type='button']");
                for (i = aTags.length - 1; i >= 0; i--) {
                    if (next1) break;
                    if (i % 500 == 0) {
                        await sleep(1);
                    }
                    let aTag = aTags[i];
                    if (aTag.style.display == "none") continue;
                    if (aTag.innerText) {
                        if (aTag.innerText.trim().length > 80) continue;
                        if (aTag.innerText == "§") continue;
                    }
                    let availableHref = aTag.href && aTag.href.length < 250;
                    if (availableHref && /next$/i.test(aTag.href)) continue;
                    if (aTag.className) {
                        if (/slick|slide|gallery/i.test(aTag.className)) continue;
                        if (aTag.classList && aTag.classList.contains('disabled')) continue;
                    }
                    let ariaLabel = aTag.getAttribute("aria-label");
                    if (ariaLabel && /slick|slide|gallery/i.test(ariaLabel)) continue;
                    if (aTag.parentNode) {
                        if (aTag.parentNode.className && /slick|slide|gallery/i.test(aTag.parentNode.className)) continue;
                        if (aTag.parentNode.classList && aTag.parentNode.classList.contains('disabled')) continue;
                        if (aTag.parentNode.tagName.toUpperCase() == "BLOCKQUOTE") continue;
                    }
                    let isJs = !aTag.href || /^(javascript|#)/.test(aTag.href.replace(location.href, ""));
                    let innerText = (aTag.innerText || aTag.value || aTag.title || '');
                    if (innerText && innerText.length < 250) {
                        innerText = innerText.trim().replace(/\n.*/, '').replace(/ /g, '');
                        if (isJs && /^(»|>>|>|›|→|❯)$/.test(innerText)) continue;
                        if (innerText && innerText.length <= 25) {
                            if (!next1) {
                                if (nextTextReg1.test(innerText)) {
                                    if (isJs) {
                                        if (!nextJs1) nextJs1 = aTag;
                                    } else {
                                        next1 = aTag;
                                    }
                                }
                            }
                            if (!next4) {
                                if (!next2) {
                                    if (nextTextReg2.test(innerText) || /nextpage|pager\-older/i.test(aTag.className) || /^(»|>>)$/.test(innerText)) {
                                        if (isJs) {
                                            if (!nextJs2) nextJs2 = aTag;
                                        } else {
                                            next2 = aTag;
                                        }
                                    }
                                }
                                if (!next3) {
                                    if (/^(next\s*(»|>>|>|›|→|❯)?|&gt;|▶|>|›|→|❯)$/i.test(innerText)) {
                                        if (isJs) {
                                            if (!nextJs3) nextJs3 = aTag;
                                        } else {
                                            next3 = aTag;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (isJs) continue;
                    if (!next4) {
                        let prevEle = aTag.previousElementSibling;
                        if (prevEle && (prevEle.tagName.toUpperCase() == 'B' || prevEle.tagName.toUpperCase() == 'SPAN' || prevEle.tagName.toUpperCase() == 'STRONG')) {
                            if (/^\d+$/.test(aTag.innerText.trim()) && /^\d+$/.test(prevEle.innerText.trim()) && parseInt(aTag.innerText) == parseInt(prevEle.innerText) + 1) {
                                next4 = aTag;
                            }
                        }
                    }
                    if (!next4 && availableHref) {
                        if (aTag.href.indexOf('http') === 0 && aTag.href.indexOf(location.hostname) === -1) continue;
                        let _aHref = aTag.href.replace("?&", "?").replace("index.php?", "?");
                        if (preStr || afterStr) {
                            let _aHrefTrim = _aHref;
                            if (preStr) _aHrefTrim = _aHrefTrim.replace(preStr, "");
                            if (afterStr) _aHrefTrim = _aHrefTrim.replace(afterStr, "");
                            if (_aHrefTrim == pageNum + 1) {
                                next4 = aTag;
                            }
                        } else if (this.curUrl != aTag.href) {
                            _aHref = _aHref.replace(/\.s?html?$/i, "");
                            if (_aHref.indexOf(_url) != -1) {
                                let pageTwoMatch = _aHref.replace(_url, "").match(pageTwoReg);
                                if (pageTwoMatch) {
                                    afterStr = pageTwoMatch[2];
                                    next4 = aTag;
                                }
                            }
                        }
                        if (next4) {
                            let curHref = next4.getAttribute("href");
                            let curPageReg = new RegExp("(.*)" + (pageNum + 1) + afterStr.replace(/([\.\?])/g, '\\$1'));
                            let otherPageHref = curHref.replace(curPageReg, `$1${pageNum}${afterStr}`);
                            let otherPageEle = body.querySelector(`a[href='${otherPageHref}']`);
                            if (!otherPageEle) {
                                otherPageHref = curHref.replace(curPageReg, `$1${pageNum + 2}${afterStr}`);
                                otherPageEle = body.querySelector(`a[href='${otherPageHref}']`);
                            }
                            if (otherPageEle && !/^\d+$/.test(otherPageEle.innerText.trim())) next4 = null;
                        }
                    }
                }
                if (next2 && doubtTextReg.test(next2.innerText)) {
                    next2 = this.verifyNext(next2, doc);
                }
                if (nextJs2 && doubtTextReg.test(nextJs2.innerText)) {
                    nextJs2 = this.verifyNext(nextJs2, doc);
                }
                if (next3) {
                    next3 = this.verifyNext(next3, doc);
                }
                if (nextJs3) {
                    nextJs3 = this.verifyNext(nextJs3, doc);
                }
            }
            if (!next) next = next1 || next4 || next3 || next2;
            if (!next) {
                next = jsNext || nextJs1 || nextJs3 || nextJs2;
                if (next && next.parentNode.className.indexOf('tab') != -1) next = null;
            }
            if (next && next.classList && next.classList.contains("results-more")) next=null;
            if (next && next.hasAttribute && next.hasAttribute("disabled")) next=null;
            return {next:next, canSave:canSave};
        }

        verifyNext(next, doc) {
            if (!next) return null;
            if (next.previousElementSibling && next.previousElementSibling.tagName.toUpperCase() == 'BR') return null;
            let eles = getAllElements(`//${next.tagName}[text()='${next.innerText}']`, doc);
            if (eles.length >= 2 && eles[0].href != eles[1].href) {
                next = null;
            } else if (doc == document) {
                let left = getElementLeft(next);
                if (left < 20 || (document.documentElement.scrollWidth > 500 && left < 250)) {
                    next = null;
                } else {
                    let top = getElementTop(next);
                    if (top < 20) {
                        next = null;
                    } else {
                        let bottom = top + next.offsetHeight || 0;
                        let scrollH = Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
                        if (scrollH - bottom < 10) next = null;
                    }
                }
            }
            return next;
        }

        canonicalUri(src) {
            if (!src) {
                return "";
            }
            if (src.charAt(0) == "#") return this.curUrl + src;
            if (src.charAt(0) == "?") return this.curUrl.replace(/^([^\?#]+).*/, "$1" + src);
            let origin = location.protocol + '//' + location.host;
            let url = this.basePath || origin;
            url = url.replace(/(\?|#).*/, "");
            if (/https?:\/\/[^\/]+$/.test(url)) url = url + '/';
            if (url.indexOf("http") !== 0) url = origin + url;
            var root_page = /^[^\?#]*\//.exec(url)[0],
                root_domain = /^\w+\:\/\/\/?[^\/]+/.exec(root_page)[0],
                absolute_regex = /^\w+\:\/\//;
            this.updateUrl = false;
            while (src.indexOf("../") === 0) {
                src = src.substr(3);
                root_page = root_page.replace(/\/[^\/]+\/$/, "/");
                this.updateUrl = true;
            }
            src = src.replace(/\.\//, "");
            if (/^\/\/\/?/.test(src)) {
                src = location.protocol + src;
            }
            return (absolute_regex.test(src) ? src : ((src.charAt(0) == "/" ? root_domain : root_page) + src));
        }

        getLinkByPage(url, pageNum) {
            if (!url) return;
            if (this.curSiteRule.pageNum) {
                let result = this.curSiteRule.pageNum;
                let strMatch = result.match(/\{.*?}/);
                if (!strMatch) return null;
                let urlReg = new RegExp("(" + result.replace(strMatch[0], ")\\d+(") + ")", "i");
                let code = strMatch[0].replace(/^{/, "").replace(/}$/, "").replace(/\$p/g, pageNum);
                if (code == pageNum) {
                    result = url.replace(urlReg, "$1" + code + "$2");
                } else {
                    try {
                        code = Function('"use strict";return ' + code)();
                        result = url.replace(urlReg, "$1" + code + "$2");
                    } catch(e) {
                        debug(e);
                    }
                }
                if (result != url) {
                    return result;
                }
            }
            return url.replace(/([&\/\?](p=|page[=\/_-]?))\d+/i, "$1" + pageNum).replace(/([_-])\d+\./i, "$1" + pageNum + ".");
        }

        getPageNumFromUrl(url) {
            if (!url) return curPage;
            if (this.curSiteRule.pageNum) {
                let result = this.curSiteRule.pageNum;
                let strMatch = result.match(/\{.*?}/);
                if (!strMatch) return null;
                let urlReg = new RegExp(".*" + result.replace(strMatch[0], "(\\d+)") + ".*", "i");
                let curShowNum = url.replace(urlReg, "$1");
                if (curShowNum != url) {
                    let code = strMatch[0].replace(/^{/, "").replace(/}$/, "");
                    if (code == "$p") {
                        return curShowNum;
                    } else {
                        try {
                            let page1 = Function('"use strict";return ' + code.replace("$p", "0"))();
                            let page2 = Function('"use strict";return ' + code.replace("$p", "1"))();
                            let numGap = page2 - page1;
                            return (curShowNum - page1) / numGap;
                        } catch(e) {
                            debug(e);
                        }
                    }
                } else {
                    return curPage;
                }
            }
            let pageNum = url.replace(/.*[&\/\?](p=|page[=\/_-]?)(\d+).*/i, "$2");
            return pageNum == url ? curPage : (pageNum.length > 4 ? curPage : pageNum);
        }

        async getNextLink(doc) {
            let nextLink = null, page, href;
            let getNextLinkByForm = (form, submitBtn, n) => {
                let params = [];
                let formData = new FormData(form);
                if (submitBtn && submitBtn.getAttribute) {
                    let btnValue, btnName;
                    btnName = submitBtn.getAttribute("name");
                    btnValue = submitBtn.getAttribute("value");
                    if (btnName && btnValue) params = [btnName + "=" + btnValue];
                }
                for (let [key, value] of formData) {
                    if (n && /^(p|page)$/i.test(key)) {
                        params.push(key + '=' + n);
                    } else {
                        params.push(key + '=' + encodeURIComponent(value));
                    }
                }
                params = params.join('&');
                return form.action + (form.action.indexOf('?') == -1 ? '?' : '&') + params + (form.method == 'post' ? '#p{' + params + '}' : '');
            };
            if (this.curSiteRule.pageElementByJs) {
                this.nextLinkHref = "#";
                return true;
            } else if (this.curSiteRule.nextLinkByJs) {
                try {
                    let over = _url => {
                    };
                    let targetUrl = await ((typeof _unsafeWindow.pagetualNextLinkByJs == 'undefined') ? new AsyncFunction("doc", '"use strict";' + this.curSiteRule.nextLinkByJs) : _unsafeWindow.pagetualNextLinkByJs)(doc);
                    if (targetUrl) nextLink = {href: targetUrl};
                } catch(e) {
                    debug(e);
                }
            } else if (this.curSiteRule.nextLinkByUrl) {
                let targetUrl = this.curUrl.replace(new RegExp(this.curSiteRule.nextLinkByUrl[0], "i"), this.curSiteRule.nextLinkByUrl[1]);
                if (targetUrl != this.curUrl) {
                    let includeSel = this.curSiteRule.nextLinkByUrl[2];
                    let excludeSel = this.curSiteRule.nextLinkByUrl[3];
                    if (includeSel) {
                        includeSel = includeSel.trim();
                        if (!getElement(includeSel, doc)) {
                            this.nextLinkHref=false;
                            return null;
                        }
                    }
                    if (excludeSel) {
                        excludeSel = excludeSel.trim();
                        if (getElement(excludeSel, doc)) {
                            this.nextLinkHref=false;
                            return null;
                        }
                    }
                    let reps = targetUrl.match(/{.*?}/g);
                    if (reps) {
                        reps.forEach(rep => {
                            let code = rep.replace("{", "").replace("}", "").replace(/\(\)/g, "0");
                            let result = code.match(/^(\d*)\+1$/);
                            if (result) {
                                result = parseInt(result[1] || 1) + 1;
                            } else {
                                try {
                                    result = Function('"use strict";return ' + code)();
                                } catch(e) {
                                    debug(e);
                                }
                            }
                            targetUrl = targetUrl.replace(rep, result);
                        });
                    }
                }
                nextLink = {href: targetUrl};
            } else if (this.curSiteRule.nextLink) {
                let nextLinkSel = this.curSiteRule.nextLink;
                if (nextLinkSel != 0) {
                    if (Array && Array.isArray && Array.isArray(nextLinkSel)) {
                        nextLink = getElement(nextLinkSel[nextIndex], doc);
                        if (!nextLink && curPage == 1 && nextIndex != 0) {
                            nextIndex = 0;
                            nextLink = getElement(nextLinkSel[nextIndex], doc);
                        }
                    } else nextLink = getElement(nextLinkSel, doc);
                }
                if (nextLink && (this.curSiteRule.action == 0 || this.curSiteRule.action == 1 || this.curSiteRule.action == 2)) {
                    let form = doc.querySelector('#search-form');
                    if (!nextLink.href && nextLink.hasAttribute && nextLink.hasAttribute("onclick") && form) {
                        if (/^\d+$/.test(nextLink.innerText)) {
                            nextLink.href = getNextLinkByForm(form, nextLink, nextLink.innerText);
                        }
                    } else if (nextLink.tagName.toUpperCase() == "INPUT" || nextLink.type == "submit") {
                        form = nextLink.parentNode;
                        while (form) {
                            if (form.tagName.toUpperCase() == "FORM") break;
                            else form = form.parentNode;
                        }
                        if (form) {
                            nextLink.href = getNextLinkByForm(form, nextLink);
                        }
                    }
                    if (nextLink.href && this.curSiteRule.action != 0) {
                        nextLink.href = nextLink.href.replace(/#p{.*/, "");
                    }
                }
            } else {
                page = await this.getPage(doc);
                nextLink = page.next;
                if (nextLink) {
                    if (nextLink.tagName.toUpperCase() == "INPUT" || nextLink.type == "submit") {
                        let form = nextLink.parentNode;
                        while (form) {
                            if (form.tagName.toUpperCase() == "FORM") break;
                            else form = form.parentNode;
                        }
                        if (form) {
                            nextLink.href = getNextLinkByForm(form, nextLink);
                        }
                    }
                    let parent = nextLink;
                    while (parent && parent.tagName.toUpperCase() !== "BODY") {
                        if (parent.hasAttribute && parent.hasAttribute("disabled")) {
                            this.nextLinkHref = false;
                            return null;
                        }
                        if (parent.className && parent.classList) {
                            if (parent.classList.contains("noClick") || parent.classList.contains("no-pages") || parent.classList.contains("disabled")) {
                                this.nextLinkHref = false;
                                return null;
                            }
                        }
                        if (parent.style && parent.style.display === "none") {
                            this.nextLinkHref = false;
                            return null;
                        }
                        parent = parent.parentNode;
                    }
                    if (doc == document) {
                        if ((!nextLink.href || /^(javascript|#)/.test(nextLink.href.replace(location.href, ""))) && !isVisible(nextLink, _unsafeWindow)) {
                            this.nextLinkHref = false;
                            return null;
                        } else {
                            let nextLinkCs = _unsafeWindow.getComputedStyle(nextLink);
                            if (nextLinkCs.cursor == "not-allowed") {
                                this.nextLinkHref = false;
                                return null;
                            }
                            this.initNext = nextLink;
                        }
                    }
                    let form = doc.querySelector('#search-form');
                    if (!nextLink.href && nextLink.hasAttribute("onclick") && form) {
                        if (form && /^\d+$/.test(nextLink.innerText)) {
                            href = getNextLinkByForm(form, nextLink, nextLink.innerText);
                        }
                    }
                }
            }
            if (nextLink) {
                if (!this.checkStopSign(nextLink, doc)) return null;
                if (this.curSiteRule.action == 3) {
                    if (doc == document) debug(nextLink, 'Next link');
                    this.nextLinkHref = '#';
                } else {
                    let needUrl = (this.curSiteRule.action == 0 || this.curSiteRule.action == 1 || this.curSiteRule.action == 2);
                    if (!href) href = nextLink.href;
                    if (href && nextLink.getAttribute) {
                        let _href = nextLink.getAttribute("href");
                        if (_href) {
                            if (_href.charAt(0) == "#" || _href == "?"){
                                href = "#";
                            } else {
                                href = _href;
                            }
                        }
                    }

                    if (needUrl && (href === "" || href === null)) {
                        this.nextLinkHref = false;
                    } else if (needUrl && /^(javascript:|#)/.test(href)) {
                        this.nextLinkHref = false;
                    } else {
                        this.nextLinkHref = (href && !/^(javascript:|#)/.test(href)) ? this.canonicalUri(href) : "#";
                        let compareUrl = this.nextLinkHref.replace(/#p{.*/, "");
                        if (compareUrl != "#" && (compareUrl == this.initUrl || compareUrl == this.curUrl || compareUrl == this.curUrl + "#" || compareUrl == this.oldUrl || compareUrl == this.oldUrl + "#")) {
                            this.nextLinkHref = false;
                        } else if (doc == document) debug(nextLink, 'Next link');
                    }
                }
            } else {
                this.nextLinkHref = false;
            }
            this.preload();
            return nextLink;
        }

        checkStopSign(nextLink, doc) {
            if (this.curSiteRule.stopSign) {
                if (Array && Array.isArray && Array.isArray(this.curSiteRule.stopSign)) {
                    let includeSel = this.curSiteRule.stopSign[0];
                    let excludeSel = this.curSiteRule.stopSign[1];
                    let curSign = this.curSiteRule.stopSign[2];
                    let maxSign = this.curSiteRule.stopSign[3];
                    if (Array && Array.isArray && Array.isArray(includeSel) && !curSign) {
                        curSign = includeSel;
                        includeSel = false;
                    }
                    if (Array && Array.isArray && Array.isArray(excludeSel) && !maxSign) {
                        maxSign = excludeSel;
                        excludeSel = false;
                    }
                    if (includeSel) {
                        includeSel = includeSel.trim();
                        if (!getElement(includeSel, doc)) {
                            isPause = true;
                            this.nextLinkHref = false;
                            return false;
                        }
                    }
                    if (excludeSel) {
                        excludeSel = excludeSel.trim();
                        if (getElement(excludeSel, doc)) {
                            isPause = true;
                            this.nextLinkHref = false;
                            return false;
                        }
                    }
                    if (curSign && maxSign) {
                        let currentEle = getElement(curSign[0], doc);
                        let maxEle = getElement(maxSign[0], doc);
                        if (currentEle && maxEle) {
                            let currentSignNum, maxSignNum;
                            if (/\(.*\)/.test(curSign[1])) {
                                currentSignNum = currentEle.innerText.match(new RegExp(curSign[1]));
                                if (currentSignNum) currentSignNum = currentSignNum[1];
                            } else if (currentEle.getAttribute) {
                                currentSignNum = currentEle.getAttribute(curSign[1]);
                            }
                            if (/\(.*\)/.test(maxSign[1])) {
                                maxSignNum = maxEle.innerText.match(new RegExp(maxSign[1]));
                                if (maxSignNum) maxSignNum = maxSignNum[1];
                            } else if (maxEle.getAttribute) {
                                maxSignNum = maxEle.getAttribute(maxSign[1]);
                            }
                            if (currentSignNum && maxSignNum && currentSignNum == maxSignNum) {
                                isPause = true;
                                this.nextLinkHref = false;
                                return false;
                            }
                        }
                    }
                } else {
                    try {
                        let stopSign = ((typeof _unsafeWindow.stopSign == 'undefined') ? Function("doc", "nextLink", '"use strict";' + this.curSiteRule.stopSign) : _unsafeWindow.stopSign)(doc, nextLink);
                        if (stopSign) {
                            isPause = true;
                            this.nextLinkHref = false;
                            return false;
                        }
                    } catch(e) {
                        debug(e);
                    }
                }
            }
            return true;
        }

        preload() {
            if (!rulesData.preload) return;
            if (!this.nextLinkHref || this.nextLinkHref == "#") return;
            let self = this, url = this.nextLinkHref;
            let postParams = url.match(/#p{(.*)}$/);
            if (postParams) {
                postParams = postParams[1];
                url = url.replace(/#p{.*/, "");
            }
            _GM_xmlhttpRequest({
                url: url,
                method: postParams ? 'POST' : 'GET',
                data: postParams,
                overrideMimeType: 'text/html;charset=' + (document.characterSet || document.charset || document.inputEncoding),
                headers: {
                    'Referer': location.href,
                    'User-Agent': navigator.userAgent,
                    "Content-Type": (postParams ? "application/x-www-form-urlencoded" : "text/html") + ";charset=" + (document.characterSet || document.charset || document.inputEncoding),
                },
                timeout: 10000,
                onload: function(res) {
                    var doc = null;
                    try {
                        doc = document.implementation.createHTMLDocument('');
                        doc.documentElement.innerHTML = res.response;
                        var body = getBody(doc);
                        if (body && body.firstChild) {
                            self.lazyImgAction(body.children);
                        }
                        if (!self.preloadDiv) {
                            self.preloadDiv = document.createElement('div');
                            self.preloadDiv.id = "pagetual-preload";
                            self.preloadDiv.style.cssText = 'display:none!important;';
                            getBody(document).appendChild(self.preloadDiv);
                            self.checkedImgs = {};
                        }
                        [].forEach.call(doc.images, i => {
                            let iSrc = i.src;
                            if (iSrc && !self.checkedImgs[iSrc]) {
                                self.checkedImgs[iSrc] = true;
                                let img = document.createElement('img');
                                img.src = iSrc;
                                self.preloadDiv.appendChild(img);
                            }
                        });
                        let code = self.curSiteRule.preloadImages;
                        if (code) {
                            let imgSrcArr = new Function("doc", '"use strict";' + code)(doc);
                            if (imgSrcArr && imgSrcArr.length) {
                                imgSrcArr.forEach(imgSrc => {
                                    if (imgSrc && !self.checkedImgs[imgSrc]) {
                                        self.checkedImgs[imgSrc] = true;
                                        let img = document.createElement('img');
                                        img.src = imgSrc;
                                        self.preloadDiv.appendChild(img);
                                    }
                                });
                            }
                        }
                    }
                    catch(e) {
                        debug(e);
                        return;
                    }
                }
            });
        }

        getInsert(refresh) {
            if (refresh) {
                this.insert = null;
            }
            if (this.insert && document.documentElement.contains(this.insert)) {
                return this.insert;
            }
            if (this.curSiteRule.insert) {
                let insertSel = this.curSiteRule.insert;
                if (Array && Array.isArray && Array.isArray(insertSel)) {
                    insertSel = insertSel[nextIndex < insertSel.length ? nextIndex : 0];
                }
                this.insert=getElement(insertSel, document);
            } else {
                let pageElement = this.getPageElement(document, _unsafeWindow);
                if (this.curSiteRule.singleUrl && this.nextLinkHref == "#" && this.curSiteRule.pageElement === 'body') {
                    debug("Stop as jsNext & whole body");
                    isPause = true;
                    return null;
                }
                if (pageElement && pageElement.length > 0) {
                    var pELast = pageElement[pageElement.length - 1];
                    this.insert = pELast.nextSibling ? pELast.nextSibling : pELast.parentNode.appendChild(document.createTextNode(' '));
                }
            }
            return this.insert;
        }

        pageInit(doc,eles){
            let code=this.curSiteRule.pageInit;
            if(code){
                let initFunc=((typeof _unsafeWindow.pagetualPageInit=='undefined') ? Function("doc", "eles", '"use strict";' + code) : _unsafeWindow.pagetualPageInit);
                let checkInit=(resolve)=>{
                    try{
                        if(initFunc(doc, eles)===false){
                            setTimeout(()=>{
                                checkInit(resolve);
                            },100);
                        } else {
                            resolve(true);
                        }
                    }catch(e){
                        resolve(false);
                        debug(e);
                    }
                };
                return new Promise((resolve) => {
                    checkInit(function(e) {
                        resolve(e)
                    });
                })
            }
        }

        pageAction(doc,eles) {
            let code = this.curSiteRule.pageAction;
            if (code) {
                try {
                    ((typeof _unsafeWindow.pagetualPageAction == 'undefined') ? Function("doc", "eles", '"use strict";' + code) : _unsafeWindow.pagetualPageAction)(doc, eles);
                } catch(e) {
                    debug(e);
                }
            }
            this.openInNewTab(eles);
            this.replaceElement(doc);
        }

        openInNewTab(eles) {
            if (openInNewTab) {
                [].forEach.call(eles, ele => {
                    if (ele.tagName.toUpperCase() == "A" && ele.href && !/^(mailto:|javascript:)|#/.test(ele.href)) {
                        ele.setAttribute('target', openInNewTab == 1 ? '_blank' : '_self');
                    } else {
                        [].forEach.call(ele.querySelectorAll('a[href]:not([href^="mailto:"]):not([href^="javascript:"]):not([href^="#"])'), a => {
                            if (openInNewTab == 1) {
                                a.setAttribute('target', '_blank');
                                if (a.getAttribute('onclick') == 'atarget(this)') {
                                    a.removeAttribute('onclick');
                                }
                            } else a.setAttribute('target', '_self');
                        });
                    }
                });
            }
        }

        lazyImgAction(eles) {
            if (!eles || eles.length == 0) return;
            let lazyImgSrc = this.curSiteRule.lazyImgSrc;
            if (lazyImgSrc === 0 || lazyImgSrc === '0') return;
            let setLazyImg = img => {
                let realSrc;
                if (lazyImgSrc) {
                    if (!Array.isArray(lazyImgSrc)) {
                        lazyImgSrc = [lazyImgSrc];
                    }
                    realSrc = img.getAttribute(lazyImgSrc[0]);
                    if (lazyImgSrc.length == 2) {
                        let removeProps = lazyImgSrc[1].split(",");
                        removeProps.forEach(prop => {
                            img.removeAttribute(prop.trim());
                        });
                    }
                }
                if (!realSrc) {
                    if (img.getAttribute("_src") && !img.src) {
                        realSrc = img.getAttribute("_src");
                    } else {
                        for (let i in lazyImgAttr) {
                            let attrName = lazyImgAttr[i];
                            let attrValue = img.getAttribute(attrName);
                            if (attrValue) {
                                realSrc = attrValue;
                                break;
                            }
                        }
                    }
                    if (!realSrc && img._lazyrias && img._lazyrias.srcset) {
                        realSrc = img._lazyrias.srcset[img._lazyrias.srcset.length - 1];
                    }
                    if (realSrc) {
                        img.removeAttribute("srcset");
                    } else if (img.srcset) {
                        var srcs = img.srcset.split(/[xw],/i), largeSize = 0;
                        srcs.forEach(srci => {
                            let srcInfo = srci.trim().split(" "), curSize = parseInt(srcInfo[1]);
                            if (srcInfo[1] && curSize > largeSize) {
                                largeSize = curSize;
                                realSrc = srcInfo[0];
                            }
                        });
                    }
                }
                if (realSrc) {
                    img.src = realSrc;
                    if (img.style.display == "none") {
                        img.style.display = "";
                    }
                    if (img.style.visibility == "hidden") {
                       img.style.visibility = "";
                    }
                    if (img.style.opacity == 0) {
                        img.style.opacity = "";
                    }
                }
            };
            [].forEach.call(eles, ele => {
                if (ele.tagName.toUpperCase() == "IMG") {
                    setLazyImg(ele);
                } else {
                    [].forEach.call(ele.querySelectorAll("img,picture>source"), img => {
                        setLazyImg(img);
                    });
                    [].forEach.call(ele.querySelectorAll("div[data-src][data-thumb]"), div => {
                        div.style.setProperty("background-image", "url(" + div.dataset.src + ")", "important");
                    });
                }
                if (ele.tagName.toUpperCase() == "A" && ele.classList.contains("lazyload")) {
                    if (ele.dataset.original) {
                        ele.style.backgroundImage = 'url("' + ele.dataset.original + '")';
                    }
                } else {
                    [].forEach.call(ele.querySelectorAll("a.lazyload"), a => {
                        if (a.dataset.original) {
                            a.style.backgroundImage = 'url("' + a.dataset.original + '")';
                        }
                    });
                }
            });
        }

        initPage(callback) {
            let self = this;
            if (self.initing) return;
            self.initing = true;
            setTimeout(() => {
                self.initing = false;
            }, 100);
            curPage = 1;
            urlChanged = false;
            SideController.getInstance().remove();
            if (this.addedElePool && this.addedElePool.length) {
                this.addedElePool.forEach(ele => {
                    if (ele.parentNode) ele.parentNode.removeChild(ele);
                });
            }
            this.insert = null;
            this.addedElePool = [];
            this.visibilityItems = [];
            this.visibleIndex = -1;
            this.pageDoc = document;
            this.nextLinkHref = null;
            this.curUrl = location.href;
            this.oldUrl = "";
            this.initUrl = location.href;
            this.historyUrl = "";
            let base = document.querySelector("base");
            this.basePath = base ? base.href : location.href;
            this.getRule(async () => {
                isPause = false;
                if (self.curSiteRule.enable == 0) {
                    debug("Stop as rule disable");
                    isPause = true;
                    return;
                }
                //若是再亂匹配就不緩存wedata，或者只在找完本地規則之後再考慮wedata的緩存
                if (self.curSiteRule.singleUrl) {
                    delete self.curSiteRule.pageElement;
                    self.smartRules = self.smartRules.filter(item => {return item && item.url != self.curSiteRule.url});
                    self.smartRules.unshift(self.curSiteRule);
                    if (self.smartRules.length > 100) {
                        self.smartRules.pop();
                    }
                    storage.setItem("smartRules", self.smartRules);
                } else if (self.curSiteRule && self.curSiteRule.url.length > 13) {
                    self.hpRules = self.hpRules.filter(item => {return item && item.url != self.curSiteRule.url});
                    self.hpRules.unshift(self.curSiteRule);
                    if (self.hpRules.length > 30) {
                        self.hpRules.pop();
                    }
                    storage.setItem("hpRules", self.hpRules);
                }
                let css = self.curSiteRule.css || rulesData.customCss;
                if (css && !/^inIframe:/.test(css)) {
                    _GM_addStyle(css);
                }
                if (typeof self.curSiteRule.openInNewTab !== 'undefined') {
                    openInNewTab = self.curSiteRule.openInNewTab ? 1 : 2;
                }
                let autoClick = self.curSiteRule.autoClick;
                if (autoClick) {
                    let autoClickBtn;
                    autoClickBtn = getElement(autoClick, document);
                    if (autoClickBtn) {
                        emuClick(autoClickBtn);
                    }
                }
                let code = self.curSiteRule.init;
                if (code) {
                    try {
                        ((typeof _unsafeWindow.pagetualInit == 'undefined') ? Function('doc','win','iframe','"use strict";' + code) : _unsafeWindow.pagetualInit)(null, null, null);
                    } catch(e) {
                        debug(e);
                    }
                }
                await self.getNextLink(document);
                self.refreshByClick();

                let pageElementCss = self.curSiteRule.pageElementCss || self.curSiteRule.pageElementStyle || rulesData.pageElementCss;
                if (pageElementCss && pageElementCss !== '0') {
                    self.getPageElement(document, _unsafeWindow);
                }
                callback();
                let initRun = typeof self.curSiteRule.initRun == 'undefined' ? rulesData.initRun : self.curSiteRule.initRun;
                if (initRun && initRun != false && self.nextLinkHref) nextPage();
            });
        }

        insertElement(ele) {
            if (!this.insert || !this.insert.parentNode) {
                this.getInsert();
            }
            if (this.insert) {
                this.addedElePool.push(ele);
                if (this.curSiteRule.insertPos == 2) {
                    this.insert.appendChild(ele);
                } else {
                    this.insert.parentNode.insertBefore(ele, this.insert);
                }
            }
        }

        async insertPage(doc, eles, url, callback, tried) {
            this.oldUrl = this.curUrl;
            let oldTitle = this.pageDoc.title;
            this.pageDoc = doc;
            this.curUrl = url;
            let nextLink = await this.getNextLink(doc);
            this.nextTitle = "";
            if (this.curSiteRule.pageBarText) {
                if (this.curSiteRule.pageBarText == 1 || this.curSiteRule.pageBarText == true) {
                    this.nextTitle = doc.title;
                } else {
                    try {
                        this.nextTitle = ((typeof _unsafeWindow.pagetualPageBarText == 'undefined') ? Function("doc",'"use strict";' + this.curSiteRule.pageBarText) : _unsafeWindow.pagetualPageBarText)(doc);
                    } catch(e) {
                        debug(e);
                    }
                }
            }
            if (curPage == 1 && !tried && !nextLink && this.curSiteRule.singleUrl && this.curSiteRule.pageElement && this.curSiteRule.action != 0) {
                this.curSiteRule.action = 1;
                this.curUrl = location.href;
                return false;
            }
            let curScroll = getBody(document).scrollTop || document.documentElement.scrollTop;
            if (callback) callback(eles);
            this.getInsert();
            var self = this, newEles = [];
            if (!eles || eles.length == 0 || !self.insert || !self.insert.parentNode) {
            } else {
                isLoading = true;
                await this.pageInit(doc, eles);
                [].forEach.call(eles, ele => {
                    let newEle = ele.cloneNode(true);
                    let oldCanvass = ele.querySelectorAll("canvas");
                    let newCanvass = newEle.querySelectorAll("canvas");
                    if (self.updateUrl) {
                        [].forEach.call(newEle.querySelectorAll("img"), img => {
                            if (img.getAttribute("src")) img.src = self.canonicalUri(img.getAttribute("src"));
                        });
                        [].forEach.call(newEle.querySelectorAll("a"), a => {
                            if (a.getAttribute("href")) a.href = self.canonicalUri(a.getAttribute("href"));
                        });
                    }
                    for (let i = 0; i < oldCanvass.length; i++) {
                        let oldCanvas = oldCanvass[i];
                        let newCanvas = newCanvass[i];
                        newCanvas.getContext('2d').drawImage(oldCanvas, 0, 0);
                    }
                    self.visibilityItems.push(newEle);
                    self.insertElement(newEle);
                    newEles.push(newEle);
                });
                getBody(document).scrollTop = curScroll;
                document.documentElement.scrollTop = curScroll;
            }
            this.pageAction(doc, newEles);
            let enableHistory = this.curSiteRule.history;
            let enableHistoryAfterInsert = false;
            if (enableHistory == 1) {
                enableHistory = true;
            } else if (enableHistory == 2) {
                enableHistory = true;
                enableHistoryAfterInsert = true;
            } else if (enableHistory == 0) {
                enableHistory = false;
            } else {
                enableHistory = rulesData.enableHistory;
                enableHistoryAfterInsert = rulesData.enableHistoryAfterInsert;
            }
            if (enableHistory) {
                this.historyUrl = enableHistoryAfterInsert ? this.curUrl : this.oldUrl;
                if(this.historyUrl != location.href) {
                    let isJs = /^(javascript|#)/.test(this.historyUrl.replace(location.href, ""));
                    if (!isJs) {
                        let historyTitle = enableHistoryAfterInsert ? doc.title : oldTitle;
                        _unsafeWindow.history.replaceState(undefined, historyTitle, this.historyUrl);
                        document.title = historyTitle;
                    }
                }
            }
            isLoading = false;
            return true;
        }
    }
    var ruleParser = new RuleParser();

    class SideController {
        static controller;
        constructor() {
            this.inited = false;
        }

        static getInstance() {
            if (!SideController.controller) {
                SideController.controller = new SideController();
            }
            return SideController.controller;
        }

        static setup() {
            if (ruleParser.curSiteRule.sideController === false) return;
            if (!rulesData.sideController && !ruleParser.curSiteRule.sideController) return;
            SideController.getInstance().addToStage();
        }

        init() {
            if (this.inited) return;
            this.inited = true;
            let self = this;
            this.cssText = `
             #pagetual-sideController {
                 position: fixed;
                 top: calc(50% - 83px);
                 left: calc(99% - 40px);
                 width: 40px;
                 border-radius: 20px;
                 box-shadow: rgb(0 0 0) 0px 0px 10px;
                 text-align: center;
                 background: #ffffffd0!important;
                 color: black!important;
                 user-select: none;
                 z-index: 2147483646!important;
                 padding: 0!important;
                 opacity: 0.5;
                 transition: opacity .5s ease, background .5s, box-shadow .5s;
             }
             #pagetual-sideController:hover {
                 opacity: 1;
             }
             #pagetual-sideController * {
                 font-weight: bold;
                 font-family: arial;
                 font-style: normal;
                 font-size: 20px!important;
                 line-height: normal;
                 float: none;
             }
             #pagetual-sideController.stop {
                 -webkit-filter: invert(100%);
                 filter: invert(100%);
             }
             .pagetual-sideController-btn {
                 padding: 5px 0;
                 cursor: pointer;
                 transition: transform .15s ease-in-out, opacity .3s ease;
             }
             .pagetual-sideController-btn:hover {
                 transform: scale(1.5);
                 color: red;
             }
             #pagetual-sideController.minSize {
                 box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px;
                 background: #00000000!important;
             }
             #pagetual-sideController.minSize .pagetual-sideController-btn {
                 opacity: 0;
             }
             #pagetual-sideController.minSize #pagetual-sideController-move > svg {
                 background: white;
             }
             #pagetual-sideController #pagetual-sideController-move > img,
             #pagetual-sideController #pagetual-sideController-move > span {
                 width: 35px;
                 height: 35px;
                 cursor: pointer;
             }
             #pagetual-sideController.minSize #pagetual-sideController-move > img,
             #pagetual-sideController.minSize #pagetual-sideController-move > span {
                 border-radius: 50px;
                 text-shadow: rgb(255 255 255) 0px 0px 10px;
             }
            `;
            this.styleEle = _GM_addStyle(this.cssText);
            let frame = document.createElement("div");
            frame.id = "pagetual-sideController";
            frame.innerHTML = createHTML(`
                <div id="pagetual-sideController-top" class="pagetual-sideController-btn">⊼</div>
                <div>
                  <div id="pagetual-sideController-pre" class="pagetual-sideController-btn">∧</div>
                  <div id="pagetual-sideController-move"><svg width="30" height="30" style="border-radius: 15px;display: initial;position: relative;cursor: pointer;margin: 0;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a"></path></svg></div>
                  <div id="pagetual-sideController-next" class="pagetual-sideController-btn">∨</div>
                </div>
                <div id="pagetual-sideController-bottom" class="pagetual-sideController-btn">⊻</div>
            `);
            let top = frame.querySelector("#pagetual-sideController-top");
            let pre = frame.querySelector("#pagetual-sideController-pre");
            let move = frame.querySelector("#pagetual-sideController-move");
            let next = frame.querySelector("#pagetual-sideController-next");
            let bottom = frame.querySelector("#pagetual-sideController-bottom");
            if (sideControllerIcon) move.innerHTML = sideControllerIcon;

            frame.addEventListener("dblclick", e => {
                e.preventDefault();
                e.stopPropagation();
            }, true);

            frame.addEventListener("mouseenter", e => {
                clearTimeout(self.hideTimer);
                frame.classList.remove("minSize");
            });

            frame.addEventListener("mouseleave", e => {
                clearTimeout(self.hideTimer);
                self.hideTimer = setTimeout(() => {
                    frame.classList.add("minSize");
                }, 2000);
            });

            pre.addEventListener("click", e => {
                let prePageBar = getPageBar().preBar;
                if (prePageBar) {
                    scrollToPageBar(prePageBar);
                } else {
                    let scrollTop = getBody(document).scrollTop || document.documentElement.scrollTop;
                    window.scrollTo({ top: scrollTop - (window.innerHeight || document.documentElement.clientHeight), behavior: 'smooth'});
                }
            }, true);

            next.addEventListener("click", e => {
                let pageBarObj = getPageBar();
                let nextPageBar = pageBarObj.nextBar;
                if (nextPageBar) {
                    scrollToPageBar(nextPageBar);
                } else {
                    if (pageBarObj.preBar) {
                        let scrollH = Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
                        window.scrollTo({ top: (scrollH || 9999999), behavior: 'smooth'});
                    } else {
                        let scrollTop = getBody(document).scrollTop || document.documentElement.scrollTop;
                        window.scrollTo({ top: scrollTop + (window.innerHeight || document.documentElement.clientHeight), behavior: 'smooth'});
                    }
                }
            }, true);

            top.addEventListener("click", e => {
                getBody(document).scrollTop=0;
                document.documentElement.scrollTop=0;
                e.preventDefault();
                e.stopPropagation();
            }, true);

            bottom.addEventListener("click", e => {
                changeStop(true);
                let scrollH = Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
                getBody(document).scrollTop = scrollH || 9999999;
                document.documentElement.scrollTop = scrollH || 9999999;
                e.preventDefault();
                e.stopPropagation();
            }, true);

            let initX, initY, moving = false;
            move.addEventListener("click", e => {
                if (!moving) {
                    changeStop(!isPause);
                }
            }, true);

            move.oncontextmenu = e => {
                e.preventDefault();
                Picker.getInstance().start();
            };

            let mouseMoveHandler = e => {
                if (moving) {
                    let windowHeight=window.innerHeight || document.documentElement.clientHeight;
                    let windowWidth=window.innerWidth || document.documentElement.clientWidth;
                    initX = (e.clientX - 10 + 40) / windowWidth * 100;
                    initY = (e.clientY - 83 + 83) / windowHeight * 100;
                    this.frame.style.top = `calc(${initY}% - 83px)`;
                    this.frame.style.left = `calc(${initX}% - 40px)`;
                } else if (Math.abs(e.clientX - initX) + Math.abs(e.clientY - initY) > 20) {
                    moving = true;
                }
            };
            let mouseUpHandler = e => {
                document.removeEventListener("mousemove", mouseMoveHandler, true);
                document.removeEventListener("mouseup", mouseUpHandler, true);
                if (moving) {
                    rulesData.sideControllerPos = {x: parseInt(initX), y: parseInt(initY)};
                    storage.setItem("rulesData", rulesData);
                }
            };

            move.addEventListener("mousedown", e => {
                initX = e.clientX;
                initY = e.clientY;
                moving = false;
                document.addEventListener("mousemove", mouseMoveHandler, true);
                document.addEventListener("mouseup", mouseUpHandler, true);
            }, true);

            this.frame = frame;
            if (rulesData.sideControllerPos) {
                this.frame.style.top = `calc(${rulesData.sideControllerPos.y}% - 83px)`;
                this.frame.style.left = `calc(${rulesData.sideControllerPos.x}% - 40px)`;
            }
        }

        addToStage() {
            this.init();
            if (!this.styleEle || !this.styleEle.parentNode) {
                this.styleEle = _GM_addStyle(this.cssText);
            }
            if (!isPause) {
                this.frame.classList.remove("stop");
            }
            if (this.frame.parentNode) return;
            getBody(document).appendChild(this.frame);
            clearTimeout(this.hideTimer);
            this.hideTimer = setTimeout(() => {
                this.frame.classList.add("minSize");
            }, 2000);
        }

        remove() {
            if (this.frame && this.frame.parentNode) this.frame.parentNode.removeChild(this.frame);
        }
    }

    class NextSwitch {
        static nextSwitch;
        constructor() {
            this.init();
        }

        static getInstance() {
            if (!NextSwitch.nextSwitch) {
                NextSwitch.nextSwitch = new NextSwitch();
            }
            return NextSwitch.nextSwitch;
        }

        init() {
            let self = this;
            this.cssText = `
             #pagetual-nextSwitch {
              position: fixed;
              top: 10px;
              left: calc(50% - 160px);
              background: aliceblue;
              padding: 10px;
              border-radius: 5px;
              text-align: center;
              opacity: 0.95;
              color: #161616;
              z-index: 2147483647;
              font-size: 16px;
              box-shadow: rgb(0 0 0) 0px 0px 10px;
             }
             #pagetual-nextSwitch>.title {
              margin: -5px 45px 10px 45px;
              font-size: 20px;
              font-weight: bold;
              border-bottom: 1px solid black;
              user-select: none;
              color: orangered;
             }
             #pagetual-nextSwitch>.group {
              display: flex;
              flex-direction: column;
             }
             #pagetual-nextSwitch>.group>span {
              color: #161616;
              cursor: pointer;
              margin: 3px;
              font-size: larger;
             }
             #pagetual-nextSwitch>.group>span:hover {
              color: red;
             }
             #pagetual-nextSwitch>.group>span.current {
              border: 2px dotted red;
              border-radius: 10px;
             }
             #pagetual-nextSwitch>.closeSwitch {
              position: absolute;
              top: 3px;
              right: 10px;
              background: none;
              border: none;
              vertical-align: top;
              transition: transform .15s ease-in-out;
              float: right;
              cursor: pointer;
             }
             #pagetual-nextSwitch svg {
              width: 30px;
              height: 30px;
              vertical-align: middle;
              fill: #161616;
              overflow: hidden;
             }
             #pagetual-nextSwitch button:hover {
              transform: scale(1.2);
             }
            `;
            this.styleEle = _GM_addStyle(this.cssText);
            let frame = document.createElement("div");
            frame.id = "pagetual-nextSwitch";
            frame.innerHTML = createHTML(`
                <div class="title">${i18n("nextSwitch")}</div>
                <button type="button" class="closeSwitch">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2754">
                    <path d="M512 128c212 0 384 172 384 384s-172 384-384 384-384-172-384-384 172-384 384-384m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m238.4 254.4l-45.6-45.6L512 467.2 318.4 273.6l-45.6 45.6L467.2 512 273.6 705.6l45.6 45.6L512 557.6l193.6 193.6 45.6-45.6L557.6 512l192.8-193.6z" p-id="2755">
                    </path>
                  </svg>
                </button>
                <div class="group"></div>
            `);
            let group = frame.querySelector(".group");
            let closeBtn = frame.querySelector(".closeSwitch");
            closeBtn.addEventListener("click", e => {
                self.close();
            }, true);
            this.frame = frame;
            let currentSpan;
            ruleParser.curSiteRule.nextLink.forEach((link, i) => {
                let span = document.createElement("span");
                let target = getElement(link, document);
                let index = "<b>" + (i + 1) + "</b>: ";
                if (target) {
                    let targetInner = target.innerText.trim();
                    span.innerHTML = index + (targetInner || link);
                } else {
                    span.innerHTML = index + "Not Found";
                }
                span.title = link;
                span.addEventListener("click", e => {
                    if (currentSpan) currentSpan.classList.remove("current");
                    span.classList.add("current");
                    currentSpan = span;
                    nextIndex = i;
                    storage.setItem("nextSwitch_" + location.host, nextIndex === 0 ? "" : nextIndex);
                    ruleParser.curUrl += "#pagetual";
                    ruleParser.oldUrl = ruleParser.curUrl;
                    autoLoadNum = -1;
                    if (!ruleParser.nextLinkHref) {
                        isLoading = false;
                    }
                    ruleParser.getNextLink(ruleParser.pageDoc || document);
                    self.close();
                }, true);
                if (i == nextIndex) {
                    span.classList.add("current");
                    currentSpan = span;
                }
                group.appendChild(span);
            });
        }

        start() {
            if (!this.styleEle || !this.styleEle.parentNode) {
                this.styleEle = _GM_addStyle(this.cssText);
            }
            document.documentElement.appendChild(this.frame);
        }

        close() {
            if (this.frame.parentNode) this.frame.parentNode.removeChild(this.frame);
        }
    }

    class Picker {
        static picker;
        constructor() {
            this.init();
        }

        static getInstance() {
            if (!Picker.picker) {
                Picker.picker = new Picker();
            }
            return Picker.picker;
        }

        init() {
            let self = this;
            this.signList = [];
            this.cssText = `
             body.pagetual-picker,
             body.pagetual-picker *:hover,
             body.pagetual-picker a:hover {
              cursor: crosshair !important;
             }
             #pagetual-picker {
              position: fixed;
              top: 10px;
              left: calc(50% - 178px);
              background: aliceblue;
              padding: 10px;
              border-radius: 5px;
              text-align: center;
              opacity: 0.95;
              color: #161616;
              z-index: 2147483646;
              font-size: 16px;
              box-shadow: rgb(0 0 0) 0px 0px 10px;
             }
             #pagetual-picker * {
              margin: 0;
              padding: 0;
              font-family: Times New Roman;
              overflow: initial;
             }
             #pagetual-picker>.title {
              margin: -5px 45px 10px 45px;
              font-size: 20px;
              font-weight: bold;
              cursor: pointer;
              border-bottom: 1px solid black;
              user-select: none;
              color: orangered;
              height: initial;
              width: initial;
              position: initial;
             }
             #pagetual-picker button {
              background: none;
              border: none;
              vertical-align: top;
              transition: transform .15s ease-in-out;
              float: right;
              cursor: pointer;
              overflow: hidden;
             }
             #pagetual-picker button:hover {
              transform: scale(1.2);
             }
             #pagetual-picker>.closePicker {
              position: absolute;
              top: 3px;
              right: 10px;
             }
             #pagetual-picker>.logoIcon {
              position: absolute;
              top: 3px;
              left: 10px;
             }
             #pagetual-picker>.logoIcon.showSign>svg>path {
              fill: gray;
             }
             #pagetual-picker textarea{
              display: inline-block;
              width: 290px;
              height: 20px;
              max-width: calc(65vw - 50px);
              min-height: unset;
              padding: 6px 12px;
              font-size: 16px;
              font-weight: 400;
              line-height: 1.5;
              color: #495057;
              background-color: #fff;
              background-clip: padding-box;
              border: 1px solid #ced4da;
              border-radius: 4px;
              transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              box-sizing: content-box;
              margin-right: 5px;
              resize: both;
              box-shadow: 0 1px 5px 1px #ddd;
             }
             #pagetual-picker textarea:focus {
              color: black;
              background-color: #fff;
              border-color: #80bdff;
              outline: 0;
              box-shadow: 0 0 0 3.2px rgb(0 123 255 / 25%);
             }
             #pagetual-picker [type=checkbox],
             #pagetual-picker [type=radio] {
              line-height: 20px;
              height: 25px;
              width: 25px;
              margin-left: 5px;
              vertical-align: middle;
              appearance: auto;
              display: inline-block;
              position: initial;
             }
             #pagetual-picker label {
              font-size: 18px;
              line-height: 25px;
              vertical-align: middle;
              display: inline-block;
              color: black;
              position: initial;
             }
             #pagetual-picker .bottom {
              text-align: left;
              margin: 10px 0;
              width: 100%;
             }
             #pagetual-picker .bottom>button {
              float: right;
             }
             #pagetual-picker svg {
              width: 30px;
              height: 30px;
              vertical-align: middle;
              fill: #161616;
              overflow: hidden;
             }
             #pagetual-picker svg * {
              pointer-events: none;
             }
             #pagetual-picker .allpath {
              font-size: 18px;
              margin: 10px auto;
              max-width: 330px;
              word-break: break-all;
              cursor: context-menu;
              overflow: hidden;
              max-height: 42px;
              -moz-transition:max-height 1s ease-in;
              -webkit-transition:max-height 1s ease-in;
              transition:max-height 1s ease-in;
              color: black;
             }
             #pagetual-picker .allpath:hover {
              max-height: calc(100vh - 130px);
              overflow: auto;
             }
             #pagetual-picker .allpath>span.path {
              cursor: pointer;
             }
             #pagetual-picker .allpath>span.path:hover {
              color: orangered;
             }
             #pagetual-picker .moreConfig {
              display: flex;
              justify-content: space-between;
              border-top: 1px solid;
              padding-top: 10px;
              width: 100%;
             }
             #pagetual-picker .command {
              width: 100%;
              color: black!important;
              text-align: center;
              font-size: large;
              margin-top: 10px;
             }
             #pagetual-picker .command:hover {
              color: orangered;
             }
             #pagetual-picker #showDetail {
              float: initial;
              margin-top: 10px;
             }
             #pagetual-picker #showDetail.showDetail {
              float: right;
             }
             #pagetual-picker #showDetail>svg {
              -moz-transition:transform 0.3s ease;
              -webkit-transition:transform 0.3s ease;
              transition:transform 0.3 ease;
             }
             #pagetual-picker #showDetail.showDetail>svg {
              transform: rotate(180deg);
             }
             #pagetual-picker .tempRule {
              margin-top: 10px;
              height: 300px;
             }
             #pagetual-picker #saveDetail {
              display: none;
              position: absolute;
              bottom: 10px;
              right: 8px;
             }
             #pagetual-picker .showDetail~#saveDetail {
              display: inline-block;
             }
             #pagetual-picker #saveDetail svg {
              width: 35px;
              height: 35px;
             }
            `;
            this.styleEle = _GM_addStyle(this.cssText);
            this.mainSignDiv = this.createSignDiv();
            this.allSignDiv = [];
            let frame = document.createElement("div");
            frame.id = "pagetual-picker";
            frame.innerHTML = createHTML(`
                <button title="Pagetual" type="button" class="logoIcon">
                  <svg width="30" height="30" class="upSvg pagetual" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a"></path></svg>
                </button>
                <div class="title">${i18n("picker")}</div>
                <button title="${i18n("closePicker")}" type="button" class="closePicker">
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 128c212 0 384 172 384 384s-172 384-384 384-384-172-384-384 172-384 384-384m0-64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m238.4 254.4l-45.6-45.6L512 467.2 318.4 273.6l-45.6 45.6L467.2 512 273.6 705.6l45.6 45.6L512 557.6l193.6 193.6 45.6-45.6L557.6 512l192.8-193.6z" fill="#604b4a"></path></svg>
                </button>
                <div class="allpath" title="${i18n("switchSelector")}"></div>
                <div>
                  <textarea class="selector" spellcheck="false" name="selector" placeholder="${i18n("pickerPlaceholder")}"></textarea>
                  <button id="check" title="${i18n("pickerCheck")}" type="button">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0-85.333333c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667zM696.149333 298.666667L768 349.866667 471.594667 725.333333 256 571.733333l53.888-68.266666 143.744 102.4z" fill="#604b4a"></path></svg>
                  </button>
                </div>
                <div class="bottom">
                  <input name="xpath" id="checkbox_id" type="checkbox" />
                  <label for="checkbox_id">XPath</label>
                  <button id="edit" title="${i18n("gotoEdit")}" type="button">
                    <svg viewBox="0 0 1024 1024" style="color: orangered;fill: orangered;" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M775.84 392.768l-155.2-172.352L160.768 643.264l-38.368 187.936 190.56-12.832zM929.952 229.952l-131.2-150.944-0.288-0.32a16 16 0 0 0-22.592-0.96l-131.168 120.576 155.168 172.352 128.832-118.464a15.936 15.936 0 0 0 1.248-22.24zM96 896h832v64H96z">
                      </path>
                    </svg>
                  </button>
                </div>
                <div class="moreConfig">
                  <div title="${i18n('forceStateIframe')}">
                    <input name="forceState" id="forceStateIframe" type="radio" />
                    <label for="forceStateIframe">${i18n('iframe')}</label>
                  </div>
                  <div title="${i18n('forceStateDynamic')}">
                    <input name="forceState" id="forceStateDynamic" type="radio" />
                    <label for="forceStateDynamic">${i18n('dynamic')}</label>
                  </div>
                  <div title="${i18n('forceStateDisable')}">
                    <input name="forceState" id="forceStateDisable" type="radio" />
                    <label for="forceStateDisable">${i18n('disable')}</label>
                  </div>
                </div>
                <button id="nextSwitch" class="command" title="${i18n("nextSwitch")}" type="button">${i18n("nextSwitch")}</button>
                <button id="loadNow" class="command" title="${i18n("loadNow")}" type="button">${i18n("loadNow")}</button>
                <div>
                  <textarea style="display: none;" class="tempRule" spellcheck="false" placeholder="{Rule object}" title="Rule for current site"></textarea>
                  <button id="showDetail" title="" type="button">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.1 63.7c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448z m281.2 374.5L535.6 694.9c-12.5 12.5-32.8 12.5-45.3 0l-255.8-256c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l210.7 210.7c12.5 12.5 32.8 12.5 45.3 0l211.4-211.4c12.5-12.5 32.8-12.5 45.3 0 12.3 12.5 12.3 32.8-0.2 45.3z" fill="orangered"></path></svg>
                  </button>
                  <button id="saveDetail" title="" type="button">
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M704 128H192c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h640c35.2 0 64-28.8 64-64V320L704 128zM256 256h320v128H256V256z m256 512c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z" fill="orangered"></path></svg>
                  </button>
                </div>
            `);
            let forceStateIframe = frame.querySelector("#forceStateIframe");//forceState 1 禁用 2 强嵌 3 动态
            let forceStateDynamic = frame.querySelector("#forceStateDynamic");
            let forceStateDisable = frame.querySelector("#forceStateDisable");
            let clickRadio = e => {
                let radio = e.currentTarget.querySelector('input');
                if (radio.checked) {
                    forceState = "";
                } else {
                    switch (radio.id) {
                        case "forceStateIframe":
                            forceState = 2;
                            break;
                        case "forceStateDynamic":
                            forceState = 3;
                            break;
                        case "forceStateDisable":
                            forceState = 1;
                            break;
                        default:
                            return;
                    }
                }
                storage.setItem("forceState_"+location.host, forceState);
                self.close();
                location.reload();
            };
            forceStateIframe.parentNode.addEventListener("mousedown", clickRadio);
            forceStateDynamic.parentNode.addEventListener("mousedown", clickRadio);
            forceStateDisable.parentNode.addEventListener("mousedown", clickRadio);
            if (forceState == 1) forceStateDisable.checked = true;
            else if (forceState == 2) forceStateIframe.checked = true;
            else if (forceState == 3) forceStateDynamic.checked = true;
            let closeBtn = frame.querySelector(".closePicker");
            let logoBtn = frame.querySelector(".logoIcon");
            let title = frame.querySelector(".title");
            let allpath = frame.querySelector(".allpath");
            let selectorInput = frame.querySelector(".selector");
            let xpath = frame.querySelector("#checkbox_id");
            let checkBtn = frame.querySelector("#check");
            let editBtn = frame.querySelector("#edit");
            let nextSwitch = frame.querySelector("#nextSwitch");
            let loadNow = frame.querySelector("#loadNow");
            let tempRule = frame.querySelector(".tempRule");
            let showDetailBtn = frame.querySelector("#showDetail");
            let saveDetailBtn = frame.querySelector("#saveDetail");
            showDetailBtn.addEventListener("click", e => {
                if (tempRule.style.display == "none") {
                    tempRule.style.display = "";
                    showDetailBtn.classList.add("showDetail");
                } else {
                    tempRule.style.display = "none";
                    showDetailBtn.classList.remove("showDetail");
                }
            }, true);
            saveDetailBtn.addEventListener("click", e => {
                let editTemp = self.getTempRule();
                if(!ruleParser.customRules) {
                    ruleParser.customRules = [];
                }
                for (let i in ruleParser.customRules) {
                    if (ruleParser.customRules[i].url == editTemp.url) {
                        ruleParser.customRules.splice(i, 1);
                        break;
                    }
                }
                if (tempRule.value) {
                    ruleParser.customRules.unshift(editTemp);
                }
                storage.setItem("customRules", ruleParser.customRules);
                if (ruleParser.hpRules && ruleParser.curSiteRule && !ruleParser.curSiteRule.singleUrl) {
                    ruleParser.hpRules = ruleParser.hpRules.filter(item => {return item && item.url != ruleParser.curSiteRule.url});
                    storage.setItem("hpRules", ruleParser.hpRules);
                }
                if (window.confirm(i18n("reloadPage"))) {
                    setTimeout(() => {location.reload()}, 100);
                }
            }, true);
            nextSwitch.addEventListener("click", e => {
                self.close();
                NextSwitch.getInstance().start();
            }, true);
            loadNow.addEventListener("click", e => {
                self.close();
                let loadNum=window.prompt(i18n("loadConfirm"), "1");
                if(loadNum==="" || loadNum===null)return;
                autoLoadNum=Math.abs(parseInt(loadNum));
                nextPage();
            }, true);
            closeBtn.addEventListener("click", e => {
                self.close();
            }, true);
            this.showSign = true;
            logoBtn.addEventListener("click", e => {
                logoBtn.classList.toggle("showSign");
                self.showSign = !self.showSign;
                getBody(document).classList.toggle("pagetual-picker");
            }, true);
            let moving = false;
            let initX = 0, initY = 0, initPos = {x: 0, y: 0};
            let moveHanlder = e => {
                if (moving) {
                    frame.style.left = e.clientX - initX + "px";
                    frame.style.top = e.clientY - initY + "px";
                    e.stopPropagation();
                    e.preventDefault();
                } else if(Math.abs(e.clientX - initPos.x) + Math.abs(e.clientY - initPos.y) > 20) {
                    moving = true;
                }
            };
            let upHanlder = e => {
                if (moving) {
                    moving = false;
                } else {
                    _GM_openInTab(configPage[0], {active: true});
                }
                document.removeEventListener("mousemove", moveHanlder, true);
                title.removeEventListener("mouseup", upHanlder, true);
                e.stopPropagation();
                e.preventDefault();
            };
            title.addEventListener("mousedown", e => {
                initPos = {x: e.clientX, y: e.clientY};
                initX = e.clientX - parseInt(getComputedStyle(frame).left);
                initY = e.clientY - parseInt(getComputedStyle(frame).top);
                document.addEventListener("mousemove", moveHanlder, true);
                title.addEventListener("mouseup", upHanlder, true);
            });
            frame.addEventListener("mouseenter", e => {
                if (!self.showSign || moving) return;
                if (self.mainSignDiv.parentNode) self.mainSignDiv.parentNode.removeChild(self.mainSignDiv);
                self.checkInputSelector();
            });
            frame.addEventListener("mouseleave", e => {
                if (!self.showSign) {
                    if (self.mainSignDiv.parentNode) self.mainSignDiv.parentNode.removeChild(self.mainSignDiv);
                    self.clearSigns();
                    return;
                }
                if (moving) return;
                getBody(document).appendChild(self.mainSignDiv);
                self.clearSigns();
            });
            checkBtn.addEventListener("click", e => {
                self.checkInputSelector();
                if (this.selectorInput.value) _GM_setClipboard(this.selectorInput.value);
                showTips(i18n("copied"));
            });
            xpath.addEventListener("click", e => {
                if (!selectorInput.value) {
                    self.setSelectorDiv("");
                    return;
                }
                let element = getElement(selectorInput.value, document);
                let selector = self.getSelectorFromEle(element);
                self.setSelectorDiv(selector);
                selectorInput.value = selector;
            });
            editBtn.addEventListener("click", e => {
                rulesData.editTemp = self.getTempRule();
                storage.setItem("rulesData", rulesData);
                _GM_openInTab(configPage[0], {active: true});
            });
            editBtn.oncontextmenu = e => {
                e.preventDefault();
                _GM_openInTab(configPage[0], {active: true});
            };
            this.frame = frame;
            this.xpath = xpath;
            this.allpath = allpath;
            this.selectorInput = selectorInput;
            this.nextSwitch = nextSwitch;
            this.loadNow = loadNow;
            this.tempRule = tempRule;
            this.logoBtn = logoBtn;
            this.moveHandler = e => {
                if (!self.showSign || e.target === document) return;
                self.adjustSignDiv(self.mainSignDiv, self.getTarget(e.target));
            };
            this.clickHandler = e => {
                if (!self.showSign) return;
                if (self.inPicker) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                let target = self.getTarget(e.target);
                let selector = self.getSelectorFromEle(target);
                selectorInput.value = selector;
                self.setSelectorDiv(selector);
            };
        }

        getTempRule() {
            if (this.tempRule.value) {
                try {
                    this.editTemp = JSON.parse(this.tempRule.value);
                } catch (e) {
                    this.editTemp = null;
                }
            }
            if (!this.editTemp) {
                if (ruleParser.curSiteRule.url && !ruleParser.curSiteRule.singleUrl) {
                    this.editTemp = ruleParser.curSiteRule;
                } else {
                    this.editTemp = {
                        name: document.title,
                        url: "^" + (location.origin + location.pathname).replace(/[^\/]*$/, "").replace(/^https?/, "https?").replace(/\./g, "\\.")
                    };
                }
                delete this.editTemp.from;
                delete this.editTemp.type;
                delete this.editTemp.updatedAt;
            }
            let selectorInput = this.frame.querySelector(".selector");
            if (selectorInput.value && this.tempRule.style.display == "none") {
                this.editTemp.pageElement = selectorInput.value;
            }
            return this.editTemp;
        }

        getTarget(ele) {
            while (ele.parentNode && (ele.offsetWidth === 0 || ele.offsetHeight === 0)) {
                ele = ele.parentNode;
            }
            return ele;
        }

        close() {
            this.clearSigns();
            if (this.frame.parentNode) this.frame.parentNode.removeChild(this.frame);
            if (this.mainSignDiv.parentNode) this.mainSignDiv.parentNode.removeChild(this.mainSignDiv);
            getBody(document).classList.remove("pagetual-picker");
            getBody(document).removeEventListener("mousemove", this.moveHandler, true);
            getBody(document).removeEventListener("click", this.clickHandler, true);
            this.inPicker = false;
        }

        setImportant(ele, prop, value) {
            ele.style.setProperty(prop, value, "important");
        }

        createSignDiv() {
            let signDiv = document.createElement("div");
            this.setImportant(signDiv, "position", "absolute");
            this.setImportant(signDiv, "pointer-events", "none");
            this.setImportant(signDiv, "z-index", "2147483646");
            this.setImportant(signDiv, "background", "rgba(120, 170, 210, 0.6)");
            this.setImportant(signDiv, "transition", "all 0.15s ease-out");
            this.setImportant(signDiv, "box-shadow", "rgb(0 0 0) 0px 0px 3px 0px");
            return signDiv;
        }

        adjustSignDiv(div, target) {
            let rect = target.getBoundingClientRect();
            this.setImportant(div, "width", rect.width + "px");
            this.setImportant(div, "height", rect.height + "px");
            this.setImportant(div, "left", rect.left + window.scrollX + "px");
            this.setImportant(div, "top", rect.top + window.scrollY + "px");
        }

        getSelectorFromEle(ele) {
            return this.xpath.checked ? createXPathFromElement(ele) : geneSelector(ele, true);
        }

        fillTempRuleTextarea() {
            if (this.tempRule.style.display == "none") this.tempRule.value = JSON.stringify(this.getTempRule(), null, 4);
        }

        setSelectorDiv(selector) {
            this.fillTempRuleTextarea();
            let self = this;
            this.allpath.innerHTML = createHTML("");
            if (!selector) return;
            if (this.xpath.checked) {
                let span = document.createElement("span");
                span.innerText = selector;
                span.addEventListener("click", e => {
                    self.selectorInput.value = selector;
                    self.checkInputSelector();
                }, true);
                this.allpath.appendChild(span);
            } else {
                selector.split(">").forEach((item, index) => self.geneSelectorItem(item, index));
            }
        }

        geneSelectorItem(item, index) {
            let self = this;
            item = item.trim();
            if (!item) return;
            if (index !== 0) {
                let span = document.createElement("span");
                span.innerText = " > ";
                this.allpath.appendChild(span);
            }
            let span = document.createElement("span");
            span.className = "path";
            span.innerText = item;
            span.addEventListener("click", e => {
                let selector = "";
                let target = e.target;
                while (target) {
                    selector = target.innerText + selector;
                    target = target.previousElementSibling;
                }
                self.selectorInput.value = selector;
                self.checkInputSelector();
            }, true);
            this.allpath.appendChild(span);
        }

        checkInputSelector() {
            let self = this;
            this.clearSigns();
            if (!this.selectorInput.value) return;
            let eles = getAllElements(this.selectorInput.value, document);
            if (eles && eles.length > 0) {
                eles.forEach(ele => {
                    let sign = self.createSignDiv();
                    getBody(document).appendChild(sign);
                    self.adjustSignDiv(sign, ele);
                    self.signList.push(sign);
                });
                this.fillTempRuleTextarea();
            }
        }

        clearSigns() {
            this.signList.forEach(sign => {
                if (sign.parentNode) sign.parentNode.removeChild(sign);
            });
            this.signList = [];
        }

        start() {
            if (this.inPicker) return;
            this.inPicker = true;
            if (!this.styleEle || !this.styleEle.parentNode) {
                this.styleEle = _GM_addStyle(this.cssText);
            }
            document.documentElement.appendChild(this.frame);
            getBody(document).appendChild(this.mainSignDiv);
            getBody(document).classList.add("pagetual-picker");

            this.logoBtn.classList.remove("showSign");
            this.showSign = true;

            getBody(document).addEventListener("mousemove", this.moveHandler, true);
            getBody(document).addEventListener("click", this.clickHandler, true);
            this.xpath.checked = isXPath(ruleParser.curSiteRule.pageElement);

            this.loadNow.style.display = ruleParser.nextLinkHref ? "block" : "none";
            if (ruleParser.curSiteRule.nextLink && Array && Array.isArray && Array.isArray(ruleParser.curSiteRule.nextLink)) {
                this.nextSwitch.style.display = "block";
            } else {
                this.nextSwitch.style.display = "none";
            }

            let pageElementSel = ruleParser.curSiteRule.pageElement || "";
            if (Array && Array.isArray && Array.isArray(pageElementSel)) {
                pageElementSel = pageElementSel[nextIndex < pageElementSel.length ? nextIndex : 0];
            }
            this.setSelectorDiv(pageElementSel);
        }
    }

    function createEdit() {
        var options = {
            mode: 'code',
            modes: ['code', 'tree'],
            templates: [
                {
                    text: 'New site',
                    title: 'Insert a new site',
                    className: 'jsoneditor-type-object',
                    field: 'SiteTemplate',
                    value: {
                        'name': 'Site name',
                        'url': 'Site url'
                    }
                }
            ],
            schema: {
                "title": "Sites data",
                "description": "Object containing site config",
                "type": "array",
                "items": {
                    "type": 'object',
                    "properties": {
                        "name": {
                            "title": "Site Name",
                            "description": "The site's name.",
                            "examples": [
                                "Google"
                            ],
                            "type": "string"
                        },
                        "url": {
                            "title": "Site Url",
                            "description": "The Regexp of site's url.",
                            "examples": [
                                "^https:\/\/yande\\.re\/"
                            ],
                            "type": "string"
                        }
                    },
                    "required": ["name", "url"]
                }
            }
        };
        var container = document.getElementById("jsoneditor");
        container.style.height = '800px';
        container.innerHTML = "";
        var editor = new JSONEditor(container, options);
        editor.set(ruleParser.customRules);
        document.querySelector("#saveBtn").onclick = e => {
            try {
                storage.setItem("hpRules", []);
                storage.setItem("smartRules", []);
                let customRules = editor.get();
                if (!customRules) {
                    storage.setItem("customRules", "");
                } else {
                    if (Array && Array.isArray && !Array.isArray(customRules)) {
                        showTips(i18n("errorRulesMustBeArray"));
                        return;
                    }
                    debug(customRules);
                    storage.setItem("customRules", customRules);
                }
            } catch(e) {
                debug(e);
                showTips(i18n("errorJson"));
                return;
            }
            showTips(i18n("editSuccess"));
        };
    }

    function initConfig() {
        listenUrl();
        let href = location.href.slice(0, 250);
        try {
            if (_unsafeWindow.initedPagetual) {
                if (ruleImportUrlReg.test(href)) {
                    showTips(i18n('duplicate'));
                }
                return true;
            }
            _unsafeWindow.initedPagetual = true;
        } catch(e) {showTips(e)}
        _GM_registerMenuCommand(i18n(forceState == 1 ? "enable" : "disableSite"), () => {
            forceState = (forceState == 1 ? 0 : 1);
            storage.setItem("forceState_" + location.host, forceState);
            showTips(i18n(forceState == 1 ? "disableSiteTips" : "enableSiteTips"));
            if (!ruleParser.curSiteRule.url) location.reload();
        });
        _GM_registerMenuCommand(i18n("update"), () => {
            showTips(i18n("beginUpdate"));
            updateRules(() => {
                showTips(i18n("updateSucc"));
                location.reload();
            },(rule, err) => {
                showTips(`Update ${rule.url} rules fail!`);
                debug(err);
            });
        });
        if (guidePage.test(href)) {
            if (typeof JSONEditor !== 'undefined') {
                createEdit();
            } else {
                window.onload = e => {
                    createEdit();
                }
            }
            return true;
        }
        if (href.indexOf("PagetualGuide") != -1) return true;
        if (location.hostname === "pagetual.hoothin.com") return true;

        var configCon, insertPos;
        var noRules = !rulesData.urls || rulesData.urls.length === 0;

        let inConfig = false;
        for (let i = 0; i < configPage.length; i++) {
            if (configPage[i] == location.href) {
                inConfig = true;
                break;
            }
        }
        if (ruleImportUrlReg.test(href) || inConfig) {
            let importing = false;
            if (noRules) {
                setTimeout(() => {
                    if (!importing) showTips(i18n("firstAlert"));
                }, 3000);
                setTimeout(() => {
                    if (!importing) showTips(i18n("firstAlert"));
                }, 6000);
                showTips(i18n("firstAlert"));
            }
            let defaultOption = document.querySelector('#discussion_rating_4');
            if (defaultOption) defaultOption.checked = true;
            let createImportBtn = (pre) => {
                let importBtn = document.createElement("button");
                importBtn.id = "pagetualImport";
                importBtn.innerText = i18n("import");
                importBtn.style.marginTop = "100px";
                importBtn.style.float = "right";
                importBtn.style.position = "relative";
                importBtn.style.display = "block";
                importBtn.style.fontSize = "20px";
                importBtn.addEventListener("click", e => {
                    let parentNode = importBtn.parentNode;
                    if (!parentNode) return;
                    parentNode.removeChild(importBtn);
                    try {
                        let rules = parentNode.innerText.trim();
                        let isContent = /['"]name['"]/i.test(rules);
                        if (isContent) {
                            let ruleList = JSON.parse(`[${rules}]`);
                            for (let i in ruleList) {
                                let hasRule = false;
                                let r = ruleList[i];
                                for (let j in ruleParser.customRules) {
                                    if (ruleParser.customRules[j].name == r.name) {
                                        ruleParser.customRules[j] = r;
                                        hasRule = true;
                                        break;
                                    }
                                }
                                if (!hasRule) ruleParser.customRules.push(r);
                                ruleParser.hpRules.unshift(r);
                            }
                            storage.setItem("customRules", ruleParser.customRules);
                            storage.setItem("hpRules", ruleParser.hpRules);
                            storage.setItem("smartRules", []);
                            showTips(i18n("importSucc"));
                        } else {
                            rules = rules.split("\n");
                            let diff = false;
                            for (let c = 0; c < rules.length; c++) {
                                let urlArr = rules[c].split("|"), url, type = 1;
                                if (urlArr.length == 1) {
                                    url = urlArr[0].trim();
                                    if (!/^http/.test(url)) {
                                        showTips(i18n("errorWrongUrl"));
                                        return;
                                    }
                                } else if (urlArr.length == 2) {
                                    type = urlArr[0].trim();
                                    url = urlArr[1].trim();
                                    if (!/^http/.test(url)) {
                                        showTips(i18n("errorWrongUrl"));
                                        return;
                                    }
                                } else {
                                    break;
                                }
                                let maxId = 1, hasUrl = false;
                                if (!rulesData.urls) {
                                    rulesData.urls = [];
                                    maxId = 1;
                                } else {
                                    rulesData.urls.forEach(u => {
                                        if (maxId < u.id) {
                                            maxId = u.id;
                                        }
                                        if (u.url == url) {
                                            hasUrl = true;
                                        }
                                    });
                                    if (hasUrl) break;
                                }
                                diff = true;
                                if (!rulesData.sort) rulesData.sort = [1];
                                rulesData.urls.push({id: maxId + 1, url: url, type: type});
                                rulesData.sort.unshift(maxId + 1);
                            }
                            if (!diff) {
                                showTips(i18n("errorAlreadyExists"));
                                return;
                            }
                            storage.setItem("rulesData", rulesData);

                            if (rulesData.urls) ruleUrls = ruleUrls.concat(rulesData.urls);
                            if (rulesData.sort) {
                                let urls = [];
                                rulesData.sort.forEach(id => {
                                    for (let s = 0; s < ruleUrls.length; s++) {
                                        if (id == ruleUrls[s].id) {
                                            urls.push(ruleUrls[s]);
                                            break;
                                        }
                                    }
                                });
                                ruleUrls = urls;
                            }
                            showTips(i18n("beginUpdate"));
                            updateRules(() => {
                                showTips(i18n("updateSucc"));
                                location.reload();
                            }, (rule, err) => {
                                showTips(`Update ${rule.url} rules fail!`);
                                debug(err);
                            });
                            importing = true;
                        }
                    } catch (e) {
                        _GM_notification(e.toString());
                    }
                });
                if (pre) {
                    let clientHeight = 35 - pre.clientHeight;
                    if (clientHeight > -20) clientHeight = -20;
                    importBtn.style.marginTop = `${clientHeight}px`;
                    pre.appendChild(importBtn);
                }
                return importBtn;
            };
            [].forEach.call(document.querySelectorAll('pre[name=pagetual],pre[name=user-content-pagetual]'), pre => {
                let importBtn = createImportBtn(pre);
            });
            document.addEventListener("mouseover", e => {
                if (e.target.tagName.toUpperCase() === "PRE") {
                    let nameAttr = e.target.getAttribute("name");
                    if (nameAttr == "pagetual" || nameAttr == "user-content-pagetual") {
                        if (e.target.querySelector('#pagetualImport')) return;
                        let importBtn = createImportBtn(e.target);
                    }
                }
            });

            if (inConfig) {
                if (_GM_info.script && _GM_info.script.version && _GM_info.script.version !== '1.0.0') {
                    let versionEle = document.querySelector('.markdown-body>h1[id],article>h1');
                    let latestVer = versionEle.innerText.match(/\d[\d\.]+/)[0];
                    if (latestVer != _GM_info.script.version) {
                        showTips(i18n('outOfDate'));
                    }
                }
                _GM_addStyle(`
                 p>span:nth-child(1),p>span:nth-child(2),p>span:nth-child(3){
                  cursor: pointer;
                  user-select: none;
                 }
                 p>span:nth-child(1):hover,p>span:nth-child(2):hover,p>span:nth-child(3):hover{
                  color:red;
                 }
                 .updateDate{
                  cursor: pointer;
                  user-select: none;
                 }
                 .updateDate:hover{
                  color:red;
                 }
                 input[type=number]::-webkit-inner-spin-button,
                 input[type=number]::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                 }
                 input[type=number] {
                  -moz-appearance:textfield;
                 }
                 #readme>.is-stuck {
                  position: static!important;
                 }
                `);
                document.querySelector("[name='user-content-click2import'],[name='click2import']").innerText = i18n("click2ImportRule")
                configCon = document.querySelector(".markdown-body");
                insertPos = configCon.querySelector("hr");

                if (!noRules) {
                    document.querySelector("pre[name='user-content-pagetual'],pre[name='pagetual']").style.display = "none";
                    document.querySelector("p[name='user-content-click2import'],p[name='click2import']").style.display = "none";
                }
            } else return true;
        } else return false;
        class Rulebar {
            init(ruleUrl) {
                this.ruleUrl = ruleUrl;
                this.item = document.createElement("p");
                this.item.dataset.id = this.ruleUrl.id;
                let url = document.createElement("span");
                url.innerHTML = ruleUrl.url;
                let up = document.createElement("span");
                up.innerHTML = "↑ ";
                up.title = i18n("sortTitle");
                let down = document.createElement("span");
                down.innerHTML = "↓ ";
                down.title = i18n("sortTitle");
                let del = document.createElement("span");
                del.innerHTML = "× ";
                up.onclick = e => {
                    this.moveUp();
                };
                down.onclick = e => {
                    this.moveDown();
                };
                del.onclick = e => {
                    this.del();
                };
                this.item.appendChild(up);
                this.item.appendChild(down);
                this.item.appendChild(del);
                this.item.appendChild(url);
                configCon.insertBefore(this.item, insertPos);
            }
            saveSort() {
                let sort = [];
                [].forEach.call(this.item.parentNode.querySelectorAll("p[data-id]"), i => {
                    sort.push(i.dataset.id);
                });
                rulesData.sort = sort;
                let urls = [];
                sort.forEach(id => {
                    for (let s = 0; s < ruleUrls.length; s++) {
                        if (id == ruleUrls[s].id) {
                            urls.push(ruleUrls[s]);
                            break;
                        }
                    }
                });
                ruleUrls = urls;
                storage.setItem("rulesData", rulesData);
            }
            moveUp() {
                let preE = this.item.previousElementSibling;
                if (preE.tagName.toUpperCase() == "P" && preE.children.length > 1) {
                    this.item.parentNode.insertBefore(this.item, preE);
                    this.saveSort();
                }
            }
            moveDown() {
                let nextE = this.item.nextElementSibling;
                if (nextE.tagName.toUpperCase() == "P" && nextE.children.length > 1) {
                    this.item.parentNode.insertBefore(nextE, this.item);
                    this.saveSort();
                }
            }
            del() {
                if (this.ruleUrl.id < 2) {
                    showTips(i18n("cantDel"));
                } else if (window.confirm(i18n("confirmDel"))) {
                    for (let u = 0; u < rulesData.urls.length; u++) {
                        if (this.ruleUrl.id == rulesData.urls[u].id) {
                            rulesData.urls.splice(u, 1);
                            break;
                        }
                    }
                    for (let u = 0; u < ruleUrls.length; u++) {
                        if (this.ruleUrl.id == ruleUrls[u].id) {
                            ruleUrls.splice(u, 1);
                            break;
                        }
                    }
                    for (let u = 0; u < rulesData.sort.length; u++) {
                        if (this.ruleUrl.id == rulesData.sort[u]) {
                            rulesData.sort.splice(u, 1);
                            break;
                        }
                    }
                    storage.setItem("rulesData", rulesData);
                    ruleParser.rules = ruleParser.rules.filter(item => {return item.from != this.ruleUrl.id});
                    storage.setItem("rules", ruleParser.rules);
                    this.item.parentNode.removeChild(this.item);
                    //location.reload();
                }
            }
        }
        let updateP = document.createElement("p"), i = 0;
        let now = new Date().getTime(), inUpdate = false;


        let pastDate = (new Date(updateDate)).toString(), passStr;
        let passTime = (now - updateDate) / 1000;
        if (isNaN(passTime)) {
            passStr = i18n("firstUpdate");
        } else if (passTime < 60) {
            passStr = i18n("passSec", parseInt(passTime)) + " 👆 " + i18n("click2update");
        } else if (passTime < 60 * 60) {
            passStr = i18n("passMin", parseInt(passTime / 60)) + " 👆 " + i18n("click2update");
        } else if (passTime < 60 * 60 * 24) {
            passStr = i18n("passHour", parseInt(passTime / 3600)) + " 👆 " + i18n("click2update");
        } else {
            passStr = i18n("passDay", parseInt(passTime / 86400)) + " 👆 " + i18n("click2update");
        }


        updateP.className = "updateDate";
        updateP.innerHTML = passStr;
        updateP.title = i18n("update") + " - " + pastDate;
        updateP.onclick = e => {
            ruleParser.rules = [];
            showTips(i18n("beginUpdate"));
            updateRules(() => {
                showTips(i18n("updateSucc"));
                updateP.innerHTML = i18n("passSec", 0);
                updateP.title = i18n("update");
            }, (rule, err) => {
                showTips(`Update ${rule.url} rules fail!`);
                debug(err);
            });
        };
        configCon.insertBefore(updateP, insertPos);
        if (ruleUrls) {
            ruleUrls.forEach(ruleUrl => {
                var rulebar = new Rulebar();
                rulebar.init(ruleUrl);
            });
        }
        let customUrlsTitle = document.createElement("h2");
        customUrlsTitle.innerHTML = i18n("customUrls");
        configCon.insertBefore(customUrlsTitle, insertPos);
        let customUrlsInput = document.createElement("textarea");
        customUrlsInput.style.width = "100%";
        customUrlsInput.placeholder = "http://wedata.net/databases/AutoPagerize/items_all.json";
        customUrlsInput.spellcheck = false;
        configCon.insertBefore(customUrlsInput, insertPos);

        let btns = document.createElement("div");
        btns.style.display = "flex";
        configCon.insertBefore(btns, insertPos);
        let upBtnImg = document.createElement("div");
        upBtnImg.style.width = "33%";
        let upBtnImgTitle = document.createElement("h2");
        upBtnImgTitle.style.whiteSpace = "nowrap";
        upBtnImgTitle.style.overflow = "auto";
        upBtnImgTitle.innerHTML = i18n("upBtnImg");
        upBtnImg.appendChild(upBtnImgTitle);
        let upBtnImgInput = document.createElement("input");
        upBtnImgInput.style.width = "100%";
        upBtnImgInput.placeholder = "data:image/png;base64,UpBtn";
        upBtnImgInput.value = rulesData.upBtnImg || '';
        upBtnImgInput.spellcheck = false;
        upBtnImg.appendChild(upBtnImgInput);
        btns.appendChild(upBtnImg);

        let downBtnImg = document.createElement("div");
        downBtnImg.style.width = "33%";
        let downBtnImgTitle = document.createElement("h2");
        downBtnImgTitle.style.whiteSpace = "nowrap";
        downBtnImgTitle.style.overflow = "auto";
        downBtnImgTitle.innerHTML = i18n("downBtnImg");
        downBtnImg.appendChild(downBtnImgTitle);
        let downBtnImgInput = document.createElement("input");
        downBtnImgInput.style.width = "100%";
        downBtnImgInput.placeholder = "data:image/png;base64,DownBtn";
        downBtnImgInput.value = rulesData.downBtnImg || '';
        downBtnImgInput.spellcheck = false;
        downBtnImg.appendChild(downBtnImgInput);
        btns.appendChild(downBtnImg);

        let sideControllerIconDiv = document.createElement("div");
        sideControllerIconDiv.style.width = "33%";
        let sideControllerIconTitle = document.createElement("h2");
        sideControllerIconTitle.style.whiteSpace = "nowrap";
        sideControllerIconTitle.style.overflow = "auto";
        sideControllerIconTitle.innerHTML = i18n("sideControllerIcon");
        sideControllerIconDiv.appendChild(sideControllerIconTitle);
        let sideControllerIconInput = document.createElement("input");
        sideControllerIconInput.style.width = "100%";
        sideControllerIconInput.placeholder = "⚪";
        sideControllerIconInput.value = rulesData.sideControllerIcon || '';
        sideControllerIconInput.spellcheck = false;
        sideControllerIconDiv.appendChild(sideControllerIconInput);
        btns.appendChild(sideControllerIconDiv);

        let otherBtns = document.createElement("div");
        otherBtns.style.display = "flex";
        configCon.insertBefore(otherBtns, insertPos);
        let loadingText = document.createElement("div");
        loadingText.style.width = "100%";
        let loadingTextTitle = document.createElement("h2");
        loadingTextTitle.style.whiteSpace = "nowrap";
        loadingTextTitle.style.overflow = "auto";
        loadingTextTitle.innerHTML = i18n("loadingTextTitle");
        loadingText.appendChild(loadingTextTitle);
        let loadingTextInput = document.createElement("input");
        loadingTextInput.value = rulesData.loadingText||'';
        loadingTextInput.placeholder = i18n("loadingText");
        loadingTextInput.style.width = "100%";
        loadingTextInput.style.margin = "0";
        loadingTextInput.spellcheck = false;
        loadingText.appendChild(loadingTextInput);
        otherBtns.appendChild(loadingText);

        let opacity = document.createElement("div");
        let opacityTitle = document.createElement("h2");
        opacityTitle.style.whiteSpace = "nowrap";
        opacityTitle.style.overflow = "visible";
        opacityTitle.innerHTML = i18n("opacity");
        opacity.appendChild(opacityTitle);
        let opacityInput = document.createElement("input");
        opacityInput.value = rulesData.opacity * 100;
        opacityInput.type = "number";
        opacityInput.style.width = "110px";
        opacityInput.style.margin = "0";
        opacityInput.placeholder = i18n("opacityPlaceholder");
        opacityInput.spellcheck = false;
        opacity.appendChild(opacityInput);
        otherBtns.appendChild(opacity);

        let pageElementCss = document.createElement("div");
        pageElementCss.style.marginBottom = "30px";
        let pageElementCssTitle = document.createElement("h2");
        pageElementCssTitle.innerHTML = i18n("pageElementCss");
        pageElementCss.appendChild(pageElementCssTitle);
        let pageElementCssInput = document.createElement("input");
        pageElementCssInput.value = rulesData.pageElementCss || '';
        pageElementCssInput.style.width = "100%";
        pageElementCssInput.style.margin = "0";
        pageElementCssInput.placeholder = "font-size: xx-large;";
        pageElementCssInput.spellcheck = false;
        pageElementCss.appendChild(pageElementCssInput);
        configCon.insertBefore(pageElementCss, insertPos);

        let customCss = document.createElement("div");
        customCss.style.marginBottom = "50px";
        let customCssTitle = document.createElement("h2");
        customCssTitle.innerHTML = i18n("customCss");
        customCss.appendChild(customCssTitle);
        let customCssInput = document.createElement("textarea");
        customCssInput.value = rulesData.customCss || '';
        customCssInput.style.width = "100%";
        customCssInput.style.margin = "0";
        customCssInput.placeholder = ".pagetual{\n}";
        customCssInput.spellcheck = false;
        customCss.appendChild(customCssInput);
        configCon.insertBefore(customCss, insertPos);

        let configTable = document.createElement("table");
        configTable.style.width = "100%";
        let configTbody = document.createElement("tbody");
        configTbody.style.width = "100%";
        configTbody.style.display = "inline-table";
        configTable.appendChild(configTbody);
        configCon.insertBefore(configTable, insertPos);
        function createCheckbox(innerText, val, tag, parentCheck, otherType) {
            if (typeof val == 'undefined') val = "";
            let title = document.createElement(tag || "h3");
            title.innerHTML = innerText;
            title.style.overflowWrap = "normal";
            let input = document.createElement("input");
            if (otherType === 'key') {
                input.type = 'text';
                input.setAttribute('readOnly', 'readonly');
                input.addEventListener("keydown", e => {
                    if (e.key === 'Escape' || e.key === 'Backspace') input.value = '';
                    else input.value = e.key;
                    e.stopPropagation();
                    e.preventDefault();
                });
            } else {
                input.type = otherType || "checkbox";
            }
            input.style.width = "30px";
            input.style.height = "20px";
            input.style.float = "left";
            input.style.margin = "5px";
            input.value = val;
            input.checked = val;
            let td = document.createElement("td");
            td.appendChild(input);
            if (parentCheck) {
                title.style.margin = "0";
                td.appendChild(title);
                let parent = parentCheck.parentNode.nextElementSibling;
                let tr = parent.querySelector("tr");
                if (!tr) {
                    tr = document.createElement("tr");
                    parent.appendChild(tr);
                }
                tr.appendChild(td);
                if (!parentCheck.checked) {
                    td.style.display = "none";
                }
                parentCheck.addEventListener("click", e => {
                    td.style.display = parentCheck.checked ? "" : "none";
                });
            } else {
                let tr = document.createElement("tr");
                tr.appendChild(td);
                td = document.createElement("td");
                td.appendChild(title);
                tr.appendChild(td);
                configTable.children[0].appendChild(tr);
            }
            return input;
        }

        let enableWhiteListInput = createCheckbox(i18n("autoRun"), rulesData.enableWhiteList != true);
        let enableDebugInput = createCheckbox(i18n("enableDebug"), rulesData.enableDebug != false);
        let enableHistoryInput = createCheckbox(i18n("enableHistory"), rulesData.enableHistory === true);
        let enableHistoryAfterInsertInput = createCheckbox(i18n("enableHistoryAfterInsert"), rulesData.enableHistoryAfterInsert === true);
        let openInNewTabInput = createCheckbox(i18n("openInNewTab"), rulesData.openInNewTab != false);
        let hidePageBarInput = createCheckbox(i18n("hideBar"), rulesData.opacity == 0);
        let hidePageBarArrowInput = createCheckbox(i18n("hideBarArrow"), rulesData.hideBarArrow);
        let hideLoadingIconInput = createCheckbox(i18n("hideLoadingIcon"), rulesData.hideLoadingIcon != false);
        let initRunInput = createCheckbox(i18n("initRun"), rulesData.initRun != false);
        let autoLoadNumInput = createCheckbox(i18n("autoLoadNum"), rulesData.autoLoadNum, "h4", initRunInput, "number");
        let preloadInput = createCheckbox(i18n("preload"), rulesData.preload != false);
        let rateInput = createCheckbox(i18n("turnRate"), rulesData.rate, "h4", preloadInput, "number");
        let dbClick2StopInput = createCheckbox(i18n("dbClick2Stop"), rulesData.dbClick2Stop);
        let manualModeInput = createCheckbox(i18n("manualMode"), rulesData.manualMode);
        let clickModeInput = createCheckbox(i18n("clickMode"), rulesData.clickMode);
        let pageBarMenuInput = createCheckbox(i18n("pageBarMenu"), rulesData.pageBarMenu != false);
        let arrowToScrollInput = createCheckbox(i18n("arrowToScroll"), rulesData.arrowToScroll);
        let sideControllerInput = createCheckbox(i18n("sideController"), rulesData.sideController);

        let hideBarInput = createCheckbox(i18n("hideBar"), rulesData.hideBar && !rulesData.hideBarButNoStop, "h4", dbClick2StopInput, 'radio');
        hideBarInput.name = 'hideBar';
        let hideBarButNoStopInput = createCheckbox(i18n("hideBarButNoStop"), rulesData.hideBarButNoStop, "h4", dbClick2StopInput, 'radio');
        hideBarButNoStopInput.name = 'hideBar';
        hideBarInput.addEventListener('mouseup', e => {
            if (hideBarInput.checked) {
                setTimeout(() => {hideBarInput.checked = false}, 0);
            }
        });
        hideBarButNoStopInput.addEventListener('mouseup', e => {
            if (hideBarButNoStopInput.checked) {
                setTimeout(() => {hideBarButNoStopInput.checked = false}, 0);
            }
        });
        hidePageBarInput.addEventListener('click', e => {
            opacityInput.value = hidePageBarInput.checked ? 0 : 30;
        });

        let dbClick2StopCtrlInput = createCheckbox(i18n("dbClick2StopCtrl"), rulesData.dbClick2StopCtrl, "h4", dbClick2StopInput);
        let dbClick2StopAltInput = createCheckbox(i18n("dbClick2StopAlt"), rulesData.dbClick2StopAlt, "h4", dbClick2StopInput);
        let dbClick2StopShiftInput = createCheckbox(i18n("dbClick2StopShift"), rulesData.dbClick2StopShift, "h4", dbClick2StopInput);
        let dbClick2StopMetaInput = createCheckbox(i18n("dbClick2StopMeta"), rulesData.dbClick2StopMeta, "h4", dbClick2StopInput);
        let dbClick2StopKeyInput = createCheckbox(i18n("dbClick2StopKey"), rulesData.dbClick2StopKey, "h4", dbClick2StopInput, "key");

        let customRulesTitle = document.createElement("h2");
        customRulesTitle.innerHTML = i18n("customRules", location.href.replace('tree', 'edit').replace(/\/$/, '') + '/pagetualRules.json');
        configCon.insertBefore(customRulesTitle, insertPos);
        let customRulesInput = document.createElement("textarea");
        customRulesInput.spellcheck = false;
        configCon.insertBefore(customRulesInput, insertPos);
        if (rulesData.editTemp) {
            if (!ruleParser.customRules) {
                ruleParser.customRules = [];
            }
            for (let i in ruleParser.customRules) {
                if (ruleParser.customRules[i].url == rulesData.editTemp.url) {
                    ruleParser.customRules.splice(i, 1);
                    break;
                }
            }
            ruleParser.customRules.unshift(rulesData.editTemp);
            rulesData.editTemp = null;
            storage.setItem("rulesData", rulesData);
            customRulesInput.previousElementSibling.scrollIntoView();
        }
        customRulesInput.style.width = "100%";
        customRulesInput.style.height = "800px";
        customRulesInput.placeholder = `[\n  {\n    "name":"yande",\n    "action":"0",\n    "url":"^https:\/\/yande\\.re\/",\n    "pageElement":"ul#post-list-posts>li",\n    "nextLink":"a.next_page",\n    "css":".javascript-hide {display: inline-block !important;}"\n  },\n  {\n    "name":"tieba",\n    "action":"1",\n    "url":"^https:\/\/tieba\\.baidu.com\/f\\?kw=",\n    "pageElement":"ul#thread_list>li",\n    "nextLink":".next.pagination-item "\n  }\n]`;
        let preCustom = getFormatJSON(ruleParser.customRules);
        customRulesInput.value = preCustom;
        let blacklistInput = document.createElement("textarea");
        blacklistInput.style.width = "100%";
        blacklistInput.style.height = "500px";
        blacklistInput.style.display = "none";
        blacklistInput.spellcheck = false;
        blacklistInput.placeholder = "http://*.xxx.com/*/y";
        blacklistInput.value = rulesData.blacklist ? rulesData.blacklist.join("\n") : "";
        let blacklistBtn = document.createElement("button");
        blacklistBtn.innerText = i18n("editBlacklist");
        blacklistBtn.style.width = "100%";
        blacklistBtn.onclick = e => {
            blacklistInput.style.display = blacklistInput.style.display == "none" ? "" : "none";
        };
        configCon.insertBefore(blacklistBtn, insertPos);
        configCon.insertBefore(blacklistInput, insertPos);
        let saveBtn = document.createElement("button");
        saveBtn.innerHTML = i18n("save");
        saveBtn.style.width = "100%";
        saveBtn.style.position = "fixed";
        saveBtn.style.zIndex = "999";
        saveBtn.style.bottom = 0;
        saveBtn.style.left = 0;
        saveBtn.style.fontSize = "x-large";
        configCon.insertBefore(saveBtn, insertPos);
        saveBtn.onclick = e => {
            try {
                if (customRulesInput.value != preCustom) {
                    storage.setItem("hpRules", []);
                    storage.setItem("smartRules", []);
                }
                if (customRulesInput.value == "") {
                    storage.setItem("customRules", "");
                } else {
                    let customRules = JSON.parse(customRulesInput.value);
                    if (Array && Array.isArray && !Array.isArray(customRules)) {
                        showTips(i18n("errorRulesMustBeArray"));
                        return;
                    }
                    debug(customRules);
                    storage.setItem("customRules", customRules);
                    customRulesInput.value = JSON.stringify(customRules, null, 4);
                }
            } catch(e) {
                debug(e);
                showTips(i18n("errorJson"));
                return;
            }
            rulesData.opacity = opacityInput.value / 100;
            rulesData.blacklist = blacklistInput.value ? blacklistInput.value.split("\n") : "";
            rulesData.hideBar = hideBarInput.checked;
            rulesData.hideBarButNoStop = hideBarButNoStopInput.checked;
            rulesData.dbClick2Stop = dbClick2StopInput.checked;
            rulesData.enableWhiteList = !enableWhiteListInput.checked;
            rulesData.enableDebug = enableDebugInput.checked;
            rulesData.enableHistory = enableHistoryInput.checked;
            rulesData.enableHistoryAfterInsert = enableHistoryAfterInsertInput.checked;
            rulesData.openInNewTab = openInNewTabInput.checked;
            rulesData.hideLoadingIcon = hideLoadingIconInput.checked;
            rulesData.hideBarArrow = hidePageBarArrowInput.checked;
            rulesData.initRun = initRunInput.checked;
            rulesData.autoLoadNum = autoLoadNumInput.value !== "0" ? autoLoadNumInput.value : '';
            rulesData.rate = parseInt(rateInput.value) || 1;
            rulesData.preload = preloadInput.checked;
            rulesData.manualMode = manualModeInput.checked;
            rulesData.clickMode = clickModeInput.checked;
            rulesData.pageBarMenu = pageBarMenuInput.checked;
            rulesData.arrowToScroll = arrowToScrollInput.checked;
            if (rulesData.sideController != sideControllerInput.checked) {
                rulesData.sideControllerPos = false;
            }
            rulesData.sideController = sideControllerInput.checked;
            rulesData.pageElementCss = pageElementCssInput.value;
            rulesData.customCss = customCssInput.value;
            rulesData.upBtnImg = upBtnImgInput.value;
            rulesData.downBtnImg = downBtnImgInput.value;
            rulesData.sideControllerIcon = sideControllerIconInput.value;
            rulesData.loadingText = loadingTextInput.value;
            rulesData.dbClick2StopCtrl = dbClick2StopCtrlInput.checked;
            rulesData.dbClick2StopAlt = dbClick2StopAltInput.checked;
            rulesData.dbClick2StopShift = dbClick2StopShiftInput.checked;
            rulesData.dbClick2StopMeta = dbClick2StopMetaInput.checked;
            rulesData.dbClick2StopKey = dbClick2StopKeyInput.value;
            storage.setItem("rulesData", rulesData);
            let customUrls = customUrlsInput.value.trim();
            if (customUrls) {
                customUrls = customUrls.split(/\n/);
                for (let c = 0; c < customUrls.length; c++) {
                    let url;
                    if (/^0\s*\|/.test(customUrls[c])) {
                        url = customUrls[c].replace(/^0\s*\|\s*/, "").trim();
                        if (!/^http/.test(url)) {
                            showTips(i18n("errorWrongUrl"));
                            return;
                        }
                    } else {
                        url = customUrls[c].trim();
                        if (!/^http/.test(url)) {
                            showTips(i18n("errorWrongUrl"));
                            return;
                        }
                    }
                    let maxId = 1, hasUrl = false;
                    if (!rulesData.urls) {
                        rulesData.urls = [];
                    }
                    ruleUrls.forEach(u => {
                        if (maxId < u.id) {
                            maxId = u.id;
                        }
                        if (u.url == url) {
                            hasUrl = true;
                        }
                    });
                    if (hasUrl) break;
                    if (!rulesData.sort) rulesData.sort = [1];
                    rulesData.urls.push({id: maxId + 1, url: url});
                    rulesData.sort.push(maxId + 1);
                    storage.setItem("rulesData", rulesData);
                }
            }
            showTips(i18n("settingsSaved"));
            //location.reload();
        };
        return true;
    }

    var inUpdate = false;
    function updateRules (success, fail, keepCache) {
        if (!storage.supportCrossSave()) {
            fail({url:''}, "Not support cross storage");
            return;
        }
        if (inUpdate) return;
        inUpdate = true;
        let ruleIndex = ruleUrls.length - 1;
        if (!keepCache) {
            storage.setItem("hpRules", []);
            storage.setItem("smartRules", []);
        }
        function addNextRule() {
            if (ruleIndex < 0) {
                let now = new Date().getTime();
                storage.setItem("ruleLastUpdate", now);
                storage.setItem("rules", ruleParser.rules);
                inUpdate = false;
                success();
            } else {
                let rule = ruleUrls[ruleIndex--];
                ruleParser.addRuleByUrl(rule.url, rule.id, (json, err) => {
                    if (!json) {
                        fail(rule, err);
                    }
                    addNextRule();
                })
            }
        }
        addNextRule();
    }

    function objIsArr(obj) {
        return obj &&
            typeof obj === 'object' &&
            typeof obj.length === 'number' &&
            !(obj.propertyIsEnumerable('length'));
    }

    function isVisible(el, win) {
        if(!el || !el.offsetParent)return false;
        var loopable = true,
            visible = el.tagName && win.getComputedStyle(el).display != 'none' && win.getComputedStyle(el).visibility != 'hidden';
        while(loopable && visible) {
            el = el.parentNode;

            if(el && el.tagName && el.tagName.toUpperCase() != "BODY") {
                visible = win.getComputedStyle(el).display != 'none' && win.getComputedStyle(el).visibility != 'hidden';
            }else {
                loopable = false;
            }
        }
        return visible;
    }

    function getElementTop(ele) {
        if (!ele) return 0;
        var actualTop = ele.offsetTop;
        var current = ele.offsetParent;
        while (current) {
            actualTop += current.offsetTop;
            current = current.offsetParent;
        }
        return actualTop;
    }

    function getElementLeft(ele) {
        if (!ele) return 0;
        var actualLeft = ele.offsetLeft;
        var current = ele.offsetParent;
        while (current) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return actualLeft;
    }

    function getElementBottom(ele) {
        return getElementTop(ele) + ele.offsetHeight;
    }

    function getFormatJSON(obj){
        if(!objIsArr(obj) || obj.length === 0)return "";
        return JSON.stringify(obj, null, 4);
        let ret="[\n";
        let len=obj.length,i=0,isLast;
        obj.forEach(item=>{
            ret+="  {\n";
            let iLen=Object.keys(item).length,j=0;
            for(let key in item){
                isLast=(++j)==iLen;
                let value=item[key];
                if(objIsArr(value)){
                    let vstr="[",v=0,vIsLast=false;
                    value.forEach(vi=>{
                        vIsLast=(++v)==value.length;
                        vstr+="\""+vi.replace(/\\/g,"\\\\")+"\""+(vIsLast?"":",");
                    });
                    vstr+="]";
                    ret+="    \""+key+"\":"+vstr+""+(isLast?"":",")+"\n";
                }else{
                    if(typeof value=="string"){
                        value=value.replace(/\\/g,"\\\\").replace(/"/g,"\\\"");
                        value="\""+value+"\"";
                    }
                    ret+="    \""+key+"\":"+value+""+(isLast?"":",")+"\n";
                }
            }
            isLast=(++i)==len;
            ret+="  }"+(isLast?"":",")+"\n";
        });
        ret+="]";
        return ret;
    }

    function globMatch(first, second) {
        if (first === '*') {
            return true;
        }
        if (first.length == 0 && second.length == 0){
            return true;
        }

        if (first.length > 1 && first[0] == '*' &&
            second.length == 0){
            return false;
        }

        if ((first.length > 1 && first[0] == '?') ||
            (first.length != 0 && second.length != 0 &&
             first[0] == second[0])){
            return globMatch(first.substring(1),
                         second.substring(1));
        }

        if (first.length > 0 && first[0] == '*'){
            return globMatch(first.substring(1), second) ||
                globMatch(first, second.substring(1));
        }

        return false;
    }

    function initRules(callback) {
        /*0 wedata格式，1 pagetual格式*/
        ruleUrls = [
            {
                id: 1,
                url:'http://wedata.net/databases/AutoPagerize/items_all.json',
                type: 0,
            }
        ];

        ruleParser.initSavedRules(() => {
            storage.getItem("rulesData", data => {
                if (data) {
                    rulesData = data;
                    if (data.urls) ruleUrls = ruleUrls.concat(data.urls);
                    if (data.sort) {
                        let urls = [];
                        data.sort.forEach(id => {
                            for (let s = 0; s < ruleUrls.length; s++) {
                                if (id == ruleUrls[s].id) {
                                    urls.push(ruleUrls[s]);
                                    break;
                                }
                            }
                        });
                        ruleUrls = urls;
                    }
                }
                let upBtnImg = rulesData.upBtnImg, downBtnImg = rulesData.downBtnImg, _sideControllerIcon = rulesData.sideControllerIcon;
                if (upBtnImg && downBtnImg) {
                    downSvgCSS = downSvgCSS.replace("transform: rotate(180deg);", "");
                } else if (upBtnImg && !downBtnImg) {
                    downBtnImg = upBtnImg;
                } else if(downBtnImg && !upBtnImg) {
                    upBtnImg = downBtnImg;
                }
                if (upBtnImg) {
                    upSvg = /https?:|data/.test(upBtnImg) ? `<img class="pagetual" src="${upBtnImg}"/>` : `<span>${upBtnImg}</span>`;
                }
                if (downBtnImg) {
                    downSvg = /https?:|data/.test(downBtnImg) ? `<img class="pagetual" src="${downBtnImg}"/>` : `<span>${downBtnImg}</span>`;
                }
                if (_sideControllerIcon) {
                    sideControllerIcon = /https?:|data/.test(_sideControllerIcon) ? `<img class="pagetual" src="${_sideControllerIcon}"/>` : `<span>${_sideControllerIcon}</span>`;
                }
                setLoadingDiv(rulesData.loadingText || i18n("loadingText"));
                if (typeof(rulesData.opacity) == "undefined") {
                    rulesData.opacity = 0.3;
                }
                if (typeof(rulesData.hideBar) == "undefined") {
                    rulesData.hideBar = false;
                }
                if (typeof(rulesData.dbClick2Stop) == "undefined") {
                    rulesData.dbClick2Stop = true;
                }
                if (typeof(rulesData.enableWhiteList) == "undefined") {
                    rulesData.enableWhiteList = false;
                }
                if (typeof(rulesData.enableHistory) == "undefined") {
                    rulesData.enableHistory = false;
                }
                if (typeof(rulesData.openInNewTab) == "undefined") {
                    rulesData.openInNewTab = true;
                }
                if (typeof(rulesData.enableDebug) == "undefined") {
                    rulesData.enableDebug = true;
                }
                if (typeof(rulesData.initRun) == "undefined") {
                    rulesData.initRun = true;
                }
                if (typeof(rulesData.preload) == "undefined") {
                    rulesData.preload = true;
                }
                if (typeof(rulesData.manualMode) == "undefined") {
                    rulesData.manualMode = false;
                }
                if (typeof(rulesData.clickMode) == "undefined") {
                    rulesData.clickMode = false;
                }
                if (typeof(rulesData.pageBarMenu) == "undefined") {
                    rulesData.pageBarMenu = true;
                }
                if (typeof(rulesData.arrowToScroll) == "undefined") {
                    rulesData.arrowToScroll = false;
                }
                if (typeof(rulesData.hideLoadingIcon) == "undefined") {
                    rulesData.hideLoadingIcon = false;
                }
                if (typeof(rulesData.hideBarArrow) == "undefined") {
                    rulesData.hideBarArrow = false;
                }
                if (rulesData.blacklist && rulesData.blacklist.length > 0) {
                    let href = location.href.slice(0, 500);
                    for (let b in rulesData.blacklist) {
                        let curGlob = rulesData.blacklist[b];
                        if (globMatch(curGlob, href)) {
                            forceState == 1;
                            return;
                        }
                    }
                }
                if (rulesData.autoLoadNum && rulesData.initRun) {
                    autoLoadNum = parseInt(rulesData.autoLoadNum);
                }
                openInNewTab = rulesData.openInNewTab ? 1 : 0;
                enableDebug = rulesData.enableDebug;
                storage.getItem("nextSwitch_" + location.host, i => {
                    storage.getItem("forceState_" + location.host, v => {
                        storage.getItem("ruleLastUpdate", date => {
                            if (typeof(i) !== "undefined") {
                                nextIndex = i;
                            }
                            if (typeof(v) == "undefined") {
                                v = (rulesData.enableWhiteList ? 1 : 0);
                            }
                            forceState = v;
                            updateDate = date;
                            if (initConfig()) return;
                            if (forceState == 1) return;
                            let now = new Date().getTime();
                            if (!date || now - date > 2 * 24 * 60 * 60 * 1000) {
                                updateRules(() => {
                                }, (rule, err) => {}, true);
                                storage.setItem("ruleLastUpdate", now);
                            }
                            callback();
                        });
                    });
                });
            });
        });
    }

    function requestDoc(url, callback){
        let postParams = url.match(/#p{(.*)}$/);
        if (postParams) {
            postParams = postParams[1];
            url = url.replace(/#p{.*/, "");
        }
        _GM_xmlhttpRequest({
            url: url,
            method: postParams ? 'POST' : 'GET',
            data: postParams,
            overrideMimeType: 'text/html;charset=' + (document.characterSet || document.charset || document.inputEncoding),
            headers: {
                'Referer': location.href,
                'User-Agent': navigator.userAgent,
                "Content-Type": (postParams ? "application/x-www-form-urlencoded" : "text/html") + ";charset=" + (document.characterSet || document.charset || document.inputEncoding),
            },
            timeout: 20000,
            onload: async function(res) {
                var doc = null, response = res.response;
                let preCode = ruleParser.curSiteRule.pageElementPre || ruleParser.curSiteRule.pagePre;
                if (preCode) {
                    try {
                        if (typeof _unsafeWindow.pagetualPagePre != 'undefined') {
                            response = _unsafeWindow.pagetualPagePre(response);
                        } else if (preCode.length == 2) {
                            response = response.replace(new RegExp(preCode[0], "gi"), preCode[1]);
                        } else {
                            response = Function("response",'"use strict";' + preCode)(response);
                        }
                    } catch(e) {
                        debug(e);
                    }
                }
                try {
                    doc = document.implementation.createHTMLDocument('');
                    doc.documentElement.innerHTML = response;
                    let base = doc.querySelector("base");
                    ruleParser.basePath = base ? base.href : url;
                }
                catch (e) {
                    debug('parse error:' + e.toString());
                }
                let pageElement = ruleParser.getPageElement(doc);
                if ((!pageElement || pageElement.length == 0) && res.status >= 400) {
                    debug(res.status, "Error status");
                    return callback(false);
                }
                if (inCors && (!pageElement || pageElement.length == 0)) {
                    let article = doc.querySelectorAll(mainSel);
                    if (article && article.length > 0) {
                        if (article.length == 1) {
                            article = article[0];
                            ruleParser.curSiteRule.pageElement = article.tagName.toLowerCase() + (article.id ? "#" + article.id : "") + (article.className ? "." + article.className : "") + ">*";
                            pageElement = article.children;
                        } else {
                            ruleParser.curSiteRule.pageElement = mainSel;
                            pageElement = article;
                        }
                    } else {
                        ruleParser.curSiteRule.pageElement = allOfBody;
                        pageElement = ruleParser.getPageElement(doc);
                    }
                    ruleParser.getInsert(true);
                }
                //只有1的話怕不是圖片哦
                if (pageElement && (pageElement.length > 1 || (pageElement.length == 1 && pageElement[0].tagName.toUpperCase() != "IMG"))) {
                    await ruleParser.insertPage(doc, pageElement, url, callback, false);
                    if (ruleParser.curSiteRule.action == 1) {
                        requestFromIframe(url, (doc, eles) => {
                            loadPageOver();
                            if (eles) {
                                ruleParser.insertPage(doc, eles, url, callback, true);
                            }
                        });
                    } else ruleParser.curSiteRule.action = 0;
                } else if (ruleParser.curSiteRule.singleUrl || curPage == 1) {
                    ruleParser.curSiteRule.action = 1;
                    requestFromIframe(url, (doc, eles) => {
                        loadPageOver();
                        if (eles) {
                            ruleParser.insertPage(doc, eles, url, callback, true);
                        }
                    });
                } else {
                    debug("Stop as no page element");
                    showTips(i18n("noValidContent"), "", "", url);
                    isPause = true;
                    callback(false);
                }
            },
            onerror: function(e) {
                debug(e, "NetError");
                callback(false);
            },
            ontimeout: function(e) {
                debug(e, "NetTimeout");
                callback(false);
            }
        });
    }

    function initPage() {
        ruleParser.initPage(() => {
            if (ruleParser.curSiteRule.autoLoadNum) {
                autoLoadNum = ruleParser.curSiteRule.autoLoadNum;
            }
            if (ruleParser.curSiteRule.nextLink && Array && Array.isArray && Array.isArray(ruleParser.curSiteRule.nextLink)) {
                _GM_registerMenuCommand(i18n("nextSwitch"), () => {
                    NextSwitch.getInstance().start();
                });
            }
            if (ruleParser.nextLinkHref) {
                let isJs = /^(javascript|#)/.test(ruleParser.nextLinkHref.replace(location.href, ""));
                if (!isJs) {
                    let inForce = (forceState == 2 || forceState == 3);
                    _GM_registerMenuCommand(i18n(inForce ? "cancelForceIframe" : "forceIframe"), () => {
                        if (inForce) {
                            storage.setItem("forceState_" + location.host, "");
                        } else {
                            let _state = ruleParser.curSiteRule.action > 0 || confirm(i18n("forceAllBody")) ? 2 : 3;
                            storage.setItem("forceState_" + location.host, _state);
                        }
                        location.reload();
                    });
                }
                _GM_registerMenuCommand(i18n("loadNow"), () => {
                    let loadNum = window.prompt(i18n("loadConfirm"), "1");
                    if (loadNum === "" || loadNum === null) return;
                    autoLoadNum = Math.abs(parseInt(loadNum));
                    nextPage();
                });
            }
            initListener();
        });
    }

    var pageBarStyle, mainStyleEle, mainStyleStyle;
    function initView() {
        if (!mainStyleStyle) {
            mainStyleStyle = `
         .pagetual_pageBar{
           -moz-transition:opacity 0.3s ease-in-out 0s;
           -webkit-transition:opacity 0.3s ease-in-out 0s;
           transition:opacity 0.3s ease-in-out 0s;
           font-family: Arial,sans-serif !important;
           text-align: center !important;
         }
         .pagetual_pageBar.stop {
           -webkit-filter: invert(100%);
           filter: invert(100%);
           opacity: 1!important;
         }
         .pagetual_pageBar.hide {
           display: none!important;
         }
         .pagetual_pageBar:hover {
           opacity: 1!important;
         }
         .pagetual_pageBar span {
           vertical-align: super;
         }
         .pagetual_pageBar a::before,
         .pagetual_pageBar a::after {
           content: none;
         }
         .pagetual_pageBar a>span {
           margin-top: 0!important;
           pointer-events: none;
           padding: unset;
           opacity: 0;
           -moz-transition:margin-top 0.3s ease-in-out 0s, opacity .3s;
           -webkit-transition:margin-top 0.3s ease-in-out 0s, opacity .3s;
           transition:margin-top 0.3s ease-in-out 0s, opacity .3s;
           transform: none;
           left: 0;
           margin-left: calc(50% - 20px);
         }
         .pagetual_pageBar a>span:hover {
           color: red;
         }
         .pagetual_pageBar a:hover>span {
           opacity: 1;
         }
         .pagetual_pageBar span.prevScreen,
         .pagetual_pageBar span.nextScreen {
           display: block!important;
         }
         .pagetual_pageBar a:hover>span.prevScreen {
           margin-top: -30px!important;
           pointer-events: all;
         }
         .pagetual_pageBar a:hover>span.nextScreen {
           margin-top: 30px!important;
           pointer-events: all;
         }
         .pagetual_pageBar span>svg {
           -moz-transition:transform 0.5s ease, opacity 0.3s ease;
           -webkit-transition:transform 0.5s ease, opacity 0.3s ease;
           transition:transform 0.5 ease, opacity 0.3s ease;
           opacity: 0;
         }
         .pagetual_pageBar:hover span>svg {
           opacity: 1;
         }
         .pagetual_pageBar span>svg.upSvg:hover {
           transform: rotate(360deg) scale3d(1.2, 1.2, 1.2);
         }
         .pagetual_pageBar span>svg.downSvg:hover {
           transform: rotate(540deg) scale3d(1.2, 1.2, 1.2)!important;
         }
         .pagetual_pageBar .pagetual_pageNum{
           color: #55555f;
         }
         .pagetual_pageBar .pagetual_pageNum:hover{
           color: #ff6464;
         }
         .pagetual_tipsWords {
           font-size: 50px;
           font-weight: bold;
           font-family: "黑体", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
             "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
             "Segoe UI Emoji", "Segoe UI Symbol";
           color: #ffffff;
           min-height: 70px;
           max-width: 80%;
           line-height: 70px;
           position: fixed;
           left: 50%;
           top: 10%;
           margin-left: -99999px;
           padding: 0 15px;
           z-index: 2147483647;
           background-color: #000;
           border: 1px solid #303030;
           border-radius: 10px;
           opacity: 0;
           filter: alpha(opacity=65);
           box-shadow: 5px 5px 20px 0px #000;
           -moz-transition:opacity 0.3s ease-in-out 0s;
           -webkit-transition:opacity 0.3s ease-in-out 0s;
           transition:opacity 0.3s ease-in-out 0s;
           pointer-events: none;
         }
         .pagetual_tipsWords>a {
           color: #ffffff;
         }
         .pagetual_loading {
           width: 50px;
           height: 50px;
           margin: 10px auto;
           border-radius: 100%;
           display: flex;
           -webkit-animation: pagetual_loading_scaleout 1.0s infinite ease-in-out;
           animation: pagetual_loading_scaleout 1.0s infinite ease-in-out;
         }
         @-webkit-keyframes pagetual_loading_scaleout {
           0% { -webkit-transform: scale(0.0) }
           100% {
             -webkit-transform: scale(1.0);
             opacity: 0;
           }
         }
         @keyframes pagetual_loading_scaleout {
           0% {
             transform: scale(0.0);
             -webkit-transform: scale(0.0);
           } 100% {
           transform: scale(1.0);
             -webkit-transform: scale(1.0);
             opacity: 0;
           }
         }
         .pagetual_loading_text {
           white-space: nowrap;
           -webkit-animation: pagetual_loading_opacity 2.6s infinite ease-in-out;
           animation: pagetual_loading_opacity 2.6s infinite ease-in-out;
         }
         @-webkit-keyframes pagetual_loading_opacity {
           0% { opacity: 1 }
           50% { opacity: 0.2 }
           100% { opacity: 1 }
         }
         @keyframes pagetual_loading_opacity {
           0% { opacity: 1 }
           50% { opacity: 0.2 }
           100% { opacity: 1 }
         }
        `;
            pageBarStyle = `overflow: visible;text-indent: initial;vertical-align: super;line-height:1;opacity:${rulesData.opacity};display:${rulesData.opacity==0?"none":"inline-flex"};padding:0;box-shadow: 0px 0px 10px 0px #000000aa;border-radius: 20px;background-color: rgb(240 240 240 / 80%);font-size: 30px;visibility: visible; position: relative; width: auto; max-width: 100vw; height: 30px; float: none; clear: both; margin: 5px auto; text-align: center;justify-content: center;`;
        }
        if (!mainStyleEle || !mainStyleEle.parentNode) {
            mainStyleEle = _GM_addStyle(mainStyleStyle);
        }
    }
    var loadingDiv = document.createElement("div");
    loadingDiv.style.cssText = "text-indent: initial;cy: initial;d: initial;dominant-baseline: initial;empty-cells: initial;fill: initial;fill-opacity: initial;fill-rule: initial;filter: initial;flex: initial;flex-flow: initial;float: initial;flood-color: initial;flood-opacity: initial;grid: initial;grid-area: initial;height: initial;hyphens: initial;image-orientation: initial;image-rendering: initial;inline-size: initial;inset-block: initial;inset-inline: initial;isolation: initial;letter-spacing: initial;lighting-color: initial;line-break: initial;list-style: initial;margin-block: initial;margin: 0px auto;margin-inline: initial;marker: initial;mask: initial;mask-type: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset: initial;opacity: initial;order: initial;origin-trial-test-property: initial;orphans: initial;outline: initial;outline-offset: initial;overflow-anchor: initial;overflow-clip-margin: initial;overflow-wrap: initial;overflow: initial;overscroll-behavior-block: initial;overscroll-behavior-inline: initial;overscroll-behavior: initial;padding-block: initial;padding: initial;padding-inline: initial;page: initial;page-orientation: initial;paint-order: initial;perspective: initial;perspective-origin: initial;pointer-events: initial;position: initial;quotes: initial;r: initial;resize: initial;ruby-position: initial;rx: initial;ry: initial;scroll-behavior: initial;scroll-margin-block: initial;scroll-margin: initial;scroll-margin-inline: initial;scroll-padding-block: initial;scroll-padding: initial;scroll-padding-inline: initial;scroll-snap-align: initial;scroll-snap-stop: initial;scroll-snap-type: initial;scrollbar-gutter: initial;shape-image-threshold: initial;shape-margin: initial;shape-outside: initial;shape-rendering: initial;size: initial;speak: initial;stop-color: initial;stop-opacity: initial;stroke: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;tab-size: initial;table-layout: initial;text-align: initial;text-align-last: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-decoration-skip-ink: initial;text-indent: initial;text-overflow: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;text-underline-offset: initial;text-underline-position: initial;touch-action: initial;transform: initial;transform-box: initial;transform-origin: initial;transform-style: initial;transition: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;border-spacing: initial;-webkit-border-image: initial;-webkit-box-align: initial;-webkit-box-decoration-break: initial;-webkit-box-direction: initial;-webkit-box-flex: initial;-webkit-box-ordinal-group: initial;-webkit-box-orient: initial;-webkit-box-pack: initial;-webkit-box-reflect: initial;-webkit-highlight: initial;-webkit-hyphenate-character: initial;-webkit-line-break: initial;-webkit-line-clamp: initial;-webkit-mask-box-image: initial;-webkit-mask: initial;-webkit-mask-composite: initial;-webkit-perspective-origin-x: initial;-webkit-perspective-origin-y: initial;-webkit-print-color-adjust: initial;-webkit-rtl-ordering: initial;-webkit-ruby-position: initial;-webkit-tap-highlight-color: initial;-webkit-text-combine: initial;-webkit-text-decorations-in-effect: initial;-webkit-text-emphasis: initial;-webkit-text-emphasis-position: initial;-webkit-text-fill-color: initial;-webkit-text-security: initial;-webkit-text-stroke: initial;-webkit-transform-origin-x: initial;-webkit-transform-origin-y: initial;-webkit-transform-origin-z: initial;-webkit-user-drag: initial;-webkit-user-modify: initial;white-space: initial;widows: initial;width: initial;will-change: initial;word-break: initial;word-spacing: initial;x: initial;y: initial;z-index: 2147483647;";

    const loadingCSS = `text-indent: unset; display: block; position: initial; margin: auto auto 5px auto; shape-rendering: auto; vertical-align: middle; visibility: visible; width: initial; height: initial; text-align: center; color: #6e6e6e; flex: 0;`;
    function setLoadingDiv(loadingText) {
        loadingDiv.innerHTML = createHTML(`<p class="pagetual_loading_text" style="${loadingCSS}display: inline-block;width: 100%;">${loadingText}</p>${rulesData.hideLoadingIcon ? "" : `<div class="pagetual_loading"><svg width="50" height="50" style="position:relative;cursor: pointer;width: 50px;height: 50px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#6e6e6e"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#6e6e6e"></path></svg></div>`}`);
    }

    var upSvg = `<svg width="30" height="30" class="upSvg pagetual" style="display:initial;position:relative;cursor: pointer;margin: 0 8px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a"></path></svg>`;
    var upSvgCSS = `text-align: center;display: initial;position: relative;cursor: pointer;margin: 0 8px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;`;
    var downSvg = `<svg width="30" height="30" class="downSvg pagetual" style="display:initial;position:relative;cursor: pointer;margin: 0 8px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;transform: rotate(180deg);" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M296 440c-44.1 0-80 35.9-80 80s35.9 80 80 80 80-35.9 80-80-35.9-80-80-80z" fill="#604b4a"></path><path d="M960 512c0-247-201-448-448-448S64 265 64 512c0 1.8 0.1 3.5 0.1 5.3 0 0.9-0.1 1.8-0.1 2.7h0.2C68.5 763.3 267.7 960 512 960c236.2 0 430.1-183.7 446.7-415.7 0.1-0.8 0.1-1.6 0.2-2.3 0.4-4.6 0.5-9.3 0.7-13.9 0.1-2.7 0.4-5.3 0.4-8h-0.2c0-2.8 0.2-5.4 0.2-8.1z m-152 8c0 44.1-35.9 80-80 80s-80-35.9-80-80 35.9-80 80-80 80 35.9 80 80zM512 928C284.4 928 99 744.3 96.1 517.3 97.6 408.3 186.6 320 296 320c110.3 0 200 89.7 200 200 0 127.9 104.1 232 232 232 62.9 0 119.9-25.2 161.7-66-66 142.7-210.4 242-377.7 242z" fill="#604b4a"></path></svg>`;
    var downSvgCSS = `text-align: center;display: initial;position: relative;cursor: pointer;margin: 0 8px;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;transform: rotate(180deg);`;

    const initStyle = `text-indent: initial;display: contents;right: unset;left: unset;top: unset;bottom: unset;inset: unset;clear: both;cy: initial;d: initial;dominant-baseline: initial;empty-cells: initial;fill: initial;fill-opacity: initial;fill-rule: initial;filter: initial;flex: initial;flex-flow: initial;float: initial;flood-color: initial;flood-opacity: initial;grid: initial;grid-area: initial;height: initial;hyphens: initial;image-orientation: initial;image-rendering: initial;inline-size: initial;inset-block: initial;inset-inline: initial;isolation: initial;letter-spacing: initial;lighting-color: initial;line-break: initial;list-style: initial;margin-block: initial;margin: 0px 5px;margin-inline: initial;marker: initial;mask: initial;mask-type: initial;max-block-size: initial;max-height: initial;max-inline-size: initial;max-width: initial;min-block-size: initial;min-height: initial;min-inline-size: initial;min-width: initial;mix-blend-mode: initial;object-fit: initial;object-position: initial;offset: initial;opacity: initial;order: initial;orphans: initial;outline: initial;outline-offset: initial;overflow-anchor: initial;overflow-clip-margin: initial;overflow-wrap: initial;overflow: initial;overscroll-behavior-block: initial;overscroll-behavior-inline: initial;overscroll-behavior: initial;padding-block: initial;padding: initial;padding-inline: initial;page: initial;page-orientation: initial;paint-order: initial;perspective: initial;perspective-origin: initial;pointer-events: initial;position: relative;quotes: initial;r: initial;resize: initial;ruby-position: initial;rx: initial;ry: initial;scroll-behavior: initial;scroll-margin-block: initial;scroll-margin: initial;scroll-margin-inline: initial;scroll-padding-block: initial;scroll-padding: initial;scroll-padding-inline: initial;scroll-snap-align: initial;scroll-snap-stop: initial;scroll-snap-type: initial;scrollbar-gutter: initial;shape-image-threshold: initial;shape-margin: initial;shape-outside: initial;shape-rendering: initial;size: initial;speak: initial;stop-color: initial;stop-opacity: initial;stroke: initial;stroke-dasharray: initial;stroke-dashoffset: initial;stroke-linecap: initial;stroke-linejoin: initial;stroke-miterlimit: initial;stroke-opacity: initial;stroke-width: initial;tab-size: initial;table-layout: initial;text-align: initial;text-align-last: initial;text-anchor: initial;text-combine-upright: initial;text-decoration: initial;text-decoration-skip-ink: initial;text-indent: initial;text-overflow: initial;text-shadow: initial;text-size-adjust: initial;text-transform: initial;text-underline-offset: initial;text-underline-position: initial;touch-action: initial;transform: initial;transform-box: initial;transform-origin: initial;transform-style: initial;transition: initial;user-select: initial;vector-effect: initial;vertical-align: initial;visibility: initial;border-spacing: initial;-webkit-border-image: initial;-webkit-box-align: initial;-webkit-box-decoration-break: initial;-webkit-box-direction: initial;-webkit-box-flex: initial;-webkit-box-ordinal-group: initial;-webkit-box-orient: initial;-webkit-box-pack: initial;-webkit-box-reflect: initial;-webkit-highlight: initial;-webkit-hyphenate-character: initial;-webkit-line-break: initial;-webkit-line-clamp: initial;-webkit-mask-box-image: initial;-webkit-mask: initial;-webkit-mask-composite: initial;-webkit-perspective-origin-x: initial;-webkit-perspective-origin-y: initial;-webkit-print-color-adjust: initial;-webkit-rtl-ordering: initial;-webkit-ruby-position: initial;-webkit-tap-highlight-color: initial;-webkit-text-combine: initial;-webkit-text-decorations-in-effect: initial;-webkit-text-emphasis: initial;-webkit-text-emphasis-position: initial;-webkit-text-fill-color: initial;-webkit-text-security: initial;-webkit-text-stroke: initial;-webkit-transform-origin-x: initial;-webkit-transform-origin-y: initial;-webkit-transform-origin-z: initial;-webkit-user-drag: initial;-webkit-user-modify: initial;white-space: initial;widows: initial;width: initial;will-change: initial;word-break: initial;word-spacing: initial;x: initial;y: initial;`;
    const pageTextStyle = `opacity: 1!important;text-indent: initial;padding: unset;border: none;background: unset!important;line-height: 30px;text-decoration: none;user-select: none;visibility: visible;position: initial;width: auto;max-width: 80%; white-space: nowrap; text-overflow: ellipsis;overflow: hidden;height: auto;float: none;clear: both;margin: 0px;text-align: center;display: inline-block;font-weight: bold;font-style: normal;font-size: 16px;letter-spacing: initial;vertical-align: top;color: rgb(85, 85, 95)!important;`;
    var sideControllerIcon = '';

    var tipsWords = document.createElement("div");
    tipsWords.className = "pagetual_tipsWords";

    var isPause = false, isHideBar = false, isLoading = false, curPage = 1, forceState = 0, bottomGap = 1000, autoLoadNum = -1, nextIndex = 0, stopScroll = false, clickMode = false;
    var openInNewTab = 0;

    function changeStop(stop) {
        isPause = stop;
        [].forEach.call(document.querySelectorAll(".pagetual_pageBar,#pagetual-sideController"), bar => {
            if (isPause) {
                bar.classList.add("stop");
            } else {
                bar.classList.remove("stop");
            }
        });
    }

    function changeHideBar(hide) {
        isHideBar = hide;
        [].forEach.call(document.querySelectorAll(".pagetual_pageBar"), bar => {
            if (isHideBar) {
                bar.classList.add("hide");
            } else {
                bar.classList.remove("hide");
            }
        });
    }

    function isInViewPort(element) {
        if (!getBody(document).contains(element)) return false;
        if (_unsafeWindow.getComputedStyle(element).display == "none") return false;
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const {
            top,
            right,
            bottom,
            left,
        } = element.getBoundingClientRect();

        return (
            top >= 0 &&
            left >= 0 &&
            right <= viewWidth + 1 &&
            top <= viewHeight * (ruleParser.curSiteRule.rate || rulesData.rate || 1)
        );
    }

    function getPageBar() {
        let preBar = null, nextBar = null;
        let pageBars = [].slice.call(document.querySelectorAll(".pagetual_pageBar"));
        for (let i = 0; i < pageBars.length; i++) {
            let pageBar = pageBars[i];
            if (!pageBar || !getBody(document).contains(pageBar)) continue;
            let {
                top,
                right,
                bottom,
                left,
            } = pageBar.getBoundingClientRect();
            if (top > 500) {
                nextBar = pageBar;
                preBar = (i - 1 >= 0 ? pageBars[i - 1] : null);
                if (pageBar && getBody(document).contains(pageBar)) {
                    let {
                        top,
                        right,
                        bottom,
                        left,
                    } = pageBar.getBoundingClientRect();
                    if (top < -500) {
                        preBar = pageBar;
                    } else preBar = (i - 2 >= 0 ? pageBars[i - 2] : null);
                }
                break;
            }
        }
        if (!nextBar) preBar = pageBars[pageBars.length - 2];
        return {preBar: preBar, nextBar: nextBar};
    }

    var urlChanged = false;
    var urlchangeHandler = e => {
        if (ruleParser && ruleParser.curSiteRule && ruleParser.curSiteRule.listenUrlChange == false) return;
        isPause = true;
        setTimeout(() => {
            lastActiveUrl = location.href;
            if (location.href == configPage[0]) {
                location.reload();
            } else {
                setTimeout(() => {
                    if (guidePage.test(location.href.slice(0, 250))) {
                        if (typeof JSONEditor !== 'undefined') {
                            createEdit();
                        } else {
                            window.onload = e => {
                                createEdit();
                            }
                        }
                    } else {
                        urlChanged = true;
                        if (!ruleParser.nextLinkHref) {
                            isLoading = false;
                        }
                    }
                }, 500);
            }
        }, 1);
    };
    window.addEventListener('pagetual_pushState', urlchangeHandler);
    /*var _wr = function(type) {
        var orig = history[type];
        return function() {
            var rv = orig.apply(this, arguments);
            var e = new Event('pagetual_' + type);
            e.arguments = arguments;
            window.dispatchEvent(e);
            return rv;
        };
    };
    history.pushState = _wr('pushState');*/

    function listenUrl() {
        var prevState = window.location.pathname + window.location.search;
        var checkUrlTime = 100;
        var checkUrlTimer;
        var checkFunc = () => {
            if (forceState == 1) return;
            if (checkUrlTime < 5000) {
                checkUrlTime += checkUrlTime>>1;
            }
            clearTimeout(checkUrlTimer);
            checkUrlTimer = setTimeout(checkFunc, checkUrlTime);
            if (document.hidden) return;
            let url = window.location.pathname + window.location.search;
            if (prevState !== url && window.location.href != ruleParser.historyUrl) {
                checkUrlTime = 2000;
                prevState = url;
                var e = new Event('pagetual_pushState');
                e.arguments = arguments;
                window.dispatchEvent(e);
            }
        };
        checkUrlTimer = setTimeout(checkFunc, checkUrlTime);

        document.addEventListener("click", e => {
            checkUrlTime = 100;
            clearTimeout(checkUrlTimer);
            checkUrlTimer = setTimeout(checkFunc, checkUrlTime);
        });
    }

    function distToBottom () {
        let scrolly = window.scrollY;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        let scrollH = Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
        return scrollH - scrolly - windowHeight;
    }

    let checkLoadMore, scrollHandler, clickToResetHandler, dblclickHandler, keydownHandler, hashchangeHandler, manualModeKeyHandler, pagetualNextHandler, keyupHandler;
    function initListener () {
        clearInterval(checkLoadMore);
        document.removeEventListener('scroll', scrollHandler, true);
        document.removeEventListener('wheel', scrollHandler, true);
        document.removeEventListener('dblclick', dblclickHandler);
        document.removeEventListener('keydown', keydownHandler);
        window.removeEventListener('hashchange', hashchangeHandler, false);
        document.removeEventListener('keydown', manualModeKeyHandler);
        document.removeEventListener('pagetual.next', pagetualNextHandler, false);
        document.removeEventListener('keyup', keyupHandler);
        let loadmoreBtn, loadingMore = true, lastScroll = 0, checkLoadMoreTimes = 0;
        if (!ruleParser.curSiteRule.singleUrl) {
            if (ruleParser.curSiteRule.loadMore) {
                loadingMore = false;
            }
        } else {
            checkLoadMore = setInterval(() => {
                loadmoreBtn = getLoadMore(document);
                if (loadmoreBtn && isVisible(loadmoreBtn, _unsafeWindow)) {
                    loadingMore = false;
                    clearInterval(checkLoadMore);
                } else if (checkLoadMoreTimes++ > 10) {
                    clearInterval(checkLoadMore);
                }
            }, 1000);
        }
        clickMode = typeof ruleParser.curSiteRule.clickMode == 'undefined' ? rulesData.clickMode : ruleParser.curSiteRule.clickMode;
        let clickNext = async () => {
            let nextLink = ruleParser.nextLinkHref;
            if (!nextLink) return;
            let isJs = /^(javascript|#)/.test(nextLink.replace(location.href, ""));
            if (isJs) {
                let nextBtn = await ruleParser.getNextLink(document);
                if (nextBtn) emuClick(nextBtn);
            } else {
                window.location.href = nextLink;
            }
        };
        let checkScrollReach = () => {
            let dist = distToBottom();
            if (clickMode) {
                if (dist < 10) {
                    clickNext();
                }
            } else if (dist < bottomGap) {
                nextPage();
            }
        };
        scrollHandler = e => {
            if (urlChanged && !isLoading) {
                ruleParser.initPage(() => {});
                urlChanged = false;
            }
            if (isPause) return;
            if (!loadingMore) {
                loadmoreBtn = getLoadMore(document, loadmoreBtn);
                if (loadmoreBtn) {
                    if (isInViewPort(loadmoreBtn)) {
                        emuClick(loadmoreBtn);
                        loadingMore = true;
                        setTimeout(() => {loadingMore = false}, 200);
                    }
                } else {
                    loadingMore = true;
                    setTimeout(() => {loadingMore = false}, 200);
                }
            }
            if (!isLoading && !stopScroll) {
                checkScrollReach();
            }
            ruleParser.changeVisibility();
            if (ruleParser.curSiteRule.lockScroll) {
                let curScroll = getBody(document).scrollTop || document.documentElement.scrollTop;
                if (isLoading && Math.abs(lastScroll - curScroll) > 350) {
                    getBody(document).scrollTop = lastScroll;
                    document.documentElement.scrollTop = lastScroll;
                } else {
                    lastScroll = curScroll;
                }
            }
        };
        dblclickHandler = e => {
            if (forceState == 1 || e.target.tagName.toUpperCase() == 'INPUT' || e.target.tagName.toUpperCase() == 'TEXTAREA' || e.target.tagName.toUpperCase() == 'SELECT') return;
            if (!rulesData.dbClick2StopKey) {
                if ((rulesData.dbClick2StopCtrl && !e.ctrlKey) ||
                   (rulesData.dbClick2StopAlt && !e.altKey) ||
                   (rulesData.dbClick2StopShift && !e.shiftKey) ||
                   (rulesData.dbClick2StopMeta && !e.metaKey)) {
                    return;
                }
            }
            if (e.target.tagName.toUpperCase() !== "BODY" && e.target.className !== 'pagetual_pageBar') {
                let selStr = document.getSelection().toString();
                if (selStr && selStr.trim()) {
                    return;
                }
            }
            if (rulesData.dbClick2Stop && (ruleParser.nextLinkHref || loadmoreBtn)) {
                setTimeout(() => {
                    if (rulesData.hideBarButNoStop || rulesData.hideBar) {
                        changeHideBar(!isHideBar);
                    }
                    if (!rulesData.hideBarButNoStop) {
                        changeStop(!isPause);
                        showTips(i18n(isPause ? "disable" : "enable"));
                    }
                    if (!isPause) {
                        checkScrollReach();
                    }
                }, 10);
            }
        };
        document.addEventListener('dblclick', dblclickHandler);
        clickToResetHandler = e => {
            if (!ruleParser.nextLinkHref) isLoading = false;
        };
        document.addEventListener('click', clickToResetHandler);
        if (rulesData.dbClick2StopKey) {
            keydownHandler = e => {
                if ((rulesData.dbClick2StopCtrl && !e.ctrlKey) ||
                   (rulesData.dbClick2StopAlt && !e.altKey) ||
                   (rulesData.dbClick2StopShift && !e.shiftKey) ||
                   (rulesData.dbClick2StopMeta && !e.metaKey)) {
                    return;
                }
                if (document.activeElement &&
                    (document.activeElement.tagName.toUpperCase() == 'INPUT' ||
                     document.activeElement.tagName.toUpperCase() == 'TEXTAREA')) {
                    return;
                }
                var key = e.key.toLowerCase();
                if (rulesData.dbClick2StopKey.toLowerCase() == key) {
                    forceState = (forceState == 1 ? 0 : 1);
                    showTips(i18n(forceState == 1 ? "disableSiteTips" : "enableSiteTips"));
                    if (!ruleParser.curSiteRule.url) {
                        storage.setItem("forceState_" + location.host, forceState);
                        location.reload();
                    }
                }
            };
            document.addEventListener('keydown', keydownHandler);
        }
        if (ruleParser.curSiteRule.listenHashChange) {
            hashchangeHandler = () => {
                isPause = true;
                urlChanged = true;
                if (!ruleParser.nextLinkHref) isLoading = false;
            };
            window.addEventListener('hashchange', hashchangeHandler, false);
        }
        let manualMode = typeof ruleParser.curSiteRule.manualMode == 'undefined' ? rulesData.manualMode : ruleParser.curSiteRule.manualMode;
        if (manualMode) {
            manualModeKeyHandler = e => {
                if (document.activeElement &&
                    (document.activeElement.tagName.toUpperCase() == 'INPUT' ||
                     document.activeElement.tagName.toUpperCase() == 'TEXTAREA' ||
                     document.activeElement.contentEditable == 'true')) {
                    return;
                }
                if (e.keyCode == 39) {
                    clickNext();
                } else if (e.keyCode == 37) {
                    history.back();
                }
            };
            document.addEventListener('keydown', manualModeKeyHandler);
            pagetualNextHandler = () => {
                clickNext();
            };
            document.addEventListener('pagetual.next', pagetualNextHandler, false);
            return;
        }
        if (rulesData.arrowToScroll) {
            keyupHandler = e => {
                if (document.activeElement &&
                    (document.activeElement.tagName.toUpperCase() == 'INPUT' ||
                     document.activeElement.tagName.toUpperCase() == 'TEXTAREA' ||
                     document.activeElement.contentEditable == 'true')) {
                    return;
                }
                if (e.keyCode == 39) {
                    let nextPageBar=getPageBar().nextBar;
                    if (nextPageBar) {
                        scrollToPageBar(nextPageBar);
                    } else {
                        let scrollTop = getBody(document).scrollTop || document.documentElement.scrollTop;
                        window.scrollTo({ top: scrollTop + (window.innerHeight || document.documentElement.clientHeight), behavior: 'smooth'});
                    }
                } else if (e.keyCode == 37) {
                    let prePageBar = getPageBar().preBar;
                    if (prePageBar) {
                        scrollToPageBar(prePageBar);
                    } else {
                        let scrollTop = getBody(document).scrollTop || document.documentElement.scrollTop;
                        window.scrollTo({ top: scrollTop - (window.innerHeight || document.documentElement.clientHeight), behavior: 'smooth'});
                    }
                }
            };
            document.addEventListener('keyup', keyupHandler);
        }
        if (!ruleParser.curSiteRule.wheel) {
            document.addEventListener('scroll', scrollHandler, true);
        }
        document.addEventListener('wheel', scrollHandler, true);
    }

    function showTips(content, wordColor, backColor, href) {
        initView();
        getBody(document).appendChild(tipsWords);
        tipsWords.style.opacity = 0.8;
        tipsWords.style.color = wordColor || 0xFFFFFF;
        tipsWords.style.backgroundColor = backColor || 0x000;
        let time = 1000;
        if (href) {
            time = 3000;
            tipsWords.innerHTML = createHTML(`<a href='${href}'>${content}</a>`);
            tipsWords.style.pointerEvents = 'all';
        } else {
            tipsWords.innerHTML = createHTML(content);
        }
        tipsWords.style.marginLeft = -tipsWords.offsetWidth / 2 + "px";
        setTimeout(() => {
            tipsWords.style.marginLeft = -tipsWords.offsetWidth / 2 + "px";
        }, 0);
        setTimeout(() => {
            tipsWords.style.opacity = 0;
            tipsWords.style.pointerEvents = '';
        }, time);
    }

    function getLoadMore(doc, loadmoreBtn) {
        if (!loadmoreBtn || !getBody(doc).contains(loadmoreBtn) || /less/.test(loadmoreBtn.innerText)) loadmoreBtn = null;
        if (!ruleParser.curSiteRule.singleUrl && !ruleParser.curSiteRule.loadMore) return null;
        if (loadmoreBtn) return loadmoreBtn;
        let btnSel = ruleParser.curSiteRule.loadMore || ".loadMore,.LoadMore,.load-more,.button-show-more,button[data-testid='more-results-button'],#btn_preview_remain";
        if (btnSel) {
            loadmoreBtn = getElement(btnSel, doc);
        }
        if (!loadmoreBtn) {
            let buttons = doc.querySelectorAll("input,button,a,div[onclick]"), loadmoreReg = /^\s*(加载更多|加載更多|load\s*more|もっと読み込む)[.…]*\s*$/i;
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];
                if (button.innerText.length > 20) continue;
                if (button && loadmoreReg.test(button.innerText)) {
                    loadmoreBtn = button;
                    break;
                }
            }
        }
        if (loadmoreBtn && !ruleParser.curSiteRule.loadMore && loadmoreBtn.dataset.ajax !== "true") {
            let href = loadmoreBtn.getAttribute("href");
            if (href && href != "/" && !/^(javascript|#)/.test(href.replace(location.href, ""))) {
                loadmoreBtn = null;
            }
        }
        if (loadmoreBtn && /less/.test(loadmoreBtn.innerText)) loadmoreBtn = null;
        return loadmoreBtn;
    }

    function scrollToPageBar(bar){
        let yOffset = -20;
        if (typeof ruleParser.curSiteRule.pageBarTop !== 'undefined') {
            yOffset = -ruleParser.curSiteRule.pageBarTop;
        }
        const y = bar.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth'});
    }

    const pageNumReg=/[&\/\?](p=|page[=\/_-]?)\d+|[_-]\d+\./;
    function createPageBar(url) {
        curPage++;
        let posEle = null;
        let scrollH = Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
        let insert = ruleParser.getInsert();
        if (!insert || !insert.parentNode) return;
        posEle = insert;
        while (posEle && !posEle.offsetParent) {
            posEle = posEle.previousElementSibling || posEle.parentNode;
        }
        if (posEle) {
            let actualBottom = getElementBottom(posEle);
            bottomGap = scrollH - actualBottom + (window.innerHeight || document.documentElement.clientHeight) * (ruleParser.curSiteRule.rate || rulesData.rate || 1);
            if (bottomGap < 100) bottomGap = 100;
        } else {
            bottomGap = 1000;
        }
        if (rulesData.opacity == 0 || ruleParser.curSiteRule.pageBar === 0) return null;
        url = url.replace(/#p{.*/, "");
        let example = ruleParser.curSiteRule.insertPos == 2 ? insert.children[0] : (insert.parentNode.children[0] || insert);
        while (example && (example.tagName.toUpperCase() == "SCRIPT" || example.tagName.toUpperCase() == "STYLE" || example.className == "pagetual_pageBar")) {
            example = example.nextElementSibling;
        }
        if (!example || !example.parentNode) example = insert;
        if (example.nodeType != 1) {
            example = example.previousElementSibling || example.parentNode;
            if (!example || example.nodeType != 1) return;
        }
        let exampleStyle = _unsafeWindow.getComputedStyle(example);
        let inTable, inLi;
        if (forceState == 2) {
            inTable = inLi = false;
        } else {
            inTable = example.parentNode.tagName.toUpperCase() == "TABLE" ||
            example.parentNode.tagName.toUpperCase() == "TBODY" ||
            example.tagName.toUpperCase() == "TR" ||
            example.tagName.toUpperCase() == "TBODY" ||
            exampleStyle.display == "table-row" ||
            (example.nextElementSibling && example.nextElementSibling.tagName.toUpperCase() == "TR") ||
            (example.nextElementSibling && example.nextElementSibling.tagName.toUpperCase() == "TBODY");
            inLi = example.tagName.toUpperCase() == "LI" || (example.nextElementSibling && example.nextElementSibling.tagName.toUpperCase() == "LI");
        }
        let pageBar = document.createElement(inTable ? "tr" : (inLi ? "li" : "div"));
        let upSpan = document.createElement("span");
        let downSpan = document.createElement("span");
        let pageText = document.createElement("a");
        let pageNum;
        pageBar.className = isHideBar ? "pagetual_pageBar hide" : "pagetual_pageBar";
        pageBar.id = "pagetual_pageBar" + curPage;
        pageBar.setAttribute("translate", "no");
        if (isPause) {
            pageBar.classList.add("stop");
        }
        pageBar.style.cssText = pageBarStyle;
        pageBar.title = i18n(isPause ? "enable" : "disable");
        upSpan.innerHTML = upSvg;
        upSpan.children[0].style.cssText = upSvgCSS;
        upSpan.title = i18n("toTop");
        downSpan.innerHTML = downSvg;
        downSpan.children[0].style.cssText = downSvgCSS;
        downSpan.title = i18n("toBottom");
        upSpan.style.cssText = initStyle;
        downSpan.style.cssText = initStyle;
        pageText.href = url;
        pageText.style.cssText = pageTextStyle;
        pageText.title = i18n("current");
        if (openInNewTab == 1) pageText.target = "_blank";
        pageBar.appendChild(upSpan);
        pageBar.appendChild(pageText);
        if (rulesData.pageBarMenu) {
            pageText.addEventListener("click", e => {
                e.stopPropagation();
                if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
                e.preventDefault();
                Picker.getInstance().start();
            });
        }
        let touched = false;
        let touchBodyHandler = e => {
            touched = false;
            getBody(document).removeEventListener('touchstart', touchBodyHandler, { passive: false, capture: false });
        };
        pageText.addEventListener("touchstart", e => {
            if (touched) return;
            touched = true;
            pageText.style.pointerEvents = 'none';
            setTimeout(() => {
                pageText.style.pointerEvents = 'all';
            }, 250);
            getBody(document).addEventListener("touchstart", touchBodyHandler, { passive: false, capture: false });
        }, { passive: false, capture: false });
        if (ruleParser.nextTitle) {
            pageText.innerHTML = ruleParser.nextTitle + " ";
            pageText.title = ruleParser.nextTitle;
        }
        if (ruleParser.curSiteRule.pageNum || pageNumReg.test(url)) {
            pageText.innerHTML += i18n("page");
            pageNum = document.createElement("span");
            pageNum.innerHTML = ruleParser.getPageNumFromUrl(url);
            pageNum.className = "pagetual_pageNum";
            pageNum.title = i18n("inputPageNum");
            pageNum.style.cssText = pageTextStyle;
            pageNum.style.cursor = "pointer";
            pageNum.style.color = "";
            pageNum.style.marginLeft = "5px";
            pageNum.addEventListener("click", e => {
                let pageInput = prompt(i18n("inputPageNum"), "1");
                if (pageInput) {
                    let pageLink = ruleParser.getLinkByPage(url, pageInput);
                    if (pageLink) {
                        _GM_openInTab(pageLink, {active:true});
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });
            pageBar.appendChild(pageNum);
        } else {
            pageText.innerHTML += i18n("page") + curPage;
        }
        let preBtn = document.createElement("span");
        preBtn.innerHTML = "∧";
        preBtn.title = i18n("prevPage");
        preBtn.className = "prevScreen";
        preBtn.style.cssText = "display: none;text-align: center;right: unset; float: left; width: 40px; background: rgba(240, 240, 240, 0.8); position: absolute; z-index: 9999999; box-shadow: rgb(0 0 0 / 50%) 0px -5px 5px; border-radius: 20px 20px 0 0; margin-top: -30px; ";
        let nextBtn = document.createElement("span");
        nextBtn.innerHTML = "∨";
        nextBtn.title = i18n("nextPage");
        nextBtn.className = "nextScreen";
        nextBtn.style.cssText = "display: none;text-align: center;right: unset; float: left; width: 40px; background: rgba(240, 240, 240, 0.8); position: absolute; z-index: 9999999; box-shadow: rgb(0 0 0 / 50%) 0px 5px 5px; border-radius: 0 0 20px 20px; margin-top: 30px; ";
        let localPage = curPage;
        preBtn.addEventListener("click", e => {
            e.stopPropagation();
            e.preventDefault();
            let prePageBar = document.querySelector("#pagetual_pageBar" + (localPage - 1));
            if (prePageBar) {
                scrollToPageBar(prePageBar);
            } else {
                let scrollTop = getBody(document).scrollTop || document.documentElement.scrollTop;
                window.scrollTo({ top: scrollTop - (window.innerHeight || document.documentElement.clientHeight), behavior: 'smooth'});
            }
        });
        nextBtn.addEventListener("click", e => {
            e.stopPropagation();
            e.preventDefault();
            let nextPageBar = document.querySelector("#pagetual_pageBar" + (localPage + 1));
            if (nextPageBar) {
                scrollToPageBar(nextPageBar);
            } else {
                scrollH = Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
                window.scrollTo({ top: scrollH || 9999999, behavior: 'smooth'});
            }
        });
        if (!rulesData.hideBarArrow) {
            pageText.insertBefore(preBtn, pageText.firstChild);
            pageText.insertBefore(nextBtn, pageText.firstChild);
        }
        pageBar.appendChild(downSpan);
        if (forceState == 2) {
            pageBar.style.width = "99%";
        } else {
            let parentStyle = _unsafeWindow.getComputedStyle(example.parentNode);
            let parentWidth = example.parentNode.offsetWidth || parseInt(parentStyle.width);
            pageBar.style.width = parentWidth - parseInt(parentStyle.paddingLeft) - parseInt(parentStyle.paddingRight) - 10 + "px";
            pageBar.style.margin = '10px 5px';
            if (parentStyle.display == "grid" || parentStyle.display == "inline-grid") {
                pageBar.style.gridColumn = "1/-1";
            }
            if (inTable) {
                example = (example.tagName.toUpperCase() == "TR" || example.tagName.toUpperCase() == "TBODY") ? example : example.nextElementSibling || example;
                if (example.tagName.toUpperCase() == "TBODY") example = example.querySelector("tr");
                let nextTr = example;
                while (nextTr && nextTr.children.length == 0) nextTr = nextTr.nextElementSibling;
                if (nextTr) example = nextTr;
                let tdNum = 0;
                if (exampleStyle.display == "table-row") {
                    [].forEach.call(example.children, el => {
                        tdNum += el.colSpan || 1;
                    });
                } else {
                    [].forEach.call(example.children, el => {
                        if (el.tagName.toUpperCase() == "TD" || el.tagName.toUpperCase() == "TH") {
                            tdNum += el.colSpan || 1;
                        }
                    });
                }
                pageBar.style.display = "table-row";
                pageBar.style.backgroundColor = "unset";
                pageBar.style.lineHeight = "20px";
                pageBar.style.boxShadow = "";
                //pageBar.style.height="35px";
                let td = document.createElement("td");
                td.colSpan = tdNum || 1;
                let inTd = document.createElement("div");
                inTd.style.backgroundColor = "rgb(240 240 240 / 80%)";
                inTd.style.borderRadius = "20px";
                inTd.style.padding = "0 0";
                inTd.style.margin = "0";
                inTd.style.lineHeight = "20px";
                inTd.style.textAlign = "center";
                inTd.style.boxShadow = "rgb(0 0 0 / 67%) 0px 0px 10px 0px";
                inTd.appendChild(upSpan);
                inTd.appendChild(pageText);
                if (pageNum) inTd.appendChild(pageNum);
                inTd.appendChild(downSpan);
                td.appendChild(inTd);
                pageBar.appendChild(td);
            } else if(inLi) {
                example = example.tagName.toUpperCase() == "LI" ? example : example.nextElementSibling || example;
                pageBar.style.display = getComputedStyle(example).display;
                pageBar.style.backgroundColor = "unset";
                pageBar.style.lineHeight = "20px";
                pageBar.style.boxShadow = "";
                pageBar.style.maxWidth = "unset";
                pageBar.style.flex = "auto";
                //pageBar.style.height="35px";
                let td = document.createElement("td");
                td.colSpan = example.children.length;
                td.style.width = '100%';
                let inTd = document.createElement("div");
                inTd.style.backgroundColor = "rgb(240 240 240 / 80%)";
                inTd.style.borderRadius = "20px";
                inTd.style.margin = "0"
                inTd.style.padding = "0 0";
                inTd.style.textAlign = "center";
                inTd.style.minWidth = "150px";
                inTd.appendChild(upSpan);
                inTd.appendChild(pageText);
                inTd.style.width = 'calc(100% - 20px)';
                inTd.style.boxShadow = "rgb(0 0 0 / 67%) 0px 0px 10px 0px";
                if (pageNum) inTd.appendChild(pageNum);
                inTd.appendChild(downSpan);
                if (pageBar.style.display === 'table-row') {
                    td.appendChild(inTd);
                    pageBar.appendChild(td);
                } else {
                    inTd.style.width = '100%';
                    pageBar.appendChild(inTd);
                }
            }
        }

        upSpan.addEventListener("click", e => {
            getBody(document).scrollTop = 0;
            document.documentElement.scrollTop = 0;
            e.preventDefault();
            e.stopPropagation();
        });
        downSpan.addEventListener("click", e => {
            changeStop(true);
            pageBar.title = i18n(isPause ? "enable" : "disable");
            scrollH=Math.max(document.documentElement.scrollHeight, getBody(document).scrollHeight);
            getBody(document).scrollTop = scrollH || 9999999;
            document.documentElement.scrollTop = scrollH || 9999999;
            e.preventDefault();
            e.stopPropagation();
        });
        pageBar.addEventListener("click", e => {
            changeStop(!isPause);
            pageBar.title = i18n(isPause ? "enable" : "disable");
        });
        ruleParser.insertElement(pageBar);
        if (ruleParser.curSiteRule.pageBar && ruleParser.curSiteRule.pageBar !== 0) {
            try {
                ((typeof _unsafeWindow.pagetualPageBar == 'undefined') ? Function("pageBar",'"use strict";' + ruleParser.curSiteRule.pageBar) : _unsafeWindow.pagetualPageBar)(pageBar);
            } catch(e) {
                debug(e);
            }
        }

        return pageBar;
    }

    function emuClick(btn) {
        let orgHref = btn.getAttribute('href');
        if (orgHref && orgHref != "#") {
            btn.setAttribute('href', orgHref.replace(/#$/,""));
        }
        if (!PointerEvent) return btn.click();
        let eventParam = {
            isTrusted: true,
            altKey: false,
            azimuthAngle: 0,
            bubbles: true,
            button: 0,
            buttons: 0,
            clientX: 1,
            clientY: 1,
            cancelBubble: false,
            cancelable: true,
            composed: true,
            ctrlKey: false,
            defaultPrevented: false,
            detail: 1,
            eventPhase: 2,
            fromElement: null,
            height: 1,
            isPrimary: false,
            metaKey: false,
            pointerId: 1,
            pointerType: "mouse",
            pressure: 0,
            relatedTarget: null,
            returnValue: true,
            shiftKey: false,
            toElement: null,
            twist: 0,
            which: 1
        };
        let mouseEvent = new PointerEvent("mousedown", eventParam);
        btn.dispatchEvent(mouseEvent);
        mouseEvent = new PointerEvent("mouseup", eventParam);
        btn.dispatchEvent(mouseEvent);
        let dispatchTouchEvent = (ele, type) => {
            let touchEvent;
            try {
                touchEvent = document.createEvent('TouchEvent')
                touchEvent.initTouchEvent(type, true, true)
            } catch (err) {
                try {
                    touchEvent = document.createEvent('UIEvent')
                    touchEvent.initUIEvent(type, true, true)
                } catch (err) {
                    touchEvent = document.createEvent('Event')
                    touchEvent.initEvent(type, true, true)
                }
            }
            if (touchEvent) {
                try {
                    touchEvent.targetTouches = [{
                        pageX: 1,
                        pageY: 1,
                        clientX: 1,
                        clientY: 1,
                        target: btn
                    }];
                    touchEvent.touches = [{
                        pageX: 1,
                        pageY: 1,
                        clientX: 1,
                        clientY: 1,
                        target: btn
                    }];
                    touchEvent.changedTouches = [{
                        pageX: 1,
                        pageY: 1,
                        clientX: 1,
                        clientY: 1,
                        target: btn
                    }];
                } catch (err) {}
                ele.dispatchEvent(touchEvent);
            }
        }
        dispatchTouchEvent(btn, "touchstart");
        dispatchTouchEvent(btn, "touchend");

        btn.click();
        if (orgHref && orgHref != "#") {
            setTimeout(() => btn.setAttribute('href', orgHref), 0);
        }
    }

    var failFromIframe = 0;
    var inCors = false;
    var checkRemoveIntv;
    function requestFromIframe(url, callback){
        if (location.protocol === 'https:' && !/^https:/.test(url)) {
            showTips(i18n("noValidContent"), "", "", url);
        }
        url = url.indexOf('=') == -1 ? url.replace(/#[^#]*/,"") : url;
        let iframe = document.createElement('iframe');
        iframe.name = 'pagetual-iframe';
        iframe.width = '100%';
        iframe.height = '1000';
        iframe.frameBorder = '0';
        if (ruleParser.curSiteRule.sandbox != false) {
            iframe.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
        }
        iframe.style.cssText = 'margin:0!important;padding:0!important;visibility:hidden!important;flex:0;opacity:0!important;pointer-events:none!important;position:fixed;top:0px;left:0px;z-index:-2147483647;';
        let waitTime = 100, checkEval;
        if (ruleParser.curSiteRule.waitElement) {
            checkEval = doc => {
                return ruleParser.waitElement(doc);
            };
        } else if (ruleParser.curSiteRule.wait) {
            if (isNaN(ruleParser.curSiteRule.wait)) {
                try {
                    checkEval = (typeof _unsafeWindow.pagetualWait == 'undefined') ? Function("doc",'"use strict";' + ruleParser.curSiteRule.wait) : _unsafeWindow.pagetualWait;
                } catch(e) {
                    debug(e);
                }
            } else {
                waitTime = ruleParser.curSiteRule.wait;
            }
        }
        if (checkRemoveIntv) clearInterval(checkRemoveIntv);
        checkRemoveIntv = setInterval(() => {
            if (!iframe || !getBody(document).contains(iframe)) {
                clearInterval(checkRemoveIntv);
                loadPageOver();
            }
        }, 500);
        let loadedHandler = e => {
            if (e.data != 'pagetual-iframe:DOMLoaded' && e.type != 'load') return;
            clearInterval(checkRemoveIntv);
            window.removeEventListener('message', loadedHandler, false);
            iframe.removeEventListener('load', loadedHandler, false);
            let tryTimes = 0;
            function checkIframe() {
                if (urlChanged || isPause) {
                    return callback(false, false);
                }
                try {
                    let doc = iframe.contentDocument || iframe.contentWindow.document;
                    let base = doc.querySelector("base");
                    ruleParser.basePath = base ? base.href : url;
                    let eles = ruleParser.getPageElement(doc, iframe.contentWindow);
                    if (checkEval && !checkEval(doc)) {
                        setTimeout(() => {
                            checkIframe();
                        }, waitTime);
                        return;
                    } else if (eles && eles.length > 0) {
                        callback(doc, eles);
                    } else if (tryTimes++ < 100) {
                        setTimeout(() => {
                            checkIframe();
                        }, waitTime);
                        return;
                    } else {
                        if (failFromIframe++ > 2) {
                            failFromIframe = 0;
                            debug("Stop as failFromIframe");
                            isPause = true;
                            callback(false, false);
                        } else {
                            showTips(i18n("noValidContent"), "", "", url);
                            callback(false, false);
                        }
                    }
                } catch(e) {
                    inCors = true;
                    if (forceState === 3) {
                        debug("Stop as cors");
                        isPause = true;
                    }
                    if (!ruleParser.curSiteRule.pageElement) {
                        ruleParser.curSiteRule.pageElement = allOfBody;
                        ruleParser.getInsert(true);
                    }
                    ruleParser.curSiteRule.action = 0;
                    ruleParser.nextLinkHref = url;
                    callback(false, false);
                    nextPage();
                }
                if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
            }
            setTimeout(() => {
                checkIframe();
            },waitTime);
        };
        window.addEventListener('message', loadedHandler, false);
        iframe.addEventListener('load', loadedHandler, false);
        iframe.src = url;
        try {
            getBody(document).appendChild(iframe);
        } catch (e) {
            return callback(false, false);
        }
    }

    var emuIframe, lastActiveUrl, orgContent, meetCors = false;
    function emuPage(callback) {
        let orgPage = null, preContent = null, iframeDoc, times = 0, loadmoreBtn, pageEle, nextLink, loadmoreEnd = false, waitTimes = 80, changed = false;
        function returnFalse(log) {
            debug(log);
            isPause = true;
            callback(false, false);
            if (emuIframe && emuIframe.parentNode) {
                emuIframe.parentNode.removeChild(emuIframe);
                emuIframe = null;
            }
        }
        async function checkPage() {
            if (isPause) return loadPageOver();
            try {
                iframeDoc = emuIframe.contentDocument || emuIframe.contentWindow.document;
            } catch(e) {
                returnFalse("Stop as cors");
                return;
            }

            let waitTime = 200, checkEval;
            if (ruleParser.curSiteRule.waitElement) {
                checkEval = doc => {
                    return ruleParser.waitElement(doc);
                };
            } else if(ruleParser.curSiteRule.wait) {
                if (isNaN(ruleParser.curSiteRule.wait)) {
                    try {
                        checkEval = (typeof _unsafeWindow.pagetualWait == 'undefined') ? Function("doc", '"use strict";' + ruleParser.curSiteRule.wait) : _unsafeWindow.pagetualWait;
                    } catch(e) {
                        debug(e);
                    }
                } else {
                    waitTime = ruleParser.curSiteRule.wait;
                }
            }

            if (!orgPage) {
                if (!loadmoreEnd) {
                    loadmoreBtn = getLoadMore(iframeDoc);
                    if (loadmoreBtn && isVisible(loadmoreBtn, iframeDoc.defaultView)) {
                        emuClick(loadmoreBtn);
                        let intv = setInterval(() => {
                            loadmoreBtn = getLoadMore(iframeDoc);
                            if (!loadmoreBtn || !getBody(document).contains(loadmoreBtn) || !isVisible(loadmoreBtn, iframeDoc.defaultView)) {
                                clearInterval(intv);
                                loadmoreEnd = true;
                                setTimeout(() => {
                                    checkPage();
                                }, 500);
                            } else if (isInViewPort(loadmoreBtn)) {
                                emuClick(loadmoreBtn);
                            }
                        }, 200);
                        return;
                    } else {
                        loadmoreEnd = true;
                    }
                }
                if (checkEval && !checkEval(iframeDoc)) {
                    waitTimes = 50;
                    setTimeout(() => {
                        checkPage();
                    }, waitTime);
                    return;
                } else {
                    nextLink = await ruleParser.getNextLink(iframeDoc);
                    pageEle = ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView, true);
                    if (!pageEle || pageEle.length==0 || !nextLink) {
                        if (waitTimes-- > 0) {
                            setTimeout(() => {
                                checkPage();
                            }, waitTime);
                            return;
                        }
                    }
                }
                if (!pageEle || pageEle.length == 0) {
                    returnFalse("Stop as no page when emu");
                    return;
                }
                if (pageEle[0].tagName.toUpperCase() == "UL") pageEle = pageEle[0].children;
                pageEle = pageEle[parseInt(pageEle.length / 2)];
                while(pageEle && !pageEle.offsetParent) {
                    if (pageEle.nextElementSibling) pageEle = pageEle.nextElementSibling;
                    else break;
                }
                if (ruleParser.curSiteRule.singleUrl && orgContent != pageEle.innerHTML) {
                    orgContent = pageEle.innerHTML;
                    if (waitTimes-- > 0) {
                        setTimeout(() => {
                            checkPage();
                        }, waitTime);
                        return;
                    }
                }
                orgPage = pageEle;
                if (nextLink) {
                    if (orgPage.tagName.toUpperCase() == "IMG") {
                        if (!ruleParser.curSiteRule.lazyImgSrc) ruleParser.curSiteRule.lazyImgSrc = "0";
                        if (orgPage.src) {
                            orgContent = orgPage.src;
                        } else {
                            setTimeout(() => {
                                checkPage();
                            }, 500);
                            return;
                        }
                    } else {
                        orgContent = orgPage.innerHTML;
                    }
                    preContent = orgContent;
                    if (!isVisible(nextLink, iframeDoc.defaultView)) {
                        returnFalse("Stop as next hide when emu");
                    } else {
                        emuClick(nextLink);
                        setTimeout(() => {
                            checkPage();
                        }, 500);
                    }
                } else {
                    returnFalse("Stop as no next when emu");
                }
                return;
            }
            if (!ruleParser.checkStopSign(nextLink, iframeDoc)) return returnFalse("Stop as stopSign");;
            if (times++ > 200) {
                returnFalse("Stop as timeout when emu");
                return;
            }
            let eles = ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView, true), checkItem;
            if (eles && eles.length > 0) {
                checkItem = eles;
                if (eles[0].tagName.toUpperCase() == "UL") checkItem = eles[0].children;
                checkItem = checkItem[parseInt(checkItem.length / 2)];
                while(checkItem && !checkItem.offsetParent) {
                    if (checkItem.nextElementSibling) checkItem = checkItem.nextElementSibling;
                    else break;
                }
            }
            if (!checkItem || (checkEval && !checkEval(iframeDoc))) {
                if (checkEval) times = 0;
                setTimeout(() => {
                    checkPage();
                }, waitTime);
            } else {
                let checkInner;
                if (checkItem.tagName.toUpperCase() == "IMG") {
                    if (checkItem.src) {
                        checkInner = checkItem.src;
                    } else {
                        setTimeout(() => {
                            checkPage();
                        }, waitTime);
                        return;
                    }
                } else {
                    checkInner = checkItem.innerHTML;
                }
                if (orgPage != checkItem || checkInner != preContent) {
                    changed = true;
                    orgPage = checkItem;
                    preContent = checkInner;
                    setTimeout(() => {
                        checkPage();
                    }, waitTime);
                } else if (changed) {
                    times = 0;
                    if (orgContent == preContent && (ruleParser.curSiteRule.singleUrl || ruleParser.curSiteRule.stopSame)) {
                        returnFalse("Stop as same content");
                    } else {
                        orgContent = preContent;
                        callback(iframeDoc, eles);
                    }
                } else {
                    if (times % 10 === 1) {
                        if (!nextLink || !nextLink.offsetParent) {
                            nextLink = await ruleParser.getNextLink(iframeDoc);
                        }
                        if (nextLink) {
                            emuClick(nextLink);
                        }
                    }
                    setTimeout(() => {
                        checkPage();
                    }, waitTime);
                }
            }
        }
        if (!emuIframe) {
            let loaded = false;
            emuIframe = document.createElement('iframe');
            emuIframe.name = 'pagetual-iframe';
            let notSetSandbox = typeof ruleParser.curSiteRule.sandbox == 'undefined';
            if (notSetSandbox || ruleParser.curSiteRule.sandbox == true) {
                emuIframe.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
            } else if (ruleParser.curSiteRule.sandbox) {
                emuIframe.sandbox = ruleParser.curSiteRule.sandbox;
            }
            emuIframe.width = '100%';
            emuIframe.height = '100%';
            emuIframe.frameBorder = '0';
            emuIframe.style.cssText = 'margin:0!important;padding:0!important;flex:0;opacity:0!important;pointer-events:none!important;position:fixed;top:0px;left:0px;z-index:-2147483647;';
            emuIframe.addEventListener("load", e => {
                setTimeout(() => {
                    try {
                        iframeDoc = emuIframe.contentDocument || emuIframe.contentWindow.document;
                    } catch(e) {
                        if (e.message && e.message.indexOf("cross-origin") != -1 && notSetSandbox && emuIframe.hasAttribute("sandbox")) {
                            emuIframe.removeAttribute("sandbox");
                            meetCors = true;
                            callback(false, false);
                        } else {
                            returnFalse("Stop as cors");
                        }
                        return;
                    }
                    meetCors = false;
                    let code = ruleParser.curSiteRule.init;
                    if (code) {
                        try {
                            Function('doc','win','iframe','"use strict";' + code)(iframeDoc, iframeDoc.defaultView, emuIframe);
                        } catch(e) {
                            debug(e);
                        }
                    }
                    if (loaded) return;
                    loaded = true;
                    checkPage();
                }, 500);
            });
            if (!lastActiveUrl) lastActiveUrl = location.href;
            emuIframe.src = lastActiveUrl;
            getBody(document).appendChild(emuIframe);
        } else {
            if (emuIframe.src != lastActiveUrl || meetCors) {
                emuIframe.src = lastActiveUrl;
                return;
            }
            checkPage();
        }
    }

    var scrollToResizeInited = false;
    var resizePool = [];
    var scrollingToResize = false;

    function isTouchViewPort(element) {
        const viewWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        const {
            top,
            right,
            bottom,
            left,
        } = element.getBoundingClientRect();

        return (
            top < viewHeight &&
            left < viewWidth &&
            right > 0 &&
            bottom > 0
        );
    }

    function resizeIframe(iframe, frameDoc, pageEle) {
        if (ruleParser.curSiteRule.singleUrl || forceState === 2) {
            iframe.style.height = (getBody(frameDoc).scrollHeight || getBody(frameDoc).offsetHeight || 500) + "px";
            iframe.style.minHeight = iframe.style.height;
            iframe.style.width = "100%";
            frameDoc.documentElement.scrollTop = 0;
            frameDoc.documentElement.scrollLeft = 0;
        } else {
            if (pageEle) {
                let fitWidth = ruleParser.curSiteRule.fitWidth !== false;
                let targetElement = pageEle[0];
                if (!targetElement) return;
                if (pageEle.length > 1) {
                    targetElement = targetElement.parentNode;
                }
                let scrollHeight = targetElement.scrollHeight || targetElement.offsetHeight || 500;
                iframe.style.height = scrollHeight + "px";
                let scrollTop = 0, scrollLeft = 0;
                getBody(frameDoc).scrollTop = 0;
                getBody(frameDoc).scrollLeft = 0;
                while (targetElement && targetElement.offsetParent) {
                    targetElement.offsetParent.scrollTop = targetElement.offsetTop;
                    if (targetElement.offsetParent.scrollTop == 0) {
                        scrollTop += targetElement.offsetTop;
                    }
                    if (fitWidth) {
                        targetElement.offsetParent.scrollLeft = targetElement.offsetLeft;
                        if (targetElement.offsetParent.scrollLeft == 0) {
                            scrollLeft += targetElement.offsetLeft;
                        }
                    }
                    targetElement = targetElement.offsetParent;
                }
                frameDoc.documentElement.scrollTop = scrollTop;
                frameDoc.documentElement.scrollLeft = scrollLeft;
                if (frameDoc.documentElement.scrollTop == 0 && frameDoc.documentElement.scrollLeft == 0) {
                    getBody(frameDoc).scrollTop += scrollTop;
                    getBody(frameDoc).scrollLeft += scrollLeft;
                }
                if (!fitWidth && iframe.style.marginLeft == '0px') {
                    iframe.style.width = "100vw";
                    iframe.style.marginLeft = -iframe.getBoundingClientRect().left + "px";
                }
            }
        }
    }

    function scrollToResize(e) {
        if (scrollingToResize) return;
        else {
            scrollingToResize = true;
            let resizeHandler = () => {
                let touched = 0;
                for (let i in resizePool) {
                    let resizeArr = resizePool[i];
                    let iframe = resizeArr[1]();
                    if (isTouchViewPort(iframe)) {
                        touched++;
                        let pageEle = resizeArr[0]();
                        let frameDoc = resizeArr[2]();
                        resizeIframe(iframe, frameDoc, pageEle);
                    } else if (touched) {
                        if (touched == 1) {
                            let pageEle = resizeArr[0]();
                            let frameDoc = resizeArr[2]();
                            resizeIframe(iframe, frameDoc, pageEle);
                        }
                        break;
                    } else if (!iframe.parentNode) {
                        resizePool.splice(i, 1);
                        break;
                    }
                }
            };
            setTimeout(() => {
                scrollingToResize = false;
            }, 300);
            resizeHandler();
        }
    }

    function forceIframe(url, callback) {
        url = url.indexOf('=') == -1 ? url.replace(/#[^#]*/,"") : url;
        let curIframe = document.createElement('iframe'), iframeDoc, pageElement = null, isloaded = false, inAction = true;
        let loadedHandler = () => {
            inAction = false;
            let getPageEle = () => {
                if (ruleParser.curSiteRule.singleUrl) {
                    return null;
                } else {
                    if (!pageElement || pageElement.length === 0 || !pageElement[0].offsetParent) {
                        pageElement = ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView);
                    }
                    return pageElement;
                }
            };
            resizeIframe(curIframe, iframeDoc, getPageEle());
            if (isloaded) return;
            isloaded = true;
            let getIframe = () => {
                return curIframe;
            };
            let getFrameDoc = () => {
                return iframeDoc;
            };
            ruleParser.insertPage(iframeDoc, [], url, ele => {
                callback(curIframe);
            }, true);
            resizePool.push([getPageEle, getIframe, getFrameDoc]);
        };
        let checkIframeTimer = setInterval(() => {
            if (!curIframe.parentNode) {
                clearInterval(checkIframeTimer);
                return isloaded || callback(false);
            }
        }, 500);
        curIframe.name = 'pagetual-iframe';
        curIframe.sandbox = "allow-same-origin allow-scripts allow-popups allow-forms";
        curIframe.frameBorder = '0';
        curIframe.scrolling = "no";
        curIframe.style.cssText = 'display: block; visibility: visible; float: none; clear: both; width: 100%; height: 0; background: initial; border: 0px; border-radius: 0px; margin: 0px; padding: 0px; z-index: 2147483647;content-visibility: auto;contain-intrinsic-size: auto 300px;';
        curIframe.addEventListener("load", e => {
            clearInterval(checkIframeTimer);
            try {
                iframeDoc = curIframe.contentDocument || curIframe.contentWindow.document;
            } catch(e) {
                debug("Stop as cors");
                isPause = true;
                callback(false);
                return;
            }
            let css = ruleParser.curSiteRule.css || rulesData.customCss;
            if (css) {
                css = css.replace(/^inIframe:/, "");
                let styleEle=iframeDoc.createElement("style");
                styleEle.innerHTML=css;
                iframeDoc.head.appendChild(styleEle);
            }
            loadedHandler();
            let code = ruleParser.curSiteRule.init;
            if (code) {
                try {
                    Function('doc','win','iframe','"use strict";' + code)(iframeDoc,iframeDoc.defaultView,curIframe);
                } catch(e) {
                    debug(e);
                }
            }
        });
        let checkTimes = 0, findPageEle = false;
        let forceRefresh = e => {
            if (inAction || !iframeDoc) return;
            inAction = true;
            let foundNext = () => {
                document.removeEventListener("scroll", forceRefresh);
            }
            setTimeout(async () => {
                inAction = false;
                if (!ruleParser.nextLinkHref) {
                    checkTimes++;
                    await ruleParser.getNextLink(iframeDoc);
                    if (ruleParser.nextLinkHref) {
                        foundNext();
                        if (isLoading) isLoading = false;
                    } else if (checkTimes >= 10) {
                        foundNext();
                    } else if (checkTimes >= 3 && !findPageEle) {
                        if (!pageElement) pageElement = ruleParser.getPageElement(iframeDoc, iframeDoc.defaultView);
                        if (!pageElement) {
                            inAction = true;
                            curIframe.contentWindow.location.reload();
                        } else {
                            findPageEle = true;
                        }
                    }
                } else {
                    foundNext();
                }
            }, 100);
        };
        document.addEventListener("scroll", forceRefresh);
        curIframe.src = url;
        let insert = ruleParser.getInsert();
        if (ruleParser.curSiteRule.singleUrl || forceState == 2) {
            getBody(document).appendChild(loadingDiv);
            getBody(document).appendChild(curIframe);
        } else {
            ruleParser.insertElement(curIframe);
        }

        if (!scrollToResizeInited) {
            scrollToResizeInited = true;
            document.addEventListener("scroll", scrollToResize);
        }
        return curIframe;
    }

    function loadPageOver(){
        isLoading = false;
        stopScroll = true;
        let dist = distToBottom();
        let rate = (ruleParser.curSiteRule.rate || rulesData.rate || 1);
        if (rate != 1 && !clickMode) {
            setTimeout(() => {
                if (dist < bottomGap) {
                    nextPage();
                }
            }, 1);
        }
        setTimeout(() => {stopScroll = false}, 300);
        if(loadingDiv.parentNode){
            loadingDiv.parentNode.removeChild(loadingDiv);
        }
    }

    function checkAutoLoadNum() {
        if (autoLoadNum >= 0) {
            if (autoLoadNum != 0 && --autoLoadNum == 0) {
                autoLoadNum = -1;
            } else {
                setTimeout(() => nextPage(), 1);
            }
        }
    }

    var tryTimes = 0;
    async function nextPage() {
        if (typeof ruleParser.curSiteRule.manualMode == 'undefined' ? rulesData.manualMode : ruleParser.curSiteRule.manualMode) return;
        if (clickMode) return;
        if (isPause || isLoading || forceState == 1) return;
        if (ruleParser.curSiteRule.delay) {
            try {
                let checkDelay = ((typeof _unsafeWindow.pagetualDelay=='undefined') ? Function('"use strict";' + ruleParser.curSiteRule.delay) : _unsafeWindow.pagetualDelay)();
                if (!checkDelay) return;
            } catch(e) {
                debug(e);
            }
        }
        let nextLink = ruleParser.nextLinkHref;
        if (!nextLink) {
            isLoading = true;
            if (curPage == 1) {
                await ruleParser.getNextLink(document);
                nextLink = ruleParser.nextLinkHref;
            }
            if (!nextLink) {
                if (curPage == 1 && (ruleParser.curSiteRule.pinUrl || tryTimes++ <= 10)) {
                    setTimeout(() => {isLoading = false}, 500);
                }
                return;
            }
            isLoading = false;
        }
        let pvGallery = document.querySelector("span.pv-gallery-container");
        if (pvGallery && pvGallery.style.display != "none") return;
        let insert = ruleParser.getInsert();
        if (insert) {
            if (curPage == 1) initView();
            SideController.setup();
            /*if (curPage == 1) {
                window.postMessage({
                    insert: geneSelector(ruleParser.curSiteRule.insertPos == 2 ? insert : insert.parentNode, true),
                    command: 'pagetual.insert'
                }, '*');
            }*/
            let isJs = ruleParser.curSiteRule.action == 3 || /^(javascript|#)/.test(nextLink.replace(location.href, ""));
            if (!isJs) {
                emuIframe = null;
                lastActiveUrl = nextLink;
                if (location.protocol == "https:" && /^http:/.test(nextLink)) {
                    nextLink = nextLink.replace(/^http/, "https");
                }
            }
            isLoading = true;
            ruleParser.insertElement(loadingDiv);
            let parent = loadingDiv.parentNode;
            if (parent.tagName.toUpperCase() == "TBODY") {
                parent = parent.parentNode;
            }
            if (parent.tagName.toUpperCase() == "TABLE") {
                parent.parentNode.appendChild(loadingDiv);
            }
            loadingDiv.style.cssText = loadingCSS;
            if (curPage == 1 && isJs && ruleParser.curSiteRule.singleUrl) {
                loadingDiv.style.display = "none";
            }
            let sleep = ruleParser.curSiteRule.sleep || 0;
            setTimeout(() => {
                if (ruleParser.curSiteRule.pageElementByJs) {
                    var over = eles => {
                        loadPageOver();
                        if (urlChanged || isPause) return;
                        if (eles) {
                            ruleParser.insertPage(document, eles, nextLink, () => {
                                createPageBar(nextLink);
                                checkAutoLoadNum();
                            }, true);
                        } else {
                            debug("Stop as no page when get by js");
                            isPause = true;
                        }
                    };
                    try {
                        ((typeof _unsafeWindow.pagetualPageElementByJs == 'undefined') ? Function("over", "pageNum",'"use strict";' + ruleParser.curSiteRule.pageElementByJs) : _unsafeWindow.pagetualPageElementByJs)(over, curPage);
                    } catch(e) {
                        debug(e);
                    }
                } else if ((forceState == 2 || ruleParser.curSiteRule.action == 2) && !isJs) {
                    forceIframe(nextLink, (iframe) => {
                        loadPageOver();
                        if (urlChanged || isPause) return;
                        let pageBar = createPageBar(nextLink);
                        if (pageBar && iframe && iframe.parentNode) iframe.parentNode.insertBefore(pageBar, iframe);
                        checkAutoLoadNum();
                    });
                } else if ((forceState == 3 || ruleParser.curSiteRule.action == 1) && !isJs) {
                    requestFromIframe(nextLink, (doc, eles) => {
                        loadPageOver();
                        if (urlChanged || isPause) return;
                        if (eles) {
                            ruleParser.insertPage(doc, eles, nextLink, () => {
                                createPageBar(nextLink);
                                checkAutoLoadNum();
                            }, true);
                        }
                    });
                } else {
                    if (!isJs) {
                        requestDoc(nextLink, (eles) => {
                            loadPageOver();
                            if (urlChanged || isPause) return;
                            if (eles) {
                                createPageBar(nextLink);
                                checkAutoLoadNum();
                            }
                        });
                    } else {
                        emuPage((doc, eles) => {
                            loadPageOver();
                            if (urlChanged || isPause) return;
                            if (eles) {
                                ruleParser.insertPage(doc, eles, "", () => {
                                    createPageBar(nextLink);
                                    checkAutoLoadNum();
                                }, true);
                            }
                        });
                    }
                }
            },sleep);
        }
    }

    function init() {
        if (document.readyState == 'loading' || document.readyState == 'uninitialized') {
            let domReady = e => {
                initRules(() => {
                    initPage();
                });
                document.removeEventListener("DOMContentLoaded", domReady, false);
            }
            document.addEventListener("DOMContentLoaded", domReady, false);
        } else {
            initRules(() => {
                initPage();
            });
        }
    }

    function visibilitychangeHandler() {
        document.removeEventListener('visibilitychange', visibilitychangeHandler);
        init();
    }

    setTimeout(() => {
        if (document.hidden) {
            document.addEventListener('visibilitychange', visibilitychangeHandler);
        } else {
            init();
        }
    }, 300);
})();
