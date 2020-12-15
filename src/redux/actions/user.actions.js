import { userConstants } from '@redux/constants';
import { userService } from '@services';
import Router from 'next/router';
import { store } from '@redux/store';

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  return userService
    .login(username, password)
    .then((username) => {
      store.dispatch(success(username));
      Router.push('/people');
    })
    .catch((error) => error);

  function success(username) {
    return { type: userConstants.LOGIN_SUCCESS, payload: username };
  }
}

function logout() {
  userService.logout();
  store.dispatch({ type: userConstants.LOGOUT });

  Router.push('/');
}
