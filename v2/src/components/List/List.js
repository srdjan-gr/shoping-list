import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import './List.css'

const List = ({ editItem, setEditItem, recordList, setrecordList }) => {


    const deleteItem = (idx) => {

        let tempData = [...recordList];
        tempData.splice(idx, 1);
        setrecordList([...tempData]);
    }

    const editParams = (item) => {

        setEditItem({
            edit: true,
            id: item.id,
            name: item.name,
            comment: item.comment,
            qty: item.qty,
        })
    }

    return (
        <div className='list'>

            {
                recordList.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Comment</th>
                                <th>Qty</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recordList.map((item, idx) => {
                                    return (
                                        <tr key={item.id} onClick={() => editParams(item)}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.comment}</td>
                                            <td>{item.qty}</td>
                                            <td> <RiCloseCircleFill className='icon-main' onClick={() => deleteItem(idx)} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
                    : (<li>Your shopping list is empty.</li>)
            }
        </div>
    )
}

export default List