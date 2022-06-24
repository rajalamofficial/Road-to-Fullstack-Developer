class MathUtil{
    // static method
    static sum(...numbers){
        return numbers.reduce((n, result) => n + result);
    }
}

const result = MathUtil.sum(1, 2, 3, 4, 5);
console.log(result)