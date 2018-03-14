import React from 'react'
import Link from 'gatsby-link'

import Project1 from './Project1.js'
import Project2 from './Project2.js'
import Project3 from './Project3.js'
import Project4 from './Project4.js'
import Project5 from './Project5.js'
import Contact from './Contact.js'
import Footer from './Footer.js'


const IndexPage = () => (
  <div>
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1>DAN BEERMAN</h1>
        <p>
          Developer // Front End Engineer
          <a href="https://www.linkedin.com/in/daniel-beerman/" />.
          <br /> I'm also an adventurer, community builder, and tasty beverage
          drinker.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Get in touch!
            </a>
          </li>
          <li>
            <a href="#one" className="button scrolly">
              Check out my work!
            </a>
          </li>
        </ul>
      </div>
    </section>
    <Project1 />
    <Project2 />
    <Project3 />
    <Project4 />
    <Project5 />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
