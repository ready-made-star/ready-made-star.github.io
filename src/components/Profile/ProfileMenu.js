import profile_avatar from '../assets/profile_avatar.png';
import edit from '../assets/edit.png';
import './profile.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

function ProfileMenu() {


    const toggleActiveButton =(e) => {
        // e.preventDefault();
        // e.stopPropagation();
        let buttons = document.querySelectorAll('.menu_button1');
        buttons.forEach(button => {
            button.classList.remove('active');
        })
        console.log(e.target, e.target.closest)

        // if(e.target.classList.contains('active') == false) {
        //     e.target.classList.add('active')
        // }
        if(e.target.parentElement.classList.contains('active') == false) {
            e.target.parentElement.classList.add('active')
        }
    }
    return (
        <>
            <div className='profile_menu desktop_version'>
                <div className='font20'>
                    <div>Profile</div>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <img src={profile_avatar} alt='' />
                    <img className='editer' src={edit} alt='' style={{ cursor: "pointer" }} />
                </div>

                <div>
                    <button className='menu_button1' onClick={(e)=>{toggleActiveButton(e)}}><Link to='/profile/personalinfo'>Personal Info</Link></button>
                </div>
                <div>
                    <button className='menu_button1' onClick={(e)=>{toggleActiveButton(e)}}><Link to='/profile/paymentinfo'>Payment Info</Link></button>
                </div>
                <div>
                    <button className='menu_button1' onClick={(e)=>{toggleActiveButton(e)}}><Link to='/profile/orders'>Orders</Link></button>
                </div>
                <div>
                    <button className='menu_button1' onClick={(e)=>{toggleActiveButton(e)}}><Link to='/profile/favorites'>Favorites</Link></button>
                </div>
                <div>
                    <button className='menu_button1' onClick={(e)=>{toggleActiveButton(e)}}><Link to='/profile/style'>Style</Link></button>
                </div>
                <div>
                    <button className='menu_button1' onClick={(e)=>{toggleActiveButton(e)}}><Link to='/profile/passport'>Passport</Link></button>
                </div>

            </div>
            <div className='mobile_version mobile_profile_menu'>
                <Swiper watchSlidesProgress={true} slidesPerView={3.2} className="mySwiper">
                    <SwiperSlide>
                        <div style={{ cursor: "pointer" }}>
                            <img style={{width:50, height: 50}} src={profile_avatar} alt='' />
                            <img className='editer' src={edit} alt='' style={{ cursor: "pointer" }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='menu_button1' onClick={() => window.location.href = "/profile/personalinfo"}>Personal Info</button>
                    </SwiperSlide>
                    <SwiperSlide>

                        <button className='menu_button1' onClick={() => window.location.href = "/profile/paymentinfo"}>Payment Info</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='menu_button1' onClick={() => window.location.href = "/profile/orders"}>Orders</button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='menu_button1' onClick={() => window.location.href = "/profile/favorites"}>Favorites</button>
                    </SwiperSlide>
                    <SwiperSlide>
                    <button className='menu_button1' onClick={() => window.location.href = "/profile/style"}>Style</button>
                    </SwiperSlide>
                    <SwiperSlide>
                    <button className='menu_button1' onClick={() => window.location.href = "/profile/passport"}>Passport</button>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default ProfileMenu;