class ErrorValidation extends Error{
    constructor(message, field){
        super(message);
        this.field = field;
    }
}

class MathUtil{
    static sum(...numbers) {
        //                                                          super(message)               this.field 
        if(numbers.length === 0) throw new ErrorValidation("Jumlah parameter harus lebih dari 0", "numbers")

        return numbers.reduce((n, result) => n + result);
    }
}

try{
    const result = MathUtil.sum();
    console.log(result);
} catch(error){
    if(error instanceof ErrorValidation){
        console.log(`terjadi error di field ${error.field}, dengan error: ${error.message}`)
    }
}