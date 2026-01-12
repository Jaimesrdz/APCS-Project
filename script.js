// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple interaction
const btn = document.getElementById('helloBtn');
btn.addEventListener('click', () => {
  alert('Hello from your simple project!');
});
