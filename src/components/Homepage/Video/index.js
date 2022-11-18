import './video.css';
import Modal from 'react-bootstrap/Modal'
import React, { useRef, useState } from 'react';
import prev from '../../../components/assets/prev.png';
import next from '../../../components/assets/next.png';
import play from '../../../components/assets/play.png';
import volume_icon from '../../../components/assets/volume.png';
import pre_left from '../../../components/assets/pre_left.png';
import pre_back from '../../../components/assets/pre_back.png';
import screen from '../../../components/assets/screen.png';
import option from '../../../components/assets/option.png';
import close from '../../../components/assets/close.svg';
import pause from '../../../components/assets/pause.png';

function Video(props) {

  const [time, setTime] = useState("00:00");
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [playpause, setPlayPause] = useState(true);

  const videoEl = useRef(null);

  const closeModal = () => {
    // console.log('button closed');
    props.onHide(!showVideo)
  }

  const video = videoEl.current;
  const handleLoadedMetadata = () => {
    if (!video) return;
    // console.log(`The video is ${video.duration} seconds long.`);
    if (video.duration >= 60) {
      setSecond(video.duration % 60);
      if ((video.duration / 60) > 9) {
        setMinute(video.duration);
      }
      else {
        setMinute('0' + video.duration);
      }
    }
    else {
      setMinute('00');
      setSecond(video.duration);
    }
    // setTime(`${video.duration}`)
  };
  const handlePlayVideo = () => {
    setPlayPause(!playpause);
    if (playpause) {
      video.play();
    }
    else {
      video.pause();
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <div className='video'>
        <Modal.Body>
          <img src={close} alt='' className='video_close' onClick={closeModal} />
          <div className="player">
            <div className='w-100 d-flex align-items-center' style={{background: 'var(--background-color)', borderRadius:12}}>
              <video
                className="player__video viewer"
                autoPlay
                src="/allan.mp4"
                ref={videoEl}
                onLoadedMetadata={handleLoadedMetadata}
              />
              <img src={pause} alt='' className='video_pause' onClick={handlePlayVideo} style={{ display: !playpause ? 'none' : 'block' }} />
            </div>

            <div className='pre_images desktop_version'>
              <img className='pre_image' src={pre_back} alt='' />
              <img className='pre_image' src={pre_left} alt='' />
            </div>

            <div className="player__controls">
              <div className='desktop_version'>
                <img src={prev} alt='' />
              </div>
              <div style={{ width: '75%' }}>
                <div className='buttons'>
                  <div className='d-flex align-items-center'>
                    <img src={play} alt='' onClick={handlePlayVideo} style={{ cursor: 'pointer' }} />
                    <div style={{ fontSize: 12 }}>
                      {minute}:{Number((second).toFixed(0))}
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
            <div className='mobile_pre_images d-flex'>
              <img className='pre_image' src={pre_back} alt='' />
              <img className='pre_image' src={pre_left} alt='' />
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  )
}
export default Video;