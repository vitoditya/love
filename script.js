function toggleMusic() {
  var audio = document.getElementById("backgroundMusic");
  audio.muted = false;
  audio.play()
  }

// Fungsi untuk menunjukkan cinta
function showLove() {
  alert("Aku benar-benar mencintaimu! ❤️ Aku minta maaf ya sayang");
}

// Memastikan audio dimulai dengan volume yang sesuai
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("backgroundMusic");
  audio.volume = 0.3; // Mengatur volume menjadi 30%
});