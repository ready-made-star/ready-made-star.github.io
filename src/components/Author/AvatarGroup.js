import './css/main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
    {
        avatarUrl: "/images/avatar1.png",
        name: "Minimal",
    },
]

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
                {data.map((item) => (
                    <SwiperSlide>
                        <div style={{ cursor: "pointer" }}>
                            <img src={item.avatarUrl} alt='' />
                            <div>{item.name}</div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
export default AvatarGroup;