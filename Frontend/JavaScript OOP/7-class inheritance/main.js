// untuk mewarisi class bisa menggunakan kata kunci extends
class Employee{
    sayHello(name){
        console.log(`Hello ${name}, my name is employee ${this.name}`);
    }
    sayGoodbye(name){
        console.log(`Goodbye ${name}`);
    }
    sayHello(name){
        console.log(`Hello ${name}, my name is employee ${this.name}`);
    }
}

class Manager extends Employee{
    sayHello(name){
        console.log(`Hello ${name}, my name is manager ${this.name}`);
    }
}

const azura = new Employee();
azura.name = "Azura";
azura.sayHello("Joko");
console.log(azura);

const marsha = new Manager();
marsha.name = "Marsha";
marsha.sayHello("Joko");
console.log(marsha);

