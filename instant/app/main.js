//# Scripts #//

//- Setup -
import './style.scss';


function addEvTrEnd(elem, func, o) { // executes a function when css transition of element ends
    var isNotAlready = true,
        o = o ? o : true; // once?
    elem.addEventListener('transitionend', () => { func(); }, { once : o });

    // forgot what most of it does, but it works so it's fine (I think)
    trEndAlready.forEach(e => { isNotAlready &= (e == elem) ? false : true; });
    if(isNotAlready) {
        trEndAlready.push(elem);
        elem.childNodes.forEach((el) => { el.addEventListener('transitionend', (ev) => { ev.stopPropagation(); })}); // Makes sure that it doesn't propagate to its children
    }
} var trEndAlready = [];


// - LOADING SCREEN
function loadingStepsInfoAdd(loadingScreenEl, info, force) { // adds custom status info under the loading bar
    var force = force ? force : false; // will force dismiss loading screen if true

    function newInfo(info, d, s) {
        var d = d ? d : 1250,
            s = s ? s : "";
        var el = document.createElement("div");
            el.innerHTML = info;
            el.setAttribute("style", s); // custom css style if needed
            loadingScreenEl.querySelector(".loading-steps-info").appendChild(el);

        setTimeout(() => {
            el.classList.add('spawn');
            setTimeout(() => {
                el.classList.add('hide');
                addEvTrEnd(el, () => { el.remove(); })
            }, d); // custom delay if needed
        }, 10);
    }

    // new info
    if(loadingScreenEl.querySelector(".loading-steps-info") && !loadingScreenEl.querySelector(".loading-animation-container.hide")) { // will run only if the loading screen infos are shown
        newInfo(info);
    }

    // forces dismiss the loading screen in case it takes too long to load/can't finish
    if(force) {
        setTimeout(() => {
            if(document.querySelector("loading-screen[class*='on']")) { // only if not dismissed
                if(loadingScreenEl.querySelector(".loading-steps-info")) { // info
                    newInfo("Loading is taking too long, dismissing the loading screen...", 3000, "color: var(--y-r2)");
                    console.warn("[Y.ART] Loading of assets is taking too long. Loading screen dismissed.");
                }
                setTimeout(() => { // force dismiss
                    loadingScreenEl.classList.add("force-dismiss");
                }, 2000);
            }
        }, 4000);
    }
}

function loadNormal(loadingScreenEl, removeLoadingScreen) { // events when normal necessary things are loaded
    var FontsLoaded = false;

    loadingScreenEl.classList.add("on-normal");

    window.addEventListener("load", () => { // to be sure the loading screen goes out at some point
        if(!FontsLoaded) { removeLoadingScreen(); }
        loadingStepsInfoAdd(loadingScreenEl, "Page Loaded", true); // true = force dismiss loading screen
    });
    document.fonts.ready.then(() => { // fonts are not too fast and not too long to load, seems good enough
        removeLoadingScreen(); FontsLoaded = true;
        loadingStepsInfoAdd(loadingScreenEl, "Fonts Loaded");
    });
};

// -- ASSETS TO LOAD
const srcP = '/src/patterns/',
assetsToLoad = [
    srcP + 'p1.png',
];

function loadThings(assetsToLoad, customThingsToLoad, toExecAfterLoading) {
    // creating basic loading screen
    var loadingScreenEl = document.createElement("loading-screen");
        loadingScreenEl.classList.add("on-assets");
        document.body.appendChild(loadingScreenEl);

    function removeLoadingScreen(on) { // normal way to dismiss the loading screen
        loadingScreenEl.classList.remove("on" + on);
        addEvTrEnd(loadingScreenEl, () => { loadingScreenEl.remove(); })
        
        // executes a function when dismissing the loading screen (supposedly when everything has loaded)
        if(!document.querySelector("loading-screen[class*='on']")) { toExecAfterLoading(); }
    }

    // can load things other than assets if needed
    var customThingsToLoad = customThingsToLoad ? customThingsToLoad : false;
    if(customThingsToLoad) { customThingsToLoad(loadingScreenEl, () => { removeLoadingScreen("-normal"); }); }

    // will need some visuals if it takes time, and it's cooler
    if(!loadingScreenEl.querySelector(".loading-animation-container")) {
        loadingScreenEl.innerHTML = `
            <div class="loading-animation-container hide">
                <div class="head">
                    <div class="idle-animation"></div>
                    <span>Loading...</span>
                </div>
                
                <div class="loading-bar">
                    <div class="bar"></div>
                    <span class="percent"></span>
                </div>
                <div class="loading-steps-info"></div>
            </div>
        `;
    }

    // delay before showing the loading infos because it is not necessary until it really takes time
    setTimeout(() => { loadingScreenEl.querySelector(".loading-animation-container").classList.remove('hide')
    }, 1000);

    // invisible element where the assets while be created to load theme
    var assetsLoader = document.createElement("assets-loader");
        assetsLoader.classList.add("dummy");
        document.body.appendChild(assetsLoader);


    // dividing array by chunks - (stackoverflow.com/a/37826698)
    var perChunk = 4, // items per chunk
        assetsByChunks = assetsToLoad.reduce((all,one,i) => {
            const ch = Math.floor(i/perChunk); 
            all[ch] = [].concat((all[ch]||[]),one); 
            return all
        }, []);
    
    var delay = 0, assetsChunkCount = 0, progressLoadingCurrent = 0;
    (function loadThemAll() { // load every assets four by four
        setTimeout(() => { // delaying and separating by chunks helps browser performances
            delay = 50;
            var items = '',
                chunk = assetsByChunks[assetsChunkCount],
                assetLoaded = 0;

            chunk.forEach(asset => { items += '<img src='+ asset +'>'; });
            assetsLoader.innerHTML = items;

            // load next chunk when every asset here has been loaded
            assetsLoader.querySelectorAll("img").forEach(item => { item.addEventListener('load', () => { // load event on every of them
                // +1 when loaded
                ++assetLoaded; ++progressLoadingCurrent;

                const percent = ((progressLoadingCurrent / assetsToLoad.length) * 100).toFixed(0) + "%";
                loadingScreenEl.querySelector(".loading-bar .bar").style.width = percent;
                loadingScreenEl.querySelector(".loading-bar .percent").innerHTML = percent;

                if(assetLoaded >= chunk.length) { // when all assets are loaded
                    if(assetsChunkCount < assetsByChunks.length){ // if not the last chunk
                        loadThemAll();
                    } else { // when is the last chunk : clean & finish
                        assetsLoader.remove();
                        removeLoadingScreen("-assets");
                    }
                }
            });});

            ++assetsChunkCount;
        }, 0 + delay);
    })();
};

loadThings(assetsToLoad, loadNormal, WelcomeSpawnAnimation);


//- Variables -


//- Scripts -
function WelcomeSpawnAnimation() { // Step 1
    console.log('spawn');
}

function WelcomeInteractionAnimation() { // Step 2
    console.log('click');
}

document.querySelector(".y-layer").addEventListener("click", WelcomeInteractionAnimation, { once : true });