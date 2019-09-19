/**
 * Component页面
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
import RButton from '@/components/RButton';

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

      </div>
    );
  }
}

export default Notice;
