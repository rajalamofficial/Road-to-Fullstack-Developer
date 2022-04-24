let penumpang = ['Azura', undefined, 'Ya'];
let tambahPenumpang = function(namaPenumpang){
    // jika angkot kosong
        if(penumpang.length == 0){
            // tambah penumpang di awal array
            penumpang.unshift(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
        } else {
    // (else) telusuri kursi dari awal
            for(let i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
                if(penumpang[i] == undefined){
                    // tambah penumpang di kursi tersebut
                    penumpang[i] = namaPenumpang;
                    // kembalikan isi array & keluar dari function
                    return penumpang;
                }
                // jika sudah ada nama yang sama 
                 else if(penumpang[i] == namaPenumpang){
                    // tampilkan pesan kesalahannya
                    console.log(`${namaPenumpang} sudah berada di dalam Angkot!`);
                    // kembalikan isi array & keluar dari function
                    return penumpang;
                }
                // jika seluruh kursi sudah terisi
                else if(i == penumpang.length - 1){
                    // tambah penumpang di akhir array
                    penumpang.push(namaPenumpang);
                    // kembalikan isi array & keluar dari function
                    return penumpang;
                }
            }
        }
}
