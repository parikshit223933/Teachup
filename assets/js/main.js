$('#screen').on('mousemove', () => {
	console.log('hola');
	$('#bottom-controls').addClass('show-bottom-controls');
});
$('#screen').on('mouseleave', () => {
	$('#bottom-controls').removeClass('show-bottom-controls');
});
