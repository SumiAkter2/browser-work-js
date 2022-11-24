console.log('ma is coming');
// alert('ma is comming open the book.');

const maComing= () => {
    alert ('hey, what ?')
}
const askPicnic=()=>{
    const response =confirm('Are you going to picnic?');
    console.log(response);
    if(response=== true){
        alert('amake taka dis');

    }
    else{
        alert('ja vag!!!')
    }
}


const proposeYou= ()=>{
    const response = confirm('Do you love me');
    console.log(response);
    if(response=== true){
        alert('give a rose');

    }
    else{
        alert('leave me alone!')
    }
}

const askName =()=>{
    const name= prompt('what is your name?');
    if(name){
        console.log(name)
    }
}