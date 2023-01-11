import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConstraintsType {
  video: boolean;
  audio: any;
}

export interface UserMediaStateType {
  userStream: MediaStream;
  userStreamRef?: React.MutableRefObject<MediaStream | undefined>;
  userCam: boolean;
  userMic: boolean;
  localDevice: ConstraintsType;
}

const initialState: UserMediaStateType = {
  userStream: new MediaStream(),
  userCam: false,
  userMic: false,
  localDevice: {
    video: false,
    audio: false,
  },
};

const userMediaSlice = createSlice({
  name: 'userMedia',
  initialState,
  reducers: {
    setUserStream: (state, action: PayloadAction<MediaStream>) => {
      state.userStream = action.payload;
    },
    setUserStreamRef: (state, action: PayloadAction<React.MutableRefObject<MediaStream | undefined>>) => {
      state.userStreamRef = action.payload;
    },
    setUserCam: (state, action: PayloadAction<boolean>) => {
      state.userCam = action.payload;
    },
    setUserMic: (state, action: PayloadAction<boolean>) => {
      state.userMic = action.payload;
    },
    setLocalDeviceVideo: (state, action: PayloadAction<boolean>) => {
      state.localDevice = { ...state.localDevice, video: action.payload };
    },
    setLocalDeviceAudio: (state, action: PayloadAction<boolean>) => {
      state.localDevice = { ...state.localDevice, audio: action.payload };
    },
  },
});

export const { setUserStream, setUserStreamRef, setUserCam, setUserMic, setLocalDeviceVideo, setLocalDeviceAudio } =
  userMediaSlice.actions;

export default userMediaSlice;
