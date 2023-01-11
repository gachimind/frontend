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
}

export interface Participant {
  userId: number;
  nickname: string;
  profileImg: string;
  isReady: boolean;
}
