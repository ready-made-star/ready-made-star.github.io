import { Card, Divider } from 'antd';
import '../../Author/css/main.css';
import '../../Author/css/card.css';
import cardimg from '../../assets/cardimg.png';
import pin from '../../assets/pin.png';
import close from '../../assets/close.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import video_image from '../../assets/video_image.png';
import arrow from '../../assets/arrow.png';
import dolce from '../../assets/dolce.png';
import arrow2 from '../../assets/arrow2.png';
import dolce2 from '../../assets/dolce2.png';
import user_avatar from '../../assets/user_avatar.png';
import empty_location from '../../assets/empty_location.png';
import video_play from '../../assets/video_play.svg';
import heart from '../../assets/heart.svg';
import Video from '../Video';
import Checkout from '../../Checkout';
import './productcard.css';
import { TbPin } from 'react-icons/tb';
import { BsGem } from 'react-icons/bs';
import { connect } from 'react-redux';
import MapWrapper from '../../Darkmap';

function ProductCard(props) {
    const { theme } = { ...props };
    const [showCard, setShowCard] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showPlayButton1, setShowPlayButton1] = useState('none');
    const [showPlayButton2, setShowPlayButton2] = useState('none');
    const [map, setMap] = useState(false);
    // const [drawerSize, setDrawerSize] = useState(1000);
    // const [mobileView, setMobileView] = useState(false)

    let mobileView = false;

    if(window.innerWidth<680){
        mobileView = true;
        // console.log('ss');
    }
    window.addEventListener('resize', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (window.innerWidth < 680) {
            // console.log(window.innerHeight);
            // alert('mobile');
            // setMobileView(true);
            // setDrawerSize(String(window.innerHeight));
        }
        else{
            // setMobileView(false);
            // setDrawerSize(1000);
        }
    })
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
    return (
        <>
            <div className='graphic_card'>
                <Card
                    style={{
                        width: '100%', borderRadius: 12, border: '1px solid var(--font_color2)', cursor: 'pointer'
                    }}
                    onClick={() => setShowCard(true)}
                    cover={<img alt="example" src={cardimg} style={{ width: '100%', borderRadius: '12px 12px 0 0', maxWidth: '-webkit-fill-available' }} />}
                >
                    <div className='home_card_content'>
                        <div className='space_between p-1' style={{ borderBottom: '1px var(--font_color2) solid' }}>
                            <div>
                                <div className='font10_2'>Date released</div>
                                <div className='font10'>12/26/2022</div>
                            </div>
                            <div className='d-flex'>
                                <button className='cardbtn' style={{ cursor: "pointer" }} ><BsGem />Fashion</button>
                                <button className='pinbtn' style={{ cursor: "pointer" }} ><TbPin />Pin</button>
                            </div>
                        </div>
                        <div className='space_between p-1'>
                            <label className='font10_2'>Drop from</label>
                            <div className='d-flex align-items-center' style={{ gap: 10 }}>
                                <label>@hannamontana</label>
                                <div><img src={user_avatar} alt='' style={{ width: 30, height: 30 }} /></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Drawer
                    placement={mobileView? 'bottom': 'right'}
                    closable={false}
                    onClose={() => setShowCard(false)}
                    open={showCard}
                    // width={drawerSize}
                >
                    <div className='mobile_version' style={{ height: 200, background: 'transparent' }}></div>
                    <div className='tray'>
                        <div className='space_between'>
                            <div className='font14'>
                                <Button type='round' style={{ color: 'black' }}>Dolce && Gabbana</Button>
                                <Button type='round' className='white_btn'>Off-White</Button>
                            </div>
                            <img src={close} alt='' onClick={() => setShowCard(false)} style={{ cursor: 'pointer' }} />
                        </div>
                        <div>
                            <Swiper watchSlidesProgress={true} slidesPerView={2.3} className="mySwiper">
                                <SwiperSlide onMouseOver={(e) => handlePlayBtn1(e)} onMouseLeave={(e) => { e.preventDefault(); e.stopPropagation(); setShowPlayButton1('none') }}>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={video_image} alt='' style={{ width: '100%' }} />
                                    </div>
                                    <img className='video_play' onClick={handleVideo} src={video_play} alt='' style={{ display: showPlayButton1 }} />
                                </SwiperSlide>
                                <SwiperSlide onMouseOver={handlePlayBtn2} onMouseLeave={() => setShowPlayButton2('none')}>
                                    <div className='video_image' style={{ cursor: "pointer" }} >
                                        <img src={video_image} alt='' style={{ width: '100%' }} />
                                    </div>
                                    <img className='video_play' onClick={handleVideo} src={video_play} alt='' style={{ display: showPlayButton2 }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={video_image} alt='' style={{ width: '100%' }} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='space_between'>
                            <div>
                                <label className='font16'>Dolce && Gabbana</label>
                                <label className='font12_6'>Graffiti-print shirt jacket</label>
                            </div>
                            <div>
                                <img src={theme?arrow:arrow2} alt='' style={{ cursor: "pointer" }} />
                                <img src={theme?dolce:dolce2} alt='' style={{ marginLeft: 10 }} />
                            </div>
                        </div>
                        <div>
                            <Divider />
                        </div>
                        <div className='d-flex'>
                            <button className='cardbtn' style={{ cursor: "pointer" }} ><BsGem />Fashion</button>
                            <button className='pinbtn' style={{ cursor: "pointer" }} ><TbPin />Pin</button>
                            <button className='cardbtn' style={{ cursor: "pointer" }} >Selling fast!</button>
                        </div>
                        <div style={{ display: 'flex', margin: '20px 0', gap: 10 }}>
                            <div className='size_part'>
                                <button className='size_button'>S 46</button>
                                <button className='size_button'>M 17</button>
                                <button className='size_button'>L 5</button>
                                <button className='size_button'>XL 25</button>
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
                                    Dolce & Gabbana's AW21 Womenswea r collection is a celebration of bold colour and '90s influences. This is reflected in the bright graffiti-style print of this shirt jacket.
                                </label>
                            </div>

                            <div className='d-flex'>
                                <label className='font12_6' style={{ width: '50%' }}>Drop ID# 1234567</label>
                                <label className='font12'>Return Policy</label>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '50%', display: 'grid' }}>
                                    <label className='font12' style={{ margin: '10px 0' }}>Highlights</label>
                                    <label className='font12_6'>-multicolor</label>
                                    <label className='font12_6'>-multicolor</label>
                                    <label className='font12_6'>-multicolor</label>
                                    <label className='font12_6'>-multicolor</label>
                                    <label className='font12_6'>-multicolor</label>
                                </div>
                                <div>
                                    <label style={{ margin: '10px 0' }}>Tags</label>
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
                            <div className='d-flex'>
                                <label className='font12'>Hanna Montana</label>
                                <img src={user_avatar} alt='' style={{ marginLeft: 10 }} />
                            </div>
                        </div>
                        <div style={{ height: 100 }}></div>
                    </div>
                    <div className='space_between add_bag_btn' style={{ background: '#EB4949', padding: 24 }}>
                        <div style={{ width: '30%', borderRight: '1px solid rgb(0,0,0,0.2)', paddingRight: 15 }}>
                            <div className='space_between'>
                                <label>shipping</label>
                                <label>$35</label>
                            </div>
                            <div className='space_between'>
                                <label>total</label>
                                <label className='font20'>$1002</label>
                            </div>
                        </div>
                        <div>
                            <label className='font20' style={{ cursor: 'pointer' }}>add to bag</label>
                        </div>
                        <div>
                            <img src={heart} alt='' style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                </Drawer>

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

export default connect(mapStateToProps)(ProductCard);