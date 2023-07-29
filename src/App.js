import React from 'react'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Home } from './Home/Home'
import { Hobbies } from './Hobbies/Hobbies'
import { Contact } from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home /> 
      <Hobbies />
      <Contact />
    </div>
  )
}

export default App
