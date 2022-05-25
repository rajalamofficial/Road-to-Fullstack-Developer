function getComputer(){
    const comp = Math.round(Math.random() * 15);

    if(comp <= 5) return 'rock';
    if(comp > 5 && comp <= 10) return 'scissors';
    if(comp > 10) return 'paper';
}

function getRules(player, comp){
    if(player == comp) return 'SERI!';
    if(player == 'rock') return (comp == 'scissors') ? 'MENANG!' : 'KALAH!';
    if(player == 'scissors') return (comp == 'rock') ? 'KALAH!' : 'MENANG!';
    if(player == 'paper') return (comp == 'rock') ? 'MENANG!' : 'KALAH!';
}

function compThink(){
    const imgComp = document.querySelector('.img-comp');
    let image = ['rock', 'scissors', 'paper'];
    let i = 0;
    let now = new Date().getTime();

    setInterval(function(){

        if(new Date().getTime() - now > 1000){
            clearInterval;
            return;
        }

        imgComp.setAttribute('src', `img/${image[i++]}.png`);
        if(i == image.length){
            i = 0;
        }   
    }, 100)
}

let options = document.querySelectorAll('.player-section ul li img');
options.forEach(function(img){
    img.addEventListener('click', function(){
        const comp = getComputer();
        const player = img.className;
        const results = getRules(player, comp);

        
        compThink();
        
        setTimeout(function(){
            const imgComp = document.querySelector('.img-comp');
            imgComp.setAttribute('src', `img/${comp}.png`);


            if(img.addEventListener('click', function(){
                if(info.innerHTML = results){
                    info.innerHTML = '';  
                }
            }));

            let info = document.querySelector('.info span');
            info.innerHTML = results;    
        }, 1005)

        console.log(`player: ${player}, comp: ${comp}, hasil ${results}`)
    });
})


