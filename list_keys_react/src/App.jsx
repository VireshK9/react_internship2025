import React , {useState} from 'react';

export default function App(){
  // Sample list
  const products = [
    {id:101,name:'Laptop',price:50000},
    {id:102,name:'Headphone',price:2000},
    {id:103,name:'Mouse',price:700},
    {id:104,name:'Monitor',price:4000}
  ]

  // Todo list
  const [todos,setTodo] = useState([
    {id:1,text:'Learn React',done:false},
    {id:2,text:'Practice of Coding',done:false}
  ])
  const [input,setInput] = useState('');
  // add todo list
  function addTodo(){
    if(!input.trim()) return;
    setTodo(prev=> [
      ...prev,
      {id:Date.now(),text:input.trim(),done:false}
    ])
  }
  // delete todo
  function deleteTodo(id){
    setTodo(prev=> prev.filter(todo=> todo.id != id))
  }

  return(
    <div style={{fontFamily:'system-ui',padding:'20px'}}>
        <h1>List & Keys</h1>
        <h2>Product List</h2>
        <ul>
          {products.map(item=>(
            <li key={item.id}>
              {item.name} - Rs.{item.price}
            </li>
          ))}
        </ul>

        <hr />

        <h2>Todo List</h2>
        <input 
          type="text"
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder='Add New Todo'
          style={{padding:'8px',fontSize:'16px'}}
         />
         <button onClick={addTodo} style={{padding:'8px 16px',marginLeft:'8px'}}>
          Add Todo
         </button>
         
         <ul style={{marginTop:'20px'}}>
          {todos.map(t=>(
            <li key={t.id} style={{marginBottom:'10px'}}>
              {t.text}
              <button onClick={()=>deleteTodo(t.id)}
                style={{
                  marginLeft:'10px',
                  padding:'4px 8px',
                  background:'red',
                  color:'white',
                  border:'none'
                }}
              >
                Delete Todo
              </button>
            </li>
          ))}
         </ul>
    </div>
  )
}