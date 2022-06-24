const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const theme = document.querySelector('.theme');
const callToAct = document.querySelector('btn');
const themeMobile = document.querySelector('.theme-mobile')

// active class when scrolled
const navLinks = document.querySelectorAll('header nav ul li a');
const section = document.querySelectorAll('.section');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // links class active
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav ul li a[href*=${id}]`).classList.add('active');
            });

            // add reveal claas on section
            sec.classList.remove('reveal');
            sec.classList.add('reveal')
        } else {
            sec.classList.remove('reveal')
        }
    });
}

// click element
const body = document.body;
body.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('menu') || target.classList.contains('line')){
        sidebar.classList.toggle('open');
        menu.classList.toggle('open');
    } else if(target.classList.contains('theme') || target.classList.contains('theme-mobile')) {
        if(theme.getAttribute('src') == 'assets/img/icons-moon.png'){
            theme.setAttribute('src', 'assets/img/icons-sun.png');
            themeMobile.setAttribute('src', 'assets/img/icons-sun.png');
            body.classList.add('light');    
        } else {
            theme.setAttribute('src', 'assets/img/icons-moon.png');
            themeMobile.setAttribute('src', 'assets/img/icons-moon.png');
            body.classList.remove('light');
        } 
    }
});
