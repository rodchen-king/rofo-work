import React from 'react';
import PropTypes from 'prop-types';
import { createForm, formShape } from 'rc-form';

// css & img

class RFormItem extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {

    return (
      <div></div>
    );
  }
}

export default RFormItem;
