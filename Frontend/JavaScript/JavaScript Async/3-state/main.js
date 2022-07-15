function displayResponse(json){
    const header = document.getElementById('header');
    header.innerHTML = json.response;
}

const ajax = new XMLHttpRequest();
ajax.addEventListener('readystatechange', () => {
    console.log(`ready state change ${ajax.readyState}`);
})

ajax.open("GET", "package.json");

ajax.addEventListener('load', function(){
    if(ajax.status === 200){
        const parsed = JSON.parse(ajax.responseText);
        displayResponse(parsed);
    } else {
        displayResponse({
            response: `Terjadi error dengan status ${ajax.status}`
        })
    }
});

ajax.send();