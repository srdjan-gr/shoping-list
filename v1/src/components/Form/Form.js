import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({ recordList, setrecordList, action, setAction, editItem, setEditItem }) => {

    const { name, id } = editItem
    const [naziv, setNaziv] = useState('');
    const [nazivEdit, setNazivEdit] = useState('')
    const valueRef = useRef();

    useEffect(() => {
        setNazivEdit(name)
    }, [])


    // Add item to list
    const handleSubmit = (e) => {
        e.preventDefault();

        if (naziv !== '') {

            const newId = recordList.length + 1;

            const newData = {
                id: newId,
                name: naziv,
            }

            setrecordList([...recordList, newData]);
            setNaziv('');
            valueRef.current.value = '';
        } else {
            console.log('Nisu uneti podaci')
        }
    }


    // Edit list Item
    const edit = (e) => {
        e.preventDefault();

        const newData = recordList.map((item) => {
            if (item.id === id) {
                return { ...item, name: nazivEdit }
            } else {
                return item
            }
        })

        setrecordList(newData)

        setAction('add');
        setEditItem({});
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
                action === 'add' ? (
                    <form onSubmit={handleSubmit}>
                        <input type="text" defaultValue={naziv} onChange={(e) => setNaziv(e.target.value)} ref={valueRef} />
                        <button className='bg-success'>Add</button>
                    </form>
                ) : (
                    <form onSubmit={edit}>
                        <input type="text" placeholder={editItem.name} onChange={(e) => setNazivEdit(e.target.value)} ref={valueRef} />
                        <button className='bg-edit'>Edit</button>
                        <button className='bg-danger' onClick={cancelEdit}>X</button>
                    </form>
                )
            }
        </>
    )
}

export default Form