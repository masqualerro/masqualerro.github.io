(function () {
	'use strict';

	const userInfo = document.querySelector('form');
	const favoritePick = document.getElementById('step1');
	const ranking = document.getElementById('step2');
	const feeling = document.getElementById('step3');
	const results = document.getElementById('results');

	let userName;
	let userAge;
	let favorite;
	let userFavorite;
	let userFavId;
	const top5 = [];
	let colorArray = [];
	let genreList = [];

	userInfo.addEventListener('submit', function (e) {
		e.preventDefault();

		userName = document.getElementById('uname').value;
		userAge = document.getElementById('age').value;
		console.log(userName);

		document.getElementById('formCont').style.display = 'none';
		favoritePick.style.display = 'initial';
		document.getElementById('chooseFav').style.animationName = 'opacityFade';
	});

	document.getElementById('favNext').addEventListener('click', function () {
		if (document.getElementById('favorite')) {
			const imgs = document.querySelectorAll('.rankO');
			favorite = document.getElementById('favorite').alt;
			favoritePick.style.display = 'none';
			ranking.style.display = 'initial';
			document.getElementById('rankDiv').style.animationName = 'opacityFade';
			switch (favorite) {
				case 'impressionism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/impressionism/${i}.jpg`;
						imgs[i].alt = `impressionism_${i}`;
					}
					userFavorite = 'Impressionism';
					userFavId = 2;
					break;
				case 'renaissance':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/renaissance/${i}.jpg`;
						imgs[i].alt = `renaissance_${i}`;
					}
					userFavorite = 'Renaissance';
					userFavId = 0;
					break;
				case 'romanticism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/romanticism/${i}.jpg`;
						imgs[i].alt = `romanticism_${i}`;
					}
					userFavorite = 'Romanticism';
					userFavId = 1;
					break;
				case 'surrealism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/surrealism/${i}.jpg`;
						imgs[i].alt = `surrealism_${i}`;
					}
					userFavorite = 'Surrealism';
					userFavId = 4;
					break;
				case 'contemporary':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/contemporary/${i}.jpg`;
						imgs[i].alt = `contemporary${i}`;
					}
					userFavorite = 'Contemporary';
					userFavId = 5;
					break;
				case 'expressionism':
					for (let i = 0; i <= 9; i++) {
						imgs[i].src = `images/expressionism/${i}.jpg`;
						imgs[i].alt = `expressionism${i}`;
					}
					userFavorite = 'Expressionism';
					userFavId = 3;
					break;
			}
		} else {
			alert('add error message later');
		}
	});
	document.getElementById('rankNext').addEventListener('click', function () {
		console.log(userFavorite);
		const rankingDiv = document.getElementById('rankDiv');
		const feelImgs = document.querySelectorAll('.feelO');
		ranking.style.display = 'none';
		feeling.style.display = 'initial';
		document.getElementById('top').style.animationName = 'opacityFade';
		for (let i = 0; i <= 4; i++) {
			const checkId = rankingDiv.children[i].alt.match(/^\d+|\d+\b|\d+(?=\w)/g);
			console.log(rankingDiv.children[i]);
			feelImgs[i].src = rankingDiv.children[i].src;
			top5.push(checkId);
		}
		console.log(top5);
	});
	document.getElementById('feelNext').addEventListener('click', function () {
		feeling.style.display = 'none';
		fetchJson();
	});
	async function fetchJson() {
		const artData = await fetch(`quiz.json`);
		const data = await artData.json();
		console.log(data);
		favRead(data);
		favRead2();
		favRead3(data);
		mostFreqGenre(data);
		countBooleans(data);
		listObjective();
	}
	function favRead(x) {
		document.getElementById('topGenre').innerHTML += userFavorite;
		document.getElementById('favGenreList').children;
		for (let i = 0; i < top5.length; i++) {
			const art = x.art[userFavId].artworks[top5[i]];
			console.log(`Fav ${i + 1} = ${art.title}, ${art.artist}, ${art.year}`);
			document.getElementById('results').innerHTML += `<p>Fav ${i + 1} = ${art.title}, ${art.artist}, ${
				art.year
			}</p><br>`;
			genreList.push(art.period);
			colorArray.push(art.color);
		}

		for (let i = 0; i < 5; i++) {
			const art = x.art[userFavId].artworks[top5[i]];
			document.getElementById('favList').children[i].innerHTML += `${art.title}, ${art.artist}, ${art.year}`;
		}

		for (let i = 0; i < colorArray.length; i++) {
			document.getElementById('colorPallette').children[i].style.backgroundColor = colorArray[i][0];
		}

		for (let i = 0; i < document.getElementById('serene').children.length; i++) {
			feelArray.push('serene');
		}
		for (let i = 0; i < document.getElementById('introspective').children.length; i++) {
			feelArray.push('introspective');
		}
		for (let i = 0; i < document.getElementById('visceral').children.length; i++) {
			feelArray.push('visceral');
		}
		// for (let i = 0; i < document.getElementById('sublime').children.length; i++) {
		// 	feelArray.push('sublime');
		// }

		results.style.display = 'initial';
		console.log(colorArray);
		var granimInstance = new Granim({
			element: '#gradient',
			name: 'granim',
			isPausedWhenNotInView: true,
			opacity: [1, 1],
			states: {
				'default-state': {
					gradients: colorArray,
					loop: true,
				},
			},
		});
	}

	function favRead2() {
		switch (favorite) {
			case 'impressionism':
				document.getElementById('theImg').src = `images/impressionism/${top5[0]}.jpg`;
				break;
			case 'renaissance':
				document.getElementById('theImg').src = `images/renaissance/${top5[0]}.jpg`;
				break;
			case 'romanticism':
				document.getElementById('theImg').src = `images/romanticism/${top5[0]}.jpg`;
				break;
			case 'surrealism':
				document.getElementById('theImg').src = `images/surrealism/${top5[0]}.jpg`;
				break;
			case 'contemporary':
				document.getElementById('theImg').src = `images/contemporary/${top5[0]}.jpg`;
				break;
			case 'expressionism':
				document.getElementById('theImg').src = `images/expressionism/${top5[0]}.jpg`;
				break;
		}
		let genreOutput = [...new Set(genreList)];
		for (let i = 0; i < genreOutput.length; i++) {
			const node = document.createElement('li');
			const textnode = document.createTextNode(genreOutput[i]);
			node.appendChild(textnode);
			document.getElementById('favGenreList').appendChild(node);
			console.log(genreOutput);
		}
		mostFreqFeeling();
	}
	function favRead3(x) {
		const art = x.art[userFavId].feeling;
		switch (mostFrequentFeeling) {
			case 'serene':
				document.getElementById(
					'feelP'
				).innerHTML += `"${mostFrequentFeeling}" dominated your feeling categorization. ${art.serene}`;
				break;
			case 'visceral':
				document.getElementById(
					'feelP'
				).innerHTML += `"${mostFrequentFeeling}" dominated your feeling categorization. ${art.visceral}`;
				break;
			case 'introspective':
				document.getElementById(
					'feelP'
				).innerHTML += `"${mostFrequentFeeling}" dominated your feeling categorization. ${art.introspective}`;
				break;
			// case 'sublime':
			// 	document.getElementById(
			// 		'feelP'
			// 	).innerHTML += `"${mostFrequentFeeling}" dominated your feeling categorization. ${art.sublime}`;
			// 	break;
		}
	}

	let feelArray = [];
	let counts = {};
	let compare = 0;
	let mostFrequentGenre;
	let mostFrequentPeriod;
	let mostFrequentFeeling;
	let human = {
		string: 'Strictly Human',
		count: 0,
	};
	let nature = {
		string: 'Strictly Nature',
		count: 0,
	};
	let humanNature = {
		string: 'Human in Nature',
		count: 0,
	};

	let natureAbstract = {
		string: 'Abstract Nature',
		count: 0,
	};
	let humanAbstract = {
		string: 'Abstract Human',
		count: 0,
	};
	let humanNatureAbstract = {
		string: 'Abstract Human + Nature',
		count: 0,
	};
	let abstractNon = {
		string: 'Non-Representational Abstraction',
		count: 0,
	};
	let abstractSurreal = {
		string: 'Surreal Non-Representational Abstraction',
		count: 0,
	};
	let humanSurreal = {
		string: 'Surreal Human',
		count: 0,
	};
	let natureSurreal = {
		string: 'Surreal Nature',
		count: 0,
	};
	let humanNatureSurreal = {
		string: 'Surreal Human + Nature',
		count: 0,
	};
	let humanAbstractSurreal = {
		string: 'Surreal Abstract Human',
		count: 0,
	};
	let natureAbstractSurreal = {
		string: 'Surreal Abstract Nature',
		count: 0,
	};
	let humanNatureAbstractSurreal = {
		string: 'Surreal Abstract Human + Nature',
		count: 0,
	};

	function mostFreqGenre(x) {
		for (var i = 0, len = top5.length; i < len; i++) {
			const art = x.art[userFavId].artworks[top5[i]];
			var word = art.genre;

			if (counts[word] === undefined) {
				counts[word] = 1;
			} else {
				counts[word] = counts[word] + 1;
			}
			if (counts[word] > compare) {
				compare = counts[word];
				mostFrequentGenre = art.genre;
			}
		}
		console.log(`Most Frequent Genre: ${mostFrequentGenre} -> ${compare}`);
		return mostFrequentGenre;
	}

	function mostFreqFeeling() {
		for (var i = 0; i < feelArray.length; i++) {
			var word = feelArray[i];

			if (counts[word] === undefined) {
				counts[word] = 1;
			} else {
				counts[word] = counts[word] + 1;
			}
			if (counts[word] > compare) {
				compare = counts[word];
				mostFrequentFeeling = feelArray[i];
			}
		}
		console.log(`Most Frequent Feeling: ${mostFrequentFeeling} -> ${compare}`);
		return mostFrequentFeeling;
	}

	function mostFreqPeriod(x) {
		for (var i = 0, len = top5.length; i < len; i++) {
			const art = x.art[userFavId].artworks[top5[i]];
			var word = art.period;

			if (counts[word] === undefined) {
				counts[word] = 1;
			} else {
				counts[word] = counts[word] + 1;
			}
			if (counts[word] > compare) {
				compare = counts[word];
				mostFrequentPeriod = art.period;
			}
		}
		console.log(`Most Frequent Period: ${mostFrequent} -> ${compare}`);
		return mostFrequentPeriod;
	}

	function countBooleans(x) {
		for (var i = 0, len = top5.length; i < len; i++) {
			const art = x.art[userFavId].artworks[top5[i]];
			if (art.human == true && art.nature == false) {
				human.count += 1;
				console.log('human');
				if (art.abstract == true && art.surreal == false) {
					humanAbstract.count += 1;
				} else if (art.surreal == true && art.abstract == false) {
					humanSurreal.count += 1;
				} else if (art.abstract == true && art.surreal == true) {
					humanAbstractSurreal.count += 1;
				}
			} else if (art.human == false && art.nature == true) {
				nature.count += 1;
				console.log('nature');
				if (art.abstract == true && art.surreal == false) {
					natureAbstract.count += 1;
				} else if (art.surreal == true && art.abstract == false) {
					natureSurreal.count += 1;
				} else if (art.abstract == true && art.surreal == true) {
					natureAbstractSurreal.count += 1;
				}
			} else if (art.human == true && art.nature == true) {
				console.log('humanNature');
				humanNature.count += 1;
				if (art.abstract == true && art.surreal == false) {
					humanNatureAbstract.count += 1;
				} else if (art.surreal == true && art.abstract == false) {
					humanNatureSurreal.count += 1;
					console.log('humanNatureSURREAL');
				} else if (art.abstract == true && art.surreal == true) {
					humanNatureAbstractSurreal.count += 1;
					console.log('humanABSTRACTNatureSURREAL');
				}
			} else if (art.human == false && art.nature == false) {
				console.log('abstractNON');
				abstractNon.count += 1;
				if (art.surreal == true) {
					abstractSurreal.count += 1;
				}
			}
		}
	}

	function listObjective() {
		const node = document.createElement('p');
		const textnode = document.createTextNode(`Top Painting Classification: ${mostFrequentGenre} painting`);
		node.appendChild(textnode);
		document.getElementById('objective').appendChild(node);
		const labels = [];
		const labelData = [];

		const data = {
			labels: labels,
			datasets: [
				{
					label: 'My First dataset',
					data: labelData,
					backgroundColor: ['#53625e', '#b6a6d0', '#8d686a', '#596d79', '#E7A7D2', '#8a7a8a'],
					hoverOffset: 4,
				},
			],
		};

		const config = {
			type: 'doughnut',
			data: data,
		};

		let objArray = [
			human,
			nature,
			humanNature,
			natureAbstract,
			humanAbstract,
			humanNatureAbstract,
			abstractNon,
			abstractSurreal,
			humanSurreal,
			natureSurreal,
			humanNatureSurreal,
			humanAbstractSurreal,
			natureAbstractSurreal,
			humanNatureAbstractSurreal,
		];
		for (let i = 0; i < objArray.length; i++) {
			if (objArray[i].count != 0) {
				console.log(`${objArray[i].string} -> ${objArray[i].count}`);
				labels.push(objArray[i].string);
				labelData.push(objArray[i].count);
			} else {
				console.log(`THERE IS NO ${objArray[i].string}`);
			}
			console.log(objArray);
		}

		const myChart = new Chart(document.getElementById('objCanvas'), config);
	}
})();
