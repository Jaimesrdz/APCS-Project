// Update footer year
document.getElementById('years').textContent = new Date().getFullYear();

function openPanel(){
  document.getElementById("sidePanel").classList.add("active")
}

function closePanel() {
  document.getElementById("sidePanel").classList.remove("active");
}


// Select all movie cards
const movieCards = document.querySelectorAll(".square-button");

// Add click behavior to each card
movieCards.forEach(card => {
  card.addEventListener("click", () => {
    const movieId = card.dataset.id; // gets data-id
    window.location.href = `movie.html?id=${movieId}`;
  });
});

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

    if (preference == "like") console.log("Liked");
    if (preference == "dislike") addDislike(movieId);
    if (preference == "favorites") addFavorite(movieId);

    savePrefs();
  })
});