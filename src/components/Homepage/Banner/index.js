import './banner.css';
import playstore from '../../assets/GooglePlay.png';
import appstore from '../../assets/AppStore.png';
import appstore2 from '../../assets/AppStore2.png';
import star from '../../assets/star.png';
import star_front from '../../assets/star_front.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RiDropFill } from 'react-icons/ri';
function Banner(props) {
    const { theme } = { ...props };
    return (
        <div className="banner">
            <div className='h-100'>
                <img className='star_front' src={star_front} alt='star_front' />
            </div>
            <div className='banner_content'>
                <div className='banner_text'>
                    <label className='font24 drop_text'>Drip? Drop <RiDropFill size={20} style={{ marginTop: 8 }} /></label>
                    <label className='become_text font16_6 d-flex align-items-center'>Become a Creator</label>
                </div>

                <div className='banner_app'>
                    {/* <img className='m-2' style={{cursor: 'pointer'}} src={playstore} alt='playstore' /> */}
                    <a href='https://testflight.apple.com/join/djiWh2kE'><img className='m-2' style={{ cursor: 'pointer' }} src={theme ? appstore : appstore2} alt='appstore' /></a>
                </div>
            </div>
            <div className='video_player'>
                <video autoPlay muted loop id="video">
                    <source src='/banner.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='mobile_version star'>
                <img src={star} alt='star' />
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