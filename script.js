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
    container = document.getElementById('container');

function checkWinSize() { if(window.innerWidth > 727) { isMini = false; } else { isMini = true; }};
checkWinSize(); window.addEventListener('resize', checkWinSize);

// PROJECTS DESCRIPTIONS
var projectsDesc = {
    'fut_met' : {
        year : "2017",
        month : "06",
        desc : `
            <p>From what kind of place is it coming from?</p>
            <h2>TEST test Test</h2>
            <h3>TEST test Test</h3>
            <p>TEST test TestTEST test TestTEST test TestTEST test TestTEST test TestTEST test TestTEST test Test<br>TEST test TestTEST test TestTEST test TestTEST test TestTEST test Test<br>TEST test TestTEST test Test<br>TEST test TestTEST test TestTEST test Test.</br></p>
        `,
    },
    'destr_casque' : {
        year : "2016",
        month : "12",
        desc : `
            <p>Breaking it even more. Why wouldn't I?</p>
            <h2>FR: CONTEXTE</h2>
            <p>Ce casque audio devenait vieux, il était temps d'en changer. Je voulais marquer <b>le coup</b> en le détruisant. Déjà par curiosité pour voir ce qu'il y avait dedans, et aussi pour honorer le bon temps que j'ai passé avec.</p>
            <p>Cette image est la miniature de la vidéo sur YouTube que j'ai faite pour sa destruction. Je trouve qu'elle est plutôt bien réussie, en sachant que c'était l'un de mes premiers projets graphiques.</p>
        `,
    },
    'y_in_b' : {
        year : "2018",
        month : "09",
        desc : `
            <p>In front of the light</p>
            <h2>YYYYYYYYYYY</h2>
            <h3>YYYYYYYYYYY</h3>
            <p>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</p>
        `,
    },
    'stargazing_a' : {
        year : "2018",
        month : "10",
        desc : `
            <p>Who are you?</p>
            <h2>STARGAZINGSTARGAZING</h2>
            <h3>TEST STARGAZING Test</h3>
            <p>TEST STARGAZINGSTARGAZINGSTARGAZING Test<br>TEST tSTARGAZINGSTARGAZING<br>TEST test TestTESMORE More mOrEMORE More mOrE.</br></p>
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
        newPos = container.scrollTop;
        if(lastPos != null ) { delta = newPos -  lastPos; }
        if(lastPos > newPos) { direction = false; }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return [delta * 2.5, direction];
    };
})();

var isScrolling;
function scrollAccordion() {
    var speed = checkScrollSpeed(), space = 0,
        items = Object.values(doc.querySelector("div[accordion-scroll]").children);
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
    container.addEventListener('scroll', scrollAccordion)

    var nav = document.querySelector('nav');

    function getPageID() {
        pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
        if(window.location.pathname == '/' || window.location.pathname == '/index.html') { pathDir = 'home'; }
        return pathDir;
    }
    getPageID();

    if (nav.hasChildNodes() == false) { // NAVIGATION
        nav.innerHTML = `
            <div id="ymenu-c">
                <svg id="y" viewBox="0 0 25 25">
                    <g id="float"> 
                        <g>
                            <rect id="gravity_float" x="-2.5" y="0.2" style="fill:none;pointer-events:none;/*stroke:green;stroke-width:0.15;stroke-dasharray:1;*/" width="22.6" height="22.6"/>
                            <polygon points="6.3,3.3 14,9.2 9.4,10.3"/>
                            <path d="M8.8,6.5l2.9,2.2L10,9.1L8.8,6.5 M3.8,0.2l5,11.3l7.4-1.8L3.8,0.2L3.8,0.2z"/>
                        </g>
                    </g>
                    <g id="main" class="pre-spawn">
                        <g>
                            <rect id="gravity_main" x="-4.6" y="-2.1" style="fill:none;pointer-events:none;/*stroke:green;stroke-width:0.15;stroke-dasharray:1;*/" width="26.9" height="26.9"/>
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
            setTimeout(() => {
                removePreSpawn('svg#y > g#main');
            }, 50);
            setTimeout(() => {
                removePreSpawn('#ym-txt-c');
            }, 225);
        }, 300);
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
            
            function closeProjectCardPopup() {
                var allFocused = doc.querySelectorAll('div[accordion-scroll] .focus');
                if(allFocused) { allFocused.forEach((f) => { f.classList.remove('focus'); })}
                ppBG.style.opacity = '0';
                projectPopup.style.pointerEvents= 'none';
                projectPopup.classList.add('out');
                hideCurClose(projectPopup);
                setTimeout(() => {
                    projectPopup.remove();
                }, 1000);
            }

            var projectPopup = document.createElement('div');
            projectPopup.classList.add('project-popup');
            projectPopup.classList.add('pre');
            doc.querySelector('div[project-popup]').appendChild(projectPopup);

            projectPopup.innerHTML = `
                <div class="pp-bg" style="opacity:0;"></div>
                <div class="pp-popup-c">
                    <section class="pp-project">
                        <div class="pp-proj">
                            <div class="pp-img" style="background:url('`+ this.querySelector('.thumb').getAttribute('src') +`');"></div>
                        </div>
                    </section>
                    <section class="pp-desc">
                        <div class="pp-title"><span>`+ this.querySelector('.p-title > span').innerText +`</span></div>
                        <div class="pp-desctxt">
                            `+ projectsDesc[this.id].desc +`
                        </div>
                    </section>
                </div>
                <div class="pp-curclose">
                    <svg viewBox="0 0 32 32">
                        <line x1="26.3" y1="26.3" x2="5.7" y2="5.7"/>
                        <line x1="5.7" y1="26.3" x2="26.3" y2="5.7"/>
                    </svg>
                </div>
            `;

            var ppBG = projectPopup.querySelector('.pp-bg');

            // Cursor Close on BG hover
            function moveCurClose(event) {
                var cursorX = event.clientX,
                    cursorY = event.clientY;
                iconClose = projectPopup.querySelector('.pp-curclose');
                iconClose.style.top = cursorY + 'px';
                iconClose.style.left = cursorX + 'px';
            }
            function showCurClose(projectPopup) {
                projectPopup.querySelector('.pp-curclose').classList.add("hover");
            }
            function hideCurClose(projectPopup) {
                projectPopup.querySelector('.pp-curclose').classList.remove("hover");
            }
            moveCurClose(ev);
            ppBG.addEventListener('mousemove', moveCurClose);
            ppBG.addEventListener('mouseover', function() { showCurClose(projectPopup); });
            ppBG.addEventListener('mouseout', function() { hideCurClose(projectPopup); });

            projectPopup.addEventListener('mousemove', moveCurClose);
            setTimeout(function() { projectPopup.removeEventListener('mousemove', moveCurClose); }, 800);
            
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
        }

        allAccItems.forEach((item) => {
            function openAccItem() {
                function closeAccItem(i) {
                    i.setAttribute('state', 'closing');
                    setTimeout(() => {
                        if(i.getAttribute('state') == 'closing') {
                            i.setAttribute('state', 'closed');
                            setTimeout(() => {
                                if(i.getAttribute('state') == 'closed') {
                                    i.querySelector('.acclist-content').remove();
                                }
                            }, 200);
                        }
                    }, 1100);
                }

                if(['closing', 'closed'].includes(item.getAttribute('state'))) {
                    item.setAttribute('state', 'opening');
                    var accCHidden = doc.querySelector('*[accordion-content] #'+ item.id +' > .acclist-content');

                    var otherAccItems = doc.querySelectorAll('.acclist-item:not(#'+ item.id +')');
                    otherAccItems.forEach((itemOther) => {
                        if(['opening', 'opened'].includes(itemOther.getAttribute('state'))) {
                            setTimeout(() => {
                                closeAccItem(itemOther);
                            }, 1);
                        }
                    })

                    var accCIsAlready = item.querySelector('.acclist-content');
                    if(accCIsAlready == null) {
                        var accCReal = accCHidden.cloneNode(true);
                        accCReal.style.transition = "0s";
                        accCReal.style.height = "0px";
                        accCReal.style.transform = "translateY(75px)";
                        item.querySelector('.acclist-in').appendChild(accCReal);
                        item.querySelectorAll('.al-card').forEach((card) => {
                            card.addEventListener('click', openProjectCardPopup);
                        })
                        setTimeout(() => {
                            accCReal.style.transition = null;
                            accCReal.style.height = accCHidden.offsetHeight +'px';
                            accCReal.style.transform = null;
                            setTimeout(() => {
                                if(item.getAttribute('state') == 'opening') {
                                    item.setAttribute('state', 'opened');
                                }
                            }, 1100);
                        }, 1);
                    }
                    //else {
                    //    console.log('-- already exists')
                    //}
                }
                else if(['opening', 'opened'].includes(item.getAttribute('state'))) { // already opened
                    closeAccItem(item);
                }
            }

            item.setAttribute('state', 'closed');
            item.querySelector('.acclist-btn').addEventListener('click', openAccItem);
        })
    }
}
init();
swup.on('contentReplaced', init);