import {home_page} from './page_builders/home';
import {menu_page} from './page_builders/menu';
import {contact_page} from './page_builders/contact';
import {createHeader, createNav} from './page_builders/page-load';
import './styles/meyer-reset.css';
import './styles/main.css';

document.body.onload = function() {
	let webpage_content_container = document.createElement("main"),
		pages = {
			[home_page.name]: home_page.getPage(),
			[menu_page.name]: menu_page.getPage(),
			[contact_page.name]: contact_page.getPage(),
		};		
	
	function displayPage(page_name) {
		webpage_content_container.innerHTML = pages[page_name].innerHTML
	}
	
	document.body.append(createNav());
	document.body.append(createHeader());
	document.body.append(webpage_content_container);
	displayPage("home");
	
	for (let nav_link of document.querySelectorAll(".nav_link")) {
		nav_link.addEventListener("click", function() {
			let page_name = nav_link.getAttribute("data-page-name").toLowerCase()
			displayPage(page_name);
	   	})
	}
}

