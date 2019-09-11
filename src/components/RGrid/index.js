import React from 'react';
import PropTypes from 'prop-types'; 

// css & img
import './index.less';

class RGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }

  // 渲染函数
  render() {
    return (
      <div className="rgrid">
        <div><p>1</p></div>
        <div><p>2</p></div>
        <div><p>3</p></div>
      </div>
      
    );
  }
}

RGrid.propTypes = {
  type: PropTypes.oneOf(['primary', 'dashed', 'danger']),
  shape: PropTypes.oneOf(['circle', 'round']),
  onClick: PropTypes.func
}

export default RGrid;
