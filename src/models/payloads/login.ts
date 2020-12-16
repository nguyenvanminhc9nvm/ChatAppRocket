import {ILoginResponse} from '../api/login';

export interface ILoginRequestState {
  type: String;
  user: string;
  password: string;
}

export interface ILoginResponseState {
  type: String;
  response: ILoginResponse;
}
