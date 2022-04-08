const p2 = document.querySelector('section#a .p2');

function p2Onclick() {
    p2.style.backgroundColor = 'slateblue';
}

p2.onclick = p2Onclick;



// theme
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let body = document.body;
    body.classList.toggle('dark-mode');
});


// menambahkan element saat element tersebut di click
const btnAdd = document.getElementById('addMe');

btnAdd.addEventListener('click', function () {
        // buat element dan teks
        const liBaru = document.createElement('li');
        const teksLiBaru = document.createTextNode('item Baru');
            
        // menggabungkan element li dan teks
        liBaru.appendChild(teksLiBaru);

        const ul = document.querySelector('section#b ul');
        ul.appendChild(liBaru);
});