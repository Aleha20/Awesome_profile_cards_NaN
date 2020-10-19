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

// Reset

// END Reset

// Selector de color

// END Selector de color

// Text input
const inputList = document.querySelectorAll(".js-field");

let data = {
	fullname: "Nombre Apellido",
	job: "Front-end developer",
  phone: "#",
  email: "#",
	linkedin: "#",
	github: "#",
};
// console.log(data);
const previewText = document.querySelectorAll(".js-preview-text");
console.log(previewText);
const nameInit = previewText[0].innerHTML;
console.log("Esto es nameInit " + nameInit);
const jobInit = previewText[1].innerHTML;
console.log("Esto es jobInit " + jobInit);

const previewHref = document.querySelectorAll(".js-preview-href");
console.log(previewHref);
const hrefInit = "#";

function getInfo(event) {
	data[event.currentTarget.id] = event.currentTarget.value;

	if (event.currentTarget.id === "fullname") {
		// PREGUNTA #1 (revisar Trello):
		if (event.currentTarget.value !== "") {
			previewText[0].innerHTML = data.fullname;
		} else {
			previewText[0].innerHTML = nameInit;
		}
	} else if (event.currentTarget.id === "job") {
		if (event.currentTarget.value !== "") {
			previewText[1].innerHTML = data.job;
		} else {
			previewText[1].innerHTML = jobInit;
		}
	} else if (event.currentTarget.id === "phone") {
    if (event.currentTarget.value !== "") {
			previewHref[0].href = "tel:" + data.phone;
		} else {
			previewHref[0].href = hrefInit;
		}
  } else if (event.currentTarget.id === "email") {
    if (event.currentTarget.value !== "") {
			previewHref[1].href = "mailto:" + data.email;
		} else {
			previewHref[1].href = hrefInit;
		}
  } else if (event.currentTarget.id === "linkedin") {
    if (event.currentTarget.value !== "") {
			previewHref[2].href = "https://" + data.linkedin;
		} else {
			previewHref[2].href = hrefInit;
		}
  } else if (event.currentTarget.id === "github") {
    previewHref[3].href = "https://github.com/" + data.github;
  } else {
    previewHref[3].href = hrefInit;
  }
}

for (const eachElement of inputList) {
	eachElement.addEventListener("keyup", getInfo);
}

for (const eachHref of previewHref) {
	eachHref.addEventListener("blur", getInfo);
}

// END Text input

// card generator

// END card generator

// twitter

// END twitter
