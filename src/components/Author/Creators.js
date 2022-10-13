import './css/main.css';
import creator1 from '../assets/creator1.png';
import {Swiper, SwiperSlide} from 'swiper/react';
function Creators() {
    return (
        <>
            <div className="location" style={{ marginTop: 20 }}>
                <div className='font20' style={{cursor:"pointer"}}>Similar creators</div>
                <div className='desktop_version'>
                    <div style={{ display: 'flex', marginTop: 9, gap: 10, cursor:"pointer" }}>
                        <img src={creator1} alt='' />
                        <div className='font12'>@mechventures</div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 9, gap: 10, cursor:"pointer" }}>
                        <img src={creator1} alt='' />
                        <div className='font12'>@mechventures</div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 9, gap: 10, cursor:"pointer" }}>
                        <img src={creator1} alt='' />
                        <div className='font12'>@mechventures</div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 9, gap: 10, cursor:"pointer" }}>
                        <img src={creator1} alt='' />
                        <div className='font12'>@mechventures</div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 9, gap: 10, cursor:"pointer" }}>
                        <img src={creator1} alt='' />
                        <div className='font12'>@mechventures</div>
                    </div>
                </div>

                <div className='mobile_version'>
                    <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                        <SwiperSlide>
                            <div style={{display: 'flex', gap: 5}}>
                                <img src={creator1} alt='' />
                                <div className='font12'>@mechventures</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{display: 'flex', gap: 5}}>
                                <img src={creator1} alt='' />
                                <div className='font12'>@mechventures</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{display: 'flex', gap: 5}}>
                                <img src={creator1} alt='' />
                                <div className='font12'>@mechventures</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{display: 'flex', gap: 5}}>
                                <img src={creator1} alt='' />
                                <div className='font12'>@mechventures</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{display: 'flex', gap: 5}}>
                                <img src={creator1} alt='' />
                                <div className='font12'>@mechventures</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
export default Creators;