import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import './checkout.css';
import close from '../../components/assets/close.svg';
import failed from '../../components/assets/failed.png';

function Success(props) {
    
    const [input, setInput] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const onOK = () => {
        
    }
    const closeModal = () => {
        console.log('button closed');
        props.onHide(!showSuccess);
    }
    return (
        <Modal
        {...props}
            size="sm"
            centered
            >

            <Modal.Body>
                <img src={close} alt='' className='close_login' onClick={() => closeModal()} />
                <div>
                    <img className='d-flex' style={{margin:'auto'}} src={failed} alt='' />
                    <div className='font20 p-4 text-center'><label>Uh oh…Payment Declined</label></div>
                    <div className='success_footer text-center' onClick={closeModal()}>Try again</div>
                </div>
            </Modal.Body>
        </Modal>
    );
}


export default Success;