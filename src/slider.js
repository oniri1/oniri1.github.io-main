const slides = document.getElementById("slides");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 1;
const totalSlides = slides.children.length;

// 첫 번째와 마지막 슬라이드를 복사
const firstSlide = slides.children[0].cloneNode(true);
const lastSlide = slides.children[totalSlides - 1].cloneNode(true);

slides.appendChild(firstSlide); // 마지막에 첫 슬라이드를 복제
slides.insertBefore(lastSlide, slides.children[0]); // 처음에 마지막 슬라이드를 복제

// 슬라이드를 제대로 정렬하기 위해 처음 상태 설정
let slideWidth = slides.children[0].clientWidth;
slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

const showSlide = (index) => {
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
};

prevButton.onclick = () => {
  currentIndex--;
  showSlide(currentIndex);

  // 첫 번째 슬라이드에서 뒤로 가면 마지막 슬라이드로 이동
  if (currentIndex === 0) {
    setTimeout(() => {
      slides.style.transition = "none"; // 애니메이션 없애기
      currentIndex = totalSlides; // 마지막 슬라이드로 이동
      slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }, 500); // 0.5초 후에 바로 이동
  }
};

const nextClick = () => {
  currentIndex++;
  showSlide(currentIndex);

  // 마지막 슬라이드에서 앞으로 가면 첫 슬라이드로 이동
  if (currentIndex === totalSlides + 1) {
    setTimeout(() => {
      slides.style.transition = "none"; // 애니메이션 없애기
      currentIndex = 1; // 첫 슬라이드로 이동
      slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }, 500); // 0.5초 후에 바로 이동
  }
};

nextButton.onclick = () => {
  nextClick();
};

window.onresize = () => {
  // 화면 크기 변경 시 슬라이드 정렬 유지
  slides.style.transition = "none";
  slideWidth = slides.children[0].clientWidth;
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
};
