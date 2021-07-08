// Yolan'Art Portfolio JS Scripts


///- Setup -/
//const swup = new Swup({
//    animateHistoryBrowsing: true,
//    plugins: [new SwupScrollPlugin({
//        doScrollingRightAway: true,
//        scrollFriction: 0.8,
//        scrollAcceleration: 0.6,
//    })]
//});


const doc = document.documentElement,
    touchDevice = (navigator.maxTouchPoints || "ontouchstart" in document.documentElement); // check if is Touch Screen
var language = (/^fr\b/.test(navigator.language)) ? "fr" : "en"; // check language (FR or else EN)

// check if screen is small
function checkWinSize() { isMini = (window.innerWidth > 727); };
checkWinSize(); window.addEventListener("resize", checkWinSize);


///- Data -/
const projectsMenuData = {
    "artworks" : {
        title: "ARTWORKS",
        icon : '<path d="M21.5,7.3c1.8,0,3.2,1.5,3.2,3.2s-1.5,3.2-3.2,3.2s-3.2-1.5-3.2-3.2S19.7,7.3,21.5,7.3 M11.6,12l2.9,8.5c0,0,3.6-4.1,3.6-4.1l4.8,8.8c-1.9,1.4-4.3,2.3-6.9,2.3c-5.8,0-10.7-4.3-11.4-10C4.6,17.5,11.6,12,11.6,12 M17.9,6.7c0.7-0.6,1.6-1.1,2.6-1.3l0,0c-1.4-0.6-2.9-0.9-4.5-0.9l0,0C10,4.5,5,9.1,4.5,15l2.4-1.9c1.2-3.8,4.8-6.6,9.1-6.6C16.7,6.5,17.3,6.6,17.9,6.7L17.9,6.7z M25.3,14.1c0.1,0.6,0.2,1.2,0.2,1.9c0,2.2-0.8,4.3-2.1,6l1,1.9c1.9-2.1,3.1-4.8,3.1-7.9c0-1.6-0.3-3.1-0.9-4.5l0,0C26.4,12.5,26,13.4,25.3,14.1L25.3,14.1z"/>',
    },
    "renders" : {
        path: "3d-renders",
        title: "3D RENDERS",
        icon : '<path d="M26.2,15.6c2.9,1.1,4.9,2.7,4.9,4.8c0,4.1-7.8,6.3-15.1,6.3c-7.3,0-15.1-2.2-15.1-6.3c0-2.1,2-3.7,4.9-4.8l0,2.5c-1.7,0.7-2.6,1.6-2.6,2.3c0,1.6,5,4,12.8,4c7.8,0,12.8-2.4,12.8-4c0-0.7-0.9-1.6-2.6-2.3L26.2,15.6z M17.2,15.1v6.4l6.7-3.9v-6.4L17.2,15.1z M8.1,17.6l6.7,3.9v-6.4l-6.7-3.9V17.6z M9.3,9.2l6.7,3.9l6.7-3.9L16,5.3L9.3,9.2z"/>',
    },
    "motion-design" : {
        title: "MOTION DESIGN",
        icon : '<path d="M2.1,20.4c1.5,2.6,4.4,4.4,7.6,4.4c1.1,0,2.1-0.2,3.1-0.6c-1-1.1-1.8-2.4-2.3-3.8L2.1,20.4z M10.5,11.6c0.5-1.4,1.3-2.7,2.3-3.8c-1-0.4-2-0.6-3.1-0.6c-3.3,0-6.1,1.8-7.6,4.4L10.5,11.6z M9.9,17.9H2.8c-1,0-1.9-0.8-1.9-1.9v0c0-1,0.8-1.9,1.9-1.9h7.1c1,0,1.9,0.8,1.9,1.9v0C11.7,17,10.9,17.9,9.9,17.9z M31.1,16c0,4.9-4,8.8-8.8,8.8s-8.8-4-8.8-8.8s4-8.8,8.8-8.8S31.1,11.1,31.1,16z M19.6,20.4l7.7-4.4l-7.7-4.4V20.4z"/>',
    },
    "brandings" : {
        title: "BRANDINGS",
        icon : '<path d="M15.3,23.4l-5,3.5c-0.9,0.6-2.2-0.2-1.8-1.3l1.8-5.8c0.1-0.5,0-1-0.4-1.3L5,14.7c-0.9-0.7-0.4-2.1,0.7-2.2l6.1-0.1c0.5,0,0.9-0.3,1.1-0.8l2-5.7c0.4-1.1,1.9-1.1,2.3,0l2,5.7c0.2,0.5,0.6,0.8,1.1,0.8l6.1,0.1c1.1,0,1.6,1.5,0.7,2.2l-4.8,3.7c-0.4,0.3-0.6,0.8-0.4,1.3l1.8,5.8c0.3,1.1-0.9,2-1.8,1.3l-5-3.5C16.3,23.1,15.7,23.1,15.3,23.4z"/>',
    },
    "posters" : {
        title: "POSTERS",
        icon : '<path d="M6.2,23L6,25.6c0,1,0.8,1.9,1.9,1.9H21c-0.3-0.5-0.5-1.2-0.5-1.9l0.1-2.6L6.2,23z M24,27.5c1,0,1.9-0.8,1.9-1.9V8.5l0.2-4H9.7l-0.1,4l0,12.9l12.7,0l-0.1,4.2C22.1,26.7,22.9,27.5,24,27.5z M21.4,17.6H14v-1.8h7.4V17.6z M21.4,13.9H14v-1.8h7.4V13.9zM21.4,10.2H14V8.3h7.4V10.2z"/>',
    },
    "websites" : {
        title: "WEBSITES",
        icon : '<path d="M16,6.5c5.2,0,9.5,4.3,9.5,9.5s-4.3,9.5-9.5,9.5S6.5,21.2,6.5,16S10.8,6.5,16,6.5 M16,4.5C9.6,4.5,4.5,9.6,4.5,16S9.6,27.5,16,27.5S27.5,22.4,27.5,16S22.4,4.5,16,4.5L16,4.5z"/><path d="M16,6.5c0.9,0,3.1,3.3,3.1,9.5s-2.2,9.5-3.1,9.5c-0.9,0-3.1-3.3-3.1-9.5S15.1,6.5,16,6.5 M16,4.5c-2.8,0-5.1,5.1-5.1,11.5s2.3,11.5,5.1,11.5s5.1-5.1,5.1-11.5S18.8,4.5,16,4.5L16,4.5z"/><path d="M16,12.9c6.2,0,9.5,2.2,9.5,3.1c0,0.9-3.3,3.1-9.5,3.1S6.5,16.9,6.5,16C6.5,15.1,9.8,12.9,16,12.9 M16,10.9c-6.4,0-11.5,2.3-11.5,5.1s5.1,5.1,11.5,5.1s11.5-2.3,11.5-5.1S22.4,10.9,16,10.9L16,10.9z"/>',
    },
    "other" : {
        title: "OTHER FUNKY STUFF",
        icon : '<path d="M22.4,7.9l1.3,2.3L20,12.4l-9.5,2.5L22.4,7.9 M23,5.6L4.5,16.5L5,17.7l20.8-6.3l0.2-0.6L23,5.6L23,5.6z"/><path d="M24.8,12.8l0.7,2.5l-4.4,1.2l-10.2,0L24.8,12.8 M26,10.8L4.5,16.5L5,17.7l21.4-0.7l1.2-0.5L26,10.8L26,10.8z"/><path d="M27.5,26.4h-23v-9.8h23V26.4z M22.6,23.8H25v-4.8h-2.3V23.8z M18.3,23.8h2.3v-4.8h-2.3V23.8zM13.9,23.8h2.3v-4.8h-2.3V23.8z M9,19.3c-1.2,0-2.1,1-2.1,2.1c0,1.2,1,2.1,2.1,2.1s2.1-1,2.1-2.1C11.2,20.3,10.2,19.3,9,19.3z"/>'
    }
}


///- Tools -/
function m(val1, val2) { // average of 2 numbers
    function copyToClipboard(text) {
        var m = document.querySelector("textarea#m");
        if(!m) {
            var m = document.createElement("textarea"); m.id = "m";
            m.setAttribute("style", "display: block; position: absolute;")
            document.body.appendChild(m);
        }
        m.value = text + "rem";

        function c() {
            m.select();
            document.execCommand("copy");
            m.remove();
        }
        document.addEventListener("mousedown", c)
    }
    result = ((val1 + val2) / 2).toFixed(3);
    copyToClipboard(String(result));
    return console.log(result);
}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function getPageID() {
    pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') { pathDir = 'home'; }
    return pathDir;
}

function addClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.add(c); }); }
}
function removeClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.remove(c); }); }
}

function addEvTrEnd(elem, func, o) {
    var isNotAlready = true,
        o = o ? o : true;
    elem.addEventListener('transitionend', () => { func(); }, { once : o });

    trEndAlready.forEach(e => { isNotAlready &= (e == elem) ? false : true; });
    if(isNotAlready) {
        trEndAlready.push(elem);
        elem.childNodes.forEach((el) => { el.addEventListener('transitionend', (ev) => { ev.stopPropagation(); })});
    }
} var trEndAlready = [];

///- OverlayScrollbar - MAIN -/
var o1 = [null, 33], OScrHDelay = 200;
if(!isMini) { o1 = [true, 33]; OScrHDelay = 800; };

document.addEventListener("DOMContentLoaded", function() {
    scrollbarMain = OverlayScrollbars(document.querySelector("[scroll-main]"), {
        autoUpdate : o1[0],
        autoUpdateInterval : o1[1],
        overflowBehavior : {
            x : "hidden",
            y : "scroll"
        },
        scrollbars : {
            autoHide : "move",
            autoHideDelay : OScrHDelay
        },
        callbacks : {
            onScroll : HomeGuide
        }
    });
});

function scrollGuideAndProjects() {
    HomeGuide();
    pMenuScrollPosUpdate();
}


///- CONTENT SCRIPTS -/
//function init() {
//
//}
//init();
//swup.on("contentReplaced", init);


if(getPageID() == "new") {

    //- Projects Menu -
    var pMenu = document.querySelector("nav.p-menu"),
        pMenuDummy = document.querySelector("fakenav.p-menu.dummy"),
        pMenuTopDummy = document.querySelector("faketopnav.p-menu.dummy"),
        pMenuItems = pMenu.querySelectorAll(".p-item");

    function pMenuScrollPosUpdate() {
        //console.log('call');
        // the goal is to make the menu follow the scroll
        // maybe going to migrate the whole animation in here
        // because it seems it's going to be quite tricky
        // but I can vaguely see how this could work
        // kinda

        // im scared
        // i think i'm going to work on that at the end bc it works as is
        // it just doesn't like scrolling while the animation is going
    }

    pMenuItems.forEach(item => {
        // Icons & Titles
        const p = item.getAttribute("p"),
            icon = '<svg viewBox="0 0 32 32">'+ projectsMenuData[p].icon +'</svg>';
        if(item.parentElement.className != "min") { item.innerHTML = '<div>'+ icon + '<span class="title">'+ projectsMenuData[p].title +'</span></div>';
        } else { item.innerHTML = '<div>'+ icon +'</div>'; }

        // Interactions
        function projectLink() {
            // normal : always / top-bar : when in focus
            if(!pMenu.classList.contains("top-bar") || (pMenu.classList.contains("top-bar") && this.parentElement.classList.contains("focus"))) { // will move
                scrollbarMain.options("callbacks.onScroll", scrollGuideAndProjects);
                addEvTrEnd(pMenu, function() { scrollbarMain.options("callbacks.onScroll", HomeGuide); });
            }
            

            if(this.parentElement.classList.contains("focus") && pMenu.classList.contains("top-bar")) { // --- return to normal
                if(pMenu.classList.contains("snapTop" || "snapBottom")) {
                    pMenu.setAttribute("style", "top: calc((100% - var(--pm-box-size)) / 2);");
                } else {
                    pMenu.setAttribute("style", "position: fixed !important; top: "+ (pMenu.getBoundingClientRect().top).toFixed(3) +"px !important;");
                    setTimeout(() => {
                        pMenu.setAttribute("style", "position: fixed !important; top: "+ (pMenuDummy.getBoundingClientRect().top).toFixed(3) +"px !important;");
                    }, 1);
                }
                setTimeout(() => {
                    addEvTrEnd(pMenu, function() { pMenu.setAttribute("style", ""); });
                }, 1);
                

                setTimeout(() => {
                    pMenu.classList.remove("top-bar");
                    pMenuItems.forEach(i => { i.classList.remove("focus"); });
                }, 1);

            } else { // --- top bar
                if(!pMenu.classList.contains("top-bar")) { // if not already top bar
                    pMenu.setAttribute("style", "position: fixed !important; top: "+ (pMenuDummy.getBoundingClientRect().top).toFixed(3) +"px !important;");
                    setTimeout(() => {
                        if(pMenu.classList.contains("snapTop" || "snapBottom")) {
                            pMenu.setAttribute("style", "position: fixed !important; top: "+ (document.querySelector("section.projects").getBoundingClientRect().top).toFixed(3) +"px !important;");
                        } else { pMenu.setAttribute("style", "position: fixed !important; top: 0px !important;"); }
                        addEvTrEnd(pMenu, function() {
                            pMenu.setAttribute("style", "");
                            pMenu.style.transition = "var(--tr), top 0s";
                        });
                    }, 1);
                }
                setTimeout(() => {
                    pMenu.classList.add("top-bar");
                    pMenuItems.forEach(i => { i.classList.remove("focus"); });
                    pMenu.querySelectorAll(".p-item[p="+ p +"]").forEach(i => { i.classList.add("focus"); });
                }, 1);
            }
        }
        item.childNodes[0].addEventListener('click', projectLink)
    });

    // Top Bar Section Snapping
    document.addEventListener("DOMContentLoaded", function() {
        var sSocialH = document.querySelector("#page-content > section.social").offsetHeight,
            snapBOptions = {
                root: scrollbarMain.getElements().viewport,
                threshold: ((sSocialH - pMenuTopDummy.offsetHeight) / sSocialH).toFixed(3)
            };

        const pmSnapTop = new IntersectionObserver(function(entries) {
            entries.forEach(section => {
                if(section.isIntersecting) { pMenu.classList.add("snapTop");
                } else if(section.boundingClientRect.y < sSocialH - 30) { pMenu.classList.remove("snapTop"); }
            });
        });
        const pmSnapBottom = new IntersectionObserver(function(entries) {
            entries.forEach(section => {
                if(section.isIntersecting) { pMenu.classList.add("snapBottom");
                } else { pMenu.classList.remove("snapBottom"); }
            });
        }, snapBOptions);

        const allHomeSections = document.querySelectorAll("#page-content > section[class]");
        var countHS = 0, pSIndex;
        allHomeSections.forEach(section => { // top and bottom sections of Projects are -1 & +1 of pSIndex
            if(section.classList.contains("projects")) { pSIndex = countHS; } countHS += 1;
        });
        pmSnapTop.observe(allHomeSections[pSIndex-1]); // about intersection
        pmSnapBottom.observe(allHomeSections[pSIndex+1]); // social intersection
    });


    //- Home Guide -
    const guide = document.querySelector(".guide"),
        scrDtxt = document.querySelector("section.home #scroll_down");

    //function HGScrRatio(minPos, restPos, endPos, sPos, trackH) { // old method
    //    var sign = 1, initPos = minPos;
    //    if(endPos < minPos) { var sign = -1, hold = minPos, minPos = endPos, endPos = hold; } // can reverse
    //    return ( clamp((  initPos + ((sPos / trackH).toFixed(2) * (restPos * trackH) / trackH) * sign  ), minPos, endPos) ).toFixed(2); // there are some logic in here that I'm too lazy to explain ; (  x + ((a / b) * (z * b) / b) * s  )
    //}
    function HGScrRatio(minPos, restPos, endPos, sPos, trackH) {
        var sign = 1, initPos = minPos;
        if(endPos < minPos) { var sign = -1, hold = minPos, minPos = endPos, endPos = hold; } // can reverse
        return clamp((  parseFloat(((sPos * restPos) / (trackH * sign)).toFixed(2)) + initPos  ), minPos, endPos); // simplified of old method : (  (a * z) / (b * s) + x  ) // don't try to make sens of that, it works
    }

    function HomeGuide() {
        var s = scrollbarMain.scroll(),
            sposy = s.position.y, stracky = s.trackLength.y,
            step = 0;

        if(sposy > 20) {
            scrDtxt.classList.add("hide");
        } else {
            scrDtxt.classList.remove("hide");
        }

        if(sposy < stracky) { // from home to about
            stracky -= 20; // a bit before to make sure there's no gap
            step = "to about";

            const h = ((sposy / stracky) * 100).toFixed(2), h_clip = clamp(h / 2, 0, 50);
            guide.style.clipPath = "polygon(0 "+ h_clip +"%, 0 0, 100% 0, 100% "+ h_clip +"%, 50% 100%)";
            guide.style.width = h +"%";
            guide.style.height = h +"%";
            guide.style.top = HGScrRatio(78.5, 21.5, 100, sposy, stracky) +"%";

            guide.style.borderRadius = "0%";

        /*} else if(sposy < stracky + 100) { // in about
            guide.style.clipPath = "polygon(0 50%, 0 0, 100% 0, 100% 50%, 50% 100%)";
            guide.style.width = "100%";
            guide.style.height ="100%";
            guide.style.top = "100%";*/

        } else if(sposy < stracky * 2.5) { // from about to projects
            sposy -= stracky;
            step = "to projects";

            const a = HGScrRatio(100, 15, 85, sposy, stracky),
                a_clip = HGScrRatio(50, 50, 100, sposy, stracky) * 1.175;
            guide.style.clipPath = "polygon(0 "+ a_clip +"%, 0 0, 100% 0, 100% "+ a_clip +"%, 50% 100%)";
            guide.style.width = a +"%";
            guide.style.height = a +"%";
            guide.style.top = "calc("+ (parseFloat(HGScrRatio(0, 100, 100, sposy, stracky)) + ((100 - a) / 2)) +"% + "+ stracky +"px)";

            guide.style.borderRadius = "0%";

        } else if(sposy > stracky * 2.5) { // from bottom of projects to social
            sposy -= stracky * 2;
            step = "to social";

            const s = HGScrRatio(85, 45, 40, sposy, stracky);
            guide.style.width = "40vw";
            guide.style.height = "40vw";
            guide.style.top = "calc("+ (parseFloat(HGScrRatio(0, 100, 100, sposy, stracky)) + 10) +"% + "+ stracky * 2 +"px)";
            guide.style.borderRadius = HGScrRatio(0, 50, 50, sposy, stracky) +"%";

            guide.style.clipPath = "polygon(0 100%, 0 0, 100% 0, 100% 100%, 50% 100%)";
        }
        //console.log(step, sposy, stracky);
    };

}
