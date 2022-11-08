import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import Main from "../components/Homepage/Body";
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import {useState} from 'react';
function Homepage(props) {
    const [showCookies, setShowCookies] = useState('true')
    return (
        <>
            <AuthorHeader />
            <div className="homepage_body">
                <Channels />
                <Main show={props} />
                    <div className="cookies" style={{ display: showCookies? 'flex': 'none'}}>
                        <label>This site is using cookies to improve your visiting experience.</label>
                        <Link to='https://auradrops.notion.site/Privacy-Policy-8788b186e3554bd6a0e95eea68e68136'><u>Learn more</u></Link>
                        <button className="cookies_btn1" onClick={() => setShowCookies(false)}>Decline</button>
                        <button className="cookies_btn" onClick={() => setShowCookies(false)}>Accept Cookies</button>
                    </div>
            </div>
        </>
    )
}
export default Homepage;