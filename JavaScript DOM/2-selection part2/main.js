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

// memperkecil scope node root
const sectionA = document.getElementById('a');
function sectionAStyle() {
    const font = sectionA.getElementsByTagName('p');
    font[0].style.fontFamily = 'arial';
} 

sectionAStyle();


const sectionB = document.querySelector('section#b');
function sectionBStyle() {
    const fontColor = sectionB.querySelector('p');
    fontColor.style.color = 'red';
}

sectionBStyle();