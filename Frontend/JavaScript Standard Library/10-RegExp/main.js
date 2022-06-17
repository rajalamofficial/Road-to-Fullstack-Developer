/*
    RegExp merupakan implementasi dari regular expression di JavaScript
    Regular Expression merupakan fitur untuk mencari text dengan pola
    Membuat regular expression di JavaScript bisa dilakukan dengan dua cara, yaitu 
    menggunakan literal notation atau membuat object RegExp
*/ 

{
    // regex
    const fullName = "Marsha Lenathea Lavia";
    const regex = /Lavia/;

    const result = regex.exec(fullName);
    console.log(result);
}

console.log("")

{
    // regex modifier
    const people = "Azura Marsha alam Raj marsha aramu azura";
    const regexGlobal = /azura/g
    const regexIncaseGlob = /marsha/ig

    let result;
    while((result = regexGlobal.exec(people)) !== null){
        console.log(result);
    }

    while((result = regexIncaseGlob.exec(people)) !== null){
        console.log(result);
    }
}

console.log("")

{
    // regex modifier 2
    const names = "Marsha \nLenathea \nLavia \nmarsha \nlenathea \nlavia";
    const regex = /^m....a/igm;
    // ^ => mencari di awal tulisan
    // . => mencari apapun tidak memperdulikan hurufnya
    // m => multiline

    let result;
    while((result = regex.exec(names)) !== null){
        console.log(result)
    }
}

console.log("")

{
    // regex advanced
    const names = "azura marsha marshi marshu marshe marsho lavia lenathea";

    console.log(names.match(/marsh[aiueo]/ig));
    console.log(names.search(/marsh[aiueo]/ig));
    console.log(names.replace(/marsh[aiueo]/, "Raj"));
    console.log(names.replaceAll(/marsh[aiueo]/ig, "replaced"));
    console.log(names.split(/m/ig))
}