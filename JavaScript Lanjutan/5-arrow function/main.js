// arrow function adalah bentuk lain yan lebih ringkas dari Function Expression

const sayHello = function (nama, waktu){
    return `Selamat ${waktu}, ${nama}`;
}

console.log(sayHello('Azura', 'malam'));


// const sayHello2 = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

const sayHello2 = (nama, waktu) => `Selamat ${waktu}, ${nama}`;

console.log(sayHello2('Marsha', 'siang'))



let mahasiswa = ['Azura', 'Marsha', 'Lenathea'];

let jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
});

console.log(jumlahHuruf);


// let jumlahHuruf2 = mahasiswa.map (nama => {
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.totalHuruf = nama.length;
//     console.log(`${mhs.nama}, ${mhs.totalHuruf}`);
// });

let jumlahHuruf2 = mahasiswa.map (nama => ({nama: nama, totalHuruf: nama.length}))

console.table(jumlahHuruf2);