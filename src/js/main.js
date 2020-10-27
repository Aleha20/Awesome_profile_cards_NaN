/* eslint-disable indent */
'use strict';

//****  COLAPSABLES  ****
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

// repetimos lo mismo, para rellena
function collapse2() {
	content2.classList.toggle('collapsed');
	if (!content2.classList.contains('collapsed')) {
		content1.classList.add('collapsed');
		content3.classList.add('collapsed');
	}
}
header2.addEventListener('click', collapse2);

// y para comparte
function collapse3() {
	content3.classList.toggle('collapsed');
	if (!content3.classList.contains('collapsed')) {
		content1.classList.add('collapsed');
		content2.classList.add('collapsed');
	}
}
header3.addEventListener('click', collapse3);
//****  END COLAPSABLES  ****


//****  SELECTOR DE COLOR  ****
//****  END SELECTOR DE COLOR  ****


//**** TEXT INPUT  ****
const inputList = document.querySelectorAll('.js-field');

// Objeto DATA:
let data = {
	name: 'Nombre Apellido',
	job: 'Front-end developer',
	phone: '#',
	email: '#',
	linkedin: '#',
	github: '#',
	photo: 'url(../images/NAN-card-photo-default.jpg)',
	palette: 1,
};

// Constantes con valores de DATA de inicio:
const previewText = document.querySelectorAll('.js-preview-text');
console.log(previewText);
const nameInit = previewText[0].innerHTML;
console.log('Esto es nameInit ' + nameInit);
const jobInit = previewText[1].innerHTML;
console.log('Esto es jobInit ' + jobInit);
const previewHref = document.querySelectorAll('.js-preview-href');
console.log(previewHref);
const hrefInit = '#';

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
	previewText[0].innerHTML = data.name || nameInit;
	previewText[1].innerHTML = data.job || jobInit;
	previewHref[0].href = 'tel:' + data.phone || hrefInit;
	previewHref[1].href = 'mailto:' + data.email || hrefInit;
	previewHref[2].href = 'https://' + data.linkedin || hrefInit;
	previewHref[3].href = 'https://github.com/' + data.github || hrefInit;
	profileImage.style.backgroundImage =
		`url(${data.photo})` || 'url(../images/NAN-card-photo-default.jpg)';
}

// 	if (event.currentTarget.id === 'name') {
// 		if (event.currentTarget.value !== '') {
// 			previewText[0].innerHTML = data.name;
// 		} else {
// 			previewText[0].innerHTML = nameInit;
// 		}
// 	} else if (event.currentTarget.id === 'job') {
// 		if (event.currentTarget.value !== '') {
// 			previewText[1].innerHTML = data.job;
// 		} else {
// 			previewText[1].innerHTML = jobInit;
// 		}
// 	} else if (event.currentTarget.id === 'phone') {
// 		if (event.currentTarget.value !== '') {
// 			previewHref[0].href = 'tel:' + data.phone;
// 		} else {
// 			previewHref[0].href = hrefInit;
// 		}
// 	} else if (event.currentTarget.id === 'email') {
// 		if (event.currentTarget.value !== '') {
// 			previewHref[1].href = 'mailto:' + data.email;
// 		} else {
// 			previewHref[1].href = hrefInit;
// 		}
// 	} else if (event.currentTarget.id === 'linkedin') {
// 		if (event.currentTarget.value !== '') {
// 			previewHref[2].href = 'https://' + data.linkedin;
// 		} else {
// 			previewHref[2].href = hrefInit;
// 		}
// 	} else if (event.currentTarget.id === 'github') {
// 		previewHref[3].href = 'https://github.com/' + data.github.replace('@', '');
// 	} else {
// 		previewHref[3].href = hrefInit;
// 	}
// 	storeData();
// }
//****  END TEXT INPUT  ****


//****  RESET  ****
const btnReset = document.querySelector('.js-reset');

function handleReset() {
	console.log('reset');
	data.name = nameInit;
	data.job = jobInit;
	data.phone = hrefInit;
	data.email = hrefInit;
	data.linkedin = hrefInit;
	data.github = hrefInit;
	data.photo = '../images/NAN-card-photo-default.jpg';
	console.log(data);
	for (const input of inputList) {
		input.value = '';
	}
	paint();
	storeData();
}

btnReset.addEventListener('click', handleReset);
//****  END RESET  ****


//****  LOCAL STORAGE  ****
function storeData() {
	// console.log('guarda');
	const jsonData = JSON.stringify(data);
	localStorage.setItem('filledData', jsonData);
	// console.log(jsonData);
}

function chargeData() {
	// console.log('carga');
	const storedData = localStorage.getItem('filledData');
	// console.log(storedData);
	const lastData = JSON.parse(storedData);
	if (lastData !== null) {
		data = lastData;
	}
	console.log(lastData);
	paint();
}
//****  END LOCAL STORAGE  ****


//****  CARD GENERATOR  ****
// constante selectora del boton CREAR TARJETA
const submitButton = document.querySelector('.js-submit');
// constante selectora del ELEMENTO html con la URL
const responseURL = document.querySelector('.js-response');

// function sendData() {
// 	sendRequest(data);
// }

// Función para envío de datos a la API
function sendRequest() {
	// console.log('entro en funcion antes de fetch');
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
//****  END CARD GENERATOR  ****


//****  TWITTER  ****
//****  END TWITTER  ****