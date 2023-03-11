const button = document.getElementById('song');

button.addEventListener('click',()=>{
   const audio =new Audio('jai.mp3');
   audio.play();
})