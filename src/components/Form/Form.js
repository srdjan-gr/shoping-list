import React, { useRef } from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({ data, setData, action, setAction, editItem, setEditItem }) => {

    const { name, id } = editItem
    const [naziv, setNaziv] = useState('');
    const [nazivEdit, setNazivEdit] = useState('')
    const valueRef = useRef();




    // Add item to list
    const handleSubmit = (e) => {
        e.preventDefault();

        if (naziv != '') {

            const newId = data.length + 1;

            const newData = {
                id: newId,
                name: naziv,
            }

            setData([...data, newData]);
            setNaziv('');
            valueRef.current.value = '';
        } else {
            console.log('Nisu uneti podaci')
        }
    }


    // Edit list Item
    const edit = (e) => {
        e.preventDefault();
        // const newData = data.map((item) => (
        //     item.id == id ? { ...item, name: nazivEdit } : item
        // ))

        const newData = data.map((item) => {
            if (item.id == id) {
                return { ...item, name: nazivEdit }
            } else {
                return item
            }
        })

        setData(newData)

        setAction('add');
        setEditItem({});
        // setNazivEdit('');
        setNaziv('');

        valueRef.current.value = '';
    }


    // Cancel Item editing 
    const cancelEdit = () => {
        setAction('add');
        setEditItem({});
    }


    return (
        <>
            {
                action == 'add' ? (
                    <form onSubmit={handleSubmit}>
                        <input type="text" defaultValue={naziv} onChange={(e) => setNaziv(e.target.value)} ref={valueRef} />
                        <button className='bg-success'>Add</button>
                    </form>
                ) : (
                    <form onSubmit={edit}>
                        <input type="text" defaultValue={nazivEdit} placeholder={editItem.name} onChange={(e) => setNazivEdit(e.target.value)} ref={valueRef} />
                        <button className='bg-edit'>Edit</button>
                        <button className='bg-danger' onClick={cancelEdit}>X</button>
                    </form>
                )
            }
        </>
    )
}

export default Form