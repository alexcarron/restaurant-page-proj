import createElement from '../element_constructor'

const home_page = (function() {
	let name = "home",
		heading_text = "Introducing the BEST Restaurant",
		restaurant_description = "Welcome to the most wonderful restaurant in the world. Our restaurant is above all others with the best food in the country and most quality service. Dining here is an expierence you can never forget.";
	
	function getPage() {
		let main_elm = createElement("main"),
				section_elm = createElement("section"),
					h2_elm = createElement("h2", heading_text),
					description_elm = createElement("p", restaurant_description);
		
		section_elm.append(h2_elm);
		section_elm.append(description_elm);
		
		main_elm.append(section_elm);
		
		return main_elm;
	}
	
	return {name, getPage}
})();



export {home_page}