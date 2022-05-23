// Destructuring array
    /* 
    *const sayHello = ["Halo", "nama", "saya", "Raj"];
    *const [a, b, c, d] = sayHello;
    *console.log(a)

    *const [a, b, c, d] = ["Halo", "nama", "saya", "Raj"];
    *console.log(a)

    *const [sayHello, ...nama] = ["Halo", "nama", "saya", "Raj"];
    *console.log(`${sayHello} ${nama.join(' ')}`)
    */
// Destructuring Object
    /* 
    *const mhs = {
    *    nama: "Azura",
    *    umur: 18,
    *    email: "rajalamofficial@gmail.com"
    *}

    *const {nama, umur, email} = mhs;
    *console.log(nama)
    */

// Assignment tanpa deklarasi object
    /* 
    *const {nama, umur, email} = {
    *    nama: "Azura",
    *    umur: 18,
    *    email: "rajalamofficial@gmail.com"
    *}
    *console.log(nama)
    */

// Assign ke variable baru & default value
    /*                                     Default value
    * const {nama: n, umur: u, email: e = 'unknownUser@gmail.com'} = {
    *        nama: "Azura",
    *        umur: 18,
    *}
    *console.log(e)
    */ 

// swap items pada array
    /* 
    *let [a, b] = [1, 2];
    *[a, b] = [b, a];
    *console.log(a)
    *console.log(b)
    */

// return value pada function
    /* 
    *function example(){
    *    return [1, 2];
    *}

    *const [a, b] = example();
    *console.log(a, b)
    */ 

// Mengambil field pada object, setelah dikirimkan sebagai parameter untuk function
// misal kita mendapatkan id dari API
    const mhs = {
        id: "240804",
        nama: "Azura",
        umur: 18,
        email: "rajalamofficial@gmail.com"
    }

    // function getIdMhs(mhs){
    //     return mhs.id
    // }

    function getIdMhs({id}){
        return id;
    }

    console.log(getIdMhs(mhs))