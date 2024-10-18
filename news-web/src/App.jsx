import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-gray-200 min-h-screen"> {/* Set gray background color */}
      <Navbar />
      {/* Other components go here */}
    </div>
  )
}

export default App
