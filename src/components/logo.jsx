import React, { Component } from 'react';
import logo from '../logo.png';
import './header.css';

class Logo extends Component {
    render() {
        return <div>
                    <button className="transparent-button">
                        <img src={logo} style={{height: '8vh'}}/>
                    </button>
               </div>
    }
}

export default Logo;