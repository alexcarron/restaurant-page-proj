import createElement from './element_constructor'

function createHeader() {
	let header_elm = createElement("header"),
		logo_elm = createElement("img", "", {src: "../src/logo.jpg", alt: "Restaurant Logo"}),
		h1_elm = createElement("h1", "Welcome to the Best Restaurant"),
		nav_elm = createElement("nav"),
		pages = ["Home", "Menu", "Contact"];
		
	for (let page of pages) {
		nav_elm.append( createElement("p", page) );
	}
	
	header_elm.append(logo_elm);
	header_elm.append(h1_elm);
	header_elm.append(nav_elm);
	
	return header_elm;
}

export {createHeader}

