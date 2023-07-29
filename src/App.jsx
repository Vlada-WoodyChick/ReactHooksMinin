// useRef - возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './App.css';

function App() {
const [colored, setColored] = useState(false);
const [count, setCount] = useState(1);
const styles = {
  color: colored ? 'darkred' : 'black'
}
const colorButtonHandler =() => {
  setColored(colored => !colored);
}
const countButtonHandler =() => {
  setCount(count => count + 1);
}
useEffect (colorButtonHandler, [count]);


return(
    <div>
<h1 style={styles}>Number of elements {count}</h1>
<button className="btn btn-success" onClick={countButtonHandler}></button>
<button className="btn btn-danger" onClick={colorButtonHandler}></button>
    </div>
  )
}
export default App;
