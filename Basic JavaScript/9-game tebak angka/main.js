let play = true;
while(play){
// welcome
    alert(`Tebak angka dari 1-10\nkamu hanya mempunyai kesempatan sebanyak 3x`);

// bot memilih
    let bot = Math.round(Math.random() * 10) + 1;
    console.log(bot)

// chance
    let chance = 3;

// rules permainan
    while(chance >= 0){

        // player memilih
        let player = prompt(`Masukan angka tebakan dari (1-10):`);

        if(player == bot){
            alert('TEBAKAN ANDA BENAR!');
            break;
        } else if(player == ''){
            alert('Mohon Masukkan angka!');
        } else if(player == null){
            break;
        } else if(player < bot){
            chance -= 1;
            alert(`TERLALU RENDAH!, SISA KESEMPATAN ANDA ADALAH ${chance}`);
        } else if(player > bot){
            chance -= 1;
            alert(`TERLALU TINGGI, SISA KESEMPATAN ANDA ADALAH ${chance}`);
        } 
        
        if(chance == 0){
            alert(`ANDA GAGAL!, TEBAKAN YANG BENAR ADALAH ${bot}`);
            play = confirm('ingin bermain lagi?');
        }
    }
        play = confirm('ingin bermain lagi?');
}

alert('terimakasih!');

