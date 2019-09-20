
```jsx

...

// css & img             【命名以Icon截止】
import commitIcon from '@/assets/img/notice/commit.svg';

// 公共组件 & 方法      【调用系统内的公用组件以及公用方法】
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ButtonPermission from '@/components/ButtonPermission';

// 业务组件             【调用当前模块内的功能组件】
import CreateDomainForm from './CreateDomainForm';

// service & 枚举数据   【调用service文件以及枚举数据】
import { removeDomain, updateDomain } from '@/services/capability/domain';
import ENUMERATIONDATA from '@/common/EnumerationData';

const { ACCOUNT_STATUS } = ENUMERATIONDATA;

...

  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  /* -------------------------------------------- 数据处理方法 【命名：数据处理以动词开始】---------------- */
  
   /** 获取树结构数据
   *
   * @description 树结构数据的获取分为下面四种
   *    1. 页面初始加载
   *        a. 能力域组存在的情况下，页面显示当前能力域组第一条的数据，并且树组件要选中此条的数据，
   *        b. 能力组不存在能力域存在的情况下，页面显示和数组件的行为类似上面选中显示能力域里的第一条数据
   *        c. 二者都不存在的情况下，则显示空
   *    2. 当前页面添加完（能力域/能力域组）之后，页面显示当前添加的数据，并且树组件要选中当前添加的数据,
   *    3. 删除数据之后页面数据重新加载，然后按照1的行为获取数据
   *    4. 更新数据页面重新加载，页面显示的数据和树组件选中的数据保持不变
   *
   * @param {number} type: 数据获取方式，取值 1/2/3/4，分别对应上面的4中方式
   * @param {object} addReturnObject: 描述中的第二种情况下参数才有值，参数传入type为能力域组还是能力域
   */
  getData = (type, addReturnObject) => {
    ...
  };

  /** 树结构前端数据处理方法
   *
   * @description
   *    1. ant design 树组件显示需要title/key/value等属性，需要前端二次处理数据。
   *    2. 对于无能力域的能力域组，，前端添加一个无能力域子节点，用于展示。
   *
   * @param {object} treeData: 后台返回的数据源
   */
  formatTreeData = treeData => {
    ...
  };

  /* -------------------------------------------- Popover内容相关代码 【以render开头】 ------------------- */


  // 新增能力域页面弹出切换 【handle*******ModalVisible】
  handleAddCapabilityDomainModalVisible = () => {
    ...
  };

  // 添加能力域的回调函数 【handle*******Callback】
  handleAddCaoabilityDomainCallback = () => {
    ...
  };

  /* -------------------------------------------- 页面操作方法 【命名遵循下面说明】----------------------- */

  // 点击事件方法【onClick开头】 onClickEditTreeNode

  // 选中事件方法【onSelect开头】 onSelectTreeNode

  // 页面跳转方法【navigate***page开头】 navigateHomePage

  // 页面中需要方法支持的数据获取【动词开头，视情况而定】 getSelectKeysArray

  /* -------------------------------------------- 纯函数组件 ---------------------------------------------- */

  // 渲染左侧树结构元素
  renderTreeElement = data => {
    ...
  };

  // 渲染树节点title重写属性
  renderNodeTitle = (node, isability) => (
    ...
  );

  /* -------------------------------------------- 渲染函数 ------------------------------------------------ */

  render() {

    // 传入新增能力域 组件方法 【****Methods】
    const addCapabilityDomainParentMethods = {
      callbackFunction: this.handleAddCaoabilityDomainCallback,
      handleModalVisible: this.handleAddCapabilityDomainModalVisible,
    };

    return (
      <div>
      </div>
      
      {/* 弹出框内容 */}
      {addCapabilityDomainGroupModalVisible && (
        <CreateGroupForm
          {...addCapabilityDomainGroupParentMethods}
          modalVisible={addCapabilityDomainGroupModalVisible}
        />
      )}
    )
  }
 ...

```