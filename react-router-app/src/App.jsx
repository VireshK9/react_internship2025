import {BrowserRouter , Routes,Route,Link} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return(
    <BrowserRouter>
      {/* Navigation */}
      <nav style={{padding:"10px",borderBottom:"1px solid gray"}}>
          <Link to="/" style={{marginRight:"10px"}}>Home</Link>
          <Link to="/about" style={{marginRight:"10px"}}>About</Link>
          <Link to="/contact" >Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
