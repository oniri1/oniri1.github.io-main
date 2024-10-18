const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting); //해당 entry가 옵션값을 충족하면 true로 바뀐다.
      console.log(entry.intersectionRatio); //화면에 얼마나 표시되었는지를 알려준다. 1이면 해당 Elem이 화면을 가득 채우고 있다는 뜻
      console.log(entry.target); // 지금 어떤 Elem을 타겟팅 중인지 알 수 있다.

      if (entry.isIntersecting) {
        entry.target.classList.add("charge-ani");
      } else {
        entry.target.classList.remove("charge-ani");
      }
    });

    // func(funcValue);
  },
  { threshold: 0.1 }
);

const observerElems = [...document.getElementsByClassName("obs")];

observerElems.forEach((elem) => {
  observer.observe(elem);
});
