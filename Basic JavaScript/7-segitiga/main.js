function kotak(jumlah){
    let s = '';
    for(let i = 0; i < jumlah; i++){
        for(let j = 0; j <= jumlah; j++){
            s += '* ';
        }
        s += '\n';
    }
    return s;
}

console.log(kotak(5));

function segitiga1(jumlah){
    let s = '';
    for(let i = 0; i < jumlah; i++){
        for(let j = 0; j <= i; j++){
            s += '* ';
        }
        s += '\n'
    }
    return s;
}

console.log(segitiga1(5));

function segitiga2(jumlah){
    let s = '';
    for(let i = 0; i < jumlah; i++){
        for(let j = jumlah; j > i; j--){
            s += '* ';
        }
        s += '\n'
    }
    return s;
}

console.log(segitiga2(5));
