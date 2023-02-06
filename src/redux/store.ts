import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

import gamePlaySlice from './modules/gamePlaySlice';
import gameRoomSlice from './modules/gameRoomSlice';
import playerMediaSlice from './modules/playerMediaSlice';
import userMediaSlice from './modules/userMediaSlice';
import userSlice from './modules/userSlice';
import { coreApi } from './query/coreApi';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  gameRoom: gameRoomSlice.reducer,
  userMedia: userMediaSlice.reducer,
  playerMedia: playerMediaSlice.reducer,
  gamePlay: gamePlaySlice.reducer,
  [coreApi.reducerPath]: coreApi.reducer,
});

const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (sessionStorage.getItem('accessToken') && action.payload.status === 401) {
      sessionStorage.clear();
      window.location.assign('/');
    }
  }

  return next(action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(coreApi.middleware).concat(rtkQueryErrorLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
