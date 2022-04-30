// let close = document.querySelector('.close');
// close.addEventListener('click', function(){
//     let container = document.querySelector('.container')
//     let card = document.querySelector('.card');

//     container.removeChild(card);
// });


// DOM Traverssal
// menggunakan for
// let close = document.querySelectorAll('.close');

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(){
//         close[i].parentElement.style.display = 'none';
//     });
// }

// DOM Traversal
// menggunakan forEach
let close = document.querySelectorAll('.close');
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    })
});