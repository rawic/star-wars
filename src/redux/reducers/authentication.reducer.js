import { userConstants } from '../../constants/user.constants';

export const authentication = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
