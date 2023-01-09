import { createSlice } from '@reduxjs/toolkit';

import { GameRoomDetail } from '@customTypes/gameRoomType';
import { GameRoomBroadcastResponse } from '@customTypes/socketType';

// TODO: 게임룸의 상태 정보가 추가될 수 있다. EX) [대기, 게임중, 게임종료] 상태
interface InitialGameRoomStateType {
  room: GameRoomDetail | null;
  broadcastedRooms: GameRoomBroadcastResponse[];
}

const initialState: InitialGameRoomStateType = {
  room: null,
  broadcastedRooms: [],
};

const gameRoomSlice = createSlice({
  name: 'gameRoom',
  initialState,
  reducers: {
    joinGameRoom: (state, action) => {
      state.room = action.payload;
    },
    updateAllRooms: (state, action) => {
      state.broadcastedRooms = action.payload;
    },
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
  },
  extraReducers: {},
});

export const { joinGameRoom, updateAllRooms, updateRoom } = gameRoomSlice.actions;

export default gameRoomSlice;
