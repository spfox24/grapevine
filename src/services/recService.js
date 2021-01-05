const BASE_URL = 'http://localhost:3001/api';

export function fetchRecData() {
    return fetch(BASE_URL + '/recs').then(res => res.json());
}