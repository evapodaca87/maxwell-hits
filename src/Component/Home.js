import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <h1>Maxwell Hits</h1>
        <div className='nav'>
            <Link to='/music'>
                <h2 className='btn'>Music</h2>
            </Link>
            <Link to='/contact'>
                {' '}
                <h2 className='btn'>Contact</h2>
            </Link>
        </div>
    </div>
);
export default Home;
