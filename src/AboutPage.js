import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const AboutPage = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>About Page</h1>
            <p style={{ textAlign: 'center' }}>A place that you can go and talk about almost anthing.</p>
            
            <div style={{ maxWidth: '500px', margin: 'auto', display: 'flex',flexDirection:'column', justifyContent:'center', height: '30vh' }}>
                <Form />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>   {/* links pages to connect to pages togehther */}
            </div>
        </div>
    );
};

export default AboutPage;
