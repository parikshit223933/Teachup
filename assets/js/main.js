// JITSI MEET CODE
api = new JitsiMeetExternalAPI('meet.jit.si', {
	roomName: 'custom_room',
	width: '100%',
	height: '100%',
	parentNode: document.getElementById('streaming'),
	noSSL: false,
	userInfo: {
		email: 'email@jitsiexamplemail.com',
		displayName: 'John Doe',
	},
	interfaceConfigOverwrite: INTERFACE_CONFIG_OVERWRITE,
});
