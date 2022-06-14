import {createHeader, createMain} from './page-load'

document.body.onload = function() {
	document.querySelector("div#content").append(createHeader());
	document.querySelector("div#content").append(createMain());
}

