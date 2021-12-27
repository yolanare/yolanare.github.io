//# Scripts #//

//- Setup -
import './style.scss';


// - LOADING SCREEN
var FontsLoaded = false,
    loadingScreenEl = document.createElement("loading-screen");
    loadingScreenEl.setAttribute("class", "on-normal on-assets");
    document.body.appendChild(loadingScreenEl);

function removeLoadingScreen(on) {
    document.querySelector("loading-screen").classList.remove("on" + on);
    console.log('page loaded', on);
}

// -- ASSETS TO LOAD
const srcP = '/src/patterns/',
assetsToLoad = [
    srcP + 'p1.png',
];
(function loadAssets() {
    var assetsLoader = document.createElement("assets-loader");
        assetsLoader.classList.add("dummy");
        document.body.appendChild(assetsLoader);

    // stackoverflow.com/a/37826698 - dividing array by chunks
    var perChunk = 4, // items per chunk
        assetsByChunks = assetsToLoad.reduce((all,one,i) => {
            const ch = Math.floor(i/perChunk); 
            all[ch] = [].concat((all[ch]||[]),one); 
            return all
        }, []);
    
    var delay = 0, assetsChunkCount = 0;
    (function loadThemAll() { // load every assets four by four
        setTimeout(() => { // delaying and separating by chunks helps browser performances
            delay = 100;
            var items = '',
                chunk = assetsByChunks[assetsChunkCount],
                assetLoaded = 0;

            chunk.forEach(asset => { items += '<img src='+ asset +'>'; });
            assetsLoader.innerHTML = items;

            // load next chunk when every asset here has been loaded
            assetsLoader.querySelectorAll("img").forEach(item => { item.addEventListener('load', () => { // load event on every of them
                ++assetLoaded; // +1 when loaded
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
})();

// -- NORMAL LOAD
window.addEventListener("load", () => { // to be sure the loading screen goes out at some point
    if(!FontsLoaded) { removeLoadingScreen("-normal"); }
});
document.fonts.onloadingdone = () => { // fonts are not too fast and not too long to load, seems good enough
    removeLoadingScreen("-normal"); FontsLoaded = true;
};


//- Variables -


//- Scripts -
function WelcomeSpawnAnimation() { // Step 1
    console.log('spawn');
}

function WelcomeInteractionAnimation() { // Step 2
    console.log('click');
}

window.addEventListener("DOMContentLoaded", WelcomeSpawnAnimation);

window.addEventListener("click", WelcomeInteractionAnimation);