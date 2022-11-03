import './banner.css';
import playstore from '../../assets/GooglePlay.png';
import appstore from '../../assets/AppStore.png';
import appstore2 from '../../assets/AppStore2.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {RiDropFill} from 'react-icons/ri';
function Banner(props) {
    const { theme } = { ...props };
    return (
        <div className="banner">
            <div className="innerDIV">
            </div>
            <div className='banner_text'>
                <label className='font24'>Drip? Drop <RiDropFill size={20} style={{marginTop:8 }}/></label>
                <label className='font16_6'>Become a Creator</label>
                
            </div>
            <div className='banner_app'>
                {/* <img className='m-2' style={{cursor: 'pointer'}} src={playstore} alt='playstore' /> */}
                <a href='https://testflight.apple.com/join/djiWh2kE'><img className='m-2' style={{cursor: 'pointer'}} src={theme?appstore:appstore2} alt='appstore' /></a>
            </div>
            <div className='video_player'>
                <video autoPlay muted loop id="video">
                    <source src='/banner.mp4' type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Banner);