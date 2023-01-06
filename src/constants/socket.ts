//TODO: webRTC 통신 관련 규칙을 추가하여야 한다.

export const PUBLISH = Object.freeze({
  login: 'log-in', // 토큰을 넘겨주어 연결된 소켓에 대한 사용자가 누구인지 서버에 인식시킨다.
  createGame: 'create-room', // 방 생성 요청을 발행한다.
  joinGame: 'enter-room', // 방 입장 요청을 발행한다.
  leaveGame: 'leave-room', // 방 나가기 요청을 발행한다.
  sendChat: 'send-chat', // 채팅 보내기 요청을 발행한다.
});

export const SUBSCRIBE = Object.freeze({
  //   welcomeUserEnteredRoom: 'welcome', // room-update 가 있다면 필요없다.
  showRoomDetailForGameCreator: 'room-detail', // 유저의 게임 생성 요청 시 제공되는 상세 룸 정보.(id와 소켓 통신 참여자 목록을 반드시 포함한다.)
  showRoomListForFirstUser: 'room-list', // 처음 홈페이지에 들어와 소켓에 연결된 유저들에게 방 목록 정보가 알려진다.
  broadcastRenewedRoomForHomeUsers: 'rooms-refresh', // 방 생성/삭제, 방의 유저 변동에 대한 정보 업데이트가 홈페이지의 모든 유저들에게 알려진다.
  announceRenewedRoomForRoomMembers: 'room-update', // 유저의 방에 새로 들어온 유저, 나간 유저가 있음을 알려준다.
  receiveChat: 'receive-chat', // 유저의 방에서 발생된 채팅을 응답한다.
});
