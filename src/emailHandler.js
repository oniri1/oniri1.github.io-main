const emailElem = document.getElementById("emailValue");
const phoneElem = document.getElementById("phoneValue");

const sendEmail = () => {
  window.location.href = "mailto:oniri1@naver.com";
};
const callPhone = () => {
  window.location.href = "tel:01071439457";
};

emailElem.onclick = () => {
  sendEmail();
};

phoneElem.onclick = () => {
  callPhone();
};
