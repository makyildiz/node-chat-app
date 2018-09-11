var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: 'baha@e.com',
  //   text: 'this from client side'
  // });

  // socket.emit('createMessage', {
  //   to: 'World',
  //   text: 'Peace for all'
  // })
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function(message) {
  console.log('New message:', message);
})
