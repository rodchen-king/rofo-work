import http from '../http';

export const loginAction = (params, isShow) => {
  return http.post('/users/login', params, true)
};