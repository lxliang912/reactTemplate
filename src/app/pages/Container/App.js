/*
* file: app.js
* author: lxliang
* desc: 应用容器部分
*/

import React from 'react';
import {
  BrowserRouter,
  withRouter,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
// 路由列表
import routeList from '../../routes';
// 导航栏组件
import Bar from '../Components/Bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIndex: 0,
    }
  }

  componentDidMount() {
    this.pushRouter(0);
  }

  // 切换路由
  changeRouter(index) {
    this.pushRouter(index);
  }

  pushRouter(index) {
    this.props.history.push(routeList[index].path);
  }

  render() {
    return (
      <div className="container">
        <Bar changeRouter={this.changeRouter.bind(this)} />
        <Switch>
          {
            routeList.map((item, index) => {
              return (
                <Route key={index} path={item.path} component={item.component} />
              )
            })
          }
          <Redirect to={routeList[0].path}></Redirect>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
