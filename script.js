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