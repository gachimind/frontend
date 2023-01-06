import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '@apis/userApi';

export type UserInfo = {
  userId: 'number';
  nickname: 'string';
  profileImg: 'string';
  OAth: 'string';
};

const initialState = {
  user: null,
};

export const __getUserInfo = createAsyncThunk('getUserInfo', async () => {
  try {
    const userInfo = await userApi.getUserInfo();
    return userInfo;
  } catch (e) {
    return e;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice;
