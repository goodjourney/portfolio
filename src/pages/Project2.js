import React from 'react'
import Link from 'gatsby-link'
import SmartTrak from '../assets/smart-trak.png'

const Projects = () => (
  <div
    className='project'
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <Link>
      <img
        style={{
          maxHeight: 150,
          minWidth: 100,
        }}
        src={SmartTrak}
        alt='the best dev'
      />
    </Link>
    <div className='content'>
      <h2>SMART Trak</h2>
      <p>
        S.M.A.R.T. goal tracker web app. Great app for keeping your quarterly
        goals on track.
      </p>
      <p>OAuth 2.0 Okta API. React. Express + Node. Knex. PostgreSQL.</p>
      <ul class='actions'>
        <li>
          <a
            href='https://smart-trak.firebaseapp.com/'
            target='_blank'
            className='button'
          >
            Demo
          </a>
        </li>
        <li>
          <a
            href='https://github.com/lebeerman/smart-track/blob/master/README.md'
            target='_blank'
            className='button'
          >
            Code
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Projects
