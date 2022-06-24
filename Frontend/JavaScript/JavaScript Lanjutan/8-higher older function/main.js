// function yang memiliki callback disebut Higher Order Function
function kerjakanTugas(nama, mapel, selesai){
    console.log(`${nama} sedang mengerjakan mapel ${mapel}`);
    selesai(); // callback function
}

function selesai(){
    setTimeout(function(){
        alert('selesai mengerjakan tugas!')
    }, 1000)
}

kerjakanTugas('Azura', 'Pemrograman web', selesai);


