import React, { Component } from 'react'
import dbAbout from '../assets/dbAbout.gif'
import * as FaIconPack from 'react-icons/lib/fa'
import resume from '../assets/DanBeerman-Resume.pdf'
import {
  OutboundLink
} from 'gatsby-plugin-google-analytics'
class About extends Component {
  render() {
    return <div className="About section">
        <div className="about-content">
          <h1 className="about-intro">
            I'm about <strong>tech + community + making things</strong>.
          </h1>
          <p className="about-item">
            <strong>I love to work with great people. </strong>
            I've been a technical writer, water researcher, outdoor educator, backpacking/climbing 
            guide, bartender, events organizer, community manager, artist, and now a developer + software engineer.
          </p>
          <p className="about-item">
            I spend most of my waking hours at Galvanize - Platte in Denver.<br />
          </p>
          <p className="about-item">
            I'm from St. Louis, MO! I went to the University of Missouri and earned a BS in
            Biochemistry. I as an outdoor educator during the summers, and fell in love with 
            the mountains. After a stint working in Biotech I hiked the Pacific Crest Trail. 
            Then I moved to Colorado and worked at Galvanize. Now I write code.
          </p>
        </div>
        <div className="about-content">
          <img src={dbAbout} className="profile" />
          < OutboundLink href = {
            resume
          }
          target = "_blank"
          rel = "noopener noreferrer" >
            <button className="button i-hov">
              <FaIconPack.FaFilePdfO size={30} aria-hidden="true" /> Resume
            </button>
          </ OutboundLink >
        </div>
      </div>
  }
}
export default About
