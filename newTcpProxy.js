var net = require('net');
var LOCAL_PORT = 8000;
var LOCAL_IP = '158.42.178.173';
var REMOTE_PORT; //= process.argv[3];
var REMOTE_IP;// = process.argv[2];
var server = net.createServer(function (socket) {
	socket.on('data', function (msg) {
		var serviceSocket = new net.Socket();
		serviceSocket.connect(parseInt(REMOTE_PORT), REMOTE_IP, function (){
			serviceSocket.write(msg);
		});
		serviceSocket.on('data', function (data) {
			socket.write(data);
		});
	});
}).listen(LOCAL_PORT, LOCAL_IP);
console.log("TCP server accepting connection on port: " + LOCAL_PORT);

var server = net.createServer(function (socket) {
	socket.on('data', function (msg) {
		var mesg = msg.toString()		
		var dir = mesg.slice(0,mesg.indexOf(" "));
		var puerto = mesg.slice(mesg.indexOf(" ")+1,mesg.length);
		REMOTE_PORT = puerto;
		REMOTE_IP = dir;
		console.log(dir);
		console.log(puerto);
	});
}).listen(8001, LOCAL_IP);
console.log("TCP server accepting connection on port: " + LOCAL_PORT);

