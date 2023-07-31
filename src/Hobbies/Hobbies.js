import React from 'react'
import './Hobbies.css'
import Pulse from 'react-reveal/Pulse'

export const Hobbies = () => {
  return (
    <div className='hobbies-div' id='hobbies'>
      <h1>Programming</h1>
      <h2>These are my favourite programming languages and relevant projects</h2>
      <div className='language-div'>
        <div className='language-wrapper'>
          <Pulse>
            <div className='language-item'>
              <h2>JavaScript (React)</h2>
              <li>Social media platform</li>
              <li>Online multiplayer games</li>
              <li>Final Year Project</li>
            </div>
          </Pulse>
          <Pulse>
            <div className='language-item'>
              <h2>CSS</h2>
              <li>Personal Website</li>
              <li>Final Year Project</li>
            </div>
          </Pulse>
          <Pulse>
            <div className='language-item'>
              <h2>Python</h2>
              <li>Machine Learning</li>
              <li>Mini games</li>
              <li>PFD file management</li>
            </div>
          </Pulse>
        </div>

        <h2>Some other language I learned before</h2>
        <Pulse>
          <div className='language-wrapper'>
            <div className='language-item'>
              <h2>Java</h2>
              <h3>For personal interest</h3>
            </div>
            <div className='language-item'>
              <h2>Ruby</h2>
              <h3>For personal interest</h3>
            </div>
            <div className='language-item'>
              <h2>C++</h2>
              <h3>University course</h3>
            </div>
            <div className='language-item'>
              <h2>C</h2>
              <h3>University course</h3>
            </div>
            <div className='language-item'>
              <h2>Pascal</h2>
              <h3>Secondary school course</h3>
            </div>
          </div>
        </Pulse>
      </div>

      <div className='chess-div'>
        <h1>Chess</h1>
        <h2>I love chess</h2>
        <a href="https://www.chess.com/member/mariocrt0">
          <div className='chess-profile'><h2>My Chess.com Profile</h2></div>
        </a>
        <h2>Some of my favourite openings:</h2>
        <div className='opening-div'>
          <li style={{color:"white"}}>Vienna Gambit</li>
          <li style={{color:"white"}}>Queen's Gambit</li>
          <li>King's Indian</li>
          <li>French Defense</li>
        </div>
      </div>

      <div className='procreate-div'>
        <h1>Procreate</h1>
        <h2>I draw sometimes</h2>
        <p>Gallery</p>
      </div>

      <div className='gym-div'>
        <div className='gym-squat'>
          <h3>Press him!</h3>
          <div className='squat-img' />
        </div>
        <h1>Gym</h1>
        <h2>I lift weights</h2>
      </div>

      <div className='tarot-div'>
        <h1>Tarot cards</h1>
        <h2>Find out who you are in tarot</h2>
      </div>

      <div className='youtube-div' id='youtube'>
        <h1>Video making</h1>
        <h2>I make Youtube content about once in a month</h2>
        <h2>I use Davinci Resolve</h2>
        <a href="https://www.youtube.com/channel/UCwaYeTXVn0QasGm_OXTsGHQ">
          <div className='youtube-link'><h1>My Home Page</h1></div>
        </a>

        <h2>Some of my videos</h2>
        <iframe width="560" height="315" className='youtube-frame'
        src="https://www.youtube.com/embed/uoVgUAXGI2A" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>

        </iframe>
        <div className='play-button'></div>
      </div>

    </div>
  )
}
