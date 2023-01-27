import { useState, useEffect } from 'react';


import Form from './components/Form/Form';
import List from './components/List/List';
import Pagination from './components/Pagination/Pagination';


function App() {

  const [action, setAction] = useState('add');
  const [editItem, setEditItem] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [perPage, setPerPage] = useState(10);


  useEffect(() => {
    showPages();
    changePageContent();

  }, [])

  const showPages = () => {
    let a = Math.floor((data.length - 1) / perPage);
    // let a = data.length / perPage;

    if (a >= 1) {
      setCurrentPage(a + 1)
    }
    else if (a <= 1) {
      setCurrentPage(1)
    }
  }

  const changePageContent = () => {

  }




  const [data, setData] = useState([
    {
      id: 1,
      name: "Apples",
    },
    {
      id: 2,
      name: 'Milk',
    },
    {
      id: 3,
      name: "Solt",
    },
    {
      id: 4,
      name: 'jaja',
    },
    {
      id: 5,
      name: "mleko",
    },
    {
      id: 6,
      name: 'jaja',
    },
    {
      id: 7,
      name: "mleko",
    },
    {
      id: 8,
      name: 'jaja',
    },
    {
      id: 9,
      name: "mleko",
    },
    {
      id: 10,
      name: 'jaja',
    },
    // {
    //   id: 11,
    //   name: 'jaja',
    // },
    // {
    //   id: 12,
    //   name: 'jaja',
    // },
    // {
    //   id: 13,
    //   name: 'jaja',
    // },
    // {
    //   id: 14,
    //   name: "mleko",
    // },
    // {
    //   id: 15,
    //   name: 'jaja',
    // },
    // {
    //   id: 16,
    //   name: "mleko",
    // },
    // {
    //   id: 17,
    //   name: 'jaja',
    // },
    // {
    //   id: 18,
    //   name: "mleko",
    // },
    // {
    //   id: 19,
    //   name: 'jaja',
    // },
    // {
    //   id: 20,
    //   name: 'jaja',
    // },
    // {
    //   id: 21,
    //   name: 'jaja',
    // },
  ]);



  return (
    <div className="app">
      <div className='header'>
        <h1>Shopping list</h1>
        <span><p>{data.length}</p></span>
      </div>

      <Form
        data={data} setData={setData}
        action={action} setAction={setAction}
        editItem={editItem} setEditItem={setEditItem} />

      <List
        data={data} setData={setData}
        action={action} setAction={setAction}
        editItem={editItem} setEditItem={setEditItem} />

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />

    </div>
  );
}

export default App;
