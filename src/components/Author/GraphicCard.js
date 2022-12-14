import { Card, Drawer, Button, Divider } from 'antd';
import './css/main.css';
import './css/card.css';
import cardimg from '../assets/product_image.png';
import pin from '../assets/pin.png';
import close from '../assets/close.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState, useEffect } from 'react';
import Video from '../Homepage/Video';
import MapWrapper from '../Darkmap';
import video_image from '../assets/video_image.png';
import arrow from '../assets/arrow.png';
import dolce from '../assets/dolce.png';
import arrow2 from '../assets/arrow2.png';
import dolce2 from '../assets/dolce2.png';
import user_avatar from '../assets/user_avatar.png';
import empty_location from '../assets/empty_location.png';
import video_play from '../assets/video_play.svg';
import pre_front from '../assets/pre_front.png';
import pre_left from '../assets/pre_left.png';
import pre_back from '../assets/pre_back.png';
import pre_right from '../assets/pre_right.png';
import heart from '../assets/heart.svg';
import heart2 from '../assets/heart2.svg';
import Tooltip from 'react-bootstrap/Tooltip';
import { TbPin } from 'react-icons/tb';
import { BsGem } from 'react-icons/bs';
import { connect } from 'react-redux';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaLink, FaTwitter } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiCopy } from 'react-icons/fi';
import Notification from '../Notification';
import LoginedNoti from '../Notification/LoginedNoti';

function GraphicCard(props) {

    const { theme } = { ...props };
    const [checkoutShow, setCheckoutShow] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [map, setMap] = useState(false);
    const [showPlayButton1, setShowPlayButton1] = useState('none');
    const [showPlayButton2, setShowPlayButton2] = useState('none');
    const [show, setShow] = useState(false);
    const [logined, setLogin] = useState(false);
    const [favor, setFavor] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [showLoginedNotification, setShowLoginedNotification] = useState(false);

    const handleShare = () => {
        setShow(!show);
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <div className='space_between'>
                <div><FaLink /></div>
                <div><Link to='https://auradrops.com/brian_yips'>https://auradrops.com/brian</Link></div>
                <div style={{ cursor: 'pointer' }}><FiCopy /></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', margin: '12px 0' }}>
                <AiTwotoneMail /><div style={{ marginLeft: 20 }}>Email</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaTwitter /><div style={{ marginLeft: 20 }}>Twitter</div>
            </div>

        </Tooltip>
    );

    // const [drawerSize, setDrawerSize] = useState(450);
    let mobileView = false;

    if (window.innerWidth < 680) {
        mobileView = true;
        // console.log('ss');
    }

    const handleVideo = () => {
        // alert(showVideo);
        setShowVideo(true);
    }
    const handlePlayBtn1 = (e) => {
        e.preventDefault();
        e.stopPropagation()
        setShowPlayButton1('block');
    }
    const handlePlayBtn2 = () => {
        setShowPlayButton2('block');
    }
    const handleMap = () => {
        setMap(true);
    }

    const handleFavorite = () =>{
        if(logined) {
            setFavor(!favor);
        }
        else{
            alert('please login');
        }
    }
    
    useEffect(() => {
        const logined1 = JSON.parse(localStorage.getItem('logined'));
        setLogin(logined1);
    }, [logined]);

    const test = () => {
        // let test1 = document.querySelector('#test');
        // test1.className('animate__zoomIn')
    }
    return (
        <>
            <div className='graphic_card'>
                <Card
                    style={{
                        width: '100%', cursor: 'pointer'
                    }}
                    onClick={() => setShowCard(true)}
                    cover={<img alt="example" src={props.cardimg} style={{ width: '100%', borderRadius: '12px 12px 0 0', maxWidth: '-webkit-fill-available' }} />}
                >
                    <div className='card_content'>
                        <div className='text-left'>
                            <div className='font10_2'>Date released</div>
                            <div className='font10'>{props.data_released}</div>
                        </div>
                        <div className='d-flex'>
                            <button className='cardbtn font12' style={{ borderColor: props.border_color }} >
                                <img src={props.category_icon} at='category_icon' />
                                {props.category_name}
                            </button>
                            <button className='pinbtn font12 text-white' style={{ background: props.background }} >
                                <img src={props.status_icon} alt='status_icon' />
                                {props.status_name}
                            </button>
                        </div>
                    </div>
                </Card>
                <Drawer
                    placement={mobileView ? 'bottom' : 'right'}
                    closable={false}
                    onClose={() => setShowCard(false)}
                    open={showCard}
                // size={drawerSize}
                >
                    <div className='mobile_version' style={{ height: 200, background: 'transparent' }}></div>
                    <div className='tray'>
                        <div className='space_between'>
                            <div className='font14'>
                                <Button type='round' style={{ color: 'black' }} onClick={test}>Dolce && Gabbana</Button>
                                <Button type='round' className='white_btn' id='test'>Off-White</Button>
                            </div>
                            <img src={close} alt='' onClick={() => setShowCard(false)} style={{ cursor: 'pointer' }} />
                        </div>
                        <div>
                            <Swiper watchSlidesProgress={true} slidesPerView={2.3} className="mySwiper">
                                <SwiperSlide onMouseOver={(e) => handlePlayBtn1(e)} onMouseLeave={(e) => { e.preventDefault(); e.stopPropagation(); setShowPlayButton1('none') }}>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={pre_front} alt='' style={{ width: '100%' }} />
                                    </div>
                                    <img className='video_play' onClick={handleVideo} src={video_play} alt='' style={{ display: showPlayButton1 }} />
                                </SwiperSlide>
                                <SwiperSlide onMouseOver={handlePlayBtn2} onMouseLeave={() => setShowPlayButton2('none')}>
                                    <div className='video_image' style={{ cursor: "pointer" }} >
                                        <img src={pre_left} alt='' style={{ width: '100%' }} />
                                    </div>
                                    <img className='video_play' onClick={handleVideo} src={video_play} alt='' style={{ display: showPlayButton2 }} />
                                </SwiperSlide>
                                <SwiperSlide onMouseOver={handlePlayBtn2} onMouseLeave={() => setShowPlayButton2('none')}>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={pre_back} alt='' style={{ width: '100%' }} />
                                    </div>
                                    <img className='video_play' onClick={handleVideo} src={video_play} alt='' style={{ display: showPlayButton2 }} />
                                </SwiperSlide>
                                <SwiperSlide onMouseOver={handlePlayBtn2} onMouseLeave={() => setShowPlayButton2('none')}>
                                    <div className='video_image' style={{ cursor: "pointer" }} >
                                        <img src={pre_right} alt='' style={{ width: '100%' }} />
                                    </div>
                                    <img className='video_play' onClick={handleVideo} src={video_play} alt='' style={{ display: showPlayButton2 }} />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='space_between'>
                            <div style={{ display: 'grid' }}>
                                <label className='font16'>Dolce && Gabbana</label>
                                <label className='font12_6'>Graffiti-print shirt jacket</label>
                            </div>
                            <div className='d-flex' style={{ gap: 10 }}>
                                <div>
                                    <OverlayTrigger
                                        rootClose
                                        trigger='click'
                                        placement="bottom"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                        onExit={() => setShow(false)}
                                    >
                                        <img src={theme ? arrow : arrow2} alt='' style={{ cursor: "pointer" }} className='profile_arrow' onClick={handleShare} />
                                    </OverlayTrigger>
                                </div>
                                {/* <img src={theme ? arrow : arrow2} alt='' style={{ cursor: "pointer" }} /> */}
                                <div><img src={theme ? dolce : dolce2} alt='' style={{ marginLeft: 10 }} /></div>
                            </div>
                        </div>
                        <div>
                            <Divider />
                        </div>
                        <div className='d-flex'>
                            <button className='cardbtn' style={{ borderColor: props.border_color }} >
                                <img src={props.category_icon} at='category_icon' />
                                {props.category_name}
                            </button>
                            <button className='pinbtn' style={{ background: props.background }} >
                                <img src={props.status_icon} alt='status_icon' />
                                {props.status_name}
                            </button>
                            <button className='cardbtn' style={{ cursor: "pointer" }} >Selling fast!</button>
                        </div>
                        <div style={{ display: 'flex', margin: '20px 0', gap: 10 }}>
                            <div className='size_part'>
                                <button className='size_button'>S 46</button>
                                <button className='size_button'>M 17</button>
                                <button className='size_button'>L 5</button>
                                <button className='size_button'>XL25</button>
                            </div>
                            <div className='size_part'>
                                <div className='color_button'></div>
                                <div className='color_button' style={{ background: 'red' }}></div>
                                <div className='color_button' style={{ background: 'yellow' }}></div>
                            </div>
                        </div>

                        <div className='drawer_contents'>
                            <div className='location_part'>
                                <img src={empty_location} alt='' style={{ cursor: 'pointer' }} onClick={handleMap} />
                                <label style={{ marginLeft: '5px' }}>3531 Sunset Blvd, Los Angeles, CA 90026</label>
                            </div>
                            <div style={{ width: '80%', margin: '20px 0' }}>
                                <label className='font12_6'>
                                    Created, funded, and built by creative entrepreneur Allan Kingdom, Crypto Cut$ is the world???s first members-only crypto spa. As the first fashion item from the brand, the Crypto Cut$ Winter Beanie marks the start of the brand???s collection.
                                </label>
                            </div>

                            <div className='d-flex'>
                                <label className='font12_6' style={{ width: '50%' }}>Drop ID# 1234567</label>
                                <label className='font12'>Return Policy</label>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div className='font12_6' style={{ width: '50%', display: 'grid' }}>
                                    <label className='font12'>Highlights</label>
                                    <label>-multicolor</label>
                                    <label>-multicolor</label>
                                    <label>-multicolor</label>
                                    <label>-multicolor</label>
                                    <label>-multicolor</label>
                                </div>
                                <div>
                                    <label>Tags</label>
                                    <div>
                                        <button className='tags_button'>#grapti</button>
                                        <button className='tags_button'>Bright</button>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'block' }}>
                                <label className='font12' style={{ margin: '10px 0 15px' }}>Composition</label>
                                <label className='font12_6'>Nylon 100%, Polyester 97%, Spandex/Elastane 3%</label>
                            </div>

                        </div>
                        <div><Divider /></div>
                        <div className='space_between'>
                            <div>
                                <label className='font12_6'>Drop from</label>
                            </div>
                            <Link to='/profile/personalinfo'>
                                <div className='d-flex'>
                                    <label className='font12'>Hanna Montana</label>
                                    <img src={user_avatar} alt='' style={{ marginLeft: 10 }} />
                                </div>
                            </Link>
                        </div>
                        <div style={{ height: 100 }}></div>

                    </div>
                    <div className='space_between add_bag_btn'>
                        <div style={{ width: '30%', borderRight: '1px solid rgb(0,0,0,0.2)', paddingRight: 15 }}>
                            <div className='space_between'>
                                <label className='font12_6'>Shipping</label>
                                <label className='font12'>$35</label>
                            </div>
                            <div className='space_between'>
                                <label className='font12_6'>Total</label>
                                <label className='total_price font20'>$1002</label>
                            </div>
                        </div>
                        <div>
                            <label className='font20' style={{ cursor: 'pointer' }}>add to bag</label>
                        </div>
                        <div onClick={handleFavorite}>
                            <img src={!favor? heart: heart2} alt='' style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                </Drawer>

                <Notification
                    show={showNotification}
                    onHide={() => setShowNotification(false)}
                />
                <LoginedNoti
                    show={showLoginedNotification}
                    onHide={() => setShowLoginedNotification(false)}
                />

                <Video
                    show={showVideo}
                    onHide={() => setShowVideo(false)}
                />

                <MapWrapper
                    show={map}
                    onHide={() => setMap(false)}
                />
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(GraphicCard);