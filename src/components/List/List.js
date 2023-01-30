import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import './List.css'

const List = ({ recordList, setrecordList, action, setAction, editItem, setEditItem }) => {


    const deleteItem = (idx) => {

        let tempData = [...recordList];
        tempData.splice(idx, 1);
        setrecordList([...tempData]);
    }

    const editParams = (item) => {
        setAction('edit')
        setEditItem(item)
    }

    return (
        <div className='list'>
            <ul>
                {
                    recordList.length != 0 ? (

                        recordList.map((item, idx) => {
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