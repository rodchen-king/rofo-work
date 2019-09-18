import React, { PureComponent } from 'react';

// 公共组件
import RModal from '@/components/RModal';

class Share extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    const { visible, handleModalPopover } = this.props;
  
    return (
      <RModal
        title="添加分享条目"
        visible={visible}
        onOk={() => {}}
        onCancel={() => {handleModalPopover(false);}}
      >
        <div>
          sdfg
        </div>
      </RModal>
    );
  }
}

export default Share;
