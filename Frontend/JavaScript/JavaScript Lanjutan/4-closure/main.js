function a(valueA){
    const nama = 'Azura';
    function b(valueB){
        console.log(nama);
        return valueA + valueB;
    }
    return b;
}

let sum = a(2);
// function sum(valueB){
//     console.log(nama);
//     return 2 + valueB;
// }

console.log(sum(10))
