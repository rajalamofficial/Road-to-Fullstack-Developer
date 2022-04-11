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


// slider

const sliderR = document.querySelector('input[name=sliderR]');
sliderR.addEventListener('input', function(){
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

const sliderG = document.querySelector('input[name=sliderG]');
sliderG.addEventListener('input', function(){
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

const sliderB = document.querySelector('input[name=sliderB]');
sliderB.addEventListener('input', function(){
    const r = sliderR.value;
    const g = sliderG.value;
    const b = sliderB.value;
    document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});

// mouse hover
document.body.addEventListener('mousemove', function(e){
    const xPos = Math.round(e.clientX / innerWidth * 255);
    const yPos = Math.round(e.clientY / innerWidth * 255);
    console.log(xPos);
    document.body.style.backgroundColor = `rgb(${xPos} ${yPos} 100)`;
});