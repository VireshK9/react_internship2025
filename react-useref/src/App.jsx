import React ,{useRef,useState,useEffect}  from "react";

function App() {
  
  // Example 1: Accessing DOM Element

  // const inputRef = useRef(null);

  // function focusInput(){
  //   inputRef.current.focus();
  // }

  // return(
  //   <div style={{textAlign:"center", marginTop:"100px"}}>
  //     <h1>useRef Example</h1>

  //     <input 
  //       type="text" 
  //       ref={inputRef}
  //       placeholder="Click the button to focus me"
  //       style={{padding:"10px", fontSize:"16px"}}
  //     />
  //     <br/><br/>
  //     <button onClick={focusInput}>
  //       Focus Input
  //     </button>

  //   </div>
  // )

  // Example 2: Storing Value without Causing Re-renders

  // const countRef = useRef(0);                           //ref
  // const [renderCount , setRenderCount] = useState(0);   //state

  // function handleClick(){
  //   countRef.current += 1;
  //   console.log("Button clicked", countRef.current, "times");
  // }

  // return(
  //   <div style={{textAlign:"center", marginTop:"100px"}}>
  //     <h1>useRef Example</h1>

  //     <p>Render count(state) : {renderCount}</p>
  //     <p>Button click count (ref) : check console</p>
  //     <button onClick={handleClick}>
  //       Click Me
  //     </button>

  //     <br /><br />
  //     <button onClick={()=>{setRenderCount(renderCount+1)}}>
  //       Force Re-render
  //     </button>

  //   </div>
  // )

  // Example 3 : Precious Value Tracker

  const [name , setName] = useState('');
  const prevNameRef = useRef('');

  useEffect(()=>{
    prevNameRef.current = name;
  });

  return(
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>useRef Example 3</h1>

      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Type your name"
        style={{padding:"10px", fontSize:"16px"}}
      />

      <p>Current Value : {name}</p>
      <p>Previous Value : {prevNameRef.current}</p>
    </div>
  )

}

export default App
