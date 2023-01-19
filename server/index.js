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
  }),
);

// 내 프로필 조회
server.get('/me', (req, res) => {
  const authenticatedUserId = validAuthentication(req, res);
  return res.jsonp(router.db.__wrapped__.me.find((user) => user.userId == authenticatedUserId));
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

module.exports = server;
