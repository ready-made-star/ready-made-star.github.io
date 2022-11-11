// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Menu, Radio, Button } from 'antd';
import './payment.css';
import { useState } from 'react';
const menu = (
    <Menu
        items={[
            {
                label: '1st menu item',
                key: '1',
            },
            {
                label: '2nd menu item',
                key: '2',
            },
            {
                label: '3rd menu item',
                key: '3',
            },
        ]}
    />
);
const plainOptions = [
    {
        label: 'Credit card',
        value: 'Credit card',
    },
    {
        label: 'Apple pay',
        value: 'Apple pay',
    }
];


function PersonalInfo() {
    const [value2, setValue2] = useState('Credit card');

    return (
        <>
            <div className='d-flex' style={{ background: 'var(--background-color)' }}>
                <div className='payment_info'>
                    <div className='payment_select'>
                        <Radio.Group options={plainOptions} optionType="button" buttonStyle="solid" value={value2} size='large' />
                    </div>
                    <div>
                        <label className='font12'>Credit Card Number</label>
                        <Input />
                    </div>
                    <div style={{marginTop:24}}>
                        <label className='font12'>Name on Card</label>
                        <Input />
                    </div>


                    <div style={{ display: 'flex', marginTop:24, gap:10 }}>
                        <div className='day_year'>
                            <label className='font12'>Day</label>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        12
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className='day_year'>
                            <label className='font12'>Year</label>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        5
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className='payment_cvc' style={{width:'100%'}}>
                            <label className='font12 text-center'>CVC</label>
                            <Input />
                        </div>
                    </div>
                </div>

            </div>
            <div className='payment_buttons'>
                <div>
                    <button className='save_button font16'>Save Changes</button>
                </div>
                <div>
                    <button className='cancel_button font16'>Cancel</button>
                </div>
            </div>
        </>
    )
}
export default PersonalInfo;