function createHeader() {
	let header_elm = document.createElement("header"),
		logo_elm = document.createElement("img"),
		h1_elm = document.createElement("h1");
		
	logo_elm.src = "./src/logo.jpg";
	logo_elm.alt = "Restaurant Logo";
	
	h1_elm.textContent = "No";
	
	header_elm.append(logo_elm);
	header_elm.append(h1_elm);
	
	return header_elm;
}

function createMain() {
	let main_elm = document.createElement("main"),
		section_elm = document.createElement("section"),
		h2_elm = document.createElement("h2"),
		description_elm = document.createElement("p");
	
	h2_elm.textContent = "Introducing the BEST Restaurant";
	
	description_elm.textContent = "Welcome to the most wonderful restaurant in the world. Our restaurant is above all others with the best food in the country and most quality service. Dining here is an expierence you can never forget.";
	
	section_elm.append(h2_elm);
	section_elm.append(description_elm);
	
	main_elm.append(section_elm);
	
	return main_elm;
}

export {createHeader, createMain}

