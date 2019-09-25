import http from '../http';

export const loginAction = (params, isShow) => {
  http.post('/user/login', params, true)
    .then(res => {
      debugger
    })
    .catch(err => {
      debugger
    })
};