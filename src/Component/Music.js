import React from 'react';
import { Link } from 'react-router-dom';
const {Howl, Howler} = require('howler');

var sound = new Howl({
    src: ['/Music/bonus.mp3']
  });
  
//   sound.play();

const Music = () => (
    <div className='music'>
        <div className='space' />
        <div className='songs'>
            <h2>Music Page</h2>
            <p>Bonus <img src="/images.randomFern.png"></img></p>
        </div>

        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Music;
