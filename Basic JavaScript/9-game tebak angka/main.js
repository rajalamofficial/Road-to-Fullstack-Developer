// Welcome
alert('Game tebak angka dari (1-10)\nAnda punya kesempatan sebanyak 3x');

// BOT memilih
let bot = Math.round(Math.random() * 10);

function play(){
    // Chance
    let chance = 3;
    while(chance >= 0){

        // Player memilih
        let player = prompt('Tebak angka dari (1-10):');

        // Rules permainan
        if(player == ''){
            alert('MOHON MASUKKAN ANGKA!');
        } else if(player ==  null){
            return playing = confirm('Ingin bermain lagi?');
        } else if(player == bot){
            alert(`ANDA BENAR!`);
            return;
        } else if(player < bot){
            chance -= 1;
            alert(`TERLALU RENDAH, SISA KESEMPATAN ANDA ADALAH ${chance}`);
        } else if(player > bot){
            chance -= 1;
            alert(`TERLALU TINGGI, SISA KESEMPATAN ANDA ADALAH ${chance}`);
        }

        if(chance == 0){
            alert(`KESEMPATAN ANDA HABIS, TEBAKAN YANG BENAR ADALAH: ${bot}`);
            playing = confirm('Ingin bermain lagi?');
            return;
        }
    }
}

let playing = true;
while(playing){
    play();
}

alert('Terimakasih telah bermain :D');
