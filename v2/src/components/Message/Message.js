import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import './Message.css'

const Message = ({ message, setMessage }) => {

    const { action, text, bgClass } = message;


    return (
        <div className={`${bgClass == 'danger' ? 'bg-danger-message' : bgClass == 'success' ? 'bg-success-message' : ''} message`}>
            <h3>{text}</h3>
            <RiCloseLine className='icon-xl-white' onClick={() => setMessage({ action: false, text: '', bgClass: '' })} />
        </div>
    )
}

export default Message