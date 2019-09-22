<h2>
  ShowTable 表格说明
</h2>

<br />

##### 功能说明

```bash
快速开发运营平台列表主数据结构开发
```

<br />

##### 代码示例 

<h6 style="line-height: 30px;color: #1296DB;font-weight: bold">商品列表代码示例 【代码： <a target="_blank" href="http://47.102.40.227/halo-group/halo-frontend/blob/halo-branch/src/pages/Commodity/CommodityListManage/Merchandise.js">Merchandise.js</a>】</h6>

```jsx
// 公共组件 & 方法
import ShowTable from '@/components/ShowTable';

...

<ShowTable
  dispatch={dispatch}
  data={ListData}
  columns={this.columns}
  featTableUrl="commoditylist/fetchList"

  parentParams={parentParams}
  renderSimpleFormFileds={this.renderSimpleFormFileds()}
  renderAdvancedFormFileds={this.renderAdvancedFormFileds()}

  isRowSelection
  menu={this.menu}
  selectedRows={selectedRows}
  handleSelectRows={this.handleSelectRows}
/>
```

<br />

##### 说明文档

<style style="css">
  table {
    background: #fff;
    margin-top：20px;
  }

  thead {
    background: rgba(0, 0, 0, 0.02);
  }

  .table thead th {
    border-color: #ebedf0;
  }

  tr > td:nth-child(1) {
    color: rgb(0, 164, 219);
    font-weight: bold;
  }

  tr > td:nth-child(2) {
    color: rgb(227, 17, 108);;
    font-weight: bold;
  }

  tr > td:nth-child(4) {
    color: #c41d7f;
    font-weight: bold;
  }
</style>

<table class="table">
  <thead>
    <tr>
      <th width="25%" scope="col">属性</th>
      <th width="20%" scope="col">是否必须</th>
      <th width="25%" scope="col">说明</th>
      <th width="15%" scope="col">类型</th>
      <th width="15%" scope="col">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dispatch 【固定写法，父子组件数据传递】</td>
      <td>true</td>
      <td>table组件需要通过dispatch进行dva数据处理</td>
      <td>String</td>
      <td>无</td>
    </tr>
    <tr>
      <td>featTableUrl</td>
      <td>true</td>
      <td>dva请求地址</td>
      <td>String</td>
      <td>无</td>
    </tr>
    <tr>
      <td>data</td>
      <td>true</td>
      <td>dva数据State</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>columns</td>
      <td>true</td>
      <td>表格字段</td>
      <td>Array</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>parentParams</td>
      <td>false</td>
      <td>dva数据查询的参数</td>
      <td>Object</td>
      <td>无</td>
    </tr>
    <tr>
      <td>renderSimpleFormFileds</td>
      <td>false</td>
      <td>表格上方参数简单查询字段显示</td>
      <td>Array</td>
      <td>无</td>
    </tr>
    <tr>
      <td>renderAdvancedFormFileds</td>
      <td>false</td>
      <td>表格上方参数复杂查询字段显示</td>
      <td>Array</td>
      <td>无</td>
    </tr>
    <tr>
      <td>isRowSelection</td>
      <td>false</td>
      <td>是否启用复选框</td>
      <td>true/false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>menu</td>
      <td>false</td>
      <td>表格选中数据之后的菜单操作</td>
      <td>Object</td>
      <td>无</td>
    </tr>
    <tr>
      <td>selectedRows</td>
      <td>根据isRowSelection决定，<br />isRquire: isRowSelection</td>
      <td>选中数据的key值数组</td>
      <td>Array</td>
      <td>无</td>
    </tr>
    <tr>
      <td>handleSelectRows</td>
      <td>根据isRowSelection决定，<br />isRquire: isRowSelection</td>
      <td>组件选中多条数据的回调处理函数</td>
      <td>function</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

<br />

###### renderSimpleFormFileds & renderAdvancedFormFileds 【具体代码可以参考当前待修改文件进行修改】

```jsx
renderSimpleFormFileds = () => {
    const {
      commoditylist: { AllClass, paramsQueryObject },
    } = this.props;

    return [
      {
        label: formatMessage({ id: 'public.head.proName' }),    // 查询名称
        fieldDecorator: 'keyWord',                              // 查询字段key
        renderContent: (                                        // 具体form标签
          <Input allowClear placeholder={formatMessage({ id: 'public.head.proName' })} />
        ),
      },
      {
        label: formatMessage({ id: 'commodity.category.goodsclass' }),
        fieldDecorator: 'inClassIds',
        renderContent: (
          <Select
            allowClear
            mode="multiple"
            placeholder={formatMessage({ id: 'public.set.PleaseChoose' })}
            style={{ width: '100%' }}
            filterOption={false}
            onSearch={this.onClickSearchClass}
            notFoundContent={null}
          >
            {AllClass.map(item => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        ),
      },
    ];
  };
```

<br />

###### menu 【具体代码可以参考当前待修改文件进行简单复制】

```jsx
  // 表格复选框选中之后的菜单操作
  menu = Authorized.check(() => handelAuth('/commodity/commoditylist//:uppershelf'),
    <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
      <MenuItem key="enabled">
        {formatMessage({ id: 'commodity.commodityList.allenabled' })}
      </MenuItem>
      <MenuItem key="disabled">
        {formatMessage({ id: 'commodity.commodityList.alldisabled' })}
      </MenuItem>
    </Menu>
  );
```

<br />
