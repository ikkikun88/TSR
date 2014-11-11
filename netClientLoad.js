var net = require('net');

// We assume that the server is in our
// same machine.
var client = net.connect({port: 8000, host:process.argv[3]},
    function() { //'connect' listener
	netClientLoad(process.argv[2]);
	console.log('client connected');
  // This is sent to the server.
  //client.write();
});

function netClientLoad(ip){
	client.write(ip);
	}

client.on('data', function(data) {
  // Write the received data on stdout.
  console.log(data.toString());
  // Close connection.
  client.end();
});

client.on('end', function() {
  console.log('client disconnected');
});
