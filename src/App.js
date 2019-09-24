import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.less';

// 路由菜单文件
import router from '@/routers/index';

// 引入img
import personIcon from "@/assets/img/dashboard/person.jpg"


function App() {
  return router.map(item => {
    if (item.path === '/user' && window.location.pathname.indexOf('/user') >= 0) {
      return (
        <div key={item.path} className="app">
          <div className="main">
          </div>
        </div>
      )
    } else if (item.path === '/' && window.location.pathname.indexOf('/user') < 0) {
      return (
        <div key={item.path} className="app">
          <div className="main">
            <Router>
              {/* 左侧按钮 */}
              <div className="aside">
                <div className="aside_top">
                  <img className="rounded-circle" src={personIcon} alt="" />
                  <p className="aside_top_name">
                    陈子龙
                  </p>
                  <p>
                    rodchen_king@outlook.com
                  </p>
                </div>
                <div className="aside_middle">
                  <ul className="nav flex-column">
                    {item.routes.map(router => 
                      <li key={router.path} className="nav-item">
                        <Link className="nav-link active" to={router.path}>
                          <img className="rounded-circle" src={router.icon} alt="" />
                          <span>{router.title}</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="aside_footer">
    
                </div>
              </div>
    
              {/* 右侧主要内容 */}
              <div className="content">
                {item.routes.map(router => <Route key={router.path} path={router.path} exact component={router.component} />)}
              </div>
          </Router>
          </div>
          <div id="modal-root"></div>
        </div>
      );
    }
  })
}

export default App;
