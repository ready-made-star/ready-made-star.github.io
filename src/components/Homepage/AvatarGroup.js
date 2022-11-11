import './layout.css';
// import avatar from '../assets/creator.png';
import avatar from '../assets/profile_avatar.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom';

function AvatarGroup() {
    // let avatar_count;
    // if (window.innerWidth < 680) {
    //     avatar_count = 4.2;
    // }
    // else if(window.innerWidth<1200){
    //     avatar_count = 5;
    // }
    // else
    //     avatar_count = 9;
    return (
        <div className="home_avatar_group">
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    350: {
                        width: 350,
                        slidesPerView: 2.5,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 5,
                    },
                    // when window width is >= 768px
                    1200: {
                        width: 1990,
                        slidesPerView: 12,
                    },
                }}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
                            <div className='font12'>@alankingdom</div>
                            <div className='font10 text-left'>Creator</div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to='/author'>
                        <div className='each_avatar' style={{ cursor: "pointer" }}>
                            <img src={avatar} alt='' style={{ width: '100%', clipPath: "circle()" }} />
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