let array = [0, 3, 2, 5, 2, 1];


// for(let i = 0; i < array.length; i++){
//     console.log(i);
// }

for(let index of array){
    console.log(index);
}

// array bisa menampung lebih dari 1 tipe data
// array juga bisa bersarang (di dalam array ada array lagi)

let myFunc = function(){
    alert('Hewwo!');
}

let mixArray = ['halo', 2, true, myFunc, ['Azura', 2, false]];

console.log(mixArray[4][0])