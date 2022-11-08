import channel from '../assets/channel.png';
import ellipse from '../assets/ellipse.png';
import presale from '../assets/presal.png';
import raffle from '../assets/raffle.png';
import pin from '../assets/pin.png';
import channel2 from '../assets/channel2.png';
import ellipse2 from '../assets/ellipse2.png';
import presale2 from '../assets/presal2.png';
import raffle2 from '../assets/raffle2.png';
import pin2 from '../assets/pin2.png';
import spotify from '../assets/spotify.png';
import switcher from '../assets/switcher.png';
import switcher2 from '../assets/switcher2.png';
import filter_arrow from '../assets/filter_arrow.png';
import filter_arrow2 from '../assets/filter_arrow2.png';
import collape_icon from '../assets/collape_icon.png';
import collape_icon2 from '../assets/collape_icon2.png';
import collape_icon_d from '../assets/collape_icon_d.png';
import collape_icon_d2 from '../assets/collape_icon_d2.png';
import user_avatar from '../assets/user_avatar.png';
import summer from '../assets/summer.png';
import winter from '../assets/winter.png';
import spring from '../assets/spring.png';
import fall from '../assets/fall.png';
import fashion from '../assets/fashion.png';
import goods from '../assets/goods.png';
import tech from '../assets/tech.png';
import beauty from '../assets/beauty.png';
import close from '../assets/close.svg';
import summer2 from '../assets/summer2.png';
import winter2 from '../assets/winter2.png';
import spring2 from '../assets/spring2.png';
import fall2 from '../assets/fall2.png';
import fashion2 from '../assets/fashion2.png';
import goods2 from '../assets/goods2.png';
import tech2 from '../assets/tech2.png';
import beauty2 from '../assets/beauty2.png';
import location from '../assets/location.png';
import location2 from '../assets/location2.png';
import location_click from '../assets/location_click.png';
import location_click2 from '../assets/location_click2.png';
import { useEffect, useState } from 'react';
import './css/channels.css';
import { toggleTheme } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdGridView } from 'react-icons/md';
import { CgLaptop } from 'react-icons/cg';
import { Collapse, Drawer } from 'antd';
import 'animate.css';
const { Panel } = Collapse;

function Channels(props) {
    const { theme, toggleTheme } = { ...props };
    const [mode, setMode] = useState(false);
    const [filter, showFilter] = useState(false);
    const [showRaffle, setShowRaffle] = useState(false);
    const [locateView, setLocationView] = useState(true);
    let mobileView = false;
    let tablet = false;
    // let filter = false;
    if(window.innerWidth>680 && window.innerWidth<1200){
        tablet = true;
    }
    else{
        tablet = false;
    }
    const flag = (filter)=>{
      
        if(filter)
            return "filter animate__animated animate__fadeInLeft"
        else 
            return "filter animate__animated animate__fadeOutLeft"
    } 

    if (window.innerWidth < 680) {
        mobileView = true;
        // console.log('ss');
    }

    const handleSwitch = () => {
        // setMode(!mode);
        toggleTheme(!theme)
    }
    const handleFilter = () => {
        showFilter(!filter);

        // let element = document.querySelector('#fade_div_component');
        // if(!filter){

        //     element.className = "";
        //     element.className ='filter animate__animated animate__fadeInLeft';
        //     filter = !filter;
        // }
        // else {

        //     element.className = "";
        //     element.className ='filter animate__animated animate__fadeOutLeft';
        //     filter = !filter;
        // }



    }

    const onChange = () => {
        console.log('text');
    }

    const locationView = () => {
        setLocationView(!locateView);

    }
    const full_view = () => {
        setLocationView(true);
    }
    const grid_view = () => {
        setLocationView(true);

    }
    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
        if (theme == true) {
            document.documentElement.style.setProperty('--background-color', '#0D0D0D'); //black
            document.documentElement.style.setProperty('--font_color', '#fff'); //white
            document.documentElement.style.setProperty('--font_color6', 'rgba(255, 255, 255,0.6)'); //white
            document.documentElement.style.setProperty('--font_color2', 'rgba(255, 255, 255,0.2)'); //white
            document.documentElement.style.setProperty('--btn_color', 'rgba(255, 255, 255,0.2)'); //white
            document.documentElement.style.setProperty('--cookies_back', 'rgba(13, 13, 13, 0.7)');
            document.documentElement.style.setProperty('--card_border', 'rgba(13, 13, 13, 0.7)');
        } else {
            document.documentElement.style.setProperty('--background-color', '#F8F0E3');
            document.documentElement.style.setProperty('--font_color', '#000');
            document.documentElement.style.setProperty('--font_color6', 'rgba(13, 13, 13, 0.4)');
            document.documentElement.style.setProperty('--font_color2', 'rgba(13, 13, 13, 0.4)');
            document.documentElement.style.setProperty('--btn_color', '#0D0D0D'); //white
            document.documentElement.style.setProperty('--cookies_back', 'rgba(248, 240, 227, 0.7)'); //white
        }
        if (filter) {
            document.documentElement.style.setProperty('--filter_width', !tablet? '220px':'180px');
        } else {
            document.documentElement.style.setProperty('--filter_width', tablet? '80px': '100px');
        }

    }, [theme, filter]);

    return (
        <>
            <div className='channels' style={{ display: !filter ? 'block' : 'none' }}>
                <div style={{ cursor: "pointer", display: 'inline-block' }}>
                    <img src={theme ? channel : channel2} alt='' onClick={handleFilter} />
                    <label className='font12 text-center'>Channels</label>
                </div>
                <div className='channel_item' style={{ marginTop: 30, cursor: "pointer" }}>
                    <img src={theme ? ellipse : ellipse2} alt='' className='channel_image' />
                    <div className='font12_6 channel_text'>Now</div>
                </div>
                <div className='channel_item' style={{ cursor: "pointer" }}>
                    <img src={theme ? presale : presale2} alt='' className='channel_image' />
                    <div className='font12_6 channel_text'>Presale</div>
                </div>
                <div className='channel_item' style={{ cursor: "pointer" }} onClick={() => setShowRaffle(true)}>
                    <img src={theme ? raffle : raffle2} alt='' className='channel_image' />
                    <div className='font12_6 channel_text'>Raffle</div>
                </div>
                <div className='channel_item' style={{ cursor: "pointer" }}>
                    <img src={theme ? pin : pin2} alt='' className='channel_image' />
                    <div className='font12_6 channel_text'>Pin</div>
                </div>
                <div className='channel_spotify'>
                    <div>
                        <img src={spotify} alt='' />
                    </div>
                    <div style={{ margin: '15px 0' }}>
                        <img src={theme ? switcher : switcher2} alt='' style={{ cursor: "pointer" }} onClick={handleSwitch} />
                    </div>
                </div>
            </div>

            <div className='filter' id="fade_div_component" style={{ display: !filter ? 'none' : 'block' }}>
                <div style={{ cursor: "pointer", gap: 20 }}>
                    <label className='font16 p-3'>Channels</label>
                    <img src={theme ? filter_arrow : filter_arrow2} alt='' onClick={handleFilter} />
                </div>
                <div className='channel_viewer pl-3'>
                    <Link to='/'>
                        <div className='grid_view' tabIndex="1" onClick={grid_view}>
                            <MdGridView size={25} />
                        </div>
                    </Link>
                    <Link to='/fullscreenview'>
                        <div className='full_view' tabIndex="2" onClick={full_view}>
                            <CgLaptop size={25} />
                        </div>
                    </Link>
                    <Link to='/globemap'>
                        <div onClick={locationView}>
                            <img src={theme ? (locateView ? location : location_click) : (locateView ? location2 : location_click2)} alt='' style={{ cursor: "pointer", width: 20 }} />
                        </div>
                    </Link>
                </div>
                <Collapse defaultActiveKey={['1']} onChange={onChange} expandIconPosition='end'
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

                <div className='channel_spotify'>
                    <div style={{ margin: '15px 0' }}>
                        <img src={spotify} alt='' />
                    </div>
                    <div className='d-flex' style={{ margin: '15px 0', alignItems: 'end' }}>
                        <img src={theme ? switcher : switcher2} alt='' style={{ cursor: "pointer" }} onClick={handleSwitch} />
                    </div>
                </div>
            </div>
            <Drawer
                placement={mobileView ? 'bottom' : 'right'}
                closable={false}
                onClose={() => setShowRaffle(false)}
                open={showRaffle}
            // size={drawerSize}
            >
                <div className='mobile_version' style={{ height: 200, background: 'transparent' }}></div>
                <div className='tray'>

                    <img src={close} alt='' onClick={() => setShowRaffle(false)} style={{ cursor: 'pointer' }} />

                    <div>

                    </div>


                </div>

            </Drawer>
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
// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Channels);