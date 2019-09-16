/**
 * dashboard页面
 * @description 页面提供以下功能：
 *    1. 
 *    2. 
 *    3. 
 * @author 陈子龙
 * @datetime 2019-09-16
 */

import React, { PureComponent } from 'react';

// css & img
import './index.less';
import smallbellIcon from '@/assets/img/dashboard/smallbell.svg';
import settingIcon from '@/assets/img/dashboard/setting.svg';

// 公共组件 & 方法
import RButton from '@/components/RButton';

// 业务组件


// service & 枚举数据


class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentDidMount() {
  }

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ------------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {

    return (
      <div className="root">
        {/* 搜索行内容 */}
        <div className="root_top row">
          <div className="col-sm">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="输入搜索内容" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="col-sm">
            <span>
              <img src={smallbellIcon} alt="" />
            </span>
            <span>
              <img src={settingIcon} alt="" />
            </span>
            <span>
              <RButton>退出系统</RButton>
            </span>
          </div>
        </div>

        <div className="root_middle">

        </div>
        <div className="root_footer">

        </div>
      </div>
    );
  }
}

export default Dashboard;
