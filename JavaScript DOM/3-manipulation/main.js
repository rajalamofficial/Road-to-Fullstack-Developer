// Manipulasi element
/* element.innerHTML
   element.style.<property> 
   element.getAttribute()
   element.setAttribute()
   element.removeAttribute()
   element.classList
    element.classList.add()
    element.classList.remove() 
    element.classList.toggle()
    element.classList.item()
    element.classList.contains()
    element.classList.replace()
*/ 

// element.innerHTML
const title = document.getElementById('judul');
title.innerHTML = `Azura's Website`;

// element.style.<property> 
const containerBg = document.getElementsByClassName('container');
containerBg[0].style.backgroundColor = '#ddd';

// element.valueAttribute()
const a = document.querySelector('section#a a');
// a.getAttribute('href');
// a.setAttribute('id', 'azura');
// a.removeAttribute('href');

// element.classList
const p2 = document.querySelector('.p2');
p2.classList.add('pharagraph', 'satu', 'dua');
p2.classList.remove('satu');
document.body.classList.toggle('body-bg');
// toggle = apabila belum ada class n pada element maka class n akan ditambahkan
//          apabila sudah ada class n pada element maka class n akan dihapus
p2.classList.item(0);
p2.classList.contains('dua');
p2.classList.replace('dua', 'satu');