/*
* file: Login.js
* author: lxliang
* desc: 登录页面
*/

import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <input className="item" type="text" placeholder="输入用户名" />
                <input className="item" type="text" placeholder="输入密码" />
                <input className="item" type="button" value="登录" />
            </div>
        );
    }
}

export default Login;