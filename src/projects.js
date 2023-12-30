'use strict';

// 프로젝트 필터링 관련 로직 처리

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project')
const projectscontainer = document.querySelector('.projects')

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;

    if(filter == null){
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);



});

function handleActiveSelection(target){
        // 클릭시 액티브 상태 바꾸기 
        const active = document.querySelector('.category--selected');
        active.classList.remove('category--selected');
        target.classList.add('category--selected');
}

function filterProjects(filter){
        // 프로젝트 필터링
        projectscontainer.classList.add('anim-out');

        projects.forEach(project => {
            // console.log(project.dataset.type);
            if(filter === 'all' || filter === project.dataset.type){
                project.style.display = 'block';
            } 
            else{
                project.style.display = 'none';
            }
        });

        setTimeout(()=>{
            projectscontainer.classList.remove('anim-out');},250);
}


