class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0) throw new Error("Parameter mengharapkan minimal 1 Parameter");

        return numbers.reduce((n, result) => n + result);
    }
}

try{
    const result = MathUtil.sum();
    console.log(result);
} catch(error) {
    // error ditangkap dan menampilkan pesan kesalahan
    console.log(`Terjadi error: ${error.message}`);
} finally{
    // jika terjadi error ataupun tidak block finally akan sealalu di eksekusi
    console.log("Program selesai")
}

// block tidak akan berenti dan akan terus berlanjut karena error sudah di catch
console.log("Raj Alam");
console.log(MathUtil.sum(1, 2, 3, 4, 5));