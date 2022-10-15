import './video.css';
import Modal from 'react-bootstrap/Modal'
import React, { Component, useState } from 'react';
import prev from '../../../components/assets/prev.png';
import next from '../../../components/assets/next.png';
import play from '../../../components/assets/play.png';
import volume_icon from '../../../components/assets/volume.png';
import video_image from '../../../components/assets/video_image.png';
import screen from '../../../components/assets/screen.png';
import option from '../../../components/assets/option.png';

function Video(props) {
  const [time, setTime] = useState("00:00");
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <div className='video'>
        <Modal.Body>
          <div className="player">
            <div className='d-flex'>
              <video
                className="player__video viewer"
                autoPlay
                src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
              />
              <div className='pre_images desktop_version'>
                <img className='pre_image' src={video_image} alt='' />
                <img className='pre_image' src={video_image} alt='' />
              </div>

            </div>


            <div className="player__controls">
              <div className='desktop_version'>
                <img src={prev} alt='' />
              </div>
              <div style={{ width: '80%' }}>
                <div className='buttons'>
                  <div className='d-flex align-items-center'>
                    <img src={play} alt='' />
                    <div style={{ fontSize: 12 }}>
                      {time}
                    </div>
                  </div>
                  <div>
                    <img src={volume_icon} alt='' />
                    <img src={screen} alt='' />
                    <img src={option} alt='' />
                  </div>
                </div>

                <div
                  className="progress"
                >
                  <div
                    className="progress__filled"
                    style={{ 'flexBasis': 0 }}
                  ></div>
                </div>

              </div>
              <div className='desktop_version'>
                <img src={next} alt='' />
              </div>

            </div>
          </div>
          <div className='mobile_version'>
          <div className='pre_images'>
            <img className='pre_image' src={video_image} alt='' />
            <img className='pre_image' src={video_image} alt='' />
          </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  )
}
export default Video;