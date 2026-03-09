// Here's the function with a parameter
function openPanel(panelId){
  document.getElementById(panelId).classList.add("active");
}

function closePanel(panelId) {
  document.getElementById(panelId).classList.remove("active");
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

// Search function
const searchInput = document.querySelector("nav input[type='text']"); // Selects the search bar
const categories = document.querySelectorAll(".category"); // and the categories

// Constantly listening for inputs
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  // Get the alt from each movie card
  movieCards.forEach(card => {
    const title = card.querySelector("img").alt.toLowerCase();
    const matches = title.includes(query);  // Match alts to user search

    // Hide movies that dont match the search
    card.style.display = matches ? "inline-block" : "none";
  });

  // Hide categories with no visible movies
  categories.forEach(section => {
    const visibleMovies = section.querySelectorAll(".square-button:not([style*='display: none'])");
    section.style.display = visibleMovies.length > 0 ? "block" : "none";
  });
});


