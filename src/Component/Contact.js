import React from 'react';
import { Link } from 'react-router-dom';
import soundcloud from '../Logos/soundcloud.png';
import spotify from '../Logos/spotify.png';
import instagram from '../Logos/instagram.png';
import youtube from '../Logos/youtube.png';
import email from '../Logos/email.png';
import facebook from '../Logos/facebook.png';
import amazon from '../Logos/amazon.png';
import deezer from '../Logos/deezer-logo.png';
import googleplay from '../Logos/google-play.png';

const Contact = () => (
    <div className='contact'>
        <div className='space' />
        <div className='links'>
            <div className='contactLinks'>
                <a href='https://soundcloud.com/maxwellhits'>
                    <img className='link-badge' alt='icon' src={soundcloud} />
                </a>
                <a href='https://open.spotify.com/artist/2IqBoXmsIoUXSkAsHLNGNy'>
                    <img className='link-badge' alt='icon' src={spotify} />
                </a>
                <a href='https://www.instagram.com/maxwellhits/'>
                    <img className='link-badge' alt='icon' src={instagram} />
                </a>
                <a href='https://www.youtube.com/channel/UCkTpCNPkxwrHfl0kNVgkGxQ'>
                    <img className='link-badge' alt='icon' src={youtube} />
                </a>
                <a href=''>
                    <img className='link-badge' alt='icon' src={email} />
                </a>
                <a href='https://www.facebook.com/vindogbuttface'>
                    <img className='link-badge' alt='icon' src={facebook} />
                </a>
                <a href='https://play.google.com/store/music/artist/Maxwell_Hits?id=Agup7fu6mbzsumi6wxsqriirjaa&hl=en'>
                    <img className='link-badge' alt='icon' src={googleplay} />
                </a>
                <a href='https://www.deezer.com/en/album/70466492'>
                    <img className='link-badge' alt='icon' src={deezer} />
                </a>
                <a href='https://www.amazon.com/Maxwell-Hits/dp/B07GC8BSRZ/ref=sr_1_2?s=dmusic&ie=UTF8&qid=1545355847&sr=1-2-mp3-albums-bar-strip-0&keywords=Maxwell+Hits'>
                    <img className='link-badge' alt='icon' src={amazon} />
                </a>
            </div>
        </div>
        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Contact;
