import { createSlice } from '@reduxjs/toolkit';

interface NotificationStateType {
  isMainNotificationShown?: boolean;
  isSpecialNotificationShown?: boolean;
}

const initialState: NotificationStateType = {};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMainNotificationShown: (state) => {
      state.isMainNotificationShown = true;
    },
    setSpecialNotificationShown: (state) => {
      state.isSpecialNotificationShown = true;
    },
  },
  extraReducers: {},
});

export const { setMainNotificationShown, setSpecialNotificationShown } = notificationSlice.actions;

export default notificationSlice;
