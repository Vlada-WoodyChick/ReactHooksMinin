// useRef - возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
 // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] =useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const focus = () => inputRef.current.focus();
  const prevValue = useRef('');
  useEffect(() => {
    renderCount.current ++;  
    console.log(inputRef.current.value);  
  });
  useEffect( () => {
    prevValue.current = value;
  }, [value])

 return(
    <div>
<h1>RenderCount: {renderCount.current}</h1>
<h2>Previous value: {prevValue.current}</h2>
<input ref={inputRef} type="text" onChange={ e =>setValue(e.target.value)  } value={value}/>
<button className='btn btn-success' onClick={focus}>focus</button>

    </div>
  )
}
export default App
