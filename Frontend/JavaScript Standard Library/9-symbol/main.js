// symbol merupakan tipe data yang digaransi akan selalu unik setiap kali kita membuat data symbol
// symbol kadang digunakan untuk membuat key pada object
{
    const firstName = Symbol("firstName");
    const lastName = Symbol("lastName");

    const person = {
        [firstName]: "Raj",
        [lastName]: "Alam"
    };

    console.log(person);
    console.log(person[firstName]);
    console.log(person[lastName]);
}

console.log("")

{
    // Symbol For
    const person = {
        [Symbol.for("firstName")]: "Raj",
        [Symbol.for("lastName")]: "Alam"
    };

    console.log(person)
    console.log(person[Symbol.for("firstName")]);
    console.log(person[Symbol.for("lastName")]);
}