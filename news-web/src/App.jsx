import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BottomNav from './components/BottomNav'

function App() {

  return (
    <div className="bg-gray-200 min-h-screen"> {/* Set gray background color */}
      <Header />
      <BottomNav/>
    </div>
  )
}

export default App
