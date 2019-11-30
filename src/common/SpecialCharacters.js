import { expandObjectKeys } from 'common/util';

export default class SpecialCharacters {

  constructor() {
    this.specialChars = expandObjectKeys({
      'Á,À,Ä,Â': {
        replaceWith: 'A'
      },
      'É,È,Ë,Ê': {
        replaceWith: 'E'
      },
      'Í,Ì,Ï,Î': {
        replaceWith: 'I'
      },
      'Ó,Ò,Ö,Ô': {
        replaceWith: 'O'
      },
      'Ú,Ù,Ü,Û': {
        replaceWith: 'U'
      },
      'á,à,ä,â': {
        replaceWith: 'a'
      },
      'é,è,ë,ê': {
        replaceWith: 'e'
      },
      'í,ì,ï,î': {
        replaceWith: 'i'
      },
      'ó,ò,ö,ô': {
        replaceWith: 'o'
      },
      'ú,ù,ü,û': {
        replaceWith: 'u'
      },
      'ñ': {
        replaceWith: 'n'
      },
      'Ñ': {
        replaceWith: 'N'
      },
      'ç': {
        replaceWith: 'c'
      },
      'Ç': {
        replaceWith: 'C'
      }
    });
  }
  
  replaceSpecialCharacters(str, characterList = []) {
    const strArray = str.split('');

    if (str == '' || characterList.length == 0) return str;

    try {
      let newStr = '';
      strArray.forEach(item => {
        newStr += characterList.includes(item) ? this.specialChars[item].replaceWith : item;
      }, this);
      
      return newStr;
    } catch(exception) {
      return str;
    }
  }
}
