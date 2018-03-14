import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div className='inner'>
    <h2 id='three'>Get in touch</h2>
    <p>Look at all the ways you can connect!</p>
    <div className='split style1'>
        <form method='post' action='#'>
          <div className='field half first'>
            <label for='name'>Name</label>
            <input type='text' name='name' id='name' />
          </div>
          <div className='field half'>
            <label for='email'>Email</label>
            <input type='text' name='email' id='email' />
          </div>
          <div className='field'>
            <label for='message'>Message</label>
            <textarea name='message' id='message' rows='5' />
          </div>
          <ul className='actions'>
            <li>
              <a href='' className='button submit'>
                Send Message
              </a>
            </li>
          </ul>
        </form>
        <h3>Social</h3>
        <ul className='icons'>
          <li>
            <a
              href='https://www.linkedin.com/in/daniel-beerman/'
              className='fa-linkedin'
            >
              <span className='label'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href='https://github.com/lebeerman' className='fa-github'>
              <span className='label'>GitHub</span>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/dbeerman/' className='fa-instagram'>
              <span className='label'>Instagram</span>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/toBDaniel' className='fa-twitter'>
              <span className='label'>Twitter</span>
            </a>
          </li>
        </ul>
    </div>
  </div>
)
export default Contact