import net from '../assets/net.png';
import logo from '../assets/logo.png';
import location from '../assets/location.png';
import profile from '../assets/profile.png';
import bag from '../assets/bag.png';

import './css/header.css';
function Header() {
    return (
        <div className='display-header'>
            <div><img src={logo} alt='' /></div>
            <div className='profile'>
                <div className='help'>
                    <img src={net} alt='' />
                    <div>What can we help you find?</div>
                </div>
                <div className='profile_set'>
                    <img src={location} alt='' />
                    <img src={profile} alt='' />
                    <img src={bag} alt='' />
                </div>
            </div>
        </div>
    )
}
export default Header;