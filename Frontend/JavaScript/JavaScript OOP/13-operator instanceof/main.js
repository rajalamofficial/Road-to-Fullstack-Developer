class Employee{
    constructor(firstName){
        this.firstName = firstName;
    }
}

class Manager extends Employee{
    constructor(firstName, lastName){
        super(firstName);
        this.lastName = lastName;
    }
}

const employee = new Employee("Raj");
console.log(employee);

console.log(employee instanceof Employee);
console.log(employee instanceof Manager);


const manager = new Manager("Raj", "Alam");
console.log(manager);

console.log(manager instanceof Manager);
console.log(manager instanceof Employee);