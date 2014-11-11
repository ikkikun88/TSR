var net = require('net');


var client = net.connect({port: 8001, host:process.argv[2]},
    function() { //'connect' listener
	proxyConfig(process.argv[3], process.argv[4]);
	console.log('client connected');
	
  // This is sent to the server.
  //client.write();
});

function proxyConfig(ip, puerto){
	var msg= ip +" "+ puerto;
	client.write(msg);
	client.end();
	}

/*client.on('data', function(data) {
  // Write the received data on stdout.
  console.log(data.toString());
  // Close connection.
  client.end();
});
*/
client.on('end', function() {
  console.log('client disconnected');
});
