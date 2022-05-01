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
// let close = document.querySelectorAll('.close');
// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         // saat tag a di click, element nya kehapus tetapi karena ada href element tersebut ke refresh
//         // untuk mengakalinya menggunakan cara dibawah
//         e.preventDefault();

//         // karena close termasuk card maka akan muncul alert('ok) terlebih dahulu...setelah itu baru element nya di hapus
//         // untuk mengakalinya menggunakana cara dibawah
//         e.stopPropagation();
//     })
// });

// let cards = document.querySelectorAll('.card');
// cards.forEach(function(el){
//     el.addEventListener('click', function(e){
//         alert('ok');
//     });
// });


// DOM Traversal
// cara efektif
let container = document.querySelector('.container');
container.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
    } else if(e.target.className == 'card'){
        alert('ok')
    }
})
