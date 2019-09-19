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
import http from '@/service/http'
import ReactMarkdown from 'react-markdown';
import CodeBlock from './codeBlock';

// css & img
import styles from './index.module.less';

// 公共组件 & 方法

// 业务组件
import AppMarkdown from './index.md';

// service & 枚举数据

const md = '### 基本用法 \n ```\n<template>\n  <vue-calendar :week-label-index="0" />\n</template>\n```\n\n' + 
'\n### 方法参数 \n ```\n<template>\n  <vue-calendar :week-label-index="0" />\n</template>\n```';

class Notice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };

  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentDidMount() {
    http.get(AppMarkdown)
    .then(text => this.setState({markdown: text}));
  }

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {
    const { markdown } = this.state;

    return (
      <div className={styles.root}>
        <ReactMarkdown
          className="markdown-body"
          source={markdown}
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
