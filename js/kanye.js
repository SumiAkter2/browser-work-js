const loadquote=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=> res.json())
    .then(data=>displayquote(data));
}
const displayquote= quote=>{
  
const blockquote=document.getElementById('quote');
blockquote.innerText=quote.quote;

}