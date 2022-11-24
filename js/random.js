const loadLocation=()=>{
    const url=`https://randomuser.me/api/?results=5`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayLocation(data));
}
loadLocation();
 const displayLocation= results =>{
     const showDiv=document.getElementById('random');
   
         console.log(results)
         const div=document.createElement('div');
          div.innerText=`${results.loction.country}` ;     
         showDiv.appendChild(div);
    
 }