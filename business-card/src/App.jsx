import { useState } from 'react'
// import './assets'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <div className="profile-picture">
      <img src="./src/assets/img1.jpg" alt="Jeremie" />
    </div>
    <div className="info">
      <h2>Jeremie Iyamurinze</h2>
      <h4>Frontend Developer</h4>
      <a href="laurasmith.website" target="_blank" rel="noopener noreferrer">j.yamurinze.website</a>
      <div className="buttons">
        <button className="email-button">
          <i className="email"></i><img src="./src/assets/img7.png" /> Email
        </button>
      </div>
      <h3>About</h3>
      <p>
        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
      </p>
      <h3>Interests</h3>
      <p>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </p>
      <br></br>
      <footer>
      <div className="social-media">
        <a href="#"  rel="noopener noreferrer">
          <i className="twitter">
          <img src="./src/assets/img2.png" ></img>
          </i>
        </a>
        <a href="#"  rel="noopener noreferrer">
          <i className="facebook-f">
          <img src="./src/assets/img3.png"></img>
          </i>
        </a>
        <a href="#"  rel="noopener noreferrer">
          <i className="instagram">
          <img src="./src/assets/img4.png"></img>
          </i>
        </a>
        <a href="#"  rel="noopener noreferrer">
          <i className="github" >
          <img src="./src/assets/img5.png"></img>
          </i>
        </a>
        <a href="#"  rel="noopener noreferrer">
          <i className="linkedin" >
          <img src="./src/assets/img6.png"></img>
          </i>
        </a>
      </div>
      </footer>
    </div>
  </div>
  )
}

export default App
