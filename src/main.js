'use strict';

// header에 페이지 아래로 스크롤시 header--dark(백그라운드 컬러 삭제) 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
   

    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }
    else {
        header.classList.remove('header--dark');
    }

});

// arrow 버튼
const home = document.querySelector('.home');
const homeHeight = home.offsetHeight;
const arrow_up = document.querySelector('.arrow-up');

document.addEventListener('scroll', ()=>{
    console.log(1-(window.scrollY / homeHeight));
    home.style.opacity = 1-(window.scrollY / homeHeight);

    if(window.scrollY > homeHeight / 2){
        arrow_up.style.opacity = 1;
        arrow_up.classList.remove('arrow_stop');
    }
    else{
        arrow_up.style.opacity = 0;
        arrow_up.classList.add('arrow_stop');
    }

});

// Navbar 토글버튼 클릭 처리

const NavbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.Mobile_menu_toggle');

navbarToggle.addEventListener('click', ()=> {
    NavbarMenu.classList.toggle('open');
})
NavbarMenu.addEventListener('click', ()=>{
    NavbarMenu.classList.toggle('open');
})

