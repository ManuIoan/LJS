
const manc = document.querySelector(".manc")

const change = ()=>{
    location.reload();
}


fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => 
    {


        manc.innerHTML=`<div class="nume ac">${data.meals[0].strMeal}</div>
        <div class="categorie ac">${data.meals[0].strCategory}</div>
        <div class="origine ac">${data.meals[0].strArea}</div>
        <img src="${data.meals[0].strMealThumb}" alt="">
        <button onclick="change()">Schimba</button>`
        console.log(data)
        console.log(data.meals[0].idMeal)
        // data.meals[0].idMeal
    
    
    });