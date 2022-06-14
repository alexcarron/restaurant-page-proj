import createElement from '../element_constructor'

function createHeader() {
	let header_elm = createElement("header"),
			logo_elm = createElement("img", "", {src: "../src/images/restaurant-logo.png", alt: "Restaurant Logo"}),
			h1_elm = createElement("h1", "The Best Restaurant");
	
	header_elm.append(logo_elm);
	header_elm.append(h1_elm);
	
	return header_elm;
}

function createNav() {
	let nav_elm = createElement("nav"),
		pages = ["Home", "Menu", "Contact"];
		
	for (let page of pages) {
		let nav_link = createElement(
			"p", 
			page, 
			{
				class: `nav_link`,
				["data-page-name"]: page.toLowerCase(),
			}
		)
		
		nav_elm.append(nav_link);
	}
	
	return nav_elm;
}

export {createHeader, createNav}

