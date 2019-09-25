import React, { PureComponent } from 'react';
import { Button } from 'antd';

// css & img
import styles from './index.module.less';
import logoIcon from '@/assets/img/logo.png';

// 公共组件 & 方法

// 业务组件

// service & 枚举数据


class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <div className={styles.root}>
        <div class="row">
          <div class="col-sm">
            <img src={logoIcon} alt="" />
          </div>
          <div class="col-sm">
          <Button type="primary">Button</Button>       
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
