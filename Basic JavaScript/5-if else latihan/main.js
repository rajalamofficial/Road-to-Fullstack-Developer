let angkotBeroperasi = 6;
let jumlahAngkot = 10;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
        console.log(`Angkot no. ${noAngkot} beroperasi dengan baik`);
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log(`Angkot no ${noAngkot} sedang lembur`);
    } else {
        console.log(`Angkot no. ${noAngkot} sedang tidak beroperasi`);
    }
}