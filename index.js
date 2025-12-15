let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides[index].classList.remove("active");
  index = i;
  slides[index].classList.add("active");
}

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

setInterval(nextSlide, 3000);
