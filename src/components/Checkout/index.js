import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import './checkout.css';
import PhoneNumber from './PhoneNumber';
import ReactInputVerificationCode from 'react-input-verification-code';
import OrderedProduct from './OrderedProduct';
import Timer from '../Author/Timer';
import useravatar from '../../components/assets/user_avatar.png';
import { Tabs, Input, Dropdown, Menu, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {HiQuestionMarkCircle} from 'react-icons/hi';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  
  const menu = (
    <Menu
      onClick={onClick}
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
  
function CheckOut(props) {
    const [enterPhoneNumber, setEnterPhoneNumber] = useState('block');
    const [enterSMS, setEnterSMS] = useState('none');
    const [checkout, setCheckout] = useState('none');
    const [timer, setTimer] = useState('block');
    const [footerName, setFooterName] = useState('Continue');
    const [activeKey, setActiveKey] = useState('1');
    const [input, setInput] = useState("");

    const handleSendNumber = () => {
        setEnterPhoneNumber('none');
        setEnterSMS('block');
    }
    const handleSendSMS = () => {
        setEnterSMS('none');
        setCheckout('block');
        setFooterName('Continue to delivery address');
    }

    const handleDelivery = () => {
        switch(activeKey){
            case "1": 
            setActiveKey("2");
            setFooterName('continue to payment');
            break;
            case "2":
                setActiveKey("3");
                setFooterName('Place your order');
                break;
            default: alert("ordered");
        }
        // case "2": 
        // alert(activeKey);
    }
    const handleChange = (e) => {
        if (e.length === 6) {
            setTimer('none');
            setFooterName('Continue to checkout');
        }
    }
    const onChange = (key) => {
        setActiveKey(key);
      };

    const items = [
        {
            label: `Professional Info`,
            key: String(1),
            children: (
                <>
                    <div>
                        <PhoneNumber />

                    </div>
                    <div>
                        <div><label>Email</label></div>
                        <Input placeholder="maskymlap@gmail.com" />
                    </div>
                </>

            ),
        },
        {
            label: `Delivery`,
            key: String(2),
            children: (
                <div>
                    <div><label>Country</label></div>
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                United States of America
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <div><label>Street</label></div>
                    <Input placeholder='Vermont Ave' />
                    <div style={{display:'flex', gap: 5}}>
                        <div>
                            <div><label>Building</label></div>
                            <Input />
                        </div>
                        <div>
                            <div><label>Apartment</label></div>
                            <Input />
                        </div>
                        <div>
                            <div><label>ZIP</label></div>
                            <Input />
                        </div>
                    </div>
                    <div><label>City</label></div>
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Los Anseles
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <div><label>State</label></div>
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                California
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>

                </div>
            ),
        },
        {
            label: `Payment`,
            key: String(3),
            children: (
                <div>
                    <div>
                    <Button>Credit card</Button>
                    <Button>Apple Pay</Button>
                    </div>
                    <div>
                        <div><label>Credit card number</label></div>
                        <Input />
                    </div>
                    <div>
                        <div><label>Name on Credit</label></div>
                        <Input />
                    </div>
                    <div style={{display:'flex'}}>
                        <div>
                            <div><label>Day</label></div>
                            <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    4
                                    <DownOutlined />
                                </Space>
                            </a>
                            </Dropdown>
                        </div>
                        <div>
                            <div><label>Year</label></div>
                            <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    2022
                                    <DownOutlined />
                                </Space>
                            </a>
                            </Dropdown>
                        </div>
                        <div>
                            <div><label>CVC</label></div>
                            <div className='space-between'>
                                <label>512</label>
                                <HiQuestionMarkCircle />
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >

            <Modal.Body>
                <div style={{ display: enterPhoneNumber }}>
                    <div className='checkout_header'>Enter Phone Number</div>
                    <div className='checkout_body'>
                        <PhoneNumber />
                        <div className='dashborder'>Already a member? <a>Sign in</a></div>
                    </div>
                    <div className='checkout_footer text-center' onClick={handleSendNumber}>Continue</div>
                </div>

                <div style={{ display: enterSMS }}>
                    <div className='checkout_header'>Enter the code</div>
                    <div className='checkout_body'>
                        <div>We just sent SMS with the confirmation code to your mobile number +17 323 451 7899</div>
                        <div className="custom-styles">
                            <ReactInputVerificationCode
                                autoFocus
                                placeholder=""
                                length={6}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: 15, margin: 15 }}>
                            <div style={{ cursor: "pointer" }}>Resend</div>
                            <div style={{ display: timer }}><Timer initialMinute={1} initialSeconds={59} /></div>
                        </div>
                    </div>
                    <div className='checkout_footer text-center' onClick={handleSendSMS}>{footerName}</div>
                </div>

                <div style={{ display: checkout }}>
                    <div className='checkout_header space_between'>
                        <label>Checkout</label>
                        <div className='d-flex align-items-center' style={{ gap: 10 }}>
                            <label>Hotaru Eri</label>
                            <div>
                                <img src={useravatar} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='checkout_body'>
                        <Tabs
                            centered
                            onChange={onChange}
                            activeKey={activeKey}
                            items={items}
                        />
                    </div>

                    <div className='checkout_footer text-center' onClick={handleDelivery}>{footerName}</div>
                </div>
            </Modal.Body>
            <Modal.Body>
                <div>
                    <div className='checkout_header'>Order details</div>
                    <div className='checkout_body'>
                        <OrderedProduct />
                        <OrderedProduct />
                    </div>
                    <div className='order_footer p-3'>
                        <div className='space_between'>
                            <label>Subtotal</label>
                            <label>$357</label>
                        </div>
                        <div className='space_between'>
                            <label>Delivery</label>
                            <label>free</label>
                        </div>
                        <div className='order_footer_middle text-center p-2'>
                            <label>We pledge 1% of our profit to positive environmental, climate, and social causes.</label>
                        </div>
                        <div className='space_between p-2'>
                            <label>Order Total</label>
                            <label className='font20'>$2234</label>
                        </div>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}


export default CheckOut;

// import { Button, Tabs } from 'antd';
// import React, { useRef, useState } from 'react';

// const items = [
//             {
//                 label: `Tab 1`,
//                 key: String(1),
//                 children: (
//                     <div>
//                         dfdsafdafds
//                     </div>
//                 ),
//             },
//             {
//                 label: `Tab 2`,
//                 key: String(2),
//                 children: `Content of Tab Pane 2dddddddddddddddddddddddddddddddddddd`,
//             },
//             {
//                 label: `Tab 3`,
//                 key: String(3),
//                 children: `Content of Tab Pane 3dddddddddddddddddddddddddddd`,
//             },
//         ];
    
// const App = () => {
//   const [activeKey, setActiveKey] = useState('1');
// //   const [items, setItems] = useState(defaultPanes);

//   const add = () => {
    
//     setActiveKey("3");
//   };


//   return (
//     <div>
//       <div
//         style={{
//           marginBottom: 16,
//         }}
//       >
//         <Button onClick={add}>ADD</Button>
//       </div>
//       <Tabs
//         // hideAdd
//         // onChange={onChange}
//         activeKey={activeKey}
//         // type="editable-card"
//         // onEdit={onEdit}
//         items={items}
//       />
//     </div>
//   );
// };

// export default App;