/*
* Script pour empêcher le défilement de la page quand le menu est affiché
*/

let leCheckBox = document.querySelector("#cc-pour-bouton-burger");
console.log(leCheckBox);
let leBody = document.querySelector("body");

leCheckBox.addEventListener("click", gererLeDefilement);
function gererLeDefilement(event) {
    if(leCheckBox.checked == true){
        leBody.style.overflow = "hidden";
    } else{
        leBody.style.overflow = "scroll";
    }
}

let lesBoutons = document.querySelectorAll(".menu a");

for(let unBouton of lesBoutons){
    unBouton.addEventListener("click", controlerBoutonBurger);
}

function controlerBoutonBurger() {
    leCheckBox.checked = false;
    leBody.style.overflow = "scroll";
}