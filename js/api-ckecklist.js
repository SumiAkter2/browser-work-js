 //1.
 const loadComment=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
//2.

const displayComment=comments=>{
const showComment = document.getElementById('comments');
comments.forEach (comment =>{
    const div =document.createElement('div');
    div.innerHTML=`<div onclick="loadId('${comment.id}')">${comment.body}</div>`;
    // console.log(comment)
    showComment.appendChild(div);
})

const loadId = comments.id =>{
const url=`https://jsonplaceholder.typicode.com/=comments`;
fetch(url)
.then(res=> res.json())
.then(data.console.log(data));
}


}
 //3-4.
const loadComment2=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment2(data))
}
loadComment2();
  const displayComment2=comments=>{
      const showComment2=document.getElementById('comments')
      comments.forEach(comment=>{
          console.log(comment)
          const div= document.createElement('div');
          div.innerText=  `email: ${comment.email} , name: ${comment.name}`;
          showComment2.appendChild(div);
      });
  }