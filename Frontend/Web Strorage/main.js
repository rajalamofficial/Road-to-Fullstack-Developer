const cacheKey = "NUMBER";

if(typeof(Storage) !== 'undefined'){
    // pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(sessionStorage.getItem(cacheKey) === null){
        // jika belum maka atur dengan nilai 0\
        sessionStorage.setItem(cacheKey, 0);
    }

    const button = document.querySelector('.btn');
    const count = document.querySelector('.count');

    button.addEventListener('click', function(){
        let number = sessionStorage.getItem(cacheKey);
        number++;
        sessionStorage.setItem(cacheKey, number);
        count.innerHTML = sessionStorage.getItem(cacheKey)
    });

} else {
    alert('browser tidak mendukung web storage');
}