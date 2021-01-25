const BASE_URL = 'https://grapevine-content-app.herokuapp.com/api';

function fetchMovies(pageNum) {
    let url;

    if(pageNum) {
        url = `${BASE_URL}/movies?page=${pageNum}`;
    } else {
        url = `${BASE_URL}/movies`
    }
    return fetch(url).then(res => res.json());
};

function fetchMovie(id) {
    return fetch(BASE_URL + `/movies/${id}`).then(res => res.json());
};

export {
    fetchMovies,
    fetchMovie
};