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
│   ├── common               # 通用方法和枚举数据
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

<h4 style="color: #1296DB;font-weight: bold">商品列表代码示例 【代码： <a target="_blank" href="http://47.102.40.227/halo-group/halo-frontend/blob/halo-branch/src/pages/Commodity/CommodityListManage/Merchandise.js">Merchandise.js</a>】</h4>

```jsx
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  Modal,
  message,
  Divider,
  Upload,
  Tag,
} from 'antd';

// css & img
import styles from './index.less';

// 公共组件 & 方法
import { handelAuth } from '@/utils/utils';
import Authorized from '@/components/Authorized/Authorized';
import StandardTable from '@/components/StandardTable';
import baseUrl from '@/services/baseUrl';
import ShowTable from '@/components/ShowTable';

// 业务组件
import ApprovalModal from './ApproveModal';

// service & 枚举数据

const FormItem = Form.Item;
const MenuItem = Menu.Item;
const { Option } = Select;
const { TextArea } = Input;

@Form.create()
@connect(({ loading, commoditylist }) => ({
  commoditylist,
  loading: loading.models.commoditylist,
}))
@Form.create()
class Merchandise extends PureComponent {
  state = {
    modalVisible: false,
    expandForm: false,
    selectedRows: [],

    recordObject: {},
    parentParams: {},
  };

  columns = [
    ...
  ];

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentWillMount() {
    ...
  }

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */

  loadData = params => {
    ...
  };

  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */

  // 审核商品弹出切换
  handleApprovalCommityModalVisible = (flag, record) => {
    ...
  };

  // 审核商品弹出框回调函数
  handleApprovalCommityCallback = (recordObject, fields) => {
    ...
  };

  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */

  // 表格选中多条数据的菜单处理程序
  handleMenuClick = e => {
    ...
  };

  // ShowTable组件选中多条数据的回调处理函数
  handleSelectRows = (rows, rowsKey) => {
    ...
  };

  // 商品启用禁用处理函数
  handleEnabledOrNot = (record, type) => {
    ...
  };

  // 跳转编辑页面
  navigateEditPage = (record, type) => {
    ...
  };

  // 搜索品类 (模糊查询)
  onClickSearchClass = value => {
    ...
  };

  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */

  // 查询菜单简单字段渲染
  renderSimpleFormFileds = () => {
    ...
  };

  // 查询高级菜单字段渲染
  renderAdvancedFormFileds = () => {
    ...
  };

  // 表格复选框选中之后的菜单操作
  menu = Authorized.check(() => handelAuth('/commodity/commoditylist//:uppershelf'),
    ...
  );


  /* -------------------------------------------- 渲染函数 ------------------------------------------------ */

  render() {
    const {
      selectedRows,
      modalVisible,
      recordObject,
      parentParams,
    } = this.state;

    const {
      dispatch,
      commoditylist: { ListData },
    } = this.props;

    // 传入审核商品组件方法
    const approvalCommityMethods = {
      callbackFunction: this.handleApprovalCommityCallback,
      handleModalVisible: this.handleApprovalCommityModalVisible,
    };

    return (
      <Fragment>
        <Card bordered={false}>
          <ShowTable
            dispatch={dispatch}

            parentParams={parentParams}
            featTableUrl="commoditylist/fetchList"

            data={ListData}
            columns={this.columns}

            renderSimpleFormFileds={this.renderSimpleFormFileds()}
            renderAdvancedFormFileds={this.renderAdvancedFormFileds()}

            isRowSelection
            menu={this.menu}
            selectedRows={selectedRows}
            handleSelectRows={this.handleSelectRows}
          />
        </Card>

        {/* 弹出框内容 */}
        <ApprovalModal
          {...approvalCommityMethods}
          modalVisible={modalVisible}
          values={recordObject}
        />
      </Fragment>
    );
  }
}

export default Merchandise;

```