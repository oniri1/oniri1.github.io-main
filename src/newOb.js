let chargeBarElems = [...document.getElementsByClassName("bar__value")];

console.log(chargeBarElems);

const chargeObCallBack = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("charge-ani");
    } else {
      entry.target.classList.add("charge-ani");
    }
  });
};

const chargeObserver = new IntersectionObserver(chargeObCallBack, {
  threshold: 0,
});

chargeBarElems.forEach((elem) => {
  chargeObserver.observe(elem);
});
