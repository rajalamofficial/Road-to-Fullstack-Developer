class Calculation{
    constructor(...numbers){
        this.numbers = numbers;
    }

    plus(){
        return this.numbers.reduce((acc, curVal) => acc + curVal);
    }

    minus(){
        return this.numbers.reduce((acc, curVal) => acc - curVal);
    }
}

const names = ["Marsha", "Lenathea", "Lavia"];
const helloWorld = "Hello World";

export { Calculation, names, helloWorld };
