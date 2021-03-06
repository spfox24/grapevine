const BASE_URL = 'https://grapevine-content-app.herokuapp.com/api';

function fetchBooks() {
    return fetch(BASE_URL + '/books').then(res => res.json());
};

function fetchBook(id) {
    return fetch(`${BASE_URL}/books/${id}`).then(res => res.json());
}

export {
    fetchBooks,
    fetchBook
};