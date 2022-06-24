let lagi = true;
while(lagi){

    // player memilih
    let p = prompt('Pilih: Gajah, Orang, Semut');

    // computer memilih
    let comp = Math.random();
    if (comp < 0.33){
        comp = 'Gajah';
    } else if (comp >= 0.33 && comp <= 0.66){
        comp = 'Orang';
    } else {
        comp = 'Semut';
    }

    // rules permainan
    let hasil;
    if(p == comp){
        hasil = 'SERI!'
    } else if(p == 'Gajah'){
        hasil = (comp == 'Orang') ? 'Menang!' : 'Kalah!';

    } else if(p == 'Orang'){
        hasil = (comp == 'Gajah') ? 'Kalah!' : 'Menang!';

    } else if(p == 'Semut'){
        hasil = (comp == 'Gajah') ? 'Menang!' : 'Kalah!';
    } else {
        hasil = 'memasukkan pilihan yang salah!'
    }
    // hasil
    alert(`Kamu memilih ${p}, Komputer memilih ${comp} \nHasilnya, kamu ${hasil}`);

    lagi = confirm('Lagi?');
}

alert('Terimakasih telah bermain!')