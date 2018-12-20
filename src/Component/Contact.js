import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
    <div className='contact'>
        <div className='space' />
        <div className='links'>
            <h2>Contact Page</h2>
        </div>
        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Contact;
