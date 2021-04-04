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

function getPageID() {
    pathDir = ((window.location.pathname).replace(/\/[^/]*$/, '')).replace(/^\//, '');
    if(window.location.pathname == '/' || window.location.pathname == '/index.html') { pathDir = 'home'; }
    return pathDir;
}

var o1 = [null, 33]; if(!isMini) { o1 = [true, 20]; };

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
            autoHideDelay : 800
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
        type : 'img',
        suType : 'img',
        tag: "sch",
        year : '2020',
        month : '01',
        desc : `
            <p>Look! Look!</p>
        `,
    },
    'sch_t_pm' : {
        type : 'img',
        suType : 'img',
        tag: "sch",
        year : '2019',
        month : '10',
        desc : `
            <p>What are we going to do with the dove?</p>
        `,
    },
    'stargazing_a' : {
        type : 'img',
        suType : 'img',
        tag: "rs",
        year : '2018',
        month : '10',
        desc : `
            <p>Who are you?</p>
            <h2>CONTEXTE</h2>
            <p>"STARGAZING" est un projet de métrage avec la boîte de production de mon ami réalisateur. On a créé cette affiche initialement pour une campagne de financement participatif. Cependant, on a préféré se focaliser sur nos études et d'autres projet, donc il n'a pas encore abouti.</p>
            <h2>LA PART ARTIFICIELLE</h2>
            <p>Rien ne provient de la réalité ici. Tous les éléments ont étés assemblés par ordinateur sur Photoshop. La voiture est un modèle 3D tiré d'un jeu vidéo (Garry's Mod). L'herbe, la lumière et la brume ont été réalisés au pinceau.
            <br>C'était principalement un travail d'incrustation.</p>
        `,
    },
    'y_in_b' : {
        type : 'img',
        suType : 'img',
        tag: "perso",
        year : '2018',
        month : '09',
        desc : `
            <p>Right in front of the only light</p>
            <h2>CONTEXTE</h2>
            <p>Je voulais m'atteler à la photographie, car j'avais un appareil photo avec une très bonne focale. Par manque de temps, je n'ai fait que ce cliché sur une étagère noire dans ma chambre avec un Y en carton et le flash de mon smartphone.</p>
            <h2>LA PART ARTISTIQUE</h2>
            <p>J'ai joué avec la lumière pour faire ressortir le plus de détails possibles. Le Y étant blanc, il contraste bien avec la scène qui est totalement plongée dans le noir. J'ai profité au passage de la texture de mon "sol" pour montrer la direction de la lumière.
            <br>Pour finir, j'ai passé le cliché sur Photoshop pour nettoyer un peu le fond et donner plus de caractère aux détails du Y.</p>
        `,
    },
    'fut_met' : {
        type : 'img',
        suType : 'img',
        tag: "perso",
        year : '2017',
        month : '06',
        desc : `
            <p>From what kind of place is it coming from?</p>
            <h2>CONTEXTE</h2>
            <p>L'un de mes premiers projets graphiques et aussi l'un de mes préférés.
            <br>L'idée d'une boule futuriste qui traverse l'espace me branchait bien à l'époque.</p>
            <h2>RÉALISATION</h2>
            <p>J'ai assemblé une sphère en 3D où j'ai appliqué des effets de destruction, je lui ai ajouté un cœur cyan et j'ai fait des particules. Pour donner une impression de vitesse à la météorite, j'ai rajouté des effets un peu 'magiques' et 'spatiaux', et du flou de mouvement.</p>
        `,
    },
    'destr_casque' : {
        type : 'img',
        suType : 'img',
        tag: "fun",
        year : '2016',
        month : '12',
        desc : `
            <p>Breaking it even more. Why wouldn't I?</p>
            <h2>CONTEXTE</h2>
            <p>Ce casque audio devenait vieux, il était temps d'en changer. Je voulais marquer <b>le coup</b> en le détruisant. Déjà par curiosité pour voir ce qu'il y avait à l'intérieur, et aussi pour honorer le bon temps passé avec.</p>
            <p>Cette image est la miniature de la vidéo sur YouTube que j'ai faite pour sa destruction. C'était l'un de mes premiers projets graphiques.</p>
        `,
    },

// 3D RENDERS
    'mc_factory92' : {
        type : 'vid',
        suType : 'interact',
        tag: "c",
        url : 'jN7L44_-igk',
        format : '1:1',
        year : '2021',
        month : '01',
        desc : `
        `,
    },
    'mc_cyber_district1' : {
        type : 'img',
        suType : 'img',
        tag: "c",
        year : '2019',
        month : '08',
        desc : `
        `,
    },
    'mc_cyber_district2' : {
        type : 'img',
        suType : 'img',
        tag: "c",
        year : '2019',
        month : '08',
        desc : `
        `,
    },
    'sch_1_wc' : {
        type : 'vid',
        suType : 'interact',
        tag: "sch",
        url : 'Cg0DBZRAbqU',
        format : '1:1',
        year : '2019',
        month : '03-06',
        desc : `
            <p>As the days passes, everything's staying the same...</p>
        `,
    },

// MOTION DESIGN
    'i_rs_b' : {
        type : 'vid',
        suType : 'interact',
        tag: "rs",
        url : 'XOnAthClcEI',
        format : '16:9',
        year : '2018',
        month : '09',
        desc : `
            <p>Synthwave into the darkest place of space!</p>
            <h2>CONTEXTE</h2>
            <p>"RetroSaturn" étant la future boîte de production de mon ami, on a réalisé ce logo et on voulait l'essayer dans de l'animation.
            <br>Cette animation ne nous servira surement jamais, car l'ambiance est trop sombre et pesante, et le logo est sujet à changer.</p>
            <h2>LE BUT</h2>
            <p>Le but était de réaliser une introduction, style Synthwave/années 80s avec le quadrillage typique, les néons, les étoiles, les gliOtherChs...
            <br>J'ai même ajouté des effets sonores pour enrichir l'ambiance.</p>
        `,
    },
    'i_y2' : {
        type : 'vid',
        suType : 'interact',
        tag: "perso",
        url : 'UkL4zVUw27Y',
        format : '16:9',
        year : '2017',
        month : '09',
        desc : `
            <p></p>
            <h2>CONTEXTE</h2>
            <p>J'y ai incorporé tout le savoir que je possédais. J'avais pour but de faire l'animation la plus aboutie possible, peu importe si je venais à ne jamais l'utiliser.</p>
            <p>Cette introduction est très brutale, peut-être même trop à mon goût aujourd'hui, mais c'était le coût à payer pour faire le plus condensé que je pouvais.</p>
        `,
    },
    'i_inex' : {
        type : 'vid',
        suType : 'interact',
        tag: "c",
        url : '46MrLGy5Xb8',
        format : '16:9',
        year : '2017',
        month : '03',
        desc : `
            <p></p>
        `,
    },
    'i_yc' : {
        type : 'vid',
        suType : 'interact',
        tag: "perso",
        url : 'PR0fVAGbHIQ',
        format : '16:9',
        year : '2017',
        month : '01',
        desc : `
            <p></p>
            <h2>CONTEXTE</h2>
            <p>Au collège, je faisais des vidéos sur YouTube avec un ami du nom de Clément. Donc j'ai fait une introduction pour nos vidéos.</p>
            <h2>LONGUEUR</h2>
            <p>C'est une longue introduction, car nos vidéos étaient rares et beaucoup montées. Donc il fallait marquer l'événement avec une introduction marquante.</p>
        `,
    },

// POSTERS
    'pdf_apc_hpi' : {
        type : 'pdf',
        suType : 'interact',
        tag: "c",
        url : '1J0SOaGtPElDcgNwxXx55vr_E_ah3cZDc',
        year : '2019',
        month : '11',
        desc : `
        `,
    },
    'pdf_apc_wvhp' : {
        type : 'pdf',
        suType : 'interact',
        tag: "c",
        url : '1bCm600IXEowAT_jnyQLQcYP05QcAATYr',
        year : '2019',
        month : '08',
        desc : `
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
                if(i.getAttribute('level') != "1") { spaceMax /= 3; }
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
    var nav = document.querySelector('nav'),
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
        doc.querySelector('svg#y').style.width = '20vw';
    } else {
        nav.style.height = null;
        doc.querySelector('svg#y').style.width = null;
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

            var proj, pTag, pTitle,
            pSpan = p.querySelector('.p-title > span');

            if(projectsDesc[p.id].type == 'img') {
                imgMiniSRC = p.querySelector('.thumb').getAttribute('src');
                proj = `
                    <div style="width:100%;height:100%;"><img class="pp-img" src="`+ imgMiniSRC +`" style="background-image: url(`+ imgMiniSRC +`);"></img></div>
                `
            } else if(projectsDesc[p.id].type == 'vid') {
                var format = projectsDesc[p.id].format, f;

                if(format == '1:1' || format == 'fill') { f = '80.1vh'; }
                else if(format == '16:9') { f = '56.25%'; }
                else { f = format == '1:1'; }

                proj = `
                <div id="player-c">
                    <div id="player" style="padding-bottom: `+ f +`;">
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/`+ projectsDesc[p.id].url +`?rel=0&color=white&loop=1&playlist=`+ projectsDesc[p.id].url +`" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                `
            } else if(projectsDesc[p.id].type == 'pdf') {
                proj = `
                <div id="pdf-reader">
                    <iframe class="pp-pdf" src="https://drive.google.com/file/d/`+ projectsDesc[p.id].url +`/preview" width="100%" height="100%" frameborder="0"></iframe>
                </div>
                `
            }
            if(projectsDesc[p.id].tag == 'perso') { pTag = 'Personnal Project';
            } else if(projectsDesc[p.id].tag == 'sch') { pTag = 'School Project';
            } else if(projectsDesc[p.id].tag == 'fun') { pTag = 'Fun';
            } else if(projectsDesc[p.id].tag == 'c') { pTag = 'Commission';
            } else if(projectsDesc[p.id].tag == 'rs') { pTag = 'RetroSaturn';
            }
            if(pSpan.hasAttribute('long-title')) { pTitle = pSpan.getAttribute('long-title');
            } else { pTitle = pSpan.innerText; }
            projectPopup.innerHTML = `
                <div class="pp-bg" style="opacity:0;"></div>
                <div class="pp-popup-c">
                    <div class="pp-sectiongrid">
                        <section class="pp-project" pp-suType=`+ projectsDesc[p.id].suType +`>
                            <div class="pp-proj">`
                                + proj +`
                            </div>
                            <div class="pp-scaleup"></div>
                        </section>
                        <section class="pp-desc" scroll>
                            <div class="pp-title">
                                <span id="big">`+ pTitle +`</span>
                                <div class="pp-t-pills">
                                    <span id="date">`+ projectsDesc[p.id].year +`.`+ projectsDesc[p.id].month +`</span>
                                    <span id="tag">`+ pTag +`</span>
                                </div>
                            </div>
                            <div class="pp-desctxt">
                                `+ projectsDesc[p.id].desc +`
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

            if(projectsDesc[p.id].type == 'img') {
                // Load Higher Res Picture (https://stackoverflow.com/a/54123157)
                function loadHighResImage(elem, highResUrl) {
                    let image = new Image();
                    image.addEventListener('load', () => elem.src = highResUrl);
                    image.src = highResUrl;
                };
                loadHighResImage(projectPopup.querySelector('.pp-img'), '../src/projects/'+ item.id +'/'+ p.id +'.jpg');
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

                projectPopup.querySelector('.pp-scaleup').addEventListener('click', moveCurClose);

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
                        if(itemLv == '2') { thisItem.closest('.acclist-content').style.height = doc.querySelector('*[accordion-content][level="1"] #'+ thisItem.closest('section[level="1"]').id +' > .acclist-content').offsetHeight + accCHidden.offsetHeight +'px'; }
                        accCReal.classList.add('clos');
                        accCReal.addEventListener('transitionend', (ev) => { if (ev.propertyName == 'height') { finalState(thisItem); }});
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