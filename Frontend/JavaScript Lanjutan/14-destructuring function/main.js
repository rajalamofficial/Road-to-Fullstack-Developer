// destructuring function array
    /* 
    *function kalkulasi(a, b){
    *    return [a + b, a - b, a * b, a / b];
    *}

    *const [tambah, kurang, kali, bagi] = kalkulasi(24, 8);
    *console.log(kali);
    */

// destructuring function object
    /* 
    *function kalkulasi(a, b){
    *   return {
    *        tambah: a + b,
    *        kurang: a - b,
    *        kali: a * b,
    *        bagi: a / b
    *    }
    *}

    *const {kali, tambah, kurang, bagi} = kalkulasi(24, 8);
    *console.log(kali);
    */

// destructuring function arguments
    const mahasiswa = {
        nama: "Azura",
        umur: 18,
        nilai: {
            pts: 7.0,
            pas: 8.5
        }
    }

    function getMhs({nama, umur, nilai: {pts, pas}}, ptsOrPas){
        return `Halo nama saya ${nama}, umur saya ${umur} tahun, nilai ${ptsOrPas} saya adalah ${ptsOrPas == 'pts' ? pts : pas}`;
    }
    
    console.log(getMhs(mahasiswa, 'pts'))
    console.log(getMhs(mahasiswa, 'pas'))