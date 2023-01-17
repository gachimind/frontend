export const getParam = (key: string) => {
  const params = new URLSearchParams(location.search);
  return params.get(key) ?? '';
};
