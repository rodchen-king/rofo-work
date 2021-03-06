import React from 'react';
import ReactDOM from 'react-dom';

// css & img
import styles from './index.module.less';
import popoverIcon from '@/assets/img/common/popover.svg';
import popoverCloseIcon from '@/assets/img/common/popoverClose.svg';

// 公共组件
import RButton from '@/components/RButton';

class RModal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.className = styles.rmodal;
  }

  componentDidMount () {
    this.appendChild();
  }

  appendChild = () => {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(this.el);
  }

  removeChild = () => {
    const modalRoot = document.getElementById('modal-root');
    modalRoot && modalRoot.removeChild(this.el);
  }

  onClicClosePopoverModal = () => {
    const { onCancel } = this.props;
    onCancel();
  }

  componentWillUnmount() {
    this.removeChild();
  }

  render() {
    const { title, visible, onOk} = this.props;

    if (!visible) {
      return '';
    }

    return ReactDOM.createPortal(
      <div className={styles.rmodal_content}>
        <div className={styles.rmodal_title}>
          <span>
            <img className={styles.rmodal_img} src={popoverIcon} alt="" />
            {title}
          </span>
          <span>
            <img 
              onClick={this.onClicClosePopoverModal}
              className={styles.rmodal_img}
              src={popoverCloseIcon}
              alt="" 
            />
          </span>
        </div>
        <div className={styles.rmodal_body}>
          {this.props.children}
        </div>
        <div className={styles.rmodal_footer}>
          <RButton onClick={this.onClicClosePopoverModal} shape="circle">取消</RButton> &nbsp;&nbsp;
          <RButton onClick={onOk} type="primary" shape="circle">确定</RButton>
        </div>
      </div>,
      this.el,
    );
  }
}

export default RModal;
