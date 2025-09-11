import { useState } from "react"
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
  
  const [activeBtn , setActiveBtn] = useState('All');

  return (
    <>
      <div className="container">
        <Navbar />
        <header>
          <h1>Extensions List</h1>
          <div className="status_btn_container">
            <button className= {activeBtn === 'All' ? 'default_btn active' : 'default_btn'} onClick={()=>{setActiveBtn('All')}}>All</button>
            <button className= {activeBtn === 'Active' ? 'default_btn active' : 'default_btn'} onClick={()=>{setActiveBtn('Active')}}>Active</button>
            <button className= {activeBtn === 'Inactive' ? 'default_btn active' : 'default_btn'} onClick={()=>{setActiveBtn('Inactive')}}>Inactive</button>
          </div>
        </header>
        <main>

        </main>
      </div>
    </>
  )
}

export default App
