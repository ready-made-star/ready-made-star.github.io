// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Menu, Radio, Button } from 'antd';
import ProductCard from '../../../components/Homepage/ProductCard';
import './orders.css';
import { styled } from "@mui/material/styles";
import Map from '../map/Map';
import Marker from '../map/Marker';
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
    background: "rgba(51, 51, 51, 0.2)",
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
            <div className='d-flex' style={{ background: 'black' }}>
                <div className='orders1'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='orders2'>
                    <div>
                        <label>Thank you, Stedman!</label>
                        <label>ORDER #123456</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src="/images/step11.png" alt='' />
                            <label>Confirmed</label>
                            <label>Jun 3</label>
                        </div>
                        <StepLine1 />
                        <div>
                            <img src="/images/step2.png" alt='' />
                            <label>On its way</label>
                            <label>Jun 13</label>
                        </div>
                        <StepLine1 />
                        <div>
                            <img src="/images/step3.png" alt='' />
                            <label>Out for delivery</label>
                        </div>
                        <StepLine1 />
                        <div>
                            <img src="/images/step4.png" alt='' />
                            <label>Delivered</label>
                        </div>
                    </div>
                    <div>
                        <Map id="map" apiKey={apiKey} center={position} zoom={zoom}>
                            <Marker position={position} />
                        </Map>
                    </div>
                    <div className='space-between'>
                        <div style={{display:'block'}}>
                            <label>Your order is on its way</label>
                            <label>You will receive updates on its progress</label>
                        </div>
                        <div style={{display:'block'}}>
                            <label>USPS tracking number:</label>
                            <label>1234567890</label>
                        </div>
                    </div>
                    <div>
                        <label>Got questions?</label>
                        <a href='/contactus'>contact us</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalInfo;