// ada beberapa cara membuat object

// 1. Object literal
let mhs1 = {
    nama: 'Azura',
    umur: 17,
    hobi: 'Turu'
}

// 2. Function declaration
function objectMahasiswa(nama, umur, hobi){
    let mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.hobi = hobi;
    return mhs;
}

let mhs2 = objectMahasiswa('Brim', 30, 'Ngoding');

// 3. Constructor
function Mahasiswa(nama, umur, hobi){
    this.nama = nama;
    this.umur = umur;
    this.hobi = hobi;
}

let mhs3 = new Mahasiswa('Viper', 21, 'Baca buku');