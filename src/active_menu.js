'use strict';

//구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고온다.

// 2. intersectionObserver를 사용해서 모든 섹션을 관찰해야 한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션 : 
// -다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
// -마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택

const sectionIDs = ['#home','#about','#skills','#Worked','#Testimonials','#Contact'];
const sections = sectionIDs.map((id) => document.querySelector(id));
const navItems = sectionIDs.map(id => document.querySelector(`[href="${id}"]`));



const options = {};
const observer = new IntersectionObserver(observercallback, options);
sections.forEach(section => observer.observe(section));

function observercallback(entries) {
    entries.forEach(entry => {
        console.log(entry.target);
        console.log(entry.isIntersecting);
        console.log(entry.intersectionRatio);

    });


};

console.log(sectionIDs);
console.log(sections);
console.log(navItems);
