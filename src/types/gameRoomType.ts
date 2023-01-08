export interface GameRoomBaseType {
  roomTitle: string;
  maxCount: number;
  isSecretRoom: boolean;
}

export interface GameRoomCreateRequest extends GameRoomBaseType {
  round: number;
  readyTime: number;
  speechTime: number;
  discussionTime: number;
  roomPassword?: string;
}

export interface GameRoomDetail extends GameRoomBaseType {
  roomId: string;
  participants: Participant[];
}

export interface Participant {
  userId: number;
  nickname: string;
  isHost: boolean;
  socketId: string;
}
