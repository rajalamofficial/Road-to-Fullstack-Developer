const books = [];
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'save-book';
const STORAGE_KEY = 'BOOKSHELF';

document.addEventListener('DOMContentLoaded', () => {
    const inputBook = document.getElementById('inputBook');
    inputBook.addEventListener('submit', event => {
        event.preventDefault();
        addBook();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

function addBook() {
    const inputTitle = document.getElementById('inputBookTitle').value;
    const inputAuthor = document.getElementById('inputBookAuthor').value;
    const inputYear = document.getElementById('inputBookYear').value;
    const id = generateId();

    const checkbox = document.getElementById('inputBookIsComplete').checked;

    if (checkbox) {
        bookObject = generateBookObject(id, inputTitle, inputAuthor, inputYear, true);
    } else {
        bookObject = generateBookObject(id, inputTitle, inputAuthor, inputYear, false);
    }

    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function generateId() {
    return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
    return {
        id,
        title,
        author,
        year,
        isComplete
    }
}

document.addEventListener(RENDER_EVENT, () => {
    const uncompleteBookList = document.getElementById('incompleteBookshelfList');
    uncompleteBookList.innerHTML = '';

    const completeBookList = document.getElementById('completeBookshelfList');
    completeBookList.innerHTML = '';

    for (const book of books) {
        const bookItem = makeBook(book);
        if (book.isComplete) {
            completeBookList.append(bookItem);
        } else {
            uncompleteBookList.append(bookItem);
        }
    }
});

function makeBook(bookObject) {

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = bookObject.title;

    const authorElement = document.createElement('p');
    authorElement.innerHTML = bookObject.author;

    const yearElement = document.createElement('p');
    yearElement.innerHTML = bookObject.year;

    const bookContainer = document.createElement('section');
    bookContainer.classList.add('book_item');
    bookContainer.append(titleElement, authorElement, yearElement);

    const removeButton = document.createElement('button');
    removeButton.classList.add('red');
    removeButton.innerHTML = 'Hapus buku';
    removeButton.addEventListener('click', function () {
        if(isUserConfirm()){
            removeBook(bookObject.id);
        }
    });

    const actionContainer = document.createElement('div');
    actionContainer.classList.add('action');

    if (bookObject.isComplete) {
        const unfinishedButton = document.createElement('button');
        unfinishedButton.innerHTML = 'Belum selesai dibaca';
        unfinishedButton.classList.add('green');

        unfinishedButton.addEventListener('click', function () {
            moveBookToUnfinished(bookObject.id);
        });

        actionContainer.append(unfinishedButton, removeButton);
        bookContainer.append(actionContainer);
    } else {
        const finishedButton = document.createElement('button');
        finishedButton.classList.add('green');
        finishedButton.innerHTML = 'Selesai dibaca';

        finishedButton.addEventListener('click', function () {
            moveBookToFinished(bookObject.id);
        });

        actionContainer.append(finishedButton, removeButton);
        bookContainer.append(actionContainer);
    }

    return bookContainer;
}

function isUserConfirm(){
    const userConfirm = confirm('Apakah anda yakin ingin menghapus buku dari list?');
    if(userConfirm){
        return true;
    }
    return false;
}

function moveBookToFinished(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget === null) return;

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function moveBookToUnfinished(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget === null) return;

    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findBook(bookId) {
    for (const book of books) {
        if (book.id === bookId) {
            return book;
        }
    }
    return null;
}

function removeBook(bookId) {
    const bookTarget = findBookIndex(bookId);

    if (bookTarget === -1) return;

    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

function findBookIndex(bookId) {
    for (const index in books) {
        if (books[index].id === bookId) {
            return index;
        }
    }
    return -1;
}

function saveData() {
    if (isStorageExist()) {
        const parsed = JSON.stringify(books);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function isStorageExist() {
    if (typeof (Storage) === undefined) {
        alert('Browser kamu tidak mendukung local storage');
        return false;
    }
    return true;
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
        for (const book of data) {
            books.push(book);
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
} 