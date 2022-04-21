function faktorial(n){
    if(n == 0){
        return 1;
    }
    return n * faktorial(n - 1);
}

console.log(faktorial(5));

// 5 * 4 * 3 * 2 * 1 * 1