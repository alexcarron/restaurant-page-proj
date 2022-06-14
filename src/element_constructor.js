const createElement = function(name, content, attributes) {
	let element = document.createElement(name);
	
	if (typeof content !== 'undefined') {
		element.textContent = content;
	}
	
	if (typeof attributes !== 'undefined') {
		for (let attribute in attributes) {
			let attribute_content = attributes[attribute];
			element.setAttribute(attribute, attribute_content);
		}
	}
	
	return element
}

export default createElement