// tanpa menggunakan await
function getProduct(){
    const request = new Request("product.json", {
        method: "GET"
    });

    const response = fetch(request);

    return response
        .then(response => response.json());
}

function getProductName(){
    return new Promise((resolve, reject) => {
        getProduct()
            .then(product => resolve(product.name))
            .catch(error => reject(error))
    });
}

getProductName()
    .then(productName => console.log(productName));

// menggunakan await
// await hanya bisa dipakai di function async
async function getProductNameAsync(){
    try{
        const product = await getProduct();
        return product.name;
    } catch(error) {
        return "product not found";
    }
}

getProductNameAsync()
    .then(productName => console.log(productName))