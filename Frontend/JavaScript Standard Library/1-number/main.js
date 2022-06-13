const input = "12345";
// mengkonversikan ke number
const number = Number(input);

console.log(input);
console.log(number);

// mengecek tipe data
console.log(typeof input);
console.log(typeof number);

/*
? Static Properties
*/ 
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.EPSILON)

/*
? Static Method
*/ 
const data = Number("test");
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

/*
? Instance Method
*/ 
const decimalToBinary = 10;
console.log(decimalToBinary.toString(2)) // 1010

const price = 125200100;
console.log(price.toLocaleString("id-ID"))
