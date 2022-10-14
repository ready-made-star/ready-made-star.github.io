import GraphicCard from '../../../components/Author/GraphicCard';
import { useState } from 'react';
import './favorite.css';

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
                        <GraphicCard />
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
        </>
    )
}
export default Favorites;