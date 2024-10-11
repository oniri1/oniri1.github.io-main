const slides = document.getElementById("slides");

let currentIndex = 0;
const totalSlides = slides.children.length;

const showHandler = (index) => {
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
};

// const showHandler = () => {
//   showSlide(currentIndex);
// };

window.onresize = () => {
  slides.style.transition = "none";
  slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
};
