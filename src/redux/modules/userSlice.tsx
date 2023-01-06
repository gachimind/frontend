import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '@apis/userApi';

const initialState = {
  user: null,
};

export const __getUserInfo = createAsyncThunk('getUserInfo', async () => {
  try {
    const userInfo = await userApi.getUserInfo();
    return userInfo;
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice;
