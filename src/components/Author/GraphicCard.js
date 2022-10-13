import { Card, Modal } from 'antd';
import './css/main.css';
import './css/card.css';
import cardimg from '../assets/cardimg.png';
import pin from '../assets/pin.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useState } from 'react';
import CheckOut from '../Checkout';

function GraphicCard() {

    const [checkoutShow, setCheckoutShow] = useState(false);
    const handleCheckout = () => {
        setCheckoutShow(true);
    }
    return (
        <>
            <div className='graphic_card'>
                <Card
                    hoverable
                    style={{
                        width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)'
                    }}
                    onClick={handleCheckout}
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
                
                <CheckOut
                    show={checkoutShow}
                    onHide={() => setCheckoutShow(false)}
                />
            </div>
        </>
    )
}
export default GraphicCard;