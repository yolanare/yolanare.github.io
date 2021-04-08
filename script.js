const swup = new Swup({
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        doScrollingRightAway: true,
        scrollFriction: 0.8,
        scrollAcceleration: 0.6,
    })]
});

var doc = document.documentElement,
    isMini = undefined,
    touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement),
    container = document.getElementById('container'),
    language = 'fr';

function checkWinSize() { if(window.innerWidth > 727) { isMini = false; } else { isMini = true; }};
checkWinSize(); window.addEventListener('resize', checkWinSize);

function getPageID() {
    pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') { pathDir = 'home'; }
    return pathDir;
}

var o1 = [null, 33], OScrHDelay = 200; if(!isMini) { o1 = [true, 33]; OScrHDelay = 800; };

document.addEventListener('DOMContentLoaded', function() {
    scrollbarMain = OverlayScrollbars(container, {
        autoUpdate : o1[0],
        autoUpdateInterval : o1[1],
        overflowBehavior : {
            x : 'hidden',
            y : 'scroll'
        },
        scrollbars : {
            autoHide : 'move',
            autoHideDelay : OScrHDelay
        },
        callbacks : {
            onScroll : scrollAccordion
        }
    });
});

if(!!window.chrome) { document.querySelector('html').classList.add('isChr'); }


// PROJECTS DESCRIPTIONS
var projectsDesc = {

// ARTWORKS
    'sch_t_iv' : {
        type : 'img', suType : 'img',
        year : '2020', month : '01', tag: 'perso',
        subtitle : `Looooooooo ooooo ooo oooo oooooooooooo ooooo ooo oooo oooooooooooo ooooo ooo oooo ooo o o  o o o o o o o o o o   ooooo o o  ooooo ooo oo ok`,
        desc : {
            fr : `
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench</p>
                <div class="pp-img"><div><div><img src="../src/projects/artworks/sch-t-pm/05 colombe Banksy.jpg"/></div></div>
                    <div class="pp-img-desc">desc desc desc!desc desc desc!desc desc desc!desc desc desc!desc desc desc!desc desc desc!</div></div>
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench</p>
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench</p>
                <p>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench</p>
                <p>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench
                <br>freeeeeeeeench</p>
            `,
            en : `
                <p>engriiiiiiiiish</p>
                <p>engriiiiiiiiish</p>
                <p>engriiiiiiiiish</p>
                <p>engriiiiiiiiish</p>
                <p>engriiiiiiiiish</p>
            `,
        }
        
    },
    'sch_t_pm' : {
        type : 'img', suType : 'img',
        year : '2019', month : '10', tag: 'sch',
        subtitle : `What are we going to do with the dove?`,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'stargazing_a' : {
        type : 'img', suType : 'img',
        year : '2018', month : '10', tag: 'rs',
        subtitle : `Who are you?`,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'y_in_b' : {
        type : 'img', suType : 'img',
        year : '2018', month : '09', tag: "perso",
        subtitle : `Right in front of the only light`,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'fut_met' : {
        type : 'img', suType : 'img',
        year : '2017', month : '06', tag: "perso",
        subtitle : `From what kind of place is it coming from?`,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'destr_casque' : {
        type : 'img', suType : 'img',
        year : '2016', month : '12', tag: "fun",
        subtitle : `Breaking it even more. Why wouldn't I?`,
        desc : {
            fr : ``,
            en : ``,
        }
    },

// 3D RENDERS
    'mc_factory92' : {
        type : 'vid', suType : 'interact',
        year : '2021', month : '01', tag: "c",
        url : 'jN7L44_-igk', format : '1:1',
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'mc_cyber_district1' : {
        type : 'img', suType : 'img',
        year : '2019', month : '08', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'mc_cyber_district2' : {
        type : 'img', suType : 'img',
        year : '2019', month : '08', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'sch_1_wc' : {
        type : 'vid', suType : 'interact',
        year : '2019', month : '03-06', tag: "sch",
        url : 'Cg0DBZRAbqU', format : '1:1',
        subtitle : `As the days passes, everything's staying the same...`,
        desc : {
            fr : ``,
            en : ``,
        }
    },

// MOTION DESIGN
    'i_rs_b' : {
        type : 'vid', suType : 'interact',
        year : '2018', month : '09', tag: "rs",
        url : 'XOnAthClcEI', format : '16:9',
        subtitle : `Synthwave into the darkest place of space!`,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'i_jfm' : {
        type : 'vid', suType : 'interact',
        year : '2017', month : '12', tag: "c",
        url : 'Gyho58zddwg', format : '16:9',
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'i_y2' : {
        type : 'vid', suType : 'interact',
        year : '2017', month : '09', tag: "perso",
        url : 'UkL4zVUw27Y', format : '16:9',
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'i_inex' : {
        type : 'vid', suType : 'interact',
        year : '2017', month : '03', tag: "c",
        url : '46MrLGy5Xb8', format : '16:9',
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'i_yc' : {
        type : 'vid', suType : 'interact',
        year : '2017', month : '01', tag: "perso",
        url : 'PR0fVAGbHIQ', format : '16:9',
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },

// BRANDINGS
// -- YT
    'b_l1_rs' : {
        type : 'img', suType : 'img', imgExt : 'png',
        year : '2018', month : '06', tag: "rs",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_l2_rs' : {
        type : 'img', suType : 'img', imgExt : 'png',
        year : '2019', month : '01', tag: "rs",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_b1_rs' : {
        type : 'img', suType : 'img',
        year : '2018', month : '09', tag: "rs",
        desc : `
        `,
    },
    'b_l1_caloucath' : {
        type : 'img', suType : 'img', imgExt : 'png',
        year : '2017', month : '07', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_b1_caloucath' : {
        type : 'img', suType : 'img',
        year : '2017', month : '05', tag: "c",
        desc : `
        `,
    },
    'b_b2_caloucath' : {
        type : 'img', suType : 'img',
        year : '2017', month : '09', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_l1_ppm' : {
        type : 'img', suType : 'img', imgExt : 'png',
        year : '2018', month : '10', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_b1_ppm' : {
        type : 'img', suType : 'img',
        year : '2019', month : '04', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_b1_mattmovie' : {
        type : 'img', suType : 'img',
        year : '2016', month : '11', tag: "c",
        desc : `
        `,
    },
    'b_b2_mattmovie' : {
        type : 'img', suType : 'img',
        year : '2017', month : '02', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },

// -- STANDALONES
    'b_l1_jethro' : {
        type : 'img', suType : 'img', imgExt : 'png', white : true,
        year : '2018', month : '12', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_l1_wzr' : {
        type : 'img', suType : 'img', imgExt : 'png',
        year : '2017', month : '09', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_l1_nensho' : {
        type : 'img', suType : 'img', imgExt : 'png',
        year : '2017', month : '05', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_b1_rezartilo' : {
        type : 'img', suType : 'img',
        year : '2017', month : '01', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'b_b1_killex' : {
        type : 'img', suType : 'img',
        year : '2016', month : '03', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },

// POSTERS
    'pdf_apc_hpi' : {
        type : 'pdf', suType : 'interact',
        url : '1J0SOaGtPElDcgNwxXx55vr_E_ah3cZDc',
        year : '2019', month : '11', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
    'pdf_apc_wvhp' : {
        type : 'pdf', suType : 'interact',
        url : '1bCm600IXEowAT_jnyQLQcYP05QcAATYr',
        year : '2019', month : '08', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },

// WEBSITES
    'w_vh' : {
        type : 'web', suType : 'interact',
        url : 'https://valentinhebert.com', format : 'fill',
        year : '2020.10-2021', month : '01', tag: "c",
        subtitle : ``,
        desc : {
            fr : ``,
            en : ``,
        }
    },
};


function addClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.add(c); }); }
}
function removeClassAll(path, c) {
    var elems = document.querySelectorAll(path);
    if(elems) { elems.forEach(function(el) { el.classList.remove(c); }); }
}

function resizeAccC() {
    doc.querySelectorAll('section.acclist-item[state^=open]').forEach((a) => {
        var accc = a.querySelector('.acclist-content');
        accc.style.transitionDuration = '0s';
        accc.style.height = doc.querySelector('*[accordion-content] #'+ a.id +' > .acclist-content').offsetHeight +'px';
        if(a.getAttribute('level') == '2') {
            accc.parentNode.closest('.acclist-content').style.height = doc.querySelector('*[accordion-content][level="1"] #'+ a.closest('section[level="1"]').id +' > .acclist-content').offsetHeight + doc.querySelector('*[accordion-content] #'+ a.id +' > .acclist-content').offsetHeight +'px';
        }
        setTimeout(() => { accc.style.transitionDuration = null; }, 1);
    })
}
function ppSUHeight() {
    if(window.innerWidth <= 1200) { doc.style.setProperty('--pp-popup-c-h-su', Math.round(window.innerHeight * 0.8525) + 'px'); }
}

var checkScrollSpeed = (function(){ // (https://stackoverflow.com/a/22599173)
    var lastPos, newPos, timer, delta, direction, delay = 100;
    function clear() { lastPos = null; delta = 0; direction = true; }
    clear();
    return function(){
        newPos = scrollbarMain.scroll().position.y;
        if(lastPos != null ) { delta = newPos -  lastPos; }
        if(lastPos > newPos) { direction = false; }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return [delta * 2.75, direction];
    };
})();

var isScrolling, accScroll = doc.querySelector('div[accordion-scroll]');
function scrollAccordion() {
    if(pathDir != 'home') {
        var speed = checkScrollSpeed(), space = 0,
            items = [Object.values(accScroll.querySelectorAll('.acc-s[level="1"]')), Object.values(accScroll.querySelectorAll('.acc-s:not([level="1"])'))];

        items.forEach((item) => {
            if(speed[1]) { item.reverse(); }
            k = 0;
            item.forEach((i) => {
                k+=1;
                if(pathDir != 'about') { space += -speed[0] / 2; } else { space += -speed[0] * 1.25 ; }
                spaceMax = Math.min(Math.max(space, -350), 350);
                if(i.getAttribute('level') != "1") { spaceMax /= 4; }
                if(['opening', 'opened'].includes(i.getAttribute('state'))) { spaceMax /= 2;
                    if(i.getAttribute('level') != "1") { spaceMax /= 2; } }
                i.style.transitionTimingFunction = null;
                i.style.transform = 'translate3d(0px, '+ spaceMax +'px, 0px)';
                i.setAttribute('order', k)
            })
        })
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() { items.forEach((item) => { item.forEach((i) => {
            i.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.7, 0, 1)';
            i.style.transform = null;
        }) }) }, 75);
    }
}

function init() {
    var nav = document.querySelector('nav');
    accScroll = doc.querySelector('div[accordion-scroll]');

    getPageID(); doc.setAttribute('page', pathDir); doc.setAttribute('page2', pathDir);

    if (nav.hasChildNodes() == false) { // NAVIGATION
        nav.style.zIndex = '0';
        nav.innerHTML = `
            <div id="ymenu-c">
                <svg id="y" viewBox="0 0 25 25">
                    <g link="home">
                        <g id="float"> 
                            <g>
                                <polygon points="6.3,3.3 14,9.2 9.4,10.3"/>
                                <path d="M8.8,6.5l2.9,2.2L10,9.1L8.8,6.5 M3.8,0.2l5,11.3l7.4-1.8L3.8,0.2L3.8,0.2z"/>
                            </g>
                        </g>
                        <g id="main" class="pre-spawn">
                            <g>
                                <polygon points="9.9,11.8 18.8,3.8 12,21.4"/>
                                <path d="M16.3,7.4L15,10.8l-1,2.7l-1.7,4.4L11,12.2L16.3,7.4 M21.2,0.2L21.2,0.2L21.2,0.2z M21.2,0.2L8.8,11.5l2.9,13.4l4.1-10.7 l1-2.7L21.2,0.2L21.2,0.2z"/>
                            </g>
                        </g>
                    </g>
                </svg>
                <div id="ym-txt-c" class="pre-spawn">
                    <a id="a" class="ym-txt" link="about"><span>About</span></a>
                    <a id="p" class="ym-txt" link="projects"><span>Projects</span></a>
                </div>
            </div>
            <div id="ynav-boom"></div>
            <div id="ynav-boom-1"></div>
        `;

        //- SPAWN ANIMATION
        function removePreSpawn(path) {
            doc.querySelectorAll(path).forEach((e) => { e.classList.remove('pre-spawn'); })
        }

        setTimeout(() => {
            removePreSpawn('nav');
            setTimeout(() => { removePreSpawn('svg#y g#main'); }, 50);
            setTimeout(() => {
                nav.style.zIndex = null;
                removePreSpawn('#ym-txt-c');
            }, 225);
        }, 300);


        function yNavBoom(ev, histbr, l) {
            if(histbr == true) { ev = getPageID(); }
            if(l == null) { l = nav.querySelector('*[link='+ ev +']'); }
            var lLinkID = l.getAttribute('link'), lLink;

            function boom(h) {
                var pageW = doc.clientWidth,
                    pageH = doc.clientHeight;

                if(histbr == false) { // normal
                    var curX = ev.clientX,
                        curY = ev.clientY,
                        bcX = (curX / 100),
                        bcY = (curY / 100),
                        bcRW = pageW - curX,
                        bcRH = pageH - (pageH - curY);
                    if(curX > (pageW / 2)) { bcRW = pageW - (pageW - curX); }
                    if(curY < (pageH / 2)) { bcRH = pageH - curY; }
                } else { // history browsing
                    var bcEl = l,
                        bcElRect = bcEl.getBoundingClientRect(),
                        bcElX = bcElRect.left + (bcElRect.width / 2),
                        bcElY = bcElRect.top + (bcElRect.height / 2),
                        bcX = (Math.round(bcElX) / 100),
                        bcY = (Math.round(bcElY) / 100),
                        bcRW = pageW - (bcElX),
                        bcRH = pageH - (pageH - bcElY);
                    if(bcElX > (pageW / 2)) { bcRW = pageW - (pageW - bcElX); }
                    if(bcElY < (pageH / 2)) { bcRH = pageH - (bcElY); }
                }

                var boom = document.createElement('div');
                boom.classList.add('ynav-boom');
                boom.innerHTML = `
                    <svg id="boom" viewBox="0 0 `+ (pageW / 100) +` `+ (pageH / 100) +`">
                        <circle cx="`+ bcX +`" cy="`+ bcY +`" r="0"></circle>
                    </svg>
                `;
                var boomC = boom.querySelector('circle');
                
                if(h == '-1') { document.querySelector('#ynav-boom-1').appendChild(boom);
                } else { document.querySelector('#ynav-boom').appendChild(boom); }

                setTimeout(function() {
                    boomC.style.transition = 'r 0.9s cubic-bezier(0.4, 0.7, 0, 1), opacity 1.1s ease-in-out';
                    nlCR = (Math.round(((bcRW)**2 + (bcRH)**2)**(1/2)) / 100) + 0.1;
                    boomC.setAttribute('r', nlCR);
                    boomC.style.opacity = '0';
                    setTimeout(function() {
                        boom.remove();
                    }, 1100);
                }, 10);
            }

            if(doc.getAttribute('page') != lLinkID) {
                doc.setAttribute('page', lLinkID);
                if(lLinkID != 'home') { lLink = lLinkID + '/'; } else { lLink = ''; }
                if(histbr == false) { swup.loadPage({ url: '/' + lLink }); }
                boom(null);
            } else {
                if(lLinkID == 'home') { boom('-1'); }
            }
        }

        nav.querySelectorAll('*[link]').forEach((l) => { l.addEventListener('click', function(ev) { yNavBoom(ev, false, l)})});
        swup.on('popState', function() { yNavBoom(null, true, null); });
    }

    if(pathDir != 'home') {
        nav.style.height = 'var(--content-top)';
        doc.querySelector('svg#y').style.height = '135%';
    } else {
        nav.style.height = null;
        doc.querySelector('svg#y').style.height = null;
    }

    if(pathDir == 'projects') {
        function openProjectCardPopup(ev, p, item) {
            p.classList.add('focus');
            scrollbarMain.options('overflowBehavior.y', 'hidden');
            
            function closeProjectCardPopup() {
                swup.off('animationOutStart', closeProjectCardPopupAuto);
                scrollbarMain.options('overflowBehavior.y', 'scroll');
                var allFocused = doc.querySelectorAll('div[accordion-scroll] .focus');
                if(allFocused) { allFocused.forEach((f) => { f.classList.remove('focus'); })}
                ppBG.style.opacity = '0';
                projectPopup.style.pointerEvents= 'none';
                projectPopup.classList.add('out');
                closeFake.classList.add('quit');
                hideCurClose();
                setTimeout(() => { closeFake.classList.add('hid'); }, 1);
                setTimeout(() => { projectPopup.scrollbarPP.destroy(); projectPopup.remove(); }, 1000);
            }
            function closeProjectCardPopupAuto() { if(projectPopup) { closeProjectCardPopup(); }}

            var projectPopup = document.createElement('div');
            projectPopup.classList.add('project-popup');
            projectPopup.classList.add('pre');
            doc.querySelector('div[project-popup]').appendChild(projectPopup);

            var proj, pTag, pTitle, formatSU, pWebLink = ``, suInteract = ``,
            pSpan = p.querySelector('.p-title > span');

            if(projectsDesc[p.id].type == 'img') {
                var imgMiniSRC = p.querySelector('.thumb').getAttribute('src'),
                    w = '';
                if(projectsDesc[p.id].white == true) { w = ' white'; }
                proj = `
                    <div style="width:100%;height:100%;"><img class="pp-img`+ w +`" src="`+ imgMiniSRC +`" style="background-image: url(`+ imgMiniSRC +`);"></img></div>
                `;
            } else if(['vid', 'web'].includes(projectsDesc[p.id].type)) {
                var format = projectsDesc[p.id].format, formatU, iframe;

                if(format == '1:1' || format == 'fill') { formatU = '80.1vh'; }
                else {
                    if(format == '16:9') { formatSU = '56.25';
                    } else { formatSU = format; }
                    formatU = formatSU + '%';
                    formatSU = 'calc((var(--pp-popup-c-size) * 1vw * var(--pp-sgrid) / 100 - var(--pp-sgrid-gap)) * '+ formatSU +' / 100);'
                }

                if(projectsDesc[p.id].type == 'vid') {
                    iframe = `<iframe width="1280" height="720" src="https://www.youtube.com/embed/`+ projectsDesc[p.id].url +`?rel=0&color=white&loop=1&playlist=`+ projectsDesc[p.id].url +`" frameborder="0" allowfullscreen></iframe>`
                } else if(projectsDesc[p.id].type == 'web') {
                    iframe = `<iframe src="`+ projectsDesc[p.id].url +`" width="1920px" height="1080px" frameborder="0"></iframe>`
                    pWebLink = `
                        <div class="pp-btn-c">
                            <a class="pp-btn" href="`+ projectsDesc[p.id].url +`" target="_blank"><span>
                                ACCESS WEBSITE
                                <svg viewBox="0 0 32 32"><path d="M21.5,20.5v4h-14v-14h4c1.7,0,3-1.3,3-3l-10,0v20h20l0-10C22.8,17.5,21.5,18.8,21.5,20.5z"/>
                                    <path d="M14.5,17.5L14.5,17.5c-0.6-0.6-0.6-1.5,0-2.1l8.9-8.9l2.1,2.1l-8.9,8.9C16,18.1,15.1,18.1,14.5,17.5z M24.5,7.5h-7l0-3h10v10l-3,0V7.5z"/></svg>
                            </span></a>
                        </div>
                    `;
                }
                proj = `
                    <div id="player-c">
                        <div id="player" style="padding-bottom: `+ formatU +`;">
                        `+ iframe +`
                        </div>
                    </div>
                `;
            } else if(projectsDesc[p.id].type == 'pdf') {
                proj = `
                    <div id="pdf-reader">
                        <iframe class="pp-pdf" src="https://drive.google.com/file/d/`+ projectsDesc[p.id].url +`/preview" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                `;
            }
            if(projectsDesc[p.id].tag == 'perso') { pTag = 'Personnal Project';
            } else if(projectsDesc[p.id].tag == 'sch') { pTag = 'School Project';
            } else if(projectsDesc[p.id].tag == 'fun') { pTag = 'Fun';
            } else if(projectsDesc[p.id].tag == 'c') { pTag = 'Commission';
            } else if(projectsDesc[p.id].tag == 'rs') { pTag = 'RetroSaturn';
            }
            if(projectsDesc[p.id].suType == 'interact') {
                suInteract = `
                    <svg viewBox="0 0 32 32"><polygon points="13.4,7.2 16,4.6 27.5,16 16.1,27.4 13.4,24.8 20.5,17.7 4.5,17.7 4.5,14.3 20.5,14.3"/></svg>
                `;
            }
            if(pSpan.hasAttribute('long-title')) { pTitle = pSpan.getAttribute('long-title');
            } else { pTitle = pSpan.innerText; }
            projectPopup.innerHTML = `
                <div class="pp-bg" style="opacity:0;"></div>
                <div class="pp-popup-c" pp-suType=`+ projectsDesc[p.id].suType +`>
                    <div class="pp-sectiongrid">
                        <section class="pp-project">
                            <div class="pp-proj">`
                                + proj +`
                            </div>
                            <div class="pp-scaleup" style="height: `+ formatSU +`">`+ suInteract + suInteract +`</div>
                        </section>
                        <section class="pp-desc" scroll>
                            <div class="pp-title-c">
                                <div class="pp-title">
                                    <span id="big">`+ pTitle +`</span>
                                    <div class="pp-t-pills">
                                        <span id="date">`+ projectsDesc[p.id].year +`.`+ projectsDesc[p.id].month +`</span>
                                        <span id="tag">`+ pTag +`</span>
                                    </div>
                                </div>
                                <div class="pp-subt">
                                    <span class="pp-subtitle">`+ projectsDesc[p.id].subtitle +`</span>
                                    <div class="pp-langswitcher-c">
                                        <div class="pp-langswitcher">
                                            <span l="fr">FR</span><span l="en">EN</span>
                                            <div class="pp-ls-bg"></div>
                                        </div>
                                    </div>
                                </div>
                                `+ pWebLink +`
                            </div>
                            <div class="pp-desctxt"></div>
                        </section>
                    </div>
                    <div class="pp-fakeclose">
                        <svg viewBox="0 0 32 32">
                            <line x1="26.3" y1="26.3" x2="5.7" y2="5.7"/>
                            <line x1="5.7" y1="26.3" x2="26.3" y2="5.7"/>
                        </svg>
                    </div>
                </div>
                <div class="pp-curclose">
                    <svg viewBox="0 0 32 32">
                        <line x1="26.3" y1="26.3" x2="5.7" y2="5.7"/>
                        <line x1="5.7" y1="26.3" x2="26.3" y2="5.7"/>
                    </svg>
                </div>
            `;

            var ppBG = projectPopup.querySelector('.pp-bg'),
                closeFake = projectPopup.querySelector('.pp-fakeclose'),
                closeCur = projectPopup.querySelector('.pp-curclose'),
                ppProj = projectPopup.querySelector('.pp-project'),
                pplBtn = projectPopup.querySelectorAll('.pp-langswitcher > span'),
                ppDesc = projectPopup.querySelector('.pp-desc'),
                ppDesctxt = ppDesc.querySelector('.pp-desctxt'),
                ppOScr;

            function ppDImgViewCreate() {
                var ppDImg = ppDesc.querySelectorAll('.pp-img');
                if(ppDImg) {
                    ppDImg.forEach(descimg => {
                        descimg.addEventListener('click', function() {
                            descimg.classList.add('focus');
                            
                            var imgView = document.createElement('div'),
                                descimgImg = descimg.querySelector('img');
                            imgView.classList.add('ppd-imgview');
                            imgView.classList.add('pre');
                            doc.querySelector('div[project-popup]').appendChild(imgView);
                            imgView.innerHTML = `
                                <div class="ppdiv-bg"></div>
                                <div class="ppdiv-img-c"><img src="`+ descimgImg.getAttribute('src') +`"/></div>
                            `;
                            setTimeout(() => { imgView.classList.remove('pre'); }, 1);

                            imgView.addEventListener('click', function(ev) {
                                descimg.classList.remove('focus');
                                imgView.classList.add('out');
                                descimgImg.addEventListener('transitionend', () => { imgView.remove(); });
                                moveCurClose(ev);
                            })
                        })
                    });
                }
            }
            function ppDesctxtAnimateSpawn(ppDesctxtin) {
                var ch = 0.1;
                ppDesc.querySelectorAll('.pp-desctxt-in:last-child > *').forEach((txt) => {
                    ch += 0.15;
                    if(txt.hasAttribute('class')) { txt.style.transitionDelay = ch +'s, ' + ch +'s, ' + '0s';
                    } else { txt.style.transitionDelay = ch +'s'; }
                })
                if(ppDesctxtin) { ppDesctxtin.classList.remove('pre'); }
            }
            function ppDesctxtAnimateOut(descInAll) {
                if(descInAll) {
                    descInAll.forEach(descIn => {
                        projectPopup.querySelector('.os-viewport').scrollTo({top: 0, behavior: 'smooth'});
                        descIn.addEventListener('transitionend', () => { descIn.remove(); });
                        descIn.childNodes.forEach((el) => { el.addEventListener('transitionend', (ev) => { ev.stopPropagation(); })});
                        descIn.classList.add('out');
                    });
                }
            }
            function ppDesctxtPrint() {
                ppDesctxtAnimateOut(ppDesc.querySelectorAll('.pp-desctxt > .pp-desctxt-in'));
                var ppDesctxtin = document.createElement('div');
                ppDesctxtin.classList.add('pp-desctxt-in');
                ppDesctxtin.classList.add('pre');
                ppDesctxt.appendChild(ppDesctxtin);
                setTimeout(() => {
                    var d;
                    if(language == 'fr') {
                        d = projectsDesc[p.id].desc.fr;
                        if(!d || d == '') { ppDesctxtin.innerHTML = '<p class="no">Pas de description disponible.</p>'; } else { ppDesctxtin.innerHTML = d; }
                    } else {
                        d = projectsDesc[p.id].desc.en;
                        if(!d || d == '') { ppDesctxtin.innerHTML = '<p class="no">No description available.</p>'; } else { ppDesctxtin.innerHTML = d; }
                    }
                    ppDImgViewCreate();
                    setTimeout(() => {
                        ppDesctxtAnimateSpawn(ppDesctxtin);
                    }, 33);
                }, 1);
            } ppDesctxtPrint();

            pplBtn.forEach(lbtn => { if(lbtn.getAttribute('l') == language) { lbtn.classList.add('focus'); } });
            projectPopup.querySelector('.pp-langswitcher-c').addEventListener('click', function() {
                pplBtn.forEach(l => { l.classList.toggle('focus'); });
                setTimeout(() => {
                    language = projectPopup.querySelector('.pp-langswitcher > span.focus').getAttribute('l');
                    ppDesctxtPrint();
                }, 1);
            })

            if(isMini) { ppOScr =  { autoHide : 'move', autoHideDelay : OScrHDelay }
            } else { ppOScr =  { autoHide : 'leave', autoHideDelay : 0 } }
            projectPopup.scrollbarPP = OverlayScrollbars(ppDesc, {
                overflowBehavior : {
                    x : 'hidden',
                    y : 'scroll'
                },
                scrollbars : ppOScr
            });

            if(projectsDesc[p.id].type == 'img') {
                // Load Higher Res Picture (https://stackoverflow.com/a/54123157)
                function loadHighResImage(elem, highResUrl) {
                    let image = new Image();
                    image.addEventListener('load', function() {
                        elem.src = highResUrl;
                        setTimeout(() => { elem.style.backgroundImage = null; }, 50);
                    });
                    image.src = highResUrl;
                };
                loadHighResImage(ppProj.querySelector('.pp-img'), '../src/projects/'+ item.id +'/'+ p.id +'.'+ (projectsDesc[p.id].imgExt || 'jpg'));
            }

            // Cursor Close on BG hover
            function moveCurClose(event) {
                var cursorX = event.clientX,
                    cursorY = event.clientY;
                closeCur.style.top = cursorY + 'px';
                closeCur.style.left = cursorX + 'px';
            }
            function showCurClose() {
                closeFake.classList.add('hid');
                closeCur.classList.add('hover');
            }
            function hideCurClose() {
                closeFake.classList.remove('hid');
                closeCur.classList.remove('hover');
            }
            if(touchDevice == false || isMini == false) {
                ppBG.style.cursor = 'none';

                moveCurClose(ev);
                ppBG.addEventListener('mousemove', moveCurClose);
                ppBG.addEventListener('mouseover', showCurClose);
                ppBG.addEventListener('mouseout', hideCurClose);

                ppProj.querySelector('.pp-scaleup').addEventListener('click', moveCurClose);

                projectPopup.addEventListener('mousemove', moveCurClose);
                setTimeout(function() { projectPopup.removeEventListener('mousemove', moveCurClose); }, 800);
            }
            // CLOSE
            setTimeout(() => {
                ppBG.addEventListener('click', () => { closeProjectCardPopup(); });
            }, 350); // security in case of multi-clicks
            
            // ANIMATIONS
                setTimeout(() => {
                    ppBG.style.opacity = null;
                    ppDesctxtAnimateSpawn(null);
                    projectPopup.classList.remove('pre');
                }, 33);

            // PROJECT SCALE UP
            function projScaleUp() { projectPopup.classList.toggle('pscaleup'); }
            ppProj.querySelector('.pp-scaleup').addEventListener('click', projScaleUp)

            swup.on('animationOutStart', closeProjectCardPopupAuto);
        }

        doc.querySelectorAll('.acclist-item').forEach((item) => {

            function openAccItem() {
                var thisItem = this.closest('section[level]'),
                    itemLv = thisItem.getAttribute('level');
                function finalState(i) {
                        if(i.getAttribute('state') == 'opening') {
                            i.setAttribute('state', 'opened');
                        } else if(i.getAttribute('state') == 'closing') {
                            i.setAttribute('state', 'closed');
                            i.querySelector('.acclist-content').remove();
                        }
                }

                if(['closing', 'closed'].includes(thisItem.getAttribute('state'))) {
                    thisItem.setAttribute('state', 'opening');

                    var accCHidden = doc.querySelector('*[accordion-content][level="'+ itemLv +'"] #'+ thisItem.id +' > .acclist-content'),
                        otherAccItems = doc.querySelectorAll('.acclist-item:not(#'+ thisItem.id +')');
                    otherAccItems.forEach((itemOther) => {
                        if(['opening', 'opened'].includes(itemOther.getAttribute('state'))) {
                            if(itemOther.getAttribute('level') == itemLv) {
                                itemOther.setAttribute('state', 'closing');
                            }
                            if(itemLv == '2') {
                                thisItem.closest('.acclist-content').style.height = doc.querySelector('*[accordion-content][level="1"] #'+ thisItem.closest('section[level="1"]').id +' > .acclist-content').offsetHeight +'px';
                            }
                        }
                    })

                    var itemc = thisItem.querySelector('.acclist-content');
                    if(itemc == null) {
                        var accCReal = accCHidden.cloneNode(true);
                        accCReal.style.height = accCHidden.offsetHeight +'px';
                        if(itemLv == '2') { setTimeout(() => { thisItem.closest('.acclist-content').style.height = doc.querySelector('*[accordion-content][level="1"] #'+ thisItem.closest('section[level="1"]').id +' > .acclist-content').offsetHeight + accCHidden.offsetHeight +'px'; }, 100); }
                        accCReal.classList.add('clos');
                        accCReal.addEventListener('transitionend', (ev) => { if(ev.propertyName == 'height') { finalState(thisItem); }});
                        accCReal.childNodes.forEach((el) => { el.addEventListener('transitionend', (ev) => { ev.stopPropagation(); })});
                        thisItem.querySelector('.acclist-in').appendChild(accCReal);
                        
                        var accBtnLv2 = accCReal.querySelectorAll('.acclist-btn');
                        if(accBtnLv2 != null) { accBtnLv2.forEach((ibtn2) => { ibtn2.addEventListener('click', openAccItem); }) }

                        setTimeout(() => { thisItem.querySelectorAll('.al-card').forEach((card) => { card.addEventListener('click', (ev) => { openProjectCardPopup(ev, card, thisItem); })}); }, 1);
                        setTimeout(() => { accCReal.classList.remove('clos'); }, 100);
                    }
                    else {
                        if(itemLv == '2') { thisItem.closest('.acclist-content').style.height = doc.querySelector('*[accordion-content][level="1"] #'+ thisItem.closest('section[level="1"]').id +' > .acclist-content').offsetHeight + accCHidden.offsetHeight +'px'; }
                    }
                } else if(['opening', 'opened'].includes(thisItem.getAttribute('state'))) { // already opened
                    thisItem.setAttribute('state', 'closing');
                    if(itemLv == '2') {
                        thisItem.closest('.acclist-content').style.height = doc.querySelector('*[accordion-content][level="1"] #'+ thisItem.closest('section[level="1"]').id +' > .acclist-content').offsetHeight +'px';
                    }
                }
            }

            item.setAttribute('state', 'closed');
            item.querySelector('.acclist-btn').addEventListener('click', openAccItem);
        })

        ppSUHeight();
        window.addEventListener('resize', resizeAccC);
        window.addEventListener('resize', ppSUHeight);
    } else {
        window.removeEventListener('resize', resizeAccC)
        window.removeEventListener('resize', ppSUHeight)
    }
}
init();
swup.on('contentReplaced', init);

swup.on('animationOutStart', function() {
    doc.querySelector('.os-viewport').scrollTo({top: 0, behavior: 'smooth'});
});