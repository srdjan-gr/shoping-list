import { useState } from 'react';

import Form from './components/Form/Form';
import List from './components/List/List';


function App() {

  const [action, setAction] = useState('add');
  const [editItem, setEditItem] = useState({});




  const [data, setData] = useState([
    {
      id: 1,
      name: "mleko",
    },
    {
      id: 2,
      name: 'jaja',
    },

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

    </div>
  );
}

export default App;
