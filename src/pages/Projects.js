import React, { Component } from 'react'
import Link from 'gatsby-link'
import FaIconPack from 'react-icons/lib/fa' // ICONS
import SocialCloud from '../assets/social-cloud.png'
import SmartTrak from '../assets/smart-trak.png'
import MapIt from '../assets/mapit.png'
import Jo from '../assets/joweb.jpg'
import CoUS from '../assets/cous.jpg'

class Projects extends React.Component {
  state = {
    open: false
  };

  render() {
    return <div className="Projects section flex-container">
        <div className="item">
          <img src={CoUS} className="thumb" />
          <div className="overlay">
            <div className="text">
              <h3>ClimaStatus</h3>
              <p>
                <strong>IoT Sensing: Temp., Pressure, Humidity</strong>
                
              </p>
              <p>
                Marketing. Design. Identity. Copy. Photography. Editorial.
              </p>
              <p>
                <a href="https://www.captainsofus.com/" target="_blank" rel="noopener noreferrer">
                  Live Site <i className="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={SocialCloud} className="thumb" />
          {/* <button className="btn btn-action" onClick={()=>this.onOpenModal}>
            Open
          </button> <a href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/custom-styling.js" target="_blank">
            See source code
          </a>
          <Modal open={open} onClose={this.onCloseModal} little classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
            <h2>Modal</h2>
          </Modal> */}
          <div className="overlay">
            <div className="text">
              <h3>Social Cloud</h3>
              <p>
                <strong>Visualize live Twitter trends. </strong>
                Web application + Chrome Extension allows the user to view trends geographic location. Collaborative effort utilizing an Agile workflow built in a few days.
              </p>
              <p>
                React. D3 + react-cloud. Express + Node. Twitter Trends API.
                PostgreSQL. HTML. CSS. Javasctipt.
              </p>
              <p>
                <a href="https://social-cloud-trends.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                  Demo App<i className="fa fa-external-link" />
                </a>
              </p>
              <p>
                <a href="https://chrome.google.com/webstore/detail/social-cloud/oiajhngngfjeolkboffbefmegjkoannk?hl=en" target="_blank" rel="noopener noreferrer">
                  Chrome Extension<i className="fa fa-external-link" />
                </a>
              </p>
              <p>
                <a href="https://github.com/SocialIssuesWordCloud/Social-Cloud-Frontend/blob/master/Readme.md" target="_blank" rel="noopener noreferrer">
                  Code <i className="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={SmartTrak} className="thumb" />
          <div className="overlay">
            <div className="text">
              <h3>SMART Trak</h3>
              <p>
                <strong>Track SMART Goals. </strong>
                Set and keep your goals when you create an account and use this app!
              </p>
              <p>
                OAuth 2.0 Okta API. React. Express + Node. Knex. PostgreSQL.
              </p>
              <p>
                <a href="https://smart-trak.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                  Demo App <i className="fa fa-external-link" />
                </a>
              </p>
              <p>
                <a href="https://github.com/lebeerman/smart-track/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                  Code <i className="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={MapIt} className="thumb" />
          <div className="overlay">
            <div className="text">
              <h3>MapIt</h3>
              <p>
                <strong>Map your places. Coordinate your team. </strong>
                Ever struggle to get your team to show up to the right place? Not know where to park? Camping spots?
              </p>
              <p>
                Express + Node. Leaflet + Mapbox. PostgreSQL. HTML. CSS.
                Javasctipt.
              </p>
              <p>
                <a href="http://p2-web-app.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                  Demo App <i className="fa fa-external-link" />
                </a>
              </p>
              <p>
                <a href="https://github.com/mthorry/restaurant-tracker-demo" target="_blank" rel="noopener noreferrer">
                  Code <i className="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={Jo} className="thumb" />
          <div className="overlay">
            <div className="text">
              <h3>Joanna Hoge - Fine Artist</h3>
              <p>
                <strong>Portfolio Site with Wordpress CMS. </strong>
                Fully maintained by Joanna after working together to meet the design requested.
              </p>
              <p>Wordpress CMS. PHP. Javascript. CSS. HTML.</p>
              <p>
                <a href="http://www.joannahoge.com/" target="_blank" rel="noopener noreferrer">
                  Live Site <i className="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={CoUS} className="thumb" />
          <div className="overlay">
            <div className="text">
              <h3>Captains of US</h3>
              <p>
                <strong>Personal adventure blog. </strong>
                Document explorations in the wild. Collaborative project: Jonathan Hinderliter.
              </p>
              <p>
                Marketing. Design. Identity. Copy. Photography. Editorial.
              </p>
              <p>
                <a href="https://www.captainsofus.com/" target="_blank" rel="noopener noreferrer">
                  Live Site <i className="fa fa-github" aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
  }
}

export default Projects
