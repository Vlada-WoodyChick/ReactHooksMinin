import React, { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(() => Math.trunc(Math.random() * 20));
  const increment = () => {
    // // // Short notation prevValue
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }
  const [state, setState] = useState({
    title: 'Counter',
    data: Date.now(),
  });

  const changeTitle = () => {
    setState((prev) => {
      return { ...prev, title: 'New Title' }
    });
  }

  const [text, setText] = useState('');
  const [str, setStr] = useState('');
  
 const onChangeInputHandler =(e) => {
  setStr(e.currentTarget.value);
  
 };
 const onClickButtonHandler =() => {
  setText(str.trim());
  setStr('');
 }





  return (
     <div>
      <h1>Counter={counter} </h1>
      <button className='btn btn-success' onClick={increment}>Add</button>
     <button className='btn btn-danger' onClick={decrement}>Remove</button>
      <button className='btn btn-default' onClick={changeTitle}>Change title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre> 

<div>
  <input type="text" value={str} onChange={onChangeInputHandler}/>
  <button onClick={onClickButtonHandler}>&#9998;</button>
  <p>Word - {text} </p>
</div>

    </div>
  );
}

export default App
