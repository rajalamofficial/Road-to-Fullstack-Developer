// Object prototype
function Mahasiswa(nama, energi){
    // let this = Object.create(Mahasiswa.prototype);
    this.nama = nama;
    this.energi = energi;
    // return this;
}

Mahasiswa.prototype.makan = function(energi){
    this.energi += energi;
    return `${this.nama} sedang makan, energi bertambah +${energi}, sisa energi: ${this.energi}`;
}

Mahasiswa.prototype.main = function(energi){
    this.energi -= energi;
    return `${this.nama} sedang main, energi berkurang -${energi}, sisa energi: ${this.energi}`;
}

Mahasiswa.prototype.tidur = function(energi){
    this.energi += energi * 2;
    return `${this.nama} sedang tidur, energi bertambah +${energi * 2}, sisa energi: ${this.energi}`;
}

let alam = new Mahasiswa('Alam', 10);


// Object Prototype versi class
class Mhs{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }
    makan = function(energi){
        this.energi += energi;
        return `${this.nama} sedang makan, energi bertambah +${energi}, sisa energi: ${this.energi}`;
    }
    main = function(energi){
        this.energi -= energi;
        return `${this.nama} sedang main, energi berkurang -${energi}, sisa energi: ${this.energi}`;
    }
    tidur = function(energi){
        this.energi += energi * 2;
        return `${this.nama} sedang tidur, energi bertambah +${energi * 2}, sisa energi: ${this.energi}`;
    }
}

let azura = new Mhs('azura', 10);