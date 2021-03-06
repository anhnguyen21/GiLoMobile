import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../Utils/Utils';
import { LoginTypes, SignUpTypes, ProfileTypes } from './action';

export const INITIAL_STATE = Immutable({
  loading: false,
  response: null,
  errorLogin: null,
  errorSignUp: null,
  dataProfile: null,
  token: null,
  type: '',
});

export const userLogin = (state, { response }) =>
  state.merge({ loading: true, errorLogin: null, type: 'User Login' });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    errorLogin: null,
    token: response,
    type: 'User login success',
  });

export const userLoginFailure = (state, { error }) =>
  state.merge({
    loading: false,
    errorLogin: error,
    type: 'User login failure',
  });

export const userLogout = (state) =>
  state.merge({
    token: null,
    response: null,
  });

export const userSignUp = (state, { response }) =>
  state.merge({ loading: true, errorSignUp: null, type: 'Sign up' });

export const userSignUpSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    errorSignUp: null,
    token: response.token,
    response: response.data,
    type: 'Sign up success',
  });
export const userSignUpFailure = (state, { error }) =>
  state.merge({
    loading: false,
    errorSignUp: error,
    type: 'failure',
  });

export const userProfile = (state, { response }) =>
  state.merge({ loading: true, errorSignUp: null, type: 'profile' });

export const userProfileSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    errorSignUp: null,
    token: response.data.id,
    dataProfile: response.data,
    type: 'profile up success',
  });
export const userProfileFailure = (state, { error }) =>
  state.merge({
    loading: false,
    errorSignUp: error,
    type: 'failure',
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
  [SignUpTypes.USER_SIGNUP]: userSignUp,
  [SignUpTypes.USER_SIGNUP_SUCCESS]: userSignUpSuccess,
  [SignUpTypes.USER_SIGNUP_FAILURE]: userSignUpFailure,

  [ProfileTypes.USER_PROFILE]: userProfile,
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,
  [ProfileTypes.USER_PROFILE_FAILURE]: userProfileFailure,
});

export default reducer;
