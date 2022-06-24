let bangku = ['Azura', undefined, 'Aramu'];
let tambahPenumpang = function(namaPenumpang){
    // jika angkot kosong, penumpang duduk di kursi pertama
    if(bangku.length == 0){
        bangku.unshift(namaPenumpang);
        return bangku;
    } else {
        for(let i = 0; i < bangku.length; i++){
            // jika ada kursi kosong, penumpang selanjutnya duduk di kursi tersebut
            if(bangku[i] == undefined){
                bangku[i] = namaPenumpang;
                return bangku;
            }

            // jika ada nama penumpang yang sama, tampilkan pesan peringatan
            else if(bangku[i] == namaPenumpang){
                console.log(`"${namaPenumpang}" sudah berada di dalam angkot!`);
                return false;
            }

            // jika kursi sudah terisi secara urut, penumpang selanjutnya duduk di kursi terakhir secara urut
            else if(i == bangku.length - 1){
                bangku.push(namaPenumpang);
                return bangku;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang){
    // jika angkot kosong, tampilkan pesan bahwa angkot kosong
    if(bangku.length == 0){
        console.log(`Angkot sedang kosong!, "${namaPenumpang}" tidak ada di dalam angkot!`);
        return bangku;
    } else{
            for(let i = 0; i < bangku.length; i++){
            // jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
            if(bangku[i] == namaPenumpang){
                bangku[i] = undefined;
                return bangku;
            }
        
            // jika tidak ada penumpang yang namanya tidak sesuai, tampilkan pesan kesalahannya
            else if(i == bangku.length - 1){
                console.log(`"${namaPenumpang}" tidak ada di dalam angkot!`);
                return bangku;
            }
        }
    }

}