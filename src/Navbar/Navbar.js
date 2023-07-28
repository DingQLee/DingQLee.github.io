import React from 'react'
import './Navbar.css'
import { useTime } from 'react-timer-hook'

export const Navbar = () => {
  const date = new Date().toDateString()
  const { seconds, minutes, hours, ampm,} = useTime({ format: '12-hour'})
  return (
    <div className='navbar-div'>
      <a href='#home'>Home</a>
      <a href='#hobbies'>Hobbies</a>
      <a href='#intro'>Youtube</a>
      <a href='#contact'>Contact</a>
      <div className='clock-div'>
        <span>{hours === 0 ? "12" : hours}</span>:<span>{minutes}</span>:
        <span>{seconds >= 10 ? seconds : "0" + seconds}</span>
        <span>{ampm}</span>
        <span>{" " + date}</span>
      </div>
    </div>
  )
}
