// DOM SELECTION
// document.getElementById() -> Element
const judul = document.getElementById('judul');
judul.style.color = 'slateblue';
judul.style.backgroundColor = '#333';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'salmon';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = 'Azura';

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.style.color = 'white';