// prototype

function Person(firstName, lastName){
    // Person Object
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(){
        console.log(`Hi, i'm ${this.firstName} ${this.lastName}`);
    }

        // this.goodBye = function(){
        //     return `Good bye 1`;
        // }
    }
    
    // Person.prototype
    Person.prototype.goodBye = function(){
        return "Good bye 2";
    }
    
    Person.prototype.running = function(){
        return `${this.firstName} is running!`;
    }

    // Object.prototype
    Object.prototype.goodBye = function(){
        return "Good bye 3";
    }
    
    
    // instance object
    const people = new Person("Raj", "Alam");
    
    console.log(people);
    console.log(people.goodBye())
    console.log(people.running())