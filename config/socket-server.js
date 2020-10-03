class socketServer {
	io;

	constructor(socketServer) {
		this.io = require('socket.io')(socketServer);
		this.start();
	}
	// |
	// |
	// |
	// |
	// V
	start = () => {
		this.io.sockets.on('connection', function (socket) {
			console.log('New connection made with socket id =', socket.id);

			socket.on('send_stream', function (data) {
				socket.emit('recieve_stream', {
					data
				});
			});

			socket.on('disconnect', function () {
				console.log('Socket Disconnected!');
			});
		});
	};
}

module.exports = socketServer;
