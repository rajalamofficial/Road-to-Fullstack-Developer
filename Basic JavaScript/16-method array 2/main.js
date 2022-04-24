// forEach: mengambil semua element array tetapi tidak mengembalikan nilai array
let myArr = ['Raj', 'Alam', 'Soekitman', 'Soekijang'];

// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

myArr.forEach(function(e, i){
    console.log(`Mahasiswa ke-${i + 1} adalah: ${e}`);
});

// map: mengambil semua element array & mengembalikan nilai array
let myArr2 = [2, 4, 1, 7, 9, 3, 10, 22];
let newArr = myArr2.map(function(e){
    return e * 2;
});

console.log(newArr.join(', '));


// sort: mengurutkan data dari yang terkecil
newArr.sort(function(a, b){
    return a - b;
});
console.log(newArr.join(' - '));


// filter: mencari semua nilai pada array dan mengembalikan nilai array
let angka = [10, 2, 5, 9, 32, 92, 43, 1];
let filter = angka.filter(function(x){
    return x > 10;
});

console.log(filter.join(' '));

// find: mencari satu nilai pada array dan array nya tidak dikembalikan
let find = angka.find(function(x){
    return x > 32;
});

console.log(find);