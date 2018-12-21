import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => (
    <div className='contact'>
        <div className='space' />
        <div className='links'>
            <div className='contactLinks'>
                <a href='https://soundcloud.com/maxwellhits'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/png/256/1322/1322097.png' />
                </a>
                <a href='https://open.spotify.com/artist/2IqBoXmsIoUXSkAsHLNGNy'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/160/160187.svg' />
                </a>
                <a href='https://www.instagram.com/maxwellhits/'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/1077/1077042.svg' />
                </a>
                <a href='https://www.youtube.com/channel/UCkTpCNPkxwrHfl0kNVgkGxQ'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/1077/1077046.svg' />
                </a>
                <a href=''>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/1034/1034138.svg' />
                </a>
                <a href='https://www.facebook.com/vindogbuttface'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/1051/1051360.svg' />
                </a>
                <a href='https://play.google.com/store/music/artist/Maxwell_Hits?id=Agup7fu6mbzsumi6wxsqriirjaa&hl=en'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/1348/1348030.svg' />
                </a>
                <a href='https://www.deezer.com/en/album/70466492'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/49/49080.svg' />
                </a>
                <a href='https://www.amazon.com/Maxwell-Hits/dp/B07GC8BSRZ/ref=sr_1_2?s=dmusic&ie=UTF8&qid=1545355847&sr=1-2-mp3-albums-bar-strip-0&keywords=Maxwell+Hits'>
                    <img className='link-badge' alt='icon' src='https://image.flaticon.com/icons/svg/1348/1348023.svg' />
                </a>
            </div>
        </div>
        <div className='foot'>
            <Link to='/'>Home</Link>
        </div>
    </div>
);
export default Contact;
