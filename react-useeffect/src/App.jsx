import React, { useEffect,useState } from 'react';
// useeffect
function App() {
  // ******************************************* Example 1 ******************************************* 
  // useEffect(()=>{
  //   console.log('Component Loaded');
  // },[])

  // return(
  //   <div style={{textAlign:"center",marginTop:"50px"}}>
  //     <h1>useEffect - Example 1</h1>
  //     <p>Check Console</p>
  //   </div>
  // )


  // ******************************************* Example 2 ******************************************* 

  // const [count,setCount] = useState(0);

  // useEffect(()=>{
  //   console.log('Count Updated:',count);
  // },[count]);

  // return(
  //   <div style={{textAlign:"center",marginTop:"50px"}}>
  //     <h1>userEffect - Example 2</h1>
  //     <h2>Count : {count}</h2>

  //     <button onClick={()=> setCount(count+1)}>Increase</button>
  //   </div>
  // )

  // ******************************************* Example 3 - API Calls ******************************************* 
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data);
      // console.log(data);
      setLoading(false);
    })
    .catch(error => console.log(error));
  },[]);
  
  return(
    <div>
      <h1>useEffect - Example 3 - API Calls</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App


// API Calls
// initial setup
// page load logic