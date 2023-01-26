import userApi from '@apis/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { MyProfile } from '@customTypes/userType';

interface InitialUserStateType {
  user: MyProfile | null;
  isLogined: boolean;
}

const initialState: InitialUserStateType = {
  user: null,
  isLogined: false,
};

// FIXME: 실제 서버 연결 시 response 구조분해할당 하지 않기
export const __getUserInfo = createAsyncThunk('getUserInfo', async (_, thunkAPI) => {
  try {
    const { OAuth, nickname, profileImg, userId } = await userApi.getUserInfo();
    return thunkAPI.fulfillWithValue({ OAuth, nickname, profileImg, userId });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(__getUserInfo.fulfilled, (state, action) => {
      state.isLogined = true;
      state.user = action.payload;
      sessionStorage.setItem('nickname', action.payload.nickname);
    });
    builder.addCase(__getUserInfo.rejected, (state) => {
      state.isLogined = false;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice;
