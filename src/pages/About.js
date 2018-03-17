import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="About section">
        <h1 className="about-intro">
          <strong>Dan Beerman/strong>: tech + science + community.</strong>
        </h1>
        <p className="about-item">
          <strong>I love to make things with people.</strong>
          I've worked as a scientific writer, water quality researcher, science communications enthusiast,
          outdoor educator, professional hiker, bartender + server, events organizer, community manager,
          illustrator, developer and software engineer. 
        </p>
        <p className="about-item">
          I am currently spending move of my waking hours at Galvanize - Platte in Denver.
          But I am open to new oppertunities in the tech industry <a href="" target="_blank"> so get in touch!</a>
        </p>
        <p className="about-item">
          Originally, I'm from St. Louis, Missouri! (#STL, waaat) I went to 
          the University of Missouri - Columbia and earned a BS in Biochemistry. 
          I worked as a backpacking instructor during the summers. Fell in love with the 
          mountains. After a stint in the Biotech industry I moved to Colorado.
        </p>
        <p className="about-item">
          Want to connect? There's plenty of ways! 
        </p>
      </div>
    )
  }
}
export default About
