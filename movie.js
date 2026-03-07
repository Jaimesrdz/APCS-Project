// Read the URL
const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));

// Find the matching movie
const movie = movies.find(m => m.id === movieId);

// Display the movie
if (movie) {
  document.getElementById("title").textContent = movie.title;
  document.getElementById("description").textContent = movie.description;
  document.getElementById("poster").src = movie.poster;
  document.getElementById("genre").textContent = movie.genre;
   document.getElementById("tags").textContent = movie.tags;
} else {
  document.body.innerHTML = "<h1>Movie not found</h1>";
}

