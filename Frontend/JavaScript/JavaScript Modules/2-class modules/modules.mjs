export class Person{
    constructor(name){
        this.name = name;
    }

    sayHello(randomName){
        console.log(`Hello ${randomName}, my names is ${this.name}`);
    }
}