const addItem = () =>{
     const nameField = document.getElementById('product-id');
const name =nameField.value ;


if(!name){
    return;
}

//display cart
displayCart(name);

//add cart
addItemCart(name);

nameField.value ='';
}
const displayCart = name =>{
const ul = document.getElementById('ul-product');
const li = document.createElement('li');
li.innerText = name;
ul.appendChild(li);
}
const getCart=()=>{
const cart = localStorage.getItem('cart');
let cartObj;
if(cart){
    cartObj= JSON.parse(cart)
}
else{
    cartObj={};

}
return cartObj;
}

const addItemCart = name =>{
    const cart = getCart();
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}