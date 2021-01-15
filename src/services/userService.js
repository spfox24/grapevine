import { setToken, getUserFromToken, removeToken, getToken } from './tokenService';


const BASE_URL = 'http://localhost:3001/api/users';


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

export function fetchTopTenData() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    }
    return fetch(BASE_URL + '/dashboard', options).then(res => res.json());
}

function addTop(item) {
    return fetch(BASE_URL + '/dashboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': 'Bearer ' + getToken(),
        },
        body: JSON.stringify(item),
    }).then(response => {
        console.log(response)
        if(response.ok) return response.json();
        throw new Error('An Error Has Occured');
    })
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
};