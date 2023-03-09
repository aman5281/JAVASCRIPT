const counterText=document.getElementById('counter');
const posbtn= document.getElementById('pos-btn');
const negbtn= document.getElementById('neg-btn');

let count=0;
updateCount();

posbtn.addEventListener('click', ()=>{
    count++;
    updateCount();
})

negbtn.addEventListener('click', ()=>{
    if(count>0){
        count--;
    updateCount();
    }
})

function updateCount(){
    counterText.innerHTML=count;
}