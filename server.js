const express = require('express');

const app = express();
const port = 4010;

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};

  if (username === 'alan' && password === 'alan') {
    return res.status(200).json({
      accessToken: 'jwt-token-example',
      tokenType: 'Bearer',
      expiresIn: 3600,
    });
  }

  return res.status(401).json({
    error: 'INVALID_CREDENTIALS',
    message: 'Username or password is incorrect',
  });
});

app.listen(port, () => {
  console.log(`Auth API listening at http://127.0.0.1:${port}`);
});

