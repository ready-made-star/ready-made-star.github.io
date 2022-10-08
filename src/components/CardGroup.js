import './css/main.css';
import avatar1 from '../assets/avatar1.png';
import GraphicCard from './GraphicCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { version } from 'react-dom';

function CardGroup() {
    return (
        <div className="scroll">
            <div style={{ display: 'flex', gap: 20 }}>
                <GraphicCard />
                <GraphicCard />
                <GraphicCard />
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
                <GraphicCard />
                <GraphicCard />
                <GraphicCard />
            </div>
            <div style={{ display: 'flex', gap: 20 }}>
                <GraphicCard />
                <GraphicCard />
                <GraphicCard />
            </div>
        </div>
    )
}
export default CardGroup;