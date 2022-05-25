let container = document.querySelector('.container');
let mainHero = document.querySelector('.main-hero');
let thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        mainHero.src = e.target.src;

        mainHero.classList.add('fade');

        setTimeout(function(){
            mainHero.classList.remove('fade');
        }, 200);

        
        thumbs.forEach(function(img){
            img.className = 'thumb'
        });
        
        e.target.classList.add('active');
    }
});