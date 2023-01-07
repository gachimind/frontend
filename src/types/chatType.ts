export interface ChatBaseType {
  message: string;
}

export interface Chat extends ChatBaseType {
  nickname: string;
  type: 'chat' | 'noti';
}
