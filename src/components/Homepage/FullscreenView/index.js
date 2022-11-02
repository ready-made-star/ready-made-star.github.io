import React, { useRef, useState } from 'react';
import volume_icon from '../../../components/assets/volume.png';
import pre_back from '../../../components/assets/pre_back.png';
import pre_left from '../../../components/assets/pre_left.png';
import pre_front from '../../../components/assets/pre_front.png';
import './fullscreenview.css';
import cardimg from '../../../components/assets/fullscreenimage.jpg';
import cardimg2 from '../../../components/assets/fullscreenimage2.jpg';
import { BsGem } from 'react-icons/bs';
import { TbPin } from 'react-icons/tb';

function Video() {


    return (
        <div className='fullscreen'>
            <label className='font12 text-left p-2' style={{ fontFamily: 'Vulf Mono Demo' }}>DROP</label>
            <div className="player mb-1">
                <div className='full_buttons d-flex'>
                    <button className='cardbtn font14_w4' style={{ cursor: "pointer", color: 'black', border: '1px solid #4B355A' }} ><BsGem />Fashion</button>
                    <button className='pinbtn font14_w4' style={{ cursor: "pointer" }} ><TbPin />Pin</button>
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <img src={cardimg} alt='cardimage' className='fullcard_image' />
                    {/* <img src={pause} alt='' className='video_pause' onClick={handlePlayVideo} style={{ display: !playpause ? 'none' : 'block' }} /> */}
                </div>

                <div className='full_pre_image'>
                    <img className='pre_image' src={pre_back} alt='' />
                    <img className='pre_image' src={pre_left} alt='' />
                    <img className='pre_image' src={pre_front} alt='' />
                </div>

            </div>
            <div className="player mt-1">
                <div className='full_buttons d-flex'>
                    <button className='cardbtn font14_w4' style={{ cursor: "pointer", color: 'black', border: '1px solid #4B355A' }} ><BsGem />Fashion</button>
                    <button className='pinbtn font14_w4' style={{ cursor: "pointer" }} ><TbPin />Pin</button>
                </div>
                <div className='w-100 d-flex align-items-center'>
                    <img src={cardimg2} alt='cardimage' className='fullcard_image' />
                    {/* <img src={pause} alt='' className='video_pause' onClick={handlePlayVideo} style={{ display: !playpause ? 'none' : 'block' }} /> */}
                </div>

                <div className='full_pre_image'>
                    <img className='pre_image' src={pre_back} alt='' />
                    <img className='pre_image' src={pre_left} alt='' />
                    <img className='pre_image' src={pre_front} alt='' />
                </div>

            </div>


        </div>

    )
}
export default Video;