const storage = {
  setCurrentEnteredRoom: (roomId: number, password: number) => {
    sessionStorage.setItem('currentEnteredRoom', roomId + '#' + password);
  },
  getCurrentEnteredRoom: () => {
    const currentRoom = sessionStorage.getItem('currentEnteredRoom');
    if (!currentRoom) {
      return undefined;
    }
    const [roomId, password] = currentRoom.split('#').map((splited) => splited);
    if (roomId && password) {
      return { roomId: parseInt(roomId, 10), password };
    }
    return undefined;
  },
};

export default storage;
