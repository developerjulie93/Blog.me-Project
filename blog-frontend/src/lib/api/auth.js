import client from './client';

export const login = ({username, password})=>
    client.post('/api/auth/login', {username, password});

export const register = ({username, password})=>
    client.post('/api/auth/register', {username, password});

    //check login status
export const check = ()=>client.get('/api/auth/check');