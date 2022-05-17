// function Mahasiswa(){
//     this.nama = 'Azura';
//     this.umur = 18;
//     setInterval( () =>{
//         console.log(this.umur++);
//     }, 500);
// };

// const mhs = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    this.classList.toggle('size');
    setTimeout( () => {
        this.classList.toggle('color');
    }, 600);
});