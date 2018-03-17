import React from 'react'
import Link from 'gatsby-link'

import Projects from './Projects.js'
import Footer from './Footer.js'
import About from './About.js'


const IndexPage = () => (
  <div className="App">
    <section id="intro" className="wrapper">
      <div className="welcome section">
        <h1 className="welcome-intro">DAN BEERMAN</h1>
        <p>
          Developer // Front End Engineer
          <a href="https://www.linkedin.com/in/daniel-beerman/" />.
          <br /> I'm also an adventurer, community builder, and tasty beverage
          drinker.
        </p>
        <ul className="actions">
          <li>
            <a href="#CONTACT" className="button scrolly">
              Get in touch!
            </a>
          </li>
          <li>
            <a href="#PROJECTS" className="button scrolly">
              Check out my work!
            </a>
          </li>
          <a
            href="https://linkedin.com/in/daniel-beerman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square i-hov" aria-hidden="true" />
          </a>{' '}
          <a
            href="https://github.com/lebeerman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github i-hov" aria-hidden="true" />
          </a>{' '}
          <br />
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="button resume-button">
              Resume <i className="fa fa-file-pdf-o" aria-hidden="true" />
            </button>
          </a>
        </ul>
      </div>
    </section>
    <h2 className="heading" id="projects">
      PROJECTS
    </h2>
    <Projects />
    <h2 className="heading" id="about">
      ABOUT
    </h2>
    <About />
    <h2 className="heading" id="blog">
      WRITING
    </h2>
    <h2 className="heading" id="footer">
      LIKE WHAT YOU SEE?
    </h2>
    <Footer />
  </div>
)

export default IndexPage
