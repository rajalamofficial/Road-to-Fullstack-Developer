// constructor with parameter
function Person(firstName, lastName){
    this.firstName = firstName;
    this.LastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.sayHello = function(){
        console.log(`Halo nama saya ${this.fullName}`);
    }
}

const people = new Person("Raj", "Alam");
people.sayHello();