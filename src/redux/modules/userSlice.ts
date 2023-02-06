import { createSlice } from '@reduxjs/toolkit';

import { MyKeywords, MyProfile } from '@customTypes/userType';

interface InitialUserStateType {
  user: MyProfile | null;
  isLogined: boolean;
  keywords: MyKeywords | null;
}

const initialState: InitialUserStateType = {
  user: null,
  isLogined: false,
  keywords: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogined = false;
      state.user = null;
      sessionStorage.clear();
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice;
