import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.less';

// 引入img
import personIcon from "@/assets/img/dashboard/person.jpg";
import item1Icon from "@/assets/img/dashboard/item1.svg";
import item2Icon from "@/assets/img/dashboard/item2.svg";
import item3Icon from "@/assets/img/dashboard/item3.svg";
import item4Icon from "@/assets/img/dashboard/item4.svg";

// 引入组件
import Dashboard from '@/pages/Dashboard';
import Share from '@/pages/Share';

function List() {
  return <h2>List-Page</h2>;
}


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
                    <img className="rounded-circle" src={item1Icon} alt="" />
                    <span>主页</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/component">
                    <img className="rounded-circle" src={item2Icon} alt="" />
                    <span>公司组件沉淀</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/share">
                    <img className="rounded-circle" src={item3Icon} alt="" />
                    <span>知识分享</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#/Disabled">
                    <img className="rounded-circle" src={item4Icon} alt="" />
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
            <Route path="/component" component={List} />
            <Route path="/Share" component={Share} />
          </div>
          
      </Router>
      </div>
    </div>
  );
}

export default App;
