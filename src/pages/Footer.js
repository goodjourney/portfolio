import React from 'react'
import Link from 'gatsby-link'
import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

class Footer extends React.Component {
  render() {
    return <div className="Footer" href="#CONTACT">
        <div className="footer-1">
          <h3 />
          <SpotifyPlayer uri="spotify:user:dewanderer:playlist:601WLbJ3Vj91XIugGUJNUe" size={size} view={view} theme={theme} />
          {/* <form method='post' action='#'>
							<div class=''>
								<label for='name'>Name</label>
								<input type='text' name='name' id='name' />
							</div>
							<div class='field half'>
								<label for='email'>Email</label>
								<input type='text' name='email' id='email' />
							</div>
							<div class='field'>
								<label for='message'>Message</label>
								<textarea name='message' id='message' rows='5'></textarea>
							</div>
							<ul class='actions'>
								<li>
									<a href='' class='button submit'>Send Message</a>
								</li>
							</ul>
					</form> */}
        </div>
        <div className="footer-2">
          <h3>Social</h3>
          <p>
            <a href="mailto:hi@danbeerman.com?Subject=Hello%20there!" target="_top">
              <i className="fas fa-envelope i-hov" aria-hidden="true" /> hi@danbeerman.com
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/daniel-beerman/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fab fa-linkedin i-hov" aria-hidden="true" /> Linkedin
            </a>
          </p>
          <p>
            <a href="https://github.com/lebeerman" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github i-hov" aria-hidden="true" /> Github
            </a>
          </p>
          <p>
            <a href="https://twitter.com/toBDaniel" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter i-hov" aria-hidden="true" /> Twitter
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/dbeerman/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram i-hov" aria-hidden="true" />Instagram
            </a>
          </p>
        </div>
        <div className="footer-full">
          <p>
            © 2018. <strong>Dan Beerman</strong> using <strong>
              React + Gatsby + Netlify
            </strong>, JSX, CSS, and other cool tools.
          </p>
          <p>
            Check out the repo <strong>
              <a href="https://github.com/lebeerman/portfolio" target="_blank" rel="noopener noreferrer">
                on github
              </a>
            </strong>{' '}
          </p>
        </div>
      </div>
  }
}
export default Footer