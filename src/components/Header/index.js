import React from 'react'
import Link from 'gatsby-link'
import Nav from 

const Header = () => (
  <div
    style={{
      background: 'blue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Dan Beerman
        </Link>
      </h1>
        <Nav />
    </div>
  </div>
)

export default Header
