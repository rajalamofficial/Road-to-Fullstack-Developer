const doRegister = () => {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://eo1acbjkk6kfgd8.m.pipedream.net");

    ajax.addEventListener('load', () => {
        console.log(ajax.responseText);
    });

    const form = new FormData();
    form.append("username", document.getElementById('username').value);
    form.append("password", document.getElementById('password').value);

    const file = document.getElementById('profile').files.item(0);
    form.append("profile", file);

    ajax.send(form);
}

const registerBtn = document.getElementById('registerBtn')
.addEventListener('click', (e) => {
    e.preventDefault();
    doRegister();
})