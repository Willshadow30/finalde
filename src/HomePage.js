import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Header component
import Login from './Login'; //Login component



const HomePage = () => {
    return (
        <div>
            <h1 style={{textAlign: 'Center'}}>Home Page</h1>
            <p style={{textAlign: 'Center'}}>A place where the lost can be themselves without judgement</p>
            <h5 style={{textAlign: 'Center'}}>Created by William Woodall</h5>
            
            {/* Login Section */}
            <Login />
            
            {/* Footer Section */}
         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
    <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
    <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
</div>

            </div>

       
    );
}

export default HomePage;
