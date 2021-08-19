//# Scripts #//

//- Setup -
import './style.scss';
import * as projects from './projects.js';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from '../node_modules/smooth-scrollbar/plugins/overscroll';
import '../node_modules/overlayscrollbars/css/OverlayScrollbars.css';
import '../node_modules/overlayscrollbars/js/OverlayScrollbars.js';
import fitty from 'fitty';

const doc = document.documentElement,
    isTouchDevice = window.matchMedia("(pointer: coarse)").matches, // check if is Touch Screen (https://stackoverflow.com/a/52855084)
    isChrome = (!!window.chrome), // check if browser is chromium based
    allHomeSections = document.querySelectorAll("#page-content section.part"),
    allHomeSectionsToSnap = Array.from(allHomeSections).slice(1, -1),
    sectionProjects = document.querySelector("section.part#projects"); // all of them but the first & last one
var language = (/^fr\b/.test(navigator.language)) ? "fr" : "en", // check language (FR or else EN)
    isMini, // boolean that depends on size of viewport (check if screen is small)
    scrollMainElem = document.querySelector("[scroll-main]"),
    projectsTopBar = false;

// isMini
function checkWinSize() { isMini = (window.innerWidth > 727); };
checkWinSize(); window.addEventListener("resize", checkWinSize);


if(isChrome) { doc.classList.add("isChr"); }


//- Scroll -
if(!isTouchDevice) { // PC
    //- Smooth Scrollbar -
    var isOverScroll,
        scrollDamping = 0.14; //(isChrome) ? 0.12 : 0.14;

    Scrollbar.use(OverscrollPlugin);
    var ScrollMain = Scrollbar.init(scrollMainElem, {
        syncCallbacks : true,
        renderByPixels : true,
        damping : scrollDamping,
        alwaysShowTracks : true,
        plugins : {
            overscroll : {
                effect : "bounce",
                damping : scrollDamping,
                maxOverscroll : 500,
                onScroll({x, y}) {
                    document.querySelector("#content-overscroll-overlay").style.opacity = (Math.abs(y / 888)).toFixed(2);

                    window.clearTimeout(isOverScroll);
                    isOverScroll = setTimeout(function() { // Overscroll Stop trigger
                        document.querySelector("#content-overscroll-overlay").style.opacity = null;
                    }, 200);
                }
            }
        }
    });

    ScrollMain.track.xAxis.element.remove(); // no scroll x

    ScrollMain.addListener(({ offset }) => { //- Main Scroll Effects -
        //- Things
        HomeGuide();
        if(projectsTopBar) {
            pMenuScrollPosUpdate(offset);
        }

        // prevents overscrolling left & right (might find a different workaround ? well it works so as we say, "don't worry about it")
        ScrollMain.scrollLeft = 1;
        scrollMainElem.style.paddingLeft = "1px";

        //- Scroll Snapping
        ScrollSnap(function(section, sectionTop) {
            if(ScrollMain.isVisible(section)) {
                if(sectionTop > -snapScrollOffset && sectionTop < snapScrollOffset) { // before && after top of section (with offset)
                    ScrollMain.setMomentum(0, sectionTop);
                }
            }
        }, (scrollMainElem.getAttribute("style").includes("user-select: none;")) ? 500 : 100) // when holding or not the scrollbar thumb
    });

} else { // if isTouchDevice then no smooth scrolling because native scroll smoothing is better for touch
    //- Overlay Scrollbar -
    var ScrollMainOS;
    document.addEventListener("DOMContentLoaded", function() {
        ScrollMainOS = OverlayScrollbars(scrollMainElem, {
            autoUpdate : null,
            autoUpdateInterval : 33,
            overflowBehavior : {
                x : 'hidden',
                y : 'scroll'
            },
            scrollbars : {
                autoHide : 'scroll',
                autoHideDelay : 100,
                dragScrolling : false,
                clickScrolling : false,
                touchSupport : true
            },
            callbacks : {
                onScroll : onscrollEffects
            }
        });
    });
    scrollMainElem.style.height = "100vh";

    function onscrollEffects() {
        HomeGuide();

        //- Custom Scroll Snapping // maybe not on touch devices ? keeping that in case
        //ScrollSnap(function(section, sectionTop) {
        //    var sectionRect = section.getBoundingClientRect();
        //    if(sectionRect.top < scrollMainElem.offsetHeight && sectionRect.top > -sectionRect.height) { // is visible ?
        //        if(sectionTop > -snapScrollOffset && sectionTop < snapScrollOffset) { // same as above
        //            ScrollMainOS.scroll(section, 600, 'easeOutQuint');
        //        }
        //    }
        //}, 300)
    }
}

//- Scroll Snapping Function
var snapScrollOffset = (!isTouchDevice) ? (ScrollMain.getSize().container.height / 3).toFixed(2) : (scrollMainElem.offsetHeight / 3).toFixed(2), // when to snap (at third of section)
    isScrolling; // thx https://vanillajstoolkit.com/helpers/scrollstop/

if(!scrollMainElem.getAttribute("style")) { scrollMainElem.setAttribute("style", ""); } // so it can check even if empty for delay down ther

function ScrollSnap(snap, delay) {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        allHomeSectionsToSnap.forEach(section => {
            var sectionTop = section.getBoundingClientRect().top;
            snap(section, sectionTop);
        })
    }, delay); // delay before considering scroll is stopped
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

function float(str) { return parseFloat(str.toFixed(2)) }

// thx (https://stackoverflow.com/a/4715382)
const deg2rad = Math.PI/180, rad2deg = 180/Math.PI;

function getPageID() {
    pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') { pathDir = 'home'; }
    return pathDir;
}

function addClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(el => { el.classList.add(c); }); }
}
function removeClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(el => { el.classList.remove(c); }); }
}

function addEvTrEnd(elem, func, o) {
    var isNotAlready = true,
        o = o ? o : true; // once?
    elem.addEventListener('transitionend', () => { func(); }, { once : o });

    trEndAlready.forEach(e => { isNotAlready &= (e == elem) ? false : true; });
    if(isNotAlready) {
        trEndAlready.push(elem);
        elem.childNodes.forEach((el) => { el.addEventListener('transitionend', (ev) => { ev.stopPropagation(); })});
    }
} var trEndAlready = [];


///- CONTENT SCRIPTS -/

//- Loading Screen for Necessary Things to Load Only -
var FontsLoaded = false;

function RemoveLoadingScreen() {
    document.querySelector("loading-screen").classList.remove("on");
}

window.addEventListener("load", () => {
    if(!FontsLoaded) { RemoveLoadingScreen(); } // to be sure the loading screen goes off at some point :)
});

document.fonts.onloadingdone = () => { // fonts are not too fast and not too long to load, seems good
    RemoveLoadingScreen();
    FontsLoaded = true;
};


//- Reusable Functions -
function directionalBgFill(ev) {
    const elRect = this.getBoundingClientRect(),
        elW2 = elRect.width / 2,
        elH2 = elRect.height / 2,
        curX = float(ev.clientX - elRect.left - elW2),
        curY = float(ev.clientY - elRect.top - elH2),

        // Pythagoras + offset (5px) to be sure to fill the whole element
        r = float(Math.sqrt(elH2**2 + elW2**2) + 5),
        effectSize = r * 2, // the effect will be the size of the circumcircle (diameter)
        rSign = r * ((curX < 0) ? -1 : 1), // optimization (doing it once for originX|Y below) / reversing the angle depending on the side of the element

        // angle from the cursor position (edge of element) to the center
        a = float(Math.atan(curY / curX)),
        angle = float(a + Math.PI / 2 + ((curX >= 0) ? Math.PI : 0)), // angle in radians for '.fill'
        //angleDeg = float(toDegrees(a) + 90 + ((curX >= 0) ? 180 : 0)), // angle in degrees for '.fill'

        // Finding the coordinates for '.fill' to scale up from on the circumcircle of the element (which is supposed to be a rectangle == two right triangles)
        originX = float(elW2 + rSign * Math.cos(a)),
        originY = float(elH2 + rSign * Math.sin(a));


    this.querySelector(".directionalBgEffect").setAttribute("style", "top: "+ originY +"px; left: "+ originX +"px; transform: translateX(-50%) rotateZ("+ angle +"rad);");
    this.querySelector(".directionalBgEffect > .fill").setAttribute("style", "width: "+ effectSize +"px;" + ((ev.type == "mouseout") ? "" : " height: "+ effectSize +"px;"));

    //console.log("- - - - - - -", ev.type, r, '\n',
    //    {aDeg, curX, curY, a},
    //    {iWidth : float(elRect.width), iHeight : elRect.height},
    //    {elW2, curX, elH2, curY},
    //    //{evX : ev.clientX, iLeft : float(elRect.left), iWidth : float(elRect.width), elW2},
    //    //{evY : ev.clientY, iTop : elRect.top, iHeight : elRect.height, elH2},
    //    {originX, originY}
    //);
};


//- Projects Menu -
var pMenu = document.querySelector("nav.p-menu"),
    pMenuDummy = document.querySelector("fakenav.p-menu.dummy"),
    pMenuTopDummy = document.querySelector("faketopnav.p-menu.dummy"),
    pMenuItemsC = pMenu.querySelector(".menu-items > .pm-i-c");

function pMenuScrollPosUpdate(offset) {
    pMenu.style.top = offset.y + 'px';
}

//- Create Menu
(function projectsMenuCreate() {
    var topFirstTwo = '', bottomRest = '', topHidden = '',
        k = 0;
    Object.keys(projects.menuData).forEach(proj => {
        if(k <= 1) {
            topFirstTwo += '<div p="'+ proj +'" class="p-item"></div>';
        } else {
            bottomRest += '<div p="'+ proj +'" class="p-item"></div>';
        }
        ++k;
    })
    topHidden = bottomRest;

    // Creation
    pMenuItemsC.innerHTML = `
        <div id="top">
            <div>
                `+ topFirstTwo +`
                <div class="min">
                    `+ topHidden +`
                </div>
            </div>
        </div>
        <div id="bottom">
            `+ bottomRest +`
        </div>
    `;

    var pMenuItems = pMenu.querySelectorAll(".p-item");

    //- project menu items interaction -
    pMenuItems.forEach(item => {
        // Icons & Titles
        const p = item.getAttribute("p"),
            icon = '<svg viewBox="0 0 32 32">'+ projects.menuData[p].icon +'</svg>';
        if(item.parentElement.className != "min") { item.innerHTML = '<div>'+ icon + '<span class="title">'+ projects.menuData[p].title +'</span></div>';
        } else { item.innerHTML = '<div>'+ icon +'</div>'; }

        // Interactions
        function projectLink() {
            // during the transition : position fixed -> if intersecting go for top of projects section || else go for top of viewport
            // at the end of transition : if intersecting position absolute || else stay position fixed at top of viewport

            const isThisFocus = this.parentElement.classList.contains("focus");

            pMenuItems.forEach(i => { i.classList.remove("focus"); });

            if(isThisFocus && pMenu.classList.contains("top-bar")) { // --- return to normal
                projectsTopBar = false;
                pMenu.style.top = null;
                pMenu.classList.remove("top-bar");

            } else { // --- top bar || project category selected
                if(!pMenu.classList.contains("top-bar")) { // becomes top bar
                    projectsTopBar = true;
                    pMenu.classList.add("top-bar");
                }
                pMenu.querySelectorAll(".p-item[p="+ p +"]").forEach(i => { i.classList.add("focus"); }); // focus project category button
                loadProjectsList(p);
            }

            /*
            // normal : always / top-bar : when in focus
            if(!pMenu.classList.contains("top-bar") || (pMenu.classList.contains("top-bar") && this.parentElement.classList.contains("focus"))) { // will move
                ScrollMain.addListener(pMenuScrollPosUpdate); addEvTrEnd(pMenu, function() { ScrollMain.removeListener(pMenuScrollPosUpdate); });
                
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
                    pMenu.classList.remove("top-bar");
                    pMenuItems.forEach(i => { i.classList.remove("focus"); });
                    addEvTrEnd(pMenu, function() { pMenu.setAttribute("style", ""); });
                }, 1);

            } else { // --- top bar
                if(!pMenu.classList.contains("top-bar")) { // if not already top bar
                    pMenu.setAttribute("style", "position: fixed !important; top: "+ (pMenuDummy.getBoundingClientRect().top).toFixed(3) +"px !important;");
                    setTimeout(() => {
                        if(pMenu.classList.contains("snapTop" || "snapBottom")) {
                            pMenu.setAttribute("style", "position: fixed !important; top: "+ (document.querySelector("section.part#projects").getBoundingClientRect().top).toFixed(3) +"px !important;");
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
            */
        }
        item.childNodes[0].addEventListener("click", projectLink);
    });
}());

// Top Bar Section Snapping
document.addEventListener("DOMContentLoaded", function() {
    var sSocialH = document.querySelector("#page-content section#social").offsetHeight,
        snapBOptions = {
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

    var countHS = 0, pSIndex;
    allHomeSections.forEach(section => { // top and bottom sections of Projects are -1 & +1 of pSIndex
        if(section.id == "projects") { pSIndex = countHS; } ++countHS;
    });
    pmSnapTop.observe(allHomeSections[pSIndex-1]); // "about" intersection
    pmSnapBottom.observe(allHomeSections[pSIndex+1]); // "social" intersection
});


//- Projects List -

//-- Loading All the Thumbnails Right Away because f*ck it it's not that much (it helps with the experience bc no wait wait for the pic pic to load load) --
var l_itemsLoaded, l_itemsTotalNb;
(function loadAllPThumbnails() {
    var picLoader = sectionProjects.querySelector("pictureloader"),
        pIndex = 0,
        pCategories = [];

    Object.keys(projects.data).forEach(p => { pCategories.push(p) }); // to recognize categories

    (function loadThemAll() { // load every thumbnail in a category, then go to the next category
        // delaying and separating by category helps performance
        setTimeout(() => {

            var p = pCategories[pIndex],
                items = '';
            l_itemsLoaded = 0;
            l_itemsTotalNb = 0;

            Object.keys(projects.data[p]).forEach(item => {
                items += `
                    <img src="/src/projects/`+ p +`/mini/`+ item +`.`+ (projects.data[p][item].imgExt || "jpg") +`">
                `;
                ++l_itemsTotalNb;
            });
            picLoader.innerHTML = items;

            picLoader.querySelectorAll("img").forEach(item => {
                item.addEventListener('load', () => {
                    ++l_itemsLoaded;
                    if(l_itemsLoaded >= l_itemsTotalNb) {
                        loadThemAll();
                    }
                });
            })
            
            ++pIndex;
            if(pIndex >= pCategories.length) {
                picLoader.remove();
            }

        }, 100);
    })();
})();


//-- Create the Projects List --
function loadProjectsList(p) {
    var items = '',
        itemsData = projects.data[p],
        pList = sectionProjects.querySelector(".projects-list");

    // Getting every item as buttons
    Object.keys(itemsData).forEach(item => {
        var itemData = itemsData[item];
        items += `
            <div class="project-item" p="`+ item +`">
                <div class="pi-c">
                    <div class="directionalBgEffect"><div class="fill"></div></div>
                    <div class="thumbnail-c">
                        <img src="/src/projects/`+ p +`/mini/`+ item +`.`+ (itemData.imgExt || "jpg") +`">
                    </div>
                    <div class="sub fc">
                        <div class="title"><span class="b1 t">`+ ((itemData.titleMini) ? itemData.titleMini : itemData.title) +`</span></div>
                    </div>
                    <div class="button-overlay"></div>
                </div>
            </div>
        `; // `+ ((itemData.title.length > 16) ? "long " : "") +`
    });

    // Creating the List
    var pListCNew = document.createElement("div");
    pListCNew.setAttribute("class", "p-list-c tr-in");
    pListCNew.innerHTML = items;
    pList.appendChild(pListCNew);

    // Interaction Events
    pListCNew.querySelectorAll(".project-item").forEach(item => {
        item.addEventListener("click", (ev) => { openProjectPopup(ev, item) });
        item.addEventListener("mouseenter", directionalBgFill);
        item.addEventListener("mouseout", directionalBgFill);

        // Title Auto Size Fit
        fitty(".project-item[p="+ item.getAttribute("p") +"] .sub .title span", {
            minSize : 10,
            maxSize : 35,
        });
    });

    var pListCHeightNew = pListCNew.offsetHeight; // TODO

    // Removing every other (if ever there are) projects lists
    pList.querySelectorAll(".p-list-c:not(:last-child)").forEach(pl => {
        setTimeout(() => {
            pl.classList.add("tr-out");
            addEvTrEnd(pl, () => { pl.remove(); });
        }, 75);
    })

    // New Projects List Entrance
    pListCNew.style.transform = "translateY("+ (pListCNew.offsetWidth * Math.tan(7 * deg2rad)) / 2 +"px) skewY(-7deg)";
    setTimeout(() => {
        pListCNew.classList.remove("tr-in");
        setTimeout(() => { pListCNew.style.transform = null; }, 1);
    }, 200);

}


function openProjectPopup(ev, item) {
    console.log('pp', ev, item);
    //item.classList.add('focus');
}













//- Home Guide -
const guide = document.querySelector(".guide"),
    scrDtxt = document.querySelector("section.part#home #scroll_down");

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
    if(!isTouchDevice) { // pc
        var sposy = ScrollMain.scrollTop,
            stracky = ScrollMain.getSize().container.height;
    } else { // touch
        var sposy = ScrollMainOS.scroll().position.y,
            stracky = ScrollMainOS.scroll().trackLength.y;
    }
    var step = 0;

    if(sposy > 30) {
        scrDtxt.classList.add("hide");
    } else {
        scrDtxt.classList.remove("hide");
    }

    if(sposy < stracky) { // from home to about
        step = "to about";

        const h = ((sposy / stracky) * 100).toFixed(2), h_clip = clamp(h / 2, 0, 50);
        guide.style.clipPath = "polygon(0 "+ h_clip +"%, 0 0, 100% 0, 100% "+ h_clip +"%, 50% 100%)";
        guide.style.width = h +"%";
        guide.style.height = h +"%";
        guide.style.top = HGScrRatio(78.5, 21.5, 100, sposy, stracky) +"%";

        guide.style.borderRadius = "0%";

    } else if(sposy < stracky * 2.5) { // from about to projects
        sposy -= stracky;
        step = "to projects";

        const a = HGScrRatio(100, 15, 85, sposy, stracky),
            a_clip = HGScrRatio(50, 50, 100, sposy, stracky); //* 1.175;
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