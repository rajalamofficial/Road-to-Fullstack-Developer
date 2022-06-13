{
    // array queue
    const queue = [];
    queue.push("Marsha");
    queue.push("Lenathea");
    queue.push("Lavia");

    console.log(queue)
    console.log(queue.shift())
    console.log(queue.shift())
    console.log(queue.shift())
    console.log(queue.shift())
    console.log(queue)
}

    console.log("")

{
    // array stack
    const stack = [];
    stack.push("Raj");
    stack.push("Alam");
    stack.push("Umar");

    console.log(stack);
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack)
}

console.log("")

{
    // array search
    const number = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    console.log(number.find(n => n > 2));
    console.log(number.findIndex(n => n == 5));
    console.log(number.includes(7));
    console.log(number.indexOf(3));
    console.log(number.lastIndexOf(5));
}

console.log("")

{
    // array filter
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const genap = number.filter(n => n % 2 === 0);
    const ganjil = number.filter(n => n % 2 === 1);
    
    console.log(number)
    console.log(genap);
    console.log(ganjil);
}

console.log("")

{
    // array transform
    const names = ["Marsha", "Lenathea", "Lavia"];
    const namesUppercase = names.map(value => value.toUpperCase());
    console.log(namesUppercase);

    const namesReduce = names.reduce((acc, curValue) => `${acc} ${curValue}`);
    console.log(namesReduce)

    const namesReduceRight = names.reduceRight((right, left) => `${right} ${left}`);
    console.log(namesReduceRight)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(total);

}