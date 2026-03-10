// Read the URL
const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));

// Find the matching movie
const movie = movies.find(m => m.id === movieId);

if (movie) {
  document.getElementById("title").textContent = movie.title;
  document.getElementById("description").textContent = movie.description;
  document.getElementById("poster").src = movie.poster;
  document.getElementById("genre").textContent = movie.genre;
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
  favorites: [],
  likedGenres: [],
};

const actionButtons = document.querySelectorAll(".action-buttons button")
const likeId = document.getElementById("like")
const DislikeId = document.getElementById("dislike")
const FavoriteId = document.getElementById("favorite")

if (userPrefs.likes.includes(movieId)) {
  likeId.textContent = "liked";
}

if (userPrefs.favorites.includes(movieId)) {
  FavoriteId.textContent = "favorited";
}

// This part saves user preferences
actionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const preference = button.textContent.toLowerCase();

    if (preference == "like" || preference == "liked") {
      const index = userPrefs.likes.indexOf(movieId)
      if (index === -1) {
        userPrefs.likes.push(movieId);
        // Dont forget the genre for the recommendation system
          if (!userPrefs.likedGenres.includes(movie.genre)) {
            userPrefs.likedGenres.push(movie.genre);
          }
        likeId.textContent = "liked";
      }
      else{
        userPrefs.likes.splice(index, 1);
          // Remove genre if no more movies of that genre are liked
          if (!movies.some(m => userPrefs.likes.includes(m.id) && m.genre === movie.genre)) {
            const genreIndex = userPrefs.likedGenres.indexOf(movie.genre);
            if (genreIndex !== -1) {
              userPrefs.likedGenres.splice(genreIndex, 1);
            }
          }
        likeId.textContent = "like";
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