import React from 'react';
import { Link } from 'react-router-dom';

const Music = () => (
    <div className='music'>
        <div className='space' />
        <div className='songs'>
            <h2>Music Page</h2>
        </div>

        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Music;
