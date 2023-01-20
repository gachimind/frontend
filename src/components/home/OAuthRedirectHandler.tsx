const OAuthRedirectHandler = () => {
  const token = new URL(window.location.href).searchParams.get('token');
  token && sessionStorage.setItem('accessToken', token.split(' ')[1]);
  window.location.replace('/');
  return <></>;
};

export default OAuthRedirectHandler;
