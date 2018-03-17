import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../assets/dbLogo.png'

const Nav = () => (
  <div>
    <ul className="NavBar">
      <Link>
        <img
          style={{
            maxHeight: 150,
            minWidth: 100,
          }}
          className="nav-name"
          src={Logo}
          alt="the best dev"
        />
      </Link>
      <li className="nav-item">
        <a href="#top" className="nav-link" />
      </li>
      <li className="nav-item">
        <a href="#PROJECTS" className="nav-link">
          PROJECTS
        </a>
      </li>
      <li className="nav-item">
        <a href="#ABOUT" className="nav-link">
          ABOUT
        </a>
      </li>
      <li className="nav-item">
        <a href="#CONTACT" className="nav-link">
          CONTACT
        </a>
      </li>
      <li className="nav-item">
        <a href="#WRITING" className="nav-link">
          WRITING
        </a>
      </li>
    </ul>
  </div>
)
export default Nav