const modal = document.getElementById("myModal");
const btn = document.querySelector(".modal-trigger");
const span = document.querySelector(".close");

// 모달 열기
btn.onclick = function () {
  modal.style.display = "block";
};

// 모달 닫기
span.onclick = function () {
  modal.style.display = "none";
};

// 모달 바깥 클릭 시 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
