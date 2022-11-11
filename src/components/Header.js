import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Drawer, Collapse } from 'antd';
import net from './assets/net.png';
import logo from './assets/logo.svg';
import location from './assets/location.png';
import noti from './assets/noti.png';
import user_avatar from './assets/user_avatar.png';
import profile from './assets/profile.png';
import bag from './assets/bag.png';
import close from './assets/close.svg';
import net2 from './assets/net2.png';
import logo2 from './assets/logo2.svg';
import location2 from './assets/location2.png';
import noti2 from './assets/noti2.png';
import profile2 from './assets/profile2.png';
import ellipse from './assets/ellipse.png';
import presale from './assets/presal.png';
import raffle from './assets/raffle.png';
import pin from './assets/pin.png';
import channel2 from './assets/channel2.png';
import ellipse2 from './assets/ellipse2.png';
import presale2 from './assets/presal2.png';
import raffle2 from './assets/raffle2.png';
import pin2 from './assets/pin2.png';
import spotify from './assets/spotify.png';
import switcher from './assets/switcher.png';
import switcher2 from './assets/switcher2.png';
import filter_arrow from './assets/filter_arrow.png';
import filter_arrow2 from './assets/filter_arrow2.png';
import collape_icon from './assets/collape_icon.png';
import collape_icon2 from './assets/collape_icon2.png';
import collape_icon_d from './assets/collape_icon_d.png';
import collape_icon_d2 from './assets/collape_icon_d2.png';
import summer from './assets/summer.png';
import winter from './assets/winter.png';
import spring from './assets/spring.png';
import fall from './assets/fall.png';
import fashion from './assets/fashion.png';
import goods from './assets/goods.png';
import tech from './assets/tech.png';
import beauty from './assets/beauty.png';
import summer2 from './assets/summer2.png';
import winter2 from './assets/winter2.png';
import spring2 from './assets/spring2.png';
import fall2 from './assets/fall2.png';
import fashion2 from './assets/fashion2.png';
import goods2 from './assets/goods2.png';
import tech2 from './assets/tech2.png';
import beauty2 from './assets/beauty2.png';
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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { MdGridView } from 'react-icons/md';
import { CgLaptop } from 'react-icons/cg';
import { toggleTheme } from '../actions/index';

const { Panel } = Collapse;

const noti_menu = [
    {
        id: 1,
        description: 'Lex Murphy requested access to UNIX directory tree hierarchy',
        date: 'Today at 9:42 AM'
    },
    {
        id: 2,
        description: 'Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report',
        date: 'Yesterday at 11:42 PM'
    },
    {
        id: 3,
        description: 'Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report',
        date: 'Yesterday at 11:42 PM'
    },
    {
        id: 4,
        description: 'Ray Arnold left 6 comments on Isla Nublar SOC2 compliance report',
        date: 'Yesterday at 11:42 PM'
    },
];

function Header(props) {
    const { theme, toggleTheme } = { ...props };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEnterCode, setIsEnterCode] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [checkoutShow, setCheckoutShow] = useState(false);
    const [timer, setTimer] = useState('block');
    const [logined, setLogin] = useState(false);
    const [showMenu, setShowMenu] = useState(false);


    const handleSwitch = () => {
        toggleTheme(!theme)
    }
    const handleChange = (e) => {
        if (e.length === 6) {
            setTimer('none');
        }
    }

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

    const handlelogin = () => {
        setLogin(true);
        setIsEnterCode(false);
    }

    const getFlag = (short) => {
        const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
        // for dumi
        if (typeof data === 'string') {
            return data;
        }
        // for CRA
        return data.default;
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {noti_menu.map((item) => (
                <div className='p-2'>
                    <div className='bg-danger' style={{ width: 4, height: 4, borderRadius: 10 }}></div>
                    <div className='d-grid text-left pl-2'>
                        <label className='font12'>{item.description}</label>
                        <label className='font10_2'>{item.date}</label>
                    </div>
                </div>
            ))}

        </Tooltip>
    );

    return (
        <>
            <div className='author_header'>
                <div className='display-header'>
                    <div style={{ display: 'flex', gap: 10 }}>
                        {/* <img className='logo' onClick={()=>window.location.href="/"}  alt='' style={{ cursor: "pointer" }} />s */}
                        <Link to='/'><img className='logo' src={theme ? logo : logo2} alt='' style={{ cursor: "pointer" }} /></Link>
                        <label className='mobile_version mobile_menu font16' onClick={() => setShowMenu(true)} style={{ cursor: "pointer" }}>Menu</label>
                    </div>

                    <div className='profile'>
                        <div className='help'>
                            <img src={theme ? net : net2} alt='' />
                            <div>What can we help you find?</div>
                        </div>
                        <div className='profile_set' style={{gap: logined? 2: 30}}>
                            <OverlayTrigger
                                rootClose
                                trigger='click'
                                placement="bottom-end"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            // onExit={() => setShow(false)}
                            >
                                <div className='logined_badge ' style={{ display: logined ? 'flex' : 'none' }}>
                                    <img src={theme ? noti : noti2} alt='' style={{ cursor: "pointer" }} />
                                    <label className='badge' style={{ display: logined ? 'block' : 'none' }}>3</label>
                                </div>
                            </OverlayTrigger>

                            <img src={theme ? noti : noti2} alt='' style={{ cursor: "pointer", display: logined ? 'none' : 'block' }} />

                            <div className='login_avatar' style={{ backgroundImage: theme ? 'url("/images/login_net.png")' : 'url("/images/login_net2.png")', display: logined ? 'flex' : 'none' }}>
                                <img src={user_avatar} alt='avatar' />
                            </div>
                            <img src={theme ? profile : profile2} alt='' onClick={handleLogin} style={{ display: logined ? 'none' : 'block', cursor: "pointer" }} />


                            <img src={theme ? bag : bag2} alt='' onClick={handleCheckout} style={{ cursor: "pointer", display: logined ? 'none' : 'block' }} />

                            <div className='logined_badge ' style={{ display: logined ? 'flex' : 'none' }}>
                                <img src={theme ? bag : bag2} alt='' onClick={handleCheckout} style={{ cursor: "pointer" }} />
                                <label className='badge2' style={{ display: logined ? 'block' : 'none' }}>2</label>
                            </div>
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
                        <div className='font12_6'>Phone</div>
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
                        <div className='dashborder font14'>Already a member? <a style={{ textDecoration: 'underline' }}>Sign in</a></div>
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
                            <div className='checkout_footer font16' onClick={handlelogin} style={{ textAlign: 'center', cursor: "pointer" }}>
                                Continue
                            </div>
                        </Link>
                    ]}
                >
                    <img src={close} alt='' className='close_login' onClick={handleCancel} />
                    <div>
                        <div className='font14_w4'>We just sent SMS with the confirmation code to your mobile number <label style={{ color: '#CCB783' }}>+17 323 451 7899</label></div>
                        <div className="custom-styles">
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
                    </div>
                </Modal>

                <CheckOut
                    show={checkoutShow}
                    onHide={() => closeCheckout()}
                // onHide={() => setCheckoutShow()}
                />

                <Drawer
                    placement='left'
                    closable={false}
                    onClose={() => setShowMenu(false)}
                    open={showMenu}
                // size={drawerSize}
                >
                    <img src={close} className='menu_close' alt='close' onClick={() => setShowMenu(false)} />
                    <div className='filter' id="fade_div_component">
                        <label className='font16 p-3' style={{ cursor: 'pointer' }}>Channels</label>
                        <div className='channel_viewer pl-3'>
                            <Link to='/'>
                                <div className='grid_view' tabIndex="1">
                                    <MdGridView size={25} />
                                </div>
                            </Link>
                            <Link to='/fullscreenview'>
                                <div className='full_view' tabIndex="2">
                                    <CgLaptop size={25} />
                                </div>
                            </Link>
                            <Link to='/globemap'>
                                <div>
                                    <img src={theme ? location : location2} alt='' style={{ cursor: "pointer", width: 20 }} />
                                </div>
                            </Link>
                        </div>
                        <Collapse defaultActiveKey={['1']} expandIconPosition='end'
                            expandIcon={({ isActive }) => <img src={isActive ? (theme ? collape_icon : collape_icon_d) : (theme ? collape_icon2 : collape_icon_d2)} alt='collape' />}
                        >
                            <Panel header="Drop Type" key="1">
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? ellipse : ellipse2} alt='' />
                                    <div className='font12_6'>Available Now</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? presale : presale2} alt='' />
                                    <div className='font12_6'>Presale</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? raffle : raffle2} alt='' />
                                    <div className='font12_6'>Raffle</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? pin : pin2} alt='' />
                                    <div className='font12_6'>Pin</div>
                                </div>
                            </Panel>
                            <Panel header="Creators" key="2">
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <div><img src={user_avatar} alt='' style={{ width: 30, height: 30 }} /></div>
                                    <label className='font12_6'>@hannamontana</label>
                                </div>
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <div><img src={user_avatar} alt='' style={{ width: 30, height: 30 }} /></div>
                                    <label className='font12_6'>@hannamontana</label>
                                </div>
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <div><img src={user_avatar} alt='' style={{ width: 30, height: 30 }} /></div>
                                    <label className='font12_6'>@hannamontana</label>
                                </div>
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <div><img src={user_avatar} alt='' style={{ width: 30, height: 30 }} /></div>
                                    <label className='font12_6'>@hannamontana</label>
                                </div>
                            </Panel>
                            <Panel header="Categories" key="3">
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? fashion : fashion2} alt='' />
                                    <div className='font12_6'>Fashion</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? beauty : beauty2} alt='' />
                                    <div className='font12_6'>Beauty</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? tech : tech2} alt='' />
                                    <div className='font12_6'>Tech</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? goods : goods2} alt='' />
                                    <div className='font12_6'>Goods</div>
                                </div>
                            </Panel>
                            <Panel header="Price" key="4">
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <label className='font12_6'>$120</label>
                                </div>
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <label className='font12_6'>$120</label>
                                </div>
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <label className='font12_6'>$120</label>
                                </div>
                                <div className='d-flex align-items-center p-2' style={{ gap: 10 }}>
                                    <label className='font12_6'>$120</label>
                                </div>
                            </Panel>
                            <Panel header="Seasons" key="5">
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? winter : winter2} alt='' />
                                    <div className='font12_6'>Winter</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? spring : spring2} alt='' />
                                    <div className='font12_6'>Spring</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? summer : summer2} alt='' />
                                    <div className='font12_6'>Summer</div>
                                </div>
                                <div className='channel_item' style={{ cursor: "pointer" }}>
                                    <img src={theme ? fall : fall2} alt='' />
                                    <div className='font12_6'>Fall</div>
                                </div>
                            </Panel>
                        </Collapse>
                        <div className='help mobile_version'>
                            <img src={theme ? net : net2} alt='' />
                            <div>What can we help you find?</div>
                        </div>

                        <div className='channel_spotify'>
                            <div style={{ margin: '15px 0' }}>

                            </div>
                            <div className='d-flex' style={{ margin: '15px 0', alignItems: 'end' }}>
                                <img src={theme ? switcher : switcher2} alt='' style={{ cursor: "pointer" }} onClick={handleSwitch} />
                            </div>
                        </div>
                    </div>

                </Drawer>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: (value) => {
            dispatch(toggleTheme(value))
        }
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
