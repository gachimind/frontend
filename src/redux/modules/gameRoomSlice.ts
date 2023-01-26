import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from '@utils/stroage';

import { Chat, GameRoomDetail } from '@customTypes/gameRoomType';
import { GameRoomBroadcastResponse } from '@customTypes/socketType';

// TODO: 게임룸의 상태 정보가 추가될 수 있다. EX) [대기, 게임중, 게임종료] 상태
interface InitialGameRoomStateType {
  room: GameRoomDetail | null;
  broadcastedRooms: GameRoomBroadcastResponse[];
  chatList: Chat[];
  lastEnteredRoom?: {
    roomId: number;
    password?: number;
  };
}

const initialState: InitialGameRoomStateType = {
  room: null,
  broadcastedRooms: [],
  chatList: [],
  lastEnteredRoom: storage.getCurrentEnteredRoom(),
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
    setLastEnteredRoom: (state, action) => {
      const { roomId, password } = action.payload;
      state.lastEnteredRoom = { roomId, password };
      storage.setCurrentEnteredRoom(roomId, password);
    },
    setIsGameOnState: (state, action: PayloadAction<boolean>) => {
      state.room = { ...(state.room as GameRoomDetail), isGameOn: action.payload };
    },
    setScore: (state, action: PayloadAction<{ userId: number; score: number }>) => {
      const { userId, score } = action.payload;
      if (!state.room?.participants) {
        return;
      }
      const participants = state.room.participants.map((participant) =>
        participant.userId === userId ? { ...participant, score: (participant.score ?? 0) + score } : participant,
      );
      state.room = { ...state.room, participants };
    },
    clearScore: (state) => {
      if (!state.room?.participants) {
        return;
      }
      const participants = state.room.participants.map((participant) => {
        return { ...participant, score: 0 };
      });
      state.room = { ...state.room, participants };
    },
  },
  extraReducers: {},
});

export const {
  joinGameRoom,
  updateAllRooms,
  updateRoom,
  addChat,
  clearChatList,
  setLastEnteredRoom,
  setIsGameOnState,
  setScore,
  clearScore,
} = gameRoomSlice.actions;

export default gameRoomSlice;
