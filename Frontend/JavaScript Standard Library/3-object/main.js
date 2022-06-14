{
    // freeze & seal
    const person = {
        firstName: "Raj",
        lastName: "Alam"
    };

    // bisa merubah value nya tetapi tidak bisa menambah / menghapus properti nya
    // Object.seal(person);

    // Membekukan objek alias tidak bisa menambah, menghapus, merubah properti di dalam object beserta value nya
    Object.freeze(person);

    // merubah value
    person.firstName = "Azura";
    // menghapus properti
    delete person.lastName;

    console.log(person);
}

console.log("");

{
    // object assign
    // digunakan untuk mengcopy seluruh isi property beserta value di dalam object 
    // dan menimpanya ke object lain
    const target = {
        firstName: "Marsha"
    };

    const source = {
        middleName: "Lenathea",
        lastName: "Lavia"
    };

    console.log(target);
    Object.assign(target, source);
    console.log(target);
}

console.log("");

{
    // object property names & values
    const person = {
        firstName: "Akira",
        middleName: "Azura",
        lastName: "Aramu"
    };

    console.log(Object.getOwnPropertyNames(person));
    console.log(Object.values(person));
}