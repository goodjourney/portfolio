import React from 'react'
import Link from 'gatsby-link'
import Scrollchor from 'react-scrollchor'
import Projects from './Projects.js'
import Footer from './Footer.js'
import About from './About.js'


const IndexPage = () => (
  <div className="App">
    <section id="top" className="wrapper">
      <div className="Welcome section">
        <div className="welcome-intro">
          <h1>
            <strong>DAN BEERMAN</strong>
            <br /> Developer // Front End Engineer
          </h1>
          <p>
            I'm also an adventurer, community builder, and make a great old
            fashioned
          </p>
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
          <a
            href="https://twitter.com/toBDaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter i-hov" aria-hidden="true" />
          </a>{' '}
          <a
            href="https://www.instagram.com/dbeerman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram i-hov" aria-hidden="true" />
          </a>
          <a
            href="mailto:hi@danbeerman.com?Subject=Hello%20there!"
            target="_top"
          >
            <i className="fa fa-envelope i-hov" aria-hidden="true" />
          </a>{' '}
          <br />
          <Scrollchor to="#contact">
            <button className="button">Get in touch!</button>
          </Scrollchor>
          <Scrollchor to="#projects">
            <button className="button">Recent Work</button>
          </Scrollchor>
        </div>
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
    <h2 className="heading" id="contact">
      GET CONNECTED!
    </h2>
    <Footer />
  </div>
)

export default IndexPage
