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

// Saves prefs for when the user leaves the page
function savePrefs() {
  localStorage.setItem("userPrefs", JSON.stringify(userPrefs));
}

// This part will store the user's interactions with movies
const userPrefs  = JSON.parse(localStorage.getItem("userPrefs")) || {
  likes: [],
  dislikes: [],
  favorites: [],
};

const actionButtons = document.querySelectorAll(".action-buttons button")
const likeId = document.getElementById("like")
const DislikeId = document.getElementById("dislike")
const FavoriteId = document.getElementById("favorite")
actionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const preference = button.textContent.toLowerCase();

    if (preference == "like" || preference == "liked") {
      const index = userPrefs.likes.indexOf(movieId)
      if (index === -1) {
        userPrefs.likes.push(movieId);
        likeId.textContent = "liked";
      }
      else{
        userPrefs.likes.splice(index, 1);
        likeId.textContent = "like";
    }
    }
    if (preference == "dislike" || preference == "disliked") {
      const index = userPrefs.dislikes.indexOf(movieId)
      if (index === -1) {
        userPrefs.dislikes.push(movieId);
        DislikeId.textContent = "disliked";
      }
      else{
        userPrefs.dislikes.splice(index, 1);
        DislikeId.textContent = "dislike";
    }
    }
    if (preference == "favorite" || preference == "favorited") {
      const index = userPrefs.favorites.indexOf(movieId)
      if (index === -1) {
        userPrefs.favorites.push(movieId);
        FavoriteId.textContent = "favorited";
      }
      else{
        userPrefs.favorites.splice(index, 1);
        FavoriteId.textContent = "favorite";
    }
    }
    savePrefs()
    console.log(userPrefs)
  });
});