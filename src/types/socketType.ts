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
