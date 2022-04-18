let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for(let noAngkot = 1; noAngkot <= 10; noAngkot++) {
    if(noAngkot <= angkotBeroperasi){
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    } else if(noAngkot == 8) {
        console.log(`Angkot No. ${noAngkot} sedang lembur`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
    }
}
