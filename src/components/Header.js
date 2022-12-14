import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('Header')
        return (
            <div>
                <h1 className='f1'>RoboFriends</h1>
                <meta name="RoboFriends Redux" content="RoboFriends profile filtering app using React with Redux." />
                <CounterButton color={'blue'} />
            </div>
        );
    }
}

export default Header;