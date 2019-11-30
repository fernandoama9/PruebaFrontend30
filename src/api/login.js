import 'es6-promise';
import 'whatwg-fetch';
import axios from 'axios';

function getLoginAsync(data) {
const url = `${ endpoints['login'] }`;

return fetch(url, data)
.then((response) => {
return response;
})
} 

export default {
    getLoginAsync
}; 