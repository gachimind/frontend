import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Chat, GameRoomDetail } from '@customTypes/gameRoomType';
import { GameRoomBroadcastResponse } from '@customTypes/socketType';

// TODO: 게임룸의 상태 정보가 추가될 수 있다. EX) [대기, 게임중, 게임종료] 상태
interface InitialGameRoomStateType {
  room: GameRoomDetail | null;
  broadcastedRooms: GameRoomBroadcastResponse[];
  chatList: Chat[];
}

const initialState: InitialGameRoomStateType = {
  room: null,
  broadcastedRooms: [],
  chatList: [],
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
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chatList = [action.payload, ...state.chatList];
    },
    clearChatList: (state) => {
      state.chatList = [];
    },
  },
  extraReducers: {},
});

export const { joinGameRoom, updateAllRooms, updateRoom, addChat, clearChatList } = gameRoomSlice.actions;

export default gameRoomSlice;
