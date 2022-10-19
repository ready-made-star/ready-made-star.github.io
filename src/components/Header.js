import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import net from './assets/net.png';
import logo from './assets/logo.svg';
import location from './assets/location.png';
import noti from './assets/noti.png';
import profile from './assets/profile.png';
import bag from './assets/bag.png';
import close from './assets/close.svg';
import net2 from './assets/net2.png';
import logo2 from './assets/logo2.svg';
import location2 from './assets/location2.png';
import noti2 from './assets/noti2.png';
import profile2 from './assets/profile2.png';
import bag2 from './assets/bag2.png';
import close2 from './assets/close2.svg';
import './Author/css/header.css';
import './Author/css/sms.css';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd-country-phone-input/dist/index.css';
import ReactInputVerificationCode from 'react-input-verification-code';
import Timer from './Author/Timer';
import CheckOut from './Checkout';
import { connect } from 'react-redux';
function Header(props) {
    const { theme } = { ...props };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnterCode, setIsEnterCode] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [checkoutShow, setCheckoutShow] = useState(false);

    const handleCheckout = () => {
        setCheckoutShow(true);
    }

    const closeCheckout = (showCheckout) => {
        setCheckoutShow(showCheckout)
    }

    const handleLogin = () => {
        setIsModalOpen(true);
    }
    const handlelogint = () => {
        setModalShow(true)
    }

    const handleOk = () => {
        setIsModalOpen(false);
        setIsEnterCode(true);
    };

    const handleCancel = () => {
        // alert('cancler');
        setIsModalOpen(false);
        setIsEnterCode(false);
    };

    const getFlag = (short) => {
        const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
        // for dumi
        if (typeof data === 'string') {
            return data;
        }
        // for CRA
        return data.default;
    };

    return (
        <>

            <div className='display-header'>
                <div style={{ display: 'flex', gap: 10 }}>
                    {/* <img className='logo' onClick={()=>window.location.href="/"}  alt='' style={{ cursor: "pointer" }} />s */}
                    <Link to='/'><img className='logo' src={theme ? logo : logo2} alt='' style={{ cursor: "pointer" }} /></Link>
                    <label className='mobile_version mobile_menu font20' style={{ cursor: "pointer" }}>Menu</label>
                </div>

                <div className='profile'>
                    <div className='help'>
                        <img src={theme ? net : net2} alt='' />
                        <div>What can we help you find?</div>
                    </div>
                    <div className='profile_set'>
                        <img className='desktop_version' src={theme ? location : location2} alt='' style={{ cursor: "pointer" }} />
                        <img className='mobile_version' src={theme ? noti : noti2} alt='' style={{ cursor: "pointer" }} />
                        <img src={theme ? profile : profile2} alt='' onClick={handleLogin} style={{ cursor: "pointer" }} />
                        <img src={theme ? bag : bag2} alt='' onClick={handleCheckout} style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>

            {/* Login part */}

            <Modal
                title="Create your account"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={400}
                footer={[
                    <div className='checkout_footer font16' style={{ textAlign: 'center', cursor: "pointer" }} onClick={handleOk}>
                        Continue
                    </div>
                ]}
            >
                <div id='login'>
                    <img src={close} alt='' className='close_login' onClick={handleCancel} />
                    <div>Phone</div>
                    <ConfigProvider
                        locale={en}
                        areaMapper={(area) => {
                            return {
                                ...area,
                                emoji: (
                                    <img
                                        alt="flag"
                                        style={{ width: 18, height: 18, verticalAlign: 'sub' }}
                                        src={getFlag(area.short)}
                                    />
                                ),
                            };
                        }}
                    >
                        <CountryPhoneInput
                            style={{ margin: '8px 0 20px' }}
                            defaultValue={{ short: 'US' }}
                            placeholder="233 225 4567"
                        />
                    </ConfigProvider>
                    <div className='dashborder'>Already a member? <a style={{textDecoration: 'underline'}}>Sign in</a></div>
                </div>
            </Modal>

            <Modal
                title="Enter code"
                open={isEnterCode}
                onOk={handleOk}
                onCancel={handleCancel}
                width={400}
                footer={[
                    <Link to='/profile/personalinfo'>
                        <div className='checkout_footer font16' style={{ textAlign: 'center', cursor: "pointer" }}>
                            Continue
                        </div>
                    </Link>
                ]}
            >
                <img src={close} alt='' className='close_login' onClick={handleCancel} />
                <div>
                    <div>We just sent SMS with the confirmation code to your mobile number +17 323 451 7899</div>
                    <div className="custom-styles">
                        <ReactInputVerificationCode
                            autoFocus
                            placeholder=""
                            length={6}
                            onChange={console.log}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: 15, margin: 15 }}>
                        <div style={{ cursor: "pointer" }}>Resend</div>
                        <div><Timer initialMinute={1} initialSeconds={59} /></div>
                    </div>
                </div>
            </Modal>

            <CheckOut
                show={checkoutShow}
                onHide={() => closeCheckout()}
            // onHide={() => setCheckoutShow()}
            />
        </>
    )
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Header);
