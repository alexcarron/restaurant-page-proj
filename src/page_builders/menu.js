import createElement from '../element_constructor'

const menu_page = (function() {
	let name = "menu",
		heading_text = "Menu",
		menu = ["Spaghetti", "Chicken and Cheese Tortillia", "Red beans & Rice"];
	
	function getPage() {
		let main_elm = createElement("main"),
				section_elm = createElement("section"),
					h2_elm = createElement("h2", heading_text),
					menu_container_elm = createElement("div", "", {id: "menu"});
			
		for (let item of menu) {
			menu_container_elm.append( createElement("p", item) )
		}
		
		section_elm.append(h2_elm);
		section_elm.append(menu_container_elm);
		
		main_elm.append(section_elm);
		
		return main_elm
	}
	
	return {name, getPage};
})();

export {menu_page}