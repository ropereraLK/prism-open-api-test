Check whether node, npm installed
node -v
npm -v

Install dependencies
npm install

Start login API server
npm start

You can now send a POST request to
http://127.0.0.1:4011/api/login

Behavior:
- if body is:
  { "username": "alan", "password": "alain" } -> 200
- any other username/password -> 401