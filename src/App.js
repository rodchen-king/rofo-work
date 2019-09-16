import React from 'react';
import './App.less';

import personIcon from "@/assets/img/dashboard/person.jpg";
import item1Icon from "@/assets/img/dashboard/item1.svg";
import item2Icon from "@/assets/img/dashboard/item2.svg";
import item3Icon from "@/assets/img/dashboard/item3.svg";
import item4Icon from "@/assets/img/dashboard/item4.svg";


function App() {
  return (
    <div className="app">
      <div className="main">

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
                <a className="nav-link active" href="#/Active">
                  <img className="rounded-circle" src={item1Icon} alt="" />
                  <span>主页</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Link">
                  <img className="rounded-circle" src={item2Icon} alt="" />
                  <span>公司组件沉淀</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Link">
                  <img className="rounded-circle" src={item3Icon} alt="" />
                  <span>知识分享</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/Disabled">
                  <img className="rounded-circle" src={item4Icon} alt="" />
                  <span>工作记录</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="aside_footer">

          </div>
        </div>

        {/* 右侧主要内容 */}
        <div className="content">

        </div>
      </div>
    </div>
  );
}

export default App;
