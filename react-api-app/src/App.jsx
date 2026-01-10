import React,{useEffect, useState} from 'react';

function App() {
  // state to hold user data
  const [users,setUsers] = useState([]);
  // state for loading
  const [loading,setLoading] = useState(true);
  // state for error
  const [error,setError] = useState(null);


  // api call using useEffect
  useEffect(()=>{
    // fetch data from api
    fetch('https://jsonplaceholder.typicode.com/users')
    // response handling
    .then(response=>{
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    // data handling
    .then(data=>{
      setUsers(data);
      setLoading(false);
    })
    // error handling
    .catch(error=>{
      setError(error.message);
      setLoading(false);
    })
  },[]);

  return(
    <div style={{padding:"20px"}}>
      <h1>API Integeration</h1>
      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{color:'red'}}>Error: {error}</p>}

      {/* Data */}
      <ul>
        {users.map(user=>(
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App
