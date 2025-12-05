// FADE IN ON SCROLL
const faders = document.querySelectorAll('.fade-target');
const appearOptions = { threshold:0.3 };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('fade-show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// TYPING EFFECT FOR SUBTITLE
const subtitles = [
  "Student of Information System",
  "UI/UX Enthusiast",
];
let subIndex = 0;
const subtitleContainer = document.getElementById("subtitleContainer");

function typeSubtitle(text, callback){
  subtitleContainer.innerHTML = '';
  let i = 0;
  function typing(){
    if(i < text.length){
      subtitleContainer.innerHTML += text[i];
      i++;
      setTimeout(typing, 80);
    } else {
      callback();
    }
  }
  typing();
}

function showNextSubtitle(){
  typeSubtitle(subtitles[subIndex], ()=>{
    setTimeout(()=>{
      subIndex = (subIndex+1)%subtitles.length;
      showNextSubtitle();
    }, 1500);
  });
}

showNextSubtitle();

// CONTACT FORM EMAIL VALIDATION + POPUP
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const emailWarning = document.getElementById('emailWarning');

const contactPopup = document.getElementById('contactPopup');
const closePopup = document.getElementById('closePopup');

contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(!emailInput.value.includes('@')){
    emailWarning.classList.remove('d-none');
    return;
  } else {
    emailWarning.classList.add('d-none');
  }

  // Tampilkan popup
  contactPopup.classList.add('show');

  // Reset form
  contactForm.reset();

  // Tutup otomatis setelah 4 detik
  setTimeout(()=>{
    contactPopup.classList.remove('show');
  }, 4000);
});

// Tombol close popup
closePopup.addEventListener('click', ()=>{
  contactPopup.classList.remove('show');
});
