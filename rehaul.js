(function () {
	'use strict';

	const process = document.getElementById('process');
	const processToggle = document.getElementById('processToggle');
	const processDrop = document.getElementById('processDrop');
	const design = document.getElementById('design');
	const designToggle = document.getElementById('designToggle');
	const designDrop = document.getElementById('designDrop');
	const info = document.getElementById('info');
	const infoToggle = document.getElementById('infoToggle');
	const infoDrop = document.getElementById('infoDrop');
	const processFooter = document.getElementById('processFoot');
	const designFooter = document.getElementById('designFoot');
	const infoFooter = document.getElementById('infoFoot');

	const svg = document.querySelectorAll('svg');
	for (let i = 0; i < svg.length; i++) {
		svg[i].addEventListener('click', function () {
			this.style.transform = 'rotateY(-180deg)';
		});
	}

	processToggle.addEventListener('click', function () {
		if (process.className == 'closed') {
			process.className = 'open';
			processDrop.style.display = 'flex';
			design.style.display = `none`;
			info.style.display = `none`;
			design.style.opacity = `0`;
			info.style.opacity = `0`;
			setTimeout(function () {
				document.getElementById('processArrow').style.transform = 'rotate(90deg)';
				processDrop.style.opacity = '100';
				processDrop.style.transform = `translateY(${processToggle.offsetHeight}px)`;
			}, 10);
			// calibrate();
		} else if (process.className == 'open') {
			process.className = 'closed';
			document.getElementById('processArrow').style.transform = 'rotate(45deg)';
			processDrop.style.opacity = '0';
			processDrop.style.transform = 'translateY(0px)';
			design.style.display = `initial`;
			info.style.display = `initial`;

			setTimeout(function () {
				processDrop.style.display = 'none';
				design.style.opacity = `100`;
				info.style.opacity = `100`;
			}, 500);
		}
	});

	designToggle.addEventListener('click', function () {
		if (design.className == 'closed') {
			design.className = 'open';
			designDrop.style.display = 'flex';
			// calibrate();
			process.style.display = 'none';
			info.style.display = `none`;
			process.style.opacity = `0`;
			info.style.opacity = `0`;
			setTimeout(function () {
				document.getElementById('designArrow').style.transform = 'rotate(-90deg)';
				designDrop.style.opacity = '100';
				designDrop.style.transform = `translateY(${designToggle.offsetHeight}px)`;
			}, 10);
		} else if (design.className == 'open') {
			design.className = 'closed';
			document.getElementById('designArrow').style.transform = 'rotate(-45deg)';
			designDrop.style.opacity = '0';
			designDrop.style.transform = 'translateY(0px)';
			process.style.display = `initial`;
			info.style.display = `initial`;

			setTimeout(function () {
				designDrop.style.display = 'none';
				process.style.opacity = `100`;
				info.style.opacity = `100`;
			}, 500);
		}
	});

	infoToggle.addEventListener('click', function () {
		if (info.className == 'closed') {
			info.className = 'open';
			infoDrop.style.display = 'flex';
			// calibrate();
			process.style.display = 'none';
			design.style.display = `none`;
			process.style.opacity = `0`;
			design.style.opacity = `0`;
			setTimeout(function () {
				document.getElementById('infoArrow').style.transform = 'rotate(90deg)';
				infoDrop.style.opacity = '100';
				infoDrop.style.transform = `translateY(${infoToggle.offsetHeight}px)`;
			}, 10);
		} else if (info.className == 'open') {
			info.className = 'closed';
			document.getElementById('infoArrow').style.transform = 'rotate(45deg)';
			infoDrop.style.opacity = '0';
			infoDrop.style.transform = 'translateY(0px)';

			setTimeout(function () {
				infoDrop.style.display = 'none';
				process.style.display = `initial`;
				design.style.display = `initial`;
			}, 500);
			setTimeout(function () {
				process.style.opacity = `100`;
				design.style.opacity = `100`;
			}, 600);
		}
	});

	processFooter.addEventListener('click', function () {
		process.className = 'closed';
		document.getElementById('processArrow').style.transform = 'rotate(45deg)';
		processDrop.style.opacity = '0';
		processDrop.style.transform = 'translateY(0px)';
		design.style.display = `initial`;
		info.style.display = `initial`;
		// design.style.transform = `translateY(0px)`;
		// info.style.transform = `translateY(0px)`;
		design.style.display = `initial`;
		info.style.display = `initial`;
		setTimeout(function () {
			processDrop.style.display = 'none';
			design.style.opacity = `100`;
			info.style.opacity = `100`;
		}, 500);
	});
	designFooter.addEventListener('click', function () {
		design.className = 'closed';
		document.getElementById('designArrow').style.transform = 'rotate(-45deg)';
		designDrop.style.opacity = '0';
		designDrop.style.transform = 'translateY(0px)';
		process.style.display = `initial`;
		info.style.display = `initial`;

		setTimeout(function () {
			designDrop.style.display = 'none';
			process.style.opacity = `100`;
			info.style.opacity = `100`;
		}, 500);
	});
	infoFooter.addEventListener('click', function () {
		info.className = 'closed';
		document.getElementById('infoArrow').style.transform = 'rotate(45deg)';
		infoDrop.style.opacity = '0';
		infoDrop.style.transform = 'translateY(0px)';

		setTimeout(function () {
			infoDrop.style.display = 'none';
			process.style.display = `initial`;
			design.style.display = `initial`;
		}, 500);
		setTimeout(function () {
			process.style.opacity = `100`;
			design.style.opacity = `100`;
		}, 600);
	});
})();