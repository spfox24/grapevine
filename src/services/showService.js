const BASE_URL = 'https://grapevine-content-app.herokuapp.com/api';

function fetchShows(pageNum) {
    let url;

    if(pageNum) {
        url = `${BASE_URL}/shows?page=${pageNum}`;
    } else {
        url = `${BASE_URL}/shows`;
    }
    return fetch(url).then(res => res.json())
}

function fetchShow(id) {
    return fetch(BASE_URL + `/shows/${id}`).then(res => res.json());
};

export {
    fetchShows,
    fetchShow
};