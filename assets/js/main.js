$('#screen').on('mousemove', () => {
	$('#bottom-controls').addClass('show-bottom-controls');
});
$('#screen').on('mouseleave', () => {
	$('#bottom-controls').removeClass('show-bottom-controls');
});
