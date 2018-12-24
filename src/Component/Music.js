import React from 'react';
import { Link } from 'react-router-dom';
import bonusPic from '../images/bonus.png';
import byTheWayPic from '../images/byTheWay.png';
import disillusionedPic from '../images/disillusioned.png';
import giveUupPic from '../images/giveUup.png';
import meanPic from '../images/mean.png';
import moonPic from '../images/moon.png';
import noBrakesPic from '../images/noBrakes.png';
import wcwPic from '../images/wcw.png';
const { Howl, Howler } = require('howler');

var sound = new Howl({
    src: [ '/Music/bonus.mp3' ]
});

//   sound.play();

const Music = () => (
    <div className='music'>
        <div className='space' />
        <div className='songs'>
            <div className='song'>
                <img className='songImage' src={bonusPic} alt='fireSpot' />
                <p>Bonus </p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={noBrakesPic} alt='fireSpot' />
                <p>n o b r a k e s </p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={byTheWayPic} alt='fireSpot' />
                <p>by the wayy</p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={moonPic} alt='fireSpot' />
                <p>moon'n & cruis'n</p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={disillusionedPic} alt='fireSpot' />
                <p>d i s i l l u s i o n e d</p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={meanPic} alt='fireSpot' />
                <p>StayLoose - mean 2 me remix</p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={giveUupPic} alt='fireSpot' />
                <p>give you up</p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
            <div className='song'>
                <img className='songImage' src={wcwPic} alt='fireSpot' />
                <p>n o b r a k e s </p>
                <p>Play</p>
                <p>Pause</p>
                <p>Stop</p>
            </div>
        </div>

        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Music;
