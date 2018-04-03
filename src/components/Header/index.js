import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../assets/dbLogo.png'
import Scrollchor from 'react-scrollchor'


const Header = () => (
  <div>
    <ul className="NavBar">
      <img
        style={{
          maxHeight: 100,
          borderRadius: 10,
        }}
        className="nav-name"
        src={Logo}
        alt="the best dev"
      />
      <li className="nav-item nav-last">
        <Scrollchor to="#contact" className="nav-link">
          CONTACT
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#about" className="nav-link">
          ABOUT
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#projects" className="nav-link">
          PROJECTS
        </Scrollchor>
      </li>
      <li className="nav-item">
        <Scrollchor to="#top" className="nav-link">
          WELCOME
        </Scrollchor>
      </li>
      {/* <li className="nav-item">
        <a href="#WRITING" className="nav-link">
          WRITING
        </a>
      </li> */}
    </ul>
  </div>
)

export default Header
