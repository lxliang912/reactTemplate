import React from 'react';

let images = {
    logo: require('../../resources/pic/logo.svg'),
}

class Home extends React.Component {
    componentDidMount() {
        console.log(123);
    }

    render() {
        return (
            <div>
                <img src={images.logo} alt="" />
            </div>
        );
    }
}

export default Home;