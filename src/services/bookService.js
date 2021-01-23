const BASE_URL = '/api'

function fetchBooks() {
    return fetch(BASE_URL + '/books').then(res => res.json());
};

function fetchBook(id) {
    return fetch(`${BASE_URL}/books/${id}`).then(res => res.json());
}

function addFavorite() {

};

export {
    fetchBooks,
    fetchBook,
    addFavorite
};