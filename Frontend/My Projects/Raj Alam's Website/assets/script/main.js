const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const themeBtn = document.querySelector('.theme');
const themeMobileBtn = document.querySelector('.theme-mobile')
const navLinks = document.querySelectorAll('header nav ul li a');
const section = document.querySelectorAll('.section');
const jumpToTop = document.querySelector('.jump-to-top');
const jump = document.querySelector('.jump');
const alert = document.querySelector('.alert');
const closeBtn = document.querySelector('.close-btn');
const understand = document.getElementById('understand');
const myAge = document.getElementById('my-age');

// my age
const today = new Date().getFullYear();
const myBirthday = new Date(2004, 07, 24).getFullYear();
const yearsOld = today - myBirthday;
myAge.innerHTML = yearsOld;

// if the website currently under Development!
setTimeout(() => {
    alert.classList.add('reveal');
    closeBtn.addEventListener('click', () => {
        alert.classList.remove('reveal');
    });

    // if user didnt click the understand button
    let counter = 5;
    let understandTimer = setInterval(() => {
        counter--;
        understand.innerHTML = counter;

        if(counter === 0){
            clearInterval(understandTimer);
            setTimeout(() => {
                alert.classList.remove('reveal');
            }, 1000);
        }
    }, 1000);
}, 1000);

// active class on Nav Links when scrolled
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let idSection = sec.getAttribute('id');

        // add class reveal on Jump Button when window.scrollY equal or higher than 500
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

        // change the src & set the theme
        if(target.getAttribute('src') == 'assets/img/icons-moon.png'){
            enableLightMode();
        } else {
            disableLightMode();
        }

        // save to local storage
        if(lightMode !== 'enabled'){
            lightMode = localStorage.setItem('LIGHT', 'enabled');
        } else {
            lightMode = localStorage.setItem('LIGHT', null);
        }

    //  scroll to top when Jump button is clicked  
    } else if(target.classList.contains('jump')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

    // scroll to top when Home Link is clicked
    } else if(target.getAttribute('data-link') == 'home'){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// function Light Mode and Dark Mode
let lightMode = localStorage.getItem('LIGHT');

function enableLightMode() {
    document.body.classList.add('light');
    themeBtn.src = 'assets/img/icons-sun.png';
    themeMobileBtn.src = 'assets/img/icons-sun.png';
};

function disableLightMode() {
    document.body.classList.remove('light');
    themeBtn.src = 'assets/img/icons-moon.png';
    themeMobileBtn.src = 'assets/img/icons-moon.png';
}

if(lightMode === 'enabled'){
    enableLightMode();
}

