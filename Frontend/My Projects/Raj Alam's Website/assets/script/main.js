const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const themeBtn = document.querySelector('.theme');
const themeMobileBtn = document.querySelector('.theme-mobile')
const navLinks = document.querySelectorAll('header nav ul li a');
const section = document.querySelectorAll('.section');
const jumpToTop = document.querySelector('.jump-to-top');
const jump = document.querySelector('.jump');
const scrollIntoView = document.querySelectorAll('[data-link]');

// active class on Nav Links when scrolled
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let idSection = sec.getAttribute('id');

        if(top >= 500){
            jump.classList.add('reveal');
        } else {
            jump.classList.remove('reveal');
        }

        if(top >= offset && top < offset + height){
            // links class active
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav ul li a[data-link*=${idSection}]`).classList.add('active');
            });

            // add reveal claas on section
            sec.classList.remove('reveal');
            sec.classList.add('reveal');
        } else {
            sec.classList.remove('reveal');
        }
    });
}

// add a function when a element of body is clicked
const body = document.body;
body.addEventListener('click', (e) => {
    const target = e.target;

    // hamburger menu
    if(target.classList.contains('menu') || target.classList.contains('line')){
        sidebar.classList.toggle('open');
        menu.classList.toggle('open');

    // theme
    } else if(target.classList.contains('theme') || target.classList.contains('theme-mobile')) {

        // if light key on localstorage is not equal on
        if(setLightMode !== 'on'){
            lightMode();
            setLightMode = localStorage.setItem('light', 'on');
            themeBtn.src = 'assets/img/icons-sun.png';
            themeMobileBtn.src = 'assets/img/icons-sun.png';
        } 
        
        // else... set the light key on localstorage to off
        else {
            lightMode();
            setLightMode = localStorage.setItem('light', 'off');
            themeBtn.src = 'assets/img/icons-moon.png';
            themeMobileBtn.src = 'assets/img/icons-moon.png';
        }

    } else if(target.classList.contains('jump')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if(target.innerHTML.includes('Home')){
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }
});

// function Light Mode
function lightMode(){
    body.classList.toggle('light');
}

// get the light key from localstorage
let setLightMode = localStorage.getItem('light');

// if light key is on, run lightmode function
if(setLightMode === 'on'){
    lightMode();
    themeBtn.src = 'assets/img/icons-sun.png';
    themeMobileBtn.src = 'assets/img/icons-sun.png';
}