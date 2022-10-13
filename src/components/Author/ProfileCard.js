import './css/main.css';
import React, { useRef, useState } from 'react';
import avatar from '../assets/avatar.png';
import arrow from '../assets/arrow.png';
import ellipse from '../assets/ellipse.png';
import presale from '../assets/presal.png';
import raffle from '../assets/raffle.png';
import pin from '../assets/pin.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiCopy } from 'react-icons/fi';

function ProfileCard() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const handleShare = () => {
        setShow(!show);
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <div className='space_between'>
                <FaLink /><a href='https://auradrops.com/brian_yips'>https://auradrops.com/brian_yips</a><FiCopy />
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
                            <div>from</div>
                            <div>12/26/2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile_person'>
                <div className='profile_description'>
                    <div className='profile_header'>
                        <div>
                            <div>Brian Yip</div>
                            <div className='font12'>@brianyip</div>
                        </div>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <div>
                                <button className='profile_connect' style={{cursor:"pointer"}}>Connect</button>
                            </div>
                            <div>
                                <OverlayTrigger
                                    trigger='click'
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <button className='profile_arrow' onClick={handleShare}><img src={arrow} alt='' style={{cursor:"pointer"}} /></button>
                                </OverlayTrigger>
                            </div>

                        </div>
                    </div>

                    <div className='person_content'>
                        My first entrepreneurial experience was buying and selling Yu-Gi-Oh cards in the middle school playground. Cards went for anywhere between $0.25 to $1, so I was especially thrilled when I accepted an offer for the Blue-Eyes White Dragon for $2.
                    </div>
                </div>
                <div className='profile_state'>
                    <div className='state_first_part'>
                        <div style={{ padding: '12px 24px 0 24px' }}>Available drop types</div>
                        <div className='state_value'>
                            <div className='state_half'>
                                <div className='channel_item' style={{cursor:"pointer"}}>
                                    <img src={ellipse} alt='' />
                                    <div>Now</div>
                                </div>
                                <div className='channel_item' style={{cursor:"pointer"}}>
                                    <img src={presale} alt='' />
                                    <div>presale</div>
                                </div>
                            </div>
                            <div className='state_half'>
                                <div className='channel_item' style={{cursor:"pointer"}}>
                                    <img src={raffle} alt='' />
                                    <div>raffle</div>
                                </div>
                                <div className='channel_item' style={{cursor:"pointer"}}>
                                    <img src={pin} alt='' />
                                    <div>pin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='state_second_part'>
                        <div className='space_between' style={{ padding: '12px 24px 5px' }}>
                            <div>Connections</div>
                            <div className='font20'>2.0K</div>
                        </div>
                        <div className='space_between' style={{ padding: '12px 24px 5px' }}>
                            <div>Drops</div>
                            <div className='font20'>734</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;