import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import Main from "../components/Homepage/Body";
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import spotify from '../components/assets/spotify.png';
function Homepage(props) {
    const [showCookies, setShowCookies] = useState('true')
    return (
        <>
            <div className="homepage_body">
                <Channels />
                <Main show={props} />
                <img className='mobile_spotify' src={spotify} alt='spotify' style={{ bottom: showCookies ? 100 : '1%' }} />
                <div className="cookies" style={{ display: showCookies ? 'flex' : 'none' }}>
                    <div className="cookies_text">
                        <label>This site is using cookies to improve your experience.</label>
                        <Link to='https://auradrops.notion.site/Privacy-Policy-8788b186e3554bd6a0e95eea68e68136'><u>Learn more</u></Link>
                    </div>
                    <div className="cookies_buttons">
                        <button className="cookies_btn1" onClick={() => setShowCookies(false)}>Decline</button>
                        <button className="cookies_btn" onClick={() => setShowCookies(false)}>Accept Cookies</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage;