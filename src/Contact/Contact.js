import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-div' id='contact'>
      <h1>Contact Me!</h1>
      <h2>Fiverr</h2>
      <a href='https://www.fiverr.com/tingkiulee?up_rollout=true'>
        <h3 className='freelance-header'>Conroy Lee - CSS enthusiast</h3>
      </a>
      <h2>Upwork</h2>
      <a href='https://www.upwork.com/freelancers/~016d15b955826c0bfa'>
        <h3 className='freelance-header'>Conroy Lee - Contact me now!</h3>
      </a>
    </div>
  )
}
