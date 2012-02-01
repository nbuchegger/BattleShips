var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , clientSocket
  , port = 1234
  , allreadySelectEnemy = false;
  
app.listen(3001);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  fs.readFile(__dirname + '/style.css'),
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

// building socket for communication between server and html
io.sockets.on('connection', function (socket) {
  clientSocket = socket;
    
  // socket for communication between server and html
  socket.on('serverSocket', function (data) {
    console.log(data);
    sendUdpPaketOutside(data);
  });

  // request to selected player
  socket.on('playRequest', function(data, ip) {
    allreadySelectEnemy = true;
    var message = new Buffer(String(data));
    server.send(message, 0, message.length, port, ip, function(err, bytes) {});
  });
});

function sendUdpPaketOutside(data){
  var message = new Buffer(String(data));
  var socketOutside = dgram.createSocket('udp4');
  
  socketOutside.send(message, 0, message.length, port, 'localhost', function(err, bytes) { // 78.104.171.255
    socketOutside.close();
  });
}

// socket for communication outside
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', function (msg, rinfo) {  
  console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
  // if (allreadySelectEnemy) {
    clientSocket.emit('mmtBattleShips', String(msg) + "#" + rinfo.address);
  // } else {
    // clientSocket.emit('mmtBattleShips', String(msg));
  // }
});
server.bind(1234);