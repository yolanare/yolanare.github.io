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
    container = document.getElementById('container');

function checkWinSize() { if(window.innerWidth > 727) { isMini = false; } else { isMini = true; }};
checkWinSize(); window.addEventListener('resize', checkWinSize);

var o1 = {}
if(!isMini) {
    o1 = {
        autoUpdate : true,
        autoUpdateInterval : 15,
    }
}

document.addEventListener('DOMContentLoaded', function() {
    scrollbarMain = OverlayScrollbars(container, {
        o1,
        overflowBehavior : {
            x : 'hidden',
            y : 'scroll'
        },
        scrollbars : {
            autoHide : 'move',
            autoHideDelay : 700
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
    'fut_met' : {
        type : 'img',
        year : '2017',
        month : '06',
        desc : `
            <p>From what kind of place is it coming from?</p>
            <h2>TEST test Test</h2>
            <h3>TEST test Test</h3>
            <p>TEST test TestTEST test TestTEST test TestTEST test TestTEST test TestTEST test TestTEST test Test<br>TEST test TestTEST test TestTEST test TestTEST test TestTEST test Test<br>TEST test TestTEST test Test<br>TEST test TestTEST test TestTEST test Test.</br></p>
        `,
    },
    'destr_casque' : {
        type : 'img',
        year : '2016',
        month : '12',
        desc : `
            <p>Breaking it even more. Why wouldn't I?</p>
            <h2>FR: CONTEXTE</h2>
            <p>Ce casque audio devenait vieux, il était temps d'en changer. Je voulais marquer <b>le coup</b> en le détruisant. Déjà par curiosité pour voir ce qu'il y avait dedans, et aussi pour honorer le bon temps que j'ai passé avec.</p>
            <p>Cette image est la miniature de la vidéo sur YouTube que j'ai faite pour sa destruction. Je trouve qu'elle est plutôt bien réussie, en sachant que c'était l'un de mes premiers projets graphiques.</p>
        `,
    },
    'y_in_b' : {
        type : 'img',
        year : '2018',
        month : '09',
        desc : `
            <p>In front of the light</p>
            <h2>YYYYYYYYYYY</h2>
            <h3>YYYYYYYYYYY</h3>
            <p>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY<br>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</p>
        `,
    },
    'stargazing_a' : {
        type : 'img',
        year : '2018',
        month : '10',
        desc : `
            <p>Who are you?</p>
            <h2>STARGAZINGSTARGAZING</h2>
            <h3>TEST STARGAZING Test</h3>
            <p>TEST STARGAZINGSTARGAZINGSTARGAZING Test<br>TEST tSTARGAZINGSTARGAZING<br>TEST test TestTESMORE More mOrEMORE More mOrE.</br></p>
        `,
    },
// MOTION DESIGN
    'i-rs-b' : {
        type : 'vid',
        url : 'XOnAthClcEI',
        format : '16:9',
        year : '2018',
        month : '09',
        desc : `
            <p>Synthwave into the darkest place of space!</p>
            <h2>STARGAZINGSTARGAZING</h2>
            <h3>TEST STARGAZING Test</h3>
            <p>TEST STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TES STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR </p>
            <p>TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR </p>
            <p>TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TE STAR TEST STAR  STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TES STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TESTEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR </p>
            <p>TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TES STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TES STAR TEST STAR TEST STAR TE STAR TEST STAR TEST STAR TE STAR TEST STAR TESST STAR TEST STAR TEST STAR TEST STAR </p>
        `,
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

var checkScrollSpeed = (function(settings){ // (https://stackoverflow.com/a/22599173)
    settings = settings || {};
    var lastPos, newPos, timer, delta, direction, delay = settings.delay || 50;
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

var isScrolling;
function scrollAccordion() {
    var speed = checkScrollSpeed(), space = 0,
        items = Object.values(doc.querySelector('div[accordion-scroll]').children);
    if(speed[1]) { items.reverse(); }
    items.forEach((item) => {
        space += -speed[0] / 2;
        item.style.transitionTimingFunction = null;
        item.style.transform = 'translate3d(0px, '+ space +'px, 0px)';
    })
    window.clearTimeout(isScrolling);
	isScrolling = setTimeout(function() { items.forEach((item) => {
        item.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.7, 0, 1)';
        item.style.transform = null;
    })
	}, 75);
}

function init() {
    // container.addEventListener('scroll', scrollAccordion)

    var nav = document.querySelector('nav');

    function getPageID() {
        pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
        if(window.location.pathname == '/' || window.location.pathname == '/index.html') { pathDir = 'home'; }
        return pathDir;
    }
    getPageID();

    if (nav.hasChildNodes() == false) { // NAVIGATION
        nav.style.zIndex = '0';
        nav.innerHTML = `
            <div id="ymenu-c">
                <svg id="y" viewBox="0 0 25 25">
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
                </svg>
                <div id="ym-txt-c" class="pre-spawn">
                    <a id="a" class="ym-txt" href="/about/">About</a>
                    <a id="p" class="ym-txt" href="/projects/">Projects</a>
                </div>
            </div>
        `;

        //- SPAWN ANIMATION
        function removePreSpawn(path) {
            doc.querySelectorAll(path).forEach((e) => { e.classList.remove('pre-spawn'); })
        }

        setTimeout(() => {
            removePreSpawn('nav');
            setTimeout(() => { removePreSpawn('svg#y > g#main'); }, 50);
            setTimeout(() => {
                nav.style.zIndex = null;
                removePreSpawn('#ym-txt-c');
            }, 225);
        }, 300);

        nav.querySelector('svg#y').addEventListener('click', () => { swup.loadPage({ url: '/' }); })
    }

    if(pathDir != 'home') {
        nav.style.height = 'var(--content-top)';
        doc.querySelector('svg#y').style.width = '20vw';
    } else {
        nav.style.height = null;
        doc.querySelector('svg#y').style.width = null;
    }

    if(pathDir == 'projects') {
        var allAccItems = doc.querySelectorAll('.acclist-item');

        function openProjectCardPopup(ev) {
            this.classList.add('focus');
            scrollbarMain.options('overflowBehavior.y', 'hidden')
            
            function closeProjectCardPopup() {
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

            var projectPopup = document.createElement('div');
            projectPopup.classList.add('project-popup');
            projectPopup.classList.add('pre');
            doc.querySelector('div[project-popup]').appendChild(projectPopup);

            var proj;
            if(projectsDesc[this.id].type == 'img') {
                proj = `
                    <div class="pp-img" style="background:url('`+ this.querySelector('.thumb').getAttribute('src') +`');"></div>
                `
            } else if(projectsDesc[this.id].type == 'vid') {
                var format = projectsDesc[this.id].format, f;

                if(format == '1:1' || format == 'fill') { f = '80.1vh'; }
                else if(format == '16:9') { f = '56.25%'; }
                else { f = format == '1:1'; }

                proj = `
                <div id="player-c">
                    <div id="player" style="padding-bottom: `+ f +`;">
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/`+ projectsDesc[this.id].url +`?rel=0&color=white&loop=1&playlist=`+ projectsDesc[this.id].url +`" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                `
            }
            projectPopup.innerHTML = `
                <div class="pp-bg" style="opacity:0;"></div>
                <div class="pp-popup-c">
                    <div class="pp-sectiongrid">
                        <section class="pp-project" pp-type=`+ projectsDesc[this.id].type +`>
                            <div class="pp-proj">`
                                + proj +`
                            </div>
                            <div class="pp-scaleup"></div>
                        </section>
                        <section class="pp-desc" scroll>
                            <div class="pp-title"><span>`+ this.querySelector('.p-title > span').innerText +`</span></div>
                            <div class="pp-desctxt">
                                `+ projectsDesc[this.id].desc +`
                            </div>
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
                closeCur = projectPopup.querySelector('.pp-curclose');

            projectPopup.scrollbarPP = OverlayScrollbars(projectPopup.querySelector('section.pp-desc'), {
                overflowBehavior : {
                    x : 'hidden',
                    y : 'scroll'
                },
                scrollbars : {
                    autoHide : 'leave',
                    autoHideDelay : 0
                }
            });

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

                projectPopup.addEventListener('mousemove', moveCurClose);
                setTimeout(function() { projectPopup.removeEventListener('mousemove', moveCurClose); }, 800);
            }
            // CLOSE
            setTimeout(() => {
                ppBG.addEventListener('click', () => { closeProjectCardPopup() });
            }, 350); // security in case of multi-clicks
            
            // ANIMATIONS
            setTimeout(() => {
                ppBG.style.opacity = null;
                projectPopup.classList.remove('pre');
                ch = 0.1;
                projectPopup.querySelectorAll('section.pp-desc .pp-desctxt > *').forEach((txt) => {
                    ch += 0.15;
                    txt.style.transitionDelay = ch +'s';
                })
            }, 33);

            // PROJECT SCALE UP
            function projScaleUp() { projectPopup.classList.toggle('pscaleup'); }
            projectPopup.querySelector('.pp-scaleup').addEventListener('click', projScaleUp)
        }

        allAccItems.forEach((item) => {
            function openAccItem() {
                function finalState(i) {
                    if(i.getAttribute('state') == 'opening') {
                        i.setAttribute('state', 'opened');
                        doc.querySelector('*[accordion-scroll] #'+ item.id +' .acclist-content').style.height = null;
                    } else if(i.getAttribute('state') == 'closing') {
                        i.setAttribute('state', 'closed');
                        i.querySelector('.acclist-content').remove();
                    }
                }

                if(['closing', 'closed'].includes(item.getAttribute('state'))) {
                    item.setAttribute('state', 'opening');

                    var accCHidden = doc.querySelector('*[accordion-content] #'+ item.id +' > .acclist-content'),
                        otherAccItems = doc.querySelectorAll('.acclist-item:not(#'+ item.id +')');
                    otherAccItems.forEach((itemOther) => {
                        if(['opening', 'opened'].includes(itemOther.getAttribute('state'))) {
                            var iOtherC = itemOther.querySelector('.acclist-content');
                            if(iOtherC) { iOtherC.style.height = doc.querySelector('*[accordion-content] #'+ itemOther.id +' > .acclist-content').offsetHeight +'px'; }
                            setTimeout(() => {
                                itemOther.setAttribute('state', 'closing');
                            }, 10);
                        }
                    })

                    var itemc = item.querySelector('.acclist-content');
                    if(itemc == null) {
                        var accCReal = accCHidden.cloneNode(true);
                        accCReal.addEventListener('transitionend', (ev) => { if (ev.propertyName == 'height') { finalState(item); }}/*, {once:true}*/);
                        accCReal.childNodes.forEach((el) => { el.addEventListener('transitionend', (ev) => { ev.stopPropagation(); })});
                        accCReal.style.transition = '0s';
                        accCReal.style.height = '0px';
                        accCReal.style.transform = 'translateY(75px)';
                        item.querySelector('.acclist-in').appendChild(accCReal);
                        item.querySelectorAll('.al-card').forEach((card) => {
                            card.addEventListener('click', openProjectCardPopup);
                        })
                        setTimeout(() => {
                            accCReal.style.transition = null;
                            accCReal.style.height = accCHidden.offsetHeight +'px';
                            accCReal.style.transform = null;
                        }, 1);
                    }
                    //else {
                    //    console.log('-- already exists')
                    //}
                } else if(['opening', 'opened'].includes(item.getAttribute('state'))) { // already opened
                    if(true) { doc.querySelector('*[accordion-scroll] #'+ item.id +' .acclist-content').style.height = doc.querySelector('*[accordion-content] #'+ item.id +' > .acclist-content').offsetHeight +'px'; }
                    setTimeout(() => { item.setAttribute('state', 'closing'); }, 10);
                }
            }

            item.setAttribute('state', 'closed');
            item.querySelector('.acclist-btn').addEventListener('click', openAccItem);
        })
    }
}
init();
swup.on('contentReplaced', init);