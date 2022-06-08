function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(){
        console.log(`Hi, i'm ${this.firstName} ${this.lastName}`);
    }
}

function Person(firstName, lastName){
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const people = new Person("Raj", "Alam");
console.log(people.sayHello());