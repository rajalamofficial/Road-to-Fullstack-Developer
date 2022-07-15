const doLogin = () => {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://rajalam.free.beeceptor.com");

    ajax.addEventListener('load', () => {
        document.getElementById('header')
        .innerHTML = ajax.responseText;
    });

    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    const form = new URLSearchParams();
    form.append("username", document.getElementById('username').value);
    form.append("password", document.getElementById('password').value);

    ajax.send(form.toString());
}

const loginBtn = document.getElementById('loginBtn')
.addEventListener("click", (e) => {
    e.preventDefault();
    doLogin();
});