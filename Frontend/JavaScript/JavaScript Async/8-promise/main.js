const promise = new Promise(function(resolve, reject){
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "api/product.json");

    ajax.addEventListener("load", () => {
        if(ajax.status === 200){
            resolve(JSON.parse(ajax.responseText));
        } else {
            reject(`Error Get Product with response: ${ajax.responseText}`);
        }
    });

    ajax.send();
});

console.log(promise)