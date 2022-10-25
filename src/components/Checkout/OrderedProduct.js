import order_icon from '../../components/assets/order_icon.png';
import decrease from '../../components/assets/decrease.svg';
import increase from '../../components/assets/increase.svg';
import decrease2 from '../../components/assets/decrease2.png';
import increase2 from '../../components/assets/increase2.png';
import { MdClose } from 'react-icons/md';
import { useState } from "react";
import { connect } from 'react-redux';
function OrderedProduct(props) {
    const { theme } = { ...props };

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
            <MdClose style={{ cursor: "pointer" }} />
            <img src={order_icon} alt='' />
            <div style={{ display: 'grid' }}>
                <label className='font12_2'>Brand name</label>
                <label className='font14'>Item name</label>
                <div style={{ display: 'flex', gap: 5 }}>
                    <img src={theme ? decrease : decrease2} alt="test" onClick={handleDecrease} style={{ cursor: "pointer" }} />
                    <label>{count}</label>
                    <img src={theme ? increase : increase2} alt="test" onClick={handleIncrease} style={{ cursor: "pointer" }} />
                </div>

            </div>
            <div className='text-center' style={{ display: 'flex', gap: 10 }}>
                <div>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <div style={{ display: 'grid' }}>
                            <label className='font12_6'>Size</label>
                            <label>L</label>
                        </div>
                        <div style={{ display: 'grid' }}>
                            <label className='font12_6'>Color</label>
                            <div className='order_color'></div>
                        </div>
                    </div>
                    <label className='font12_6'>Drop ID# 123456</label>
                </div>

                <label className='d-flex align-items-center font16'>$52</label>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};
export default connect(mapStateToProps)(OrderedProduct);