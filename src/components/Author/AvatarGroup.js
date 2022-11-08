import './css/main.css';
import avatar1 from '../assets/avatar1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function AvatarGroup() {
    let avatar_count;
    if (window.innerWidth < 680) {
        avatar_count = 4;
    }
    // else if(window.innerWidth < 1200){
    //     avatar_count = 8;
    // }
    else
        avatar_count = 9.2;
    return (
        <div className="avatar_group">
            <Swiper watchSlidesProgress={true} slidesPerView={avatar_count} className="mySwiper">
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{cursor:"pointer"}}>
                        <img src={avatar1} alt='' style={{ width:'100%', clipPath: "circle()" }}  />
                        <div>Minimal</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default AvatarGroup;