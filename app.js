var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(5000);


io.on('connection', function (socket) {
  console.log('Alguien se conectó');

  socket.on('taskCreated', function(data){
    console.log('>>>>arguments<<<<');
    console.log(arguments); //arguments existe en javascript
    io.sockets.emit('taskCreated', data);
  }.bind(this));
  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});
