const images = [
   'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80 ', 
    'https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
   ' https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1620052581237-5d36667be337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80'
];

const n=images.length;
const flexcontainer=document.getElementById('flex-container');
const leftbtn=document.getElementById('left-btn');
const rightbtn=document.getElementById('right-btn');

const carouselNav=document.getElementById('carousel-nav');

// const containerWidth=80;
// const flexContainerWidth=n*containerWidth;
// flexcontainer.style.width=flexContainerWidth;

for(let i=0; i<n; i++){
    const newImg= document.createElement('img');
    newImg.src=images[i];
    newImg.classList.add('img-style'); //For removing the overflow of the image source;
    flexcontainer.appendChild(newImg);


    const dotdiv= document.createElement('div');
    dotdiv.classList.add('carousel-dot');
    carouselNav.appendChild(dotdiv);
    dotdiv.addEventListener('click',(event)=>{
    const index=[...carouselNav.children].indexOf(event.target); // converted into javascript array of accessing each dot.
    showImg(index);
})
}

let currentpositon=0;
showImg(0);

leftbtn.addEventListener('click',()=>{
    if(currentpositon>0){
        showImg(currentpositon-1);
    }
    else{
        showImg(n-1);
    }
})

rightbtn.addEventListener('click',()=>{
    if(currentpositon<n-1){
        showImg(currentpositon+1);
    }
    else{
        showImg(0);
    }
})

function showImg(position){
    //carousel dot logic movement;
    const preDot= carouselNav.children[currentpositon];
    preDot.classList.remove('active');
    currentpositon=position;

    const curDot= carouselNav.children[currentpositon];
    curDot.classList.add('active');

    const translateXDistance= -currentpositon*80;
    flexcontainer.style.transform=`translateX(${translateXDistance}vw)`;
}