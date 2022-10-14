import profile_avatar from '../assets/profile_avatar.png';
import edit from '../assets/edit.png';
import './profile.css';
import { WindowSharp } from '@mui/icons-material';
function ProfileMenu() {
    return (
        <div className='profile_menu'>
            <div className='font20'>
                <div>Profile</div>
            </div>
            <div style={{margin:'10px 0'}}>
                <img src={profile_avatar} alt='' />
                <img className='editer' src={edit} alt='' style={{ cursor: "pointer" }} />
            </div>

            <div>
                <button className='menu_button' onClick={()=>window.location.href = "/profile/personalinfo"}>Personal Info</button>
            </div>
            <div>
                <button className='menu_button' onClick={()=>window.location.href = "/profile/paymentinfo"}>Payment Info</button>
            </div>
            <div>
                <button className='menu_button' onClick={()=>window.location.href = "/profile/orders"}>Orders</button>
            </div>
            <div>
                <button className='menu_button' onClick={()=>window.location.href = "/profile/favorites"}>Favorites</button>
            </div>
            <div>
                <button className='menu_button' onClick={()=>window.location.href = "/profile/style"}>Style</button>
            </div>
            <div>
                <button className='menu_button' onClick={()=>window.location.href = "/profile/passport"}>Passport</button>
            </div>
            
        </div>
    )
}
export default ProfileMenu;