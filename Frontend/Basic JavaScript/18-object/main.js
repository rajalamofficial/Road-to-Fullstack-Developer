// menggunakan array
let mahasiswa = ['Azura', true, [3.0, 3.2, 3.5, 3.7, 3.8]];

function ipKumulatif(ipk){
    let total = 0;
    for(let i = 0; i < ipk.length; i++){
        total += ipk[i];
    }
    return total / ipk.length;
}

console.log(ipKumulatif(mahasiswa[2]));

// menggunakan object
let mahasiswa2 = {
    nama: 'Azura',
    umur: 17,
    alamat: {
        jalan: 'Jl. Jalan',
        kota: 'Isekai',
        negara: 'Jepun'
    },
    ipk: [3.0, 3.2, 3.5, 3.7, 3.8],
    ipKumulatif: function(){
        let total = 0;
        let ips = this.ipk;
        for(let i = 0; i < ips.length; i++){
            total += ips[i];
        }
        return total / ips.length;
    }
}

console.log(mahasiswa2.ipKumulatif());