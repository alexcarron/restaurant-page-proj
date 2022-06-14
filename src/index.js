import {createHeader} from './page-load'

document.body.onload = function() {
	document.body.append(createHeader());
}

