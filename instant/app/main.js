//# Scripts #//

//- Setup -
import './style.scss';



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