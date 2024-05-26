import './App.css';
import Form from './Form'
import { useState } from 'react';
import Table from './Table';

function App() {
  const [obj,setObj]=useState({first:"",last:"",email:"",roll:""})
  const [arr,setArr]=useState([])
  const [update,setUpdate]=useState(null)
  return (
    <div className="App">
      <h1 className='text-orange-700 text-3xl text-center p-4 m-4'>User Form:</h1>
      <Form obj={obj} arr={arr} setArr={setArr} setObj={setObj} update={update} setUpdate={setUpdate} />
      <Table setUpdate={setUpdate} arr={arr} setArr={setArr} setObj={setObj}/>
    </div>
  );
}

export default App;
