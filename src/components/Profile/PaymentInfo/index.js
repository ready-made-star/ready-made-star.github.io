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
const plainOptions = ['Credit Card', 'Apple Pay'];
const options = [
    {
        label: 'Text message',
        value: 'Text message',
    },
    {
        label: 'Email',
        value: 'Email',
    },

];

function PersonalInfo() {
    const [value1, setValue1] = useState('Email');
    const onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
        setValue1(value);
    };
    return (
        <>
            <div className='d-flex' style={{ background: 'black' }}>
                <div className='payment_info'>
                    <Radio.Group options={plainOptions} optionType="button" buttonStyle="solid" />
                    <div>
                        <label>Credit Card Number</label>
                        <Input />
                    </div>
                    <div>
                        <label>Name on Card</label>
                        <Input />
                    </div>


                    <div style={{ display: 'flex' }}>
                        <div>
                            <label>Day</label>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        12
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div>
                            <label>Year</label>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        5
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div>
                            <label>CVC</label>
                            <Input />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Button>Save Changes</Button>
                <Button>Cancel</Button>
            </div>
        </>
    )
}
export default PersonalInfo;