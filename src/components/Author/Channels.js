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
            <div className='channel_item' style={{marginTop:30}}>
                <img src={ellipse} alt='' />
                <div>Now</div>
            </div>
            <div className='channel_item'>
                <img src={presale} alt='' />
                <div>Presale</div>
            </div>
            <div className='channel_item'>
                <img src={raffle} alt='' />
                <div>Raffle</div>
            </div>
            <div className='channel_item'>
                <img src={pin} alt='' />
                <div>Pin</div>
            </div>
            <div className='channel_spotify'>
                <div>
                <img src={spotify} alt='' />
                </div>
                <img src={switcher} alt='' />
            </div>
        </div>
    )
}
export default Header;