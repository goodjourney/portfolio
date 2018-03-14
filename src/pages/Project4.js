import React from 'react'
import Link from 'gatsby-link'
import Jo from '../assets/joweb.jpg'
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
        src={Jo}
        alt='the best dev'
      />
    </Link>
    <div class='content'>
      <div class='inner'>
        <h2>Joanna Hoge - Fine Artist</h2>
        <p>Built out a custom Wordpress Theme, integrated plugins, analytics, security, and added some neat image gallery features.</p>
        <p>Wordpress CMS. PHP. Javascript. CSS. HTML.</p>
        <ul class='actions'>
          <li>
            <a href='http://www.joannahoge.com/' class='button'>Live Site</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Projects
