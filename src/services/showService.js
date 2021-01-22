const BASE_URL = '/api';

function fetchShows() {
    return fetch(BASE_URL + '/shows').then(res => res.json())
}

function addFavorite() {

}

export {
    fetchShows,
    addFavorite
};