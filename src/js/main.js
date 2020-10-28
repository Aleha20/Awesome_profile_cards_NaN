/* eslint-disable indent */

'use strict';

// Objeto DATA:
let data = {
	name: 'Nombre Apellido',
	job: 'Front-end developer',
	phone: '#',
	email: '#',
	linkedin: '#',
	github: '#',
	photo: 'url(../images/preview-default-NaN-team-monsters.jpg)',
	palette: 1,
};

// Constantes:
const previewText = document.querySelectorAll('.js-preview-text');
const previewHref = document.querySelectorAll('.js-preview-href');
const inputList = document.querySelectorAll('.js-field');

// ** COLAPSABLES **
const header1 = document.querySelector('.js-header1');
const header2 = document.querySelector('.js-header2');
const header3 = document.querySelector('.js-header3');
const content1 = document.querySelector('.js-content1');
const content2 = document.querySelector('.js-content2');
const content3 = document.querySelector('.js-content3');
const arrow1 = document.querySelector('.js-arrow1');
const arrow2 = document.querySelector('.js-arrow2');
const arrow3 = document.querySelector('.js-arrow3');

function collapse1() {
	content1.classList.toggle('collapsed');
	if (!content1.classList.contains('collapsed')) {
		content2.classList.add('collapsed');
		content3.classList.add('collapsed');
		arrow1.classList.add('item__header--arrowUp');
		arrow2.classList.add('item__header--arrowDown');
		arrow3.classList.add('item__header--arrowDown');
		arrow1.classList.remove('item__header--arrowDown');
		arrow2.classList.remove('item__header--arrowUp');
		arrow3.classList.remove('item__header--arrowUp');
	} else {
		arrow1.classList.add('item__header--arrowDown');
		arrow2.classList.add('item__header--arrowDown');
		arrow3.classList.add('item__header--arrowDown');
		arrow1.classList.remove('item__header--arrowUp');
		arrow2.classList.remove('item__header--arrowUp');
		arrow3.classList.remove('item__header--arrowUp');
	}
}
header1.addEventListener('click', collapse1);

function collapse2() {
	content2.classList.toggle('collapsed');
	if (!content2.classList.contains('collapsed')) {
		content1.classList.add('collapsed');
		content3.classList.add('collapsed');
		arrow1.classList.add('item__header--arrowDown');
		arrow2.classList.add('item__header--arrowUp');
		arrow3.classList.add('item__header--arrowDown');
		arrow1.classList.remove('item__header--arrowUp');
		arrow2.classList.remove('item__header--arrowDown');
		arrow3.classList.remove('item__header--arrowUp');
	} else {
		arrow1.classList.add('item__header--arrowDown');
		arrow2.classList.add('item__header--arrowDown');
		arrow3.classList.add('item__header--arrowDown');
		arrow1.classList.remove('item__header--arrowUp');
		arrow2.classList.remove('item__header--arrowUp');
		arrow3.classList.remove('item__header--arrowUp');
	}
}
header2.addEventListener('click', collapse2);

function collapse3() {
	content3.classList.toggle('collapsed');
	if (!content3.classList.contains('collapsed')) {
		content1.classList.add('collapsed');
		content2.classList.add('collapsed');
		arrow1.classList.add('item__header--arrowDown');
		arrow2.classList.add('item__header--arrowDown');
		arrow3.classList.add('item__header--arrowUp');
		arrow1.classList.remove('item__header--arrowUp');
		arrow2.classList.remove('item__header--arrowUp');
		arrow3.classList.remove('item__header--arrowDown');
	} else {
		arrow1.classList.add('item__header--arrowDown');
		arrow2.classList.add('item__header--arrowDown');
		arrow3.classList.add('item__header--arrowDown');
		arrow1.classList.remove('item__header--arrowUp');
		arrow2.classList.remove('item__header--arrowUp');
		arrow3.classList.remove('item__header--arrowUp');
	}
}
header3.addEventListener('click', collapse3);
// ** END COLAPSABLES **

// ** SELETOR DE COLOR **
const stick = document.querySelector('.js-stick');
const previewName = document.querySelector('.js-preview-name');
const paletteCold = document.querySelector('.js-option1');
const paletteWarm = document.querySelector('.js-option2');
const paletteMild = document.querySelector('.js-option3');
const paletteColdValue = parseInt(paletteCold.value);
const paletteWarmValue = parseInt(paletteWarm.value);
const paletteMildValue = parseInt(paletteMild.value);

function selectPaletteCold() {
	data.palette = paletteColdValue;
	paintPalette();
}
function selectPaletteWarm() {
	data.palette = paletteWarmValue;
	paintPalette();
}
function selectPaletteMild() {
	data.palette = paletteMildValue;
	paintPalette();
}

function paintPalette() {
	if (data.palette === 1) {
		stick.classList.add('stick-border-cold');
		stick.classList.remove('stick-border-mild');
		stick.classList.remove('stick-border-warm');
		previewName.classList.add('name-cold');
		previewName.classList.remove('name-mild');
		previewName.classList.remove('name-warm');
		for (const eachIcon of previewHref) {
			eachIcon.classList.add('icon-cold');
			eachIcon.classList.remove('icon-mild');
			eachIcon.classList.remove('icon-warm');
		}
	} else if (data.palette === 2) {
		stick.classList.remove('stick-border-cold');
		stick.classList.remove('stick-border-mild');
		stick.classList.add('stick-border-warm');
		previewName.classList.remove('name-cold');
		previewName.classList.remove('name-mild');
		previewName.classList.add('name-warm');
		for (const eachIcon of previewHref) {
			eachIcon.classList.remove('icon-cold');
			eachIcon.classList.remove('icon-mild');
			eachIcon.classList.add('icon-warm');
		}
	} else if (data.palette === 3) {
		stick.classList.remove('stick-border-cold');
		stick.classList.add('stick-border-mild');
		stick.classList.remove('stick-border-warm');
		previewName.classList.remove('name-cold');
		previewName.classList.add('name-mild');
		previewName.classList.remove('name-warm');
		for (const eachIcon of previewHref) {
			eachIcon.classList.remove('icon-cold');
			eachIcon.classList.add('icon-mild');
			eachIcon.classList.remove('icon-warm');
		}
	}
	storeData();
}
paletteCold.addEventListener('click', selectPaletteCold);
paletteWarm.addEventListener('click', selectPaletteWarm);
paletteMild.addEventListener('click', selectPaletteMild);
// ** END SELECTOR DE COLOR **

// ** TEXT INPUT **
// Función de carga de datos al iniciar el navegador:
chargeData();

// Función para recoger valores introducidos en los inputs:
function getInfo(event) {
	data[event.currentTarget.id] = event.currentTarget.value;
	paint();
	storeData();
}
for (const eachElement of inputList) {
	eachElement.addEventListener('keyup', getInfo);
}

// Función para pintar en la tarjeta de PREVIEW:
function paint() {
	previewText[0].innerHTML = data.name || 'Nombre Apellido';
	previewText[1].innerHTML = data.job || 'Front-end developer';
	previewHref[0].href = 'tel:' + data.phone || '#';
	previewHref[1].href = 'mailto:' + data.email || '#';
	previewHref[2].href = 'https://' + data.linkedin || '#';
	previewHref[3].href = 'https://github.com/' + data.github || '#';
	profileImage.style.backgroundImage =
		`url(${data.photo})` ||
		'url(../images/preview-default-NaN-team-monsters.jpg)';
}
// ** END TEXT INPUT **

// ** RESET **
const btnReset = document.querySelector('.js-reset');
function handleReset() {
	data.name = 'Nombre Apellido';
	data.job = 'Front-end developer';
	data.phone = '#';
	data.email = '#';
	data.linkedin = '#';
	data.github = '#';
	data.photo = '../assets/images/preview-default-NaN-team-monsters.jpg';
	data.palette = 1;
	for (const input of inputList) {
		input.value = '';
	}
	profileImage.style.backgroundImage =
		'url(../assets/images/bg-yellow-NaN-monster.jpg)';
	profilePreview.style.backgroundImage =
		'url(../assets/images/preview-default-NaN-team-monsters.jpg)';
	paintPalette();
	paint();
	storeData();
}
btnReset.addEventListener('click', handleReset);
// ** END RESET **

// ** LOCAL STORAGE **
function storeData() {
	const jsonData = JSON.stringify(data);
	localStorage.setItem('filledData', jsonData);
}
function chargeData() {
	const storedData = localStorage.getItem('filledData');
	const lastData = JSON.parse(storedData);
	if (lastData !== null) {
		data = lastData;
	}
	paintPalette();
	paint();
}
// ** END LOCAL STORAGE **

// ** CARD GENERATOR **
const submitButton = document.querySelector('.js-submit');
const responseURL = document.querySelector('.js-response');
const form = document.querySelector('.js-form');

function sendData() {
	sendRequest(data);
}

// Función para envío de datos a la API
function sendRequest() {
	fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'content-type': 'application/json',
		},
	})
		.then(function (resp) {
			return resp.json();
		})
		.then(function (result) {
			showURL(result);
		})
		.catch(function (error) {
			console.log(error);
		});
}

const hiddenBox = document.querySelector('.js-share-url');
const inactiveButton = document.querySelector('.js-share');

function showURL(result) {
	if (result.success) {
		responseURL.innerHTML = result.cardURL;
		responseURL.href = result.cardURL;
		hiddenBox.classList.remove('hidden');
		inactiveButton.classList.add('inactive');
		submitButton.removeEventListener('click', sendRequest);
	} else {
		responseURL.innerHTML = 'ERROR:' + result.error;
	}
}
submitButton.addEventListener('click', sendRequest);
// ** END CARD GENERATOR **

