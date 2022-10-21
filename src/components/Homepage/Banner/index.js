import './banner.css';
import playstore from '../../assets/GooglePlay.png';
import appstore from '../../assets/AppStore.png';

function Banner() {
    return (
        <div className="banner">
            <div className="innerDIV">
            </div>
            <div style={{display:'grid', marginRight: '16%'}}>
                <label className='font24'>Drip? Drop</label>
                <label className='font16_6'>Become a Creator</label>
            </div>
            <div style={{marginRight: '8%'}}>
                <img className='m-2' style={{cursor: 'pointer'}} src={playstore} alt='playstore' />
                <img className='m-2' style={{cursor: 'pointer'}} src={appstore} alt='appstore' />
            </div>
            <div className='video_player'>
                <video autoPlay muted loop id="video">
                    <source src='/banner.mp4' type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
export default Banner;