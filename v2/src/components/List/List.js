import React from 'react'
import { RiCloseCircleFill, RiEditBoxLine } from 'react-icons/ri'
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
                                <th>Id </th>
                                <th>Name</th>
                                <th>Comment</th>
                                <th>Qty</th>
                                <th>Opt</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                recordList.map((item, idx) => {
                                    return (
                                        <tr key={item.id} >
                                            <td>{item.id}.</td>
                                            <td>{item.name}</td>
                                            <td>{item.comment}</td>
                                            <td>{item.qty}</td>
                                            <td>
                                                <RiEditBoxLine className='icon-main-edit' onClick={() => editParams(item)} />
                                                <RiCloseCircleFill className='icon-main-danger' onClick={() => deleteItem(idx)} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
                    : (<li>Your shopping list is empty.</li>)
            }
        </div >
    )
}

export default List