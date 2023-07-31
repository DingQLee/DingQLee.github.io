import React, { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Home } from './Home/Home'
import { Hobbies } from './Hobbies/Hobbies'
import { Contact } from './Contact/Contact'

function App() {
  const [loading, setLoading] = useState(false)

  const Loader = () => {
    return (
    <div className='loader-div'>
      <h1>Loading into Conroy Lee's Portfolio</h1>
    </div>
    )
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className="App">
      {
      loading ? 
        <Loader/> 
      :
        <div>
          <Navbar />
          <Home />
          <Hobbies />
          <Contact />
        </div>
      }
    </div>
  )
}

export default App
