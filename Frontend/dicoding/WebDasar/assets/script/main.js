const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const theme = document.querySelector('.theme');
const callToAct = document.querySelector('btn');

const body = document.body;
body.addEventListener('click', (e) => {
    const target = e.target;

    if(target.classList.contains('menu') || target.classList.contains('line')){
        sidebar.classList.toggle('open');
        menu.classList.toggle('open');
    } else if(target.classList.contains('theme')){
        if(theme.getAttribute('src') == 'assets/img/icons-moon.png'){
            theme.setAttribute('src', 'assets/img/icons-sun.png');
            body.classList.add('light');    
        } else {
            theme.setAttribute('src', 'assets/img/icons-moon.png');
            body.classList.remove('light');
        }
    }
});