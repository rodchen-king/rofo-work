import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.less';

// 引入img
import personIcon from "@/assets/img/dashboard/person.jpg";
import homeIcon from "@/assets/img/dashboard/home.svg";
import noticeIcon from "@/assets/img/dashboard/notice.svg";
import componentIcon from "@/assets/img/dashboard/component.svg";
import softIcon from "@/assets/img/dashboard/soft.svg";
import shareIcon from "@/assets/img/dashboard/share.svg";
import recordIcon from "@/assets/img/dashboard/record.svg";

// 引入组件
import Dashboard from '@/pages/Dashboard';
import Share from '@/pages/Share';
import Notice from '@/pages/Notice';
import Component from '@/pages/Component';
import Soft from '@/pages/Soft';


function App() {
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
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    <img className="rounded-circle" src={homeIcon} alt="" />
                    <span>主页</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/notice">
                    <img className="rounded-circle" src={noticeIcon} alt="" />
                    <span>前端须知</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/soft">
                    <img className="rounded-circle" src={softIcon} alt="" />
                    <span>业务运营平台开发</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/component">
                    <img className="rounded-circle" src={componentIcon} alt="" />
                    <span>组件说明</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/share">
                    <img className="rounded-circle" src={shareIcon} alt="" />
                    <span>知识分享</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#/Disabled">
                    <img className="rounded-circle" src={recordIcon} alt="" />
                    <span>工作记录</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="aside_footer">

            </div>
          </div>

          {/* 右侧主要内容 */}
          <div className="content">
            <Route path="/" exact component={Dashboard} />
            <Route path="/soft" component={Soft} />
            <Route path="/component" component={Component} />
            <Route path="/share" component={Share} />
            <Route path="/notice" component={Notice} />
          </div>
          
      </Router>
      </div>
      <div id="modal-root"></div>
    </div>
  );
}

export default App;
