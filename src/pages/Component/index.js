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

// 公共组件 & 方法
import RMarkdown from '@/components/RMarkdown';

// 业务组件
import md from './index.md';

// service & 枚举数据


class Component extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {
    return (
      <div className={styles.root}>
        <RMarkdown source={md} />
      </div>
    );
  }
}

export default Component;
