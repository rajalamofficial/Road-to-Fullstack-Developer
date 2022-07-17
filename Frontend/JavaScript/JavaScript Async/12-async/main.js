// tanpa async
function getNamePromise(){
    return new Promise((resolve, reject) => {
        resolve("Promise");
    })
}

getNamePromise()
    .then(response => console.log(response));


// menggunakan async
async function getNameAsync(){
    return "Async";
}

getNameAsync()
    .then(response => console.log(response));