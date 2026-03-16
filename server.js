const express = require('express');

const app = express();
const port = 4011;

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};

  console.log('Incoming /api/login request body:', req.body);
  console.log(
    'Parsed values:',
    'username =', username, `(${typeof username})`,
    'password =', password, `(${typeof password})`
  );

  const normalizedUsername =
    typeof username === 'string' ? username.trim() : username;
  const normalizedPassword =
    typeof password === 'string' ? password.trim() : password;

  // Success only when username = 'alan' and password = 'alain'
  if (normalizedUsername === 'alan' && normalizedPassword === 'alain') {
    console.log('Credentials valid (alan/alain), returning 200');
    return res.status(200).json({
      accessToken: 'jwt-token-example',
      tokenType: 'Bearer',
      expiresIn: 3600,
    });
  }

  console.log('Credentials invalid, returning 401');
  return res.status(401).json({
    error: 'INVALID_CREDENTIALS',
    message: 'Username or password is incorrect',
  });
});

app.listen(port, () => {
  console.log(`Auth API listening at http://127.0.0.1:${port}`);
});

