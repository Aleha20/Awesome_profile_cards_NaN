/* eslint-disable indent */
'use strict';

let data = {
	fullname: 'Nombre Apellido',
	job: 'Front-end developer',
	phone: '',
	email: '',
	linkedin: '',
	github: '',
	image: '',
	palette: 1,
};

// Colapsables
// constantes de header (cada uno funciona por separado), arrow (no usado aun) y content (cada uno funciona por separado)
const header1 = document.querySelector('.js-header1');
const header2 = document.querySelector('.js-header2');
const header3 = document.querySelector('.js-header3');
// const arrow = document.querySelector('.js-arrow');
const content1 = document.querySelector('.js-content1');
const content2 = document.querySelector('.js-content2');
const content3 = document.querySelector('.js-content3');

// funcion para el colapsable de diseña
function collapse1() {
	content1.classList.toggle('collapsed');
	// si diseña NO contiene la clase .collapsed, se le añade a los otros dos apartados
	if (!content1.classList.contains('collapsed')) {
		content2.classList.add('collapsed');
		content3.classList.add('collapsed');
	}
}
// añadimos llamador de evento a el header de diseña
header1.addEventListener('click', collapse1);
// repetimos lo mismo, para rellena y comparte
function collapse2() {
	content2.classList.toggle('collapsed');
	if (!content2.classList.contains('collapsed')) {
		content1.classList.add('collapsed');
		content3.classList.add('collapsed');
	}
}
header2.addEventListener('click', collapse2);

function collapse3() {
	content3.classList.toggle('collapsed');
	if (!content3.classList.contains('collapsed')) {
		content1.classList.add('collapsed');
		content2.classList.add('collapsed');
	}
}
header3.addEventListener('click', collapse3);

// END Colapsable

// Selector de color

// END Selector de color

//  Image input
const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * @param {evento} e
 */

function getImage(e) {
	const myFile = e.currentTarget.files[0];
	fr.addEventListener('load', writeImage);
	fr.readAsDataURL(myFile);
}

function writeImage() {
	data.image = `${fr.result}`;
	profileImage.style.backgroundImage = `url(${fr.result})`;
	profilePreview.style.backgroundImage = `url(${fr.result})`;
	storeData();
}

function fakeFileClick() {
	fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

// END Image input

// Text input
const inputList = document.querySelectorAll('.js-field');

const previewText = document.querySelectorAll('.js-preview-text');
const nameInit = previewText[0].innerHTML;
const jobInit = previewText[1].innerHTML;
const previewHref = document.querySelectorAll('.js-preview-href');
const hrefInit = '#';

// OPTIMIZAR SEGÚN VIDEO MIGUEL 20 oct
chargeData();
function getInfo(event) {
	data[event.currentTarget.id] = event.currentTarget.value;
	paint();
	storeData();
}

function paint() {
	previewText[0].innerHTML = data.fullname || nameInit;
	previewText[1].innerHTML = data.job || jobInit;
	profileImage.style.backgroundImage = 'url(' + data.image + ')';
	previewHref[0].href = 'tel:' + data.phone || hrefInit;
	previewHref[1].href = 'mailto:' + data.email || hrefInit;
	previewHref[2].href = 'https://' + data.linkedin || hrefInit;
	previewHref[3].href = 'https://github.com/' + data.github || hrefInit;
}

for (const eachElement of inputList) {
	eachElement.addEventListener('keyup', getInfo);
}

// END Text input

// Reset
const btnReset = document.querySelector('.js-reset');

function handleReset() {
	console.log('reset');
	data.fullname = nameInit;
	data.job = jobInit;
	data.image = '';
	data.phone = hrefInit;
	data.email = hrefInit;
	data.linkedin = hrefInit;
	data.github = hrefInit;
	console.log(data);
	for (const input of inputList) {
		input.value = '';
	}
	paint();
	storeData();
}

btnReset.addEventListener('click', handleReset);

// END Reset

// Local Storage
function storeData() {
	console.log('guarda');
	const jsonData = JSON.stringify(data);
	localStorage.setItem('filledData', jsonData);
	console.log(jsonData);
}

function chargeData() {
	const storedData = localStorage.getItem('filledData');
	console.log(storedData);
	const lastData = JSON.parse(storedData);
	data = lastData;
	console.log(lastData);
	paint();
}

// END Local Storage

// card generator

// END card generator

// twitter

// END twitter
