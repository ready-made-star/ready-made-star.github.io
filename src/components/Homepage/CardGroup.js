import '../Author/css/main.css';
import GraphicCard from './ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { version } from 'react-dom';

const cardimg = "images/product_image.png";
const product_creator = "images/product_creator.png";
const fashion = "images/fashion.png";
const raffle = 'images/raffle.png';
const beauty = 'images/beauty.png';
const ellipse = 'images/ellipse.png';
const fall = 'images/fall.png';
const goods = 'images/goods.png';
const pin = 'images/pin.png';
const presal = 'images/presal.png';
const spring = 'images/spring.png';
const summer = 'images/summer.png';
const winter = 'images/winter.png';
const tech = 'images/tech.png';
const data = [
    {
        id: 1,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Fashion',
        category_icon:  fashion ,
        status_name: 'Now',
        status_icon: ellipse,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#4B355A',
        background: '#4B355A'
    },
    {
        id: 2,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Beauty',
        category_icon:  beauty,
        status_name: 'Pin',
        status_icon: pin,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#F0E681',
        background: '#3784AB'
    },
    {
        id: 3,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Tech',
        category_icon:  tech ,
        status_name: 'Raffle',
        status_icon: raffle,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#3784AB',
        background: '#40C397'
    },
    {
        id: 4,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Fashion',
        category_icon:  fashion ,
        status_name: 'Now',
        status_icon: ellipse,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#4B355A',
        background: '#4B355A'
    },
    {
        id: 5,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Beauty',
        category_icon:  beauty,
        status_name: 'Pin',
        status_icon: pin,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#F0E681',
        background: '#3784AB'
    },
    {
        id: 6,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Tech',
        category_icon:  tech ,
        status_name: 'Raffle',
        status_icon: raffle,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#3784AB',
        background: '#40C397'
    },
    {
        id: 7,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Fashion',
        category_icon:  fashion ,
        status_name: 'Now',
        status_icon: ellipse,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#4B355A',
        background: '#4B355A'
    },
    {
        id: 8,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Beauty',
        category_icon:  beauty,
        status_name: 'Pin',
        status_icon: pin,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#F0E681',
        background: '#3784AB'
    },
    {
        id: 9,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Tech',
        category_icon:  tech ,
        status_name: 'Raffle',
        status_icon: raffle,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#3784AB',
        background: '#40C397'
    },
];

function CardGroup() {
    {data.map((item) =>{
        console.log(item.category_icon)
        
    })}
    return (
        <div className='container-fluid px-0'>
            <div className='row'>
                {data.map((item) => (
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <GraphicCard 
                            key={item.id}
                            cardimg={item.cardimg}
                            data_released={item.data_released}
                            category_name={item.category_name}
                            category_icon={item.category_icon}
                            status_name={item.status_name}
                            status_icon={item.status_icon}
                            creator_name={item.creator_name}
                            creator_icon={item.creator_icon}
                            border_color={item.border_color}
                            background={item.background}
                        />

                    </div>
                ))}
                
            </div>
        </div>
    )
}
export default CardGroup;