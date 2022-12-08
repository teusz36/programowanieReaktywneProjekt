import React, { Component } from 'react';
import search_icon from '../icons/search_icon.png';
import './header.css';

class Search extends Component {
    render() {
        return <div style={{marginLeft: '30vw'}}>
                <button className="transparent-button">
                 <img src={search_icon} style={{height: '5vh'}}/>
                </button>
                 <input className="input-search" type="text" placeholder="Search" aria-label="Username"/>
               </div>
    }
}

export default Search;