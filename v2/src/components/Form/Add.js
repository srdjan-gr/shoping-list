import React, { useState, useEffect } from 'react'
import './Form.css'

const Add = ({ recordList, setrecordList }) => {

    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [qty, setQty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && qty !== '') {

            const newId = recordList.length + 1;

            const newData = {
                id: newId,
                name: name,
                comment: comment,
                qty: qty
            }

            setrecordList([...recordList, newData]);

            e.target.name.value = ''
            e.target.comment.value = ''
            e.target.qty.value = ''
            e.target.name.focus()

        } else {
            console.log('Nisu uneti podaci')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-imput'>
                {/*  <label className='form-label form-label-move ' htmlFor="name">Name</label>*/}
                <input id='name' type="text" name='name' defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder='Item Name' />
            </div>

            <div className='form-imput'>
                {/*<label className='form-label form-label-move' htmlFor="comment">Comment</label>*/}
                <input id='comment' type="text" name='comment' defaultValue={comment} onChange={(e) => setComment(e.target.value)} placeholder='Comment' />
            </div>

            <div className='form-imput'>
                {/*<label className='form-label form-label-move' htmlFor="qty">Quantity</label>*/}
                <input id='qty' type="text" name='qty' defaultValue={qty} onChange={(e) => setQty(e.target.value)} placeholder='Quantity' />
            </div>

            <button className='bg-success'>Add</button>
        </form>
    )
}

export default Add