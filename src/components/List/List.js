import React from 'react'
import './List.css'

const List = ({ data, setData }) => {


    const deleteItem = (idx) => {

        let tempData = [...data];
        tempData.splice(idx, 1);
        setData([...tempData]);
    }


    return (
        <div className='list'>
            <ul>
                {
                    data.length != 0 ? (

                        data.map((item, idx) => {
                            return (
                                <span key={item.id}>
                                    <li>{item.id}. {item.naziv}</li>
                                    <button onClick={() => deleteItem(idx)}>X</button>
                                </span>
                            )
                        })
                    ) : (
                        <li>Shopping list is empty</li>
                    )
                }
            </ul>
        </div>
    )
}

export default List