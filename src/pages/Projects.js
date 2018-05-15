import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as FaIconPack from 'react-icons/lib/fa'
import FSsocial from '../assets/full-social-cloud.gif'
import FSsmart from '../assets/full-smart-trak.gif'
import FSmapit from '../assets/full-map-it.gif'
import FSjohog from '../assets/full-jo-fine-art.gif'
import FScous from '../assets/full-coUS.gif'
import FSclima from '../assets/full-climastatus.gif'
import Modal from 'react-responsive-modal'
import {
  OutboundLink
} from 'gatsby-plugin-google-analytics'

import Lclima from "../assets/logo-clima.png";
import Lcous from "../assets/logo-cous.png";
import Ljohog from "../assets/logo-JH.png";
import Lsmart from "../assets/logo-smart.png";
import Lmapit from "../assets/logo-mapit.png";
import Lscloud from "../assets/logo-scloud.png";

class Projects extends React.Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
  }

  onOpenModal1 = () => {
    this.setState({ modal1: true })
  }

  onCloseModal1 = () => {
    this.setState({ modal1: false })
  }

  onOpenModal2 = () => {
    this.setState({ modal2: true })
  }

  onCloseModal2 = () => {
    this.setState({ modal2: false })
  }

  onOpenModal3 = () => {
    this.setState({ modal3: true })
  }

  onCloseModal3 = () => {
    this.setState({ modal3: false })
  }

  onOpenModal4 = () => {
    this.setState({ modal4: true })
  }

  onCloseModal4 = () => {
    this.setState({ modal4: false })
  }

  onOpenModal5 = () => {
    this.setState({ modal5: true })
  }

  onCloseModal5 = () => {
    this.setState({ modal5: false })
  }

  onOpenModal6 = () => {
    this.setState({ modal6: true })
  }

  onCloseModal6 = () => {
    this.setState({ modal6: false })
  }

  render() {
    const { modal1, modal2, modal3, modal4, modal5, modal6 } = this.state
    return <div className="Projects section flex-container">
        <div className="item">
          <img src={FSclima} className="thumb" onClick={this.onOpenModal1} />
          <div className="overlay">
            <img src={Lclima} rel="ClimaStatus" height={200} />
          </div>
          <Modal open={modal1} onClose={this.onCloseModal1} little>
            <div className="text">
              <h1>ClimaStatus</h1>
              <strong>
                Personal IoT Sensor: Temp, Pressure, and Humidity
              </strong>
              <p>
                Project includes: a responsive Dashboard App, AWS Elastic
                Cloud Compute Server, and Registered Personal Weather
                Station.
              </p>
              <p>
                <strong>Technologies: </strong> AWS EC2. React. Netlify. Chart.js.Express + Node. Raspberry Pi. MongoDB. Python. HTML. CSS. Javasctipt.
              </p>
              <p>
                Watch the presentation: <a href="https://youtu.be/OQbGKI5RDhY" target="_blank" rel="noopener noreferrer">
                  HERE <FaIconPack.FaYoutube size={25} />
                </a>
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <OutboundLink href="http://climastatus.netlify.com" target="_blank" rel="noopener noreferrer">
                      Live Site <FaIconPack.FaExternalLink size={15} />
                    </OutboundLink>
                  </button> <button className="button i-hov">
                    <OutboundLink href="https://github.com/lebeerman/ClimaStatus" target="_blank" rel="noopener noreferrer">
                      Code <FaIconPack.FaGithub size={15} />
                    </OutboundLink>
                  </button> <button className="button i-hov">
                    <OutboundLink href="https://www.wunderground.com/personal-weather-station/dashboard?ID=KCODENVE579" target="_blank" rel="noopener noreferrer">
                      Weather Station <FaIconPack.FaSunO size={15} />
                    </OutboundLink>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={FSsocial} className="thumb" onClick={this.onOpenModal2} />
          <div className="overlay">
            <img src={Lscloud} rel="ClimaStatus" height={200} />
          </div>
          <Modal open={modal2} onClose={this.onCloseModal2} little>
            <div className="text">
              <h1>Social Cloud</h1>
              <strong>Visualize live Twitter trends!</strong>
              <p>
                Web application + Chrome Extension allows users to view
                trends by geographic location.
              </p>
              <p>
                <strong>Technologies: </strong>React. D3 + react-cloud. Express + Node. Twitter Trends API. PostgreSQL. HTML. CSS. Javascript.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <OutboundLink href="https://social-cloud-trends.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                      Demo App <FaIconPack.FaExternalLink size={15} />
                    </OutboundLink>
                  </button> <button className="button i-hov">
                    <OutboundLink href="https://chrome.google.com/webstore/detail/social-cloud/oiajhngngfjeolkboffbefmegjkoannk?hl=en" target="_blank" rel="noopener noreferrer">
                      Chrome Extension <FaIconPack.FaChrome size={15} />
                    </OutboundLink>
                  </button> <button className="button i-hov">
                    <OutboundLink href="https://github.com/SocialIssuesWordCloud/Social-Cloud-Frontend/blob/master/Readme.md" target="_blank" rel="noopener noreferrer">
                      Code <FaIconPack.FaGithub size={15} />
                    </OutboundLink>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={FSsmart} className="thumb" onClick={this.onOpenModal3} />
          <div className="overlay">
            <img src={Lsmart} rel="Smart-Trak" height={200} />
          </div>
          <Modal open={modal3} onClose={this.onCloseModal3} little>
            <div className="text">
              <h1>SMART Trak</h1>
              <strong>Set and meet your S.M.A.R.T. Goals</strong>
              <p>
                <strong>Technologies: </strong>OAuth 2.0 Okta API. React. Express + Node. Knex. PostgreSQL.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <OutboundLink href="https://smart-trak.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                      Demo App <FaIconPack.FaExternalLink size={15} />
                    </OutboundLink>
                  </button> <button className="button i-hov">
                    <OutboundLink href="https://github.com/lebeerman/smart-track/blob/master/README.md" target="_blank" rel="noopener noreferrer">
                      Code <FaIconPack.FaGithub size={15} />
                    </OutboundLink>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={FSmapit} className="thumb" onClick={this.onOpenModal4} />
          <div className="overlay">
            <img src={Lmapit} rel="MapIt App" height={200} />
          </div>
          <Modal open={modal4} onClose={this.onCloseModal4} little>
            <div className="text">
              <h1>MapIt</h1>
              <strong>Map your places. Coordinate your team. </strong>
              <p>
                <strong>Technologies: </strong>Express + Node. Leaflet + Mapbox. PostgreSQL. Vanilla JS.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <OutboundLink href="http://p2-web-app.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                      Demo App <FaIconPack.FaExternalLink size={15} />
                    </OutboundLink>
                  </button> <button className="button i-hov">
                    <OutboundLink href="https://github.com/lebeerman/Map-It" target="_blank" rel="noopener noreferrer">
                      Code <FaIconPack.FaGithub size={15} />
                    </OutboundLink>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={FSjohog} className="thumb" onClick={this.onOpenModal5} />
          <div className="overlay">
            <img src={Ljohog} rel="Jo Hoge" height={200} />
          </div>
          <Modal open={modal5} onClose={this.onCloseModal5} little>
            <div className="text">
              <h1>Joanna Hoge - Fine Artist</h1>
              <strong>Portfolio Site utilizing Wordpress CMS. </strong>
              <p>
                I turned the completed site over to the artist to maintain.
                Her site is responsive, secure, includes analytics and easy
                to maintain.
              </p>
              <p>
                <strong>Technologies: </strong>Wordpress CMS. Javascript. CSS. HTML.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a href="http://www.joannahoge.com/" target="_blank" rel="noopener noreferrer">
                      Live Site <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={FScous} className="thumb" onClick={this.onOpenModal6} />
          <div className="overlay">
            <img src={Lcous} rel="CoUS" height={200} />
          </div>
          <Modal open={modal6} onClose={this.onCloseModal6} little>
            <div className="text">
              <h1>Captains of US</h1>
              <strong>Collaborative Adventure Blog. </strong>
              <p>
                I hiked from Mexico to Canada on the PCT. This blog captures
                that and other adventures in the wild.
              </p>
              <p>
                <strong>Project Roles: </strong> Marketing. Design. Identity. Copy. Photography. Editorial.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a href="https://www.captainsofus.com/" target="_blank" rel="noopener noreferrer">
                      Live Site <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
  }
}

export default Projects
