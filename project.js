
fetch('https://jsonplaceholder.typicode.com/users')
    .then((users)=>users.json())
    .then((users)=>{

        for (const user of users) {

            let divUsers = document.getElementsByClassName('users')[0];

            let divForUser= document.createElement('div');
            divForUser.classList.add('user');
            divUsers.appendChild(divForUser)

            let divInfo = document.createElement('div');
            let h1=document.createElement('h1');
            let h2 = document.createElement('h2');
            divInfo.append(h1,h2);

            h1.innerHTML = `user-id: ${user.id}`;
            h2.innerHTML = `name: ${user.name}`;

            let button = document.createElement('button');
            button.innerText = 'Link';

            divForUser.append(divInfo,button)

            button.onclick= function (){
                window.location.href = 'user-details.html?id='+ user.id;
            }
        }
    })