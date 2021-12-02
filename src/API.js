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
  const response = await http.post('/register', { user });
  saveToken(response.headers);
  return response.data;
};

export const login = async (user) => {
  const response = await http.post('/login', { user });
  saveToken(response.headers);
  return response.data;
};

export const logout = async () => {
  await http.post('/register');
  localStorage.removeItem(TOKEN_KEY);
};
