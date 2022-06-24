class MathUtil{
    static sum(...numbers){
        // throw error
        if(numbers.length === 0) throw new Error("Parameter mengharapkan minimal terdapat 1 parameter");

        // else
        return numbers.reduce((n, result) => n + result);
    }
}

const result = MathUtil.sum();
console.log(result);