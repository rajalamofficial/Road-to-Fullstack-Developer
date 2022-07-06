let menu = document.querySelector('.menu');
let menuSpan = document.querySelectorAll('.menu span')
let sidebar = document.querySelector('.sidebar')
let navbar = document.querySelector('.navbar')



const nav = document.querySelector('nav');
nav.addEventListener('click', function(e){
    if(e.target.classList.contains('menu') || e.target.classList.contains('navB')){
        menu.classList.toggle('open');
        sidebar.classList.toggle('open');
        menuSpan.forEach(function(nav){
            if(nav.classList.contains('dark-bg')){
                nav.classList.add('light-bg');
                nav.classList.remove('dark-bg');
            }else if(nav.classList.contains('light-bg')){
                nav.classList.add('dark-bg');
                nav.classList.remove('light-bg');
            } 
        });
    }
})
