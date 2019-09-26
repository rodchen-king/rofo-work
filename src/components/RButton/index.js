import React from 'react';
import PropTypes from 'prop-types'; 

// css & img
import styles from './index.module.less';
import colorLoadingIcon from '@/assets/img/common/colorloading.svg';
import whiteLoadingIcon from '@/assets/img/common/whiteloading.svg';


/* basic information */
// padding: 9px 15px;
// font-size: 14px;
// font-height: 14px;
// height: 32px

/* 待传入属性值 */
// type: 主按钮(primary)，默认按钮（default），虚线按钮(dashed)，危险按钮(danger)
// shape: 圆角，椭圆
// loading

/* 自定义类型 */
// style

const prefixCls = 'rbtn';

class RButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getClassName = () => {
    const { type, shape, disabled, loading } = this.props;
    const classNamesArray = [`${styles[prefixCls]}`]

    type && classNamesArray.push(`${styles[prefixCls + '-' + type ]}`);
    shape && classNamesArray.push(`${styles[prefixCls + '-' + shape ]}`);
    disabled && classNamesArray.push(`${styles[prefixCls + '-' + disabled ]}`);
    loading && classNamesArray.push(`${styles[prefixCls + '-loading']}`)

    return classNamesArray.join(' ');
  }

  // 渲染函数
  render() {
    const { 
      children,
      disabled,
      loading,
      type,
      onClick,
      style
    } = this.props;

    // 不可点击
    if (disabled) {
      return (
        <button disabled className={this.getClassName()} type="button">
          <span disabled className={`${styles[prefixCls + '_span']}`}>
            {children}
          </span>
        </button>
      );
    } 

    return (
      <button style={style} onClick={onClick} className={this.getClassName()} type="button">
        <span disabled className={`${styles[prefixCls + '_span']}`}>
          <span>
          {loading && <img src={(!type || type === 'dashed') ? colorLoadingIcon : whiteLoadingIcon} className={styles.rotation} alt="loading" />}
          </span>
          <span>
            {loading && <span>&nbsp;</span>} {children}
          </span>
        </span>
      </button>
    );
  }
}

RButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'dashed', 'danger']),
  shape: PropTypes.oneOf(['circle', 'round']),
  onClick: PropTypes.func
}

export default RButton;
