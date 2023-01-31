import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import './Form.css'

const Edit = () => {

    const edit = (e) => {
        e.preventDefault();

        // const newData = recordList.map((item) => {
        //     if (item.id === id) {
        //         return { ...item, name: nazivEdit }
        //     } else {
        //         return item
        //     }
        // })

        // setrecordList(newData)

        // setAction('add');
        // setEditItem({});
        // setNaziv('');

        // valueRef.current.value = '';
    }

    // Cancel Item editing 
    const cancelEdit = () => {
        // setAction('add');
        // setEditItem({});
    }


    return (
        <form onSubmit={edit}>
            <input type="text" />
            <button className='bg-edit'>Edit</button>
            <button className='bg-danger' onClick={cancelEdit}><RiCloseCircleFill /></button>
        </form>
    )
}

export default Edit