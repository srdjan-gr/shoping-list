import React from 'react'
import './List.css'

const List = ({ data }) => {
    return (
        <div className='list'>
            <ul>
                {
                    data.map((pod, idx) => {
                        return (
                            <span>
                                <li key={pod.id}>{pod.id}. {pod.naziv}</li>
                                <button>X</button>
                            </span>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List