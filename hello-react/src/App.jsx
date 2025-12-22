import { useState } from 'react'
import Greeting from './components/Greeting'
import Foooter from './components/Footer'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h1>React Components Demo</h1>
        {/* Using Greet Component */}
        <Greeting name="Omkar" />
        <Greeting name="Vijay" />

        {/* Card Component Use */}
        <Card title="Card Title 1" content="This is the content of card 1." />
        <Card title="Card Title 2" content="This is the content of card 2." />

        {/* Footer Component Use */}
        <Foooter />
    </div>
  )
}

export default App
