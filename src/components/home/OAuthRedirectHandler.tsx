const OAuthRedirectHandler = () => {
  const token = new URL(window.location.href).searchParams.get('token');
  token && sessionStorage.setItem('accessToken', token);
  window.location.replace('/');
  return <></>;
};

export default OAuthRedirectHandler;
