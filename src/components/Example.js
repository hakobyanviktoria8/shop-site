import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'

const initialState = { value: 100 }

const addincrement = num => {
    return {
      type: 'increment',
      payload: num
    }
}

function counterReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + action.payload
    }
  }
  return state
}

const store = configureStore({ reducer: counterReducer })
console.log(store.getState().value)

// const selectCounterValue = state => state.value

// const currentValue = selectCounterValue(store.getState())
// console.log("currentValue ",currentValue)

function Example() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    // react vay
    // const [counter, setCounter] = useState(0)
    // const increment = () => {
    //   setCounter(prevCounter => prevCounter + 1)
    // }
  
    return (
      <div>
          <h2>Example</h2>
          <p>Value: {count}</p>
          <button onClick={() => dispatch(addincrement(19))}>Increment</button>
      </div>
    )
}

export default Example