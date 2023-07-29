// useRef - возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.

import React, { useState, useEffect, useRef, useMemo } from 'react';
import './App.css';
const complexCompute =(num) => {
  let i = 0;
  while (i < 1000000000) i++
  return num * 2;
}
function App() {
 const [number, setNumber] = useState(42);
 
const addNumber =() => setNumber(number => number + 1);
const substractNumber =() => {  
  setNumber(number => number -1);
}
const[colored, setColored] = useState(false);
const styles = useMemo( () => (  {
  color: colored ? 'darkred' : 'black'
 } ), [colored])
useEffect( () => console.log('styles changed'), [styles])

const computed = useMemo(
  ()=> complexCompute(number), [number]
) 
 return(
    <div>
<h1 style = {styles}>Computed property: {computed}</h1>
<button className="btn btn-success" onClick= {addNumber} >ADD</button>
<button className="btn btn-danger" onClick={substractNumber }>SUBTRACT</button>
<button className="btn btn-warning" onClick={ () => setColored(colored => !colored)}>CHANGE</button>

    </div>
  )
}
export default App;
