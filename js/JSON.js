console.log('api');
//javascript object
const student={name:'sumi', roll:1, job:'education'};
const stringified = JSON.stringify(student);
// console.log(student);
// console.log(stringified);

const shop={
    name:'Alia store',
    address:'Ranbir Road',
    profit:1500,
    owner:{
name:'Alia',
job:'actor'
    },
    products:['laptop', 'mobile', 'pepsi'],
    isExpensive:false
}
const shopStringified=JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const convert=JSON.parse(shopStringified);
console.log(convert)
