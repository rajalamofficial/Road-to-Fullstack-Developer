class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }
    // method sebaiknya di simpan di prototype
    // Person.prototype
    sayHello(name){
        return `Halo ${name}, nama saya adalah ${this.firstName} ${this.lastName}`;
    } 
}

const azura = new Person("Azura", "Aramu");
console.log(azura.sayHello("Joko"));