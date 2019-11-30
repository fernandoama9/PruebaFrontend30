/*action*/
import api from '../api/generalError';
import GeneralErrorTransformer from '../transformer/generalError';

export const SAVE_GENERAL_ERROR = 'SAVE_GENERAL_ERROR';
export const SET_GENERAL_ERROR = 'SET_GENERAL_ERROR';

export function saveGeneralError(data) {
  return {
    type: SAVE_GENERAL_ERROR,
    data
  };

}

export function setGeneralError() {
  return {
    type: SET_GENERAL_ERROR,
    
  };
}