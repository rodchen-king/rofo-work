import React from 'react';
import { Form, Input, DatePicker } from 'antd';

// 公共组件
import RModal from '@/components/RModal';

// service 
import { inertShareAction } from '@/service/share';

const FormItem = Form.Item;

@Form.create()
class Create extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHandler = () => {
    const { form, callBack } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;
      
      inertShareAction(fieldsValue)
        .then(res => {
          if (res.code === 200 ) {
            callBack();
          }
        })
        .catch(err => {
        })
    });
  }

  renderForm = () => {
    const { form } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };

   return <Form {...formItemLayout} hideRequiredMark style={{ textAlign: 'left' }}>
      {/* 分享主题 */}
      <FormItem label="分享主题">
        {form.getFieldDecorator('title', {
          rules: [
            { required: true},
            {
              max: 50,
              message: '最大不超过50',
            },
          ],
          validateTrigger: 'onChange',
        })(
          <Input
            placeholder="分享主题"
          />
        )}
      </FormItem>

      {/* 分享人 */}
      <FormItem label="分享人">
        {form.getFieldDecorator('author', {
          rules: [
            { required: true},
            {
              max: 50,
              message: '最大不超过50',
            },
          ],
          validateTrigger: 'onChange',
        })(
          <Input
            placeholder="分享人"
          />
        )}
      </FormItem>

      {/* 分享日期 */}
      <FormItem label="分享日期">
        {form.getFieldDecorator('share_date', {
          rules: [
          ],
          validateTrigger: 'onChange',
        })(
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        )}
      </FormItem>
    </Form>
  }
  
  render() {
    const { visible, handleModalPopover } = this.props;
  
    return (
      <RModal
        title="添加分享条目"
        visible={visible}
        onOk={this.onHandler}
        onCancel={() => {handleModalPopover(false);}}
      >
        {this.renderForm()}
      </RModal>
    );
  }
}

export default Create;
