// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Select, Tag, Button } from 'antd';
import './style.css';
import { useState } from 'react';
import spotify from '../../assets/spotify.png';

const options = [
    {
        value: 'Womenswear',
    },
    {
        value: 'Menswear',
    },
    
];
const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color='black'
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3, background: 'var(--background-color)', height: 30, fontSize:14, padding:3
        }}
      >
        {label}
      </Tag>
    );
  };

function Style() {
    return (
        <>
            <div className='d-flex' style={{ background: 'var(--background-color)' }}>
                <div className='style'>
                    <label className='font12_mono style_space'>Wear men's clothing, women's clothing, or both?</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%', height: 45
                        }}
                        size='large'
                        options={options}
                    />
                    <label className='font12_mono style_space'>How would you describe your style</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%', height: 45
                        }}
                        options={options}
                    />
                    <label className='font12_mono style_space'>Нour shoe size</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%', height: 45
                        }}
                        options={options}
                    />
                    <label className='font12_mono style_space'>Favorite colors</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%', height: 45
                        }}
                        options={options}
                    />
                    <label className='font12_mono style_space'>How much you spend</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%', height: 45
                        }}
                        options={options}
                    />
                    <label className='font12_mono style_space'>Your shirt size</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%', height: 45
                        }}
                        options={options}
                    />
                </div>
            </div>
            <div className='save_buttons'>
                <div>
                    <button className='save_button'>Save Changes</button>
                </div>
                <div>
                    <button className='cancel_button'>Cancel</button>
                </div>
            </div>
            <img className='mobile_spotify' src={spotify} alt='spotify' style={{ bottom: 120 }} />
        </>
    )
}
export default Style;