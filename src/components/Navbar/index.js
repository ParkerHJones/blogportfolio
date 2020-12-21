import React, { useState } from 'react';
import './style.css';
/**
 * @author
 * @function Navbar
 */

 const Navbar=(props)=> {


    const [search,setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }
 
    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchinput';


    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#">Passions and Interests</a></li>
                <li><a href="#">Programming Portfolio</a></li>
                <li><a href="#">Contact Information</a></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className="searchClass" placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')}alt="Search"/>
                </form>
            </div>
        </div>
    )
}

export default Navbar