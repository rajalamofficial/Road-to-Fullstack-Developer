function getProduct(product){
    const promise = new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", `api/${product}.json`);

        ajax.addEventListener("load", () => {
            if(ajax.status === 200){
                resolve(JSON.parse(ajax.responseText));
            } else {
                reject(`Error get product with status: ${ajax.status}`)
            }
        });

        ajax.send();
    });

    console.log(promise);
    return promise;
}

Promise.all([
    getProduct("product-1"),
    getProduct("product-2"),
    getProduct("product-3")
])

.then(products => {
    products.forEach(product => console.log(product))
});