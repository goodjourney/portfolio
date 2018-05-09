import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-29961590-1')


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='DBeerman - Developer // Front End Engineer'
      meta={[
        { name: 'description', content: 'Dans Portfolio Site' },
        {
          name: 'keywords',
          content: 'porfolio, developer, engineer, software, code',
        },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper