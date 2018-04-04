import React, { Component } from 'react'
import Link from 'gatsby-link'
import * as FaIconPack from 'react-icons/lib/fa'
import SocialCloud from '../assets/social-cloud.png'
import SmartTrak from '../assets/smart-trak.png'
import MapIt from '../assets/mapit.png'
import Jo from '../assets/joweb.jpg'
import CoUS from '../assets/cous.jpg'
import Clima from '../assets/climastatus.gif'
import Modal from 'react-responsive-modal'

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
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <img src={Clima} className="thumb" onClick={this.onOpenModal1} />

          <Modal open={modal1} onClose={this.onCloseModal1} little>
            <div className="text">
              <h3>ClimaStatus</h3>
              <p>
                <strong>IoT Sensor: Temp., Pressure, Humidity</strong>
                Dashboard App. AWS Server. Registered Personal Weather Station.
              </p>
              <p>
                React. Netlify. Chart.js. AWS EC2. Express + Node. Raspberry Pi.
                MongoDB. Python. HTML. CSS. Javasctipt.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://climastatus.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img
            src={SocialCloud}
            className="thumb"
            onClick={this.onOpenModal2}
          />

          <Modal open={modal2} onClose={this.onCloseModal2} little>
            <div className="text">
              <h3>Social Cloud</h3>
              <p>
                <strong>Visualize live Twitter trends. </strong>
                Web application + Chrome Extension allows the user to view
                trends geographic location.
              </p>
              <p>
                React. D3 + react-cloud. Express + Node. Twitter Trends API.
                PostgreSQL. HTML. CSS. Javasctipt.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://social-cloud-trends.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo App <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://chrome.google.com/webstore/detail/social-cloud/oiajhngngfjeolkboffbefmegjkoannk?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chrome Extension <FaIconPack.FaChrome size={15} />
                    </a>
                  </button>
                </li>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://github.com/SocialIssuesWordCloud/Social-Cloud-Frontend/blob/master/Readme.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <FaIconPack.FaGithub size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
            onClick={this.onOpenSecondModal} />
          </Modal>
        </div>

        <div className="item">
          <img src={SmartTrak} className="thumb" onClick={this.onOpenModal3} />

          <Modal open={modal3} onClose={this.onCloseModal3} little>
            <div className="text">
              <h3>SMART Trak</h3>
              <p>Create an account and meet your goals.</p>
              <p>
                OAuth 2.0 Okta API. React. Express + Node. Knex. PostgreSQL.
              </p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://smart-trak.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo App <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://github.com/lebeerman/smart-track/blob/master/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <FaIconPack.FaGithub size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={MapIt} className="thumb" onClick={this.onOpenModal4} />

          <Modal open={modal4} onClose={this.onCloseModal4} little>
            <div className="text">
              <h3>MapIt</h3>
              <p>
                <strong>Map your places. Coordinate your team. </strong>
              </p>
              <p>Express + Node. Leaflet + Mapbox. PostgreSQL. JS.</p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a
                      href="http://p2-web-app.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo App <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://github.com/mthorry/restaurant-tracker-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code <FaIconPack.FaGithub size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={Jo} className="thumb" onClick={this.onOpenModal5} />

          <Modal open={modal5} onClose={this.onCloseModal5} little>
            <div className="text">
              <h3>Joanna Hoge - Fine Artist</h3>
              <p>
                <strong>Portfolio Site with Wordpress CMS. </strong>
              </p>
              <p>Wordpress CMS. Javascript. CSS. HTML.</p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a
                      href="http://www.joannahoge.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>

        <div className="item">
          <img src={CoUS} className="thumb" onClick={this.onOpenModal6} />

          <Modal open={modal6} onClose={this.onCloseModal6} little>
            <div className="text">
              <h3>Captains of US</h3>
              <p>
                <strong>Personal adventure blog. </strong>
                Document explorations in the wild. Collaborative project:
                Jonathan Hinderliter.
              </p>
              <p>Marketing. Design. Identity. Copy. Photography. Editorial.</p>
              <ul>
                <li>
                  <button className="button i-hov">
                    <a
                      href="https://www.captainsofus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site <FaIconPack.FaExternalLink size={15} />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Projects
