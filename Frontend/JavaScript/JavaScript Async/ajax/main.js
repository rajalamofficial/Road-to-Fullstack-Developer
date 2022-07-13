const ajax = new XMLHttpRequest();
ajax.open("GET", "api/api.json");
ajax.addEventListener('load', () => {
    const header = document.getElementById('header');
    const json = JSON.parse(ajax.responseText);

    const fullName = `${json.firstName} ${json.middleName} ${json.lastName}`;
    header.textContent = fullName;
});
ajax.send();