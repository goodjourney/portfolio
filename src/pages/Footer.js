import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer CONTACT">
        <div className="footer-1">
          <p>Thanks for checking out my work!</p>
        </div>
        <div className="footer-2">
          <h3>Contact</h3>
          <p>
            <a
              href="mailto:hi@danbeerman.com?Subject=Hello%20there!"
              target="_top"
            >
              <i className="fa fa-envelope i-hov" aria-hidden="true" />{' '}
              hi@danbeerman.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/daniel-beerman/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fa fa-linkedin-square i-hov" aria-hidden="true" />{' '}
              Linkedin
            </a>
          </p>
          <p>
            <a
              href="https://github.com/lebeerman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github i-hov" aria-hidden="true" /> Github
            </a>
          </p>
          <p>
            <a
             href='https://twitter.com/toBDaniel'
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter i-hov" aria-hidden="true" /> Twitter
            </a>
          </p>
          <p>
            <a href='https://www.instagram.com/dbeerman/' target="_blank"
              rel="noopener noreferrer">
              <i className='fa fa-instagram i-hov' aria-hidden="true" />Instagram
            </a>
          </p>
          <br />
          <h3>This Site</h3>
          <p>
            Made by <strong>Dan Beerman</strong> using React + Gatsby,
            JavaScript and custom CSS
          </p>
          <p>
            Check out the repo{' '}
            <strong>
              <a
                href="https://github.com/lebeerman/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                on github
              </a>
            </strong>{' '}
            © 2018
          </p>
        </div>
      </div>
    )
  }
}
export default Footer