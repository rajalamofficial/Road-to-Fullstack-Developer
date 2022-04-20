function tambah(){
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

let total = tambah(1, 2, 3);

console.log(total);