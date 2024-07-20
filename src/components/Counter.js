import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Counter.css"
const Counter = () => {
    const counter = useSelector((state)=>state.counter)
    //console.log(counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch({type:"increment"})
    }

    const handleDecrement = () => {
        dispatch({type:"decrement"})
    }



  return (
    <div className='container'>
        <div className='counter'>{counter}</div>
        <div className='btn'>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    </div>
  )
}

export default Counter