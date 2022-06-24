class Count{
    // private class field
    #result = 1;

    increment(){
        this.#result++;
    }

    decrement(){
        this.#result--;
    }

    get(){
        return this.#result;
    }
}

const counter = new Count();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();

console.log(counter)