export function calculation(...num){
    console.log(num.reduce((acc, curVal) => acc + curVal));
}

