// 78.104.171.255

var app = require('http').createServer(handler)
   , io = require('socket.io').listen(app)
  , fs = require('fs')
  , players = []
  , dgram = require('dgram')
  , myPlayername = "Niki"
  , broadcastSent = false
	, lastReceivingPlayer = ""
  , nextCommand = false
  , showInfo = true
  , gotInvitation = false
  , id = 0
  , lastId = 0
  , status = "waiting"
  , stopSendAliveMsg = false
  , timeout = 20000
  , chosenPlayer = ""
  , broadcastAddress = "localhost"//"78.104.171.255";
  , sendPort = "4321"
  , receivePort = "1234";
  
app.listen(3001);
  
 

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

// build up socket for communicating between server and html
io.sockets.on('connection', function (socket) {
    clientSocket = socket;
    
    // socket for communicating between server and html
    socket.on('serverSocket', function (data) {
          console.log(data);
          sendUpdPaketOutside(data);
    });
});
  
  
var dgram = require("dgram");
var server = dgram.createSocket("udp4");

// socket for communicating with outer world
server.on("message", function (msg, rinfo) {  
  console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
  clientSocket.emit('news', String(msg));
});
server.bind(1234);


function sendUpdPaketOutside(data){

  var message = new Buffer(String(data));
  var socketOutside = dgram.createSocket("udp4");
  
  socketOutside.send(message, 0, message.length, 1234, "78.104.171.255", function(err, bytes) {
    socketOutside.close();
  });
  
}

