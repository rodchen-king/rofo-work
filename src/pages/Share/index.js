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
import addIcon from '@/assets/img/share/add.svg';


// 公共组件 & 方法
import RButton from '@/components/RButton';
import RModal from '@/components/RModal';

// 业务组件
import Create from './Create';


// service & 枚举数据
import { getSharesAction } from '@/service/share'

class Share extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,

      shareList: [],
    };
  }

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentDidMount() {
    getSharesAction()
      .then(res => {
        if (res.code === 200) {
          this.setState({
            shareList: res.data
          })
        }
      })
  }

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ------------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */
  handleModalPopover = (flag) => {
    this.setState({
      modalVisible: !!flag
    })
  }

  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {
    const { shareList, modalVisible } = this.state;
  
    return (
      <div className={styles.root}>
        {/* top 切换内容 */}
        <div className={styles.root_switch}>
          <span>
            <RButton shape="round" onClick={this.handleModalPopover}>
              <img src={addIcon} className={styles.root_switch_add} alt="" />
              添加分享
            </RButton>
          </span>
          <span>
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
          </span>
        </div>
        {/* 表格主题内容 */}
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
              {shareList.map(item => 
                <tr key={item.id}>
                  <th width="50" scope="col">{item.id}</th>
                  <th width="150" scope="col">{item.title}</th>
                  <th width="100" scope="col">{item.author}</th>
                  <th width="150" scope="col">{item.share_date}</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      
        {/* modal内容 */}
        <Create 
          visible={modalVisible}
          handleModalPopover={this.handleModalPopover}

        />
      </div>
    );
  }
}

export default Share;
