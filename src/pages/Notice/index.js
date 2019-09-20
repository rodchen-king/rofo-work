/**
 * notice页面
 * @description 页面提供以下功能：
 *    1. 
 *    2. 
 *    3. 
 * @author 陈子龙
 * @datetime 2019-09-16
 */

import React, { PureComponent } from 'react';

// css & img
import styles from './index.module.less';
import introductionIcon from '@/assets/img/notice/introduction.svg';
import frameworkIcon from '@/assets/img/notice/framework.svg';
import tranningIcon from '@/assets/img/notice/tranning.svg';
import jsIcon from '@/assets/img/notice/js.svg';
import commitIcon from '@/assets/img/notice/commit.svg';
import planIcon from '@/assets/img/notice/plan.svg';
import productionsIcon from '@/assets/img/notice/productions.png';
import processIcon from '@/assets/img/notice/process.bmp';

// 公共组件 & 方法

// 业务组件

// service & 枚举数据


class Notice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainCategody: {

      }
    };
  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentDidMount() {}

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {

    return (
      <div className={styles.root}>
        {/* 项目介绍 */}
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={introductionIcon} alt="" />
            项目介绍
          </p>
          <div className={styles.root_div_content}>
            <div className="row">
              <div className="col-sm-6">
                <img className={styles.productions} src={productionsIcon} alt=""/>
              </div>
              <div className="col-sm-6">
                <dl className="row">
                  <dt className="col-sm-12">业务运营平台</dt>
                  <dd className="col-sm-12">
                    <p>基于绿叶当前的运营平台进行设计，封装成基础的中台运营的系统。</p>
                  </dd>
                  <dt className="col-sm-12">数字能力运营平台</dt>
                  <dd className="col-sm-12">
                    <p>数字化展示中心和应用的能力，相互之间的依赖关系，提供服务依赖和需求管理的系统</p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={frameworkIcon} alt="" />
            开发流程
          </p>
          <div className={styles.root_div_content}>
            <img className={styles.productions} src={processIcon} alt=""/>
          </div>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={tranningIcon} alt="" />
            Tranning
          </p>
          <div className={styles.root_div_content}>
            <div class="card">
              <div class="card-header">
                1. 熟悉主要业务线 【 陈子龙介绍 】
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">业务运营平台代码：<a rel="noopener noreferrer" target="_blank" href="http://47.102.40.227/halo-group/halo-frontend">http://47.102.40.227/halo-group/halo-frontend</a></li>
                <li class="list-group-item">绿叶运营平台代码：<a rel="noopener noreferrer" target="_blank" href="http://58.210.185.230:4379/lyzt/taihuweb_yunying">http://58.210.185.230:4379/lyzt/taihuweb_yunying</a></li>
              </ul>
            </div>
            <div class="card">
              <div class="card-header">
                2. 熟悉开发代码规范
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">详细内容查看开发规范</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-header">
                3. 熟悉提交代码规范
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">详细内容查看代码提交</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-header">
                4. 一周 feature story
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">熟悉 业务运营平台代码 代码逻辑</li>
                <li class="list-group-item">熟悉 公司业务组件沉淀 代码逻辑</li>
                <li class="list-group-item">熟悉 绿叶运营平台代码 代码逻辑</li>
                <li class="list-group-item"><span style={{color: 'red'}}>业务运营平台代码 实现商品中心的所有列表数据代码完成 【陈子龙讲解】</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={jsIcon} alt="" />
            开发规范
          </p>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={commitIcon} alt="" />
            代码提交
          </p>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={planIcon} alt="" />
            成长计划
          </p>
        </div>
      </div>
    );
  }
}

export default Notice;
