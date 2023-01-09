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
  roomPassword?: string;
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
  roomPassword?: string;
}

/**
 * on [update-room]
 */
export interface UpdateRoomResponse extends GameRoomBaseInfo, GameRoomPlayDetailInfo {
  participants: Participant[];
}
