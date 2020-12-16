import {api} from './api';

export const loginService = {
  loginUser: function (user: string, password: string) {
    return api.post('/login', {user, password});
  },
};
