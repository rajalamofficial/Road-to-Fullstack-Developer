// document.querySelector(); -> element
const judul = document.querySelector('#judul');
function judulStyle() {
    judul.style.backgroundColor = 'slateblue';
    judul.style.fontFamily = 'arial';
    judul.style.color = 'white';    
    judul.style.textShadow = '1px 1px 5px black';
}

judulStyle();


const li = document.querySelector('section#b ul li:nth-child(3)');
li.style.backgroundColor = 'salmon';


// document.querySelectorAll(); -> nodeList
const p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = '#222';
    p[i].style.color = '#ddd';
}