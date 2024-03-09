import React from 'react';
import TableComponent  from './TableComponent'; //import table 
import './App.css';
import { Link } from 'react-router-dom';
const ContactPage = () =>{
    const tableData =[
        {id: 1, name: 'Will', age: 30, email:'woodallw9@gmail.com' },
        
];

return(
    <div>
            <h1 style={{ textAlign: 'center' }}>Got Questions? Contact me</h1>
            <TableComponent data={tableData} />

            {/* Footer Section */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            </div>
        </div>

 
);
};

export default ContactPage;