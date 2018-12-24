/*
* file: App.js
* author: lxliang
* desc: 应用程序容器，用于组装应用
*/

import React from 'react';
import {
  withRouter,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
// 路由列表
import routeList from '../../routes';
// 导航栏组件
import Bar from '../Components/Bar';
import { utils } from '../../utils/util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIndex: 0,
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
        <Bar changeRouter={this.changeRouter.bind(this)} />
        <Switch>
          {
            routeList.map((item, index) => {
              return (
                <Route key={index} exact={true} path={item.path} component={item.component} />
              )
            })
          }
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
