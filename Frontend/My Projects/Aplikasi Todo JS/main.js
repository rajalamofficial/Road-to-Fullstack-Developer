function add (){

    const todo = document.getElementById('todo')

    // Fitur TODO :
    // 1. Menambahkan
    // 2. Coret kalau sudah selesai
    // 3. Menghapus

    // 1. ambil nilai dari textnya
    let newText = document.getElementById('new_text')

    // 2. tambahkan list baru kedalam ul
    let newTodo =   "<li> <span onclick='toggle(this)'>" + newText.value + "</span>" +
                    "<span onclick='remove(this)'> [x] </span>" + 
                    "</li>"
    todo.insertAdjacentHTML('afterbegin', newTodo)

    // 3. kosongkan field nya saat button di click
    newText.value = ""
}

function toggle(el){
    el.classList.toggle('done')
}

function remove(el){
    el.parentElement.remove()
}
