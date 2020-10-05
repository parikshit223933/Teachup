(function add_interactivity_to_navs() {
	// TO CLOSE THE NAVBAR
	$('#close-nav').on('click', function () {
		$('#navbar').toggleClass('show-navbar');
		if ($('#navbar-messages').hasClass('show-navbar')) {
			$('#screen').css('justify-content', 'flex-start');
		} else {
			$('#screen').css('justify-content', 'center');
		}
	});
	// TO OPEN THE NAVBAR
	$('#open-nav').on('click', function () {
		$('#navbar').toggleClass('show-navbar');
		if ($('#navbar-messages').hasClass('show-navbar')) {
			$('#screen').css('justify-content', 'center');
		} else {
			$('#screen').css('justify-content', 'flex-end');
		}
	});

	// TO CLOSE THE MESSAGES NAVBAR
	$('#close-messages').on('click', function () {
		$('#navbar-messages').toggleClass('show-navbar');
		if ($('#navbar').hasClass('show-navbar')) {
			$('#screen').css('justify-content', 'flex-end');
		} else {
			$('#screen').css('justify-content', 'center');
		}
	});
	// TO OPEN THE MESSAGES NAVBAR
	$('#open-messages').on('click', function () {
		$('#navbar-messages').toggleClass('show-navbar');
		if ($('#navbar').hasClass('show-navbar')) {
			$('#screen').css('justify-content', 'center');
		} else {
			$('#screen').css('justify-content', 'flex-start');
		}
	});
})();
