import React from 'react'
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
  const show = useSelector((state) => state.showCounter)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({type:"increment"})
  }

  const handleDecrement = () => {
    dispatch({type:"decrement"})
  }

  const handleIncrementBy5 = () => {
    dispatch({type:"incrementby5", amount: 5})
  }

  const handleDecrementBy5 = () => {
    dispatch({type:"decrementby5", amount : 5})
  }

  const handleToggleCounter = () => {
    dispatch({type:"toggle"})
  }

  

  return (
    <div className='container'>
      {show && <div className='counter'>{counter}</div>}
      <div className='btn'>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        
      </div>
      <div className='btn'>
        <button  onClick={handleIncrementBy5}>IncreaseBy5</button>
        <button  onClick={handleDecrementBy5}>DecreseBy5</button>
      </div>
      <button className='toggle' onClick={handleToggleCounter}>Toggle Counter</button>
    </div>
  )
}




export default Counter