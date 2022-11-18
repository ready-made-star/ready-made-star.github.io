import Modal from 'react-bootstrap/Modal';
import React, { useState, useRef } from 'react';
import PhoneNumber from '../Checkout/PhoneNumber';
import ReactInputVerificationCode from 'react-input-verification-code';
import Timer from '../Author/Timer';
import close from '../../components/assets/close.svg';
import SMSsent from '../../components/assets/sms_sent.png';
import ProductCard from '../Homepage/ProductCard';
import { connect } from 'react-redux';
import './noti.css';

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

const item =
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
}

function Notification(props) {
    const { theme, toggleTheme } = { ...props };
    const [showCheckout, setShowCheckout] = useState(false);
    const [enterPhoneNumber, setEnterPhoneNumber] = useState('block');
    const [enterSMS, setEnterSMS] = useState('none');
    const [checkout, setCheckout] = useState('none');
    const [timer, setTimer] = useState('block');
    const [footerName, setFooterName] = useState('Confirm');
    const [activeKey, setActiveKey] = useState('1');
    const [showSuccess, setShowSuccess] = useState(false);

    const [value2, setValue2] = useState('Credit card');

    const handleSendNumber = () => {
        setEnterPhoneNumber('none');
        setEnterSMS('block');
    }
    const handleSendSMS = () => {
        setEnterSMS('none');
        setCheckout('block');
        setFooterName('Continue to delivery address');

    }

    const handleClose = () => {
        props.onHide(false);
    }

    const handleChange = (e) => {
        if (e.length === 6) {
            setTimer('none');
            setFooterName('Continue to checkout');
        }
    }
    const onChange = (key) => {
        setActiveKey(key);
    };


    const toggleShowCheckout = () => {
        setShowCheckout(!showCheckout)
    }

    const closeModal = () => {
        console.log('button closed');
        props.onHide(!showCheckout)
    }
    const [showTax, setShowTax] = useState(false);
    const targetTax = useRef(null);



    return (
        <>
            <Modal
                {...props}
                size="md"
                centered
            >

                <Modal.Body className='noti_part' style={{ border: checkout == 'none' ? null : 'none', backgroundColor: checkout == 'none' ? 'var(--background-color)' : 'transparent' }}>
                    <div className='phone' style={{ display: enterPhoneNumber }}>
                        <div className='noti_header font18 pb-0' style={{ border: 'none' }}>
                            <label>Let us know where to send the text.</label>
                            <label className='font12_6'>We'll send you quick and simple updates via text. Standard rates apply.</label>
                            <img className='close' src={close} alt='close' onClick={handleClose} />
                        </div>
                        <div className='notification_body'>
                            <PhoneNumber />
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
                        <div className='checkout_footer text-center font16' onClick={handleSendNumber}>Get Notified</div>
                    </div>

                    <div style={{ display: enterSMS }}>
                        <div className='noti_header font18 pb-0' style={{ border: 'none' }}>
                            <label>Let us know where to send the text.</label>
                            <label className='font12_6'>We'll send you quick and simple updates via text. Standard rates apply.</label>
                            <img className='close' src={close} alt='close' onClick={handleClose} />
                        </div>
                        <div className='notification_body'>
                            <div className='font14_w4'>We just sent SMS with the confirmation code to your mobile number <label style={{ color: '#CCB783' }}>+17 323 451 7899</label></div>
                            <div className="custom-styles sms_input" >
                                <ReactInputVerificationCode
                                    autoFocus
                                    placeholder=""
                                    length={6}
                                    onChange={handleChange}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: 15, margin: 15 }}>
                                <div className='font12' style={{ cursor: "pointer", color: 'rgba(204, 183, 131, 0.4)' }}>Resend</div>
                                <div className='font12_6' style={{ display: timer }}><Timer initialMinute={1} initialSeconds={59} /></div>
                            </div>
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
                        <div className='checkout_footer text-center font16' onClick={handleSendSMS}>{footerName}</div>
                    </div>

                    <div style={{ display: checkout }}>
                        <img src={SMSsent} alt='sms' className='w-100' />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Notification);
