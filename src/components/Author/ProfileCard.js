import './css/main.css';
import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import avatar from '../assets/avatar.png';
import arrow from '../assets/arrow.png';
import arrow2 from '../assets/arrow2.png';
import ellipse from '../assets/ellipse.png';
import presale from '../assets/presal.png';
import raffle from '../assets/raffle.png';
import pin from '../assets/pin.png';
import ellipse2 from '../assets/ellipse2.png';
import presale2 from '../assets/presal2.png';
import raffle2 from '../assets/raffle2.png';
import pin2 from '../assets/pin2.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';
import {connect} from 'react-redux';
function ProfileCard(props) {
    const {theme} = {...props}
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const handleShare = () => {
        setShow(!show);
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <div className='space_between'>
                <div><FaLink /></div>
                <div><Link to='https://auradrops.com/brian_yips'>https://auradrops.com/brian</Link></div>
                <div style={{cursor:'pointer'}}><FiCopy /></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0' }}>
                <AiTwotoneMail /><div style={{ marginLeft: 20 }}>Email</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaTwitter /><div style={{ marginLeft: 20 }}>Twitter</div>
            </div>

        </Tooltip>
    );

    return (
        <div className="profilecard">
            <div className='gradient' style={{ position: "relative" }}>
                <div style={{ width: '20%' }}>
                    <div className='profileavatar'>
                        <img src={avatar} alt='' />
                        <div style={{ display: 'flex', gap: 5 }}>
                            <div className='font10_2'>From</div>
                            <div className='font12'>12/26/2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile_person'>
                <div className='profile_description'>
                    <div className='profile_header'>
                        <div>
                            <div className='font16' style={{fontFamily: 'Vulf Sans Demo'}}>Brian Yip</div>
                            <div className='font12_6'>@brianyip</div>
                        </div>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <div>
                                <button className='profile_connect' style={{ cursor: "pointer" }}>Connect</button>
                            </div>
                            <div>
                                <OverlayTrigger
                                    rootClose
                                    trigger='click'
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                    onExit={() => setShow(false)}
                                >
                                    <img src={theme?arrow:arrow2} alt='' style={{ cursor: "pointer" }} className='profile_arrow' onClick={handleShare} />
                                </OverlayTrigger>
                            </div>

                        </div>
                    </div>

                    <div className='person_content font12_6'>
                        My first entrepreneurial experience was buying and selling Yu-Gi-Oh cards in the middle school playground. Cards went for anywhere between $0.25 to $1, so I was especially thrilled when I accepted an offer for the Blue-Eyes White Dragon for $2.
                    </div>
                </div>
                <div className='profile_state'>
                    <div className='state_first_part'>
                        <div className='font10' style={{ padding: '12px 24px 0 24px' }}>Available drop types</div>
                        <div className='state_value'>
                            <div className='state_half'>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme?ellipse:ellipse2} alt='' />
                                    <div className='font12'>Now</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme?presale:presale2} alt='' />
                                    <div className='font12'>Presale</div>
                                </div>
                            </div>
                            <div className='state_half'>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme?raffle:raffle2} alt='' />
                                    <div className='font12'>Raffle</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme?pin:pin2} alt='' />
                                    <div className='font12'>Pin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='state_second_part'>
                        <div className='space_between' style={{ padding: '12px 24px 5px' }}>
                            <div className='font12'>Connections</div>
                            <div className='font20'>2.0K</div>
                        </div>
                        <div className='space_between' style={{ padding: '12px 24px 5px' }}>
                            <div className='font12'>Drops</div>
                            <div className='font20'>734</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};
// export default Header;
export default connect(mapStateToProps)(ProfileCard);