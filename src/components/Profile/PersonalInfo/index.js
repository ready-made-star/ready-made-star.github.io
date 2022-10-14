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
        <><div className='d-flex' style={{ background: 'black' }}>
            <div className='personal_info1'>
                <div className='font20'>
                    <div>Personal Info</div>
                </div>
                <div>
                    <label>Full name</label>
                    <Input />
                </div>
                <div>
                    <label>Nike name</label>
                    <Input />
                </div>

                <div>
                    <label>Day</label>
                    <div style={{ display: 'flex' }}>
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    12
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    5
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
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
                <div>
                    <PhoneNumber />
                </div>
                <div>
                    <label>Email</label>
                    <Input />
                </div>
                <div>
                    <label>Preferred Communication</label>
                    <div>
                        <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
                    </div>
                </div>
                <div>

                </div>



            </div>
            <div className='personal_info2'>
                <div className='font20'>
                    <div>Address</div>
                </div>
                <div>
                    <label>Country</label>
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                United States of America
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div>
                    <label>Street</label>
                    <Input />
                </div>

                <div style={{ display: 'flex' }}>
                    <div>
                        <label>Building</label>
                        <Input />
                    </div>
                    <div>
                        <label>Apartment</label>
                        <Input />
                    </div>
                    <div>
                        <label>Zip</label>
                        <Input />
                    </div>
                </div>

                <div>
                    <label>City</label>
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Los Angeles
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <div>
                    <label>States</label>
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
        </div><div>
                <Button>Save Changes</Button>
                <Button>Cancel</Button>
            </div></>
    )
}
export default PersonalInfo;