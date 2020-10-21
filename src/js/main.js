/* eslint-disable indent */
"use strict";

// Colapsables
// constantes de header (cada uno funciona por separado), arrow (no usado aun) y content (cada uno funciona por separado)
const header1 = document.querySelector(".js-header1");
const header2 = document.querySelector(".js-header2");
const header3 = document.querySelector(".js-header3");
// const arrow = document.querySelector('.js-arrow');
const content1 = document.querySelector(".js-content1");
const content2 = document.querySelector(".js-content2");
const content3 = document.querySelector(".js-content3");

// funcion para el colapsable de diseña
function collapse1() {
	content1.classList.toggle("collapsed");
	// si diseña NO contiene la clase .collapsed, se le añade a los otros dos apartados
	if (!content1.classList.contains("collapsed")) {
		content2.classList.add("collapsed");
		content3.classList.add("collapsed");
	}
}
// añadimos llamador de evento a el header de diseña
header1.addEventListener("click", collapse1);

// repetimos lo mismo, para rellena
function collapse2() {
	content2.classList.toggle("collapsed");
	if (!content2.classList.contains("collapsed")) {
		content1.classList.add("collapsed");
		content3.classList.add("collapsed");
	}
}
header2.addEventListener("click", collapse2);

// y para comparte
function collapse3() {
	content3.classList.toggle("collapsed");
	if (!content3.classList.contains("collapsed")) {
		content1.classList.add("collapsed");
		content2.classList.add("collapsed");
	}
}
header3.addEventListener("click", collapse3);

// END Colapsable

// Selector de color

// END Selector de color

// Text input
const inputList = document.querySelectorAll(".js-field");

let data = {
	name: "Nombre Apellido",
	job: "Front-end developer",
	phone: "#",
	email: "#",
	linkedin: "#",
	github: "#",
	photo: "",
	palette: 1,
};

const previewText = document.querySelectorAll(".js-preview-text");
console.log(previewText);
const nameInit = previewText[0].innerHTML;
console.log("Esto es nameInit " + nameInit);
const jobInit = previewText[1].innerHTML;
console.log("Esto es jobInit " + jobInit);

const previewHref = document.querySelectorAll(".js-preview-href");
console.log(previewHref);
const hrefInit = "#";

// OPTIMIZAR SEGÚN VIDEO MIGUEL 20 oct
chargeData();
function getInfo(event) {
	data[event.currentTarget.id] = event.currentTarget.value;
	paint();
	storeData();
}

function paint() {
	previewText[0].innerHTML = data.name || nameInit;
	previewText[1].innerHTML = data.job || jobInit;
	previewHref[0].href = "tel:" + data.phone || hrefInit;
	previewHref[1].href = "mailto:" + data.email || hrefInit;
	previewHref[2].href = "https://" + data.linkedin || hrefInit;
	previewHref[3].href = "https://github.com/" + data.github || hrefInit;
}

// 	if (event.currentTarget.id === 'name') {
// 		// PREGUNTA #1 (revisar Trello):
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

for (const eachElement of inputList) {
	eachElement.addEventListener("keyup", getInfo);
}

// END Text input

// Reset
const btnReset = document.querySelector(".js-reset");

function handleReset() {
	console.log("reset");
	data.name = nameInit;
	data.job = jobInit;
	data.phone = hrefInit;
	data.email = hrefInit;
	data.linkedin = hrefInit;
	data.github = hrefInit;
	console.log(data);
	for (const input of inputList) {
		input.value = "";
	}
	paint();
	storeData();
}

btnReset.addEventListener("click", handleReset);

// END Reset

// Local Storage
function storeData() {
	console.log("guarda");
	const jsonData = JSON.stringify(data);
	localStorage.setItem("filledData", jsonData);
	console.log(jsonData);
}

function chargeData() {
	console.log("carga");
	const storedData = localStorage.getItem("filledData");
	console.log(storedData);
	const lastData = JSON.parse(storedData);
	if (lastData !== null) {
		data = lastData;
	}
	console.log(lastData);
	paint();
}

// END Local Storage

// card generator

// constante selectora del boton CREAR TARJETA
const submitButton = document.querySelector(".js-submit");
// constante selectora del ELEMENTO html con la URL
const responseURL = document.querySelector(".js-response");
// constante selectora del formulario completo
const form = document.querySelector(".js-form");

// ¿?
function sendData() {
	sendRequest(data);
}

// Función para envío de datos a la API
function sendRequest(json) {
	console.log("entro en funcion antes de fetch");
	fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
		method: "POST",
		body: JSON.stringify(json),
		headers: {
			"content-type": "application/json",
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



const hiddenBox = document.querySelector(".js-share-url");

function showURL(result) {
	if (result.success) {
		responseURL.innerHTML = result.cardURL;
		responseURL.href = result.cardURL;
		hiddenBox.classList.remove("hidden");
	} else {
		responseURL.innerHTML = "ERROR:" + result.error;
	}
  // const handleForm = function (ev) {
  //   ev.preventDefault();
  // }
}
submitButton.addEventListener("click", sendRequest);

// END card generator

// twitter

// END twitter
