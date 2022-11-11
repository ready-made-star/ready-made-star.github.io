// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Select, Tag, Button } from 'antd';
import './passport.css';
import { useState } from 'react';
import pass_avatar from '../../assets/pass_avatar.png';
import pass_code from '../../assets/pass_code.png';
import pass_2code from '../../assets/pass_2code.png';
import pass_2code2 from '../../assets/pass_2code2.png';
import pass_rotate from '../../assets/pass_rotate.png';
import pass_left from '../../assets/pass_left.png';
import pass_right from '../../assets/pass_right.png';
import pass_logo from '../../assets/pass_logo.png';
// import {useState} from 'react';

function Passport() {
  const [front, setFront] = useState(true)
  return (
    <>

      <div className='passport'>
        <div className='pass_main'>
          <div className='pass_front' style={{ display: front ? 'flex' : 'none' }}>

            <div className='pass_info1'>
              <div className='d-flex pass_row'>
                <div className='pass_item'>
                  <label className='pass_title'>Full Name</label>
                  <label className='pass_content'>Dmytro Ryzo</label>
                </div>
                <div className='pass_item'>
                  <label className='pass_title'>NickName</label>
                  <label className='pass_content'>Hwameng</label>
                </div>
                <div className='pass_item'>
                  <label className='pass_title'>Birthday</label>
                  <label className='pass_content'>1/21/1993</label>
                </div>
              </div>
              <div className='d-flex pass_row'>
                <div className='pass_item'>
                  <label className='pass_title'>Phone</label>
                  <label className='pass_content'>123456789</label>
                </div>
                <div className='pass_item'>
                  <label className='pass_title'>MemberShip</label>
                  <label className='pass_content'>2644</label>
                </div>
              </div>
              <div className='d-flex pass_row'>
                <div className='pass_item w-100'>
                  <label className='pass_title'>Address</label>
                  <label className='pass_content'>855 N Vermont Ave Los Angeles CA 90029 USA</label>
                </div>
              </div>
              <div className='d-flex pass_row'>
                <div className='pass_item'>
                  <label className='pass_title'>Payment</label>
                  <label className='pass_content'>Credit Card</label>
                </div>
              </div>
              <div className='d-flex pass_row'>
                <div className='pass_item w-50'>
                  <label className='pass_content'>7374 2454 5540 0126</label>
                </div>
                <div className='pass_item'>
                  <label className='pass_content'>Hotaru Eri</label>
                </div>
              </div>
              <div className='d-flex pass_row'>
                <div className='pass_item float-left'>
                  <label className='pass_content'>04/29</label>
                </div>
                <div className='pass_item'>
                  <label className='pass_content'>512</label>
                </div>
              </div>
            </div>
            <div className='pass_info2'>
              <div className='pass_identify'>
                <div className='pass_avatar p-3 w-100'>
                  <img src={pass_avatar} alt='passcode_avatar' className='d-flex mx-auto w-100 h-100' />
                </div>
                <div className='pass_code p-2 w-100'>
                  <img src={pass_code} alt='passcode_code' className='mx-auto w-100' />
                </div>
              </div>
              <div className='barcode'>
                <img className='w-100 h-100' src={pass_2code} alt='barcode' />
              </div>
            </div>
          </div>
          <div className='pass_back' style={{ display: front ? 'none' : 'flex' }}>
            <img className='pass_logo' src={pass_logo} alt='pass_logo' />
          </div>
        </div>

        <div className='pass_rotate p-5 mx-auto' >
          <div className='mt-3'>
            <img src={pass_left} alt='pass_left' />
          </div>
          <div onClick={() => setFront(!front)}>
            <img src={pass_rotate} alt='pass_rotate' />
          </div>
          <div className='mt-3'>
            <img src={pass_right} alt='pass_right' />
          </div>
        </div>
      </div>
    </>
  )
}
export default Passport;