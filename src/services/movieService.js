const BASE_URL = '/api';

function fetchMovies() {
    return fetch(BASE_URL + '/movies').then(res => res.json())
}

function addFavorite() {

}

export {
    fetchMovies,
    addFavorite
};