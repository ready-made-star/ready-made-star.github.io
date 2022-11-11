import { useEffect } from 'react';
import profile_avatar from '../assets/profile_avatar.png';
import edit from '../assets/edit.png';
import './profile.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

function ProfileMenu() {

    useEffect(() => {
        document.getElementById('first_btn').classList.add('active');
    }, []);
    const toggleActiveButton = (e) => {
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
        if (e.target.classList.contains('active') == false) {
            e.target.classList.add('active')
        }
    }
    return (
        <>
            <div className='profile_menu desktop_version'>
                <div className='font20'>
                    <div>Profile</div>
                </div>
                <div style={{ margin: '10px 0' }}>
                    <img src={profile_avatar} alt='' style={{ width: '85%' }} />
                    <img className='editer' src={edit} alt='' style={{ cursor: "pointer" }} />
                </div>

                <div style={{ margin: '25px 0' }}>
                    <Link to='/profile/personalinfo' id='first_btn' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Personal Info</Link>
                </div>
                <div style={{ margin: '25px 0' }}>
                    <Link to='/profile/paymentinfo' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Payment Info</Link>
                </div>
                <div style={{ margin: '25px 0' }}>
                    <Link to='/profile/orders' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Orders</Link>
                </div>
                <div style={{ margin: '25px 0' }}>
                    <Link to='/profile/favorites' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Favorites</Link>
                </div>
                <div style={{ margin: '25px 0' }}>
                    <Link to='/profile/style' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Style</Link>
                </div>
                <div style={{ margin: '25px 0' }}>
                    <Link to='/profile/passport' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Passport</Link>
                </div>

            </div>
            <div className='mobile_version mobile_profile_menu'>
                <Swiper watchSlidesProgress={true} slidesPerView={3.2} className="mySwiper">
                    <SwiperSlide>
                        <div style={{ cursor: "pointer" }}>
                            <img style={{ width: 65, height: 65 }} src={profile_avatar} alt='' />
                            <img className='editer' src={edit} alt='' style={{ cursor: "pointer" }} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/profile/personalinfo' id='first_btn' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Personal Info</Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/profile/paymentinfo' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Payment Info</Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/profile/orders' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Orders</Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/profile/favorites' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Favorites</Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/profile/style' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Style</Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/profile/passport' className='menu_button1' onClick={(e) => { toggleActiveButton(e) }}>Passport</Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
export default ProfileMenu;