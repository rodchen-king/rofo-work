import React from 'react';

// css & img
import styles from './index.module.less';

// 公共组件 & 方法
import RButton from '@/components/RButton';

// 业务组件
import Child from './Child';

// service & 枚举数据

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();
  }


  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */

  onClickTestRef = () => {
    console.log(this.myRef.current);
    // console.log(this.child);
  }

  /* -------------------------------------------- 纯函数组件 ------------------------------------------------- */

  onRef = ref => {
    this.child = ref;
  };

  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */

  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */

  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {
    console.log('父组件render');
    debugger
    return (
      <div className={styles.root}>
        <Child ref={this.myRef} />
        {/* <RenderElement ref={this.myRef} /> */}
        {/* <FancyButton ref={this.myRef}>Click me!</FancyButton>; */}
        <RButton onClick={this.onClickTestRef}>更新</RButton>
      </div>
    );
  }
}

const RenderElement = React.forwardRef((props, ref) => (<input type="text" placeholder="Hello World" ref={ref} />));


export default Study;
