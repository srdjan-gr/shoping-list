import { useState, useEffect } from 'react';
import myData from './data'

import List from './components/List/List';
import Add from './components/Form/Add';
import Edit from './components/Form/Edit';
import Message from './components/Message/Message';



function App() {

  const [data, setData] = useState(myData);
  const [editItem, setEditItem] = useState({
    edit: false,
    id: '',
    name: '',
    comment: '',
    qty: '',
  });


  const [message, setMessage] = useState({
    action: false,
    text: '',
    bgClass: '',
  })


  // Pagination data
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const indexOfLastRecord = currentPage * perPage;
  const indexOfFirstRecord = indexOfLastRecord - perPage;
  // const [recordList, setrecordList] = useState(data.slice(indexOfFirstRecord, indexOfLastRecord));
  const [recordList, setrecordList] = useState(data);


  return (
    <div className="app">

      {message.action == true ? <Message message={message} setMessage={setMessage} /> : ''}

      <div className='header'>
        <h1>Shopping list</h1>
        <span><p>{recordList.length}</p></span>
      </div>

      {
        editItem.edit == false ?

          <Add
            editItem={editItem} setEditItem={setEditItem}
            recordList={recordList} setrecordList={setrecordList}
            message={message} setMessage={setMessage}
          />
          :
          <Edit
            editItem={editItem} setEditItem={setEditItem}
            recordList={recordList} setrecordList={setrecordList}
            message={message} setMessage={setMessage}
          />
      }

      <List
        editItem={editItem} setEditItem={setEditItem}
        recordList={recordList} setrecordList={setrecordList}
        message={message} setMessage={setMessage}
      />


    </div>
  );
}

export default App;
