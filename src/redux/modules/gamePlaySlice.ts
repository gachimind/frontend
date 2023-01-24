import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameTimer, GameTurnInfoResponse } from '@customTypes/socketType';

interface GamePlayStateType {
  playState?: GameTimer;
  turn?: GameTurnInfoResponse;
}

const initialState: GamePlayStateType = {};

const gamePlaySlice = createSlice({
  name: 'gamePlay',
  initialState,
  reducers: {
    setPlayState: (state, action: PayloadAction<GameTimer>) => {
      state.playState = action.payload;
    },
    setTurn: (state, action: PayloadAction<GameTurnInfoResponse>) => {
      state.turn = action.payload;
    },
  },
  extraReducers: {},
});

export const { setPlayState, setTurn } = gamePlaySlice.actions;

export default gamePlaySlice;
