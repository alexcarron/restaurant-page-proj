import createElement from '../element_constructor'

const contact_page = (function() {
	let name = "contact"

	function getPage() {
		let main_elm = createElement("main"),
				phone_num_section_elm = createElement("section", "", {id: "phone_num_section"}),
					phone_num_h2_elm = createElement("h2", "Phone Number"),
					phone_num_p_elm = createElement("p", "(291) 193-0123"),
				email_section_elm = createElement("section", "", {id: "email_section_elm"}),
					email_h2_elm = createElement("h2", "Email"),
					email_num_p_elm = createElement("p", "fake@email.com");
		
		phone_num_section_elm.append(phone_num_h2_elm);
		phone_num_section_elm.append(phone_num_p_elm);
		
		email_section_elm.append(email_h2_elm);
		email_section_elm.append(email_num_p_elm);
		
		main_elm.append(phone_num_section_elm);
		main_elm.append(email_section_elm);
		
		return main_elm
	}
	
	return {name, getPage};
})();


export {contact_page}