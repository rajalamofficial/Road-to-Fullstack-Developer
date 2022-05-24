/* 
?for of
create a loop iterating over iterable object
iterable object:
- String
- Array
- Arguments / Node List
- Typed Array
- Map
- Set
- User-defined iterables
*/ 

// Array 
const nama = ["Raj", "Marsha", "Lenathea"];

// for(let i = 0; i < nama.length; i++){
//     console.log(nama[i])
// }
  
// nama.forEach(n => console.log(n));

for(const n of nama){
    console.log(n)
}

// String
const str = "Raj Alam X Marsha Lenathea";
for(const i of str){
    console.log(i)
}

// Node list
const li = document.querySelectorAll('ul li');
for(const i of li){
    console.log(i.innerHTML)
}

// Rest par & Arguments
function jumlahAngka(...angka){
    
    // arguments
    let total = 0;
    for(const a of arguments){
        total += a;
    }
    console.log(total)

    // rest par
    return angka.reduce((a, i) => a + i);
}

console.log(jumlahAngka(1, 2, 3, 4, 5));


/*
? For in
sedangkan for in digunakan untuk melooping sebuah object
*/ 

const mhs = {
    nama: "Azura",
    umur: 18,
    hobi: "tidak melakukan apa-apa"
}

for(const i in mhs){
    console.log(mhs[i])
}