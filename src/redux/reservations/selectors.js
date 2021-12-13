export const selectMyReservations = (state) => state.reservations.allIds;

export const selectReservationById = (id) => (state) => state.reservations.byId[id];
