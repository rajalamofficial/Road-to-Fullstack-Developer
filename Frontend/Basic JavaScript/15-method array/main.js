let nama = ['Azura', 'Aramu', 'San'];

// method pada array

// push: menambahkan array di akhir
// pop: menghapus array di akhir
nama.push('Yin', 'Yan');
nama.pop();

// unshift: menambahkan array di awal
// shift: menghapus array di awal
nama.unshift('Luffy', 'Zoro');
nama.shift();

// join: menampilkan semua isi array    
console.log(nama.join(' - '));

// splice: menambahkan array di tengah
let myArr = ['Ichi', 'Nii', 'San', 'Yon'];
myArr.splice(1, 0, 'Nee');
console.log(myArr.join(', '));


// slice: mengiris sebuah array menjadi array yang baru
var myArr2 = myArr.slice(1, 3);
console.log(myArr2.join(', '));


