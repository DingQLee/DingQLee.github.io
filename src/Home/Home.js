import React from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'

export const Home = () => {
  let year = new Date().getFullYear()
  let myYear = year - 2002
  return (
    <div className='home-div' id='home'>

      <div className='cascade-wrapper'>
        <div className='left-cascade-div'>
          <Fade left cascade>
            <div className='header-div'>
              <h1>Hi!</h1>
            </div>
              <div className='header-div'>
                <h1>Age</h1>
              </div>
            <div className='header-div'>
              <h1>University</h1>
            </div>
            <div className='header-div'>
              <h1>Major</h1>
            </div>
            <div className='header-div typing'>
              <h1>Programmer</h1>
            </div>
          </Fade>
        </div>

        <div className='right-cascade-div'>
          <Fade left cascade>
            <div className='header-div'>
              <h1>Conroy Lee</h1>
            </div>
            <div className='header-div'>
              <h1>I am {myYear} year old</h1>
            </div>
            <div className='header-div'>
              <h1>The Chinese University of Hong Kong</h1>
            </div>
            <div className='header-div'>
              <h1>Electronic Engineering</h1>
            </div>
            <div className='header-div'>
              <h1>Web Design Enthusiast</h1>
            </div>
          </Fade>
        </div>

        <div className='float-div'></div>
      </div>

    </div>
  )
}
