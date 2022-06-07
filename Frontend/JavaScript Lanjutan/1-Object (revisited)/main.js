// object literal
let mhs = {
    nama: 'dodi',
    umur: 21,
    energi: 10,
    main: function(energi){
        this.energi -= energi;  
        console.log(`${this.nama} sedang bermain, energi berkurang -${energi}`);
        return `sisa energi: ${this.energi}`;      
    },
    makan: function(energi){
        this.energi += energi;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi}`);
        return `sisa energi: ${this.energi}`;
    },
    tidur: function(energi){
        this.energi += energi * 2;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi * 2}`);
        return `sisa energi: ${this.energi}`;
    }
}

// object function
function Mahasiswa(nama, umur, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.umur = umur;
    mahasiswa.energi = energi;
    mahasiswa.main = function(energi){
        this.energi -= energi;
        console.log(`${this.nama} sedang bermain, energi berkurang -${energi}`);
        return `sisa energi: ${this.energi}`;      
    }
    mahasiswa.makan = function(energi){
        this.energi += energi;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi}`);
        return `sisa energi: ${this.energi}`;
    }
    mahasiswa.tidur = function(energi){
        this.energi += energi * 2;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi * 2}`);
        return `sisa energi: ${this.energi}`;
    }
    return mahasiswa;
}

let mahasiswa1 = Mahasiswa('Azura', 17, 10);

// object constructor
function Mhs(nama, umur, energi){
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;
    this.main = function(energi){
        this.energi -= energi;
        console.log(`${this.nama} sedang bermain, energi berkurang -${energi}`);
        return `sisa energi: ${this.energi}`;      
    }
    this.makan = function(energi){
        this.energi += energi;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi}`);
        return `sisa energi: ${this.energi}`;
    }
    this.tidur = function(energi){
        this.energi += energi * 2;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi * 2}`);
        return `sisa energi: ${this.energi}`;
    }
}

let mahasiswa2 = new Mhs('Alam', 21, 10);

// object.create()
let methodMahasiswa = {
    main: function(energi){
        this.energi -= energi;
        console.log(`${this.nama} sedang bermain, energi berkurang -${energi}`);
        return `sisa energi: ${this.energi}`;      
    },
    makan: function(energi){
        this.energi += energi;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi}`);
        return `sisa energi: ${this.energi}`;
    },
    tidur: function(energi){
        this.energi += energi * 2;
        console.log(`${this.nama} sedang makan, energi bertambah +${energi * 2}`);
        return `sisa energi: ${this.energi}`;
    }
}

function MahasiswaObj(nama, umur, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.umur = umur;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let mahasiswa3 = MahasiswaObj('panjul', 24, 10);