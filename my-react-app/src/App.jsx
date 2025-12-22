import React,{ useState } from 'react'
import './App.css'


function App(){
  // single state object to manage form data
  const [form,setForm] = useState({name:'',email:''});
  // store submitted entries to display later
  const [submissions,setSubmissions] = useState([]);
  // store a small validation message
  const [error,setError] = useState('');

  // update any field -> controlled input pattern
  const handleChange= (e)=>{
    const {name,value} = e.target;
    // copy previous and set the changed field
    setForm(prev=>({...prev,[name]:value}));
  }

  // validate email with simple regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // handle form submission
  const handleSubmit = (e)=>{
    e.preventDefault();     // prevent page reload
    setError('')        // clear previous error 

    if(!form.name.trim()|| !form.email.trim()){
      setError("Both fields are required.");
      return;
    }
    if(!isValidEmail(form.email)){
      setError("Please enter a valid email address.");
      return;
    }

    setSubmissions(prev=>[...prev,form]); // add new entry
    setForm({name:'',email:''}); // reset form
  };

  return(
    <div style={{fontFamily:'system-ui',textAlign:'center',maxWidth:640,margin:'40px auto'}}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} style={{border:'1px solid #eee',padding:16,borderRadius:8}}>
        <div style={{marginBottom:12}}>
            <label>
              Name : {''}
              <input name='name' value={form.name} onChange={handleChange} placeholder='Enter your name ' style={{padding:8,width:300}} />
            </label>
        </div>
        <div style={{marginBottom:12}}>
            <label>
              Email : {''}
              <input name='email' value={form.email} onChange={handleChange} placeholder='Enter your email ' style={{padding:8,width:300}} />
            </label>
        </div>

        {error && <p style={{color:'crimson'}}>{error}</p>}
        <button type='submit' style={{padding:'8px 16px'}}>Submit</button>
      </form>

      {/*Submission List */}
      <section style={{marginTop:32}}>
        <h2>Submitted Entries</h2>
        {submissions.length === 0 ? (
          <p>No entries yet.</p>
        ):(
          <ul style={{paddingLeft:0,listStyle:'none'}}>
            {submissions.map((entry,index)=>(
              <li key={index} style={{marginBottom:8,textAlign:'left'}}>
                <strong>Name:</strong> {entry.name} <br/>
                <strong>Email:</strong> {entry.email}
              </li>
            ))}
          </ul>
        )
      }
      </section>
    </div>
  )

}


// function App() {
//   // Step 1 : Create a piece of state for message
//   const [message, setMessage] = useState("Welcome to React Event");

//   // Step 2 : Create event handler function
//   function handleClick(){
//     setMessage("You clicked the button!!");
//   }

//   return (
//     <div style={{textAlign:'center',marginTop:"60px"}}>
//       <h2>{message}</h2>
//       <button 
//         onClick={handleClick}
//         style={{padding:"10px 20px",fontSize:"16px",cursor:'pointer'}}
//       >Click Me</button>
//     </div>
//   )
// }

// function App(){
//   const [name,setName] = useState("");

//   function handleInputChange(event){
//     setName(event.target.value);
//   }

//   return(
//     <div style={{textAlign:'center',marginTop:"60px"}}>
//       <h2>React onChange Event</h2>
      
//       <input 
//         type="text"
//         placeholder='Enter your name'
//         value={name} //controlled input
//         onChange={handleInputChange}
//         style={{padding:'10px',fontSize:16,width:'250px'}}
//        />

//        <h3 style={{marginTop:'40px'}}>
//         {name ? `Hello, ${name}!` : "Please enter your name."}
//        </h3>

//     </div>
//   )
// }



export default App
