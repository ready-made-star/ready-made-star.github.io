import './layout.css';
import avatar1 from '../assets/avatar1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function AvatarGroup() {
    let avatar_count;
    if (window.innerWidth < 680) {
        avatar_count = 4;
    }
    else
        avatar_count = 10.1;
    return (
        <div className="home_avatar_group">
            <Swiper watchSlidesProgress={true} slidesPerView={avatar_count} className="mySwiper">
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='each_avatar' style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default AvatarGroup;