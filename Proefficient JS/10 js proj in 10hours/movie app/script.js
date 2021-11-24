/** @format */

const movie = document.getElementById("movie");

let i = 0;
let ast;

fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&page=1"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    ceo = "";
    for (i = 0; i < data.results.length; i++) {
      ast = `
      
      <div class="mov">
      <img src="https://image.tmdb.org/t/p/w1280${data.results[i].poster_path}">
      <div class="idea">
      <p class="dr">${data.results[i].original_title}</p>
      <p class="st">${data.results[i].vote_average}</p>
      </div>
      </div>       
      
      `;


      if (ast) ceo += ast;
    }
    movie.innerHTML = ceo;
  });
