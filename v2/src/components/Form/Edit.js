import React, { useState, useEffect } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import './Form.css'

const Edit = ({ editItem, setEditItem, recordList, setrecordList }) => {

    const [editName, setEditName] = useState('');
    const [editComment, setEditComment] = useState('');
    const [editQty, setEditQty] = useState('');

    useEffect(() => {
        setEditName(editItem.name);
        setEditComment(editItem.comment);
        setEditQty(editItem.qty);
    }, [])


    // Edit Item
    const edit = (e) => {
        e.preventDefault()
        const tempData = [...recordList]

        tempData.forEach((element, idx) => {
            if (editItem.id === element.id) {
                tempData[idx].name = editName;
                tempData[idx].comment = editComment;
                tempData[idx].qty = editQty;
            }
        });
        setrecordList([...tempData])

        cancelEdit();
    }


    // Cancel Item editing 
    const cancelEdit = () => {
        setEditItem({ edit: false, id: '', name: '', comment: '', qty: '', });
    }


    return (
        <form onSubmit={edit}>
            <input type="text" defaultValue={editName} onChange={(e) => setEditName(e.target.value)} placeholder='Item Name' />
            <input type="text" defaultValue={editComment} onChange={(e) => setEditComment(e.target.value)} placeholder='Comment' />
            <input type="text" defaultValue={editQty} onChange={(e) => setEditQty(e.target.value)} placeholder='Quantity' />

            <div className='form-btn'>
                <button className='bg-edit edit' >Edit</button>
                <button className='bg-danger cancel' onClick={cancelEdit}><RiCloseLine /></button>
            </div>
        </form>
    )
}

export default Edit