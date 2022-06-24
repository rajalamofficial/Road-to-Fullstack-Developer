class Person{
    constructor(){
        this.firstName = "Raj";
        this.lastName = "Alam";
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
        console.log(result)
    }
}

let people = new Person();
// getter
console.log(people.fullName);

// setter
people.fullName = "Marsha Lenathea";
console.log(people.fullName);