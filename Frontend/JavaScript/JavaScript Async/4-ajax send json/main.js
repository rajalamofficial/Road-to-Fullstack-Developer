const doLogin = () => {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://rajalam.free.beeceptor.com");
    
    ajax.addEventListener('load', () => {
        document.getElementById('header').innerHTML = ajax.responseText;
    });

    ajax.setRequestHeader("Content-Type", "application/json");

    const json = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }

    ajax.send(JSON.stringify(json));
}    

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    doLogin();
})
