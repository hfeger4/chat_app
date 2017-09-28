const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

// const chatServer = require('./lib/chatServer');
// chatServer.listen(http);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
