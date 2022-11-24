function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
loadComment();
 function displayComment(posts){
const commentContainer = document.getElementById('comment');
for(const post of posts ){
    const div= document.createElement('div');
     div.classList.add('comments');
    div.innerText=`
    email: ${post.email} 
    `;
    commentContainer.appendChild(div);
    
}
 }

 function loadPhotos(){
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res => res.json())
 .then(data => displayPhotos(data))
    }
loadPhotos();
    function displayPhotos(photos){
        const ul = document.getElementById('photos');
        for(const photo of photos){
            const li = document.createElement('li');
            li.innerText=`
            <img src=" ${photo.url}.jpg >"
           `;
            ul.appendChild(li);
            console.log(photo.url)
        }
    }