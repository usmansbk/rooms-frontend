import axios from 'axios';

const BASE_URL = 'https://polar-island-18380.herokuapp.com/';

export const http = axios.create({
  baseURL: BASE_URL,
});

export const register = async (user) => {
  const response = await http.post('/register', { user });
  const token = response.headers.authorization;
  const currentUser = response.data;

  return { token, currentUser };
};

export const login = async (user) => {
  const response = await http.post('/login', { user });
  const token = response.headers.authorization;
  const currentUser = response.data;

  return { token, currentUser };
};

export const logout = async () => {
  await http.delete('/logout');
};

export const getRooms = async () => {
  const response = await http.get('/rooms');
  return response.data;
};
