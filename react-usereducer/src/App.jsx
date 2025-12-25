import React, {useReducer} from 'react'

// Step 1: Create an initial state object
const initialState = { count: 0 }

// Step 2: Create a reducer function
function reducer(state, action){
  switch(action.type){
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  // Step 3: Use the useReducer hook
   const [state,dispatch] = useReducer(reducer,initialState);

  return(
    <div style={{textAlign:'center', marginTop:'50px'}}>
      <h1>Count : {state.count}</h1>

      <button onClick={()=> dispatch({type:'increment'})}>
        + Increment
      </button>

      <button onClick={()=> dispatch({type:'decrement'})}>
        - Decrement
      </button>

      <button onClick={()=> dispatch({type:'reset'})}>
        Reset
      </button>

    </div>
  )
}

export default App
