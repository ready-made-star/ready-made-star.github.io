import order_icon from '../../components/assets/order_icon.png';
import decrease from '../../components/assets/decrease.svg';
import increase from '../../components/assets/increase.svg';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
function OrderedProduct() {

    const [count, setCount] = useState(0);
    const handleDecrease = () => {
        if (count)
            setCount(count - 1);
    }
    const handleIncrease = () => {

        setCount(count + 1);
    }

    return (
        <div className='d-flex align-items-center' style={{ gap: 20 }}>
            <MdClose />
            <img src={order_icon} alt='' />
            <div style={{ display: 'grid' }}>
                <label>Brand name</label>
                <label>Item name</label>
                <div style={{ display: 'flex', gap: 5 }}>
                    <img src={decrease} alt="test" onClick={handleDecrease} />
                    <label>{count}</label>
                    <img src={increase} alt="test" onClick={handleIncrease} />
                </div>

            </div>
            <div className='text-center' style={{ display: 'flex', gap: 10 }}>
                <div>
                    <div style={{display: 'flex', gap: 10}}>
                        <div style={{ display: 'grid' }}>
                            <label>Size</label>
                            <label>L</label>
                        </div>
                        <div style={{ display: 'grid' }}>
                            <label>Color</label>
                            <div className='order_color'></div>
                        </div>
                    </div>
                    <label className='font12'>Drop ID# 123456</label>
                </div>

                <label className='font20 d-flex align-items-center'>$52</label>
            </div>
        </div>
    )
}
export default OrderedProduct;