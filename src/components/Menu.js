import logo from '../assets/logo.png';
import net from '../assets/net.png';

import './css/menu.css';
function Menu(){
    return(
        <div className='display-header'>
            <div><img src={logo} alt=''/></div>
            <div>
                <img src={net} alt=''/>
                <div>What can we help you find?</div>
                
            </div>
        </div>
    )
}
export default Menu;