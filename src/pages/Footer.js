import React from 'react'
import Link from 'gatsby-link'
import SpotifyPlayer from 'react-spotify-player';
import * as FaIconPack from 'react-icons/lib/fa';
import {
   OutboundLink
 } from 'gatsby-plugin-google-analytics'
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
          <h3>
          <SpotifyPlayer uri="spotify:user:dewanderer:playlist:601WLbJ3Vj91XIugGUJNUe" size={size} view={view} theme={theme} />
          </h3>
        </div>
        <div className="footer-2">
          <h3>Social</h3>
          <p>
            <OutboundLink href="mailto:hi@danbeerman.com?Subject=Hello%20there!" target="_top">
              <FaIconPack.FaPaperPlane size={20} className="fas i-hov" aria-hidden="true" /> hi@danbeerman.com 
            </OutboundLink>
          </p>
          <p>
            <OutboundLink href="https://www.linkedin.com/in/daniel-beerman/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaIconPack.FaLinkedinSquare size={20} className="fas i-hov" aria-hidden="true" /> Linkedin
            </OutboundLink>
          </p>
          <p>
            <OutboundLink href="https://github.com/lebeerman" target="_blank" rel="noopener noreferrer">
              <FaIconPack.FaGithubSquare size={20} className="fas i-hov" aria-hidden="true" /> Github
            </OutboundLink>
          </p>
          <p>
            <OutboundLink href="https://twitter.com/toBDaniel" target="_blank" rel="noopener noreferrer">
              <FaIconPack.FaTwitterSquare size={20} className="fas i-hov" aria-hidden="true" /> Twitter
            </OutboundLink>
          </p>
          <p>
            <OutboundLink href="https://www.instagram.com/dbeerman/" target="_blank" rel="noopener noreferrer">
              <FaIconPack.FaInstagram size={20} className="fas i-hov" aria-hidden="true" /> Instagram
            </OutboundLink>
          </p>
        </div>
        <div className="footer-full">
          <p>
            ©2018. <strong>Dan Beerman</strong> using <strong>
              <OutboundLink href="https://github.com/AustinGreen/gatsby-starter-netlify-cms">
                React + Gatsby + Netlify
              </OutboundLink>
            </strong>, JSX, CSS, and other cool tools.
          </p>
          <p>
            Check out the repo on <strong>
              <OutboundLink href="https://github.com/lebeerman/portfolio" target="_blank" rel="noopener noreferrer">
                github
              </OutboundLink>
            </strong>.{' '}
          </p>
        </div>
      </div>
  }
}
export default Footer