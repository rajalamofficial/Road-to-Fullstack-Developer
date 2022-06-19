const cacheKey = 'NUMBER';
if(typeof(Storage) !== 'undefined'){
    // pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(sessionStorage.getItem(cacheKey) === 'undefined'){
        sessionStorage.setItem(cacheKey, 0);
    }

    const count = document.querySelector('.count');
    const btn = document.querySelector('.btn');
    
    let number = sessionStorage.getItem(cacheKey);
    btn.addEventListener('click', function() {
        number++;
        sessionStorage.setItem(cacheKey, number)
        count.innerHTML = sessionStorage.getItem(cacheKey);
    })
    
} else {
    alert('browser tidak mendukung Web Storage');
}

