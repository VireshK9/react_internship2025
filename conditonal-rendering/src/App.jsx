import React, {useState} from 'react';

export default function App(){
  // Track if user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Track visibility of the details section
  const [showDetails, setShowDetails] = useState(false);

  // loginn/ logout toggle
  function handleAuthClick(){
    setIsLoggedIn(prevState => !prevState);
    setShowDetails(false); // Hide details on auth change
  }


  // conditional text using if/else 
  let statusText;
  if(isLoggedIn){
    statusText = "You are logged in";
  } else {
    statusText = "You are logged out";
  }

  return(
    <div style={{fontFamily:'system-ui',textAlign:'center',marginTop:'40px'}}>
      <h1>Conditinal Rendering</h1>
   
      <p style={{fontSize:'18px'}}>{statusText}</p>
   
      <p>
        {
          isLoggedIn ? 'Welcome Back': 'Please log in to continue'
        }
      </p>
      <button onClick={handleAuthClick} style={{padding:'8px 16px',fontSize:'14px',marginBottom:'20px'}}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <hr style={{margin:'20px 0'}} />
    {
      isLoggedIn && (
        <div>
          <button 
              onClick={()=>{setShowDetails(pre=>!prev)}}
              style={{padding:'8px 16px',fontSize:'14px'}}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          { showDetails && (
              <p style={{marginTop:'12px'}}>
                These are your secret details - visiible only when logged in !!!!
              </p>
            )
          }
        </div>
      )
    }
    {
      !isLoggedIn && (
        <p style={{fontStyle:'italic',color:'gray'}}>
          Please log in to view your details.
        </p>
      )
    }
      
    </div>
  )
}