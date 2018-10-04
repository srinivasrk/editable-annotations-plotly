import * as sapper from '../__sapper__/client.js';


import jquery from 'jquery';
window.$ = jquery;
window.jQuery = jquery;
import 'bootstrap';
import "bootstrap/scss/bootstrap.scss";

sapper.start({
	target: document.querySelector('#sapper')
});
