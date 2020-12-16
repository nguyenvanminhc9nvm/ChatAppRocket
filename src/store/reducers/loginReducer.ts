import createReducer from './createReducer';
import * as types from '../actions/types';
import {ILoginState} from '../../models/reducers/login';
import {
  ILoginRequestState,
  ILoginResponseState,
} from '../../models/payloads/login';

const initialState: ILoginState = {
  isLoggedIn: false,
  authToken: '',
  user: '',
  password: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, payload: ILoginRequestState) {
    return {
      ...state,
      user: payload.user,
      password: payload.password,
    };
  },
  [types.LOGIN_LOADING_ENDED](state: ILoginState) {
    return {...state};
  },
  [types.LOGIN_RESPONSE](state: ILoginState, payload: ILoginResponseState) {
    return {
      ...state,
      authToken: payload.response.authToken,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
