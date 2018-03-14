import React from 'react'
import Link from 'gatsby-link'
import Nav from './Nav.js'
import Logo from '../../assets/dbLogo.png'

const Header = () => (
  <div
    style={{
      background: '#242423',
      paddingBottom: '1.45rem',
    }}
  >
    <div
      className="header-content"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        maxHeight: 175,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link>
        <img
          style={{
            maxHeight: 150,
            minWidth: 100,
          }}
          src={Logo}
          alt="the best dev"
        />
      </Link>
      <Nav />
    </div>
  </div>
)

 export default Header
