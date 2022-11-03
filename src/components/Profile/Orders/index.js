// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Menu, Radio, Button } from 'antd';
import ProductCard from '../../../components/Homepage/ProductCard';
import './orders.css';
import { styled } from "@mui/material/styles";
import Map from '../map/Map';
import Marker from '../map/Marker';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const apiKey = "AIzaSyAT9SH59Z75iR8OUEcfv-mTklD6xMDHs80";

const StepLine1 = styled("div")(() => ({
    height: "2px",
    width: "305px",
    marginTop: "25px",
    background:
        "linear-gradient(90deg, #4B355A 2.57%, #3784AB 25.48%, #40C397 51.66%, #F0E681 74.93%, #EB4949 99.48%)",
}));

const StepLine2 = styled("div")(() => ({
    height: "2px",
    width: "305px",
    background: "var(--font_color2)",
    marginTop: "25px",
    // marginBottom: "25px",
}));

function PersonalInfo() {
    const zoom = 4;

    const position = {
        lat: 35,
        lng: -100,
    };
    return (
        <>
            <div className='order'>
                <div className='desktop_version'>
                    <div className='orders'>
                        <div className='orders1'>
                            <div style={{ marginBottom: 24 }}>
                                <ProductCard />
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <ProductCard />
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <ProductCard />
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className='orders2'>
                            <div className='space_between'>
                                <label className='font20'>Thank you, Stedman!</label>
                                <label className='font12'>ORDER #123456</label>
                            </div>
                            <div className='delivery'>
                                <div style={{ width: 55 }}>
                                    <img src="/images/step11.png" alt='' className='w-100' />
                                    <label className='font12'>Confirmed</label>
                                    <label className='font12'>Jun 3</label>
                                </div>
                                <StepLine1 />
                                <div>
                                    <img src="/images/step2.png" alt='' />
                                    <label className='font12'>On its way</label>
                                    <label className='font12'>Jun 13</label>
                                </div>
                                <StepLine2 />
                                <div style={{ width: 70 }}>
                                    <img src="/images/step3.png" alt='' className='w-100' />
                                    <label className='font12'>Out for delivery</label>
                                </div>
                                <StepLine2 />
                                <div>
                                    <img src="/images/step4.png" alt='' />
                                    <label className='font12'>Delivered</label>
                                </div>
                            </div>
                            <div>
                                <Map id="map" apiKey={apiKey} center={position} zoom={zoom}>
                                    <Marker position={position} />
                                </Map>
                            </div>
                            <div className='space_between order_view'>
                                <div style={{ display: 'grid' }}>
                                    <label>Your order is on its way</label>
                                    <label className='font16'>You will receive updates on its progress</label>
                                </div>
                                <div style={{ display: 'grid' }}>
                                    <label>USPS tracking number:</label>
                                    <label className='font16'>1234567890</label>
                                </div>
                            </div>
                            <div>
                                <label>Got questions?</label>
                                <a href='/contactus'>contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mobile_version'>
                    <div>
                        <Swiper watchSlidesProgress={true} slidesPerView={1.2} className="mySwiper">
                            <SwiperSlide>
                                <div style={{ cursor: "pointer", margin: '0 10px' }}>
                                    <ProductCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{ cursor: "pointer", margin: '0 10px' }}>
                                    <ProductCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{ cursor: "pointer", margin: '0 10px' }}>
                                    <ProductCard />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='mobile_order2'>
                        <div className='space_between'>
                            <label className='font20'>Thank you, Stedman!</label>
                            <label className='font12'>ORDER #123456</label>
                        </div>
                        <div className='delivery'>
                            <div style={{ width: 55 }}>
                                <img src="/images/step11.png" alt='' className='w-100' />
                                <label className='font12'>Confirmed</label>
                                <label className='font12'>Jun 3</label>
                            </div>
                            <StepLine1 />
                            <div>
                                <img src="/images/step2.png" alt='' />
                                <label className='font12'>On its way</label>
                                <label className='font12'>Jun 13</label>
                            </div>
                            <StepLine2 />
                            <div>
                                <img src="/images/step3.png" alt='' />
                                <label className='font12'>Out for delivery</label>
                            </div>
                            <StepLine2 />
                            <div>
                                <img src="/images/step4.png" alt='' />
                                <label className='font12'>Delivered</label>
                            </div>
                        </div>
                        <div>
                            <Map id="map" apiKey={apiKey} center={position} zoom={zoom}>
                                <Marker position={position} />
                            </Map>
                        </div>
                        <div className='order_view'>
                            <div style={{ display: 'grid' }}>
                                <label>Your order is on its way</label>
                                <label className='font16'>You will receive updates on its progress</label>
                            </div>
                            <div style={{ display: 'grid' }}>
                                <label>USPS tracking number:</label>
                                <label className='font16'>1234567890</label>
                            </div>
                        </div>
                        <div className='text-left'>
                            <label>Got questions?</label>
                            <a href='/contactus'>contact us</a>
                        </div>
                    </div>
                </div>

                
                <div className='tablet_version'>
                    <div className='orders1'>
                        <Swiper watchSlidesProgress={true} slidesPerView={2.2} className="mySwiper">
                            <SwiperSlide>
                                <div style={{ cursor: "pointer", margin: '0 10px' }}>
                                    <ProductCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{ cursor: "pointer", margin: '0 10px' }}>
                                    <ProductCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div style={{ cursor: "pointer", margin: '0 10px' }}>
                                    <ProductCard />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='orders2'>
                        <div className='space_between'>
                            <label className='font20'>Thank you, Stedman!</label>
                            <label className='font12'>ORDER #123456</label>
                        </div>
                        <div className='delivery'>
                            <div style={{ width: 55 }}>
                                <img src="/images/step11.png" alt='' className='w-100' />
                                <label className='font12'>Confirmed</label>
                                <label className='font12'>Jun 3</label>
                            </div>
                            <StepLine1 />
                            <div>
                                <img src="/images/step2.png" alt='' />
                                <label className='font12'>On its way</label>
                                <label className='font12'>Jun 13</label>
                            </div>
                            <StepLine2 />
                            <div>
                                <img src="/images/step3.png" alt='' />
                                <label className='font12'>Out for delivery</label>
                            </div>
                            <StepLine2 />
                            <div>
                                <img src="/images/step4.png" alt='' />
                                <label className='font12'>Delivered</label>
                            </div>
                        </div>
                        <div>
                            <Map id="map" apiKey={apiKey} center={position} zoom={zoom}>
                                <Marker position={position} />
                            </Map>
                        </div>
                        <div className='order_view'>
                            <div style={{ display: 'grid' }}>
                                <label>Your order is on its way</label>
                                <label className='font16'>You will receive updates on its progress</label>
                            </div>
                            <div style={{ display: 'grid' }}>
                                <label>USPS tracking number:</label>
                                <label className='font16'>1234567890</label>
                            </div>
                        </div>
                        <div className='text-left'>
                            <label>Got questions?</label>
                            <a href='/contactus'>contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalInfo;