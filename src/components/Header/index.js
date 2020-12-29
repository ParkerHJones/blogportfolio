import React from 'react';
import'./style.css';

/**
 * @author
 * @function Header
 */


 const Header = (props) => {
     return(
         <header className="header">
             <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Programming Portfolio</a>
                <a href="#">Blog</a>
                 </nav>
         </header>
     )
 }

 export default Header