class SaySomething{
    say(name){
        if(name){
            this.#sayHello(name);
        } else {
            this.#sayWithout();
        }
    }

    #sayHello(name){
        console.log(`Hello ${name}`);
    }

    #sayWithout(){
        console.log(`Hello`);
    }
}

const azura = new SaySomething();
azura.say("Azura");