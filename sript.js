// Mode terang/gelap
const toggleMode = document.getElementById("toggle-mode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Efek suara klik (opsional)
const clickSound = new Audio(
  "https://www.soundjay.com/buttons/sounds/button-16.mp3"
);
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("click", () => clickSound.play());
});

// Status buka/tutup otomatis
const status = document.getElementById("status-buka");
const now = new Date();
const jam = now.getHours();
if (jam >= 8 && jam < 22) {
  status.textContent = "🟢 Kami Sedang Buka";
} else {
  status.textContent = "🔴 Kami Sedang Tutup";
}

// Formulir pemesanan
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const pesanan = document.getElementById("pesanan").value;
  const waNumber = "6281234567890"; // Ganti sesuai nomor WA-mu
  const url = `https://wa.me/${waNumber}?text=Halo%20saya%20${encodeURIComponent(
    nama
  )}%20ingin%20memesan:%20${encodeURIComponent(pesanan)}`;
  window.open(url, "_blank");
});
