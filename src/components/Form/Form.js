import React from 'react'
import { useState } from 'react'
import './Form.css'

const Form = ({ data, setData }) => {

    const [id, setId] = useState(null);
    const [naziv, setNaziv] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (naziv != '') {

            const newId = data.length + 1;

            const newData = {
                id: newId,
                naziv: naziv,
            }

            setData([...data, newData]);
            setNaziv('');
        } else {
            console.log('Nisu uneti podaci')
        }
    }


    const editItem = () => {

    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={naziv} onChange={(e) => setNaziv(e.target.value)} />
            <button className='bg-success'>Add</button>
        </form>

    )
}

export default Form