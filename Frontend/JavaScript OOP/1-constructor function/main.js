// constructor 
function Person(){
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function(name){
        console.log( `Halo ${name}, nama saya ${this.firstName}` );
    }
}

const azura = new Person();
azura.firstName = "Azura";
azura.lastName = "Aramu";
azura.sayHello("Raj");

const raj = new Person();
raj.firstName = "Raj";
raj.lastName = "Alam";
raj.sayHello("Azura");

console.log(azura);
console.log(raj);

