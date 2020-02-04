import React, {Component} from 'react';
import './login.less'
import logo from './image/header.jpg'
import { Form, Icon, Input, Button ,message} from 'antd';
const Item =  Form.Item;

class Login extends Component {
    handleSubmit =(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }else{
                message.error('错了啦!!!');
            }
        });

    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React项目：后台管理系统</h1>
                </header>

                <section className="login-content">
                    <h2>用户登录</h2>
                    <div className="form">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Item>
                                {getFieldDecorator('username', {
                                    rules: [
                                        { required: true, message: '要输入哦！' },
                                        { max: 8, message: '最多输入8位！' },
                                        { min: 4, message: '最少输入4位！' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '不要空格！' },
                                        ]   
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Item>
                            <Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                        { required: true, message: '请输入密码' },
                                        { pattern: /^[a-zA-Z0-9_^\s]{6}$/, message: '要6位数哦' },
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )}
                            </Item>
                            <Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </section>

            </div>
        )
    }
}

const WrappedHorizontalLoginForm = Form.create()(Login);

export default WrappedHorizontalLoginForm