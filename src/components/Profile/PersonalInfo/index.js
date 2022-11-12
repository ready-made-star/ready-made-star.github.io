// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Menu, Radio, Button } from 'antd';
import PhoneNumber from '../../Checkout/PhoneNumber';
import './personalinfo.css';
import { useState } from 'react';
import spotify from '../../assets/spotify.png';
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
                        <label className='font12_mono' style={{padding:'10px 0'}}>Full name</label>
                        <Input />
                    </div>
                    <div className='info_each'>
                        <label className='font12_mono' style={{padding:'10px 0'}}>Nickname</label>
                        <Input />
                    </div>

                    <div className='info_each'>
                        <label className='font12_mono' style={{padding:'10px 0'}}>Day</label>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <div className='day_year font14_w4'>
                                <Dropdown overlay={menu}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            12
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className='day_year font14_w4'>
                                <Dropdown overlay={menu}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            5
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                            <div className='day_year font14_w4'>
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
                        <label className='font12_mono' style={{padding:'10px 0'}}>Email</label>
                        <Input />
                    </div>
                    <div className='info_each font14_w4'>
                        <label className='font12_mono' style={{padding:'10px 0'}}>Preferred Communication</label>
                        <div>
                            <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
                        </div>
                    </div>
                </div>

                <div className='personal_info2'>
                    <div className='font20 info_title'>
                        <div style={{padding:'10px 0'}}>Address</div>
                    </div>
                    <div className='info_each'>
                        <label className='font12_mono' style={{padding:'10px 0'}}>Country</label>
                        <div className='drop_under font14_w4'>
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
                        <label className='font12_mono' style={{padding:'10px 0'}}>Street</label>
                        <Input />
                    </div>

                    <div className='info_each' style={{ display: 'flex', gap: 10 }}>
                        <div>
                            <label className='font12_mono' style={{padding:'10px 0'}}>Building</label>
                            <Input />
                        </div>
                        <div>
                            <label className='font12_mono' style={{padding:'10px 0'}}>Apartment</label>
                            <Input />
                        </div>
                        <div>
                            <label className='font12_mono' style={{padding:'10px 0'}}>Zip</label>
                            <Input />
                        </div>
                    </div>

                    <div>
                        <label className='font12_mono' style={{padding:'10px 0'}}>City</label>
                        <div className='drop_under font14_w4'>
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
                        <label className='font12_mono' style={{padding:'10px 0'}}>States</label>
                        <div className='drop_under font14_w4'>
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
            <img className='mobile_spotify' src={spotify} alt='spotify' style={{ bottom: '14%' }} />
        </>
    )
}
export default PersonalInfo;