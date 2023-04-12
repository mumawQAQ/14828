// ==UserScript==
// @name         Video Speed Buttons
// @description  Add speed buttons to any HTML5 <video> element. Comes with a loader for YouTube and Vimeo
// @namespace    bradenscode
// @version      1.0.9.2
// @copyright    2017, Braden Best
// @run-at       document-end
// @author       Braden Best
// @grant        none
//
// @match        *://*.youtube.com/*
// @match        *://*.vimeo.com/*
// ==/UserScript==

// warning: vimeo support is broken. A fix will be added in a future patch

// To add a new site: add a @match above, and modify loader_data.container_candidates near the bottom

function video_speed_buttons(anchor, video_el){
    if(!anchor || !video_el)
        return null;

    const COLOR_SELECTED = "#FF5500",
        COLOR_NORMAL = "grey",
        BUTTON_SIZE = "120%",
        DEFAULT_SPEED = 1.0,
        LABEL_TEXT = "Video Speed: ",
        ALLOW_EXTERNAL_ACCESS = false;

    const BUTTON_TEMPLATES = [
        ["25%",    0.25],
        ["50%",    0.5],
        ["Normal", 1],
        ["1.5x",   1.5],
        ["2x",     2],
        ["3x",     3],
        ["4x",     4],
        ["8x",     8],
        ["16x",    16]
    ];

    const buttons = {
        head:      null,
        selected:  null,
        last:      null
    };

    const keyboard_controls = [
        ["-", "Speed Down", function(ev){
            if(is_comment_box(ev.target))
                return false;

            (buttons.selected || buttons.head)
                .getprev()
                .el
                .dispatchEvent(new MouseEvent("click"));
        }],
        ["+", "Speed Up", function(ev){
            if(is_comment_box(ev.target))
                return false;

            (buttons.selected || buttons.head)
                .getnext()
                .el
                .dispatchEvent(new MouseEvent("click"));
        }],
        ["*", "Reset Speed", function(ev){
            let selbtn = buttons.head;
            let result = null;

            if(is_comment_box(ev.target))
                return false;

            while(selbtn !== null && result === null)
                if(selbtn.speed === DEFAULT_SPEED)
                    result = selbtn;
                else
                    selbtn = selbtn.next;

            if(result === null)
                result = buttons.head;

            result.el.dispatchEvent(new MouseEvent("click"));
        }],
        ["?", "Show Help", function(ev){
            let infobox;

            if(is_comment_box(ev.target))
                return false;

            (infobox = Infobox(container))
                .log("Keyboard Controls (click to close)<br>");

            keyboard_controls.forEach(function([key, description]){
                infobox.log(`    [${key}]  ${description}<br>`);
            });
        }]
    ];

    const container = (function(){
        let div = document.createElement("div");
        let prev_node = null;

        div.className = "vsb-container";
        div.style.borderBottom = "1px solid #ccc";
        div.style.marginBottom = "10px";
        div.style.paddingBottom = "10px";
        div.appendChild(SpeedButtonLabel(LABEL_TEXT));

        BUTTON_TEMPLATES.forEach(function(button){
            let speedButton = SpeedButton(...button, div);

            if(buttons.head === null)
                buttons.head = speedButton;

            if(prev_node !== null){
                speedButton.prev = prev_node;
                prev_node.next = speedButton;
            }

            prev_node = speedButton;

            if(speedButton.speed == DEFAULT_SPEED)
                speedButton.select();
        });

        return div;
    })();

    function is_comment_box(el){
        const candidate = [
            ".comment-simplebox-text",
            "textarea"
        ].map(c => document.querySelector(c))
         .find(el => el !== null);

        if(candidate === null){
            logvsb("video_speed_buttons::is_comment_box", "no candidate for comment box. Assuming false.");
            return 0;
        }

        return el === candidate;
    }

    function Infobox(parent){
        let el = document.createElement("pre");

        el.style.font = "1em monospace";
        el.style.borderTop = "1px solid #ccc";
        el.style.marginTop = "10px";
        el.style.paddingTop = "10px";

        el.addEventListener("click", function(){
            parent.removeChild(el);
        });

        parent.appendChild(el);

        function log(msg){
            el.innerHTML += msg;
        }

        return {
            el,
            log
        };
    }

    function setPlaybackRate(el, rate){
        if(el)
            el.playbackRate = rate;
        else
            logvsb("video_speed_buttons::setPlaybackRate", "video element is null or undefined", 1);
    }

    function SpeedButtonLabel(text){
        let el = document.createElement("span");

        el.innerHTML = text;
        el.style.marginRight = "10px";
        el.style.fontWeight = "bold";
        el.style.fontSize = BUTTON_SIZE;
        el.style.color = COLOR_NORMAL;

        return el;
    }

    function SpeedButton(text, speed, parent){
        let el = SpeedButtonLabel(text);
        let self;

        el.style.cursor = "pointer";

        el.addEventListener("click", function(){
            setPlaybackRate(video_el, speed);
            self.select();
        });

        parent.appendChild(el);

        function select(){
            if(buttons.last !== null)
                buttons.last.el.style.color = COLOR_NORMAL;

            buttons.last = self;
            buttons.selected = self;
            el.style.color = COLOR_SELECTED;
        }

        function getprev(){
            if(self.prev === null)
                return self;

            return buttons.selected = self.prev;
        }

        function getnext(){
            if(self.next === null)
                return self;

            return buttons.selected = self.next;
        }

        return self = {
            el,
            text,
            speed,
            prev:  null,
            next:  null,
            select,
            getprev,
            getnext
        };
    }

    function kill(){
        anchor.removeChild(container);
        document.body.removeEventListener("keydown", ev_keyboard);
    }

    function set_video_el(new_video_el){
        video_el = new_video_el;
    }

    function ev_keyboard(ev){
        let match = keyboard_controls.find(([key, unused, callback]) => key === ev.key);
        let callback = (match || {2: ()=>null})[2];

        callback(ev);
    }

    setPlaybackRate(video_el, DEFAULT_SPEED);
    anchor.insertBefore(container, anchor.firstChild);
    document.body.addEventListener("keydown", ev_keyboard);

    return {
        controls: keyboard_controls,
        buttons,
        kill,
        SpeedButton,
        Infobox,
        setPlaybackRate,
        is_comment_box,
        set_video_el,
        ALLOW_EXTERNAL_ACCESS,
    };
}

video_speed_buttons.from_query = function(anchor_q, video_q){
    return video_speed_buttons(
            document.querySelector(anchor_q),
            document.querySelector(video_q));
}

// Multi-purpose Loader (defaults to floating on top right)
const loader_data = {
    container_candidates: [
        // YouTube
        "div#container.ytd-video-primary-info-renderer",
        "div#watch-header",
        "div#watch7-headline",
        "div#watch-headline-title",
        // Vimeo
        ".clip_info-wrapper",
    ],

    css_div: [
        "position:    fixed",
        "top:         0",
        "right:       0",
        "zIndex:      100000",
        "background:  rgba(0, 0, 0, 0.8)",
        "color:       #eeeeee",
        "padding:     10px"
    ].map(rule => rule.split(/: */)),

    css_vsb_container: [
        "borderBottom:    none",
        "marginBottom:    0",
        "paddingBottom:   0",
    ].map(rule => rule.split(/: */))
};

function logvsb(where, msg, lvl = 0){
    let logf = (["info", "error"])[lvl];

    console[logf](`[vsb::${where}] ${msg}`);
}

function loader_loop(){
    let vsbc = () => document.querySelector(".vsb-container");
    let candidate;
    let default_candidate;
    let vsb_handle;

    if(vsbc() !== null)
        return;

    candidate = loader_data
        .container_candidates
        .map(candidate => document.querySelector(candidate))
        .find(candidate => candidate !== null);

    default_candidate = (function(){
        let el = document.createElement("div");

        loader_data.css_div.forEach(function([name, value]){
            el.style[name] = value; });

        return el;
    }());

    vsb_handle = video_speed_buttons(candidate || default_candidate, document.querySelector("video"));

    if(candidate === null){
        logvsb("loader_loop", "no candidates for title section. Defaulting to top of page.");
        document.body.appendChild(default_candidate);

        loader_data.css_vsb_container.forEach(function([name, value]){
            vsbc().style[name] = value;
        });
    }

    if(vsb_handle.ALLOW_EXTERNAL_ACCESS)
        window.vsb = vsb_handle;
}

setInterval(function(){
    if(document.readyState === "complete")
        setTimeout(loader_loop, 1000);
}, 1000); // Blame YouTube for this
