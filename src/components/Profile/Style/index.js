// import profile_avatar from '../assets/profile_avatar.png';
// import edit from '../assets/edit.png';
import { DownOutlined } from '@ant-design/icons';
import { Select, Tag, Button } from 'antd';
import './style.css';
import { useState } from 'react';
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
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };

function Style() {
    return (
        <>
            <div className='d-flex' style={{ background: 'black' }}>
                <div className='style'>
                    <label>Wear men's clothing, women's clothing, or both?</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                    <label>How would you describe your style</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                    <label>Нour shoe size</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                    <label>Favorite colors</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                    <label>How much you spend</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                    <label>Your shirt size</label>
                    <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={['Womenswear']}
                        style={{
                            width: '100%',
                        }}
                        options={options}
                    />
                </div>
            </div>
            <div>
                <Button>Save Changes</Button>
                <Button>Cancel</Button>
            </div>
        </>
    )
}
export default Style;