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
import expandIcon from '@/assets/img/components/expand.svg';
import closeIcon from '@/assets/img/components/close.svg';

// 公共组件 & 方法
import RMarkdown from '@/components/RMarkdown';

// 业务组件

// service & 枚举数据


class Component extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'ShowTable',
      isExpand: false
    };
  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {
    const { isExpand, activeItem } = this.state;

    let mdFile = require(`./${activeItem}.md`).default;

    return (
      <div className={styles.root}>
        <div className={`${styles.root_header} ${!isExpand ? styles.root_header_hidden : ''}`}>
          <div className={`card ${!isExpand ? styles.card_hidden : ''}`}>
            <div className="card-header">
              组件开发
            </div>
            <div className="list-group">
              <button 
                className={`list-group-item list-group-item-action ${activeItem === 'ShowTable' ? 'active' : ''}`}
                onClick={() => {
                  this.setState({
                    activeItem: 'ShowTable'
                  })
                }}
                type="button"
              >
                ShowTable
              </button>
            </div>
          </div>
          <br />
          <div className={`card ${!isExpand ? styles.card_hidden : ''}`}>
            <div className="card-header">
              系统说明
            </div>
            <div className="list-group">
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    activeItem: 'modal'
                  })
                }}
                className={`list-group-item list-group-item-action ${activeItem === 'modal' ? 'active' : ''}`}
              >
                modal
              </button>
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    activeItem: 'service'
                  })
                }}
                className={`list-group-item list-group-item-action ${activeItem === 'service' ? 'active' : ''}`}
              >
                service
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.toggle}
          onClick={() => {
            this.setState({
              isExpand: !isExpand
            })
          }}
          src={isExpand ? closeIcon : expandIcon}
          alt=""
        />
        <RMarkdown source={mdFile} />
      </div>
    );
  }
}

export default Component;
