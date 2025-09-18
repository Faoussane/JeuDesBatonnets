let joueur = document.querySelector('h4');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let batonnets = document.querySelector('.batonnets');

for (let i=0; i<21; i++){
    let batonnet = document.createElement('li')
    batonnets.appendChild(batonnet)
}
btn3.addEventListener('click', ()=>{
    for (let i=0; i<3; i++){
        if (batonnets.lastElementChild){
            batonnets.removeChild(batonnets.lastElementChild);
        }
}
})
btn2.addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
        if (batonnets.lastElementChild) {
            batonnets.removeChild(batonnets.lastElementChild);
        }
    }
});

btn1.addEventListener('click', () => {
    if (batonnets.lastElementChild) {
        batonnets.removeChild(batonnets.lastElementChild);
    }
});
