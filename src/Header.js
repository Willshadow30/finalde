import React from 'react';
import { Link } from 'react-router-dom';

const Header =() => {
    return(
        <header style={{backgroundColor: '#fofofo', padding: '10px o', textAlign: 'center'}}>
            <nav>
                <Link to="/" style={{marginRight: '10px'}}>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;