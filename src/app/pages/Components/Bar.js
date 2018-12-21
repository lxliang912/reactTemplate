/*
* file: Bar.js
* author: lxliang
* desc: 导航栏组件，作为通用组件
*/

import React from 'react';

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curSelectTab: 0,
            tabList: [{
                name: 'tab1',
                tab_n: require('../../resources/pic/tab_home.png'),
                tab_p: require('../../resources/pic/tab_home_selected.png'),
            }, {
                name: 'tab2',
                tab_n: require('../../resources/pic/tab_extension.png'),
                tab_p: require('../../resources/pic/tab_extension_selected.png'),
            }, {
                name: 'tab3',
                tab_n: require('../../resources/pic/tab_personal.png'),
                tab_p: require('../../resources/pic/tab_personal_selected.png'),
            }]
        }
    }

    componentDidMount() {

    }

    selectTab(index) {
        this.setState({
            curSelectTab: index,
        });

        this.props.changeRouter(index);
    }

    render() {
        return (
            <div className='pos-fix left0 right0 bottom0 padding5 dis-flex flex-center bt1-bar'>
                {this.state.tabList.map((item, index) => {
                    return (
                        <div className='flex1' key={item.name} onClick={this.selectTab.bind(this, index)}>
                            <img className='width25' src={this.state.curSelectTab === index ? item.tab_p : item.tab_n} alt="" />
                            <p className={`${this.state.curSelectTab === index ? 'fg-409EFF' : 'fg-999999'} fs10`}>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Bar;
