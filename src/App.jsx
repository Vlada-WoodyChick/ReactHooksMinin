import React,{ useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
const increment =() =>{
  // // // Short notation prevValue
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
} 

const decrement = () => {
  setCounter(counter - 1);
  
}
  return (
   <div>
    <h1>Counter={counter} </h1>
    <button className='btn btn-success' onClick={increment}>Add</button>
    <button className='btn btn-danger' onClick={decrement}>Remove</button>
   </div>
  );
}

export default App
