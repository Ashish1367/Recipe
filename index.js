const resultContainer = document.getElementById("result");

const searchBtn = document.getElementById("search-button");

const searchInput = document.getElementById("search-input");

const searchContainer = document.querySelector("search-box");

const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", searchMeal);
searchInput.addEventListener("keydown",function(e){
    if(e.keyCode===13){
        e.preventDefault();
        searchMeal();
    }
});

function searchmeal(){
    const userinput = searchInput.value.trim();
    if(!userinput){
        resultContainer.innerHTML = `<h3>Input Field
        cannot be Empty</h3>`
    }
}