import './layout.css';
// import avatar from '../assets/creator.png';
import avatar from '../assets/profile_avatar.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from 'react-router-dom';

function AvatarGroup() {
    let avatar_count;
    if (window.innerWidth < 680) {
        avatar_count = 4.2;
    }
    else
        avatar_count = 10.2;
    return (
        <div className="home_avatar_group">
            <Swiper watchSlidesProgress={true} slidesPerView={avatar_count} className="mySwiper">
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width:'100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt=''  style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt=''  style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt=''  style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt=''  style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt=''  style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width:'100%', clipPath: "circle()" }}/>
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width:'100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width:'100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}
export default AvatarGroup;