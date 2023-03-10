export const getParam = (key: string) => {
  const params = new URLSearchParams(location.search);
  return params.get(key) ?? '';
};

export const convertLeaveCounterFormat = (counter: number, hasMinute?: boolean) => {
  const second = ((counter % 60000) / 1000).toString().padStart(2, '0');
  return hasMinute ? `0${Math.floor(counter / 60000)}:` + second : second;
};

export const filterKeyword = (keyword: string) => {
  return keyword.replace(/[가-힣a-zA-Z0-9]/gi, '🐟');
};

export const findKoreanLength = (text: string) => {
  if (!text || text.length === 0) {
    return 0;
  }
  return text.length - text.replace(/[가-힣]/gi, '').length;
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
