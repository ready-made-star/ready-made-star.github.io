import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import './checkout.css';
import close from '../../components/assets/close.svg';
import success from '../../components/assets/success.png';

function Success(props) {
    
    return (
        <Modal
        {...props}
            // show={showCheckout}
            size="sm"
            centered
            // onHide={handleClose}
            >

            <Modal.Body>
                <img src={close} alt='' className='close_login' onClick={() =>   props.onHide(false)} style={{ cursor: "pointer" }}/>
                <div>
                    <img className='d-flex' style={{margin:'auto'}} src={success} alt='' />
                    <div className='font20 p-4 text-center'><label>Payment Received</label></div>
                    <div className='success_footer text-center font16' onClick={() =>  props.onHide(false)} style={{ cursor: "pointer" }}>OK</div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export default Success;

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