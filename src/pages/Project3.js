import React from 'react'
import Link from 'gatsby-link'
import MapIt from '../assets/mapit.png'

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
        src={MapIt}
        alt='the best dev'
      />
    </Link>
    <div class='content'>
      <div class='inner'>
        <h2>MapIt</h2>
        <p>
          Ever struggle to get your team to show up to the right place? Not know
          where to park? Coordinating a group camping trip? Add your locations
          to the map then send them to this to find the spot.
        </p>
        <p>
          Express + Node. Leaflet + Mapbox. PostgreSQL. HTML. CSS. Javasctipt.
        </p>
        <ul class='actions'>
          <li>
            <a href='http://p2-web-app.firebaseapp.com/' class='button'>
              Demo
            </a>
          </li>
          <li>
            <a href='' class='button'>
              Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Projects
