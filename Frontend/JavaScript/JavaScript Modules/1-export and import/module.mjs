export function sayHello(name){
    return `Hello ${name}`;
}

export function calculation(...numbers){
    return numbers.reduce((acc, curValue) => acc + curValue);
}