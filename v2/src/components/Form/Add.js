import React from 'react'
import './Form.css'

const Add = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (naziv !== '') {

        //     const newId = recordList.length + 1;

        //     const newData = {
        //         id: newId,
        //         name: naziv,
        //     }

        //     setrecordList([...recordList, newData]);
        //     setNaziv('');
        //     valueRef.current.value = '';
        // } else {
        //     console.log('Nisu uneti podaci')
        // }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button className='bg-success'>Add</button>
        </form>
    )
}

export default Add