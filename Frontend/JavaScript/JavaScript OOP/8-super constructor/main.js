class Employee{
    constructor(firstName){
        this.firstName = firstName;
    }

    sayHello(name){
        return `Hello ${name}, my name is ${this.firstName}`;
    }
}

class Manager extends Employee{
    constructor(firstName, lastName){
        super(firstName);
        this.lastName = lastName;
    }

    sayHello(name){
        return `Hi ${name}, my name is ${this.firstName} ${this.lastName}`;
    }
}

const marsha = new Employee("Marsha");
console.log(marsha.sayHello("Joko"))
console.log(marsha);

const raj = new Manager("Raj", "Alam");
console.log(raj.sayHello("Joko"));
console.log(raj)