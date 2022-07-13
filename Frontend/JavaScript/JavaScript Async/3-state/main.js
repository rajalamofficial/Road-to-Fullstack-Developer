function displayResponse(json){
    const header = document.getElementById('header');
    header.innerText = json.response;
}

const ajax = new XMLHttpRequest();
ajax.addEventListener('readystatechange', () => {
    console.log(`Ready state change ${ajax.readyState}`)
})

ajax.open("GET", "package.json");
ajax.addEventListener('load', () => {
    if(ajax.status === 200){
        const jsonParsed = JSON.parse(ajax.responseText);
        displayResponse(jsonParsed);
    } else {
        displayResponse({
            response: `Terjadi error dengan status ${ajax.status}`
        })
    }
});

ajax.send();