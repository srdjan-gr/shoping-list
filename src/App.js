import { useState } from 'react';

import Form from './components/Form/Form';
import List from './components/List/List';
// import data from './data'


function App() {

  const [data, setData] = useState([
    {
      id: 1,
      naziv: "mleko",
    },
    {
      id: 2,
      naziv: 'jaja',
    },
    {
      id: 3,
      naziv: 'kafa',
    },

  ]);


  return (
    <div className="app">
      <div className='header'>
        <h1>Lista za kupovinu</h1>
        <span>{data.length}</span>
      </div>

      <Form data={data} setData={setData} />
      <List data={data} setData={setData} />
    </div>
  );
}

export default App;
