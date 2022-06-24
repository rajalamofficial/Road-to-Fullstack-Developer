let timer = setInterval(myTimer, 1000);

function myTimer(){
    let clock = document.querySelector('.clock')
    let now = new Date().toLocaleTimeString();
    clock.innerHTML = now;
}

let off = document.getElementById('off');
off.addEventListener('click', function(){
    clearInterval(timer);
    alert('Clock is off!')
})

let on = document.getElementById('on');
on.addEventListener('click', function(){
    timer = setInterval(myTimer, 1000);
    alert('Clock is on!')
})
