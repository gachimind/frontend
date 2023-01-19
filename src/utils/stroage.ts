const storage = {
  setCurrentEnteredRoom: (roomId: number, password: number) => {
    sessionStorage.setItem('currentEnteredRoom', roomId + '#' + password);
  },
  getCurrentEnteredRoom: () => {
    const currentRoom = sessionStorage.getItem('currentEnteredRoom');
    if (!currentRoom) {
      return undefined;
    }
    const [roomId, password] = currentRoom.split('#').map((splited) => parseInt(splited, 10));
    if (roomId && password) {
      return { roomId, password };
    }
    return undefined;
  },
};

export default storage;
