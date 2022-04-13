alert('Hewwo There!');

let again = true;
let nama;

while(again){
    nama = prompt(`What's ur name?`)
    alert(`Hewwo ${nama}`);    

    again = confirm(`again?`);
};

alert(`Welcome ${nama}`);

