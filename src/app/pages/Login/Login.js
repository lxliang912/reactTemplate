/*
* file: Login.js
* author: lxliang
* desc: 登录页面
*/

import React from 'react';

import './Login.css';

class Login extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div>
                <input className="item" type="text" placeholder="输入用户名" />
                <input className="item" type="text" placeholder="输入密码" />
            </div>
        );
    }
}

export default Login;