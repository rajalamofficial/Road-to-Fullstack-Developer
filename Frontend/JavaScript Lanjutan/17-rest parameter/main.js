function jumlahkan(...angka){
    
    // let total = 0;
    // for(const a of angka){
        //     total += a;
        // }
        // return total;

    return angka.reduce((a, i) => a + i);
}

console.log(jumlahkan(1, 2, 3, 4, 5))


// rest par pada destructuring array
const kelompok1 = ["Raj", "Marsha", "Lenathea", "Lavia", "Alam"];
const [ketua, wakilKetua, ...anggota] = kelompok1;
console.log(`KELOMPOK 1 \n Ketua: ${ketua} \n Wakil: ${wakilKetua} \n Anggota: ${anggota.join(', ')}`)

// rest par pada destructuring object
const team = {
    projectManager: "Raj Alam",
    frontendDev: "Azura",
    backendDev: "Aramu",
    devOps: "Lavia"
}

const {projectManager, ...myTeam} = team;
console.log(myTeam);


// filtering
function filter(type, ...values){
    return values.filter(v => typeof v === type)
}

console.log(filter("number", false, 24, "Azura", true, 08, "1945", 04));