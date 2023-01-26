import React from 'react'
import './Form.css'

const Form = ({ naziv, setNaziv }) => {

    const handleSubmit = (e) => {
        e.preventDefault();



    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={naziv} onChange={(e) => setNaziv(e.target.value)} />
            <button>Dodaj</button>
        </form>
    )
}

export default Form