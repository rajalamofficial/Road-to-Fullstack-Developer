function displayResponse(json){
    const header = document.getElementById('header');
    header.innerText = json.response;
}

const ajax = new XMLHttpRequest();
ajax.open("GET", "package.json");
ajax.addEventListener('load', () => {
    if(ajax.status === 200){
        const json = JSON.parse(ajax.responseText);
        displayResponse(json);
    } else {
        displayResponse({
            response: `Terjadi error dengan status ${ajax.status}`
        })
    }
})
ajax.send();