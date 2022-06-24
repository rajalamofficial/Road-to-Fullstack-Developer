const angka = [-1, 4, 2, 9, 5, 11, -3, 8, -7, 10];
console.log(angka)

// menggunakan for
const newAngka = [];
for(let i = 0; i < angka.length; i++){
    if(angka[i] >= 4) newAngka.push(angka[i]);
}
console.log(newAngka);

// filter: digunakan jika kita ingin mencari nilai tertentu dalam array dan nila array tsb tidak bisa diubah seperti di kali / di bagi
// menggunakan arrow function & filter
const newAngka2 = angka.filter(e => e >= 4)
console.log(newAngka2);


// map: jika kita ingin mengganti nilai/element pada array n dan mengembalikan ke dalam array baru
// setiap index akan dikalikan 2
const newAngka3 = angka.filter(e => e * 2);
console.log(newAngka3)

/* reduce: jika kita ingin menjumlahkan / bagi / kali / kurang pada semua element di dalam array
   -1 + 4 + 2 + 9 + 5 + 11 + -3 + 8 + -7 + 10 = 38

   secara default, reduce memiliki nilai default yaitu 0
   nilai default tersebut ada di sebelum accumulator, jadi:
   0 + -1 + 4 + 2 + 9 + 5 + 11 + -3 + 8 + -7 + 10 = 38

   kita bisa mengganti nilai default nya sesuka kita.
*/
const newAngka4 = angka.reduce((accumulator, currentValue) => 
accumulator + currentValue, 0)

console.log(newAngka4)


// method chaining: menggabungkan method method array
const newAngka5 = angka.filter(e => e > 5) // 9 11 8 10
    .map(e => e - 5) // 4 6 3 5
    .reduce((acc, curValue) => 
    acc + curValue, 0) // 18
console.log(newAngka5); // 18