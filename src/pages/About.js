import React, { Component } from 'react'
import dbAbout from '../assets/dbAbout.gif'
import * as FaIconPack from 'react-icons/lib/fa'

class About extends Component {
  render() {
    return <div className="About section">
        <div className="about-content">
          <h1 className="about-intro">
            I'm about <strong>tech + community + and making things</strong>.
          </h1>
          <p className="about-item">
            <strong>I love to work with great people. </strong>
            I've worked as a scientific writer, water quality researcher, science communications enthusiast, outdoor educator, professional hiker, bartender + server, events organizer, community manager, illustrator, developer and software engineer.
          </p>
          <p className="about-item">
            I spend most of my waking hours at Galvanize - Platte in Denver.<br />
          </p>
          <p className="about-item">
            Originally, I'm from St. Louis, Missouri! (#STL) I went to the
            University of Missouri - Columbia and earned a BS in
            Biochemistry. I worked as a backpacking instructor during the
            summers, fell in love with the mountains. After a stint in the
            Biotech industry I hike the Pacific Crest Trail. Then I moved to
            Colorado.
          </p>
        </div>
        <div className="about-content">
          <img style={{ width: 400, height: 400 }} src={dbAbout} className="profile" />
          <a href="https://drive.google.com/file/d/1IWKRxPM59F_J0O5_BgvrkEcP8h4UoI_D/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="button i-hov">
              <FaIconPack.FaFilePdfO size={30} aria-hidden="true" /> Resume
            </button>
          </a>
        </div>
      </div>
  }
}
export default About
