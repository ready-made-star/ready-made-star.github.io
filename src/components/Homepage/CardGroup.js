import '../Author/css/main.css';
import avatar1 from '../assets/avatar1.png';
import GraphicCard from './ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { version } from 'react-dom';

function CardGroup(props) {
    return (
        <div className='container-fluid px-0'>
            <div className='row'>

                {/* <div className="scroll"> */}
                {/* <div style={{ display: 'flex', gap: 10, margin: '10px 0' }}> */}
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard show={props.show} />
                </div>
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                {/* </div> */}
                {/* <div style={{ display: 'flex', gap: 10, margin: '20px 0' }}> */}
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                {/* // </div> */}
                {/* <div style={{ display: 'flex', gap: 10, margin: '20px 0' }}> */}
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                <div className='col-12 col-md-6 col-xl-4 mb-3'>
                    <GraphicCard />
                </div>
                {/* // </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}
export default CardGroup;