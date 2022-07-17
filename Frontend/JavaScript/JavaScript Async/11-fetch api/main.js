function doLogin(){
    const request = new Request("https://eo1acbjkk6kfgd8.m.pipedream.net", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
    });

    // promise
    const response = fetch(request)
    response
        .then(response => response.json())
        .then(json => {
            document.getElementById('header').innerHTML = json.success;
        })
        .catch(error => {
            document.getElementById('header').innerHTML = error;
        })
        .finally(console.log("finally"));
}

document.querySelector("#loginBtn")
.addEventListener("click", e => {
    e.preventDefault();
    doLogin();
})