import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WebRTCUser {
  socketId: string;
  userId: number;
  nickname: string;
  audio?: boolean;
  video?: boolean;
  profileImg?: string;
}

export interface playerMediaStateType {
  playerStreamMap: { [socketId: string]: MediaStream };
  playerPeerMap: { [socketId: string]: RTCPeerConnection };
  playerList: WebRTCUser[];
}

const initialState: playerMediaStateType = {
  playerStreamMap: {},
  playerPeerMap: {},
  playerList: [],
};

const playerMediaSlice = createSlice({
  name: 'playerMedia',
  initialState,
  reducers: {
    addPlayerStream: (state, action: PayloadAction<{ socketId: string; stream: MediaStream }>) => {
      const { socketId, stream } = action.payload;
      state.playerStreamMap = {
        ...state.playerStreamMap,
        ...{
          [socketId]: stream,
        },
      };
    },
    addPlayerPeer: (state, action: PayloadAction<{ socketId: string; peer: RTCPeerConnection }>) => {
      const { socketId, peer } = action.payload;
      state.playerPeerMap = {
        ...state.playerPeerMap,
        ...{
          [socketId]: peer,
        },
      };
    },
    setPlayerList: (state, action: PayloadAction<WebRTCUser[]>) => {
      state.playerList = action.payload;
    },
    removePlayerStreamById: (state, action: PayloadAction<string>) => {
      delete state.playerPeerMap[action.payload];
      delete state.playerStreamMap[action.payload];
    },
    clearPlayerStream: (state) => {
      state.playerPeerMap = {};
      state.playerStreamMap = {};
      state.playerList = [];
    },
  },
});

export const { addPlayerStream, addPlayerPeer, setPlayerList, removePlayerStreamById, clearPlayerStream } =
  playerMediaSlice.actions;

export default playerMediaSlice;
