const userImage=document.getElementById('user-img');
const userName=document.getElementById('user-name');
const userEmail=document.getElementById('user-email');


// const userCard=document.getElementById('profile-card');---------> This will remove the viaplaceholder;
const userCardTemplate=document.getElementById('profile-card-template');

const userContainer= document.getElementById('container');

async function fetchdata (){
    const response =await fetch('https://dummyjson.com/users');
    const Data =await response.json();
    const users= Data.users;

    bindData(users);
}

function bindData(users){
    users.forEach((user) => {
        // for accesing all the API's in the async function 
        // and the value passed to the cloneNode is to access the inner elments of the profile-card
        
        const userCardClone=userCardTemplate.content.cloneNode(true);


        //for accessing the usercloneCard
        const userImage=userCardClone.querySelector('#user-img');
        const userName=userCardClone.querySelector('#user-name');
        const userEmail=userCardClone.querySelector('#user-email');

        userImage.src=user.image;
        userName.innerHTML=`${user.firstName} ${user.lastName}`;
        userEmail.innerHTML=user.email;

        //for showing the usercloneCard on the screen.
        userContainer.appendChild(userCardClone);

     })

    //  userCard.style.display="none";
}

fetchdata();