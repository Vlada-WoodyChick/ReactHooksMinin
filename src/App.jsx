import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [type, setType] = useState('users');
  const [data, setData]= useState([]);

//useEffect( () => console.log('render'));

useEffect( () => {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
      .then(json => setData(json))
}, [type])



  return (
    <div>
      <h1>Resource - {type}</h1>
      <button className='btn btn-success' onClick={() => {setType('users')} }>users </button>
      <button className='btn btn-success' onClick={() => {setType('todos')}} >todo </button>
      <button className='btn btn-success' onClick={() => {setType('posts')}  }>posts </button>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )

}
export default App
