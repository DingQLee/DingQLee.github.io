import { useEffect, useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'

export const Home = () => {
  let year = new Date().getFullYear()
  let myYear = year - 2002
  return (
    <div className='home-div' id='home'>

      <Fade left cascade>
        <div className='header-div'>
          <h1>MarioCart</h1>
        </div>
        <div className='float-div'></div>
          <div className='header-div'>
            <h1>Age <span>I am {myYear} year old</span></h1>
          </div>
        <div className='header-div'>
          <h1>University <span>The Chinese University of Hong Kong</span></h1>
        </div>
        <div className='header-div'>
          <h1>Major <span>Electronic Engineering</span></h1>
        </div>
        <div className='header-div typing'>
          <h1>Programmer <span>Web Design Enthusiast</span></h1>
        </div>
      </Fade>
      
    </div>
  )
}
