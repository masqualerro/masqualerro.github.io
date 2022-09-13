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

	const svg = document.querySelectorAll('svg');
	for (let i = 0; i < svg.length; i++) {
		svg[i].addEventListener('click', function () {
			this.style.transform = 'rotateY(-180deg)';
		});
	}
	console.log(svg);

	function calibrate() {
		if (process.className == 'open' && design.className == 'closed') {
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight}px)`;
		} else if (process.className == 'open' && design.className == 'open') {
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight + designDrop.offsetHeight}px)`;
		} else if (process.className == 'closed' && design.className == 'open') {
			info.style.transform = `translateY(${designDrop.offsetHeight}px)`;
		} else if (process.className == 'closed' && design.className == 'closed') {
		}
	}

	window.addEventListener('resize', function () {
		if (process.className == 'open' && design.className == 'closed') {
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight}px)`;
		} else if (process.className == 'open' && design.className == 'open') {
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight + designDrop.offsetHeight}px)`;
		} else if (process.className == 'closed' && design.className == 'open') {
			info.style.transform = `translateY(${designDrop.offsetHeight}px)`;
		}
	});

	processToggle.addEventListener('click', function () {
		if (process.className == 'closed' && design.className == 'closed') {
			process.className = 'open';
			processDrop.style.display = 'flex';
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			setTimeout(function () {
				document.getElementById('processArrow').style.transform = 'rotate(90deg)';
				processDrop.style.opacity = '100';
				processDrop.style.transform = `translateY(${processToggle.offsetHeight}px)`;
			}, 10);
			calibrate();
		} else if (process.className == 'closed' && design.className == 'open') {
			process.className = 'open';
			processDrop.style.display = 'flex';
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight + designDrop.offsetHeight}px)`;
			setTimeout(function () {
				document.getElementById('processArrow').style.transform = 'rotate(90deg)';
				processDrop.style.opacity = '100';
				processDrop.style.transform = `translateY(${processToggle.offsetHeight}px)`;
			}, 10);
			calibrate();
		} else if (process.className == 'open' && design.className == 'open') {
			process.className = 'closed';
			document.getElementById('processArrow').style.transform = 'rotate(45deg)';
			processDrop.style.opacity = '0';
			processDrop.style.transform = 'translateY(0px)';
			design.style.transform = `translateY(0px)`;
			setTimeout(function () {
				processDrop.style.display = 'none';
			}, 500);
			calibrate();
		} else if (process.className == 'open' && design.className == 'closed') {
			process.className = 'closed';
			document.getElementById('processArrow').style.transform = 'rotate(45deg)';
			processDrop.style.opacity = '0';
			processDrop.style.transform = 'translateY(0px)';
			design.style.transform = `translateY(0px)`;
			info.style.transform = `translateY(0px)`;
			setTimeout(function () {
				processDrop.style.display = 'none';
			}, 500);
			calibrate();
		}
	});

	designToggle.addEventListener('click', function () {
		if (design.className == 'closed' && process.className == 'closed') {
			design.className = 'open';
			designDrop.style.display = 'flex';
			info.style.transform = `translateY(${designDrop.offsetHeight}px)`;
			setTimeout(function () {
				document.getElementById('designArrow').style.transform = 'rotate(-90deg)';
				designDrop.style.opacity = '100';
				designDrop.style.transform = `translateY(${designToggle.offsetHeight}px)`;
			}, 10);
		} else if (design.className == 'open' && process.className == 'open') {
			design.className = 'closed';
			document.getElementById('designArrow').style.transform = 'rotate(-45deg)';
			designDrop.style.opacity = '0';
			designDrop.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			design.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			info.style.transform = `translateY(${processDrop.offsetHeight}px)`;
			setTimeout(function () {
				designDrop.style.display = 'none';
			}, 500);
		} else if (design.className == 'closed' && process.className == 'open') {
			design.className = 'open';
			designDrop.style.display = 'flex';
			info.style.transform = `translateY(${designDrop.offsetHeight}px)`;
			setTimeout(function () {
				document.getElementById('designArrow').style.transform = 'rotate(-90deg)';
				designDrop.style.opacity = '100';
				designDrop.style.transform = `translateY(${designToggle.offsetHeight}px)`;
			}, 10);
			calibrate();
		} else if (design.className == 'open' && process.className == 'closed') {
			design.className = 'closed';
			document.getElementById('designArrow').style.transform = 'rotate(-45deg)';
			designDrop.style.opacity = '0';
			designDrop.style.transform = 'translateY(0px)';
			design.style.transform = `translateY(0px)`;
			info.style.transform = `translateY(0px)`;
			setTimeout(function () {
				designDrop.style.display = 'none';
			}, 500);
			calibrate();
		}
	});

	infoToggle.addEventListener('click', function () {
		if (info.className == 'closed') {
			info.className = 'open';
			infoDrop.style.display = 'flex';
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
			}, 200);
		}
	});

	process.addEventListener('mouseover', function () {
		document.getElementById('processArrow').style.transform = 'rotate(45deg)';
	});

	process.addEventListener('mouseout', function () {
		document.getElementById('processArrow').style.transform = 'rotate(0deg)';
	});

	design.addEventListener('mouseover', function () {
		document.getElementById('designArrow').style.transform = 'rotate(-45deg)';
	});

	design.addEventListener('mouseout', function () {
		document.getElementById('designArrow').style.transform = 'rotate(0deg)';
	});

	info.addEventListener('mouseover', function () {
		document.getElementById('infoArrow').style.transform = 'rotate(45deg)';
	});
	info.addEventListener('mouseout', function () {
		document.getElementById('infoArrow').style.transform = 'rotate(0deg)';
	});
})();
