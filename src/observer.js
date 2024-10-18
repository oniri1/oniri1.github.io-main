const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("charge-ani");
      } else {
        entry.target.classList.remove("charge-ani");
      }
    });
  },
  { threshold: 0.1 }
);

const observerElems = [...document.getElementsByClassName("obs")];

observerElems.forEach((elem) => {
  observer.observe(elem);
});
