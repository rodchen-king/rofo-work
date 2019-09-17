/**
 * 分享页面
 * @description 页面提供以下功能：
 *    1. 
 *    2. 
 *    3. 
 * @author 陈子龙
 * @datetime 2019-09-17
 */

import React, { PureComponent } from 'react';

// css & img
import styles from './index.module.less';
import homeIcon from '@/assets/img/share/home.svg';
import cardIcon from '@/assets/img/share/card.svg';
import d3Icon from '@/assets/img/share/3d.svg';


// 公共组件 & 方法
import RButton from '@/components/RButton';

// 业务组件


// service & 枚举数据
import { getData } from '@/service/dashboard'


class Share extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainCategody: {

      }
    };
  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentDidMount() {
    getData()
      .then(res => {
        debugger;
      })
  }

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ------------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {

    return (
      <div className={styles.root}>
        <div className={styles.root_switch}>
          <span className={styles.root_switch_span}>
            <img src={homeIcon} className={styles.root_switch_img} alt="" />
            表格视图
          </span>
          <span className={styles.root_switch_span}>
            <img src={cardIcon} className={styles.root_switch_img} alt="" />
            内容视图
          </span>
          <span className={styles.root_switch_span}>
            <img src={d3Icon} className={styles.root_switch_img} alt="" />
            3D视图
          </span>
        </div>
        <div className={styles.root_content}>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th width="50" scope="col">#</th>
                <th width="150" scope="col">分享主题</th>
                <th width="100" scope="col">分享人</th>
                <th width="150" scope="col">分享时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>ELK日志分析系统</td>
                <td>张磊</td>
                <td>2019-09-03 13:00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Share;
