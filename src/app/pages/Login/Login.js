/*
* file: Login.js
* author: lxliang
* desc: 登录页面
*/

import React from 'react';
import { Button } from 'antd';

import './Login.css';

class Login extends React.Component {
    componentDidMount() {
        // 获取路由参数
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div>
                <input className="item" type="text" placeholder="输入用户名" />
                <input className="item" type="text" placeholder="输入密码" />
                <Button type="primary" block>Primary</Button>
            </div>
        );
    }
}

export default Login;