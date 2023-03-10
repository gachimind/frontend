import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GameTimer, GameTurnInfoResponse } from '@customTypes/socketType';

interface GamePlayStateType {
  playState?: GameTimer;
  turn?: GameTurnInfoResponse;
  isTurnEvaluated?: boolean;
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
    clearAllGamePlayState: (state) => {
      state.playState = undefined;
      state.turn = undefined;
    },
    setEvaluated: (state, action: PayloadAction<boolean>) => {
      state.isTurnEvaluated = action.payload;
    },
    setAnswered: (state) => {
      if (state.turn) {
        state.turn = { ...state.turn, answered: true };
      }
    },
  },
  extraReducers: {},
});

export const { setPlayState, setTurn, clearAllGamePlayState, setEvaluated, setAnswered } = gamePlaySlice.actions;

export default gamePlaySlice;
