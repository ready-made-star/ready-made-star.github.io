import './css/main.css';
import avatar1 from '../assets/avatar1.png';
import GraphicCard from './GraphicCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { version } from 'react-dom';

function CardGroup() {
    return (
        <div class='container-fluid px-0'>
        <div class='row'>
            
            {/* <div className="scroll"> */}
                {/* <div style={{ display: 'flex', gap: 10, margin: '10px 0' }}> */}
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                {/* </div> */}
                {/* <div style={{ display: 'flex', gap: 10, margin: '20px 0' }}> */}
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                {/* // </div> */}
                {/* <div style={{ display: 'flex', gap: 10, margin: '20px 0' }}> */}
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                    <div class='col-4 mb-3'>
                    <GraphicCard />
                    </div>
                {/* // </div> */}
            {/* </div> */}
        </div>
        </div>
    )
}
export default CardGroup;