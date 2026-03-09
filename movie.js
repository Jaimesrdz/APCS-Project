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
  //document.getElementById("tags").textContent = movie.tags;
} else {
  document.body.innerHTML = "<h1>Movie not found</h1>";
}

function savePrefs() {
  localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
}

// This part will store the user's interactions with movies
const userPrefs = {
  likes: [],
  dislikes: [],
  favorites: [],
};

const actionButtons = document.querySelectorAll(".action-buttons button")
actionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const preference = button.textContent.toLowerCase();
    // Get movieId from button's data attribute
    const movieId = button.dataset.id || button.closest('.square-button')?.dataset.id;

    if (preference == "like") {
      console.log("Liked", movieId);
      // Optionally: addLike(movieId);
    }
    if (preference == "dislike") {
      console.log("Disliked", movieId);
      addDislike(movieId);
    }
    if (preference == "favorites") {
      console.log("Favorited", movieId);
      addFavorite(movieId);
    }
    savePrefs();
  });
});