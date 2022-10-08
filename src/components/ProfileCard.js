import './css/main.css';
import avatar from '../assets/avatar.png';
import arrow from '../assets/arrow.png';
import ellipse from '../assets/ellipse.png';
import presale from '../assets/presal.png';
import raffle from '../assets/raffle.png';
import pin from '../assets/pin.png';

function ProfileCard() {
    return (
        <div className="profilecard">
            <div className='gradient'></div>
            <div className='profile_person'>

                <div>
                    <div className='profileavatar'>
                        <img src={avatar} alt='' />
                        <div>from</div>
                        <div>12/26/2022</div>
                    </div>
                </div>
                <div style={{ paddingLeft: 24 }}>
                    <div className='profile_header'>
                        <div>
                            <div>Brian Yip</div>
                            <div>Brian Yip</div>
                        </div>
                        <div style={{ display: 'flex', gap: 15 }}>
                            <div>
                                <button className='profile_connect'>Connect</button>
                            </div>
                            <div>
                                <button className='profile_arrow'><img src={arrow} alt='' /></button>
                            </div>

                        </div>
                    </div>

                    <div className='person_content'>
                        My first entrepreneurial experience was buying and selling Yu-Gi-Oh cards in the middle school playground. Cards went for anywhere between $0.25 to $1, so I was especially thrilled when I accepted an offer for the Blue-Eyes White Dragon for $2.
                    </div>
                </div>
                <div className='vertical_divider'></div>
                <div className='profile_state'>
                    <div>Available drop types</div>
                    <div style={{display:'flex', gap:20}}>
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
                        <div className='hori_divider'></div>
                    </div>
                    <div className='profile_header'>
                        <div>Connections</div>
                        <div className='font20'>2.0K</div>
                    </div>
                    <div className='profile_header'>
                        <div>Drops</div>
                        <div className='font20'>734</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;