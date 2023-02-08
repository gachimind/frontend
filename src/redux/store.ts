import { abort } from 'process';

import { combineReducers, configureStore, isPending } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

import gamePlaySlice from './modules/gamePlaySlice';
import gameRoomSlice from './modules/gameRoomSlice';
import playerMediaSlice from './modules/playerMediaSlice';
import userMediaSlice from './modules/userMediaSlice';
import { coreApi } from './query/coreApi';

const rootReducer = combineReducers({
  gameRoom: gameRoomSlice.reducer,
  userMedia: userMediaSlice.reducer,
  playerMedia: playerMediaSlice.reducer,
  gamePlay: gamePlaySlice.reducer,
  [coreApi.reducerPath]: coreApi.reducer,
});

const rtkQueryPromiseInterceptor: Middleware = () => (next) => (action) => {
  const token = sessionStorage.getItem('accessToken');
  if (isPending(action)) {
    if (!token) {
      abort();
    }
  }

  if (isRejectedWithValue(action)) {
    if ((token && action.payload.status === 401) || action.payload.status === 500) {
      sessionStorage.clear();
      window.location.assign('/');
    }
  }

  return next(action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(coreApi.middleware).concat(rtkQueryPromiseInterceptor),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
