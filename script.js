// Reset local storage
//localStorage.removeItem("userPrefs");

function loadFavorites(favoritesList) {
  
  favoritesList.innerHTML = ""

  userPrefs.favorites.forEach(id => {
    const movie = movies.find(m => m.id === id);
    if (!movie) return;

    const item = document.createElement("div");
    item.classList.add("favorite-item");

    item.innerHTML = `
      <button class="square-button" data-id="${movie.id}">
        <img src="${movie.poster}" alt="${movie.title}">
      </button>
    `;

    // Make the button clickable
    item.querySelector("button").addEventListener("click", () => {
      window.location.href = `movie.html?id=${movie.id}`;
    });

    favoritesList.appendChild(item);
  });
}

const favorites = document.getElementById("favoritesList");

// Here's the function with a parameter
function openPanel(panelId){
  loadFavorites(favorites); // Load favorites when opening the panel
  document.getElementById(panelId).classList.add("active");
}

function closePanel(panelId) {
  document.getElementById(panelId).classList.remove("active");
}

// Same as in movie.js, but for the home page to store prefrences
const userPrefs = JSON.parse(localStorage.getItem("userPrefs")) || {
  likes: [],
  favorites: [],
  likedGenres: []
};

function recommendedMovies() {
  // Get the recommended section
  const recSection = document.getElementById("recommended");

  // If there's no likedGenres, thhen hide the section
  if (userPrefs.likedGenres.length === 0) {
    recSection.style.display = "none";
    return;
  }

  // But if there is, then show the section and add the movies (block since we didnt use flexbox))
  recSection.style.display = "block";

  // Find movies with the same genre
  const recommendedMovies = movies.filter(movie =>
    userPrefs.likedGenres.includes(movie.genre)
  );

  // For each movie, add it to the recommended section
  recommendedMovies.forEach(movie => {
    const button = document.createElement("button");
    button.classList.add("square-button");
    button.dataset.id = movie.id;

    // Add the poster and alt for searching function
    button.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;

    // Also clicking behavior
    button.addEventListener("click", () => {
      window.location.href = `movie.html?id=${movie.id}`;
    });
    // Now add it to the row
    const recommendedRow = document.getElementById("recommendedRow");
    recommendedRow.appendChild(button);
  });
  // And add the row to the section
  recSection.appendChild(recommendedRow);
}

recommendedMovies();

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


