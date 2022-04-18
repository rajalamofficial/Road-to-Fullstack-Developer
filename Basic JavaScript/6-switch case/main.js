let halalOrHaram;
let lagi = true;

function fatwa(){
switch(halalOrHaram) {
        case 'mie':
        case 'susu':
        case 'ayam':
        case 'sate':
        case 'cocacola':
            alert('Halal!');
            break;
        case 'babi':
        case 'kelelawar':
        case 'alkohol':
            alert('Sore wa haram desu!!!');    
            break;
        case 'bensin':
            alert('tak da otak!!!');
            break;
        default:
            alert('Mohon maaf, makanan / minuman yang anda masukan tidak ada di daftar :(');
    }
};


while(lagi){
    halalOrHaram = prompt('Masukan nama makanan / minuman: (cth: susu, ayam, mie)');
    fatwa();
    lagi = confirm('lagi?');
}

alert('Goodbye!!');

