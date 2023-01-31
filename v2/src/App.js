import { useState, useEffect } from 'react';
import myData from './data'
import axios from 'axios';

import List from './components/List/List';
import Add from './components/Form/Add';
import Edit from './components/Form/Edit';



function App() {

  const [data, setData] = useState(myData);
  const [editItem, setEditItem] = useState({});

  // Pagination data
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const indexOfLastRecord = currentPage * perPage;
  const indexOfFirstRecord = indexOfLastRecord - perPage;
  const [recordList, setrecordList] = useState(data.slice(indexOfFirstRecord, indexOfLastRecord));


  return (
    <div className="app">
      <div className='header'>
        <h1>Shopping list</h1>
        <span><p>{0}</p></span>
      </div>

      <Add
        editItem={editItem} setEditItem={setEditItem}
      />

      <Edit
        editItem={editItem} setEditItem={setEditItem}
      />

      <List
        editItem={editItem} setEditItem={setEditItem}
        recordList={recordList} setrecordList={setrecordList}
      />


    </div>
  );
}

export default App;
