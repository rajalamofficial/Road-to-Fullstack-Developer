function getProduct(){
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "product.json");

        ajax.addEventListener("load", () => {
            if(ajax.status === 200){
                resolve(ajax.responseText);
            } else {
                reject(`Error get product with response:: ${ajax.status}`);
            }
        });

        ajax.send();
    });
}

getProduct()
    .then((response) => JSON.parse(response))
    .then((json) => {
        document.getElementById("idProduct").innerHTML = json.id;
        document.getElementById("nameProduct").innerHTML = json.name;
        document.getElementById("priceProduct").innerHTML = json.price;
    })
    .catch((error) => {
        document.getElementById("idProduct").innerHTML = error;
        document.getElementById("nameProduct").innerHTML = error;
        document.getElementById("priceProduct").innerHTML = error;
    })
    .finally(() => console.log("finally"))