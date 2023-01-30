import { useState, useEffect } from 'react';
import myData from './data'

import Form from './components/Form/Form';
import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';


function App() {

  const [data, setData] = useState(myData);

  const [action, setAction] = useState('add');
  const [editItem, setEditItem] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [nPage, setNPage] = useState(null);


  const indexOfLastRecord = currentPage * perPage;
  const indexOfFirstRecord = indexOfLastRecord - perPage;
  const [recordList, setrecordList] = useState(data.slice(indexOfFirstRecord, indexOfLastRecord));


  console.log(currentPage);


  return (
    <div className="app">
      <div className='header'>
        <h1>Shopping list</h1>
        <span><p>{data.length}</p></span>
      </div>

      <Form
        recordList={recordList} setrecordList={setrecordList}
        action={action} setAction={setAction}
        editItem={editItem} setEditItem={setEditItem} />

      <List
        recordList={recordList} setrecordList={setrecordList}
        action={action} setAction={setAction}
        editItem={editItem} setEditItem={setEditItem} />

      <Pagination
        currentPage={currentPage} setCurrentPage={setCurrentPage}
        recordList={recordList} setrecordList={setrecordList}
        perPage={perPage}
        totalPosts={data.length}
        nPage={nPage} setNPage={setNPage}
      />

    </div>
  );
}

export default App;
