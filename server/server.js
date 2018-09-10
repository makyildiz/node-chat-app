const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newEmail', {
  //   from: 'mesut@g.com',
  //   text: 'How r u?',
  //   createdAt: 4234
  // });

  // socket.on('createEmail', (email) => {
  //   console.log('createEmail: ', email);
  // });
  // 
  // socket.emit('newMessage', {
  //   from: 'Mesut',
  //   text: 'this is good',
  //   createdAt: 234
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage: ', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });

});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
