const doSearch = () => {
    const ajax = new XMLHttpRequest();

    const param = new URLSearchParams();
    param.append("search", document.getElementById('search').value);
    param.append("filter", document.getElementById('search').value);

    const url = `https://rajalam.free.beeceptor.com?${param.toString()}`;
    // https://rajalam.free.beeceptor.com?search=xxx&filter=yyy

    ajax.open("GET", url);

    ajax.addEventListener('load', () => document.getElementById('header')
    .innerHTML = ajax.responseText)

    ajax.send();
}

const searchBtn = document.getElementById('searchButton');
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doSearch();
})