import { Card, Modal } from 'antd';
import '../../Author/css/main.css';
import '../../Author/css/card.css';
import cardimg from '../../assets/cardimg.png';
import pin from '../../assets/pin.png';
import close from '../../assets/close.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from 'react';
import { Drawer, Button, Divider } from 'antd';
import video_image from '../../assets/video_image.png';
import arrow from '../../assets/arrow.png';
import dolce from '../../assets/dolce.png';
import user_avatar from '../../assets/user_avatar.png';
import empty_location from '../../assets/empty_location.png';
import video_play from '../../assets/video_play.svg';
import heart from '../../assets/heart.svg';
import './productcard.css';

function GraphicCard(props) {
    const [showCard, setShowCard] = useState(false);
    const [showPlayButton1, setShowPlayButton1] = useState('none');
    const [showPlayButton2, setShowPlayButton2] = useState('none');
    const handlePlayBtn1 = () => {
        setShowPlayButton1('block');
    }
    const handlePlayBtn2 = () => {
        setShowPlayButton2('block');
    }
    return (
        <>
            <div className='graphic_card'>
                <Card
                    hoverable
                    style={{
                        width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)'
                    }}
                    onClick={() => setShowCard(true)}
                    cover={<img alt="example" src={cardimg} style={{ width: '100%', borderRadius: '12px 12px 0 0', maxWidth: '-webkit-fill-available' }} />}
                >
                    <div className='card_content'>
                        <div>
                            <div>Date released</div>
                            <div>12/26/2022</div>
                        </div>
                        <div>
                            <button className='cardbtn' style={{ cursor: "pointer" }} ><img src={pin} alt='' />Fashion</button>
                            <button className='pinbtn' style={{ cursor: "pointer" }} ><img src={pin} alt='' />Pin</button>
                        </div>
                    </div>
                </Card>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={() => setShowCard(false)}
                    open={showCard}
                    size='450px'
                >
                    <div>
                        <div className='space_between'>
                            <div>
                                <Button type='round'>Dolce && Gabbana</Button>
                                <Button type='round' className='white_btn'>Off-White</Button>
                            </div>
                            <img src={close} alt='' onClick={() => setShowCard(false)} />
                        </div>
                        <div>
                            <Swiper watchSlidesProgress={true} slidesPerView={2.3} className="mySwiper">
                                <SwiperSlide>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={video_image} alt='' style={{ width: '130px' }} onMouseOver={handlePlayBtn1} onMouseLeave={() => setShowPlayButton1('none')} />
                                    </div>
                                    <img className='video_play' src={video_play} alt='' style={{ display: showPlayButton1 }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={video_image} alt='' style={{ width: '130px' }} onMouseOver={handlePlayBtn2} onMouseLeave={() => setShowPlayButton2('none')} />
                                    </div>
                                    <img className='video_play' src={video_play} alt='' style={{ display: showPlayButton2 }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='video_image' style={{ cursor: "pointer" }}>
                                        <img src={video_image} alt='' style={{ width: '130px' }} />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className='space_between'>
                            <div>
                                <label className='font20'>Dolce && Gabbana</label>
                                <label className='font12'>Graffiti-print shirt jacket</label>
                            </div>
                            <div>
                                <button className='profile_arrow'><img src={arrow} alt='' style={{ cursor: "pointer" }} /></button>
                                <img src={dolce} alt='' style={{ marginLeft: 10 }} />
                            </div>
                        </div>
                        <div>
                            <button className='cardbtn' style={{ cursor: "pointer" }} ><img src={pin} alt='' />Fashion</button>
                            <button className='pinbtn' style={{ cursor: "pointer" }} ><img src={pin} alt='' />Pin</button>
                            <button className='cardbtn' style={{ cursor: "pointer" }} >Selling fast!</button>
                        </div>
                        <div style={{ display: 'flex' }}>
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
                                <img src={empty_location} alt='' />
                                <label>3531 Sunset Blvd, Los Angeles, CA 90026</label>
                            </div>
                            <div style={{ width: '80%' }}>
                                <label>
                                    Dolce & Gabbana's AW21 Womenswea r collection is a celebration of bold colour and '90s influences. This is reflected in the bright graffiti-style print of this shirt jacket.
                                </label>
                            </div>

                            <div>
                                <label style={{ width: '50%' }}>Drop ID# 1234567</label>
                                <label>Return Policy</label>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '50%' }}>
                                    <label>Highlights</label>
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
                                <label>Composition</label>
                                <label>Nylon 100%, Polyester 97%, Spandex/Elastane 3%</label>
                            </div>

                        </div>
                        <div className='space_between'>
                            <div>
                                <label className='font20'>Drop from</label>
                            </div>
                            <div>
                                <label>Hanna Montana</label>
                                <img src={user_avatar} alt='' style={{ marginLeft: 10 }} />
                            </div>
                        </div>

                    </div>
                    <div className='space_between' style={{background:'red'}}>
                        <div style={{width: '30%', borderRight: '1px solid rgb(0,0,0,0.2)'}}>
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
                            <label className='font20'>add to bag</label>
                        </div>
                        <div>
                            <img src={heart} alt='' />
                        </div>
                    </div>

                </Drawer>

            </div>
        </>
    )
}
export default GraphicCard;