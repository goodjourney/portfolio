import React from 'react'
import Link from 'gatsby-link'
import SocialCloud from '../assets/social-cloud.png'

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
        src={SocialCloud}
        alt="the best dev"
      />
    </Link>
    <div class="content">
      <div class="inner">
        <h2>Social Cloud</h2>
        <p>
          This web application (and Chrome Extension) visualizes live Twitter
          trends and allows the user to view trends geographic location. It was
          a collaborative effort utilizing an Agile workflow built in a few
          days.
        </p>
        <p>
          React. D3 + react-cloud. Express + Node. Twitter Trends API.
          PostgreSQL. HTML. CSS. Javasctipt.
        </p>
        <ul class="actions">
          <li>
            <a
              href="https://social-cloud-trends.firebaseapp.com/"
              target="_blank"
              class="button"
            >
              Demo
            </a>
          </li>
          <li>
            <a
              href="https://chrome.google.com/webstore/detail/social-cloud/oiajhngngfjeolkboffbefmegjkoannk?hl=en"
              target="_blank"
              class="button"
            >
              Chrome Extension
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SocialIssuesWordCloud/Social-Cloud-Frontend/blob/master/Readme.md"
              target="_blank"
              class="button"
            >
              Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Projects
