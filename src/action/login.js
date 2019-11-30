import api from '../api/login';
import LoginTransformer from '../transformer/login';
import {NOT_SESSION_ERROR,GENERAL_ERROR} from '../common/constants';
import {saveGeneralError} from '../action/errorGeneral';
import generalErrorTransformer from '../transformer/generalError';
import { browserHistory } from 'react-router';
import CookiesConfiguration from '../functions/CookiesConfiguration';
import HttpRequest from '../functions/HttpRequest';
import { routeCodes } from '../common/routeConfig';
import Authentication from '../functions/Authentication';

const COMMON_POST = 'commonPost';

export const SET_UNAUTHORIZED_LAC_HEADERS = 'SET_UNAUTHORIZED_LAC_HEADERS';
export const SET_UNAUTHORIZED_LAC = 'SET_UNAUTHORIZED_LAC';

export const GET_LOGIN_ACTION_START = 'GET_LOGIN_ACTION_START';
export const GET_LOGIN_ACTION_ERROR = 'GET_LOGIN_ACTION_ERROR';
export const GET_LOGIN_ACTION_SUCCESS = 'GET_LOGIN_ACTION_SUCCESS';

function getLoginActionStart() {
    return {
      type: GET_LOGIN_ACTION_START,
    };
  }
  
  function getLoginActionError(error) {
    return {
      type: GET_LOGIN_ACTION_ERROR,
      error,
    };
  }
  
  function getLoginActionSuccess(data) {
    return {
      type: GET_LOGIN_ACTION_SUCCESS,
      data,
    };
  }
  
  function setUnauthorizedLACHeaders(headers) {
    return {
      type: SET_UNAUTHORIZED_LAC_HEADERS,
      headers
    };
  }
  
  function setUnauthorizedLAC() {
    return {
      type: SET_UNAUTHORIZED_LAC
    };
  }
  
  export function getLoginAsync(data) {
    return function (dispatch) {
      dispatch(getLoginActionStart()); 
      const jwt = CookiesConfiguration.getCookie('dra3j');
      const request = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          ['Content-Type']: 'application/json',
          Authorization: `Bearer ${ jwt }`
        },
        body: JSON.stringify(data)
      };
  
      api.getLoginAsync(request) //
      .then(response => {
          const statusCode = response.status;
          if(statusCode == 200 || statusCode == 202) {
            CookiesConfiguration.updateAuthenticationCookie(); 
            return response.json();
          } else if (statusCode === 401 || statusCode === 403) {
            dispatch(setUnauthorizedLACHeaders(response.headers))
            dispatch(setUnauthorizedLAC());
            return false;
          }else {
            return false;
          }
        })
      .then( data => dispatch(() => {
          if( data ) {  
            const trasformedData = LoginTransformer.transformLoginResponse(data);  
            if (trasformedData) {
              dispatch(getLoginActionSuccess(trasformedData));
            } else {
              dispatch(getLoginActionError(TRANSFORMATION_ERROR));
            const errorData = generalErrorTransformer.transformGeneralErrorResponse(data);
              if(errorData){
                dispatch(saveGeneralError(errorData));
              }else{
                browserHistory.push(routeCodes.GENERAL_ERROR);
              }
            }
          }
        }),
        error => dispatch(getLoginActionError(error))
      );
    };
  } 