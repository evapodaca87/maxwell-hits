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
const { Howl } = require('howler');

var bonusSong = new Howl({
    src: [ '/Music/bonus.mp3' ]
});
var byTheWaySong = new Howl({
    src: [ '/Music/byTheWay.mp3' ]
});
var disillusionedSong = new Howl({
    src: [ '/Music/disillusioned.mp3' ]
});
var giveUupSong = new Howl({
    src: [ '/Music/giveUup.mp3' ]
});
var mean2meSong = new Howl({
    src: [ '/Music/mean2me.mp3' ]
});
var mooncruiseSong = new Howl({
    src: [ '/Music/mooncruise.mp3' ]
});
var nobrakesSong = new Howl({
    src: [ '/Music/nobrakes.mp3' ]
});
var wcwSong = new Howl({
    src: [ '/Music/WCW.mp3' ]
});
let bonus = () => {
    bonusSong.pause();
    byTheWaySong.stop();
    disillusionedSong.stop();
    giveUupSong.stop();
    mean2meSong.stop();
    mooncruiseSong.stop();
    nobrakesSong.stop();
    wcwSong.stop();
    bonusSong.play();
}
let byTheWay = () => {
    bonusSong.stop();
    byTheWaySong.pause();
    disillusionedSong.stop();
    giveUupSong.stop();
    mean2meSong.stop();
    mooncruiseSong.stop();
    nobrakesSong.stop();
    wcwSong.stop();
    byTheWaySong.play();
}
let disillusioned = () => {
    bonusSong.stop();
    byTheWaySong.stop();
    disillusionedSong.pause();
    giveUupSong.stop();
    mean2meSong.stop();
    mooncruiseSong.stop();
    nobrakesSong.stop();
    wcwSong.stop();
    disillusionedSong.play();
}
let giveUup = () => {
    bonusSong.stop();
    byTheWaySong.stop();
    disillusionedSong.stop();
    giveUupSong.pause();
    mean2meSong.stop();
    mooncruiseSong.stop();
    nobrakesSong.stop();
    wcwSong.stop();
    giveUupSong.play();
}
let mean2me = () => {
    bonusSong.stop();
    byTheWaySong.stop();
    disillusionedSong.stop();
    giveUupSong.stop();
    mean2meSong.pause();
    mooncruiseSong.stop();
    nobrakesSong.stop();
    wcwSong.stop();
    mean2meSong.play();
}
let mooncruise = () => {
    bonusSong.stop();
    byTheWaySong.stop();
    disillusionedSong.stop();
    giveUupSong.stop();
    mean2meSong.stop();
    mooncruiseSong.pause();
    nobrakesSong.stop();
    wcwSong.stop();
    mooncruiseSong.play();
}
let nobrakes = () => {
    bonusSong.stop();
    byTheWaySong.stop();
    disillusionedSong.stop();
    giveUupSong.stop();
    mean2meSong.stop();
    mooncruiseSong.stop();
    nobrakesSong.pause();
    wcwSong.stop();
    nobrakesSong.play();
}
let wcw = () => {
    bonusSong.stop();
    byTheWaySong.stop();
    disillusionedSong.stop();
    giveUupSong.stop();
    mean2meSong.stop();
    mooncruiseSong.stop();
    nobrakesSong.stop();
    wcwSong.pause();
    wcwSong.play();
}
let stop = () => {
    bonusSong.stop() && byTheWaySong.stop() && disillusionedSong.stop() && giveUupSong.stop() && mean2meSong.stop() && mooncruiseSong.stop() && nobrakesSong.stop() && wcwSong.stop();
}
let pause = () => {
    bonusSong.pause() && byTheWaySong.pause() && disillusionedSong.pause() && giveUupSong.pause() && mean2meSong.pause() && mooncruiseSong.pause() && nobrakesSong.pause() && wcwSong.pause();
}

//   sound.play();

const Music = () => (
    <div className='music'>
        <div className='space' />
        <div className='table'>
            <div className='images'>
                <img className='songImage' src={bonusPic} alt='fireSpot' />
                <img className='songImage' src={noBrakesPic} alt='fireSpot' />
                <img className='songImage' src={byTheWayPic} alt='fireSpot' />
                <img className='songImage' src={moonPic} alt='fireSpot' />
                <img className='songImage' src={disillusionedPic} alt='fireSpot' />
                <img className='songImage' src={meanPic} alt='fireSpot' />
                <img className='songImage' src={giveUupPic} alt='fireSpot' />
                <img className='songImage' src={wcwPic} alt='fireSpot' />
            </div>
            <div className='names'>
                <p>Bonus </p>
                <p>n o b r a k e s </p>
                <p>by the wayy</p>
                <p>moon'n & cruis'n</p>
                <p>d i s i l l u s i o n e d</p>
                <p>StayLoose - mean 2 me remix</p>
                <p>give you up</p>
                <p>Your WCW never saved your number </p>
            </div>
            <div className='play'>
                <p onClick={bonus}>Play </p>
                <p onClick={nobrakes}>Play </p>
                <p onClick={byTheWay}>Play </p>
                <p onClick={mooncruise}>Play </p>
                <p onClick={disillusioned}>Play </p>
                <p onClick={mean2me}>Play </p>
                <p onClick={giveUup}>Play </p>
                <p onClick={wcw}>Play </p>
            </div>
            <div className='pause'>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
                <p onClick={pause}>Pause </p>
            </div>
            <div className='stop'>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
                <p onClick={stop}>Stop </p>
            </div>
        </div>
        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Music;
