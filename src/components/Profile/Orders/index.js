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
import spotify from '../../assets/spotify.png';
import { useState } from 'react';
import { connect } from 'react-redux';
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
const cardimg = "images/product_image.png";
const product_creator = "images/product_creator.png";
const fashion = "images/fashion.png";
const fashion2 = "images/fashion2.png";
const raffle = 'images/raffle.png';
const raffle2 = 'images/raffle2.png';
const beauty = 'images/beauty.png';
const beauty2 = 'images/beauty2.png';
const ellipse = 'images/ellipse.png';
const ellipse2 = 'images/ellipse2.png';
const fall = 'images/fall.png';
const goods = 'images/goods.png';
const pin = 'images/pin.png';
const pin2 = 'images/pin2.png';
const presal = 'images/presal.png';
const spring = 'images/spring.png';
const summer = 'images/summer.png';
const winter = 'images/winter.png';
const tech = 'images/tech.png';
const tech2 = 'images/tech2.png';

const data = [
    {
        id: 1,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Fashion',
        category_icon: fashion,
        category_icon2: fashion2,
        status_name: 'Now',
        status_icon: ellipse,
        status_icon2: ellipse2,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#4B355A',
        background: '#4B355A'
    },
    {
        id: 2,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Beauty',
        category_icon: beauty,
        category_icon2: beauty2,
        status_name: 'Pin',
        status_icon: pin,
        status_icon2: pin2,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#F0E681',
        background: '#3784AB'
    },
    {
        id: 3,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Tech',
        category_icon: tech,
        category_icon2: tech2,
        status_name: 'Raffle',
        status_icon: raffle,
        status_icon2: raffle2,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#3784AB',
        background: '#40C397'
    },

];

function PersonalInfo(props) {

    const { theme, toggleTheme } = { ...props }
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
                            {data.map((item) => (
                                
                                <div style={{ marginBottom: 24, border: item.id==1? '1px solid #EB4949':'none', borderRadius: 12 }}>
                                    <ProductCard
                                        key={item.id}
                                        cardimg={item.cardimg}
                                        data_released={item.data_released}
                                        category_name={item.category_name}
                                        category_icon={theme ? item.category_icon : item.category_icon2}
                                        status_name={item.status_name}
                                        status_icon={item.status_icon}
                                        creator_name={item.creator_name}
                                        creator_icon={item.creator_icon}
                                        border_color={item.border_color}
                                        background={item.background}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className='orders2'>
                            <div className='space_between'>
                                <label className='font20'>Thank you, Stedman!</label>
                                <label className='font12'>ORDER #123456</label>
                            </div>
                            <div className='delivery'>
                                <div style={{ width: 55, display:'grid' }}>
                                    <img src="/images/step11.png" alt='' className='w-100' />
                                    <label className='font12'>Confirmed</label>
                                    <label className='font12' style={{margin:'auto'}}>Jun 3</label>
                                </div>
                                <StepLine1 />
                                <div style={{ width: 55, display: 'grid' }}>
                                    <img src="/images/step2.png" alt='' />
                                    <label className='font12' style={{ marginLeft:-5, marginRight:-5 }}>On its way</label>
                                    <label className='font12' style={{margin:'auto'}}>Jun 13</label>
                                </div>
                                <StepLine2 />
                                <div style={{ width: 55 }}>
                                    <img src="/images/step3.png" alt='' />
                                    <label className='font12' style={{ marginLeft: -50, marginRight:-50, justifyContent:'center'}}>Out for delivery</label>
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
                            {data.map((item) => (
                                <SwiperSlide>
                                    <div style={{ cursor: "pointer", margin: '0 10px', border: item.id==1? '1px solid #EB4949':'none', borderRadius: 12 }}>
                                        <ProductCard
                                            key={item.id}
                                            cardimg={item.cardimg}
                                            data_released={item.data_released}
                                            category_name={item.category_name}
                                            category_icon={theme ? item.category_icon : item.category_icon2}
                                            status_name={item.status_name}
                                            status_icon={item.status_icon}
                                            creator_name={item.creator_name}
                                            creator_icon={item.creator_icon}
                                            border_color={item.border_color}
                                            background={item.background}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='mobile_order2'>
                        <div className='space_between'>
                            <label className='font20'>Thank you, Stedman!</label>
                            <label className='font12'>ORDER #123456</label>
                        </div>
                        <div className='delivery'>
                            <div style={{ width: 55, display:'grid' }}>
                                <img src="/images/step11.png" alt='' className='w-100' />
                                <label className='font12'>Confirmed</label>
                                <label className='font12' style={{margin:'auto'}}>Jun 3</label>
                            </div>
                            <StepLine1 />
                            <div style={{ width: 55, display: 'grid' }}>
                                    <img src="/images/step2.png" alt='' />
                                    <label className='font12' style={{ marginLeft:-5, marginRight:-5 }}>On its way</label>
                                    <label className='font12' style={{margin:'auto'}}>Jun 13</label>
                                </div>
                                <StepLine2 />
                                <div style={{ width: 55 }}>
                                    <img src="/images/step3.png" alt='' />
                                    <label className='font12' style={{ marginLeft: -50, marginRight:-50, justifyContent:'center'}}>Out for delivery</label>
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
                            {data.map((item) => (
                                
                                <SwiperSlide>
                                    <div style={{ cursor: "pointer", margin: '0 10px', border: item.id==1? '1px solid #EB4949':'none', borderRadius: 12 }}>
                                        <ProductCard
                                            key={item.id}
                                            cardimg={item.cardimg}
                                            data_released={item.data_released}
                                            category_name={item.category_name}
                                            category_icon={theme ? item.category_icon : item.category_icon2}
                                            status_name={item.status_name}
                                            status_icon={item.status_icon}
                                            creator_name={item.creator_name}
                                            creator_icon={item.creator_icon}
                                            border_color={item.border_color}
                                            background={item.background}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='orders2'>
                        <div className='space_between'>
                            <label className='font20'>Thank you, Stedman!</label>
                            <label className='font12'>ORDER #123456</label>
                        </div>
                        <div className='delivery'>
                            <div style={{ width: 55, display: 'grid' }}>
                                <img src="/images/step11.png" alt='' className='w-100' />
                                <label className='font12'>Confirmed</label>
                                <label className='font12' style={{margin:'auto'}}>Jun 3</label>
                            </div>
                            <StepLine1 />
                            <div style={{ width: 55, display: 'grid' }}>
                                    <img src="/images/step2.png" alt='' />
                                    <label className='font12' style={{ marginLeft:-5, marginRight:-5 }}>On its way</label>
                                    <label className='font12' style={{margin:'auto'}}>Jun 13</label>
                                </div>
                                <StepLine2 />
                                <div style={{ width: 55 }}>
                                    <img src="/images/step3.png" alt='' />
                                    <label className='font12' style={{ marginLeft: -50, marginRight:-50, justifyContent:'center'}}>Out for delivery</label>
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
                <img className='mobile_spotify' src={spotify} alt='spotify' style={{ bottom: '1%' }} />
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(PersonalInfo);