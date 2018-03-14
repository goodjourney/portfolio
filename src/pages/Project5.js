import React from 'react'
import Link from 'gatsby-link'
import CoUS from '../assets/cous.jpg'

const Projects = () => (
  <div
    className="project"
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
        src={CoUS}
        alt="the best dev"
      />
    </Link>
    <div class="content">
      <div class="inner">
        <h2>Captains of US</h2>
        <p>
          Personal adventure blog documenting explorations in the wild.
          Collaborative project with Jonathan Hinderliter.
          <a href="">I also made this rad video that I'm in love with</a>.
        </p>
        <p>Marketing. Design. Identity. Copy. Photography. Editorial.</p>
        <ul class="actions">
          <li>
            <a
              href="https://www.captainsofus.com/"
              target="_blank"
              class="button"
            >
              Live Site
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Projects
