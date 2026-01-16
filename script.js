// Update footer year
document.getElementById('years').textContent = new Date().getFullYear();

function openPanel(){
  document.getElementById("sidePanel").classList.add("active")
}

function closePanel() {
  document.getElementById("sidePanel").classList.remove("active");
}
