import ProductCard from '../../../components/Homepage/ProductCard';
import { useState } from 'react';
import './favorite.css';
import heart from '../../../components/assets/heart.png';
function Favorites() {
    const [value1, setValue1] = useState('Email');
    const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
    };
    return (
        <>
            <div className='container-fluid favorites'>
                <div className='row'>

                    {/* <div className="scroll"> */}
                    {/* <div style={{ display: 'flex', gap: 10, margin: '10px 0' }}> */}
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    {/* </div> */}
                    {/* <div style={{ display: 'flex', gap: 10, margin: '20px 0' }}> */}
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    {/* // </div> */}
                    {/* <div style={{ display: 'flex', gap: 10, margin: '20px 0' }}> */}
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    <div className='col-12 col-md-6 col-xl-4 mb-3'>
                        <ProductCard />
                        <img src={heart} alt='' className='heart' />
                    </div>
                    {/* // </div> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
export default Favorites;