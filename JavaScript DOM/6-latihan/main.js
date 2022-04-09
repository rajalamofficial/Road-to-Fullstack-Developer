// ubah background
const btnUbahBg = document.getElementById('btnUbahBg');

btnUbahBg.addEventListener('click', function(){
    let body = document.body;
    // body.style.backgroundColor = 'slateblue';
    body.classList.toggle('slateblue');
});


// ----------------------------------------------------------
// buat element, teks, dan gabungkan
const btnUbahBgAcak = document.createElement('button');
const textBtn = document.createTextNode('Ubah BG Random');
btnUbahBgAcak.appendChild(textBtn);
btnUbahBgAcak.setAttribute('type', 'button');

// simpan setelah button ubah bg
btnUbahBg.after(btnUbahBgAcak);

// saat button di click background bg berubah secara acak
btnUbahBgAcak.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});