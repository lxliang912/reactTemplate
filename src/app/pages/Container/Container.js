/*
* file: App.js
* author: lxliang
* desc: 应用顶层实例
*/

import React from 'react';
import {
    withRouter,
    Switch,
    Route
} from 'react-router-dom';

import './Container.css';
// 路由列表
import routeList from '../../router/router';
// 导航栏组件
import Bar from '../Components/Bar';
// 通用工具库
import { utils } from '../../utils/util';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeIndex: 0,
            test: 'test',
        }
    }

    componentDidMount() {
        console.log(utils.isEmpty(''));

        //重新加载页面时初始化路由路径
        this.pushRouter(0);
    }

    // 切换路由
    changeRouter(index) {
        this.pushRouter(index);
    }

    // 封装路由跳转通用方法
    pushRouter(index) {
        if (index === 1) {
            this.props.history.push(routeList[index].url + '/' + 1);
        } else {
            this.props.history.push(routeList[index].url);
        }
    }

    render() {
        return (
            <div className="container">
                <Bar test={this.state.test} changeRouter={this.changeRouter.bind(this)} />
                <Switch>
                    {
                        routeList.map((item, index) => {
                            return (
                                <Route key={index} exact path={item.path} component={item.component} />
                            )
                        })
                    }
                </Switch>
            </div>
        );
    }
}

export default withRouter(Container);
