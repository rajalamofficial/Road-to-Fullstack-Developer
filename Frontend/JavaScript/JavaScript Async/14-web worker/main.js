const worker = new Worker("worker.js");
worker.addEventListener("message", message => {
    console.log(message.data)
})

document.querySelector(".btn")
    .addEventListener("click", () => {
        worker.postMessage(20000)
    })