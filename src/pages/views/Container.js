/*
 * file: App.js
 * author: lxliang
 * desc: 应用顶层实例
 */

import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

// 路由列表
import routeList from '../../router/router';
// 通用工具库
// import { utils } from '../../utils/util';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIndex: 0,
      test: 'test'
    };
  }

  componentDidMount() {
    //重新加载页面时初始化路由路径
    this.pushRouter(0);
  }

  // 切换路由
  changeRouter(index) {
    this.pushRouter(index);
  }

  // 封装路由跳转通用方法
  pushRouter(index) {
    this.props.history.push(routeList[index].url);
  }

  render() {
    return (
      <div className="container">
        <Switch>
          {routeList.map((item, index) => {
            return (
              <Route
                key={index}
                exact
                path={item.path}
                component={item.component}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Container);
