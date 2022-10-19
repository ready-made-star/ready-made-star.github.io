// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Menu, Radio, Button } from 'antd';
import PhoneNumber from '../../Checkout/PhoneNumber';
import './personalinfo.css';
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
const plainOptions = ['Text message', 'Email'];
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
            <div className='personal_info'>
                <div className='personal_info1'>
                    <div className='font20 info_title'>
                        <div>Personal Info</div>
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>Full name</label>
                        <Input />
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>Nike name</label>
                        <Input />
                    </div>

                    <div className='info_each'>
                        <label className='font12_6'>Day</label>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <div className='day_year'>
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
                                <Dropdown overlay={menu}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            5
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className='day_year'>
                                <Dropdown overlay={menu}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            1997
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PhoneNumber />
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>Email</label>
                        <Input />
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>Preferred Communication</label>
                        <div>
                            <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
                        </div>
                    </div>
                </div>

                <div className='personal_info2'>
                    <div className='font20 info_title'>
                        <div className='font12_6'>Address</div>
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>Country</label>
                        <div className='drop_under'>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        United States of America
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>Street</label>
                        <Input />
                    </div>

                    <div className='info_each' style={{ display: 'flex', gap: 10 }}>
                        <div>
                            <label className='font12_6'>Building</label>
                            <Input />
                        </div>
                        <div>
                            <label className='font12_6'>Apartment</label>
                            <Input />
                        </div>
                        <div>
                            <label className='font12_6'>Zip</label>
                            <Input />
                        </div>
                    </div>

                    <div>
                        <label className='font12_6'>City</label>
                        <div className='drop_under'>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Los Angeles
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='info_each'>
                        <label className='font12_6'>States</label>
                        <div className='drop_under'>
                            <Dropdown overlay={menu}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        California
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>

                </div>
            </div>
            <div className='save_buttons'>
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