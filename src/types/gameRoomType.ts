export interface GameRoomBaseInfo {
  roomTitle: string;
  maxCount: number;
  isSecretRoom: boolean;
}

export interface GameRoomPlayDetailInfo {
  readyTime: number;
  speechTime: number;
  discussionTime: number;
  round: number;
}

export interface GameRoomDetail extends GameRoomBaseInfo, GameRoomPlayDetailInfo {
  roomId: number;
  isGameOn: boolean;
  participants: Participant[];
  isGameReadyToStart?: boolean;
}

export interface Participant {
  userId: number;
  nickname: string;
  profileImg: string;
  isReady: boolean;
  socketId: string;
  audio?: boolean;
  video?: boolean;
  isHost?: boolean;
}

export interface ChatBaseType {
  message: string;
}

export interface Chat extends ChatBaseType {
  userId: number;
  socketId: string;
  nickname: string;
  type: 'chat' | 'notification' | 'answer' | 'warning';
}
