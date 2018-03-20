import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import fontawesome from '@fortawesome/fontawesome'
import Header from '../components/Header'
import './index.css'
// import './font-awesome.css'

fontawesome.config = {
  familyPrefix: 'fa',
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Dan Beerman - Developer // Front End Engineer'
      meta={[
        { name: 'description', content: 'Dans Portfolio Site' },
        {
          name: 'keywords',
          content: 'porfolio, developer, engineer, software, coder',
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