import React from 'react';

// css & img

// 公共组件 & 方法

// 业务组件

// service & 枚举数据

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'child123'
    };
    console.info('子组件初始化');
    console.log('子组件contructor函数');
  }


  /* -------------------------------------------- 生命周期函数 -------------------------------------------- */

  componentDidMount() {
    console.log('子组件componentDidMount');
    // const { onRef } = this.props;
    // onRef(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('子组件getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate() {
    console.info('子组件更新');
    console.log('子组件shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('子组件componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('子组件componentWillUnmount');

  }


  /* -------------------------------------------- 数据处理方法 -------------------------------------------- */


  /* -------------------------------------------- 纯函数组件 ------------------------------------------------- */


  /* -------------------------------------------- 页面操作方法 -------------------------------------------- */


  /* -------------------------------------------- Popover内容相关代码 ------------------------------------- */


  /* -------------------------------------------- 渲染函数 ------------------------------------------------  */

  render() {
    console.log('子组件render');
    debugger
    return <input type="text" placeholder="Hello World" ref={this.props.innerRef} />
  }
}

export default React.forwardRef((props, ref) => <Child 
  innerRef={ref} {...props}
/>);
