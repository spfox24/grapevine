const BASE_URL = '/api';

function fetchShows() {
    return fetch(BASE_URL + '/shows').then(res => res.json())
}

function fetchShow(id) {
    return fetch(BASE_URL + `/shows/${id}`).then(res => res.json());
};

function addFavorite() {

}

export {
    fetchShows,
    fetchShow,
    addFavorite
};