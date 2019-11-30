import ReactDOM from 'react-dom';
import ip from 'ip';
import NodeRSA from 'node-rsa';
import { cardTypes, cardRegex,cardTypesNumber } from './constants';
import {
	rsaPublicReduxKey,
	rsaPrivateReduxKey
} from "./constants";
import ClientOAuth2 from 'client-oauth2';
import { oauth2LMLogin } from '../common/constants';

export function addZeroToOneSingleDecimal(text) {
	const decimalPointIndex = text.indexOf(".");

	if (decimalPointIndex != -1) {
		const decimalPart = text.substring(decimalPointIndex + 1);
		if (decimalPart.length === 1) {
			text = `${ text }0`;
		}
	}
	return text;
}

export function setMetaDescription(description) {
	try {
		let exitsMetaDescription = false;
		const metaList = document.getElementsByTagName("meta");
		
		for(let i = 0; i < metaList.length; i++) {
			const meta = metaList[i];
			if (meta.name === "description") {
				exitsMetaDescription = true;
				break;
			}
		}

		if (exitsMetaDescription) {
			const newMetaDescription = document.createElement("meta");
			newMetaDescription.name = "description";
			newMetaDescription.content = description;
			
			const head = document.getElementsByTagName("head")[0];
			let index = -1;
			for (let i = 0; i < head.childNodes.length; i++) {
				if (head.childNodes[i].tagName === "META" && head.childNodes[i].name === "description") {
					index = i;
					break;
				}
			}
			head.removeChild(head.childNodes[index]);
			head.appendChild(newMetaDescription);
		} else {
			const newMetaDescription = document.createElement("meta");
			newMetaDescription.name = "description";
			newMetaDescription.content = description;
			document.getElementsByTagName('head')[0].appendChild(newMetaDescription);
		}
		
	} catch(ex) { }
}

export function numberWithCommas(number) {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getPercentage(partX, base100) {
  return ((partX * 100) / base100).toFixed(2);
}

export function isOutsideClick(clickEvent, node) {
	if (!node) 
		return false;
	const result = !ReactDOM.findDOMNode(node) // eslint-disable-line react/no-find-dom-node
		.contains(clickEvent.target);
	return result;
}

export function getRandomKey() {
  return `${ new Date().valueOf() }${ Math.random() }`;
}

export function numberRange(m, n) {
	if (m > n) 
		return null;

	const array = [];
	for (let i = m; i <= n; i++) {
		array.push(i);
	}
  	return array;
}

export function maxMinnumberRange(m, n) {
	if (m > n) 
		return null;

	const array = [];
	for (let i = n; i >= m; i--) {
		array.push(i);
	}
	
  	return array;
}

export function getZeroPaddedNumber(number) {
  return number > 9 ? number : `0${ number }`;
}

export function arrayMax(arr) {
	return arr.reduce((acc, next) => {
		return Math.max(acc, next);
	});
}

export function arrayMin(arr) {
	return arr.reduce((acc, next) => {
		return Math.min(acc, next);
	});
}

export function capitalizeFirstLetter(value) {
	return value.replace(/\w\S*/g, (text) => {
		return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	});
}

export function getPageLeft(el) {
	if (!el) {
		return 0;
	}
	const rect = el.getBoundingClientRect();
	const docEl = document.documentElement;
	return rect.left + (window.pageXOffset || docEl.scrollLeft || 0);
}

export function getCreditCardType(cardNumber) {
	const matchedKey = Object.keys(cardRegex).find(cardKey => cardRegex[cardKey].test(cardNumber));
	return cardTypes[matchedKey];
}

export function getCreditCardTypeNumber(cardNumber) {
	const matchedKey = Object.keys(cardRegex).find(cardKey2 => cardRegex[cardKey2].test(cardNumber));
	return cardTypesNumber[matchedKey]
}

export function replaceAll(target, search, replacement) {
  return target.split(search).join(replacement);
}

export function calculateWordDimensions(text, classes) {
  classes = classes || [];

	const div = document.createElement('div');
	div.setAttribute('class', classes.join(' '));
	div.setAttribute('id', 'hiddenDiv');
	div.innerHTML = text;
	document.body.appendChild(div);
  const dimensions = { width: document.getElementById('hiddenDiv').offsetWidth, height: document.getElementById('hiddenDiv').offsetHeight };
  div.parentNode.removeChild(div);
	return dimensions;
}

export function expandObjectKeys(obj) {
  const keys = Object.keys(obj);  

  try {
    for(let i = 0; i < keys.length; i++) {
      const key = keys[i],
            subKeys = key.split(','),
            content = obj[key];
      
      if (subKeys.length > 1) {
        subKeys.forEach(item => obj[item] = content);
        delete obj[key];
      }      
    }
  } catch(exception) {
    return false;
  }

  return obj;  
}

export function removeMiddleSpaces(text) {	
	text = text.trim();
	let arrayText = text.split(/[\s\t]/);
	let correctArrayText = arrayText.filter(item => !!item);
	
	let nextValue = '';
	correctArrayText.forEach((item, index) => {
		nextValue += item + (index !== correctArrayText.length - 1 ? ' ' : '');
	});

	return nextValue;
}

export function encryptPassword(value) {
	const encryptingBase = 'base64';
	
	let key = new NodeRSA();
	key.importKey({
		n: new Buffer(if1Pw3, encryptingBase),
		e: 65537
	});
	key.setOptions({encryptionScheme: 'pkcs1'});
	const encryptedPassword = key.encrypt(value, encryptingBase);
	return (encryptedPassword) ? encryptedPassword : false;
}

export function encryptReduxSide(value) {
	const encryptingBase = 'base64';
	
	const key = new NodeRSA();
	key.importKey(rsaPublicReduxKey);
	const encryptedValue = key.encrypt(value, encryptingBase);
	return (encryptedValue) ? encryptedValue : false;
}

export function decryptReduxSide(encryptedValue) {
	const decryptingBase = 'json';
	
	const key = new NodeRSA();
	key.importKey(rsaPrivateReduxKey);
	const value = key.decrypt(encryptedValue, decryptingBase);
	return (value) ? value : false;
}

/** Starting of Enrollment functions */

export function greatherThan2(date) {
	var moment = require('moment');
	
	try {
		return moment(date).isBefore(moment().subtract(2, 'y'));
	} catch(e) {
		return false;
	}
}

export function underAge(date) {
	var moment = require('moment');
	
	try {
		const nextDate = moment(date);
		const newValue = moment().diff(nextDate, 'years');//nextDate.fromNow(); //.add(18, 'y');
		return newValue < 18;//!newValue.isBefore(moment());
	} catch(e) {
		return false;
	}
}

/** Ending of enrollment functions */

/**
 * receive a 12:45:55 time and returns and string
 * in the format 12h 45mm 55s 
 * @param {time} string
 */
export function formatTime(time) {
	let response = null;
	
	if (time) {
		const array = time.split(':');

		if (array[0]) {
			response = `${ array[0] }h`;
		}
		if (array[1]) {
			response += ` ${ array[1] }m`;
		}
		if (array[2]) {
			response += ` ${ array[2] }s`;
		}
	}
	return response;
}

/**
 * Return OAuth2 Object depending of the type
 * @param {type} string
 */

export function getOAuth2Object(type, state = '') {
	if (type === 'lmLogin') {
		const oauth2Obj = new ClientOAuth2({
			authorizationUri: oauth2LMLogin.authorizeUrl,
      clientId: oauth2LMLogin.clientID,
      redirectUri: oauth2LMLogin.redirectUrl,
			scopes: oauth2LMLogin.scopes,
			state: state
		});
		return oauth2Obj;
	} /*else { // default
		const oauth2Obj = new ClientOAuth2({
			authorizationUri: oauth2LMLogin.authorizeUrl,
      clientId: oauth2LMLogin.clientID,
      redirectUri: oauth2LMLogin.redirectUrl,
			scopes: oauth2LMLogin.scopes,
			state: state
		});
		return oauth2Obj;
	}*/
}

export function myBrowser(){
	let ua= navigator.userAgent;
	let tem;
	let M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

	if(ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/iPod/i)){
		
		if(/CriOS/i.test(ua)){
		return "Chrome"; //ios
		}

	}else {
		//Internet explorer
		if(/trident/i.test(M[1])){
			tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
			tem = ['msie', (tem[1] || '')]
			return tem[0];
		}

		//Opera o Edge
		if( M[1] === 'Chrome' ){
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if(tem!= null){
				tem = tem.slice(1).join(' ').replace('OPR', 'Opera');
				tem = tem.split(' ');
				return tem[0];
			}
		}

		//Chrome, Firefox o Safari
		M= M[2] ? [ M[1], M[2] ]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem = ua.match(/version\/(\d+)/i))!= null){
			M.splice(1, 1, tem[1]);
		}
		return M[0];

	}

}

export function addAtributesToObject(object, attributes) {
  const response = object;
  Object.keys(attributes).forEach(attribute => response[attribute] = attributes[attribute]);
  return response;
}