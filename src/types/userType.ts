export interface MyProfileResponse {
  userId: number;
  nickname: string;
  profileImg: string;
  isFirstLogin: boolean;
  today: {
    todayRank: number;
    todayScore: number;
  };
  total: {
    totalScore: number;
  };
}

export interface MyKeywordsResponse {
  userId: number;
  todayQuizKeyword: Array<{ keyword: string; link: string }>;
  todaySpeechKeyword: Array<{ keyword: string; link: string }>;
  totalQuizKeyword: Array<{ keyword: string; link: string }>;
  totalSpeechKeyword: Array<{ keyword: string; link: string }>;
}

// TODO: 현재 로그인한 회원 상태 관리를 위한 타입으로 부가적인 속성들이 필요하다면 추후에 확장하여 사용할 수 있다.
export type MyProfile = MyProfileResponse;
export type MyKeywords = MyKeywordsResponse;
