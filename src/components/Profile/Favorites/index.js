import ProductCard from '../../../components/Homepage/ProductCard';
import { useState } from 'react';
import './favorite.css';
import heart from '../../../components/assets/heart.png';
import {connect} from 'react-redux';


const cardimg = "images/product_image.png";
const product_creator = "images/product_creator.png";
const fashion = "images/fashion.png";
const fashion2 = "images/fashion2.png";
const raffle = 'images/raffle.png';
const raffle2 = 'images/raffle2.png';
const beauty = 'images/beauty.png';
const beauty2 = 'images/beauty2.png';
const ellipse = 'images/ellipse.png';
const ellipse2 = 'images/ellipse2.png';
const fall = 'images/fall.png';
const goods = 'images/goods.png';
const pin = 'images/pin.png';
const pin2 = 'images/pin2.png';
const presal = 'images/presal.png';
const spring = 'images/spring.png';
const summer = 'images/summer.png';
const winter = 'images/winter.png';
const tech = 'images/tech.png';
const tech2 = 'images/tech2.png';

const data = [
    {
        id: 1,
        cardimg: cardimg,
        data_released: '12/26/2022',
        category_name: 'Fashion',
        category_icon: fashion,
        category_icon2: fashion2,
        status_name: 'Now',
        status_icon: ellipse,
        status_icon2: ellipse2,
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
        category_icon: beauty,
        category_icon2: beauty2,
        status_name: 'Pin',
        status_icon: pin,
        status_icon2: pin2,
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
        category_icon: tech,
        category_icon2: tech2,
        status_name: 'Raffle',
        status_icon: raffle,
        status_icon2: raffle2,
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
        category_icon: fashion,
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
        category_icon: beauty,
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
        category_icon: tech,
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
        category_icon: fashion,
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
        category_icon: beauty,
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
        category_icon: tech,
        status_name: 'Raffle',
        status_icon: raffle,
        creator_name: '@hannamontana',
        creator_icon: product_creator,
        border_color: '#3784AB',
        background: '#40C397'
    },
];

function Favorites(props) {
    const [value1, setValue1] = useState('Email');
    const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
    };
    const {theme, toggleTheme} = {...props}
    return (
        <>
            <div className='container-fluid favorites'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-12 col-md-6 col-xl-4 mb-3'>
                            <ProductCard
                                key={item.id}
                                cardimg={item.cardimg}
                                data_released={item.data_released}
                                category_name={item.category_name}
                                category_icon={theme ? item.category_icon : item.category_icon2}
                                status_name={item.status_name}
                                status_icon={item.status_icon}
                                creator_name={item.creator_name}
                                creator_icon={item.creator_icon}
                                border_color={item.border_color}
                                background={item.background}
                            />

                            <img src={heart} alt='' className='heart animate__heartBeat' />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};

export default connect(mapStateToProps)(Favorites);