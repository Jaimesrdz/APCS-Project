// Update footer year
document.getElementById('years').textContent = new Date().getFullYear();

function openPanel(){
  document.getElementById("sidePanel").classList.add("active")
}

function closePanel() {
  document.getElementById("sidePanel").classList.remove("active");
}

// Our list
const movies = [
  {
    id: 1,
    title: "The Teachers",
    description: "A team of super intelligent teachers attempt to stop World War III.",
    year: 1993,
    genre: "Sci-Fi",
    poster: "images/theTeachers.jpg"
  },
  {
    id: 2,
    title: "Inception",
    description: "A thief who steals secrets through dream-sharing technology.",
    year: 2010,
    genre: "Sci-Fi",
    poster: "images/inception.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    year: 2014,
    genre: "Sci-Fi",
    poster: "images/interstellar.jpg"
  },
  {
    id: 4,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    year: 2008,
    genre: "Action",
    poster: "images/dark-knight.jpg"
  },
  {
    id: 5,
    title: "The Great Gatsby",
    description: "Man falls in love.",
    year: 2013,
    genre: "draman",
    poster: "images/the great gatsby.jpg"
  },
  {
    id: 6,
    title: "Someone like you",
    description: "Dawson searches for his hb sister.",
    year: 2024,
    genre: "romance",
    poster: "images/someonelikeyou.jpg"
  },
  {
    id: 7,
    title: "Five Nights at Freddys",
    description: "security gaurd tries to survive.",
    year: 2023,
    genre: "mystery",
    poster: "images/fivenightsatfreddys.jpg"
  },
  {
    id: 8,
    title: "Halloween",
    description: "Michael myers tries to unalive people.",
    year: 1978,
    genre: "horror",
    poster: "images/halloween.jpg"
  }

];


// Select all movie cards
const movieCards = document.querySelectorAll(".square-button");

// Add click behavior to each card
movieCards.forEach(card => {
  card.addEventListener("click", () => {
    const movieId = card.dataset.id; // gets data-id
    window.location.href = `movie.html?id=${movieId}`;
  });
});