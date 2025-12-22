import React,{useState} from "react";

export default function Counter(){
    // count = current state = 0 
    const [count,setCount] = useState(0);

    // using function update values
    const increment = ()=> setCount(c=>c+1);
    const decrement = ()=> setCount(c=>c-1);
    const reset = ()=> setCount(0);

    const doubleIncrement = ()=>{
        setCount(c=>c+2);
    }

    return (
        <div style={{display:'inline-block',padding:12,border:'1px solid #ddd'}}>
            <p>Count : <strong>{count}</strong></p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={doubleIncrement}>+2</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

