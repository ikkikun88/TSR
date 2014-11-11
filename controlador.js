var net = require('net');


var client = net.connect({port: 8000, host:process.argv[2]},
    function() { //'connect' listener
	proxyConfig(process.argv[3], process.argv[4], process.argv[5]);
	console.log('client connected');
});

function proxyConfig(puertoProxy, ipRemota, puertoRemoto){
	var msg= puertoProxy + " " + ipRemota + ":" + puertoRemoto;
	client.write(msg);
	client.end();
	}

client.on('end', function() {
  console.log('controlador desconectado');
});
