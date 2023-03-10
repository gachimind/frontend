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
  isMediaLoading: boolean;
  isMediaSuccess: boolean;
  isEffectSoundOn?: boolean;
  isBackgroundSoundOn?: boolean;
}

const initialState: UserMediaStateType = {
  userStream: new MediaStream(),
  userCam: false,
  userMic: false,
  localDevice: {
    video: false,
    audio: false,
  },
  isMediaLoading: false,
  isMediaSuccess: false,
  isBackgroundSoundOn: localStorage.getItem('background') === 'false' ? false : undefined,
  isEffectSoundOn: localStorage.getItem('effect') === 'false' ? false : undefined,
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
    setMediaLoading: (state) => {
      state.isMediaLoading = true;
    },
    setMediaDone: (state) => {
      state.isMediaLoading = false;
      state.isMediaSuccess = true;
    },
    initMediaStatus: (state) => {
      state.isMediaLoading = false;
      state.isMediaSuccess = false;
    },
    clearMedia: (state) => {
      state.userCam = false;
      state.userMic = false;
      state.localDevice = {
        video: false,
        audio: false,
      };
      state.isMediaLoading = false;
      state.isMediaSuccess = false;
      state.userStreamRef = undefined;
      state.userStream = new MediaStream();
    },
    setEffectSoundState: (state) => {
      localStorage.setItem('effect', !state.isEffectSoundOn + '');
      state.isEffectSoundOn = !state.isEffectSoundOn;
    },
    setBackgroundSoundState: (state) => {
      localStorage.setItem('background', !state.isBackgroundSoundOn + '');
      state.isBackgroundSoundOn = !state.isBackgroundSoundOn;
    },
  },
});

export const {
  setUserStream,
  setUserStreamRef,
  setUserCam,
  setUserMic,
  setLocalDeviceVideo,
  setLocalDeviceAudio,
  setMediaLoading,
  setMediaDone,
  initMediaStatus,
  clearMedia,
  setEffectSoundState,
  setBackgroundSoundState,
} = userMediaSlice.actions;

export default userMediaSlice;
