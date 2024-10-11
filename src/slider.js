const slides = document.getElementById("slides");
let slideWidth = slides.children[0].clientWidth;
const totalSlides = slides.children.length;

let currentIndex = 0;

const showHandler = (index) => {
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
};

const slideImgs = [...document.getElementsByClassName("skill__Detail__img")];

slideImgs.forEach((slideImg, index) => {
  slideImg.onclick = () => {
    currentIndex = index;
    showHandler(index);
  };
});

window.onresize = () => {
  slides.style.transition = "none";
  slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
};
