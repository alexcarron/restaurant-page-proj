import createElement from './element_constructor'

function createMenuPage() {
	let main_elm = createElement("main"),
			section_elm = createElement("section"),
				h2_elm = createElement("h2", "Menu"),
				menu_container_elm = createElement("div#menu"),
					menu = ["Spaghetti", "Chicken and Cheese Tortillia", "Red beans & Rice"];
		
	for (let item of menu) {
		menu_container_elm.append( createElement("p", item) )
	}
	
	section_elm.append(h2_elm);
	section_elm.append(menu_container_elm);
	
	main_elm.append(section_elm);
	
	return main_elm;
}

export {createMenuPage}