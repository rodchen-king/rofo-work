import React, { Component } from 'react'
import { withRouter } from 'react-router'

class AuthRouter extends Component {
  render() {  
    const isLogged = localStorage.getItem('userInfo') ? true : false;
  
    if (!isLogged) {
      window.location.href = '/user/login';
    }

    return <div></div>;
  }
}

export default withRouter(AuthRouter); 