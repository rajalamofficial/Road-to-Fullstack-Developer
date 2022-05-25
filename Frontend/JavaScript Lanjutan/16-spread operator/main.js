// spread operator
// memecah iterables menjadi single element
const mhs = ["Raj", "Alam", "Marsha", "Lenathea"];
console.log(...mhs)

const str = "Raj";
console.log(...str)

// menggabungkan 2 array
const murid = ["Azura", "Aramu", "Lavia"];
const guru = ["Supardi", "Soekitman", "Soekijang"];

const muridDanGuru = [...murid, ...guru];
console.log(muridDanGuru);

// mengcopy array
const arr = ["Array", "Original"];

// const newArr = arr;
// newArr[1] = "Copy"

const newArr = [...arr];
newArr[1] = "Copy";

console.log(newArr);

// mengubah NodeList menjadi Array
const li = document.querySelectorAll('ul li');
// const mahasiswa = [];
// for(let i = 0; i < li.length; i++){
//     mahasiswa.push(li[i].textContent)
// }

const mahasiswa = [...li].map(m => m.textContent)

console.log(mahasiswa);


// studi kasus 
const h1 = document.querySelector('h1');
const hurufH1 = [...h1.innerHTML].map(h => `<span>${h}</span>`).join('');

console.log(hurufH1)
h1.innerHTML = hurufH1;
