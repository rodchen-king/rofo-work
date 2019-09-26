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
      isLogfailed: false,
      loading: false
    };
  }

  submit = () => {
    const { form } = this.props;
    this.setState({
      isLogfailed: false,
      loading: true
    })
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      loginAction(fieldsValue)
        .then(res => {
          this.setState({
            loading: false
          })
          if (res.code === 200 && res.data.length > 0) {
            localStorage.setItem('userInfo', JSON.stringify(res.data[0]))
            window.location.href = '/';
          } else {
            this.setState({
              isLogfailed: true
            })
          }
        })
        .catch(err => {
          debugger
        })
    });
  }

  render() {
    const { form } = this.props;
    const { isLogfailed, loading } = this.state;

    return (
      <div className={styles.root}>
        <div className="row">
          <div className="col-sm">
            <img className={styles.root_img} src={logoIcon} alt="" />
          </div>
          <div className="col-sm">
            <div className={styles.root_main}>
              <Form hideRequiredMark style={{ textAlign: 'left' }}>
                {/* 用户名 */}
                <FormItem>
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
                      autoComplete="off"
                      placeholder="用户名"
                    />
                  )}
                </FormItem>

                {/* 密码 */}
                <FormItem>
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
                      autoComplete="off"
                      type="password"
                      placeholder="密码"
                    />
                  )}
                </FormItem>
              </Form>
              <RButton loading={loading} onClick={this.submit}>登陆</RButton> <span className={styles.root_errorText}>{isLogfailed && '账号或者密码错误'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
