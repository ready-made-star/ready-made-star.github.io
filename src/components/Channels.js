import channel from '../assets/channel.png';
import ellipse from '../assets/ellipse.png';
import presale from '../assets/presal.png';
import raffle from '../assets/raffle.png';
import pin from '../assets/pin.png';
import spotify from '../assets/spotify.png';
import switcher from '../assets/switcher.png';

import './css/channels.css';
function Header() {
    return (
        <div className='channels'>
            <div>
                <img src={channel} alt='' />
                <div>Channels</div>
            </div>
            <div className='channel_item'>
                <img src={ellipse} alt='' />
                <div>Now</div>
            </div>
            <div className='channel_item'>
                <img src={presale} alt='' />
                <div>presale</div>
            </div>
            <div className='channel_item'>
                <img src={raffle} alt='' />
                <div>raffle</div>
            </div>
            <div className='channel_item'>
                <img src={pin} alt='' />
                <div>pin</div>
            </div>
            {/* <div className='channel_spotify'>
                <div>
                <img src={spotify} alt='' />
                </div>
                <img src={switcher} alt='' />
            </div> */}
        </div>
    )
}
export default Header;