let joueur = document.querySelector('h4');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let batonnets = document.querySelector('.batonnets');
let nbrjoueurs = document.querySelector('.nbrjoueurs');
let btn = document.getElementById('btn');
let nbJoueurs = document.getElementById('nbJoueurs');
let joueurActuel = 1;

// le nombre de joueurs ; 1 par defaut
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    nbJoueurs = parseInt(nbJoueurs.value)
    if (![1, 2].includes(parseInt(nbJoueurs))) {
        nbJoueurs = 1; 
    }
    nbrjoueurs.classList.add('active')
})
for (let i=0; i<21; i++){
    let batonnet = document.createElement('li')
    batonnets.appendChild(batonnet)
}
function retirerBatonnets(nbr){
    for (let i=0; i<nbr; i++){
        if (batonnets.lastElementChild){
            batonnets.removeChild(batonnets.lastElementChild);
        }
}
    if (batonnets.children.length ===0 ){
        batonnets.innerHTML=`
        <div>
        <p>Le joueur ${joueurActuel} a perdu !</p>
        <button class="btn4 bn" onclick="recharge()">Rejouer</button>
    </div>`;
    }
    if (nbJoueurs ===2){
        joueurActuel = joueurActuel === 1 ? 2 : 1;
        joueur.textContent = "😎Tour du joueur " + joueurActuel;
    }
    else{
        if (joueurActuel ===1){
            joueurActuel = "IA";
            joueur.textContent = "Tour de l'IA 🤖";
            setTimeout(tourIA, 800);
        }
        else{
            joueurActuel = 1;
            joueur.textContent = "😎Tour du joueur 1"
        }
    }
}
function tourIA(){
    let choix = Math.min(Math.floor(Math.random()*3)+1, batonnets.children.length);
    retirerBatonnets(choix);
}
function recharge(){
    location.reload();
}
btn3.addEventListener('click', ()=> retirerBatonnets(3));
btn2.addEventListener('click', ()=> retirerBatonnets(2));
btn1.addEventListener('click', ()=> retirerBatonnets(1));
