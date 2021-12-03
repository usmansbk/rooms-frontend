import axios from 'axios';

const BASE_URL = 'https://polar-island-18380.herokuapp.com/';
const TOKEN_KEY = 'bearer/token';

const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: {
      toString() {
        return localStorage.getItem(TOKEN_KEY);
      },
    },
  },
});

const saveToken = (headers) => {
  const token = headers.authorization;
  localStorage.setItem(TOKEN_KEY, token);
};

export const register = async (user) => {
  localStorage.removeItem(TOKEN_KEY);
  const response = await http.post('/register', { user });
  saveToken(response.headers);
  return response.data;
};

export const login = async (user) => {
  localStorage.removeItem(TOKEN_KEY);
  const response = await http.post('/login', { user });
  saveToken(response.headers);
  return response.data;
};

export const logout = async () => {
  await http.delete('/logout');
  localStorage.removeItem(TOKEN_KEY);
};

export const getRooms = async () => {
  const response = await http.get('/rooms');
  return response.data;
};
