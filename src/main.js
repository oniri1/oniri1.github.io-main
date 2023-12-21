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

const home = document.querySelector('.home')
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', ()=>{
    console.log(1-(window.scrollY / homeHeight));
    home.style.opacity = 1-(window.scrollY / homeHeight);


});