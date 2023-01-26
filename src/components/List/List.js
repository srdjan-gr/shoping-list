import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import './List.css'

const List = ({ data, setData, action, setAction, editItem, setEditItem }) => {


    const deleteItem = (idx) => {

        let tempData = [...data];
        tempData.splice(idx, 1);
        setData([...tempData]);
    }

    const editParams = (item) => {
        // setEditItem('')
        setAction('edit')
        setEditItem(item)
    }

    return (
        <div className='list'>
            <ul>
                {
                    data.length != 0 ? (

                        data.map((item, idx) => {
                            return (
                                <span key={item.id}>
                                    <li onClick={() => editParams(item)}>{item.id}. {item.name}</li>
                                    <RiCloseCircleFill className='icon-main' onClick={() => deleteItem(idx)} />
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