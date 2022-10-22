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
import close from '../assets/close.svg';
import { useEffect, useState } from 'react';
import './css/channels.css';
import { toggleTheme } from '../../actions/index';
import { connect } from 'react-redux';
import { MdGridView } from 'react-icons/md';
import { CgLaptop } from 'react-icons/cg';
import { Collapse, Drawer } from 'antd';
const { Panel } = Collapse;

function Channels(props) {
    const { theme, toggleTheme } = { ...props };
    const [mode, setMode] = useState(false);
    const [filter, showFilter] = useState(false);
    const [showRaffle, setShowRaffle] = useState(false);
    let mobileView = false;

    if(window.innerWidth<680){
        mobileView = true;
        // console.log('ss');
    }

    const handleSwitch = () => {
        // setMode(!mode);
        toggleTheme(!theme)
    }
    const handleFilter = () => {
        showFilter(!filter);
    }

    const onChange = () => {
        console.log('text');
    }

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
        if (theme == true) {
            document.documentElement.style.setProperty('--background-color', '#0D0D0D'); //black
            document.documentElement.style.setProperty('--font_color', '#fff'); //white
            document.documentElement.style.setProperty('--font_color6', 'rgba(255, 255, 255,0.6)'); //white
            document.documentElement.style.setProperty('--font_color2', 'rgba(255, 255, 255,0.2)'); //white
            document.documentElement.style.setProperty('--btn_color', 'rgba(255, 255, 255,0.2)'); //white


        } else {
            document.documentElement.style.setProperty('--background-color', '#F8F0E3');
            document.documentElement.style.setProperty('--font_color', '#000');
            document.documentElement.style.setProperty('--font_color6', 'rgba(13, 13, 13, 0.4)');
            document.documentElement.style.setProperty('--font_color2', 'rgba(13, 13, 13, 0.4)');
            document.documentElement.style.setProperty('--btn_color', '#0D0D0D'); //white
        }
        if (filter) {
            document.documentElement.style.setProperty('--filter_width', '220px');
        } else {
            document.documentElement.style.setProperty('--filter_width', '100px');
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
                    <img src={theme ? ellipse : ellipse2} alt='' />
                    <div className='font12_6'>Now</div>
                </div>
                <div className='channel_item' style={{ cursor: "pointer" }}>
                    <img src={theme ? presale : presale2} alt='' />
                    <div className='font12_6'>Presale</div>
                </div>
                <div className='channel_item' style={{ cursor: "pointer" }} onClick={() => setShowRaffle(true)}>
                    <img src={theme ? raffle : raffle2} alt='' />
                    <div className='font12_6'>Raffle</div>
                </div>
                <div className='channel_item' style={{ cursor: "pointer" }}>
                    <img src={theme ? pin : pin2} alt='' />
                    <div className='font12_6'>Pin</div>
                </div>
                <div className='channel_spotify'>
                    <div style={{ margin: '15px 0' }}>
                        <img src={spotify} alt='' />
                    </div>
                    <div style={{ margin: '15px 0' }}>
                        <img src={theme ? switcher : switcher2} alt='' style={{ cursor: "pointer" }} onClick={handleSwitch} />
                    </div>
                </div>
            </div>

            <div className='filter' style={{ display: filter ? 'block' : 'none' }}>
                <div style={{ cursor: "pointer", gap: 20 }}>
                    <label className='font16 p-3'>Channels</label>
                    <img src={theme ? filter_arrow : filter_arrow} alt='' onClick={handleFilter} />
                </div>
                <div>
                    <MdGridView size={25} />
                    <CgLaptop size={25} />
                </div>
                <Collapse defaultActiveKey={['1']} onChange={onChange} expandIconPosition='end'>
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
                        <p>text</p>
                    </Panel>
                    <Panel header="Categories" key="3">
                        <p>text</p>
                    </Panel>
                    <Panel header="Price" key="4">
                        <p>text</p>
                    </Panel>
                    <Panel header="Seasons" key="5">
                        <p>text</p>
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
                    placement={mobileView? 'bottom' : 'right'}
                    closable={false}
                    onClose={() => setShowRaffle(false)}
                    open={showRaffle}
                    // size={drawerSize}
                >
                    <div className='mobile_version' style={{height: 200, background: 'transparent'}}></div>
                    <div className='tray'>
                        
                            <img src={close} alt='' onClick={() => setShowRaffle(false)} style={{cursor:'pointer'}} />
                        
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