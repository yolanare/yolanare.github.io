const swup = new Swup({
    animateHistoryBrowsing: true,
    plugins: [new SwupScrollPlugin({
        doScrollingRightAway: true,
        scrollFriction: 0.8,
        scrollAcceleration: 0.6,
    })]
});

var doc = document.documentElement,
    isMini = undefined;

function checkWinSize() { if(window.innerWidth > 727) { isMini = false; } else { isMini = true; }};
checkWinSize(); window.addEventListener('resize', checkWinSize);

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
        newPos = window.scrollY;
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
        items = Object.values(doc.querySelector("*[scroll-accordion]").children);
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
    document.addEventListener('scroll', scrollAccordion)

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
                            <rect id="gravity_float" x="-2.5" y="0.2" style="fill:none;/*stroke:#00FF00;stroke-width:0.15;stroke-miterlimit:10;stroke-dasharray:1.0473;*/" width="22.6" height="22.6"/>
                            <polygon style="fill:#F5F8FA;" points="6.3,3.3 14,9.2 9.4,10.3"/>
                            <path d="M8.8,6.5l2.9,2.2L10,9.1L8.8,6.5 M3.8,0.2l5,11.3l7.4-1.8L3.8,0.2L3.8,0.2z"/>
                        </g>
                    </g>
                    <g id="main" class="pre-spawn">
                        <g>
                            <rect id="gravity_main" x="-4.6" y="-2.1" style="fill:none!important;/*stroke:#00FF00;stroke-width:0.15;stroke-miterlimit:10;stroke-dasharray:1.0473;*/" width="26.9" height="26.9"/>
                            <polygon style="fill:#F5F8FA;" points="9.9,11.8 18.8,3.8 12,21.4"/>
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
        }, 200);
    }

    if(pathDir != 'home') {
        nav.style.height = 'var(--content-top)';
        doc.querySelector('svg#y').style.width = '20vw';
    } else {
        nav.style.height = null;
        doc.querySelector('svg#y').style.width = null;
    }
}
init();
swup.on('contentReplaced', init);