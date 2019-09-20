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
import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeBlock';

// css & img
import styles from './index.module.less';

// 公共组件 & 方法

// 业务组件
import md from './index.md';

// service & 枚举数据


class Notice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };

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
        <ReactMarkdown
          className="markdown-body"
          source={md}
          escapeHtml={false}
          renderers={{
            code: CodeBlock,
          }}
        />
      </div>
    );
  }
}

export default Notice;
