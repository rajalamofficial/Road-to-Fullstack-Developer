function Employee(name){
    this.name = name;
}

function Manager(name){
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function(name){
    return `Hello ${name}, my name is ${this.name}`;
}

Employee.prototype.sayHello = function(name){
    return `Hello ${name}, my name is ${this.name}`;
}

const employee = new Employee("Azura");
console.log(employee.sayHello("Lavia"));
console.log(employee);

const manager = new Manager("Marsha");
console.log(manager.sayHello("Lavia"));
console.log(manager);