import channel from '../assets/channel.png';
import ellipse from '../assets/ellipse.png';
import presale from '../assets/presal.png';
import raffle from '../assets/raffle.png';
import pin from '../assets/pin.png';
import channel2 from '../assets/channel2.png';
import ellipse2 from '../assets/ellipse2.png';
import presale2 from '../assets/presal2.png';
import raffle2 from '../assets/raffle2.png';
import pin2 from '../assets/pin2.png';
import spotify from '../assets/spotify.png';
import switcher from '../assets/switcher.png';
import switcher2 from '../assets/switcher2.png';
import { useEffect, useState } from 'react';
import './css/channels.css';
import { toggleTheme } from '../../actions/index';
import { connect } from 'react-redux';

function Channels(props) {
    const { theme, toggleTheme } = { ...props };
    const [mode, setMode] = useState(false);
    const handleSwitch = () => {
        // setMode(!mode);
        toggleTheme(!theme)
    }

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
        if (theme == true) {
            document.documentElement.style.setProperty('--background-color', '#0D0D0D'); //black
            document.documentElement.style.setProperty('--font_color', '#fff'); //white
            document.documentElement.style.setProperty('--font_color6', 'rgba(255, 255, 255,0.6)'); //white
            document.documentElement.style.setProperty('--font_color2', 'rgba(255, 255, 255,0.2)'); //white
            document.documentElement.style.setProperty('--btn_color', 'rgba(255, 255, 255,0.2)'); //white
            
            
        } else {
            document.documentElement.style.setProperty('--background-color', '#F8F0E3');
            document.documentElement.style.setProperty('--font_color', '#000');
            document.documentElement.style.setProperty('--font_color6', 'rgba(13, 13, 13, 0.4)');
            document.documentElement.style.setProperty('--font_color2', 'rgba(13, 13, 13, 0.4)');
            document.documentElement.style.setProperty('--btn_color', '#0D0D0D'); //white
        }
    }, [theme]);

    return (
        <div className='channels'>
            <div style={{ cursor: "pointer", display: 'inline-block' }}>
                <img src={theme ? channel : channel2} alt='' />
                <label className='font12 text-center'>Channels</label>
            </div>
            <div className='channel_item' style={{ marginTop: 30, cursor: "pointer" }}>
                <img src={theme ? ellipse : ellipse2} alt='' />
                <div className='font12'>Now</div>
            </div>
            <div className='channel_item' style={{ cursor: "pointer" }}>
                <img src={theme ? presale : presale2} alt='' />
                <div className='font12'>Presale</div>
            </div>
            <div className='channel_item' style={{ cursor: "pointer" }}>
                <img src={theme ? raffle : raffle2} alt='' />
                <div className='font12'>Raffle</div>
            </div>
            <div className='channel_item' style={{ cursor: "pointer" }}>
                <img src={theme ? pin : pin2} alt='' />
                <div className='font12'>Pin</div>
            </div>
            <div className='channel_spotify'>
                <div style={{margin:'15px 0'}}>
                    <img src={spotify} alt='' />
                </div>
                <div style={{margin:'15px 0'}}>
                    <img src={theme ? switcher : switcher2} alt='' style={{ cursor: "pointer" }} onClick={handleSwitch} />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: (value) => {
            dispatch(toggleTheme(value))
        }
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};
// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Channels);