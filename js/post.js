function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>displayPost(data))
}
loadPost();
function displayPost(posts){
    const postContainer = document.getElementById('post-id');
for(const post of posts){
    console.log(post)
    const div= document.createElement('div');
    div.style.textAlign='center';
    div.classList.add('post');
    div.classList.add('posts');
    div.innerHTML=`
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
}
}