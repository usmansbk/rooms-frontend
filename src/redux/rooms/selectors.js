export const selectAllRooms = (state) => state.rooms.allIds;
export const selectRoomById = (id) => (state) => state.rooms.byId[id];
