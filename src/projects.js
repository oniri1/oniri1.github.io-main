'use strict';

// 프로젝트 필터링 관련 로직 처리

const categories = document.querySelector('.categories');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;

    console.log(filter);


})