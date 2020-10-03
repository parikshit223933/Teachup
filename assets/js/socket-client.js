// (function start() {
// 	let socket = io.connect('http://127.0.0.1:8000');

// 	socket.on('connect', function () {
// 		console.log('Connection established using Sockets!');
// 	});

// 	const webcamElement = document.getElementById('webcam');
// 	const canvasElement = document.getElementById('canvas');
// 	const snapSoundElement = document.getElementById('snapSound');
// 	const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

// 	webcam
// 		.start()
// 		.then((result) => {
// 			console.log('webcam started');
// 			setInterval(function () {
// 				let image = webcam.snap();
// 				socket.emit('send_stream', {
// 					image,
// 				});
// 			}, 250);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});

// 	socket.on('recieve_stream', function (data) {
// 		const image = document.getElementById('#streamed-output');
// 		image.src = data.data.image;
// 	});
// })();
