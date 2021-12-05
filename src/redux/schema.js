import { normalize, schema } from 'normalizr';

const room = new schema.Entity('rooms');

const reservation = new schema.Entity('reservations', {
  room,
});

const rooms = new schema.Array(room);
const reservations = new schema.Array(reservation);

export const normailzeRooms = (data) => {
  const { entities: { rooms: byId }, result: allIds } = normalize(data, rooms);
  return { byId, allIds };
};

export const normailzeReservations = (data) => {
  const { entities: { reservations: byId }, result: allIds } = normalize(data, reservations);
  return { byId, allIds };
};

export const normailzeReservation = (data) => {
  const { entities: byId, result: id } = normalize(data, reservations);
  return { byId, id };
};
