import './layout.css';
import avatar1 from '../assets/creator.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from 'react-router-dom';

function AvatarGroup() {
    let avatar_count;
    if (window.innerWidth < 680) {
        avatar_count = 2.6;
    }
    else
        avatar_count = 10.2;
    return (
        <div className="home_avatar_group">
            <Swiper watchSlidesProgress={true} slidesPerView={avatar_count} className="mySwiper">
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar1} alt='' />
                            <div className='font12'>@hanamontan</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
export default AvatarGroup;