import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthRouter from '@/routers/AuthRouter';
import Dashboard from '@/pages/Dashboard';
import './index.less';

// 引入img
import personIcon from "@/assets/img/dashboard/person.jpg";

class BasicLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      auth : false,     // 表示是否认证通过
      hasAuthed: false,  // 表示是否向服务器发送过认证请求
    };
  }
  
  componentDidMount() {
    if (!localStorage.getItem('userInfo')) {
      window.location.href = '/user';
    }
  }
  
  render () {
    return (
      <div className="app">
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
                  {this.props.routers.routes.map(router => 
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
              <AuthRouter path='/' component={Dashboard}></AuthRouter>
              {this.props.routers.routes.map(router => <Route key={router.path} path={router.path} exact component={router.component} />)}
            </div>
          </Router>
        </div>
        <div id="modal-root"></div>
      </div>
    );
  }
}

export default BasicLayout;
