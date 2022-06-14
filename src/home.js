import createElement from './element_constructor'

function createHomePage() {
	let main_elm = createElement("main"),
			section_elm = createElement("section"),
				h2_elm = createElement("h2", "Introducing the BEST Restaurant"),
				description_elm = createElement("p", "Welcome to the most wonderful restaurant in the world. Our restaurant is above all others with the best food in the country and most quality service. Dining here is an expierence you can never forget.");
	
	section_elm.append(h2_elm);
	section_elm.append(description_elm);
	
	main_elm.append(section_elm);
	
	return main_elm;
}

export {createHomePage}