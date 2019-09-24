import React from 'react';
import { BrowserRouter as Router, Redirect , Route } from "react-router-dom";
import './index.less';

function UserLayout(props) {
  let normarlRouters = props.routers.routes.filter(item => item.component);
  let redirectRouters = props.routers.routes.filter(item => item.redirect);

  return (
    <div className="app">
      <div className="main">
        <Router>
          {normarlRouters.map(router => <Route key={router.path} path={router.path} exact component={router.component} />)}
          {redirectRouters.map(router => <Redirect from={router.path} to={router.redirect} />)}
        </Router>
      </div>
    </div>
  );
}

export default UserLayout;
