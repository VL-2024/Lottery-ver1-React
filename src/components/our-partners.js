import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Logos9 from './logos9'
import './our-partners.css'

const OurPartners = (props) => {
  return (
    <div className={`our-partners-container ${props.rootClassName} `}>
      <Logos9
        heading1={
          <Fragment>
            <span className="our-partners-text">Наши партнеры</span>
          </Fragment>
        }
        logo1Src="/Logo/logo_gb_uz-1500w.png"
        logo2Src="/Logo/logo_roel_invest-1500w.png"
        logo3Src="/Logo/logo_gb_uz-1500w.png"
        logo4Src="/Logo/logo_roel_invest-1500w.png"
        logo5Src="/Logo/logo_gb_uz-1500w.png"
      ></Logos9>
    </div>
  )
}

OurPartners.defaultProps = {
  rootClassName: '',
}

OurPartners.propTypes = {
  rootClassName: PropTypes.string,
}

export default OurPartners
