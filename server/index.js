const jsonServer = require('json-server');
const { validAuthentication } = require('./authenticationHandler');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/users/me': '/me',
    '/api/users/me/keyword': '/me/keyword',
  }),
);

// 카카오 소셜 로그인
server.get('/api/users/login/kakao', (req, res) => {
  res.redirect('http://localhost:3000/login?token=token1');
});

// 구글 소셜 로그인
server.get('/api/users/login/google', (req, res) => {
  res.redirect('http://localhost:3000/login?token=token2');
});

// 깃헙 소셜 로그인
server.get('/api/users/login/github', (req, res) => {
  res.redirect('http://localhost:3000/login?token=token3');
});

// 내 프로필 조회
server.get('/me', (req, res) => {
  const authenticatedUserId = validAuthentication(req, res);
  const result = {
    data: router.db.__wrapped__.me.find((user) => user.userId == authenticatedUserId),
  };
  return res.jsonp(result);
});

// 회원 키워드 조회
server.get('/me/keyword', (req, res) => {
  const authenticatedUserId = validAuthentication(req, res);
  const result = {
    data: router.db.__wrapped__.keyword.find((user) => user.userId == authenticatedUserId),
  };
  console.log(result);
  return res.jsonp(result);
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

module.exports = server;
