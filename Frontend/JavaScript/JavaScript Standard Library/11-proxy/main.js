// Proxy Handler
/* - pembuatan proxy perlu menggunakan handler, dimana dalam handler, kita bisa membuat function
     yang dinamakan interceptor yang digunakan ketika mengambil data atau mengubah data ke target
   - Untuk membuat proxy, kita bisa menggunakan new Proxy(target, handler)    
*/ 

const target = {
    middleName: "Lenathea"
};

const handler = {
    get: function(target, property){
        console.log(`Access property: ${property}`)
        return target[property];
    },
    set: function(target, property, value){
        console.log(`Change property ${property} : ${value}`)
        target[property] = value;
    }
}

const proxy = new Proxy(target, handler);
proxy.firstName = "Marsha";
proxy.lastName = "Lavia";

console.log(target)
console.log(proxy.firstName);
console.log(proxy.middleName)
console.log(proxy.lastName);