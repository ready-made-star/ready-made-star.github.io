import React, { useState } from 'react';
import { Modal } from 'antd';
import net from './assets/net.png';
import logo from './assets/logo.png';
import location from './assets/location.png';
import profile from './assets/profile.png';
import bag from './assets/bag.png';
import './Author/css/header.css';
import './Author/css/sms.css';
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd-country-phone-input/dist/index.css';
import ReactInputVerificationCode from 'react-input-verification-code';
import Timer from './Author/Timer';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnterCode, setIsEnterCode] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

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
                    <img className='logo' src={logo} alt='' style={{ cursor: "pointer" }} />
                    <h6 className='mobile_version mobile_menu' style={{ cursor: "pointer" }}>Menu</h6>
                </div>

                <div className='profile'>
                    <div className='help'>
                        <img src={net} alt='' />
                        <div>What can we help you find?</div>
                    </div>
                    <div className='profile_set'>
                        <img src={location} alt='' style={{ cursor: "pointer" }} />
                        <img src={profile} alt='' onClick={handleLogin} style={{ cursor: "pointer" }} />
                        <img src={bag} alt='' style={{ cursor: "pointer" }} />
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
                    <div style={{ textAlign: 'center', cursor: "pointer" }} onClick={handleOk}>
                        Continue
                    </div>
                ]}
            >
                <div>
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
                    <div className='dashborder'>Already a member? <a>Sign in</a></div>
                </div>
            </Modal>

            <Modal
                title="Enter code"
                open={isEnterCode}
                onOk={handleOk}
                onCancel={handleCancel}
                width={400}
                footer={[
                    <div style={{ textAlign: 'center', cursor: "pointer" }} onClick={handleCancel}>
                        Continue
                    </div>
                ]}
            >
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



        </>
    )
}
export default Header;