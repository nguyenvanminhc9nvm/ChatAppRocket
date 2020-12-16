import * as Effect from 'redux-saga/effects';
import {Alert} from 'react-native';
import * as loginActions from '../actions/loginActions';
import {loginService} from '../../services/LoginService';
import {ILoginRequestState} from '../../models/payloads/login';
import {BaseResponse} from '../../models/api/baseResponse';
import {ILoginResponse} from '../../models/api/login';

// Our worker Saga that logins the user
export default function* loginAsync(payload: ILoginRequestState) {
  yield Effect.put(loginActions.enableLoader());

  const response: BaseResponse<ILoginResponse> = yield Effect.call(
    loginService.loginUser,
    payload.user,
    payload.password,
  );
  //   //mock response
  //   const response = {success: true, data: {id: 1}, message: 'Success'};

  if (response.data.status === 'success') {
    console.log('login success');
    yield Effect.put(loginActions.onLoginResponse(response.data.data));
    yield Effect.put(loginActions.disableLoader());

    //yield call(navigationActions.navigateToHome);
  } else {
    yield Effect.put(loginActions.loginFailed());
    yield Effect.put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('BoilerPlate', response.data.message);
    }, 200);
  }
}
