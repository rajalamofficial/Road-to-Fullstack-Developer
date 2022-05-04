// object literasi
let mahasiswa1 = {
    nama: 'Azura',
    energi: 10,
    main: function(energi){
        this.energi -= energi;
    },
    makan: function(energi){
        this.energi += energi;
    }
}

// object funtion
function Mhs(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.main = function(energi){
        this.energi -= energi;
        console.log(`${this.nama} sedang bermain, energi berkurang -${energi}, sisa energi:`);
        return this.energi;
    }
    mahasiswa.makan = function(energi){
        this.energi += energi;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi}, sisa energi:`);
        return this.energi;
    }
    return mahasiswa;
}

let mahasiswa2 = Mhs('Alam', 10);

// constructor function object
function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
    this.main = function(energi){
        this.energi -= energi;
        console.log(`${this.nama} sedang bermain, energi berkurang -${energi}, sisa energi:`);
        return this.energi;
    },
    this.makan = function(energi){
        this.energi += energi;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi}, sisa energi:`);
        return this.energi;
    }
}

let mahasiswa3 = new Mahasiswa('Raj', 10);