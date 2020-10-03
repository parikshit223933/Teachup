class socketServer {
	io;
	constructor(socketServer) {
		this.io = require('socket.io')(socketServer);
		this.socket();
	}
	socket = async () => {
		this.io.sockets.on('connection', function (socket) {
			console.log('New Connection Made!', socket.id);

			socket.on('disconnect', function () {
				console.log('Socket Disconnected!');
			});
		});
	};
}

module.exports = socketServer;
