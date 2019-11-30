/*api*/
import 'es6-promise';
import 'whatwg-fetch';

function getGeneralErrorAsync() {
	//const url = `${ endpoints['generalError'] }`; //al subir a appsdev
	const url = `https://private-4c4f50-homepage9.apiary-mock.com/error/general`;

	return fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		return json;
	});
}

export default {
  getGeneralErrorAsync
};