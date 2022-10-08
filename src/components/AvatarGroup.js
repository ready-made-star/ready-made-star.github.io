import './css/main.css';
import avatar1 from '../assets/avatar1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function AvatarGroup() {
    return (
        <div className="avatar_group">
            <Swiper watchSlidesProgress={true} slidesPerView={10.1} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={avatar1} alt='' />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default AvatarGroup;