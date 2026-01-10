import React,{useState,memo} from 'react'

const Child = memo(function Child({count}){
    console.log("Child Rendered");
    return <h3>Child Count : {count}</h3>
})

function App() {
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");

    return(
      <div style={{padding:"20px"}}>
        <h1>Performance Problem</h1>

        <Child count={count} onClick={()=>console.log("Clicked")} />
        
        <button onClick={()=> setCount(count+1)}>Increase Count</button>

        <br /><br />

        <input 
          placeholder='Typer here also re-renders Child' 
          value={text}
          onChange={e=> setText(e.target.value)}
        />
      </div>
    )
}

export default App
