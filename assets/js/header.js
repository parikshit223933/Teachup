document.addEventListener('scroll', () => {
	document.documentElement.getBoundingClientRect().top <= -10
		? $('.navbar').css('box-shadow', '0px 0px 5px 2px rgb(226, 226, 226)')
		: $('.navbar').css('box-shadow', 'none');
});
