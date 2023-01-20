const validAuthentication = (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ errorMessage: '회원 인증에 실패했습니다.' });
  }
  return authorization.split(' ')[1][5];
};

module.exports = {
  validAuthentication,
};
