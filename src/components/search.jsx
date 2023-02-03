import React from 'react';
import search_icon from '../icons/search_icon.png';
import { useNavigate } from "react-router-dom";
import './header.css';

const Search = (props) => {
    const navigate = useNavigate()
    const search = (event) => {
        let search = document.getElementById("searchValue").value;
        localStorage.setItem('search', search)
        window.location.reload();
    }

        return <div style={{marginLeft: '30vw'}}>
                <button onClick={search} className="transparent-button">
                 <img src={search_icon} style={{height: '5vh'}}/>
                </button>
                 <input className="input-search" type="text" placeholder="Search" aria-label="Username" id="searchValue"/>
               </div>

}

export default Search;