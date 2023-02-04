const express = require('express');
const jsonServer = require('json-server');
const { validAuthentication } = require('./authenticationHandler');
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/users/me': '/me',
    '/api/users/me/keyword': '/me/keyword',
    '/api/users/logout': '/logout',
    '/api/admin/report': '/report',
  }),
);

// 카카오 소셜 로그인
server.get('/api/users/login/kakao', (req, res) => {
  res.redirect('http://localhost:3000/login?token=token1');
});

// 닉네임 중복검사
server.get(`/api/users/:nickname`, (req, res) => {
  const { nickname } = req.params;
  const isNicknameExists = router.db.__wrapped__.me.some((user) => user.nickname === nickname);
  if (isNicknameExists) {
    return res.status(412).send({ result: false, errorMessage: '이미 사용중인 닉네임입니다.' });
  }
  return res.status(200).send({ result: true, message: '사용가능한 닉네임입니다.' });
});

// 내 프로필 조회
server.get('/me', (req, res) => {
  const authenticatedUserId = validAuthentication(req, res);
  const userData = router.db.__wrapped__.me.find((user) => user.userId == authenticatedUserId);
  const result = {
    data: userData,
  };

  res.jsonp(result);

  if (result.data.isFirstLogin) {
    const newData = router.db.__wrapped__;
    newData.me.map((user) => {
      if (user.userId == authenticatedUserId) {
        user.isFirstLogin = false;
      }
    });

    fs.writeFileSync('./db.json', JSON.stringify(newData));
  }

  return;
});

// 회원 키워드 조회
server.get('/me/keyword', (req, res) => {
  const authenticatedUserId = validAuthentication(req, res);
  const result = {
    data: router.db.__wrapped__.keyword.find((user) => user.userId == authenticatedUserId),
  };
  return res.jsonp(result);
});

server.use(express.json());
// 회원정보 수정
server.patch('/me', (req, res) => {
  const authenticatedUserId = validAuthentication(req, res);
  const isUserExists = router.db.__wrapped__.me.some((user) => user.userId == authenticatedUserId);
  if (!isUserExists) {
    return res.status(401).send({ result: false, errorMessage: '해당 유저를 찾을 수 없습니다.' });
  }
  const result = router.db.__wrapped__;
  result.me.map((user) => {
    if (user.userId == authenticatedUserId) {
      user.nickname = req.body.nickname;
      user.profileImg = req.body.profileImg;
    }
  });

  fs.writeFileSync('./db.json', JSON.stringify(result));

  return res.status(200).send({ result: true, message: '사용자 정보 변경에 성공하였습니다.' });
});

// 로그아웃
server.get('/logout', (req, res) => {
  return res.status(200).send({ result: true, message: '로그아웃 되었습니다.' });
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

module.exports = server;
