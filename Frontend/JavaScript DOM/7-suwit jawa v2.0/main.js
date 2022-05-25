function pilihanComputer(){
    let comp = Math.round(Math.random() * 15);
    if(comp <= 5) return 'gajah';
    if(comp > 5 && comp <= 10) return 'orang';
    return 'semut';
}

function getHasil(player, comp){
    if(player == comp) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
    if(player == 'orang') return (comp == 'gajah') ? 'Kalah' : 'Menang';
    if(player == 'semut') return (comp == 'gajah') ? 'Menang' : 'Kalah';
}

function compThink(){
    const imgComp = document.querySelector('.img-computer');
    let gambar = ['gajah', 'orang', 'semut'];
    let i = 0;

    let waktuMulai = new Date().getTime();
    
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        } 

        imgComp.setAttribute('src', `img/${gambar[i++]}.png`);
        if( i == gambar.length ){
            i = 0;
        }
    }, 100)
}

let pilihan = document.querySelectorAll('ul li img');
pilihan.forEach(function(img){
    img.addEventListener('click', function(){
        let comp = pilihanComputer();
        let player = img.classList;
        let hasil = getHasil(player, comp);

        compThink();

        setTimeout(function(){

            let imgComp = document.querySelector('.img-computer');
            imgComp.setAttribute('src', `img/${comp}.png`);
    
            let info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });
});