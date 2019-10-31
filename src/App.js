import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const App = () => {
  const [ count, setCount ] = useState(0)
  console.log({count})
  const increment = () => {
    setCount(count +1)
  }
  const decrement = () => {
    setCount(count -1)
  }
  const increment2 = () => {
    setCount(previousCount => previousCount +10)
  }
  const decrement2 = () => {
    setCount(previousCount => previousCount -10)
  }
  const reset = () => {
    setCount(0)
  } 
  const x2 = () => {
    setCount(count * 2)
  } 
  const only3devid = () => {
    if(count % 3 === 0 ){
      setCount(count / 3 )
    }
  }
  return (
    <React.Fragment>
      count: { count } 
      <br/> 
      <Button variant="contained" color="primary" onClick={increment}>+1</Button>
      <Button variant="contained" color="primary" onClick={decrement}>-1</Button><br/>
      <Button variant="contained" color="primary" onClick={increment2}>+10</Button>
      <Button variant="contained" color="primary" onClick={decrement2}>-10</Button><br/>
      <Button variant="contained" color="secondary" onClick={reset}>reset</Button><br/>
      <Button variant="contained" color="dark" onClick={x2}>x2</Button><br/>
      <Button variant="contained" color="dark" onClick={only3devid}>３の倍数の時だけ３で割る</Button><br/>
      
    </React.Fragment>
  );
}

export default App;
