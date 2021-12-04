import axios from 'axios';

export const BASE_URL = 'https://polar-island-18380.herokuapp.com';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const register = async (user) => {
  const response = await api.post('/register', { user });
  const token = response.headers.authorization;
  const currentUser = response.data;

  return { token, currentUser };
};

export const login = async (user) => {
  const response = await api.post('/login', { user });
  const token = response.headers.authorization;
  const currentUser = response.data;

  return { token, currentUser };
};

export const logout = async () => {
  await api.delete('/logout');
};

export const getRooms = async () => {
  const response = await api.get('/rooms');
  return response.data;
};

export const createRoom = async (room) => {
  const response = await api.post('/rooms', room);
  return response.data;
};

export const getRoom = async (id) => {
  const response = await api.get(`/rooms/${id}`);
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await api.delete(`/rooms/${id}`);
  return response.status === 204;
};

export const getReservations = async () => {
  const response = await api.get('/reservations');
  return response.data;
};

export const createReservation = async (reservation) => {
  const response = await api.post('/reservations', { reservation });
  return response.data;
};

export const deleteReservation = async (id) => {
  const response = await api.delete(`/reservations/${id}`);
  return response.status === 204;
};
