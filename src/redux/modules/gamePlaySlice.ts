import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameInfoResponse, GameTimer } from '@customTypes/socketType';

interface GamePlayStateType {
  playState?: GameTimer;
  turn?: GameInfoResponse;
}

const initialState: GamePlayStateType = {};

const gamePlaySlice = createSlice({
  name: 'gamePlay',
  initialState,
  reducers: {
    setPlayState: (state, action: PayloadAction<GameTimer>) => {
      state.playState = action.payload;
    },
  },
  extraReducers: {},
});

export const { setPlayState } = gamePlaySlice.actions;

export default gamePlaySlice;
