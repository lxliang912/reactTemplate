/*
 * file: App.js
 * author: lxliang
 * desc: 应用顶层实例
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Container from './views/Container';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    );
  }
}

export default App;
