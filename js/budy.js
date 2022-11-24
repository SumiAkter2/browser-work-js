const loadBuddies =()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddies(data))
}
loadBuddies();
const displayBuddies= data =>{
    const buddies = data.results;
    console.log(data)
    const buddyDiv=document.getElementById('buddy');
    for (const buddy of buddies){
    //   console.log(buddy)
        const p=document.createElement('p');
        p.innerText=`Name: ${buddy.name.first} ${buddy.name.last} location: ${buddy.location.coordinates.latitude} ${buddy.location.street.name}`;
        buddyDiv.appendChild(p);
    }
    // console.log(data.results)
}