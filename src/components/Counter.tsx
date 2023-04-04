import React, { useState } from 'react';
import './Counter.scss'

function Counter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((value: number) => value + 1);
  };

  return (
    <div>
      <div>{value}</div>
      <button className={'btn'} onClick={increment}>Press</button>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
