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
    .then(response=>{
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
  })
}

export default App
