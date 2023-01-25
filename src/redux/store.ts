import { combineReducers, configureStore } from '@reduxjs/toolkit';

import gamePlaySlice from './modules/gamePlaySlice';
import gameRoomSlice from './modules/gameRoomSlice';
import playerMediaSlice from './modules/playerMediaSlice';
import userMediaSlice from './modules/userMediaSlice';
import userSlice from './modules/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  gameRoom: gameRoomSlice.reducer,
  userMedia: userMediaSlice.reducer,
  playerMedia: playerMediaSlice.reducer,
  gamePlay: gamePlaySlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
