import { setToken, getUserFromToken, removeToken, getToken } from './tokenService';


// const BASE_URL = 'http://localhost:3001/api/users';
const BASE_URL = 'https://grapevine-content-app.herokuapp.com/api/users';

function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user) 
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Email Already Taken');
    }).then(data => setToken(data.token));
}

function login(creds) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(creds) 
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Credentials');
    }).then(data => setToken(data.token));
}

function addTop(data) {
    return fetch(BASE_URL + '/dashboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer ' + getToken(),
        },
        body: JSON.stringify(data),
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('An Error Has Occured');
    }).then (data => {
        const topTen = JSON.stringify(data.topTenArray);
        updateTopTen(topTen);
    });
}

function getList(userId) {
    const headers = {
        'Content-Type': 'Application/json'
    }
    return fetch(BASE_URL + '/dashboard/' + userId, { headers })
    .then(response => response.json())
    .then(data => console.log(JSON.stringify(data)));
}

function updateList(data, itemId) {
    const userId = getUser()._id;

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(data)
    }
    return fetch(`${BASE_URL}/edit/${itemId}/${userId}`, requestOptions)
    .then(response => response.json)
    .then(data => console.log(data));
}

function updateTopTen(topTenArray) {
    let user = getUser();
    user.topTen = topTenArray;
}

function logout() {
    removeToken();
}

function getUser() {
    return getUserFromToken();
}

export {
    signup,
    login,
    logout,
    getUser,
    addTop,
    getList,
    updateList,
};