export const getParam = (key: string) => {
  const params = new URLSearchParams(location.search);
  return params.get(key) ?? '';
};

export const convertLeaveCounterFormat = (counter: number, hasMinute?: boolean) => {
  const second = ((counter % 60000) / 1000).toString().padStart(2, '0');
  return hasMinute ? `0${Math.floor(counter / 60000)}:` + second : second;
};

// XXX: 각 단어 하나하나가 영문/한글/숫자 여부도 알려줘야할까?
export const filterKeyword = (keyword: string) => {
  return keyword.replace(/[가-힣a-zA-Z]/gi, 'O');
};
