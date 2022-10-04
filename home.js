(function () {
	'use strict';

	const svg = document.querySelectorAll('svg');
	for (let i = 0; i < svg.length; i++) {
		svg[i].addEventListener('click', function () {
			this.style.transform = 'rotateY(-180deg)';
			setTimeout(() => {
				this.style.transform = 'rotateY(0deg)';
			}, '700');
		});
	}
})();
