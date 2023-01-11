import { combineReducers, configureStore } from '@reduxjs/toolkit';

import gameRoomSlice from './modules/gameRoomSlice';
import userMediaSlice from './modules/userMediaSlice';
import userSlice from './modules/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  gameRoom: gameRoomSlice.reducer,
  userMedia: userMediaSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
