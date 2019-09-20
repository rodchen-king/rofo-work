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
import RMarkdown from '@/components/RMarkdown';

// 业务组件
import componentMd from './component.md';
import nameMd from './name.md';
import enumerMd from './enumer.md';
import codeMd from './code.md';

// service & 枚举数据


class Notice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
                <li class="list-group-item"><a rel="noopener noreferrer" target="_blank" href="/component">熟悉 业务运营平台代码 代码逻辑</a></li>
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
          <div className={styles.root_div_content}>
          <div class="card">
              <div class="card-header">
                1. 单文件格式
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <RMarkdown style={{background: 'red'}} source={componentMd} />
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card-header">
                2. 命名规范
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  a. react组件采用Pascal命名法 <span style={{color: 'red'}}>ThisIsAnApple </span>[具体名称由具体的业务决定]
                </li>
                <li class="list-group-item">
                  b. 组件内部变量，方法，参数，属性名  <span style={{color: 'red'}}>thisIsAnApple </span>
                  <RMarkdown source={nameMd} />
                </li>
                <li class="list-group-item">
                  c. 枚举类型采用 下划线+全体大写 <span style={{color: 'red'}}>ADD_METHOD </span> 【@/common】
                  <RMarkdown source={enumerMd} />
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card-header">
                3. 业务代码书写
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  a. 方法以命名（自我解释）代替注释，html代码则需要添加注释用于区分html结构。<span style={{color: 'red'}}>方法当前需要添加注释，一定时间以后会去掉 </span>
                </li>
                <li class="list-group-item">
                  b. <span style={{color: 'red'}}>代码不允许出现数字量</span>：所有的数字量需要使用枚举类型在枚举文件内定义。可以在创建文件夹：src/common/EnumerationData.js,然后在调用组件中引用。
                </li>
                <li class="list-group-item">
                  c. <span style={{color: 'red'}}>前端不允许出现过多的数据处理</span>：前端的数据处理只局限于：基于后台返回的数据结构进行转换，不存在基于多个api返回的数据进行组装。
                </li>
                <li class="list-group-item">
                  d. 不允许出现 if (hasChild === 1) 类似代码
                </li>
                <li class="list-group-item">
                  e. 对于数组的进行数据渲染，或者取值，判断长度，需要先判断当前数组是否不为空并且存在长度。
                </li>
                <li class="list-group-item">
                  f. 组件内部存在<span style={{color: 'red'}}>数据结构处理</span>的情况下，一方面需要添加注释，解释逻辑，二可以将公共的代码提取src/common/commonfunction中去。
                </li>
                <li class="list-group-item">
                  h. 代码书写采用es6代码风格，对于方法中的props, state属性引用采用解构书写方式。
                </li>
                <li class="list-group-item">
                  i. 页面初始化存在像后台发送请求获取数据的情况，则需要做loading页面处理。
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card-header">
                4. react代码书写
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  a. 禁止在shouldComponentUpdate或者componentWillUpdate方法中调用setState
                </li>
                <li class="list-group-item">
                  b. 不允许在render方法里进行数据处理，同时不允许进行state的更新。
                </li>
                <li class="list-group-item">
                  c. props需要进行验证，变量值props需要添加默认初始值。
                </li>
              </ul>
            </div>

            <div class="card">
              <div class="card-header">
                5. vs插件检查代码 （会进行代码检测）
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  vscode安装ESLint，写代码的同时可以检测当前文件是否符合提交规范，其中任何报错的地方都需要修改。
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={commitIcon} alt="" />
            代码提交
          </p>
          <li class="list-group-item">
            <RMarkdown source={codeMd} />
          </li>
        </div>
        <div className={styles.root_div}>
          <p>
            <img className={styles.root_div_img} src={planIcon} alt="" />
            成长计划
          </p>
          <div class="card">
            <div class="card-header">
              陈子龙
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                待添加
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-header">
              曹婷婷
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                待添加
              </li>
            </ul>
          </div>
          <div class="card">
            <div class="card-header">
              刘俊杰
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                待添加
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Notice;
