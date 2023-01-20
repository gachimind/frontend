export const PUBLISH = Object.freeze({
  login: 'log-in', // 토큰을 넘겨주어 연결된 소켓에 대한 사용자가 누구인지 서버에 인식시킨다.
  createGame: 'create-room', // 방 생성 요청을 발행한다.
  joinGame: 'enter-room', // 방 입장 요청을 발행한다.
  leaveGame: 'leave-room', // 방 나가기 요청을 발행한다.
  sendChat: 'send-chat', // 채팅 보내기 요청을 발행한다.
  startGame: 'start',
  readyGame: 'ready',
  validRoomPassword: 'valid-room-password',

  // webRTC
  webRTCIce: 'webrtc-ice',
  webRTCOffer: 'webrtc-offer',
  webRTCAnswer: 'webrtc-answer',
  webRTCLeave: 'webrtc-leave',
  updateUserStream: 'update-userstream',
});

export const SUBSCRIBE = Object.freeze({
  showCreatedRoomIdForOwner: 'create-room', // 유저의 게임 생성 요청으로 생성된 아이디 정보를 알려준다.
  showRoomListForFirstUser: 'room-list', // 처음 홈페이지에 들어와 소켓에 연결된 유저들에게 방 목록 정보가 알려진다.
  broadcastRenewedRoomForHomeUsers: 'update-room-list', // 방 생성/삭제, 방의 유저 변동에 대한 정보 업데이트가 홈페이지의 모든 유저들에게 알려진다.
  announceRenewedRoomForRoomMembers: 'update-room', // 방에 새로 들어온 유저, 나간 유저 등을 반영해 업데이트 된 룸 데이터를 얻어와 해당 방의 유저들에게 알려준다.
  receiveChat: 'receive-chat', // 유저의 방에서 발생된 채팅을 응답한다.
  login: 'log-in', // 로그인 성공 응답 메시지
  joinGame: 'enter-room', // 방 입장 시도에 대한 서버의 응답을 받는다.
  validRoomPassword: 'valid-room-password',

  // webRTC
  webRTCIce: 'webrtc-ice',
  webRTCOffer: 'webrtc-offer',
  webRTCAnswer: 'webrtc-answer',
  webRTCLeave: 'webrtc-leave',
  updateUserStream: 'update-userstream',
});
