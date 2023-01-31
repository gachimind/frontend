const jsonServer = require('json-server');
const { validAuthentication } = require('./authenticationHandler');
const url = require('url');

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

// 닉네임 중복검사
server.get('/api/users/nickname', (req, res) => {
  const { nickname } = url.parse(req.url, true).query;
  const isNicknameExists = router.db.__wrapped__.me.some((user) => user.nickname === nickname);
  if (isNicknameExists) {
    return res.status(400).send({ result: false, errorMessage: '이미 사용중인 닉네임입니다.' });
  }
  return res.status(200).send({ result: true, message: '사용가능한 닉네임입니다.' });
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
  return res.jsonp(result);
});

// 로그아웃
server.get('/api/users/logout', (req, res) => {
  return res.status(200).send({ result: true, message: '로그아웃 되었습니다.' });
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

module.exports = server;
