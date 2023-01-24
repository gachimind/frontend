import { GameRoomBaseInfo, GameRoomPlayDetailInfo, Participant } from './gameRoomType';

/**
 * emit [log-in]
 */
export interface LoginRequest {
  authorization: string;
}

/**
 * on [room-list]
 */
export interface GameRoomBroadcastResponse extends GameRoomBaseInfo {
  roomId: number;
  participants: number;
  isGameOn: boolean;
}

/**
 * emit [create-room]
 */
export interface CreateRoomRequest extends GameRoomBaseInfo, GameRoomPlayDetailInfo {
  roomPassword?: number;
}

/**
 * on [room-id]
 */
export interface CreateRoomResponse {
  roomId: number;
}

/**
 * emit [enter-room]
 */
export interface EnterRoomRequest {
  roomId: number;
  roomPassword?: number;
}

/**
 * on [update-room]
 */
export interface UpdateRoomResponse extends GameRoomBaseInfo, GameRoomPlayDetailInfo {
  participants: Participant[];
}

export interface EventUserInfo {
  socketId: string;
  userId: number;
  nickname: string;
  profileImg?: string;
}

/**
 * on [error]
 */
export interface ErrorResponse {
  errorMessage: string;
  event: string;
  status: number | string;
}

export interface GameTimer {
  timer: number;
  event: 'startCount' | 'readyTimer' | 'speechTimer' | 'discussionTimer';
}

/**
 * on [game-start]
 */
export interface GameStartResponse extends GameTimer {
  currentTurn: number;
}

/**
 * on [game-end]
 */
export interface GameEndResponse extends GameTimer {
  nextTurn?: number;
  currentTurn?: number;
}

/**
 * on [game-info]
 */
export interface GameInfoResponse {
  currentTurn: number;
  speechPlayer: number;
  keyword: string;
}
