export const selectAllRooms = (state) => state.rooms.allIds;
export const selectRoomById = (id) => (state) => state.rooms.byId[id];
export const selectRoomsByCity = (currentCity) => (state) => (
  state.rooms.allIds.filter((id) => {
  const { city } = state.rooms.byId[id];
  
  return city === currentCity;
}));
