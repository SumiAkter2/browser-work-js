const searchFood=()=>{
    const searchFeild=document.getElementById('search-field');
    const searchText = searchFeild.value;
// console.log(searchText);
//clear data
 searchFeild.value=" ";

 if(searchText==''){
     //
 }
else{
     //load data
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
   .then(res=>res.json())
   .then(data=>displaySearchResult(data.meals));
    
}



}
const displaySearchResult=meals=>{
    const searchResult=document.getElementById('search-result');
    searchResult.textContent=' ';
 if(meals.lenght==0){
 //
 }
 else{

 }

    meals.forEach(meal=>{
        const div= document.createElement('div');
        div.classList.add('card');
        div.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
// console.log(meal)
    })
};

const loadMealDetail= mealId=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetail(data.meals[0]));
    
}
const displayMealDetail= meal=>{
const mealDetails=document.getElementById('meal-detail');
mealDetails.textContent='';  
console.log(meal);
const div=document.createElement('div');
div.classList.add('card');
div.innerHTML=`
<img width="200" src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body mx-auto">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
`;
mealDetails.appendChild(div);


}