const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> displayCountry(data))
}
loadCountry();
const displayCountry = countries=>{
    const countriesDiv = document.getElementById('countries');
countries.forEach(country=>{
  const div= document.createElement('div');
  div.classList.add('country');
div.innerHTML=`
<h3> ${country.name.common}</h3>
<p> ${country.capital}</p>
<button onclick="loadCountryByName('${country.name.common}')"> Details </button>
`;


//   const h3 = document.createElement('h3');
//   const p= document.createElement('p');
//   div.classList.add('country');
//   h3.innerText=country.name.common;
//   p.innerText=country.capital;
 
//   div.appendChild(h3);
//   div.appendChild(p);
  countriesDiv.appendChild(div);
    // console.log(country)
})
}
 const loadCountryByName=name=>{
     const url=`https://restcountries.com/v2/name/${name}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>displayCountryDetails(data[0]));
 }
 const displayCountryDetails = country=>{
     console.log(country)
const countryDiv = document.getElementById('country-details')
countryDiv.innerHTML=`
<h4>${country.name}</h4>
<p>population: ${country.population}</p>
<img width="200" src="${country.flag}">
`;
console.log(country.name)
 }
