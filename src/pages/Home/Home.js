/*
* file: Home.js
* author: lxliang
* desc: 主页
*/

import React from 'react';
import './Home.css';

let images = {
    logo: require('../../resources/pic/logo.svg'),
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={images.logo} alt="" />
            </div>
        );
    }
}

export default Home;