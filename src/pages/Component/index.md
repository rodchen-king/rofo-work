<h2 align="center">
  业务运营平台开发
</h2>

<h3 style="color: #1296DB">Install</h3>

```bash
git clone ssh://git@47.102.40.227:23/halo-group/halo-frontend.git    // 安装业务运营平台开发代码
cd halo-frontend
npm install
npm start
```

<br />
<h4 style="color: #1296DB;font-weight: bold">代码目录介绍</h4>

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

<br />
<h4 style="color: #1296DB;font-weight: bold">组件代码基本格式</h4>

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

  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

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

<br />

<h4 style="color: #1296DB;font-weight: bold">公共组件表格使用</h4>

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

  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

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