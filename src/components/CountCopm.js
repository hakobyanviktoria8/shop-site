import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { decrement, increment } from '../redux/action/countAction'

function CountCopm() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>CountCopm</h2>
        <div className='countWrapper'>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </div>
  )
}

export default CountCopm