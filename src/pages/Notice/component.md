
```jsx
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import router from 'umi/router';
import {
  Row,
  Col,
  Card
} from 'antd';
import { handelAuth } from '@/utils/utils';

// css & img

// 公共组件 & 方法

// 业务组件

// service & 枚举数据

@Form.create()
@connect(({ loading, DemoDva }) => ({
  DemoDva,
  loading: loading.models.commoditylist,
}))
@Form.create()
class Demo extends PureComponent {
  state = {
  };

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */

  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */

  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */

  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */

  /* -------------------------------------------- 渲染函数 ------------------------------------------------ */

  render() {
    return (
      <div>
        Demo
      </div>
    );
  }
}

export default Demo;

```