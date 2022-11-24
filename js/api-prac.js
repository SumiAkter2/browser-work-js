function addUsers(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
  .then(data => displayShow(data));
}
function displayShow(data){
const ul=document.getElementById('users');
    for (const user of data){
console.log(user);
const li=document.createElement('li');
li.innerText= `id: ${user.id} ,  title: ${user.title}`
ul.appendChild(li);
    }
}
// function displayShow(data){
//     const ul =document.getElementById('user-id');
//     for(const user of data){
//         const li = document.createElement('li');
//         li.innerText='hi';
//         ul.appendChild(li);

//     }
// }