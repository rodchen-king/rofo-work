import React, { PureComponent } from 'react';
import { Form, Input } from 'antd';

// css & img
import styles from './index.module.less';
import logoIcon from '@/assets/img/logo.png';

// 公共组件 & 方法
import RButton from '@/components/RButton';

// 业务组件

// service & 枚举数据
import { loginAction } from '@/service/login';

const FormItem = Form.Item;

@Form.create()
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  submit = () => {
    const { form, handleAdd } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      loginAction(fieldsValue)
    });
  }

  render() {
    const { form } = this.props;

    return (
      <div className={styles.root}>
        <div class="row">
          <div class="col-sm">
            <img src={logoIcon} alt="" />
          </div>
          <div class="col-sm">
            <div className={styles.root_main}>
              <Form hideRequiredMark style={{ textAlign: 'left' }}>
                {/* 用户名 */}
                <FormItem
                >
                  {form.getFieldDecorator('username', {
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
                      autocomplete="off"
                      placeholder="用户名"
                    />
                  )}
                </FormItem>

                {/* 密码 */}
                <FormItem
                >
                  {form.getFieldDecorator('password', {
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
                      autocomplete="off"
                      placeholder="密码"
                    />
                  )}
                </FormItem>

                {/* 密码 */}
                <FormItem>
                  <RButton onClick={this.submit}>登陆</RButton>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
