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
import { Link } from "react-router-dom";

// css & img
import styles from './index.module.less';
import smallbellIcon from '@/assets/img/dashboard/smallbell.svg';
import settingIcon from '@/assets/img/dashboard/setting.svg';
import frontendIcon from '@/assets/img/dashboard/1.webp';
import platformIcon from '@/assets/img/dashboard/2.webp';
import shareIcon from '@/assets/img/dashboard/3.webp';
import recordIcon from '@/assets/img/dashboard/4.webp';
import componetsIcon from '@/assets/img/dashboard/1.jpg';
import i2Icon from '@/assets/img/dashboard/2.jpg';




// 公共组件 & 方法
import RButton from '@/components/RButton';

// 业务组件

// service & 枚举数据


class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainCategody: {

      }
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
      <div className={styles.root}>
        {/* 搜索行内容 */}
        <div className={`${styles.root_top} row`}>
          <div className="col-sm">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="输入搜索内容" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className="col-sm">
            <span className={styles.root_top_span}>
              <img className={styles.root_top_img} src={smallbellIcon} alt="" />
            </span>
            <span className={styles.root_top_span}>
              <img className={styles.root_top_img} src={settingIcon} alt="" />
            </span>
            <span className={styles.root_top_span}>
              <RButton shape="round" type="danger">退出系统</RButton>
            </span>
          </div>
        </div>

        <div className={styles.root_middle}>
          <div class="row">
            <div class="col-sm-2">
              <div class="card shadow">
                <img src={frontendIcon} className="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    <Link className="nav-link active" to="/notice">
                      <span>前端须知</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card shadow">
                <img src={platformIcon} className="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    <Link className="nav-link active" to="/soft">
                      <span>业务运营平台开发</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card shadow">
                <img src={recordIcon} className="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    <Link className="nav-link active" to="/component">
                      <span>组件说明</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card shadow">
                <img src={shareIcon} className="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    <Link className="nav-link active" to="/share">
                      <span>知识分享</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card shadow">
                <img src={componetsIcon} className="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    <Link className="nav-link active" to="/">
                      <span>工作记录</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card shadow">
                <img src={i2Icon} className="card-img-top" alt="" />
                <div class="card-body">
                  <p class="card-text">
                    <Link className="nav-link active" to="/">
                      <span>待补充</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.root_footer}>
          <div className="row">
            <div className="col col-lg-4">
              <div class="card">
                <div class="card-header">
                  开发技能
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://v2-preview-ant-design-pro.netlify.com/">ant design pro (react + ant design + dva)官方文档</a> <br /> 
                  </li>
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://ant.design/docs/react/getting-started-cn">ant design官方文档</a> <br /> 
                  </li>
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/docs/getting-started.html">react官方文档</a> <br /> 
                  </li>
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.html.cn/archives/10111">React 新手学习指南 – 从 React 学习线路图说开去</a> <br /> 
                  </li>
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://juejin.im/post/5d3eca78e51d4561cb5dde12">你未必知道的49个CSS知识点</a> <br /> 
                  </li>
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://juejin.im/post/5d54e78be51d4561b072dce6">夯实JS主要知识点</a> <br /> 
                  </li>
                  <li class="list-group-item">
                    <a rel="noopener noreferrer" target="_blank" href="https://juejin.im/post/5d50dd4ff265da039a2879cd">ReactRouter-V5免费图文视频教程</a> <br /> 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4">
              <div class="card">
                <div class="card-header">
                  相关地址
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    业务运营代码：<a rel="noopener noreferrer" target="_blank" href="http://47.102.40.227/halo-group/halo-frontend">http://47.102.40.227/halo-group/halo-frontend</a> <br /> 
                    账号密码：admin/U1TGe8D4NsWCNkDI
                  </li>
                  <li class="list-group-item">
                    数字运营代码：<a rel="noopener noreferrer" target="_blank" href="http://47.102.40.227/mtof/mtof-frontend">http://47.102.40.227/mtof/mtof-frontend</a> <br /> 
                    账号密码：admin/123456
                  </li>
                  <li class="list-group-item">
                    运营平台：<a rel="noopener noreferrer" target="_blank" href="http://business-admin-test.lyilife.com">http://business-admin-test.lyilife.com</a>  <br />    
                    账号密码：admin/U1TGe8D4NsWCNkDI
                  </li>
                  <li class="list-group-item">
                    商家平台：<a rel="noopener noreferrer" target="_blank" href="https://business-test.lyilife.com">https://business-test.lyilife.com</a>  <br />    
                    账号密码：LD01838593/123456
                  </li>
                  <li class="list-group-item">
                    POS平台： <a rel="noopener noreferrer" target="_blank" href="https://posapi-test.lyilife.com">https://posapi-test.lyilife.com</a> <br />  
                    账号密码：pos001/123456
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4">
              <div class="card">
                <div class="card-header">
                  分享知识
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">webpack 【待认领】</li>
                  <li class="list-group-item">web响应式设计 【待认领】</li>
                  <li class="list-group-item">react高级使用 【待认领】</li>
                  <li class="list-group-item">react原理介绍 【待认领】</li>
                  <li class="list-group-item">如何书写javascript 【待认领】</li>
                  <li class="list-group-item">app开发介绍 【待认领】</li>
                  <li class="list-group-item">小程序开发介绍 【待认领】</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
