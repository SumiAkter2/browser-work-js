function loadData(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json=>console.log(json))
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> displayUsers(data));
}
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
}
// loadPost();
function displayUsers(data){
    const ul=document.getElementById('users');
  for(const user of data){
      
      const li = document.createElement('li');
      li.innerText=`name:${user.name},  email:${user.email}, address: ${user.address}`;
      ul.appendChild(li);
  }

}