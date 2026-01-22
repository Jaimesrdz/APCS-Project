// 1. Read the URL (movie.html?id=2)
const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));

// 2. Find the matching movie
const movie = movies.find(m => m.id === movieId);

// 3. Display the movie
if (movie) {
  document.getElementById("title").textContent = movie.title;
  document.getElementById("description").textContent = movie.description;
  document.getElementById("poster").src = movie.poster;
} else {
  document.body.innerHTML = "<h1>Movie not found</h1>";
}
