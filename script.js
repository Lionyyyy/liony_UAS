// Animasi typing otomatis di halaman depan
const subtitle = document.querySelector(".subtitle");
const text = "Web Developer | Designer | Technology Enthusiast";

let index = 0;

function typeEffect() {
    if (index < text.length) {
        subtitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}
window.onload = typeEffect;

// Tombol scroll ke About
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// POPUP AFTER SEND BUTTON CLICK
const form = document.querySelector("form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // mencegah reload halaman
    popup.style.display = "flex"; // tampilkan pop-up
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none"; // tutup pop-up
    form.reset(); // kembali kosong !!!
});
